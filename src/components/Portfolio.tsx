import { useState } from "react";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

interface PortfolioProps {
  images: readonly string[];
}

export default function Portfolio({ images }: PortfolioProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goToPrevious = (e: React.MouseEvent) => {
    e.preventDefault();
    if (currentSlide > 0) {
      goToSlide(currentSlide - 1);
    }
  };

  const goToNext = (e: React.MouseEvent) => {
    e.preventDefault();
    if (currentSlide < images.length - 1) {
      goToSlide(currentSlide + 1);
    }
  };

  return (
    <section id="portfolio" className="bg-white py-12 sm:py-20 relative">
      {/* Scattered dots */}
      <div className="absolute top-12 right-8 w-2 h-2 bg-red-500 rounded-full opacity-60"></div>
      <div className="absolute top-20 right-12 w-2 h-2 bg-green-500 rounded-full opacity-60"></div>
      <div className="absolute top-28 right-6 w-2 h-2 bg-blue-500 rounded-full opacity-60"></div>
      <div className="absolute top-16 left-8 w-2 h-2 bg-green-500 rounded-full opacity-60"></div>
      <div className="absolute top-24 left-12 w-2 h-2 bg-yellow-500 rounded-full opacity-60"></div>

      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left copy */}
          <div>
            <div className="egg-shape inline-block border border-primary text-primary font-medium text-sm px-4 sm:px-6 py-2 mb-6">
              Portfolio
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight text-neutral">
              My Creative Works
              <br />
              Latest <span className="text-primary">Projects</span>
            </h2>
            <p className="mt-6 text-sm sm:text-base lg:text-lg text-neutral/70 max-w-xl leading-relaxed">
              I have developed various enterprise-level applications including
              School Management Systems, Therapy Center Systems, ERP and CRM
              solutions. Here are some of my recent projects.
            </p>
            <a className="btn btn-primary rounded-md mt-8 sm:mt-10 px-6 py-3 text-sm sm:text-base font-medium inline-block w-full sm:w-auto text-center">
              Show More
            </a>
          </div>
          {/* Right: Carousel with work images */}
          <div className="relative">
            <div className="carousel w-full overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${currentSlide * 100}%)`,
                }}
              >
                {images.map((image, index) => (
                  <div
                    key={index}
                    className="carousel-item relative w-full shrink-0"
                  >
                    <img
                      src={image}
                      alt={`Project ${index + 1} - Portfolio showcase`}
                      className="w-full rounded-lg"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
            {/* Navigation controls at bottom right */}
            <div className="flex items-center justify-between mt-4">
              {/* Square indicators */}
              <div className="flex gap-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 ${
                      index === currentSlide
                        ? "bg-primary border border-primary"
                        : "bg-gray-300 border border-gray-300"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
              {/* Arrow buttons */}
              <div className="flex gap-2">
                <button
                  onClick={goToPrevious}
                  disabled={currentSlide === 0}
                  className={`${
                    currentSlide === 0
                      ? "text-gray-400 cursor-not-allowed"
                      : "text-gray-600 hover:text-gray-800 cursor-pointer"
                  }`}
                  aria-label="Previous slide"
                >
                  <GoArrowLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
                <button
                  onClick={goToNext}
                  disabled={currentSlide === images.length - 1}
                  className={`${
                    currentSlide === images.length - 1
                      ? "text-gray-400 cursor-not-allowed"
                      : "text-gray-600 hover:text-gray-800 cursor-pointer"
                  }`}
                  aria-label="Next slide"
                >
                  <GoArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
