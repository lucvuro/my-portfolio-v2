"use client";
import { AppConfig } from "@/configs/app";
import { DEFAULT_LOADING_VALUE, MENUS } from "@/constants/home";
import { Loading, Menu } from "@/features/pages/home/components";
import { isBrowser } from "@/libs/ssr";
import { useEffect, useState } from "react";

const HomePage = () => {
  const [loadingValue, setLoadingValue] = useState(DEFAULT_LOADING_VALUE);
  const [selectedMenu, setSelectedMenu] = useState(MENUS.ABOUT.value);

  const onChangeSelectedMenu = (newMenu: string) => {
    setSelectedMenu(newMenu);
  };

  useEffect(() => {
    if (isBrowser) {
      const interval = setInterval(() => {
        setLoadingValue((prev) => {
          if (prev >= AppConfig.MAX_LOADING_VALUE) {
            clearInterval(interval);
            return AppConfig.MAX_LOADING_VALUE;
          }
          return prev + 1;
        });
      }, 20);

      return () => clearInterval(interval);
    }
  }, []);

  return (
    <div className="container mx-auto">
      {loadingValue < AppConfig.MAX_LOADING_VALUE ? (
        <Loading value={loadingValue} />
      ) : (
        <div className="p-4">
          <Menu
            selectedMenu={selectedMenu}
            onChangeSelectedMenu={onChangeSelectedMenu}
          />
        </div>
      )}
    </div>
  );
};

export default HomePage;
