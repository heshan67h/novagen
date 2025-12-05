'use client';
import React from 'react';

interface SectionTitleProps {
    title: string;
    subtitle?: string;
    description?: string;
    align?: 'left' | 'center' | 'right';
    gradient?: boolean;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
    title,
    subtitle,
    description,
    align = 'center',
    gradient = true
}) => {
    const alignmentClass = align === 'left' ? 'text-left' : align === 'right' ? 'text-right' : 'text-center';
    const marginClass = align === 'center' ? 'mx-auto' : '';

    return (
        <div className={`mb-12 ${alignmentClass}`}>
            {subtitle && (
                <div className={`inline-block mb-4 ${align === 'center' ? '' : ''}`}>
                    <span className="px-4 py-2 bg-purple-600/10 border border-purple-500/20 rounded-full text-purple-400 text-sm font-semibold tracking-wide">
                        {subtitle}
                    </span>
                </div>
            )}

            <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${marginClass} max-w-4xl`}>
                {gradient ? (
                    <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                        {title}
                    </span>
                ) : (
                    <span className="text-white">{title}</span>
                )}
            </h2>

            {description && (
                <p className={`text-lg text-gray-400 ${marginClass} max-w-3xl leading-relaxed`}>
                    {description}
                </p>
            )}
        </div>
    );
};

export default SectionTitle;
