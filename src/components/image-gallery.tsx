import Image from "next/image";
import BlurFade from "./magicui/blur-fade";

interface ImageGalleryProps {
  images: Array<{
    src: string;
    alt: string;
  }> | ReadonlyArray<{
    readonly src: string;
    readonly alt: string;
  }>;
  delay?: number;
}

export function ImageGallery({ images, delay = 0.04 }: ImageGalleryProps) {
  return (
    <div className="grid md:grid-cols-3 gap-4 px-4 max-w-6xl mx-auto">
      {/* Desktop: First Column */}
      <div className="hidden md:grid gap-4">
        <BlurFade delay={delay}>
          <div className="h-[250px] overflow-hidden rounded-xl">
            <Image
              src="/gallery/5.jpeg"
              alt="Outdoor adventure"
              width={400}
              height={250}
              className="w-full h-full object-cover"
            />
          </div>
        </BlurFade>
        <BlurFade delay={delay + 0.1}>
          <div className="h-[250px] overflow-hidden rounded-xl">
            <Image
              src="/gallery/4.jpg"
              alt="Team photo"
              width={400}
              height={250}
              className="w-full h-full object-cover"
            />
          </div>
        </BlurFade>
        <BlurFade delay={delay + 0.2}>
          <div className="h-[250px] overflow-hidden rounded-xl">
            <Image
              src="/gallery/9.jpg"
              alt="Travel memory"
              width={400}
              height={250}
              className="w-full h-full object-cover"
            />
          </div>
        </BlurFade>
      </div>

      {/* Desktop: Middle Column */}
      <div className="hidden md:grid gap-4">
        <BlurFade delay={delay + 0.15}>
          <div className="h-[250px] overflow-hidden rounded-xl">
            <Image
              src="/gallery/2.jpg"
              alt="Team photo"
              width={400}
              height={250}
              className="w-full h-full object-cover"
            />
          </div>
        </BlurFade>
        <BlurFade delay={delay + 0.25}>
          <div className="h-[500px] overflow-hidden rounded-xl">
            <Image
              src="/gallery/1.jpg"
              alt="Underwater scene"
              width={400}
              height={500}
              className="w-full h-full object-cover object-center scale-110"
              priority
            />
          </div>
        </BlurFade>
      </div>

      {/* Desktop: Last Column */}
      <div className="hidden md:grid gap-4">
        <BlurFade delay={delay + 0.2}>
          <div className="h-[250px] overflow-hidden rounded-xl">
            <Image
              src="/gallery/3.jpg"
              alt="Presentation"
              width={400}
              height={250}
              className="w-full h-full object-cover"
            />
          </div>
        </BlurFade>
        <BlurFade delay={delay + 0.3}>
          <div className="h-[250px] overflow-hidden rounded-xl">
            <Image
              src="/gallery/8.jpg"
              alt="Team celebration"
              width={400}
              height={250}
              className="w-full h-full object-cover"
            />
          </div>
        </BlurFade>
        <BlurFade delay={delay + 0.4}>
          <div className="h-[250px] overflow-hidden rounded-xl">
            <Image
              src="/gallery/7.jpeg"
              alt="Group meeting"
              width={400}
              height={250}
              className="w-full h-full object-cover"
            />
          </div>
        </BlurFade>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden grid grid-cols-2 gap-3">
        <BlurFade delay={delay}>
          <div className="aspect-square overflow-hidden rounded-xl">
            <Image src="/gallery/5.jpeg" alt="Outdoor adventure" width={400} height={400} className="w-full h-full object-cover" />
          </div>
        </BlurFade>
        <BlurFade delay={delay + 0.05}>
          <div className="aspect-square overflow-hidden rounded-xl">
            <Image src="/gallery/2.jpg" alt="Team photo" width={400} height={400} className="w-full h-full object-cover" />
          </div>
        </BlurFade>
        <BlurFade delay={delay + 0.1}>
          <div className="aspect-square overflow-hidden rounded-xl">
            <Image src="/gallery/4.jpg" alt="Team walking" width={400} height={400} className="w-full h-full object-cover" />
          </div>
        </BlurFade>
        <BlurFade delay={delay + 0.15}>
          <div className="aspect-square overflow-hidden rounded-xl">
            <Image src="/gallery/1.jpg" alt="Underwater scene" width={400} height={400} className="w-full h-full object-cover object-center scale-110" />
          </div>
        </BlurFade>
        <BlurFade delay={delay + 0.2}>
          <div className="aspect-square overflow-hidden rounded-xl">
            <Image src="/gallery/9.jpg" alt="Travel memory" width={400} height={400} className="w-full h-full object-cover" />
          </div>
        </BlurFade>
        <BlurFade delay={delay + 0.25}>
          <div className="aspect-square overflow-hidden rounded-xl">
            <Image src="/gallery/8.jpg" alt="Team celebration" width={400} height={400} className="w-full h-full object-cover" />
          </div>
        </BlurFade>
      </div>
    </div>
  );
}