import Hero from "../components/services/Hero";
import SecServices from "../components/services/SecServices";
import Final from "../components/services/Final";
import {services} from "../data/apiServices"

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const Services = () => {
  return (
    <main dir="rtl" className="overflow-hidden bg-[#f2f1e9] text-[#10251c] ">
      <Hero />
      <SecServices
        containerVariants={containerVariants}
        itemVariants={itemVariants}
        services={services}
      />
      <Final />
    </main>
  );
};

export default Services;
