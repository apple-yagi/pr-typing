export const convertPressReleaseBody = (body: string) =>
  body
    .replace(/(<([^>]+)>)/gi, '')
    .replace(/\s+/g, '')
    .replace(/[Ａ-Ｚａ-ｚ０-９]/g, (s) =>
      String.fromCharCode(s.charCodeAt(0) - 0xfee0),
    );
