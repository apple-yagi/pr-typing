export const mappingKey = (key: string, r: string) => {
  if (key.charCodeAt(0) === 58 && r.charCodeAt(0) === 65306) return true;

  if (key.charCodeAt(0) === 126 && r.charCodeAt(0) === 12316) return true;

  if (key.charCodeAt(0) === 44 && r.charCodeAt(0) === 12289) return true;

  if (key.charCodeAt(0) === 46 && r.charCodeAt(0) === 12290) return true;

  if (
    (key.charCodeAt(0) === 123 && r.charCodeAt(0) === 12304) ||
    (key.charCodeAt(0) === 125 && r.charCodeAt(0) === 12305)
  )
    return true;

  if (key.charCodeAt(0) === 123 && r.charCodeAt(0) === 8203) return true;

  if (key.charCodeAt(0) === 91 && r.charCodeAt(0) === 12300) return true;

  if (key.charCodeAt(0) === 93 && r.charCodeAt(0) === 12301) return true;

  return false;
};
