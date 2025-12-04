import { ChevronLeft, ChevronRight, Circle } from 'lucide-react';

interface CarouselControlsProps {
  totalSlides: number;
  currentSlide: number;
  onPrevious: () => void;
  onNext: () => void;
  onDotClick: (index: number) => void;
}

export function CarouselControls({
  totalSlides,
  currentSlide,
  onPrevious,
  onNext,
  onDotClick,
}: CarouselControlsProps) {
  return (
    <>
      <button
        onClick={onPrevious}
        className="absolute left-8 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm p-3 rounded-full transition-all duration-300 group"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
      </button>

      <button
        onClick={onNext}
        className="absolute right-8 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm p-3 rounded-full transition-all duration-300 group"
        aria-label="Next image"
      >
        <ChevronRight className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
      </button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            onClick={() => onDotClick(index)}
            className="group"
            aria-label={`Go to slide ${index + 1}`}
          >
            <Circle
              className={`w-3 h-3 transition-all duration-300 ${
                index === currentSlide
                  ? 'fill-white text-white scale-125'
                  : 'fill-white/40 text-white/40 group-hover:fill-white/60 group-hover:text-white/60'
              }`}
            />
          </button>
        ))}
      </div>
    </>
  );
}
