import Hero from "../components/buyingGuide/Hero";
import BuyingProcess from "../components/buyingGuide/BuyingProcess";
import Checklist from "../components/buyingGuide/Checklist";
import Final from "../components/buyingGuide/Final";

const BuyingGuide = () => {
  return (
    <main dir="rtl" className="overflow-hidden bg-[#f8f7f2] text-[#17271f]">
      <Hero />
      <BuyingProcess />
      <Checklist />
      <Final />
    </main>
  );
};

export default BuyingGuide;
