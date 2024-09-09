import { WorkprocessCardProps } from "../work-process/v1/card";
import { WorkCardsCaraousl } from "../work-process/v1/cards-carousel";


export interface WorkprocessSectionProps {
    texts?: string[];
    cards: WorkprocessCardProps[];
    className?: string
}

export function ServiceSolutionSection({ cards, className }: WorkprocessSectionProps) {
    return (
        <section className="section-padding-primary overflow-hidden !pt-0">
            {/* {texts && texts.length > 0 && (
        <div className="whitespace-nowrap border-y border-accent-200 py-7 dark:border-white dark:border-opacity-30">
          <div className="inline-flex w-full flex-nowrap gap-8 overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)] lg:gap-[38px]">
            <TextSlider texts={[...texts, ...texts]} />
          </div>
        </div>
      )} */}
            <WorkCardsCaraousl cards={cards} className={className} />
        </section>
    );
}