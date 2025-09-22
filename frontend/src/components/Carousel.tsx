import React from "react";
import { MoveLeft, MoveRight, X } from "lucide-react";

const DEFAULT_IMAGES = import.meta.glob(
  "../assets/photos/events/*.{jpg,jpeg,png,webp}",
  { eager: true, import: "default" }
) as Record<string, string>;

const sortByKey = (entries: [string, string][]) =>
  entries.sort(([a], [b]) => a.localeCompare(b));

const buildImageList = (customImages?: string[]) => {
  if (customImages && customImages.length) {
    return customImages;
  }
  return sortByKey(Object.entries(DEFAULT_IMAGES)).map(([, value]) => value);
};

type CarouselProps = {
  images?: string[];
};

const Carousel: React.FC<CarouselProps> = ({ images: overrideImages }) => {
  const images = React.useMemo(() => buildImageList(overrideImages), [overrideImages]);

  const [open, setOpen] = React.useState(false);
  const [index, setIndex] = React.useState(0);
  const [slide, setSlide] = React.useState(0);
  const [animate, setAnimate] = React.useState(true);
  const [paused, setPaused] = React.useState(false);
  const itemRef = React.useRef<HTMLButtonElement | null>(null);
  const [itemW, setItemW] = React.useState(0);
  const gap = 0;

  React.useEffect(() => {
    const measure = () => {
      if (itemRef.current) {
        const rect = itemRef.current.getBoundingClientRect();
        setItemW(rect.width);
      }
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  React.useEffect(() => {
    if (paused || images.length === 0 || itemW === 0) return;
    const id = window.setInterval(() => {
      setSlide((s) => s + 1);
    }, 2500);
    return () => window.clearInterval(id);
  }, [paused, images.length, itemW]);

  React.useEffect(() => {
    if (images.length === 0) return;
    if (slide >= images.length) {
      setAnimate(false);
      setSlide(0);
      requestAnimationFrame(() => setAnimate(true));
    }
  }, [slide, images.length]);

  const openAt = (i: number) => {
    if (!images.length) return;
    const safe = ((i % images.length) + images.length) % images.length;
    setIndex(safe);
    setOpen(true);
  };
  const next = () => setIndex((i) => (i + 1) % images.length);
  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);

  React.useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const translate = -(slide * (itemW + gap));

  if (!images.length) {
    return null;
  }

  return (
    <div className="relative left-1/2 right-1/2 w-screen -mx-[50vw] overflow-hidden">
      <div
        className="relative w-full overflow-hidden"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {/* <button
          type="button"
          onClick={() => setSlide((s) => Math.max(0, s - 1))}
          className="absolute left-3 top-1/2 z-10 -translate-y-1/2 px-1 text-3xl font-bold leading-none text-black hover:text-gray-700"
          aria-label="Previous"
        >
          <span>&lt;</span>
        </button>
        <button
          type="button"
          onClick={() => setSlide((s) => s + 1)}
          className="absolute right-3 top-1/2 z-10 -translate-y-1/2 px-1 text-3xl font-bold leading-none text-black hover:text-gray-700"
          aria-label="Next"
        >
          <span>&gt;</span>
        </button> */}

        <div
          className={
            "flex w-full select-none gap-3 " +
            (animate ? "transition-transform duration-700 ease-out" : "transition-none")
          }
          style={{ transform: `translateX(${translate}px)` }}
        >
          {[...images, ...images].map((src, i) => (
            <button
              ref={i === 0 ? itemRef : undefined}
              key={`${src}-${i}`}
              type="button"
              onClick={() => openAt(i % images.length)}
              className="relative !p-0 h-64 sm:h-72 md:h-80 w-[26rem] sm:w-[28rem] md:w-[32rem] shrink-0 overflow-hidden"
            >
              <img
                src={src}
                alt={`Event ${i + 1}`}
                className="h-full w-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>

      {open && images[index] && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setOpen(false)}
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              setOpen(false);
            }}
            className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-black hover:bg-white/20"
            aria-label="Close"
          >
            <X className="h-6 w-6" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2 text-black hover:bg-white/20"
            aria-label="Previous"
          >
            <MoveLeft className="h-6 w-6" />
          </button>
          <img
            src={images[index]}
            alt="Selected event"
            className="max-h-[90vh] max-w-[90vw] rounded-lg object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2 text-black hover:bg-white/20"
            aria-label="Next"
          >
            <MoveRight className="h-6 w-6" />
          </button>
        </div>
      )}
    </div>
  );
};

export default Carousel;
