export function get(key: string): Promise<object | undefined | string> {
  return new Promise((resolve, reject) => {
    try {
      const result = localStorage.getItem(key);

      resolve(result ? JSON.parse(result) : undefined);
    } catch (err) {
      reject(err);
    }
  });
}

export function set(key: string, payload: any): Promise<boolean> {
  return new Promise((resolve, reject) => {
    try {
      localStorage.setItem(key, JSON.stringify(payload));
      resolve(true);
    } catch (err) {
      reject(err);
    }
  });
}
