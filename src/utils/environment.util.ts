const getEnv = <T>(name: string, defaultValue: T) => {
  const value = process.env[name];
  if (!value) return defaultValue;
  return value as unknown as T;
};

export const getEnvString = (name: string, defaultValue: string = ''): string => {
  return getEnv<string>(name, defaultValue);
};

export default getEnv;
