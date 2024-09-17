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
import { CustomAppHeading, customAppIndustry, CustomAppServiceHeading, customAppServices, CustomAppServices, CustomAppServiceSectionData, customAppSolutions, customAppTech, imageCustomApp, softwareCategories, WhatMakesCustomApp } from '@/data/custom-app';

export const metadata: Metadata = {
    title: 'Techlab | Custom software development',
    description: 'Premier Custom software Development Company',
};

export default function Page() {
    const { sectionHeading, description, images } = CustomAppServices
    const { sectionHeading2, aboutUsPoints } = WhatMakesCustomApp
    const { services } = CustomAppServiceSectionData
    const { cards } = customAppServices
    return (
        <>
            <MainHeader version="1" />
            <HeroSection
                title="Custom Software Application Development"
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
            <HeadingComponent sectionHeading={CustomAppHeading} />
            <BlockchainDevelopmentServices sectionHeading={sectionHeading} description={description} images={images} />
            <HeadingComponent sectionHeading={CustomAppServiceHeading} />
            <ServiceSolutionSection cards={cards} className='h-80 text-justify' />
            <Tabs blockChainSolutions={customAppSolutions} categories={softwareCategories} />
            <BlueTagBanner sectionHeading={customAppTech} imageLayout={imageCustomApp} />
            <IndustrySections services={services} sectionHeading={customAppIndustry} />
            <WhatMakes sectionHeading2={sectionHeading2} aboutUsPoints={aboutUsPoints} images={images} />
            <Footer />
        </>
    );
}
