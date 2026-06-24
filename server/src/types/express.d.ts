// Augment Express's Request so requireAuth can attach the authenticated user
// and downstream handlers read req.user with full typing.
declare global {
  namespace Express {
    interface Request {
      user?: { id: number; email: string };
    }
  }
}

export {};
