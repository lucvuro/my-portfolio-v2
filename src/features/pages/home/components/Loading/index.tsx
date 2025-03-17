import { Progress, Text } from "@/components";
import { AppConfig } from "@/configs/app";
import type React from "react";

type TLoadingProps = {
  value: number;
};

const Loading: React.FC<TLoadingProps> = ({ value }) => {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-6 px-4 sm:px-0">
      <Progress value={value} max={AppConfig.MAX_LOADING_VALUE} />
      <Text className="text-xl sm:text-3xl">Loading...</Text>
    </div>
  );
};

export default Loading;
