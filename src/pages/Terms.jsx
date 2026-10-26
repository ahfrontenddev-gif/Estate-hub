import { useEffect } from "react";
import Intro from "../components/terms/Intro";
import Main from "../components/terms/Main";
import Final from "../components/terms/Final";


const Terms = () => {
  useEffect(() => {
    document.title = "شرایط و قوانین | لوکسورا";
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <main dir="rtl" className="overflow-hidden bg-[#f8f7f1] text-[#172b22]">
      <Intro />
      <Main />
      <Final />
    </main>
  );
};

export default Terms;
