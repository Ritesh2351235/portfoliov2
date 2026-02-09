"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { useTheme } from "next-themes";

// ─── Playlist ────────────────────────────────────────────────────────
const PLAYLIST = [
  {
    title: "A Sky Full Of Stars",
    artist: "Coldplay",
    duration: 268,
    color: "#6366f1",
    src: "/music/Coldplay - A Sky Full Of Stars (Live at River Plate).mp3",
  },
  {
    title: "Sapphire",
    artist: "Ed Sheeran",
    duration: 230,
    color: "#ec4899",
    src: "/music/Ed Sheeran - Sapphire (Official Music Video).mp3",
  },
  {
    title: "7 Years",
    artist: "Lukas Graham",
    duration: 237,
    color: "#06b6d4",
    src: "/music/Lukas Graham - 7 Years [Official Music Video].mp3",
  },
  {
    title: "The Less I Know The Better",
    artist: "Tame Impala",
    duration: 218,
    color: "#f59e0b",
    src: "/music/Tame Impala - The Less I Know The Better (Audio).mp3",
  },
  {
    title: "Ride",
    artist: "Twenty One Pilots",
    duration: 214,
    color: "#10b981",
    src: "/music/twenty one pilots - Ride (Official Video).mp3",
  },
];

function formatTime(s: number) {
  const m = Math.floor(s / 60);
  const sec = Math.floor(s % 60);
  return `${m}:${sec.toString().padStart(2, "0")}`;
}

