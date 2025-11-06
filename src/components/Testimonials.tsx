import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import type { Testimonial } from "../data/constants";

interface TestimonialsProps {
  testimonials: Testimonial[];
}

export default function Testimonials({ testimonials }: TestimonialsProps) {
  // Show 3 testimonials per slide
  const testimonialsPerSlide = 3;
  const slides = [];
  for (let i = 0; i < testimonials.length; i += testimonialsPerSlide) {
    slides.push(testimonials.slice(i, i + testimonialsPerSlide));
  }

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
    if (currentSlide < slides.length - 1) {
      goToSlide(currentSlide + 1);
    }
  };

  return (
    <section
      id="testimonials"
      className="relative container mx-auto px-6 py-20"
    >
      {/* Scattered dots */}
      <div className="absolute top-16 left-8 w-2 h-2 bg-red-500 rounded-full opacity-60"></div>
      <div className="absolute top-24 left-12 w-2 h-2 bg-green-500 rounded-full opacity-60"></div>
      <div className="absolute top-32 left-6 w-2 h-2 bg-blue-500 rounded-full opacity-60"></div>
      <div className="absolute top-20 right-8 w-2 h-2 bg-green-500 rounded-full opacity-60"></div>
      <div className="absolute top-28 right-12 w-2 h-2 bg-yellow-500 rounded-full opacity-60"></div>

      <div className="space-y-6 mb-12">
        <div className="egg-shape inline-block border border-primary text-primary font-medium px-6 py-2 mx-auto hover:bg-primary/5 transition">
          Reviews
        </div>
        <div className="flex items-center justify-between">
          <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
            Our Customer Say <br />
            Something <span className="text-primary">About Us</span>
          </h2>
          {/* Navigation arrows on top right */}
          {slides.length > 1 && (
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
                <GoArrowLeft className="w-6 h-6" />
              </button>
              <button
                onClick={goToNext}
                disabled={currentSlide === slides.length - 1}
                className={`${
                  currentSlide === slides.length - 1
                    ? "text-gray-400 cursor-not-allowed"
                    : "text-gray-600 hover:text-gray-800 cursor-pointer"
                }`}
                aria-label="Next slide"
              >
                <GoArrowRight className="w-6 h-6" />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Carousel */}
      <div className="carousel w-full overflow-hidden relative">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentSlide * 100}%)`,
          }}
        >
          {slides.map((slideTestimonials, slideIndex) => (
            <div
              key={slideIndex}
              id={`testimonial-slide-${slideIndex + 1}`}
              className="carousel-item relative w-full shrink-0"
            >
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                {slideTestimonials.map((testimonial) => (
                  <div
                    key={testimonial.id}
                    className="p-6 rounded-lg shadow space-y-4"
                  >
                    <div className="flex gap-1">
                      {Array.from({ length: testimonial.rating }).map(
                        (_, starIndex) => (
                          <FaStar
                            key={starIndex}
                            className="w-4 h-4 text-primary"
                            fill="#fe8b76"
                          />
                        )
                      )}
                    </div>
                    <p className="text-muted-foreground">{testimonial.text}</p>

                    <div className="flex gap-3">
                      <div className="avatar">
                        <div className="w-12 mask mask-circle">
                          <img
                            src={testimonial.avatar}
                            alt={`${testimonial.name} avatar`}
                            loading="lazy"
                          />
                        </div>
                      </div>
                      <div>
                        <p className="font-bold">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {testimonial.role}
                          {testimonial.company && ` ${testimonial.company}`}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
