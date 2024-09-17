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
import { enterpriceTech, enterpriseCategories, EnterpriseHeading, enterpriseIndustry, enterpriseSectionData, EnterpriseServiceHeading, enterpriseServices, EnterpriseServices, enterpriseSolutions, imageEnterprise, WhatMakesEnterprise } from '@/data/enterprise-services';

export const metadata: Metadata = {
    title: 'Techlab | Enterprise Software Solutions',
    description: 'Premier Enterprise Software Solutions Company',
};

export default function Page() {
    const { sectionHeading, description, images } = EnterpriseServices
    const { sectionHeading2, aboutUsPoints } = WhatMakesEnterprise
    const { services } = enterpriseSectionData
    const { cards } = enterpriseServices
    return (
        <>
            <MainHeader version="1" />
            <HeroSection
                title="Enterprise Software Solutions"
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
            <HeadingComponent sectionHeading={EnterpriseHeading} />
            <BlockchainDevelopmentServices sectionHeading={sectionHeading} description={description} images={images} />
            <HeadingComponent sectionHeading={EnterpriseServiceHeading} />
            <ServiceSolutionSection cards={cards} className='h-72 text-justify' />
            <Tabs blockChainSolutions={enterpriseSolutions} categories={enterpriseCategories} />
            <BlueTagBanner sectionHeading={enterpriceTech} imageLayout={imageEnterprise} />
            <IndustrySections services={services} sectionHeading={enterpriseIndustry} />
            <WhatMakes sectionHeading2={sectionHeading2} aboutUsPoints={aboutUsPoints} images={images} />
            <Footer />
        </>
    );
}
