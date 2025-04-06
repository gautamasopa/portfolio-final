import { motion } from "framer-motion";

interface TypingTextProps {
  text: string;
}

const TypingText: React.FC<TypingTextProps> = ({ text }) => {
  const typingEffect = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.05, 
        staggerChildren: 0.008, 
      },
    },
  };

  return (
    <motion.div
      variants={typingEffect}
      initial="hidden"
      animate="visible"
      className="text-white text-2xl font-mono"
    >
      {text
        ? text.split("").map((char, index) => (
            <motion.span
              key={index}
              variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
            >
              {char}
            </motion.span>
          ))
        : null} 
    </motion.div>
  );
};

export default TypingText;
