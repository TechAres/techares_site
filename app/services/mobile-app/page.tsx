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
import { mobileAppCategories, mobileAppHeading, mobileAppIndustry, mobileAppSectionData, MobileAppServiceHeading, mobileAppServices, MobileAppServices, MobileAppSolutions, mobileAppTech, WhatMakesMobileApp } from '@/data/mobileapp-service';

export const metadata: Metadata = {
    title: 'Techlab | Mobile App Development ',
    description: 'Premier Mobile App Development Company',
};

export default function Page() {
    const { sectionHeading, description, images } = MobileAppServices
    const { sectionHeading2, aboutUsPoints } = WhatMakesMobileApp
    const { services } = mobileAppSectionData
    const { cards } = mobileAppServices
    return (
        <>
            <MainHeader version="1" />
            <HeroSection
                title="Mobile Application Development"
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
            <HeadingComponent sectionHeading={mobileAppHeading} />
            <BlockchainDevelopmentServices sectionHeading={sectionHeading} description={description} images={images} />
            <HeadingComponent sectionHeading={MobileAppServiceHeading} />
            <ServiceSolutionSection cards={cards} className='h-96 text-justify' />
            <Tabs blockChainSolutions={MobileAppSolutions} categories={mobileAppCategories} />
            <BlueTagBanner sectionHeading={mobileAppTech} />
            <IndustrySections services={services} sectionHeading={mobileAppIndustry} />
            <WhatMakes sectionHeading2={sectionHeading2} aboutUsPoints={aboutUsPoints} images={images} />
            <Footer />
        </>
    );
}
