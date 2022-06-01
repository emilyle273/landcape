export const isBrowser = typeof window !== 'undefined';

export const getLocalStorage = (key: string) => {
  return isBrowser && window.localStorage.getItem(key) !== 'undefined'
    ? JSON.parse(window.localStorage.getItem(key) as string) || {}
    : {};
};

export const setLocalStorage = (
  key: string,
  data: { [key: string]: any } | string
) => {
  isBrowser &&
    window.localStorage &&
    window.localStorage.setItem(key, JSON.stringify(data));
};

export const deleteLocalStorage = (key: string) => {
  isBrowser && window.localStorage && window.localStorage.removeItem(key);
};
