import { FC } from "react";
import {
  isFilled,
  ImageField,
  KeyTextField,
  LinkField,
  RichTextField,
  SharedSlice,
  SharedSliceVariation,
} from "@prismicio/client";
import { SliceComponentProps, PrismicRichText } from "@prismicio/react";
import { PrismicNextLink, PrismicNextImage } from "@prismicio/next";

type HeroSlicePrimary = {
  eyebrowHeadline: KeyTextField;
  title: RichTextField;
  description: RichTextField;
  image: ImageField;
  callToActionLink: LinkField;
};

type HeroSlice = SharedSlice<
  "hero",
  SharedSliceVariation<"default", HeroSlicePrimary>
>;

export type HeroProps = SliceComponentProps<HeroSlice>;

const Hero: FC<HeroProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      style={{
        fontFamily: "system-ui, sans-serif",
        padding: "4rem 2rem",
        backgroundColor: "#fff",
        color: "#333",
      }}
    >
      {isFilled.keyText(slice.primary.eyebrowHeadline) && (
        <p
          style={{ color: "#47C1AF", fontWeight: 500, marginBottom: "0.5rem" }}
        >
          {slice.primary.eyebrowHeadline}
        </p>
      )}
      {isFilled.richText(slice.primary.title) && (
        <div
          style={{ fontSize: "2.5rem", fontWeight: 700, marginBottom: "1rem" }}
        >
          <PrismicRichText field={slice.primary.title} />
        </div>
      )}
      {isFilled.richText(slice.primary.description) && (
        <div
          style={{
            fontSize: "1.15rem",
            maxWidth: "38rem",
            marginBottom: "2rem",
          }}
        >
          <PrismicRichText field={slice.primary.description} />
        </div>
      )}
      {isFilled.image(slice.primary.image) && (
        <PrismicNextImage
          field={slice.primary.image}
          style={{ maxWidth: "100%", height: "auto", marginBottom: "2rem" }}
        />
      )}
      <PrismicNextLink
        field={slice.primary.callToActionLink}
        style={{
          display: "inline-block",
          padding: "1rem 2.625rem",
          backgroundColor: "#16745f",
          color: "#fff",
          borderRadius: "0.25rem",
          textDecoration: "none",
        }}
      />
    </section>
  );
};

export default Hero;
