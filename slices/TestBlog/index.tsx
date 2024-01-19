import Button from "@/components/Button";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `TextBlock`.
 */
export type TextBlockProps = SliceComponentProps<Content.TestBlogSlice>;

/**
 * Component for "TextBlock" Slices.
 */
const TextBlock = ({ slice }: TextBlockProps): JSX.Element => {
  return (
    <div className="max-w-prose">
      <PrismicRichText field={slice.primary.text} />

      <div className='mt-4'>
      <Button
          linkField={slice?.primary?.live_url}
          label="Live Url"
        />
    </div>
    </div>
  );
};

export default TextBlock;