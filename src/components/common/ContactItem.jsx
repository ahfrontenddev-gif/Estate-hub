import {motion} from "motion/react"
const ContactItem = ({ icon, title, text }) => {
  return (
    <motion.div
      whileHover={{ x: -3 }}
      className="flex gap-[1.2rem]"
    >
      <div className="mt-[0.2rem] shrink-0 text-[#b5c9a9]">{icon}</div>

      <div>
        <p className="mb-[0.4rem] text-[1.1rem] text-white/35">{title}</p>

        <p className="max-w-[23rem] break-words text-[1.3rem] leading-[1.8] text-white/65">
          {text}
        </p>
      </div>
    </motion.div>
  );
};

export default ContactItem