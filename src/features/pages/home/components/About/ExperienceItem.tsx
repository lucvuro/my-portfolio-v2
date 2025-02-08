import { Text } from "@/components";
import type React from "react";

export type TExperienceItemProps = {
  title: string;
  subtitle: string;
  rightTitle: string;
};

const ExperienceItem: React.FC<TExperienceItemProps> = ({
  title,
  subtitle,
  rightTitle,
}) => {
  return (
    <div className="flex flex-col justify-between sm:flex-row sm:items-center">
      <div>
        <Text className="text-sm sm:text-lg">{title}</Text>
        <Text className="text-xs text-gray-400 sm:text-sm">{subtitle}</Text>
      </div>
      <div>
        <Text className="text-xs sm:text-sm">{rightTitle}</Text>
      </div>
    </div>
  );
};

export default ExperienceItem;
