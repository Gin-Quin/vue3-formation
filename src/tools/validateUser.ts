/**
 * @return an error message if user's name is not valid
 */
export const validateUser = (user: string): string | undefined => {
  if (!user) return "Empty name";
  if (/^[a-zA-Z]/.test(user) == false) return "First character must be letter";
};
