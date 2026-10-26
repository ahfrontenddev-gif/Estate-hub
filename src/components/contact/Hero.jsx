import { motion } from "motion/react";
import Consultation from "./Consultation";
import SocialLinks from "./SocialLinks";
import ContactDetails from "./ContactDetails";
import Text from "./Text";

const Hero = ({ contactInfo, handleSubmit, handleChange, submitted, form }) => {
  return (
    <section className="relative isolate flex min-h-[780px] items-center overflow-hidden bg-[#10251c] py-20 sm:min-h-[820px] lg:min-h-[760px] lg:py-24">
      <div
        className="absolute inset-0 -z-20 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/properties/property-2.png')",
        }}
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-l from-[#07130e]/95 via-[#07130e]/80 to-[#07130e]/30" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#07130e]/70 via-transparent to-[#07130e]/20" />
      <div className="absolute -right-40 top-20 -z-10 h-80 w-80 rounded-full bg-[#8ca58b]/10 blur-[100px]" />

      <div className="mx-auto grid w-full max-w-[1600px] grid-cols-1 items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:px-16 xl:px-24">
        <motion.div
          initial={{ opacity: 0, x: 35 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-white order-1"
        >
          <Text />

          <ContactDetails contactInfo={contactInfo} />
          <SocialLinks />
        </motion.div>

        <Consultation
          form={form}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          submitted={submitted}
        />
      </div>
    </section>
  );
};

export default Hero;
