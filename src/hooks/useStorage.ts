import { useCallback, useEffect, useState } from 'react';

import * as storage from '../db/storage';

export default function useStorage<T extends string | undefined | object>(
  key: string,
  initialValue: T,
): [T, (payload: T) => void] {
  const [value, setValue] = useState<T>(undefined as T);

  useEffect(() => {
    try {
      storage.get(key).then((result) => {
        setValue(result as T);
      });
    } catch (err) {
      console.warn(err);
      setValue(initialValue);
    }
  }, [key, initialValue]);

  const handleUpdate = useCallback(
    (payload: any) => {
      try {
        setValue(payload);
        storage.set(key, payload);
      } catch (err) {
        console.warn(err);
      }
    },
    [key],
  );

  return [value, handleUpdate];
}
