'use client'

// import React, { useEffect } from 'react';
// import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
// import { TypeWriterType } from '@/constants/typewriter';

// const TypewriterEffect = ({ text, duration }: TypeWriterType) => {
//   const count = useMotionValue(0);
//   const rounded = useTransform(count, (latest) => Math.floor(latest));
//   const displayText = useTransform(rounded, (latest) => text.slice(0, latest));

//   useEffect(() => {
//     const controls = animate(count, text.length, {
//       duration: duration,
//       ease: 'linear',
//     });
//     return controls.stop;
//   }, [text, duration]);

//   return (
//     <p>
//       <motion.span>{displayText}</motion.span>
//       <span className="blinking-cursor">|</span>
//     </p>
//   );
// };

// export default TypewriterEffect;
// import React from 'react';
// import { motion } from 'framer-motion';
// import { TypeWriterType } from '@/constants/typewriter';

// const TypewriterEffect = ({ text, wordDelay = 0.5 }: TypeWriterType) => {
//   const words = text.split(' ');

//   return (
//     <div>
//       {words.map((word, index) => (
//         <motion.span
//           key={index}
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: index * wordDelay, duration: wordDelay }}
//           style={{ display: 'inline-block', marginRight: '0.25rem' }}
//         >
//           {word}
//         </motion.span>
//       ))}
//     </div>
//   );
// };

// export default TypewriterEffect;

import React from 'react';
import { motion } from 'framer-motion';
import { TypeWriterType } from '@/constants/typewriter';

const TypewriterEffect = ({ text, wordDelay = 0.5, initialDelay = 0 }: TypeWriterType) => {
  const words = text.split(' ');

  return (
    <span>
      {words.map((word, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: initialDelay + index * wordDelay,
            duration: wordDelay,
          }}
          style={{ display: 'inline-block', marginRight: '0.25rem' }}
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
};

export default TypewriterEffect;


