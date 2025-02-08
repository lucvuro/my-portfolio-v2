"use client";
import { AppConfig } from "@/configs/app";
import { DEFAULT_LOADING_VALUE } from "@/constants/home";
import { Loading } from "@/features/pages/home/components";
import { isBrowser } from "@/libs/ssr";
import { useEffect, useState } from "react";

const HomePage = () => {
  const [loadingValue, setLoadingValue] = useState(DEFAULT_LOADING_VALUE);

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
        <></>
      )}
    </div>
  );
};

export default HomePage;
