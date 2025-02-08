import { NesContainer, Text } from "@/components";
import { EXPERIENCES } from "@/constants/home";
import ExperienceItem from "@/features/pages/home/components/About/ExperienceItem";

const About = () => {
  return (
    <NesContainer withTitle title="About">
      <Text className="text-xs sm:text-base">
        Hi there! As a passionate software engineer, I strive to deliver the
        best experience for customers by building modern, scalable, and
        efficient solutions. With a deep love for cutting-edge technologies and
        a continuous drive for learning, I focus on crafting robust
        infrastructure and innovative solutions that empower businesses to
        thrive in the digital era.
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
    </NesContainer>
  );
};

export default About;
