import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `MySkills`.
 */
export type MySkillsProps = SliceComponentProps<Content.MySkillsSlice>;

/**
 * Component for "MySkills" Slices.
 */
const MySkills = ({ slice }: MySkillsProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for my_skills (variation: {slice.variation}) Slices
    </section>
  );
};

export default MySkills;
