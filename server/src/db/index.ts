import { mkdirSync } from "node:fs";
import { dirname } from "node:path";
import Database from "better-sqlite3";
import { drizzle } from "drizzle-orm/better-sqlite3";
import * as schema from "./schema";

// Configurable so tests can point at an in-memory DB (":memory:") for isolation.
const DB_FILE = process.env.DB_FILE ?? "./data/app.db";

// better-sqlite3 creates the file but not its parent directory.
// (":memory:" has no directory component — mkdir of "." is a harmless no-op.)
if (DB_FILE !== ":memory:") {
  mkdirSync(dirname(DB_FILE), { recursive: true });
}

const sqlite = new Database(DB_FILE);

// Enforce foreign keys (OFF by default in SQLite) — without this our
// onDelete: "cascade" silently does nothing.
sqlite.pragma("foreign_keys = ON");
// WAL mode: concurrent readers alongside a single writer.
sqlite.pragma("journal_mode = WAL");

export const db = drizzle(sqlite, { schema });