// ─── Theme colors ────────────────────────────────────────────────────
function useIPodTheme() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const dark = mounted ? resolvedTheme === "dark" : true; // default to dark until mounted

  return {
    dark,
    body: dark
      ? "linear-gradient(175deg, #2a2a2e 0%, #232327 30%, #1c1c20 70%, #161618 100%)"
      : "linear-gradient(175deg, #f0f0f0 0%, #e8e8e8 30%, #d8d8d8 70%, #c8c8c8 100%)",
    bodyBorder: dark ? "1px solid rgba(255,255,255,0.06)" : "1px solid rgba(0,0,0,0.08)",
    bodyShadow: dark
      ? "0 2px 4px rgba(0,0,0,0.3), 0 8px 24px rgba(0,0,0,0.4), 0 20px 48px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.08), inset 0 -1px 0 rgba(0,0,0,0.3)"
      : "0 2px 4px rgba(0,0,0,0.08), 0 8px 24px rgba(0,0,0,0.12), 0 20px 48px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.9), inset 0 -1px 0 rgba(0,0,0,0.05)",
    reflection: dark
      ? "linear-gradient(180deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0) 100%)"
      : "linear-gradient(180deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0) 100%)",
    screen: dark
      ? "linear-gradient(180deg, #1a1d2e 0%, #151828 40%, #111422 100%)"
      : "linear-gradient(180deg, #c5cdb8 0%, #b8c4a8 40%, #aab89a 100%)",
    screenShadow: dark
      ? "inset 0 2px 6px rgba(0,0,0,0.5), inset 0 0 0 1px rgba(255,255,255,0.05), 0 1px 0 rgba(255,255,255,0.05)"
      : "inset 0 2px 6px rgba(0,0,0,0.2), inset 0 0 0 1px rgba(0,0,0,0.12), 0 1px 0 rgba(255,255,255,0.5)",
    scanline: dark ? "rgba(255,255,255,0.02)" : "rgba(0,0,0,0.02)",
    headerBg: dark
      ? "linear-gradient(180deg, #252840 0%, #1e2138 100%)"
      : "linear-gradient(180deg, #8a9a7a 0%, #7a8a6a 100%)",
    headerText: dark ? "rgba(180,190,220,0.9)" : "rgba(20,30,15,0.9)",
    textPrimary: dark ? "rgba(200,210,230,0.85)" : "rgba(20,30,15,0.85)",
    textSecondary: dark ? "rgba(160,170,200,0.5)" : "rgba(20,30,15,0.5)",
    textTertiary: dark ? "rgba(140,150,180,0.35)" : "rgba(20,30,15,0.35)",
    iconFill: dark ? "rgba(180,190,220,0.7)" : "rgba(20,30,15,0.7)",
    selectedBg: dark
      ? "linear-gradient(180deg, #3a4a7a 0%, #2a3a6a 100%)"
      : "linear-gradient(180deg, #4a6a9a 0%, #3a5a8a 100%)",
    listBorder: dark ? "1px solid rgba(255,255,255,0.04)" : "1px solid rgba(0,0,0,0.06)",
    chevron: dark ? "rgba(180,190,220,0.6)" : "rgba(20,30,15,0.6)",
    barActive: dark ? "rgba(180,190,220,0.85)" : "rgba(30,30,30,0.85)",
    barInactive: dark ? "rgba(180,190,220,0.15)" : "rgba(30,30,30,0.15)",
    progressBg: dark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.1)",
    progressFill: dark
      ? "linear-gradient(90deg, rgba(100,130,200,0.6), rgba(80,110,180,0.8))"
      : "linear-gradient(90deg, rgba(60,80,50,0.6), rgba(40,60,35,0.8))",
    scrubber: dark ? "rgba(130,150,200,0.8)" : "rgba(40,55,30,0.8)",
    vinylHole: dark
      ? "linear-gradient(135deg, #252840, #1e2138)"
      : "linear-gradient(135deg, #b8c4a8, #a0b090)",
    vinylRing: dark
      ? "inset 0 0 0 8px rgba(40,45,70,0.6), inset 0 0 0 16px rgba(30,35,55,0.3), 0 2px 8px rgba(0,0,0,0.3)"
      : "inset 0 0 0 8px rgba(180,190,170,0.6), inset 0 0 0 16px rgba(160,170,150,0.3), 0 2px 8px rgba(0,0,0,0.15)",
    wheel: dark
      ? "linear-gradient(180deg, #333338 0%, #2a2a2f 50%, #222226 100%)"
      : "linear-gradient(180deg, #e4e4e4 0%, #d4d4d4 50%, #c8c8c8 100%)",
    wheelShadow: dark
      ? "inset 0 2px 4px rgba(255,255,255,0.06), inset 0 -2px 4px rgba(0,0,0,0.2), 0 1px 3px rgba(0,0,0,0.2), 0 4px 12px rgba(0,0,0,0.15)"
      : "inset 0 2px 4px rgba(255,255,255,0.6), inset 0 -2px 4px rgba(0,0,0,0.08), 0 1px 3px rgba(0,0,0,0.1), 0 4px 12px rgba(0,0,0,0.06)",
    wheelHighlight: dark
      ? "radial-gradient(circle at 50% 30%, rgba(255,255,255,0.04) 0%, transparent 60%)"
      : "radial-gradient(circle at 50% 30%, rgba(255,255,255,0.3) 0%, transparent 60%)",
    btnText: dark ? "rgba(255,255,255,0.4)" : "rgba(0,0,0,0.4)",
    btnTextActive: dark ? "rgba(255,255,255,0.7)" : "rgba(0,0,0,0.7)",
    btnIcon: dark ? 0.4 : 0.35,
    btnIconActive: dark ? 0.8 : 0.7,
    center: dark
      ? "linear-gradient(180deg, #3a3a40 0%, #303035 50%, #282830 100%)"
      : "linear-gradient(180deg, #e8e8e8 0%, #d8d8d8 50%, #ccc 100%)",
    centerActive: dark
      ? "linear-gradient(180deg, #2e2e34 0%, #28282e 100%)"
      : "linear-gradient(180deg, #d0d0d0 0%, #c0c0c0 100%)",
    centerShadow: dark
      ? "inset 0 1px 2px rgba(255,255,255,0.06), inset 0 -1px 2px rgba(0,0,0,0.15), 0 1px 4px rgba(0,0,0,0.2)"
      : "inset 0 1px 2px rgba(255,255,255,0.7), inset 0 -1px 2px rgba(0,0,0,0.06), 0 1px 4px rgba(0,0,0,0.1)",
    muteBg: dark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.05)",
    muteBgActive: dark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.08)",
    muteBorder: dark ? "1px solid rgba(255,255,255,0.08)" : "1px solid rgba(0,0,0,0.08)",
    muteText: dark ? "rgba(255,255,255,0.5)" : "rgba(0,0,0,0.5)",
    hintText: dark ? "rgba(255,255,255,0.25)" : "rgba(0,0,0,0.3)",
  };
}

