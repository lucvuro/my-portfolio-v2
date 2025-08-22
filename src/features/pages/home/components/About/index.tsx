import { Badge } from "@/components/retroui/Badge";
import { RadioGroup } from "@/components/retroui/Radio";
import { Text } from "@/components/retroui/Text";
import RetroUIContainer from "@/components/RetroUIContainer";
import { EXPERIENCES, HOBBIES, SKILLS } from "@/constants/home";
import ExperienceItem from "@/features/pages/home/components/About/ExperienceItem";

const About = () => {
  return (
    <RetroUIContainer withTitle title="About" className="w-full">
      <Text className="text-xl">
        {`Hi there! I'm a passionate software engineer who sees technology as pure
        magic—it makes life easier and more exciting! That magic led me here,
        and now my mission is to share it with the world. I want every
        individual and business to harness its power because, honestly, what’s
        cooler than bringing a bit of tech magic into everything?`}
      </Text>

      <RetroUIContainer className="mt-4 w-full" withTitle title="experience">
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
      </RetroUIContainer>

      <RetroUIContainer className="mt-10 w-full" withTitle title="skills">
        <div className="flex flex-row flex-wrap gap-5">
          {SKILLS.map((skill) => {
            return (
              <Badge
                size="lg"
                variant={skill.important ? "solid" : "surface"}
                key={skill.title}
              >
                {skill.title}
              </Badge>
            );
          })}
        </div>
      </RetroUIContainer>

      <RetroUIContainer className="mt-10 w-full" withTitle title="hobbies">
        <RadioGroup className="pl-4">
          {HOBBIES.map((hobby) => {
            return (
              <div key={hobby} className="flex items-center space-x-2">
                <RadioGroup.Item
                  value={hobby}
                  variant="solid"
                  checked
                  disabled
                />
                <label htmlFor={hobby} className="m-0 text-lg">
                  {hobby}
                </label>
              </div>
            );
          })}
        </RadioGroup>
      </RetroUIContainer>
    </RetroUIContainer>
  );
};

export default About;
