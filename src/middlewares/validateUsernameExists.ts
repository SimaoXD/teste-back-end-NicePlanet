const validateUsernameExists = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const { username } = req.body;
  if (!username) return next();

  const query: UsuarioResult = await client.query('SELECT * FROM "users" WHERE "username" = $1', [username]);
};
