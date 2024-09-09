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
import { databaseCategories, DatabaseHeading, databaseIndustry, databaseSectionData, DatabaseServiceHeading, databaseServices, DatabaseServices, databaseSolutions, databaseTech, WhatMakesDatabase } from '@/data/database-service';

export const metadata: Metadata = {
    title: 'Techlab | Database Development',
    description: 'Premier Database Development Company',
};

export default function Page() {
    const { sectionHeading, description, images } = DatabaseServices
    const { sectionHeading2, aboutUsPoints } = WhatMakesDatabase
    const { services } = databaseSectionData
    const { cards } = databaseServices
    return (
        <>
            <MainHeader version="1" />
            <HeroSection
                title="Database Development"
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
            <HeadingComponent sectionHeading={DatabaseHeading} />
            <BlockchainDevelopmentServices sectionHeading={sectionHeading} description={description} images={images} />
            <HeadingComponent sectionHeading={DatabaseServiceHeading} />
            <ServiceSolutionSection cards={cards} className='h-80 text-justify' />
            <Tabs blockChainSolutions={databaseSolutions} categories={databaseCategories} />
            <BlueTagBanner sectionHeading={databaseTech} />
            <IndustrySections services={services} sectionHeading={databaseIndustry} />
            <WhatMakes sectionHeading2={sectionHeading2} aboutUsPoints={aboutUsPoints} images={images} />
            <Footer />
        </>
    );
}
