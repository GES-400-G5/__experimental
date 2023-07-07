import Features from "../components/home/Features";
import Hero from "../components/home/Hero";
import Action from "../components/layout/wrappers/Action";

const Landing = () => {
  return (
    <Action>
      <Hero />
      <Features />
    </Action>
  );
};

export default Landing;
