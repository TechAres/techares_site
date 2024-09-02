import { blockchainServices, BlockChainServices } from '@/data/blockchain-services';
import { Footer } from '@/src/layout/footer/v1';
import { MainHeader } from '@/src/layout/header';
import { AboutSection } from '@/src/sections/about/v1';
import { AboutSection as AboutSectionTwo } from '@/src/sections/about/v2';
import { OurJourney } from '@/src/sections/about/v2/OurJourney';
import { AboutSectionThree } from '@/src/sections/about/v3';
import { BlockchainDevelopmentServices } from '@/src/sections/blockChain-service';
import { ContactSection } from '@/src/sections/contact/v2';
import { CtaSection } from '@/src/sections/cta/v1';
import { HeroSection } from '@/src/sections/hero/v3';
import { ServiceSection } from '@/src/sections/serviceDetails';
import { StatisticsSection } from '@/src/sections/statistics/v1';
import { TestimonialSection } from '@/src/sections/testimonial/v1';
import { WorkprocessSection } from '@/src/sections/work-process/v1';
import { WhyChooseUs } from '@/src/sections/work-process/v2';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Techlab | Service',
    description: 'Premier Blockchain Development Company',
};

export default function Page() {
    const { sectionHeading, description, images } = BlockChainServices
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
            <BlockchainDevelopmentServices sectionHeading={sectionHeading} description={description} images={images} />
            <ServiceSection {...blockchainServices} />
            <Footer />
        </>
    );
}
