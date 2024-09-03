import { SectionProps } from '@/src/common-types';
import { Button } from '@/src/components/button';
import { Container } from '@/src/components/container';
import { TextInput } from '@/src/components/inputs/text-input';
import { cn } from '@/src/utils/shadcn';
import Image from 'next/image';
import { ServiceHeading } from '../../blockChain-service/Service-Heading';
import { SectionHeadingWithoutStylingProps } from '@/src/components/section-heading/interface';

export interface CtaSectionProps {
    title: string;
}
export interface technologiesProps {
    sectionHeading: SectionHeadingWithoutStylingProps
}

const ctaSectionData: CtaSectionProps = {
    title: 'Technologies',
};
export interface BlueTagBannerProps extends SectionProps, technologiesProps { }

export function BlueTagBanner({ className, sectionHeading }: BlueTagBannerProps) {
    const { title } = ctaSectionData;
    return (
        <section className={cn(className)}>
            <Container>
                <div className="relative overflow-hidden rounded-5 bg-primary px-6 py-14">
                    <div className="relative z-10 mx-auto max-w-full rounded-5  text-center">
                        <ServiceHeading {...sectionHeading} />
                    </div>
                    <Image
                        src="/assets/images/cta/pattern-1.png"
                        alt="cta section bg pattern"
                        width={520}
                        height={316}
                        className="pointer-events-none absolute -right-30px bottom-0 z-1 h-full animate-float-bob-x object-cover opacity-60"
                        sizes="100vw"
                    />
                </div>
            </Container>
        </section>
    );
}
