import { Text } from "@/components/retroui/Text";
import type React from "react";

export type TExperienceRole = {
  position: string;
  /** e.g. "Full-time", "Internship" */
  employmentType?: string;
  date: string;
};

export type TExperienceItemProps = {
  title: string;
  /** Total span at the company, shown when it holds more than one role. */
  period?: string;
  roles: TExperienceRole[];
  description?: React.ReactNode;
};

const ExperienceItem: React.FC<TExperienceItemProps> = ({
  title,
  period,
  roles,
  description,
}) => {
  const [singleRole] = roles;

  // One role: keep the compact two-column layout.
  if (roles.length === 1 && singleRole) {
    return (
      <div className="flex flex-col justify-between sm:flex-row sm:items-center">
        <div>
          <Text as="h5" className="font-head">
            {title}
          </Text>
          <Text className="text-base text-gray-600 sm:text-lg">
            {[singleRole.position, singleRole.employmentType]
              .filter(Boolean)
              .join(" · ")}
          </Text>
          <div className="mt-2">{description}</div>
        </div>
        <div>
          <Text as="p" className="text-base sm:text-lg">
            {singleRole.date}
          </Text>
        </div>
      </div>
    );
  }

  // Several roles at the same company: group them so the progression shows.
  return (
    <div>
      <div className="flex flex-col justify-between sm:flex-row sm:items-center">
        <Text as="h5" className="font-head">
          {title}
        </Text>
        {period && (
          <Text as="p" className="text-base sm:text-lg">
            {period}
          </Text>
        )}
      </div>
      <ul className="mt-3 space-y-3 border-l-2 border-gray-300 pl-4">
        {roles.map((role) => (
          <li
            key={`${role.position}-${role.date}`}
            className="flex flex-col justify-between sm:flex-row sm:items-center"
          >
            <Text className="text-base text-gray-600 sm:text-lg">
              {[role.position, role.employmentType].filter(Boolean).join(" · ")}
            </Text>
            <Text as="p" className="text-sm text-gray-600 sm:text-base">
              {role.date}
            </Text>
          </li>
        ))}
      </ul>
      <div className="mt-2">{description}</div>
    </div>
  );
};

export default ExperienceItem;
