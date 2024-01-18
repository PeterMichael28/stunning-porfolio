import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `TestBlog`.
 */
export type TestBlogProps = SliceComponentProps<Content.TestBlogSlice>;

/**
 * Component for "TestBlog" Slices.
 */
const TestBlog = ({ slice }: TestBlogProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for test_blog (variation: {slice.variation}) Slices
    </section>
  );
};

export default TestBlog;
