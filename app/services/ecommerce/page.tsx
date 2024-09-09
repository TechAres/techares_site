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
import { ecommerceCategories, EcommerceHeading, ecommerceIndustry, ecommerceSectionData, EcommerceServiceHeading, ecommerceServices, EcommerceServices, ecommerceSolutions, ecommerceTech, WhatMakesEcommerce } from '@/data/e-commerce-service';

export const metadata: Metadata = {
    title: 'Techlab | E-commerce Solutions',
    description: 'Premier E-commerce Solutions Company',
};

export default function Page() {
    const { sectionHeading, description, images } = EcommerceServices
    const { sectionHeading2, aboutUsPoints } = WhatMakesEcommerce
    const { services } = ecommerceSectionData
    const { cards } = ecommerceServices
    return (
        <>
            <MainHeader version="1" />
            <HeroSection
                title="E-commerce Solutions"
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
            <HeadingComponent sectionHeading={EcommerceHeading} />
            <BlockchainDevelopmentServices sectionHeading={sectionHeading} description={description} images={images} />
            <HeadingComponent sectionHeading={EcommerceServiceHeading} />
            <ServiceSolutionSection cards={cards} className='h-72 text-justify' />
            <Tabs blockChainSolutions={ecommerceSolutions} categories={ecommerceCategories} />
            <BlueTagBanner sectionHeading={ecommerceTech} />
            <IndustrySections services={services} sectionHeading={ecommerceIndustry} />
            <WhatMakes sectionHeading2={sectionHeading2} aboutUsPoints={aboutUsPoints} images={images} />
            <Footer />
        </>
    );
}
