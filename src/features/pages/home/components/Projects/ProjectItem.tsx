import { Button } from "@/components/retroui/Button";
import { Text } from "@/components/retroui/Text";
import RetroUIContainer from "@/components/RetroUIContainer";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import type React from "react";

export type TProjectItemProps = {
  title: string;
  description: React.ReactNode;
  coverImg: StaticImageData | string;
  githubLink?: string;
  demoLink?: string;
  websiteLink?: string;
  techStacks: string[];
};

const ProjectItem: React.FC<TProjectItemProps> = ({
  title,
  description,
  coverImg,
  githubLink,
  demoLink,
  websiteLink,
  techStacks,
}) => {
  return (
    <RetroUIContainer className="w-full">
      <div className="flex flex-col gap-4 lg:flex-row lg:gap-6">
        <div className="flex-1 space-y-4">
          <div className="space-y-3">
            <Text as="h5" className="text-lg font-bold sm:text-xl lg:text-2xl">
              {title}
            </Text>
            <div className="text-sm leading-relaxed sm:text-base">
              {description}
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {techStacks.map((tech, index) => (
              <span
                key={index}
                className="rounded-full bg-gray-700 px-3 py-1 text-xs font-medium text-gray-200 sm:text-sm"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            {githubLink && (
              <Link href={githubLink} target="_blank">
                <Button className="text-sm sm:text-base">Github</Button>
              </Link>
            )}
            {demoLink && (
              <Link href={demoLink} target="_blank">
                <Button className="text-sm sm:text-base">Live Demo</Button>
              </Link>
            )}
            {websiteLink && (
              <Link href={websiteLink} target="_blank">
                <Button className="text-sm sm:text-base">Website</Button>
              </Link>
            )}
          </div>
        </div>

        <div className="flex-1 lg:max-w-lg">
          <div className="overflow-hidden rounded-lg border border-gray-700">
            <Image
              src={coverImg}
              alt={title}
              className="h-auto w-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </RetroUIContainer>
  );
};

export default ProjectItem;
