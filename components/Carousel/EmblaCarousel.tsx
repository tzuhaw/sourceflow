"use client";
import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import useEmblaCarousel from "embla-carousel-react";
import JobCard from "../JobCard";
import Link from "next/link";
import "./EmblaCarousel.css";

type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  const jobList = [
    {
      categoryTitle: "Python",
      title: "Software Engineer",
      locationTitle: "London",
      salary: "65,000",
      description:
        "Odio mi amet commodo convallis nunc. Tincidunt mauris eu egestas eget in aliquam.",
      link: "#",
      createdAt: "29/08/2023",
      bgColor: "bg-warning",
      textColor: "text-content-primary",
    },
    {
      categoryTitle: "Python",
      title: "Software Engineer",
      locationTitle: "London",
      salary: "65,000",
      description:
        "Odio mi amet commodo convallis nunc. Tincidunt mauris eu egestas eget in aliquam.",
      link: "#",
      createdAt: "29/08/2023",
      bgColor: "bg-primary",
      textColor: "text-content-light",
    },
    {
      categoryTitle: "Python",
      title: "Software Engineer",
      locationTitle: "London",
      salary: "65,000",
      description:
        "Odio mi amet commodo convallis nunc. Tincidunt mauris eu egestas eget in aliquam.",
      link: "#",
      createdAt: "29/08/2023",
      bgColor: "bg-danger",
      textColor: "text-content-primary",
    },
    {
      categoryTitle: "Python",
      title: "Software Engineer",
      locationTitle: "London",
      salary: "65,000",
      description:
        "Odio mi amet commodo convallis nunc. Tincidunt mauris eu egestas eget in aliquam.",
      link: "#",
      createdAt: "29/08/2023",
      bgColor: "bg-warning",
      textColor: "text-content-primary",
    },
  ];

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {/* {slides.map((index) => (
            <div className="embla__slide" key={index}>
              <div className="embla__slide__number">{index + 1}</div>
            </div>
          ))} */}
          {jobList.map((job, index) => (
            <JobCard
              key={index}
              categoryTitle={job.categoryTitle}
              title={job.title}
              locationTitle={job.locationTitle}
              salary={job.salary}
              description={job.description}
              link={job.link}
              createdAt={job.createdAt}
              bgColor={job.bgColor}
              textColor={job.textColor}
            />
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
        <Link
          href={"#"}
          className="pe-3 text-decoration-none fs-6 text-darkblue">
          View more jobs
        </Link>
        {/* <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={"embla__dot".concat(
                index === selectedIndex ? " embla__dot--selected" : ""
              )}
            />
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default EmblaCarousel;
