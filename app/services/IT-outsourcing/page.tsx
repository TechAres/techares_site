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
import { imageIt, itCategories, ItHeading, itIndustry, itSectionData, ItServiceHeading, itServices, ItServices, ItSolutions, itTech, WhatMakesIt } from '@/data/IT-outsourcing';

export const metadata: Metadata = {
    title: 'Techlab | IT Outsourcing',
    description: 'Premier IT Outsourcing Company',
};

export default function Page() {
    const { sectionHeading, description, images } = ItServices
    const { sectionHeading2, aboutUsPoints } = WhatMakesIt
    const { services } = itSectionData
    const { cards } = itServices
    return (
        <>
            <MainHeader version="1" />
            <HeroSection
                title="IT Outsourcing"
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
            <HeadingComponent sectionHeading={ItHeading} />
            <BlockchainDevelopmentServices sectionHeading={sectionHeading} description={description} images={images} />
            <HeadingComponent sectionHeading={ItServiceHeading} />
            <ServiceSolutionSection cards={cards} className='h-64 text-justify' />
            <Tabs blockChainSolutions={ItSolutions} categories={itCategories} />
            <BlueTagBanner sectionHeading={itTech} imageLayout={imageIt} />
            <IndustrySections services={services} sectionHeading={itIndustry} />
            <WhatMakes sectionHeading2={sectionHeading2} aboutUsPoints={aboutUsPoints} images={images} />
            <Footer />
        </>
    );
}
