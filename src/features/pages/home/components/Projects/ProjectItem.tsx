import { Button, NesContainer, Text } from "@/components";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import type React from "react";

export type TProjectItemProps = {
  title: string;
  description: string;
  coverImg: StaticImageData | string;
  githubLink: string;
  demoLink: string;
};

const ProjectItem: React.FC<TProjectItemProps> = ({
  title,
  description,
  coverImg,
  githubLink,
  demoLink,
}) => {
  return (
    <NesContainer>
      <div className="flex flex-col gap-4 sm:flex-row">
        <div className="flex-1">
          <div>
            <Text className="sm:text-2xl">{title}</Text>
            <Text className="text-xs sm:text-base">{description}</Text>
          </div>
          <div className="flex flex-row flex-wrap gap-4">
            <Link href={githubLink} target="_blank">
              <Button className="text-xs sm:text-base" variant="primary">
                Github
              </Button>
            </Link>
            <Link href={demoLink} target="_blank">
              <Button className="text-xs sm:text-base" variant="warning">
                Demo
              </Button>
            </Link>
          </div>
        </div>
        <div className="flex-1">
          <Image src={coverImg} alt="Stick Together" />
        </div>
      </div>
    </NesContainer>
  );
};

export default ProjectItem;
