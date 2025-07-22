export const isValidIp = (ip: string) => {
  const ipRegex = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/;
  return ipRegex.test(ip);
};