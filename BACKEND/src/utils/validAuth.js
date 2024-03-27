export const validAuth = (user, isSchema, res) => {
  const { error } = isSchema.validate(user, {
    abortEarly: false,
  });
  if (error) {
    const errors = error.details.map((err) => err.message);
    return res.status(400).json({
      messages: errors,
    });
  }
};
