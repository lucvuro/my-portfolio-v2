import RetroUIContainer from "@/components/RetroUIContainer";
import {
  CLIENT_PROJECTS,
  PROFESSIONAL_PROJECTS,
  PROJECTS,
} from "@/constants/home";
import ProjectItem from "@/features/pages/home/components/Projects/ProjectItem";

const Projects = () => {
  return (
    <>
      <RetroUIContainer
        withTitle
        title="Professional Projects"
        className="w-full"
      >
        <div className="flex flex-col gap-10">
          {PROFESSIONAL_PROJECTS.map((project) => {
            return (
              <ProjectItem
                key={project.title}
                title={project.title}
                description={project.description}
                coverImg={project.coverImg}
                techStacks={project.techStacks}
                websiteLink={project.liveLink}
              />
            );
          })}
        </div>
      </RetroUIContainer>
      <RetroUIContainer
        withTitle
        title="Client Projects"
        className="mt-12 w-full"
      >
        <div className="flex flex-col gap-10">
          {CLIENT_PROJECTS.map((project) => {
            return (
              <ProjectItem
                key={project.title}
                title={project.title}
                description={project.description}
                coverImg={project.coverImg}
                techStacks={project.techStacks}
                websiteLink={project.liveLink}
              />
            );
          })}
        </div>
      </RetroUIContainer>
      <RetroUIContainer withTitle title="Pet Projects" className="mt-12 w-full">
        <div className="flex flex-col gap-10">
          {PROJECTS.map((project) => {
            return (
              <ProjectItem
                key={project.title}
                title={project.title}
                description={project.description}
                coverImg={project.coverImg}
                githubLink={project.githubLink}
                demoLink={project.demoLink}
                techStacks={project.techStacks}
              />
            );
          })}
        </div>
      </RetroUIContainer>
    </>
  );
};

export default Projects;
