
import { Content, isFilled } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { createClient } from "@/prismicio";
import ContentList from "./ContentList";
import Bounded from "@/components/Bounded";
import SectionHeading from "@/components/SectionHeading";
/**
 * Props for `ContentIndex`.
 */
export type ContentIndexProps = SliceComponentProps<Content.ContentIndexSlice>;
// export type BlogPostIndexProps =
//   SliceComponentProps<Content.BlogPostIndexSlice>;

/**
 * Component for "ContentIndex" Slices.
 */
const ContentIndex = async ({ slice }: ContentIndexProps): Promise<JSX.Element> => {

  const client = createClient();
  const blogPosts = await client.getAllByType("blog_post");
  const projects = await client.getAllByType("project");

  const items = slice.primary.content_type === "Blog" ? blogPosts : projects;


  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
       <SectionHeading size="xl" className="mb-8">
        {slice.primary.heading}
      </SectionHeading>

      {isFilled.richText(slice.primary.description) && (
        <div className="prose prose-xl prose-invert mb-10 text-base">
          <PrismicRichText field={slice.primary.description} />
        </div>
      )}

      <ContentList
        items={items}
        contentType={slice.primary.content_type}
        viewMoreText={slice.primary.view_more_text}
        fallbackItemImage={slice.primary.fallback_image}
      />
    </Bounded>
  );
};

export default ContentIndex;
