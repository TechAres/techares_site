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
import { imageSoftwareConsult, softwareConsultCategories, softwareConsultHeading, softwareConsultIndustry, softwareConsultSectionData, softwareConsultServiceHeading, softwareConsultServices, SoftwareConsultServices, SoftwareConsultSolutions, softwareConsultTech, WhatMakesSoftwareConsult } from '@/data/software-consult';

export const metadata: Metadata = {
    title: 'Techlab | Software Consulting',
    description: 'Premier Software Consulting Company',
};

export default function Page() {
    const { sectionHeading, description, images } = SoftwareConsultServices
    const { sectionHeading2, aboutUsPoints } = WhatMakesSoftwareConsult
    const { services } = softwareConsultSectionData
    const { cards } = softwareConsultServices
    return (
        <>
            <MainHeader version="1" />
            <HeroSection
                title="Software Consulting"
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
            <HeadingComponent sectionHeading={softwareConsultHeading} />
            <BlockchainDevelopmentServices sectionHeading={sectionHeading} description={description} images={images} />
            <HeadingComponent sectionHeading={softwareConsultServiceHeading} />
            <ServiceSolutionSection cards={cards} className='h-64 text-justify' />
            <Tabs blockChainSolutions={SoftwareConsultSolutions} categories={softwareConsultCategories} />
            <BlueTagBanner sectionHeading={softwareConsultTech} imageLayout={imageSoftwareConsult} />
            <IndustrySections services={services} sectionHeading={softwareConsultIndustry} />
            <WhatMakes sectionHeading2={sectionHeading2} aboutUsPoints={aboutUsPoints} images={images} />
            <Footer />
        </>
    );
}
