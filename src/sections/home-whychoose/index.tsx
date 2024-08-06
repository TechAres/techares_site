import { homeWhyChooseData } from '@/data/home-whychoose';
import { ImageProps } from '@/src/common-types';
import { Container } from '@/src/components/container';
import { SectionHeading } from '@/src/components/section-heading';
import { SectionHeadingWithoutStylingProps } from '@/src/components/section-heading/interface';
import Image from 'next/image';

import patternOne from 'public/assets/images/about/pattern-1.png';

export interface HomeWhyChooseProps {
  images: {
    image1: ImageProps;
    image2: ImageProps;
    image3: ImageProps;
    image4: ImageProps;
  };
  sectionHeading: SectionHeadingWithoutStylingProps;
  keyPoints: {
    icon: React.ReactNode;
    title: string;
  }[];
  description?: string;
}

export function WhyChooseSection() {
  const { images, sectionHeading, keyPoints, description } = homeWhyChooseData;
  return (
    <section className="section-padding-primary overflow-hidden">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[.92fr_1fr] 2xl:gap-20">
          {/* Content  */}
          <div className="lg:order-2" data-aos="fade-left" data-aos-delay="200">
            {/* <SectionHeading {...sectionHeading} /> */}
            <h2 className="font-secondary text-xl font-bold leading-[1.25] text-accent-900 dark:text-white md:text-2xl">
              WHY CHOOSE US?
            </h2>
            <h6 className="text-sky-500">
              MAXIMIZING OPPORTUNITIES FOR BUSINESSES WITH OUR VALUES
            </h6>
            <p>
              Techares is your one-stop solution for all your software
              development demands and requirements. From concept ideation to
              post-launch support, our comprehensive services cover every stage
              of the software lifecycle. With a proven track record of
              delivering exceptional solutions, we have garnered a reputation as
              a leading force in the industry. We value your feedback and work
              collaboratively with you to address any concerns, ensuring that
              the final product is precisely what you envision.
            </p>

            <p className="mt-2">
              Our tailored approach ensures that we understand your specific
              requirements and deliver results that exceed expectations. Our
              team consists of seasoned professionals and creative minds who
              thrive on pushing the boundaries of technology, bringing fresh
              perspectives and ingenious solutions to every project. We keep you
              involved at every stage, providing transparent communication and
              delivering on time and within budget.
            </p>
          </div>

          {/* Images  */}
          <div>
            <Image
              src={images.image1.src}
              alt={images.image1.alt}
              width={images.image1.width}
              height={images.image1.height}
              className="rounded-tl-[60px] object-cover object-top"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
