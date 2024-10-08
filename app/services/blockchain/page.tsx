import { blockchainCategories, BlockchainHeading, BlockchainServiceHeading, blockchainServices, BlockChainServices, blockchainServiceSectionData, blockChainSolutions, blockChainTech, imageBlockChain, IndustryWeServe, WhatMakesBlockChain } from '@/data/blockchain-services';
import { Footer } from '@/src/layout/footer/v1';
import { MainHeader } from '@/src/layout/header';
import Tabs from '@/src/sections/blockChain-solution';
import { BlockchainDevelopmentServices } from '@/src/sections/blockChain-service';
import { HeroSection } from '@/src/sections/hero/v3';

import { Metadata } from 'next';
import { BlueTagBanner } from '@/src/sections/cta/tag-banner';
import { IndustrySections } from '@/src/sections/service/Industry-service/Index';
import { WhatMakes } from '@/src/sections/what-makes';
import { HeadingComponent } from '@/src/sections/service-text';
import { ServiceSolutionSection } from '@/src/sections/services-solution';

export const metadata: Metadata = {
    title: 'Techlab | Service',
    description: 'Premier Blockchain Development Company',
};

export default function Page() {
    const { sectionHeading, description, images } = BlockChainServices
    const { sectionHeading2, aboutUsPoints } = WhatMakesBlockChain
    const { services } = blockchainServiceSectionData
    const { cards } = blockchainServices
    return (
        <>
            <MainHeader version="1" />
            <HeroSection
                title="Premier Blockchain Development"
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
            <HeadingComponent sectionHeading={BlockchainHeading} />
            <BlockchainDevelopmentServices sectionHeading={sectionHeading} description={description} images={images} />
            <HeadingComponent sectionHeading={BlockchainServiceHeading} />
            <ServiceSolutionSection cards={cards} className='h-72 text-justify' />
            <Tabs blockChainSolutions={blockChainSolutions} categories={blockchainCategories} />
            <BlueTagBanner sectionHeading={blockChainTech} imageLayout={imageBlockChain} />
            <IndustrySections services={services} sectionHeading={IndustryWeServe} />
            <WhatMakes sectionHeading2={sectionHeading2} aboutUsPoints={aboutUsPoints} images={images} />
            <Footer />
        </>
    );
}
