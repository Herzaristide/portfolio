import "./HomePage.css";

import { motion } from "framer-motion";
import { FormattedMessage } from "react-intl";

const HomePage = () => {
  return (
    <motion.div
      className="homepage"
      id="home"
      initial={{ y: 300, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -300, opacity: 0 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
    >
      <p>Aristide Pichereau</p>
      <p>
        <FormattedMessage id="home_job" />
      </p>
    </motion.div>
  );
};

export default HomePage;
