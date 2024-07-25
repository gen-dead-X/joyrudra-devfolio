export enum TOKEN {
  ACCESS_TOKEN = 'access_token',
  REFRESH_TOKEN = 'refresh_token',
}

export const regex = {
  emailRegex: /^[a-z0-9.-]+@[a-z0-9.-]+\.[a-z]{3,}$/,
  strongPassword: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
};
