import { motion, AnimatePresence } from "motion/react";
import PropertyCard from "./PropertyCard";

const PropertiesGrid = ({ visibleProperties = [] }) => {
  return (
    <motion.div
      layout
      className="
        mt-10
        grid
        grid-cols-1
        gap-8
        sm:grid-cols-2
        lg:grid-cols-3
      "
    >
      <AnimatePresence mode="popLayout">
        {visibleProperties.map((property) => (
          <motion.div
            key={property.id}
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="min-w-0"
          >
            <PropertyCard property={property} />
          </motion.div>
        ))}
      </AnimatePresence>
    </motion.div>
  );
};

export default PropertiesGrid;

