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
import { uiuxCategories, uiuxHeading, uiuxIndustry, uiuxSectionData, uiuxServiceHeading, uiuxServices, UiuxServices, uiuxSolutions, uiuxTech, WhatMakesUiux } from '@/data/UI-UX';
import { imageWeb, webDevCategories, webDevIndustry, webDevSectionData, webDevServiceHeading, webDevServices, WebDevServices, webDevSolutions, webDevTech, WhatMakesWebDev } from '@/data/web-dev';

export const metadata: Metadata = {
    title: 'Techlab | Web Development',
    description: 'Premier Web Development Company',
};

export default function Page() {
    const { sectionHeading, description, images } = WebDevServices
    const { sectionHeading2, aboutUsPoints } = WhatMakesWebDev
    const { services } = webDevSectionData
    const { cards } = webDevServices
    return (
        <>
            <MainHeader version="1" />
            <HeroSection
                title="Web Development"
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
            <HeadingComponent sectionHeading={webDevServiceHeading} />
            <ServiceSolutionSection cards={cards} className='h-80 text-justify' />
            <Tabs blockChainSolutions={webDevSolutions} categories={webDevCategories} />
            <BlueTagBanner sectionHeading={webDevTech} imageLayout={imageWeb} />
            <IndustrySections services={services} sectionHeading={webDevIndustry} />
            <WhatMakes sectionHeading2={sectionHeading2} aboutUsPoints={aboutUsPoints} images={images} />
            <Footer />
        </>
    );
}
