import Image from "next/image";
import { GALLERY } from "@/data/content";

/**
 * 7 - Photo gallery. Initiatives at random, no captions, no claims.
 *
 * Every photo renders at ITS OWN aspect ratio - 3:4, 1:1, 3:2, 4:3 and 4:5 -
 * and nothing is cropped. The supplied set was shot to that mix on purpose, and
 * the varied heights are what make this read as a photo wall instead of a table
 * of thumbnails. Do not force a uniform ratio here.
 *
 * Layout is CSS multi-column, which packs the varied heights with no gaps and
 * reflows from one column to three with no breakpoint juggling.
 * `break-inside: avoid` is what stops a photo splitting across a column.
 *
 * Ordering note: multi-column fills COLUMN BY COLUMN, so 1-3 run down the first
 * column, 4-6 down the second, 7-9 down the third. 1 is top-left and 9 is
 * bottom-right as intended. Forcing strict left-to-right rows instead would
 * mean equal heights in each row, which means cropping - that's the trade, and
 * uncropped won.
 */
export function Gallery() {
  return (
    <section id="gallery" className="t-section bg-paper">
      <div className="t-container">
        <div className="mx-auto max-w-[44rem] text-center">
          <p className="t-eyebrow text-green">On the ground</p>
          <h2 className="mt-4 text-h2">What the money turns into.</h2>
        </div>

        <div className="mt-[clamp(2.5rem,6vw,4rem)] columns-1 gap-3 sm:columns-2 lg:columns-3">
          {GALLERY.map((photo) => (
            <Image
              key={photo.file}
              src={`/gallery/${photo.file}.webp`}
              alt={photo.alt}
              width={photo.width}
              height={photo.height}
              sizes="(min-width: 1024px) 392px, (min-width: 640px) 50vw, 100vw"
              className="mb-3 h-auto w-full break-inside-avoid rounded-md"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
