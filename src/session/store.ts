import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { IUserSession } from "../types";
import { useState, useEffect } from "react";

export const sessionStore = create<IUserSession>()(
  persist(
    (set) => ({
      id: "",
      setId: (id) => set({ id }),
    }),
    {
      name: "Cs-resourcify-instance-on-browser-session",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export const useStore = <T, F>(store: (callback: (state: T) => unknown) => unknown, callback: (state: T) => F) => {
  const result = store(callback) as F;
  const [data, setData] = useState<F>();

  useEffect(() => {
    setData(result);
  }, [result]);

  return data;
};
