import { motion } from "motion/react";

const FormRow = ({
  initial,
  animate,
  transition,
  exit,
  className,
  id,
  label,
  labelId,
  icon: Icon,
  children,
}) => {
  return (
    <motion.div
      key={id}
      initial={initial}
      animate={animate}
      transition={transition}
      exit={exit}
      className={className}
    >
      <label
        htmlFor={`auth-${labelId}`}
        className="mb-2 block text-xl font-medium"
      >
        {label}
      </label>

      <div className="relative">
        {Icon && (
            <Icon
              size={19}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-[#657267] scale-90 pl-6"
            />
        )}

        {children}
      </div>
    </motion.div>
  );
};

export default FormRow;
