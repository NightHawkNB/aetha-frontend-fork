import {useEffect, useState} from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Rating from "../../../components/common/Rating";
import OverallReview from "../../../components/common/OverallReview.jsx";


export default function Carousel ({ children: slides, autoSlide=false, autoSlideInterval=3000, slideDetails }) {

    const [current, setCurrent] = useState(0);
    const [details, setDetails] = useState(slideDetails[current]);


    const prev = () => {
        setCurrent(current => current === 0 ? slides.length - 1 : current - 1);
        setDetails(slideDetails[current === 0 ? slides.length - 1 : current - 1]);
    }

    const next = () => {
        setCurrent(current => current === slides.length - 1 ? 0 : current + 1);
        setDetails(slideDetails[(current+1) % slides.length]);
    }

    useEffect(() => {
        if(!autoSlide) return;
        const slideInterval = setInterval(next, autoSlideInterval)
        return () => clearInterval(slideInterval)
    }, []);

    return (
        <div className="alt-container !p-0 !m-0">
            <div className="overflow-hidden !p-0 relative">
                {/* Slide images */}
                <div className="flex !p-0 transition-transform ease-in-out duration-500" style={{ transform: `translateX(-${current * 100}%)` }}>
                    {slides}
                </div>

                {/* Slide Details */}
                <div className="
                    absolute
                    bottom-8
                    left-16
                    right-16
                    flex
                    flex-col
                    gap-1
                    items-center
                    sm:items-start
                ">
                    <p className="text-2xl capitalize tracking-wider font-bold">{details.title}</p>
                    <Rating size={15} rating={details.rating} />
                    <OverallReview review_score={details.review_score} font_size="text-sm" />
                    <p className="text-small capitalize text-white/80 line-clamp-2">{details.description}</p>
                </div>

                {/* Next and Previous buttons */}
                <div className="absolute inset-0 text-foreground-900/90 flex items-center justify-between p-4">
                    <button onClick={prev} className="p-1 rounded-full bg-foreground-50/80 shadow text-foreground-800 hover:text-gray-800 hover:bg-white">
                        <IoIosArrowBack size={20} />
                    </button>
                    <button onClick={next} className="p-1 rounded-full bg-foreground-50/80 shadow text-foreground-800 hover:text-gray-800 hover:bg-white">
                        <IoIosArrowForward size={20} />
                    </button>
                </div>

                {/* Slide progress on the bottom */}
                <div className="absolute bottom-4 right-0 left-0">
                    <div className="flex items-center justify-center gap-2">
                        {slides.map((_, index) => (
                            <div
                                key={index}
                                className={`
                                transition-all w-1 h-1 bg-white rounded-full
                                ${current === index ? "p-1" : "bg-opacity-50"}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}