// ─── Volume Bars ─────────────────────────────────────────────────────
function VolumeBars({ level, activeColor, inactiveColor }: { level: number; activeColor: string; inactiveColor: string }) {
  return (
    <div className="flex items-end gap-[2px] h-[10px]">
      {Array.from({ length: 8 }).map((_, i) => (
        <div
          key={i}
          className="transition-all duration-150"
          style={{
            width: 3,
            height: 3 + i * 1,
            borderRadius: 1,
            backgroundColor: i < Math.round(level * 8) ? activeColor : inactiveColor,
          }}
        />
      ))}
    </div>
  );
}

// ─── Marquee ─────────────────────────────────────────────────────────
function MarqueeText({ text, color }: { text: string; color: string }) {
  const textRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [shouldScroll, setShouldScroll] = useState(false);

  useEffect(() => {
    if (textRef.current && containerRef.current) {
      setShouldScroll(textRef.current.scrollWidth > containerRef.current.clientWidth);
    }
  }, [text]);

  return (
    <div
      ref={containerRef}
      className="overflow-hidden mb-0.5"
      style={{
        fontSize: 13,
        fontWeight: 700,
        color,
        fontFamily: '"SF Pro Text", "Helvetica Neue", Helvetica, sans-serif',
      }}
    >
      <div
        ref={textRef}
        className={shouldScroll ? "ipod-marquee" : ""}
        style={{ whiteSpace: "nowrap", display: "inline-block" }}
      >
        {text}
        {shouldScroll && <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{text}</span>}
      </div>
    </div>
  );
}

