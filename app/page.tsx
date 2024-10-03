import { projectSectionData } from '@/data/project-section/v1/home-page';
import { serviceSectionData } from '@/data/service-section/v1/home-page';
import { Footer } from '@/src/layout/footer/v1';
import { MainHeader } from '@/src/layout/header';
import { AboutSection } from '@/src/sections/about/v1';
import Tabs from '@/src/sections/tabs-software-development';
import { Solutions } from '@/src/sections/solutions';
import { BlogSection } from '@/src/sections/blog/v1';
import { ContactSection } from '@/src/sections/contact/v1';
import { CtaSection } from '@/src/sections/cta/v1';
import { Hero } from '@/src/sections/hero/v1';
import { ProjectSection } from '@/src/sections/project/v1';
import { PricingSection } from '@/src/sections/pricing/version-1';
import { WhyChooseSection } from '@/src/sections/home-whychoose';
import { ServiceSection } from '@/src/sections/service/v2';
import { StatisticsSection } from '@/src/sections/statistics/v1';
import { TeamSection } from '@/src/sections/team/v1';
import { TestimonialSection } from '@/src/sections/testimonial/v1';
import { Metadata } from 'next';
import { WorkprocessSection } from '@/src/sections/work-process/v1';
import { AboutSectionThree } from '@/src/sections/about/v3';
import { homeAboutData } from '@/data/about-section/v1';

import { AboutSection as AboutSectionTwo } from '@/src/sections/about/v2';

export const metadata: Metadata = {
  title: 'Techlab | Home',
  description: 'Techlab - IT Solutions and Services React Nextjs Template',
};

export default function Page() {
  const { images, sectionHeading } = homeAboutData
  return (
    <div>
      <MainHeader version="1" />
      <Hero />
      <AboutSectionThree images={images} sectionHeading={sectionHeading} />
      <ProjectSection {...projectSectionData} />
      <AboutSectionTwo />
      {/* <Tabs /> */}
      <WorkprocessSection />
      {/* <PricingSection /> */}
      <CtaSection />


      <WhyChooseSection />
      {/* <ServiceSection className="!pb-0" {...serviceSectionData} />
      
      
      <ProjectSection {...projectSectionData} />
      <StatisticsSection />
      <TestimonialSection />
      <PricingSection />
      <TeamSection />
      <ContactSection />
      <BlogSection /> */}
      <Footer />
    </div>
  );
}
