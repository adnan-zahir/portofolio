import Slider from "react-slick";
import ReviewCard from "../components/ReviewCard";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function Reviews() {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    easing: "easeInOut",
  };

  let slider: any;

  const nextSlide = () => {
    slider.slickNext();
  };

  const prevSlide = () => {
    slider.slickPrev();
  };

  return (
    <div id="reviews">
      <h2>Customers reviews</h2>
      <Slider
        {...settings}
        ref={(c) => (slider = c)}
        className="reviews-slider"
      >
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
      </Slider>
      <div className="review-arrows">
        <button className="left circle soft-shadow" onClick={prevSlide}>
          <FaArrowLeft />
        </button>
        <button className="right circle soft-shadow" onClick={nextSlide}>
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
}
