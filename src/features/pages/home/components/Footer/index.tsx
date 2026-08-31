import { Text } from "@/components/retroui/Text";

const Footer = () => {
  return (
    <footer className="mt-10 border-t-2 border-border py-6 text-center">
      {/* The heart is the one deliberate splash of color in a monochrome UI. */}
      <Text className="text-xs text-muted-foreground sm:text-sm">
        Vibe coded with Claude ❤️
      </Text>
    </footer>
  );
};

export default Footer;
