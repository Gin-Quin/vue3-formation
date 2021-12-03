/**
 * @return an error message if user's name is not valid
 */
export const validateUserName = (name: string): string | undefined => {
  if (!name) return "Le nom doit être non-vide";
  if (/^[a-zA-Z]/.test(name) == false)
    return "Le premier caractère doit être une lettre";
};

export const validateCgu = (accepted: boolean): string | undefined => {
  if (!accepted) return "Vous devez accepter les CGU";
};
