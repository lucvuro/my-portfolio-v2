import { NesContainer, Text } from "@/components";
import Badge from "@/components/Badge";
import { EXPERIENCES, HOBBIES, SKILLS } from "@/constants/home";
import ExperienceItem from "@/features/pages/home/components/About/ExperienceItem";

const About = () => {
  return (
    <NesContainer withTitle title="About">
      <Text className="text-justify text-xs sm:text-base">
        {`Hi there! I'm a passionate software engineer who sees technology as pure
        magic—it makes life easier and more exciting! That magic led me here,
        and now my mission is to share it with the world. I want every
        individual and business to harness its power because, honestly, what’s
        cooler than bringing a bit of tech magic into everything?`}
      </Text>

      <NesContainer className="mt-10" withTitle title="experience">
        <div className="flex flex-col gap-5">
          {Object.values(EXPERIENCES).map((exp) => {
            return (
              <ExperienceItem
                key={`${exp.title}-${exp.date}`}
                title={exp.title}
                subtitle={exp.position}
                rightTitle={exp.date}
              />
            );
          })}
        </div>
      </NesContainer>

      <NesContainer className="mt-10" withTitle title="skills">
        <div className="flex flex-row flex-wrap gap-5">
          {SKILLS.map((skill) => {
            return (
              <Badge
                key={skill.title}
                variant={skill.important ? "error" : "primary"}
              >
                {skill.title}
              </Badge>
            );
          })}
        </div>
      </NesContainer>

      <NesContainer className="mt-10" withTitle title="hobbies">
        <ul className="nes-list is-disc pl-4">
          {HOBBIES.map((hobby) => {
            return <li key={hobby}>{hobby}</li>;
          })}
        </ul>
      </NesContainer>
    </NesContainer>
  );
};

export default About;
