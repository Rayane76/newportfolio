"use client";

import { useState, useRef, useCallback } from "react";

const SWIPE_THRESHOLD = 45; // px of drag needed to trigger a slide change
const DIRECTION_LOCK_THRESHOLD = 8; // px moved before we decide horizontal vs vertical

export default function ProjectInfos({ project }) {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isDragging, setIsDragging] = useState(false);

    const containerRef = useRef(null);
    const trackRef = useRef(null);

    // Mutable drag state — avoids re-rendering on every pointermove
    const dragState = useRef({
        startX: 0,
        startY: 0,
        offset: 0,
        pointerId: null,
        width: 0,
        direction: null, // null | "horizontal" | "vertical"
    });

    if (!project) {
        return (
            <div className="min-h-screen flex items-center justify-center px-5 text-white">
                <p className="text-lg text-fun-gray">Project not found.</p>
            </div>
        );
    }

    const media = project.media?.length ? project.media : [];
    const count = media.length;

    const clampIndex = (index) => (count ? (index + count) % count : 0);

    const goToPrevious = () => count && setActiveIndex((current) => clampIndex(current - 1));
    const goToNext = () => count && setActiveIndex((current) => clampIndex(current + 1));

    const setTrackTransform = (offsetPx, withTransition) => {
        const track = trackRef.current;
        if (!track) return;
        track.style.transition = withTransition
            ? "transform 420ms cubic-bezier(0.22, 1, 0.36, 1)"
            : "none";
        track.style.transform = `translateX(calc(${-activeIndex * 100}% + ${offsetPx}px))`;
    };

    const handlePointerDown = (e) => {
        if (count < 2) return;
        // Let buttons (arrows, dots) handle their own clicks — don't hijack them
        if (e.target.closest("button")) return;

        const container = containerRef.current;
        if (!container) return;

        dragState.current = {
            startX: e.clientX,
            startY: e.clientY,
            offset: 0,
            pointerId: e.pointerId,
            width: container.clientWidth,
            direction: null,
        };
        // Don't capture the pointer or set isDragging yet — wait until we know
        // this is a horizontal gesture, so vertical page scroll stays smooth.
    };

    const handlePointerMove = (e) => {
        const state = dragState.current;
        if (state.pointerId !== e.pointerId || count < 2) return;

        const dx = e.clientX - state.startX;
        const dy = e.clientY - state.startY;

        if (state.direction === null) {
            if (Math.abs(dx) < DIRECTION_LOCK_THRESHOLD && Math.abs(dy) < DIRECTION_LOCK_THRESHOLD) {
                return; // not enough movement yet to decide
            }
            state.direction = Math.abs(dx) > Math.abs(dy) ? "horizontal" : "vertical";
            if (state.direction === "horizontal") {
                containerRef.current?.setPointerCapture(e.pointerId);
                setIsDragging(true);
            }
        }

        if (state.direction !== "horizontal") return; // let native vertical scroll happen

        e.preventDefault();
        state.offset = dx;
        setTrackTransform(dx, false);
    };

    const endDrag = useCallback((e) => {
        const state = dragState.current;
        if (state.direction !== "horizontal") {
            state.pointerId = null;
            return;
        }

        const delta = state.offset;
        state.pointerId = null;
        state.direction = null;
        setIsDragging(false);

        if (delta <= -SWIPE_THRESHOLD) {
            goToNext();
        } else if (delta >= SWIPE_THRESHOLD) {
            goToPrevious();
        } else {
            // snap back
            setTrackTransform(0, true);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handlePointerUp = (e) => endDrag(e);
    const handlePointerLeave = (e) => {
        if (dragState.current.direction === "horizontal") endDrag(e);
    };

    return (
        <div className="relative w-full flex justify-center px-1 sm:px-5 pt-2 pb-14 md:py-20 text-white overflow-hidden">

            <div className="relative w-full px-2 max-w-6xl">
                <div className="mb-10 max-w-3xl">
                    <p className="text-fun-pink uppercase tracking-[0.3em] text-xs font-semibold mb-4 flex items-center gap-3">
                        <span className="h-px w-8 bg-fun-pink/60" />
                        Project Infos
                    </p>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-5 tracking-tight">
                        {project.title}
                    </h1>
                    <p className="text-fun-gray text-base md:text-lg leading-8">
                        {project.longDesc || project.desc}
                    </p>
                </div>

                <div className="grid gap-8 lg:grid-cols-[1.3fr_0.9fr] items-start">
                    {/* Gallery */}
                    <div className="rounded-2xl sm:rounded-3xl border border-white/10 bg-[#0b1020] p-2 sm:p-5 shadow-2xl shadow-black/40">
                        <div
                            ref={containerRef}
                            onPointerDown={handlePointerDown}
                            onPointerMove={handlePointerMove}
                            onPointerUp={handlePointerUp}
                            onPointerCancel={handlePointerLeave}
                            onPointerLeave={handlePointerLeave}
                            className="group relative overflow-hidden rounded-xl sm:rounded-2xl border border-white/10 bg-black/30 touch-pan-y select-none cursor-grab active:cursor-grabbing"
                        >
                            <div
                                ref={trackRef}
                                className="flex w-full"
                                style={{
                                    transform: `translateX(${-activeIndex * 100}%)`,
                                    transition: "transform 420ms cubic-bezier(0.22, 1, 0.36, 1)",
                                    willChange: "transform",
                                }}
                            >
                                {media.map((item, index) => (
                                    <div key={item.src} className="relative w-full flex-none">
                                        {item.type === "video" ? (
                                            <video
                                                className="aspect-[4/3] md:aspect-[16/9] w-full object-cover"
                                                controls
                                                playsInline
                                                draggable={false}
                                                src={item.src}
                                            />
                                        ) : (
                                            <img
                                                src={item.src}
                                                alt={item.alt || `${project.title} ${index + 1}`}
                                                className="aspect-[4/3] md:aspect-[16/9] w-full object-cover object-center pointer-events-none"
                                                draggable={false}
                                            />
                                        )}
                                    </div>
                                ))}
                            </div>

                            {/* Subtle gradient edges to hint more content */}
                            {count > 1 && (
                                <>
                                    <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-black/40 to-transparent" />
                                    <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-black/40 to-transparent" />
                                </>
                            )}

                            {/* Arrows: desktop only, quiet by default, reveal on hover */}
                            {count > 1 && (
                                <>
                                    <button
                                        type="button"
                                        onClick={goToPrevious}
                                        aria-label="Previous media"
                                        className="hidden md:flex absolute left-3 top-1/2 -translate-y-1/2 h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-black/40 text-white opacity-0 backdrop-blur transition-all duration-200 hover:bg-fun-pink hover:border-fun-pink group-hover:opacity-100"
                                    >
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M15 18l-6-6 6-6" />
                                        </svg>
                                    </button>
                                    <button
                                        type="button"
                                        onClick={goToNext}
                                        aria-label="Next media"
                                        className="hidden md:flex absolute right-3 top-1/2 -translate-y-1/2 h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-black/40 text-white opacity-0 backdrop-blur transition-all duration-200 hover:bg-fun-pink hover:border-fun-pink group-hover:opacity-100"
                                    >
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M9 18l6-6-6-6" />
                                        </svg>
                                    </button>
                                </>
                            )}
                        </div>

                        {/* Dots — primary nav on mobile, secondary confirmation on desktop */}
                        {count > 1 && (
                            <div className="mt-4 flex items-center justify-center gap-2">
                                {media.map((item, index) => (
                                    <button
                                        key={item.src}
                                        type="button"
                                        onClick={() => setActiveIndex(index)}
                                        aria-label={`Go to slide ${index + 1}`}
                                        className={`h-1.5 rounded-full transition-all duration-300 ${index === activeIndex
                                            ? "w-6 bg-fun-pink"
                                            : "w-1.5 bg-white/20 hover:bg-white/40"
                                            }`}
                                    />
                                ))}
                            </div>
                        )}

                        {/* Thumbnails — desktop only */}
                        {count > 1 && (
                            <div className="mt-4 hidden md:flex flex-wrap gap-3">
                                {media.map((item, index) => (
                                    <button
                                        key={item.src}
                                        type="button"
                                        onClick={() => setActiveIndex(index)}
                                        className={`relative h-16 w-24 overflow-hidden rounded-lg transition-all duration-200 ${index === activeIndex
                                            ? "ring-2 ring-fun-pink opacity-100"
                                            : "ring-1 ring-white/10 opacity-50 hover:opacity-90"
                                            }`}
                                    >
                                        {item.type === "video" ? (
                                            <div className="flex h-full w-full items-center justify-center bg-black/60 text-[11px] font-medium tracking-wide text-white">
                                                VIDEO
                                            </div>
                                        ) : (
                                            <img
                                                src={item.src}
                                                alt={item.alt || `${project.title} preview ${index + 1}`}
                                                className="h-full w-full object-cover object-center"
                                                draggable={false}
                                            />
                                        )}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Details */}
                    <div className="rounded-3xl border border-white/10 bg-[#0b1020] p-6 md:p-8">
                        <h2 className="text-2xl font-bold mb-4">Details</h2>
                        <p className="text-fun-gray leading-8 mb-7">{project.desc}</p>

                        <div className="mb-8">
                            <h3 className="text-xs uppercase tracking-[0.3em] text-fun-pink mb-3 font-semibold">
                                Stack
                            </h3>
                            <ul className="flex flex-wrap gap-2">
                                {project.techs.map((tech) => (
                                    <li
                                        key={tech}
                                        className="flex items-center gap-2 rounded-full border border-fun-pink/20 bg-fun-pink-dark/60 px-3.5 py-2 text-sm text-white transition-colors hover:border-fun-pink/50"
                                    >
                                        <span className="h-1.5 w-1.5 rounded-full bg-fun-pink" />
                                        {tech}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="h-px w-full bg-white/10 mb-7" />

                        <div className="flex flex-col gap-3 sm:flex-row">
                            {project.link && project.link !== "#" && (
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex flex-1 items-center justify-center gap-2 whitespace-nowrap rounded-xl bg-white px-4 py-3 text-sm md:text-base font-semibold text-black transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-white/10"
                                >
                                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
                                        <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                                        <path d="M15 3h6v6" />
                                        <path d="M10 14L21 3" />
                                    </svg>
                                    Live Project
                                </a>
                            )}
                            {project.github && (
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex flex-1 items-center justify-center gap-2 whitespace-nowrap rounded-xl border border-white/15 bg-transparent px-4 py-3 text-sm md:text-base font-semibold text-white transition-colors duration-200 hover:border-fun-pink hover:text-fun-pink"
                                >
                                    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" className="shrink-0">
                                        <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.29 9.4 7.86 10.93.57.1.78-.25.78-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.18-3.08-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.15 1.18a10.9 10.9 0 015.73 0c2.19-1.49 3.15-1.18 3.15-1.18.63 1.58.23 2.75.12 3.04.74.8 1.18 1.82 1.18 3.08 0 4.41-2.7 5.38-5.27 5.67.42.36.78 1.07.78 2.16 0 1.56-.01 2.82-.01 3.2 0 .3.2.66.79.55C20.71 21.39 24 17.08 24 12c0-6.35-5.15-11.5-12-11.5z" />
                                    </svg>
                                    GitHub Repo
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}