// ═════════════════════════════════════════════════════════════════════
export default function InteractiveIPod() {
  const t = useIPodTheme();

  const [screen, setScreen] = useState<"menu" | "playing">("menu");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [trackIndex, setTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(0.6);
  const [, setHasAudio] = useState(false);
  const [wheelActive, setWheelActive] = useState<string | null>(null);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const progressInterval = useRef<ReturnType<typeof setInterval> | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  useInView(containerRef, { once: false, margin: "-100px" });

  const track = PLAYLIST[trackIndex];

  useEffect(() => {
    const audio = new Audio();
    audio.preload = "metadata";
    audio.volume = volume;
    audio.muted = isMuted;
    audioRef.current = audio;
    audio.addEventListener("canplaythrough", () => setHasAudio(true));
    audio.addEventListener("error", () => setHasAudio(false));
    audio.addEventListener("ended", () => handleNext());
    return () => {
      audio.pause();
      audio.src = "";
      if (progressInterval.current) clearInterval(progressInterval.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!audioRef.current) return;
    const audio = audioRef.current;
    audio.src = PLAYLIST[trackIndex].src;
    audio.load();
    setProgress(0);
    setCurrentTime(0);
    if (isPlaying) audio.play().catch(() => {});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [trackIndex]);

  useEffect(() => { if (audioRef.current) audioRef.current.muted = isMuted; }, [isMuted]);
  useEffect(() => { if (audioRef.current) audioRef.current.volume = volume; }, [volume]);

  useEffect(() => {
    if (progressInterval.current) clearInterval(progressInterval.current);
    if (isPlaying) {
      progressInterval.current = setInterval(() => {
        if (audioRef.current && audioRef.current.duration) {
          const ct = audioRef.current.currentTime;
          setCurrentTime(ct);
          setProgress(ct / audioRef.current.duration);
        }
      }, 250);
    }
    return () => { if (progressInterval.current) clearInterval(progressInterval.current); };
  }, [isPlaying]);

  const handlePlayPause = useCallback(() => {
    if (!audioRef.current) return;
    if (isPlaying) { audioRef.current.pause(); setIsPlaying(false); }
    else { audioRef.current.play().catch(() => {}); setIsPlaying(true); if (screen === "menu") setScreen("playing"); }
  }, [isPlaying, screen]);

  const handleNext = useCallback(() => {
    setTrackIndex((i) => (i + 1) % PLAYLIST.length);
    setIsPlaying(true);
    if (screen === "menu") setScreen("playing");
  }, [screen]);

  const handlePrev = useCallback(() => {
    if (audioRef.current && audioRef.current.currentTime > 3) {
      audioRef.current.currentTime = 0; setCurrentTime(0); setProgress(0);
    } else { setTrackIndex((i) => (i - 1 + PLAYLIST.length) % PLAYLIST.length); setIsPlaying(true); }
  }, []);

  const handleMenu = useCallback(() => { if (screen === "playing") setScreen("menu"); }, [screen]);

  const handleSelect = useCallback(() => {
    if (screen === "menu") {
      setTrackIndex(selectedIndex); setScreen("playing"); setIsPlaying(true);
      if (audioRef.current) { audioRef.current.src = PLAYLIST[selectedIndex].src; audioRef.current.play().catch(() => {}); }
    }
  }, [screen, selectedIndex]);

  const handleVolumeUp = useCallback(() => setVolume((v) => Math.min(1, v + 0.15)), []);
  const handleVolumeDown = useCallback(() => setVolume((v) => Math.max(0, v - 0.15)), []);

  const handleWheel = useCallback((e: React.WheelEvent) => {
    if (screen === "menu") {
      if (e.deltaY > 0) setSelectedIndex((i) => Math.min(PLAYLIST.length - 1, i + 1));
      else setSelectedIndex((i) => Math.max(0, i - 1));
    } else {
      if (e.deltaY < 0) handleVolumeUp(); else handleVolumeDown();
    }
  }, [screen, handleVolumeUp, handleVolumeDown]);

  const font = '"SF Pro Text", "Helvetica Neue", Helvetica, sans-serif';

  return (
    <div ref={containerRef} className="flex flex-col items-center justify-center gap-4">
      {/* iPod Body */}
      <div
        className="ipod-body relative select-none"
        onWheel={handleWheel}
        style={{
          width: 260, height: 430, borderRadius: 28,
          background: t.body, boxShadow: t.bodyShadow, border: t.bodyBorder,
          transition: "background 0.3s, box-shadow 0.3s, border 0.3s",
        }}
      >
        {/* Reflection */}
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "40%", borderRadius: "28px 28px 0 0", background: t.reflection, pointerEvents: "none" }} />

        {/* Screen */}
        <div
          className="absolute overflow-hidden"
          style={{
            top: 24, left: 24, right: 24, height: 160, borderRadius: 8,
            background: t.screen, boxShadow: t.screenShadow,
            transition: "background 0.3s, box-shadow 0.3s",
          }}
        >
          {/* Scanlines */}
          <div style={{ position: "absolute", inset: 0, background: `repeating-linear-gradient(0deg, transparent, transparent 1px, ${t.scanline} 1px, ${t.scanline} 2px)`, pointerEvents: "none", zIndex: 10 }} />

          {/* Playing glow */}
          {isPlaying && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              style={{ position: "absolute", inset: -20, background: `radial-gradient(ellipse at center, ${track.color}20 0%, transparent 70%)`, pointerEvents: "none", zIndex: 1 }} />
          )}

          <AnimatePresence mode="wait">
            {screen === "menu" ? (
              <motion.div key="menu" initial={{ x: -212, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -212, opacity: 0 }} transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }} className="absolute inset-0 flex flex-col" style={{ zIndex: 5 }}>
                {/* Header */}
                <div className="flex items-center justify-between px-3 py-1.5" style={{ background: t.headerBg, borderBottom: t.listBorder }}>
                  <span style={{ fontSize: 11, fontWeight: 700, color: t.headerText, fontFamily: font, letterSpacing: "0.02em" }}>Music</span>
                  <div className="flex items-center gap-2">
                    <VolumeBars level={volume} activeColor={t.barActive} inactiveColor={t.barInactive} />
                    {isPlaying && (
                      <motion.div animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 1.2, repeat: Infinity }}>
                        <svg width="10" height="10" viewBox="0 0 10 10"><polygon points="2,1 9,5 2,9" fill={t.iconFill} /></svg>
                      </motion.div>
                    )}
                  </div>
                </div>

                {/* Song list */}
                <div className="flex-1 overflow-hidden">
                  {PLAYLIST.map((song, i) => (
                    <div
                      key={i}
                      className="flex items-center px-3 py-[5px] cursor-pointer"
                      style={{
                        background: selectedIndex === i ? t.selectedBg : "transparent",
                        borderBottom: t.listBorder,
                      }}
                      onClick={() => {
                        setSelectedIndex(i); setTrackIndex(i); setScreen("playing"); setIsPlaying(true);
                        if (audioRef.current) { audioRef.current.src = PLAYLIST[i].src; audioRef.current.play().catch(() => {}); }
                      }}
                    >
                      {trackIndex === i && isPlaying && (
                        <motion.div className="mr-1.5 flex items-end gap-[1px]" style={{ height: 10, width: 10, flexShrink: 0 }}>
                          {[0, 1, 2].map((bar) => (
                            <motion.div key={bar} animate={{ height: ["30%", "100%", "50%", "80%", "30%"] }}
                              transition={{ duration: 0.8, repeat: Infinity, delay: bar * 0.15 }}
                              style={{ width: 2, borderRadius: 1, backgroundColor: selectedIndex === i ? "rgba(255,255,255,0.9)" : t.textSecondary }} />
                          ))}
                        </motion.div>
                      )}
                      <div className="flex-1 min-w-0">
                        <div style={{ fontSize: 11, fontWeight: 600, color: selectedIndex === i ? "rgba(255,255,255,0.95)" : t.textPrimary, fontFamily: font, lineHeight: 1.2, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{song.title}</div>
                        <div style={{ fontSize: 9, color: selectedIndex === i ? "rgba(255,255,255,0.65)" : t.textTertiary, fontFamily: font, lineHeight: 1.2 }}>{song.artist}</div>
                      </div>
                      <svg width="6" height="10" viewBox="0 0 6 10" style={{ opacity: selectedIndex === i ? 0.8 : 0.25, flexShrink: 0 }}>
                        <path d="M1 1 L5 5 L1 9" stroke={selectedIndex === i ? "white" : t.chevron} strokeWidth="1.5" fill="none" strokeLinecap="round" />
                      </svg>
                    </div>
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div key="playing" initial={{ x: 212, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: 212, opacity: 0 }} transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }} className="absolute inset-0 flex flex-col" style={{ zIndex: 5 }}>
                {/* Header */}
                <div className="flex items-center justify-between px-3 py-1.5" style={{ background: t.headerBg, borderBottom: t.listBorder }}>
                  <span style={{ fontSize: 11, fontWeight: 700, color: t.headerText, fontFamily: font, letterSpacing: "0.02em" }}>Now Playing</span>
                  <div className="flex items-center gap-2">
                    <VolumeBars level={volume} activeColor={t.barActive} inactiveColor={t.barInactive} />
                    {isPlaying && (
                      <motion.div animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 1.2, repeat: Infinity }}>
                        <svg width="10" height="10" viewBox="0 0 10 10"><polygon points="2,1 9,5 2,9" fill={t.iconFill} /></svg>
                      </motion.div>
                    )}
                  </div>
                </div>

                {/* Album + info */}
                <div className="flex-1 flex items-center px-3 gap-3">
                  <motion.div
                    animate={isPlaying ? { rotate: 360 } : { rotate: 0 }}
                    transition={isPlaying ? { duration: 4, repeat: Infinity, ease: "linear" } : { duration: 0.3 }}
                    style={{
                      width: 72, height: 72, borderRadius: "50%", flexShrink: 0,
                      background: `conic-gradient(from 0deg, ${track.color}, ${track.color}88, ${track.color}44, ${track.color}88, ${track.color})`,
                      boxShadow: t.vinylRing,
                      display: "flex", alignItems: "center", justifyContent: "center",
                    }}
                  >
                    <div style={{ width: 12, height: 12, borderRadius: "50%", background: t.vinylHole, boxShadow: "inset 0 1px 3px rgba(0,0,0,0.2)" }} />
                  </motion.div>
                  <div className="flex-1 min-w-0">
                    <MarqueeText text={track.title} color={t.textPrimary} />
                    <div style={{ fontSize: 10, color: t.textSecondary, fontFamily: font }}>{track.artist}</div>
                    <div style={{ fontSize: 9, color: t.textTertiary, fontFamily: font, marginTop: 2 }}>{trackIndex + 1} of {PLAYLIST.length}</div>
                  </div>
                </div>

                {/* Progress */}
                <div className="px-3 pb-2">
                  <div className="relative w-full overflow-hidden" style={{ height: 4, borderRadius: 2, background: t.progressBg }}>
                    <motion.div style={{ position: "absolute", left: 0, top: 0, bottom: 0, borderRadius: 2, width: `${progress * 100}%`, background: t.progressFill }} />
                    <div style={{ position: "absolute", top: "50%", left: `${progress * 100}%`, transform: "translate(-50%, -50%) rotate(45deg)", width: 6, height: 6, background: t.scrubber, borderRadius: 1 }} />
                  </div>
                  <div className="flex justify-between mt-0.5" style={{ fontSize: 8, color: t.textTertiary, fontFamily: font, fontVariantNumeric: "tabular-nums" }}>
                    <span>{formatTime(currentTime)}</span>
                    <span>-{formatTime(track.duration - currentTime)}</span>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Click Wheel */}
        <div className="absolute" style={{ bottom: 32, left: "50%", transform: "translateX(-50%)" }}>
          <div className="relative" style={{ width: 180, height: 180, borderRadius: "50%", background: t.wheel, boxShadow: t.wheelShadow, transition: "background 0.3s, box-shadow 0.3s" }}>
            <div style={{ position: "absolute", inset: 0, borderRadius: "50%", background: t.wheelHighlight, pointerEvents: "none" }} />

            {/* MENU */}
            <button className="absolute flex items-center justify-center" style={{ top: 8, left: "50%", transform: "translateX(-50%)", width: 50, height: 30, background: "transparent", border: "none", cursor: "pointer", zIndex: 2 }}
              onClick={handleMenu} onMouseDown={() => setWheelActive("menu")} onMouseUp={() => setWheelActive(null)} onMouseLeave={() => setWheelActive(null)}>
              <span style={{ fontSize: 10, fontWeight: 700, color: wheelActive === "menu" ? t.btnTextActive : t.btnText, fontFamily: font, letterSpacing: "0.08em", textTransform: "uppercase", transition: "color 0.15s" }}>Menu</span>
            </button>

            {/* Prev */}
            <button className="absolute flex items-center justify-center" style={{ left: 6, top: "50%", transform: "translateY(-50%)", width: 34, height: 50, background: "transparent", border: "none", cursor: "pointer", zIndex: 2 }}
              onClick={handlePrev} onMouseDown={() => setWheelActive("prev")} onMouseUp={() => setWheelActive(null)} onMouseLeave={() => setWheelActive(null)}>
              <svg width="14" height="12" viewBox="0 0 14 12" style={{ opacity: wheelActive === "prev" ? t.btnIconActive : t.btnIcon, transition: "opacity 0.15s" }}>
                <path d="M7 0 L1 6 L7 12 Z" fill="currentColor" /><path d="M13 0 L7 6 L13 12 Z" fill="currentColor" /><rect x="0" y="1" width="1.5" height="10" fill="currentColor" />
              </svg>
            </button>

            {/* Next */}
            <button className="absolute flex items-center justify-center" style={{ right: 6, top: "50%", transform: "translateY(-50%)", width: 34, height: 50, background: "transparent", border: "none", cursor: "pointer", zIndex: 2 }}
              onClick={handleNext} onMouseDown={() => setWheelActive("next")} onMouseUp={() => setWheelActive(null)} onMouseLeave={() => setWheelActive(null)}>
              <svg width="14" height="12" viewBox="0 0 14 12" style={{ opacity: wheelActive === "next" ? t.btnIconActive : t.btnIcon, transition: "opacity 0.15s" }}>
                <path d="M1 0 L7 6 L1 12 Z" fill="currentColor" /><path d="M7 0 L13 6 L7 12 Z" fill="currentColor" /><rect x="12.5" y="1" width="1.5" height="10" fill="currentColor" />
              </svg>
            </button>

            {/* Play/Pause */}
            <button className="absolute flex items-center justify-center" style={{ bottom: 8, left: "50%", transform: "translateX(-50%)", width: 50, height: 30, background: "transparent", border: "none", cursor: "pointer", zIndex: 2 }}
              onClick={handlePlayPause} onMouseDown={() => setWheelActive("play")} onMouseUp={() => setWheelActive(null)} onMouseLeave={() => setWheelActive(null)}>
              <svg width="18" height="12" viewBox="0 0 18 12" style={{ opacity: wheelActive === "play" ? t.btnIconActive : t.btnIcon, transition: "opacity 0.15s" }}>
                <path d="M1 0 L7 6 L1 12 Z" fill="currentColor" /><rect x="10" y="0" width="3" height="12" fill="currentColor" /><rect x="15" y="0" width="3" height="12" fill="currentColor" />
              </svg>
            </button>

            {/* Center */}
            <button className="absolute" style={{
              top: "50%", left: "50%", transform: "translate(-50%, -50%)",
              width: 68, height: 68, borderRadius: "50%",
              background: wheelActive === "select" ? t.centerActive : t.center,
              boxShadow: t.centerShadow,
              border: "none", cursor: "pointer", zIndex: 3,
              transition: "background 0.15s, box-shadow 0.15s",
            }}
              onClick={handleSelect} onMouseDown={() => setWheelActive("select")} onMouseUp={() => setWheelActive(null)} onMouseLeave={() => setWheelActive(null)} />
          </div>
        </div>
      </div>

      {/* Mute toggle */}
      <motion.button
        initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
        onClick={() => setIsMuted((m) => !m)}
        className="flex items-center gap-2 px-4 py-2 rounded-full transition-all"
        style={{ background: isMuted ? t.muteBg : t.muteBgActive, border: t.muteBorder, cursor: "pointer", fontSize: 12, fontWeight: 500, color: t.muteText, fontFamily: font }}
        whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
      >
        {isMuted ? (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" /><line x1="23" y1="9" x2="17" y2="15" /><line x1="17" y1="9" x2="23" y2="15" />
          </svg>
        ) : (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" /><path d="M15.54 8.46a5 5 0 0 1 0 7.07" /><path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
          </svg>
        )}
        <span>{isMuted ? "Unmute" : "Mute"}</span>
      </motion.button>

      {/* Hint */}
      <p className="text-center" style={{ fontSize: 11, color: t.hintText, fontFamily: font, maxWidth: 220, lineHeight: 1.4 }}>
        Scroll on the wheel to browse. Click to play.
      </p>

      <style jsx>{`
        .ipod-marquee { animation: ipod-scroll 8s linear infinite; }
        @keyframes ipod-scroll { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .ipod-body { -webkit-tap-highlight-color: transparent; }
      `}</style>
    </div>
  );
}
