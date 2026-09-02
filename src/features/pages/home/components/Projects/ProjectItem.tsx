import { Button } from "@/components/retroui/Button";
import { Text } from "@/components/retroui/Text";
import RetroUIContainer from "@/components/RetroUIContainer";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import type React from "react";

export type TProjectItemProps = {
  title: string;
  /** Company or client the work was done for. Omitted for personal projects. */
  org?: string;
  /** What you owned on the project, e.g. "Fullstack Engineer". */
  role?: string;
  /** e.g. "Apr 2023 - Present" */
  period?: string;
  description: React.ReactNode;
  /** Left out for internal tools that cannot be shown publicly. */
  coverImg?: StaticImageData | string;
  /** Shown in place of a cover image when the work is under NDA. */
  coverNote?: string;
  githubLink?: string;
  demoLink?: string;
  websiteLink?: string;
  appStoreLink?: string;
  googlePlayLink?: string;
  techStacks: string[];
};

const ProjectItem: React.FC<TProjectItemProps> = ({
  title,
  org,
  role,
  period,
  description,
  coverImg,
  coverNote,
  githubLink,
  demoLink,
  websiteLink,
  appStoreLink,
  googlePlayLink,
  techStacks,
}) => {
  const meta = [org, role, period].filter(Boolean);
  const hasLinks = Boolean(
    githubLink ?? demoLink ?? websiteLink ?? appStoreLink ?? googlePlayLink,
  );

  return (
    <RetroUIContainer className="w-full">
      <div className="flex flex-col gap-4 lg:flex-row lg:gap-6">
        <div className="flex-1 space-y-4">
          <div className="space-y-3">
            <Text as="h5" className="text-lg font-bold sm:text-xl lg:text-2xl">
              {title}
            </Text>
            {meta.length > 0 && (
              <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground sm:text-sm">
                {meta.join(" · ")}
              </p>
            )}
            <div className="text-sm leading-relaxed sm:text-base">
              {description}
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {techStacks.map((tech) => (
              <span
                key={tech}
                className="border-2 border-border bg-muted px-3 py-1 text-xs font-medium text-foreground sm:text-sm"
              >
                {tech}
              </span>
            ))}
          </div>

          {hasLinks && (
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
              {appStoreLink && (
                <Link href={appStoreLink} target="_blank">
                  <Button className="text-sm sm:text-base">App Store</Button>
                </Link>
              )}
              {googlePlayLink && (
                <Link href={googlePlayLink} target="_blank">
                  <Button className="text-sm sm:text-base">Google Play</Button>
                </Link>
              )}
            </div>
          )}
        </div>

        {(coverImg ?? coverNote) && (
          <div className="flex-1 lg:max-w-lg">
            {coverImg ? (
              <div className="overflow-hidden border-2 border-border shadow-sm">
                <Image
                  src={coverImg}
                  alt={title}
                  className="h-auto w-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
            ) : (
              <div className="flex h-full min-h-32 items-center justify-center border-2 border-dashed border-muted-foreground p-6">
                <p className="text-center text-xs italic text-muted-foreground sm:text-sm">
                  {coverNote}
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </RetroUIContainer>
  );
};

export default ProjectItem;
