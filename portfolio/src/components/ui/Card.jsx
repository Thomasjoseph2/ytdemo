import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ children, className = '', hoverEffect = true }) => {
    return (
        <motion.div
            whileHover={hoverEffect ? { y: -5 } : {}}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className={`
        relative overflow-hidden rounded-xl border border-slate-700/50 
        bg-slate-800/40 backdrop-blur-md p-6 shadow-lg 
        transition-colors duration-300 hover:border-cyan-400/30 hover:bg-slate-800/60
        ${className}
      `}
        >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 transition-opacity duration-300 hover:opacity-100" />
            <div className="relative z-10">{children}</div>
        </motion.div>
    );
};

export default Card;
