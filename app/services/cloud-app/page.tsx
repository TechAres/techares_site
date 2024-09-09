import { Footer } from '@/src/layout/footer/v1';
import { MainHeader } from '@/src/layout/header';
import Tabs from '@/src/sections/blockChain-solution';
import { BlockchainDevelopmentServices } from '@/src/sections/blockChain-service';
import { HeroSection } from '@/src/sections/hero/v3';
import { Metadata } from 'next';
import { BlueTagBanner } from '@/src/sections/cta/tag-banner';
import { IndustrySections } from '@/src/sections/service/Industry-service/Index';
import { WhatMakes } from '@/src/sections/what-makes';
import { cloudAppServices, CloudAppServices, cloudAppSolutions, cloudAppTech, cloudCategories, cloudHeading, cloudIndustryWeServe, cloudServiceHeading, cloudServiceSectionData, WhatMakesCloudApp } from '@/data/cloud-app-services';
import { ServiceSolutionSection } from '@/src/sections/services-solution';
import { HeadingComponent } from '@/src/sections/service-text';

export const metadata: Metadata = {
    title: 'Techlab | Cloud Application Development',
    description: 'Premier Cloud Application Development Company',
};

export default function Page() {
    const { sectionHeading, description, images } = CloudAppServices
    const { sectionHeading2, aboutUsPoints } = WhatMakesCloudApp
    const { services } = cloudServiceSectionData
    const { cards } = cloudAppServices
    return (
        <>
            <MainHeader version="1" />
            <HeroSection
                title="Cloud Application Development"
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
            <HeadingComponent sectionHeading={cloudHeading} />
            <BlockchainDevelopmentServices sectionHeading={sectionHeading} description={description} images={images} />
            <HeadingComponent sectionHeading={cloudServiceHeading} />
            <ServiceSolutionSection cards={cards} className='h-72 text-justify' />
            <Tabs blockChainSolutions={cloudAppSolutions} categories={cloudCategories} />
            <BlueTagBanner sectionHeading={cloudAppTech} />
            <IndustrySections services={services} sectionHeading={cloudIndustryWeServe} />
            <WhatMakes sectionHeading2={sectionHeading2} aboutUsPoints={aboutUsPoints} images={images} />
            <Footer />
        </>
    );
}
