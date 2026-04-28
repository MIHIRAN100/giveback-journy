import React from 'react';
import { motion } from 'framer-motion';

const ScrollReveal = ({ children, delay = 0, duration = 0.8, y = 30 }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: y }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
                duration: duration,
                delay: delay,
                ease: [0.22, 1, 0.36, 1]
            }}
        >
            {children}
        </motion.div>
    );
};

export default ScrollReveal;
