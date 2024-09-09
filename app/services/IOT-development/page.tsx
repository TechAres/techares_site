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
import { iotCategories, IotHeading, iotIndustry, iotSectionData, IotServiceHeading, iotServices, IotServices, IotSolutions, iotTech, WhatMakesIot } from '@/data/IOT-services';

export const metadata: Metadata = {
    title: 'Techlab | IOT - development',
    description: 'Premier IOT - development Company',
};

export default function Page() {
    const { sectionHeading, description, images } = IotServices
    const { sectionHeading2, aboutUsPoints } = WhatMakesIot
    const { services } = iotSectionData
    const { cards } = iotServices
    return (
        <>
            <MainHeader version="1" />
            <HeroSection
                title="IOT - development"
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
            <HeadingComponent sectionHeading={IotHeading} />
            <BlockchainDevelopmentServices sectionHeading={sectionHeading} description={description} images={images} />
            <HeadingComponent sectionHeading={IotServiceHeading} />
            <ServiceSolutionSection cards={cards} className='h-64 text-justify' />
            <Tabs blockChainSolutions={IotSolutions} categories={iotCategories} />
            <BlueTagBanner sectionHeading={iotTech} />
            <IndustrySections services={services} sectionHeading={iotIndustry} />
            <WhatMakes sectionHeading2={sectionHeading2} aboutUsPoints={aboutUsPoints} images={images} />
            <Footer />
        </>
    );
}
