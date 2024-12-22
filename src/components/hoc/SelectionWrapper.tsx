import { motion } from "framer-motion";
import { staggerContainer } from "../utils/motion";
type StarWrapperProps = {
  idName?: string;
};
const StarWrapper = <T extends object>(
  Component: React.ComponentType<T>,
  idName?: string
): React.FC<T & StarWrapperProps> => {
  return function WrappedComponent(props: T) {
    return (
      <motion.section
        variants={staggerContainer()}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.25 }}
        className={`max-w-7xl mx-auto relative z-0`}>
        <span className='hash-span' id={idName}>
          &nbsp;
        </span>

        <Component {...props} />
      </motion.section>
    );
  };
};

export default StarWrapper;
