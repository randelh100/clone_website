'use client'
import Carousel from 'react-bootstrap/Carousel';
import CarouselImage1 from '../../../../public/heroContent_photos/CarouselImage1.jpg'
import CarouselImage2 from '../../../../public/heroContent_photos/CarouselImage2.jpg'
import CarouselImage3 from '../../../../public/heroContent_photos/CarouselImage3.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image';
import SliderUiControl from './SliderUiControl';
import SlideIndicator from './SlideIndicator';
import { useState } from 'react';
import { useEffect } from 'react';
import React from 'react';
import { useRef } from 'react';



function Slider() {
    const slideDuration = 8000;
    const [isPlaying, setIsPlaying] = useState(true);
    const [startTime, setStartTime] = useState(Date.now());
    const [nextSlideTime, setNextSlideTime] = useState(Date.now() + slideDuration);
    const [remainingTime, setRemainingTime] = useState(slideDuration);
    const [elapsedTime, setElapsedTime] = useState(0); // New state to track elapsed time
    const carouselRef = useRef(null);
    const [currentSlide, setCurrentSlide] = useState(0); // New state to track current slide


    useEffect(() => {

        if (isPlaying) {
            // Calculate remaining time and start time based on elapsed time
            const remaining = slideDuration - elapsedTime;
            setStartTime(Date.now() - elapsedTime);
            setNextSlideTime(Date.now() + remaining);
            setRemainingTime(remaining);
        } else {
            const elapsed = Date.now() - startTime;
            setElapsedTime(elapsed);
            setRemainingTime(slideDuration - elapsed);
        }

    }, [isPlaying]);


    const togglePlayPause = () => {
        setIsPlaying(!isPlaying);
    };


    const handleSlideEnd = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % 3); // Update current slide
        const newStartTime = Date.now();
        setStartTime(newStartTime);
        setNextSlideTime(newStartTime + slideDuration);
        setRemainingTime(slideDuration);
        setElapsedTime(0); // Reset elapsed time
    };

    return (

        <div className='relative'> {/* Container set to relative */}
            <Carousel
                ref={carouselRef}
                pause={false}
                slide={false}
                interval={isPlaying ? remainingTime : null}
                onSlide={handleSlideEnd}
                indicators={false}  // Set to false to hide default indicators
            >
                <Carousel.Item>
                    <Image
                        src={CarouselImage1}
                        alt="First slide"
                        width={3000}
                        height={300}
                    />
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Image
                        src={CarouselImage2}
                        alt="Second slide"
                        width={3000}
                        height={300}
                    />
                    <Carousel.Caption className='absolute flex justify-start'>
                        <h3>2024 Prologue</h3>
                        <p>All-electric. Coming 2024.</p>
                        <button className='bg-blue-500 rounded-full p-2'>LEARN MORE</button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Image
                        src={CarouselImage3}
                        alt="Third slide"
                        width={3000}
                        height={300}
                    />
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <div className="absolute right-0 bottom-0 flex space-x-4">
            <SlideIndicator
                currentSlide={currentSlide}
                totalSlides={3} /> {/* Included SlideIndicator */}
                
                <SliderUiControl
                    isPlaying={isPlaying}
                    duration={remainingTime}
                    startTime={startTime}
                    nextSlideTime={nextSlideTime}
                    remainingTime={remainingTime}
                    togglePlayPause={togglePlayPause}
                />
            </div>
        </div>
    );
}


export default Slider;