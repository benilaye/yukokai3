export const STORAGE_KEYS = {
  MEMBERS: 'yukokai_members',
  PAYMENTS: 'yukokai_payments'
};

export const clearStorage = () => {
  localStorage.removeItem(STORAGE_KEYS.MEMBERS);
  localStorage.removeItem(STORAGE_KEYS.PAYMENTS);
};

export const getStorageItem = <T>(key: string, defaultValue: T): T => {
  const item = localStorage.getItem(key);
  return item ? JSON.parse(item) : defaultValue;
};

export const setStorageItem = <T>(key: string, value: T): void => {
  localStorage.setItem(key, JSON.stringify(value));
};