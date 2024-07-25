'use client';

import type { Profile } from '@/shared/types/user.type';
import type React from 'react';
import {
  type ReactNode,
  createContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

type UserContext = {
  profile: Profile | null;
  setProfile: React.Dispatch<React.SetStateAction<Profile | null>>;
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
  layoutStyles: { isGrid: boolean };
  setLayoutStyles: React.Dispatch<React.SetStateAction<{ isGrid: boolean }>>;
};

export const UserContext = createContext<UserContext>({
  profile: null,
  setProfile: () => {
    throw new Error('Function not implemented.');
  },
  darkMode: false,
  setDarkMode: () => {
    throw new Error('Function not implemented.');
  },
  layoutStyles: { isGrid: true },
  setLayoutStyles: () => {
    throw new Error('Function Not implemented.');
  },
});

export const UserContextProvider = ({ children }: { children: ReactNode }) => {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [layoutStyles, setLayoutStyles] = useState({ isGrid: true });

  /* Theme Toggling Function */

  function setDark() {
    document.querySelector('body')?.classList.add('dark');
    setDarkMode(true);
    localStorage.setItem('dark', 'true');

    return;
  }

  function setLight() {
    document.querySelector('body')?.classList.remove('dark');
    localStorage.setItem('dark', 'false');
    setDarkMode(false);

    return;
  }

  useEffect(() => {
    /* Get Preferred Layout */
    function getPreferredLayout() {
      const layoutStyles = JSON.parse(
        localStorage.getItem('layoutStyles') ?? 'false'
      );

      if (layoutStyles) {
        setLayoutStyles(layoutStyles);
      }
    }

    /* Getting User Preferred Theme */
    function getTheme() {
      const dark = localStorage.getItem('dark');
      const isDarkPreferred = window.matchMedia(
        '(prefers-color-scheme: dark)'
      ).matches;

      if (!dark) {
        isDarkPreferred ? setDark() : setLight();
        return;
      }

      if (dark === 'true') {
        setDark();
        return;
      }

      setLight();
    }

    getTheme();
    getPreferredLayout();
  }, []);

  /* Theme Toggling Function */

  const context: UserContext = useMemo(
    () => ({
      profile,
      setProfile,
      darkMode,
      setDarkMode,
      layoutStyles,
      setLayoutStyles,
    }),
    [profile, darkMode, layoutStyles]
  );

  return (
    <UserContext.Provider value={context}>{children}</UserContext.Provider>
  );
};
