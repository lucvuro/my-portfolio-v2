import { NesContainer } from "@/components";
import { PROJECTS } from "@/constants/home";
import ProjectItem from "@/features/pages/home/components/Projects/ProjectItem";

const Projects = () => {
  return (
    <NesContainer withTitle title="Projects">
      <div className="flex flex-col gap-10">
        {PROJECTS.map((project) => {
          return (
            <ProjectItem
              key={project.githubLink}
              title={project.title}
              description={project.description}
              coverImg={project.coverImg}
              githubLink={project.githubLink}
              demoLink={project.demoLink}
            />
          );
        })}
      </div>
    </NesContainer>
  );
};

export default Projects;
