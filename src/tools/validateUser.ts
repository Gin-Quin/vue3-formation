/**
 * @return an error message if user's name is not valid
 */
export const validateUser = (user: string): string | undefined => {
  // must not be empty
  if (!user) return "Empty name";

  // must start with a letter
  if (/^[a-zA-Z]/.test(user) == false) return "First character must be letter";
};
