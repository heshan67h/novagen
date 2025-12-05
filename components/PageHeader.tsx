'use client';
import React from 'react';

interface PageHeaderProps {
    title: string;
    subtitle?: string;
    description?: string;
    backgroundImage?: string;
    gradient?: string;
    breadcrumbs?: { label: string; href: string }[];
}

const PageHeader: React.FC<PageHeaderProps> = ({
    title,
    subtitle,
    description,
    backgroundImage,
    gradient = 'linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(6, 182, 212, 0.1) 100%)',
    breadcrumbs
}) => {
    return (
        <section className="relative overflow-hidden pt-32 pb-20" style={{
            background: backgroundImage
                ? `url(${backgroundImage})`
                : gradient,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        }}>
            {/* Overlay */}
            {backgroundImage && (
                <div className="absolute inset-0 bg-gradient-to-br from-[#0a0f23]/90 to-[#141a2e]/90 z-0"></div>
            )}

            {/* Animated Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[20%] right-[10%] w-[400px] h-[400px] bg-gradient-to-br from-blue-600/20 via-cyan-500/15 to-transparent rounded-full blur-[100px] animate-pulse" />
                <div className="absolute bottom-[10%] left-[10%] w-[350px] h-[350px] bg-gradient-to-tr from-purple-600/20 via-violet-500/15 to-transparent rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                {/* Breadcrumbs */}
                {breadcrumbs && breadcrumbs.length > 0 && (
                    <nav className="flex items-center gap-2 text-sm mb-6">
                        {breadcrumbs.map((crumb, index) => (
                            <React.Fragment key={index}>
                                <a
                                    href={crumb.href}
                                    className="text-gray-400 hover:text-white transition-colors"
                                >
                                    {crumb.label}
                                </a>
                                {index < breadcrumbs.length - 1 && (
                                    <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                    </svg>
                                )}
                            </React.Fragment>
                        ))}
                    </nav>
                )}

                {/* Title Section */}
                <div className="text-center max-w-4xl mx-auto">
                    {subtitle && (
                        <div className="inline-block mb-4">
                            <span className="px-4 py-2 bg-blue-600/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-semibold tracking-wide">
                                {subtitle}
                            </span>
                        </div>
                    )}

                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
                        {title}
                    </h1>

                    {description && (
                        <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
                            {description}
                        </p>
                    )}
                </div>
            </div>
        </section>
    );
};

export default PageHeader;
