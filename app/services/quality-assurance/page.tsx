import { Footer } from '@/src/layout/footer/v1';
import { MainHeader } from '@/src/layout/header';
import Tabs from '@/src/sections/blockChain-solution';
import { BlockchainDevelopmentServices } from '@/src/sections/blockChain-service';
import { HeroSection } from '@/src/sections/hero/v3';
import { Metadata } from 'next';
import { BlueTagBanner } from '@/src/sections/cta/tag-banner';
import { IndustrySections } from '@/src/sections/service/Industry-service/Index';
import { WhatMakes } from '@/src/sections/what-makes';
import { ServiceSolutionSection } from '@/src/sections/services-solution';
import { HeadingComponent } from '@/src/sections/service-text';
import { qACategories, qAHeading, qAIndustry, qASectionData, QAServiceHeading, qAServices, QAServices, QASolutions, qATech, WhatMakesQa } from '@/data/quality-assurance';

export const metadata: Metadata = {
    title: 'Techlab | Quality Assurance and Testing ',
    description: 'Quality Assurance and Testing',
};

export default function Page() {
    const { sectionHeading, description, images } = QAServices
    const { sectionHeading2, aboutUsPoints } = WhatMakesQa
    const { services } = qASectionData
    const { cards } = qAServices
    return (
        <>
            <MainHeader version="1" />
            <HeroSection
                title="Quality Assurance and Testing"
                breadcrumbItems={[
                    {
                        label: 'Home',
                        href: '/',
                    },
                    {
                        label: 'Services',
                    },
                ]}
            />
            <HeadingComponent sectionHeading={qAHeading} />
            <BlockchainDevelopmentServices sectionHeading={sectionHeading} description={description} images={images} />
            <HeadingComponent sectionHeading={QAServiceHeading} />
            <ServiceSolutionSection cards={cards} className='h-64 text-justify' />
            <Tabs blockChainSolutions={QASolutions} categories={qACategories} />
            <BlueTagBanner sectionHeading={qATech} />
            <IndustrySections services={services} sectionHeading={qAIndustry} />
            <WhatMakes sectionHeading2={sectionHeading2} aboutUsPoints={aboutUsPoints} images={images} />
            <Footer />
        </>
    );
}
