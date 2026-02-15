import React from 'react';

const TimelineItem = ({ date, title, company, description, isLast }) => (
    <div className="relative flex gap-6 pb-12 last:pb-0">
        <div className="flex flex-col items-center">
            <div className="flex h-4 w-4 items-center justify-center rounded-full border border-cyan-500/50 bg-slate-900 shadow-[0_0_10px_rgba(34,211,238,0.3)]">
                <div className="h-2 w-2 rounded-full bg-cyan-400" />
            </div>
            {!isLast && <div className="h-full w-px bg-slate-700/50" />}
        </div>
        <div className="flex-1 space-y-2 pt-1">
            <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                <h3 className="text-lg font-semibold text-slate-100">{title}</h3>
                <span className="text-sm font-medium text-slate-400 font-mono">{date}</span>
            </div>
            <p className="text-md text-cyan-400">{company}</p>
            <p className="text-slate-400 leading-relaxed text-sm">{description}</p>
        </div>
    </div>
);

const Timeline = ({ items }) => {
    return (
        <div className="relative">
            {items.map((item, index) => (
                <TimelineItem
                    key={index}
                    {...item}
                    isLast={index === items.length - 1}
                />
            ))}
        </div>
    );
};

export default Timeline;
