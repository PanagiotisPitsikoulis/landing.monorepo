import {
  LandingSection,
  LandingSectionProps,
  ThemeSwitch,
} from "@repo/ui/components";
import { Button } from "@repo/ui/nextui";

const featuredSectionProps: LandingSectionProps = {
  animatedWrapperProps: {
    animatedWrapperPropsText: {
      triggerOnView: true,
      right: 40,
      duration: 0.5,
    },
  },
  orientation: "left",
  contentBottom: true,
  landingTextProps: {
    title: "A World of Movies Awaits",
    subtitle:
      "From blockbuster hits to indie gems, CinemaNow offers a wide selection to cater to every taste and mood.",
    size: "md",
  },
  content: <>Yooo</>,
};

export default function Home() {
  return (
    <main>
      <Button>Hello Landing.UI</Button>
      <LandingSection {...featuredSectionProps}></LandingSection>
      <ThemeSwitch />
    </main>
  );
}
