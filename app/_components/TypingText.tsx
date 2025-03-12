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
        delay: 0.05, // Reduced for better responsiveness
        staggerChildren: 0.008, // Controls typing speed
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
        : null} {/* Prevents rendering issues when text is empty */}
    </motion.div>
  );
};

export default TypingText;
