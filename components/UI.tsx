"use client"; 
// ^ If you’re using the Next.js App Router (app directory), mark this component as client-side.

import { atom, useAtom } from "jotai";
import { useEffect } from "react";

// If you have more pictures, just keep them in the array as before.
const pictures = [
  "DSC00680",
  "DSC00933",
  "DSC00966",
  "DSC00983",
  "DSC01011",
  "DSC01040",
  "DSC01064",
  "DSC01071",
  "DSC01103",
  "DSC01145",
  "DSC01420",
  "DSC01461",
  "DSC01489",
  "DSC02031",
  "DSC02064",
  "DSC02069",
];

// Create a global atom for the current page.
export const pageAtom = atom<number>(0);

// Define an interface for each page in the book.
interface PageData {
  front: string;
  back: string;
}

// Build an array of pages (cover, internal pages, back cover).
export const pages: PageData[] = [
  {
    front: "book-cover",
    back: pictures[0],
  },
];

// Populate pages in pairs (as in your original logic).
for (let i = 1; i < pictures.length - 1; i += 2) {
  pages.push({
    front: pictures[i % pictures.length],
    back: pictures[(i + 1) % pictures.length],
  });
}

// Add the back cover as the last page.
pages.push({
  front: pictures[pictures.length - 1],
  back: "book-back",
});

export default function UI() {
  const [page, setPage] = useAtom(pageAtom);

  useEffect(() => {
    // Play page flip audio whenever the page changes
    const audio = new Audio("/audios/page-flip-01a.mp3");
    audio.play();
  }, [page]);

  return (
    <>
      <main className="pointer-events-none select-none z-10 fixed inset-0 flex flex-col justify-between">
        <a
          className="pointer-events-auto mt-10 ml-10"
          href="https://lessons.wawasensei.dev/courses/react-three-fiber"
        >
          <img className="w-20" src="/images/wawasensei-white.png" alt="Logo" />
        </a>
        <div className="w-full overflow-auto pointer-events-auto flex justify-center">
          <div className="overflow-auto flex items-center gap-4 max-w-full p-10">
            {pages.map((_, index) => (
              <button
                key={index}
                className={`border-transparent hover:border-white transition-all duration-300 px-4 py-3 rounded-full text-lg uppercase shrink-0 border ${
                  index === page
                    ? "bg-white/90 text-black"
                    : "bg-black/30 text-white"
                }`}
                onClick={() => setPage(index)}
              >
                {index === 0 ? "Cover" : `Page ${index}`}
              </button>
            ))}
            <button
              className={`border-transparent hover:border-white transition-all duration-300 px-4 py-3 rounded-full text-lg uppercase shrink-0 border ${
                page === pages.length
                  ? "bg-white/90 text-black"
                  : "bg-black/30 text-white"
              }`}
              onClick={() => setPage(pages.length)}
            >
              Back Cover
            </button>
          </div>
        </div>
      </main>

      {/* Scrolling text animation (same as before) */}
      <div className="fixed inset-0 flex items-center -rotate-2 select-none">
        <div className="relative">
          <div className="bg-white/0 animate-horizontal-scroll flex items-center gap-8 w-max px-8">
            <h1 className="shrink-0 text-white text-10xl font-black">
              Wawa Sensei
            </h1>
            <h2 className="shrink-0 text-white text-8xl italic font-light">
              React Three Fiber
            </h2>
            <h2 className="shrink-0 text-white text-12xl font-bold">Three.js</h2>
            <h2 className="shrink-0 text-transparent text-12xl font-bold italic outline-text">
              Ultimate Guide
            </h2>
            <h2 className="shrink-0 text-white text-9xl font-medium">Tutorials</h2>
            <h2 className="shrink-0 text-white text-9xl font-extralight italic">
              Learn
            </h2>
            <h2 className="shrink-0 text-white text-13xl font-bold">Practice</h2>
            <h2 className="shrink-0 text-transparent text-13xl font-bold outline-text italic">
              Creative
            </h2>
          </div>
          <div className="absolute top-0 left-0 bg-white/0 animate-horizontal-scroll-2 flex items-center gap-8 px-8 w-max">
            <h1 className="shrink-0 text-white text-10xl font-black">
              Wawa Sensei
            </h1>
            <h2 className="shrink-0 text-white text-8xl italic font-light">
              React Three Fiber
            </h2>
            <h2 className="shrink-0 text-white text-12xl font-bold">Three.js</h2>
            <h2 className="shrink-0 text-transparent text-12xl font-bold italic outline-text">
              Ultimate Guide
            </h2>
            <h2 className="shrink-0 text-white text-9xl font-medium">Tutorials</h2>
            <h2 className="shrink-0 text-white text-9xl font-extralight italic">
              Learn
            </h2>
            <h2 className="shrink-0 text-white text-13xl font-bold">Practice</h2>
            <h2 className="shrink-0 text-transparent text-13xl font-bold outline-text italic">
              Creative
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}
