import { useState } from 'react'
import { withBase } from '../url'
import checkIcon from '../assets/Coral Circle Checkmark Icon.webp'
import livingImg from '../assets/home_living.webp'
import bedroom2Img from '../assets/home_bedroom2.webp'
import bath2Img from '../assets/home_bath2.webp'
import bedroom3Img from '../assets/home_bedroom3.webp'
import bedroomImg from '../assets/home_bedroom.webp'
import bathImg from '../assets/home_bath.webp'
import './Gallery.css'

const features = [
  'Bright, comfortable bedrooms',
  'Open living and dining spaces',
  'Accessible bathroom with a roll-in shower and grab bars',
  'Designed for wheelchair and walker access',
]

const photos = [
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
]

function Gallery() {
  const [current, setCurrent] = useState(0)

  const go = (step) =>
    setCurrent((i) => (i + step + photos.length) % photos.length)

  return (
    <section className="gallery" id="gallery">
      <div className="gallery__slideshow">
        <div className="gallery__carousel">
          <button
            type="button"
            className="gallery__arrow gallery__arrow--prev"
            onClick={() => go(-1)}
            aria-label="Previous photo"
          >
            ‹
          </button>

          <div className="gallery__frame">
            <div
              className="gallery__track"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {photos.map(({ src, alt }, i) => (
                <img
                  loading="lazy"
                  key={src}
                  src={src}
                  className="gallery__image"
                  alt={alt}
                  aria-hidden={i !== current}
                />
              ))}
            </div>
          </div>

          <button
            type="button"
            className="gallery__arrow gallery__arrow--next"
            onClick={() => go(1)}
            aria-label="Next photo"
          >
            ›
          </button>
        </div>

        <div className="gallery__dots">
          {photos.map(({ src }, i) => (
            <button
              type="button"
              key={src}
              className={
                'gallery__dot' + (i === current ? ' gallery__dot--active' : '')
              }
              onClick={() => setCurrent(i)}
              aria-label={`Show photo ${i + 1} of ${photos.length}`}
              aria-current={i === current}
            />
          ))}
        </div>
      </div>

      <div className="gallery__text">
        <p className="gallery__eyebrow">See Where You'll Live</p>
        <h2 className="gallery__heading">Tour Our Homes</h2>
        <p>
          Our two homes on Thames Drive and Walnut Street in Frederick are real
          houses in real neighborhoods, with just seven residents in each. Every
          room is set up to feel warm, familiar, and easy to get around.
        </p>
        <ul className="gallery__features">
          {features.map((feature) => (
            <li key={feature}>
              <img loading="lazy" src={checkIcon} alt="" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <p>
          Photos only tell part of the story. Come see the homes in person and
          meet the people who make them feel like family.
        </p>
        <a href={withBase('/contact')} className="gallery__cta">
          Schedule a Private Tour
        </a>
      </div>
    </section>
  )
}

export default Gallery
