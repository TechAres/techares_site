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
import { imageUiux, uiuxCategories, uiuxHeading, uiuxIndustry, uiuxSectionData, uiuxServiceHeading, uiuxServices, UiuxServices, uiuxSolutions, uiuxTech, WhatMakesUiux } from '@/data/UI-UX';

export const metadata: Metadata = {
    title: 'Techlab | UI_UX Design',
    description: 'Premier UI_UX Design Company',
};

export default function Page() {
    const { sectionHeading, description, images } = UiuxServices
    const { sectionHeading2, aboutUsPoints } = WhatMakesUiux
    const { services } = uiuxSectionData
    const { cards } = uiuxServices
    return (
        <>
            <MainHeader version="1" />
            <HeroSection
                title="UI_UX Design"
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
            <HeadingComponent sectionHeading={uiuxHeading} />
            <BlockchainDevelopmentServices sectionHeading={sectionHeading} description={description} images={images} />
            <HeadingComponent sectionHeading={uiuxServiceHeading} />
            <ServiceSolutionSection cards={cards} className='h-64 text-justify' />
            <Tabs blockChainSolutions={uiuxSolutions} categories={uiuxCategories} />
            <BlueTagBanner sectionHeading={uiuxTech} imageLayout={imageUiux} />
            <IndustrySections services={services} sectionHeading={uiuxIndustry} />
            <WhatMakes sectionHeading2={sectionHeading2} aboutUsPoints={aboutUsPoints} images={images} />
            <Footer />
        </>
    );
}
