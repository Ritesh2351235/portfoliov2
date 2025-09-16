import { cn } from "@/lib/utils";
import { fontMono, fontSans } from "@/lib/fonts";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";

const BLUR_FADE_DELAY = 0.04;

export default function BookPage() {
  return (
    <main
      className={cn(
        "min-h-screen w-full bg-background font-sans antialiased overflow-x-hidden",
        fontSans.variable,
        fontMono.variable
      )}
    >
      {/* Hero Section */}
      <div className="container px-4 py-8 md:py-20">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
          {/* Left Column - Book Info */}
          <div className="flex flex-col justify-center space-y-4 md:space-y-6">
            <div className="space-y-2">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-3xl font-bold leading-tight tracking-tighter md:text-4xl lg:text-6xl"
                text="Beyond the Resume"
              />
              <BlurFadeText
                delay={BLUR_FADE_DELAY * 2}
                className="text-xl font-bold leading-tight md:text-2xl lg:text-4xl text-muted-foreground"
                text="Open Source is Your Best Career Move"
              />
            </div>
            <BlurFadeText
              delay={BLUR_FADE_DELAY * 3}
              className="text-lg md:text-xl text-muted-foreground"
              text="How I Made $10K Through Contributions and Hackathons"
            />
            <BlurFade delay={BLUR_FADE_DELAY * 4}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="font-bold">
                  Pre-order Now - $29.99
                </Button>
                <Button size="lg" variant="outline">
                  Read Sample Chapter
                </Button>
              </div>
            </BlurFade>
          </div>

          {/* Right Column - Book Cover */}
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <div className="relative mx-auto w-full max-w-[280px] lg:max-w-none aspect-[3/4] overflow-hidden rounded-lg shadow-2xl transition-all hover:shadow-lg">
              <Image
                src="/book-cover.png"
                alt="Beyond the Resume Book Cover"
                fill
                className="object-cover"
                priority
              />
            </div>
          </BlurFade>
        </div>
      </div>

      {/* What You'll Learn Section */}
      <div className="container px-4 py-8 md:py-20">
        <div className="mx-auto max-w-3xl space-y-8 md:space-y-12">
          <BlurFade delay={BLUR_FADE_DELAY * 6}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  What You&apos;ll Learn
                </div>
                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-5xl">
                  This isn&apos;t just another theoretical book
                </h2>
                <p className="text-muted-foreground text-base md:text-lg lg:text-xl">
                  It&apos;s a step-by-step guide filled with practical insights that you can apply immediately
                </p>
              </div>
            </div>
          </BlurFade>

          <div className="space-y-6 md:space-y-8">
            <BlurFade delay={BLUR_FADE_DELAY * 7}>
              <div className="space-y-2">
                <h3 className="text-xl md:text-2xl font-bold tracking-tight">Breaking into open source</h3>
                <p className="text-muted-foreground text-base md:text-lg">
                  The exact steps to find the right projects, make meaningful contributions, and build a strong reputation in global communities.
                </p>
              </div>
            </BlurFade>

            <BlurFade delay={BLUR_FADE_DELAY * 8}>
              <div className="space-y-2">
                <h3 className="text-xl md:text-2xl font-bold tracking-tight">Winning hackathons like a pro</h3>
                <p className="text-muted-foreground text-base md:text-lg">
                  How to form a team, come up with game-changing ideas, build fast, and pitch effectively.
                </p>
              </div>
            </BlurFade>

            <BlurFade delay={BLUR_FADE_DELAY * 9}>
              <div className="space-y-2">
                <h3 className="text-xl md:text-2xl font-bold tracking-tight">Supercharging productivity with AI</h3>
                <p className="text-muted-foreground text-base md:text-lg">
                  The AI tools that helped me write better code, automate tasks, and speed up development.
                </p>
              </div>
            </BlurFade>

            <BlurFade delay={BLUR_FADE_DELAY * 10}>
              <div className="space-y-2">
                <h3 className="text-xl md:text-2xl font-bold tracking-tight">Turning ideas into execution</h3>
                <p className="text-muted-foreground text-base md:text-lg">
                  How to go from a random idea to a fully functional project that stands out.
                </p>
              </div>
            </BlurFade>

            <BlurFade delay={BLUR_FADE_DELAY * 11}>
              <div className="space-y-2">
                <h3 className="text-xl md:text-2xl font-bold tracking-tight">Personal branding and networking</h3>
                <p className="text-muted-foreground text-base md:text-lg">
                  How to showcase your work on Twitter, LinkedIn, and Product Hunt to get recognized and attract opportunities.
                </p>
              </div>
            </BlurFade>

            <BlurFade delay={BLUR_FADE_DELAY * 12}>
              <div className="space-y-2">
                <h3 className="text-xl md:text-2xl font-bold tracking-tight">Making money with open source and hackathons</h3>
                <p className="text-muted-foreground text-base md:text-lg">
                  How to turn your skills into a steady income stream, whether through grants, freelance work, or startup opportunities.
                </p>
              </div>
            </BlurFade>
          </div>
        </div>
      </div>

      {/* Why Listen to Me Section */}
      <div className="container px-4 py-8 md:py-20">
        <div className="mx-auto max-w-3xl space-y-8 md:space-y-12">
          <BlurFade delay={BLUR_FADE_DELAY * 13}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  About the Author
                </div>
                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-5xl">
                  Why Listen to Me?
                </h2>
              </div>
            </div>
          </BlurFade>

          <BlurFade delay={BLUR_FADE_DELAY * 14}>
            <div className="prose prose-lg dark:prose-invert mx-auto px-4">
              <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
                Three months ago, I was just another CS student with big dreams but no real-world experience.
                Through strategic open-source contributions and hackathon participations, I transformed my career trajectory.
                I went from zero to earning $10,000, building a strong portfolio, and most importantly, gaining invaluable
                experience that no traditional internship could provide.
              </p>
              <p className="text-base md:text-lg leading-relaxed text-muted-foreground mt-4">
                This isn&apos;t about luck or exceptional talent - it&apos;s about having the right strategy and execution.
                In this book, I&apos;m sharing every detail of how I did it, including the exact tools, approaches, and
                decisions that worked (and those that didn&apos;t). If I could do it, so can you.
              </p>
            </div>
          </BlurFade>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container px-4 py-8 md:py-20">
        <BlurFade delay={BLUR_FADE_DELAY * 15}>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-5xl">Ready to Accelerate Your Career?</h2>
              <p className="text-muted-foreground text-base md:text-lg lg:text-xl">
                Get your copy now and start your journey to success in tech
              </p>
              <div className="pt-4">
                <Button size="lg" className="font-bold">
                  Pre-order Now - $29.99
                </Button>
              </div>
            </div>
          </div>
        </BlurFade>
      </div>
    </main>
  );
} 