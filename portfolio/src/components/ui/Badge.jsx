import React from 'react';

const Badge = ({ children, variant = 'default' }) => {
    const variants = {
        default: 'bg-slate-700/50 text-slate-300 border-slate-600/50',
        cyan: 'bg-cyan-900/20 text-cyan-300 border-cyan-500/30',
        purple: 'bg-purple-900/20 text-purple-300 border-purple-500/30',
    };

    return (
        <span
            className={`
        inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium 
        transition-colors duration-200 hover:bg-opacity-80
        ${variants[variant] || variants.default}
      `}
        >
            {children}
        </span>
    );
};

export default Badge;
