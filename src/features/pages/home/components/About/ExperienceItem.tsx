import { Text } from "@/components/retroui/Text";
import type React from "react";

export type TExperienceItemProps = {
  title: string;
  subtitle: string;
  rightTitle: string;
  description?: React.ReactNode;
};

const ExperienceItem: React.FC<TExperienceItemProps> = ({
  title,
  subtitle,
  rightTitle,
  description,
}) => {
  return (
    <div className="flex flex-col justify-between sm:flex-row sm:items-center">
      <div>
        <Text as="h5" className="font-head">
          {title}
        </Text>
        <Text className="text-base text-gray-600 sm:text-lg">{subtitle}</Text>
        <div className="mt-2">{description}</div>
      </div>
      <div>
        <Text as="p" className="text-base sm:text-lg">
          {rightTitle}
        </Text>
      </div>
    </div>
  );
};

export default ExperienceItem;
