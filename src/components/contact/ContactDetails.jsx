import {motion} from "motion/react";

const ContactDetails = ({contactInfo}) => {
  return (
    <div className="mt-10 max-w-lg space-y-5">
      {contactInfo.map((item, index) => {
        const Icon = item.icon;

        const content = (
          <>
            <span className="flex h-12 w-12 p-2 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/[0.06] text-[#c6d4a5] transition-colors duration-300 group-hover:bg-[#c6d4a5] group-hover:text-[#10251c]">
              <Icon size={19} />
            </span>

            <span className="min-w-0">
              <span className="block text-xl text-white/45">{item.label}</span>
              <span className="mt-1 block text-2xl text-white/90 sm:text-base">
                {item.value}
              </span>
            </span>
          </>
        );

        return (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.25 + index * 0.12,
              duration: 0.5,
            }}
          >
            {item.href ? (
              <a
                href={item.href}
                className="group flex w-fit items-center gap-4"
              >
                {content}
              </a>
            ) : (
              <div className="group flex items-center gap-4">{content}</div>
            )}
          </motion.div>
        );
      })}
    </div>
  );
};

export default ContactDetails;
