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
      className="relative overflow-hidden bg-linear-to-br from-slate-900 via-slate-800 to-slate-900"
    >
      {/* Decorative background blobs */}
      <div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-teal-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-indigo-500/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="flex flex-col items-center gap-16 lg:flex-row lg:items-center">
          {/* Text column */}
          <div className="flex-1 text-center lg:text-left">
            {isFilled.keyText(slice.primary.eyebrowHeadline) && (
              <span className="mb-4 inline-block rounded-full border border-teal-400/40 bg-teal-400/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-widest text-teal-300">
                {slice.primary.eyebrowHeadline}
              </span>
            )}

            {isFilled.richText(slice.primary.title) && (
              <div className="mt-4 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl [&_strong]:text-transparent [&_strong]:bg-clip-text [&_strong]:bg-linear-to-r [&_strong]:from-teal-300 [&_strong]:to-indigo-400">
                <PrismicRichText field={slice.primary.title} />
              </div>
            )}

            {isFilled.richText(slice.primary.description) && (
              <div className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300 mx-auto lg:mx-0">
                <PrismicRichText field={slice.primary.description} />
              </div>
            )}

            {isFilled.link(slice.primary.callToActionLink) && (
              <div className="mt-10">
                <PrismicNextLink
                  field={slice.primary.callToActionLink}
                  className="inline-flex items-center gap-2 rounded-full bg-linear-to-r from-teal-400 to-teal-500 px-8 py-3.5 text-base font-semibold text-slate-900 shadow-lg shadow-teal-500/30 transition-all duration-200 hover:from-teal-300 hover:to-teal-400 hover:shadow-teal-400/40 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-400"
                />
              </div>
            )}
          </div>

          {/* Image column */}
          {isFilled.image(slice.primary.image) && (
            <div className="flex-1 w-full max-w-lg lg:max-w-none">
              <div className="relative rounded-2xl ring-1 ring-white/10 shadow-2xl overflow-hidden">
                <div className="absolute inset-0 rounded-2xl ring-inset ring-white/5" />
                <PrismicNextImage
                  field={slice.primary.image}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
