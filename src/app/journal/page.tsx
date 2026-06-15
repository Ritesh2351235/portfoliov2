import { cn } from "@/lib/utils";
import Image from "next/image";
import { DATA } from "@/data/resume";
import { Caveat } from "next/font/google";
import type { Metadata } from "next";

const hand = Caveat({ subsets: ["latin"], weight: ["400", "600", "700"] });

const BASE_DELAY = 0.06;

export const metadata: Metadata = {
  title: "Mood Board",
  description: "Recent events, places, and moments pinned to a board.",
};

type JournalItem = {
  type: "event" | "photo" | "note";
  date: string;
  caption?: string;
  src?: string;
  fit?: "cover" | "contain";
  aspect?: string;
  href?: string;
  text?: string;
  mood?: string;
  tape?: "amber" | "blue" | "pink" | "none";
  pin?: boolean;
  rotate?: number;
};

const TAPE: Record<string, string> = {
  amber: "bg-amber-300/40 border-amber-200/30",
  blue: "bg-sky-300/40 border-sky-200/30",
  pink: "bg-pink-300/40 border-pink-200/30",
};

function Tape({ color }: { color?: string }) {
  if (!color || color === "none") return null;
  return (
    <span
      aria-hidden
      className={cn(
        "absolute -top-3 left-1/2 z-20 h-6 w-20 -translate-x-1/2 -rotate-6 border backdrop-blur-[1px]",
        "shadow-sm [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]",
        TAPE[color]
      )}
    />
  );
}

function Pin() {
  return (
    <span aria-hidden className="absolute -top-2.5 left-1/2 z-20 -translate-x-1/2">
      <span className="block size-4 rounded-full bg-gradient-to-br from-rose-400 to-rose-600 shadow-[0_3px_5px_rgba(0,0,0,0.4)] ring-1 ring-rose-300/50">
        <span className="block size-1.5 translate-x-[3px] translate-y-[3px] rounded-full bg-white/70" />
      </span>
    </span>
  );
}

function DateStamp({ date, dark }: { date: string; dark?: boolean }) {
  return (
    <span
      className={cn(
        "inline-block rotate-[-3deg] rounded-sm border px-1.5 py-0.5 text-[10px] font-medium uppercase tracking-widest",
        dark
          ? "border-white/15 text-white/55"
          : "border-neutral-300 text-neutral-400"
      )}
    >
      {date}
    </span>
  );
}

export default function JournalPage() {
  const items = DATA.journal as readonly JournalItem[];

  return (
    // Full-bleed: escape the global max-w-2xl column AND its vertical padding,
    // so one consistent board background covers the entire page.
    <div className="relative left-1/2 right-1/2 -mx-[50vw] -my-12 w-screen sm:-my-24">
      <div className="pinboard relative min-h-[100dvh] w-full bg-[#ece7db] dark:bg-background">

        <div className="relative mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-20">
          {/* Header */}
          <header className="mood-in mb-12 flex flex-col items-center text-center">
            <span className="rounded-full border border-current/20 bg-foreground px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-background">
              Mood Board
            </span>
            <h1
              className={cn(
                "mt-4 text-5xl font-bold leading-none text-foreground sm:text-6xl",
                hand.className
              )}
            >
              Lately.
            </h1>
            <p className="mt-2 max-w-md text-sm text-muted-foreground sm:text-base">
              Recent events, places & little moments, pinned as they happen.
            </p>
          </header>

          {/* Pinboard masonry */}
          <div className="columns-1 gap-6 sm:columns-2 xl:columns-3">
            {items.map((item, i) => (
              <div
                key={i}
                className="mood-in mb-6 break-inside-avoid"
                style={{ animationDelay: `${BASE_DELAY * (i + 2)}s` }}
              >
                <div
                  style={{ ["--rot" as string]: `${item.rotate ?? 0}deg` }}
                  className="group relative [transform:rotate(var(--rot))] transition-transform duration-300 ease-out will-change-transform hover:z-10 hover:[transform:rotate(0deg)_translateY(-8px)_scale(1.03)]"
                >
                  <Tape color={item.tape} />
                  {item.pin && <Pin />}

                  {/* PHOTO polaroid */}
                  {item.type === "photo" && (
                    <figure className="rounded-[3px] bg-white p-3 pb-0 shadow-[0_10px_30px_-8px_rgba(0,0,0,0.5)] ring-1 ring-black/5">
                      <div
                        className="relative overflow-hidden bg-neutral-100"
                        style={{ aspectRatio: item.aspect ?? "4 / 5" }}
                      >
                        <Image
                          src={item.src!}
                          alt={item.caption ?? "photo"}
                          fill
                          sizes="(max-width:640px) 90vw, 320px"
                          className={item.fit === "contain" ? "object-contain" : "object-cover"}
                        />
                      </div>
                      <figcaption className="flex items-end justify-between gap-2 px-1 py-3">
                        <span className="text-sm font-medium leading-snug text-neutral-700">
                          {item.caption}
                        </span>
                        <DateStamp date={item.date} />
                      </figcaption>
                    </figure>
                  )}

                  {/* NOTE sticky paper */}
                  {item.type === "note" && (
                    <div className="rounded-[3px] bg-[#fdf6dd] p-5 shadow-[0_10px_30px_-8px_rgba(0,0,0,0.5)] ring-1 ring-black/5">
                      <p className="whitespace-pre-line text-sm font-medium leading-relaxed text-neutral-800">
                        {item.text}
                      </p>
                      <div className="mt-4 flex items-center justify-between">
                        {item.mood && (
                          <span className="text-xl">{item.mood}</span>
                        )}
                        <DateStamp date={item.date} />
                      </div>
                    </div>
                  )}

                  {/* EVENT handwritten note card with a source link */}
                  {item.type === "event" && (
                    <div className="rounded-[3px] bg-white p-5 shadow-[0_10px_30px_-8px_rgba(0,0,0,0.5)] ring-1 ring-black/5">
                      <div className="flex items-start justify-between gap-2">
                        <span className="text-base font-semibold leading-snug text-neutral-800">
                          {item.caption}
                        </span>
                        {item.mood && <span className="text-lg">{item.mood}</span>}
                      </div>
                      <p className="mt-3 text-[13px] leading-relaxed text-neutral-600">
                        {item.text}
                      </p>
                      <div className="mt-4 flex items-center justify-between border-t border-dashed border-neutral-200 pt-3">
                        <DateStamp date={item.date} />
                        {item.href && (
                          <a
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[11px] font-medium text-[#0a66c2] hover:underline"
                          >
                            via LinkedIn ↗
                          </a>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <p className="mood-in mt-14 text-center text-xs text-muted-foreground">
            more soon, I pin things as I go ✦
          </p>
        </div>
      </div>
    </div>
  );
}
