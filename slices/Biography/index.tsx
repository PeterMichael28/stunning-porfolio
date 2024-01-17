import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Bounded from '@/components/Bounded';
import SectionHeading from '@/components/SectionHeading';

/**
 * Props for `Biography`.
 */
export type BiographyProps = SliceComponentProps<Content.BiographySlice>;

/**
 * Component for "Biography" Slices.
 */
const Biography = ({ slice }: BiographyProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="grid gap-x-8 gap-y-6 md:grid-cols-[2fr,1fr]">
      <SectionHeading size="xl" className="col-start-1">
          {slice.primary.heading}
        </SectionHeading>
      </div>
      Placeholder component for biography (variation: {slice.variation}) Slices
    </Bounded>
  );
};

export default Biography;
