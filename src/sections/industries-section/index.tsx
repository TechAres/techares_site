'use-client';

import React from 'react';
import Image from 'next/image';

export interface Industry {
    id: string;
    title: string;
    imageUrl: string;
}

interface IndustryCardProps {
    industry: Industry;
}

const IndustriesServe = ({ industry }: IndustryCardProps) => {
    return (
        <div className="flex flex-col items-center justify-center p-6 rounded-lg bg-purple-700/30 hover:bg-purple-700/50 transition-all duration-300 ease-in-out cursor-pointer backdrop-blur-sm border border-purple-500/50 group">
            <div className="w-16 h-16 mb-4 relative transition-transform duration-300 ease-in-out group-hover:scale-110">
                <Image
                    src={industry.imageUrl}
                    alt={industry.title}
                    fill
                    className="object-contain"
                />
            </div>
            <h3 className="text-white text-lg font-medium group-hover:text-purple-200 transition-colors text-center duration-300 ease-in-out">{industry.title}</h3>
        </div>
    );
};

interface IndustriesGridProps {
    industries: Industry[];
}

export default function IndustriesGrid({ industries }: IndustriesGridProps) {
    return (
        <section className="relative overflow-hidden rounded-5 bg-primary px-6 py-14">
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="mx-auto max-w-[490px] font-secondary text-xl font-bold capitalize leading-[1.25] text-white md:text-2xl">
                        Industries We Serve
                    </h2>
                </div>
                <div className="flex flex-wrap justify-center gap-6">
                    {industries.map((industry) => (
                        <div key={industry.id} className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4">
                            <IndustriesServe industry={industry} />
                        </div>
                    ))}
                </div>
            </div>
            <Image
                src="/assets/images/cta/pattern-1.png"
                alt="cta section bg pattern"
                width={520}
                height={316}
                className="pointer-events-none absolute -right-30px bottom-0 z-1 h-full animate-float-bob-x object-cover opacity-60"
                sizes="100vw"
            />
        </section>
    );
}
