export const validatePhoneNumber: (phone: string) => boolean = phone => {
  const regex =
    /^\+?(\d{1,3})?[-.\s]?\(?(\d{1,4})\)?[-.\s]?\d{3,4}[-.\s]?\d{4,9}$/;
  return regex.test(phone);
};
