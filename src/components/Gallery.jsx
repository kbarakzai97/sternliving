import { useEffect, useRef, useState } from 'react'
import { CALENDLY_URL, openCalendly } from '../calendly'
import CheckIcon from './CheckIcon'
import livingImg from '../assets/home_living.webp'
import bedroom2Img from '../assets/home_bedroom2.webp'
import bath2Img from '../assets/home_bath2.webp'
import bedroom3Img from '../assets/home_bedroom3.webp'
import bedroomImg from '../assets/home_bedroom.webp'
import bathImg from '../assets/home_bath.webp'
import room1Img from '../assets/room1.webp'
import room2Img from '../assets/room2.webp'
import tourVideo from '../assets/VIDEO-2026-11-08-11-29-23.mp4'
import './Gallery.css'

const features = [
  'Bright, comfortable bedrooms',
  'Open living and dining spaces',
  'Accessible bathroom with a roll-in shower and grab bars',
  'Designed for wheelchair and walker access',
]

const slides = [
  {
    type: 'video',
    src: tourVideo,
    alt: 'Video tour of one of our homes',
  },
  {
    src: livingImg,
    alt: 'Open living area with a sofa, dining table, and kitchen',
  },
  {
    src: bedroom2Img,
    alt: 'Sunlit bedroom with a full bed and white dresser',
  },
  {
    src: bath2Img,
    alt: 'Accessible bathroom with a roll-in shower, grab bars, and shower bench',
  },
  {
    src: bedroom3Img,
    alt: 'Bright bedroom with a window, wooden dresser, and floral artwork',
  },
  {
    src: bedroomImg,
    alt: 'Bedroom with a twin bed, nightstand, and armchair',
  },
  {
    src: bathImg,
    alt: 'Bathroom with a wall-mounted sink and round mirror',
  },
  {
    src: room1Img,
    alt: 'Spacious living room with light blue walls, a velvet armchair, and wood-look floors',
  },
  {
    src: room2Img,
    alt: 'Dining area decorated with balloons and a table set for a resident birthday party',
  },
]

function Gallery() {
  const [current, setCurrent] = useState(0)
  const videoRef = useRef(null)
  const [playing, setPlaying] = useState(false)

  // Pause the tour video when it slides out of view.
  useEffect(() => {
    if (slides[current].type !== 'video') videoRef.current?.pause()
  }, [current])

  const go = (step) =>
    setCurrent((i) => (i + step + slides.length) % slides.length)

  return (
    <section className="gallery" id="gallery">
      <div className="gallery__slideshow">
        <div className="gallery__carousel">
          <button
            type="button"
            className="gallery__arrow gallery__arrow--prev"
            onClick={() => go(-1)}
            aria-label="Previous slide"
          >
            ‹
          </button>

          <div className="gallery__frame">
            <div
              className="gallery__track"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {slides.map(({ type, src, alt }, i) =>
                type === 'video' ? (
                  <div
                    key={src}
                    className="gallery__video-wrap"
                    aria-hidden={i !== current}
                    inert={i !== current}
                  >
                    <video
                      ref={videoRef}
                      // #t=0.1 makes iOS Safari show the first frame instead of a blank box.
                      src={`${src}#t=0.1`}
                      className="gallery__image gallery__video"
                      controls={playing}
                      playsInline
                      preload="metadata"
                      aria-label={alt}
                      onPlay={() => setPlaying(true)}
                      onPause={() => setPlaying(false)}
                      onEnded={() => setPlaying(false)}
                    />
                    {!playing && (
                      <button
                        type="button"
                        className="gallery__play"
                        onClick={() => videoRef.current?.play()}
                        aria-label="Play video tour"
                      >
                        <svg viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M8 5.5v13l11-6.5z" />
                        </svg>
                      </button>
                    )}
                  </div>
                ) : (
                  <img
                    loading="lazy"
                    key={src}
                    src={src}
                    className="gallery__image"
                    alt={alt}
                    aria-hidden={i !== current}
                  />
                ),
              )}
            </div>
          </div>

          <button
            type="button"
            className="gallery__arrow gallery__arrow--next"
            onClick={() => go(1)}
            aria-label="Next slide"
          >
            ›
          </button>
        </div>

        <div className="gallery__dots">
          {slides.map(({ src }, i) => (
            <button
              type="button"
              key={src}
              className={
                'gallery__dot' + (i === current ? ' gallery__dot--active' : '')
              }
              onClick={() => setCurrent(i)}
              aria-label={`Show slide ${i + 1} of ${slides.length}`}
              aria-current={i === current}
            />
          ))}
        </div>
      </div>

      <div className="gallery__text">
        <h2 className="gallery__heading">Tour Our Homes</h2>
        <p>
          Our two homes on Thames Drive and Walnut Street in Frederick are real
          houses in real neighborhoods, with just seven residents in each. Every
          room is set up to feel warm, familiar, and easy to get around.
        </p>
        <ul className="gallery__features">
          {features.map((feature) => (
            <li key={feature}>
              <CheckIcon />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <p>
          Photos only tell part of the story. Come see the homes in person and
          meet the people who make them feel like family.
        </p>
        <a href={CALENDLY_URL} className="gallery__cta" onClick={openCalendly}>
          Schedule a Private Tour
        </a>
      </div>
    </section>
  )
}

export default Gallery
