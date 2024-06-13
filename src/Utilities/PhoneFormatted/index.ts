export const phoneFormatted: (
  unformattedPhone: string,
) => string = unformattedPhone => {
  const firstChar: string = unformattedPhone[0];
  return firstChar === '0'
    ? `+855${unformattedPhone.slice(1)}`
    : `+855${unformattedPhone}`;
};
