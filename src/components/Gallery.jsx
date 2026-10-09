import smileImg from '../assets/gallery-caregiver-smile.jpg'
import walkerImg from '../assets/gallery-walker.jpg'
import familyImg from '../assets/gallery-family.webp'
import paintingImg from '../assets/team-painting.webp'
import diningImg from '../assets/team-dining.webp'
import './Gallery.css'

const photos = [
  {
    src: smileImg,
    alt: 'Caregiver smiling with her arm around a senior woman',
    className: 'gallery__image--main',
  },
  {
    src: walkerImg,
    alt: 'Caregiver helping a senior man walk with a walker',
    className: 'gallery__image--walker',
  },
  {
    src: familyImg,
    alt: 'Grandmother hugging her smiling granddaughter',
    className: 'gallery__image--family',
  },
  {
    src: paintingImg,
    alt: 'Senior woman embracing a senior man as he paints',
  },
  {
    src: diningImg,
    alt: 'Caregiver sharing a laugh with residents at the breakfast table',
  },
]

function Gallery() {
  return (
    <section className="gallery">
      {photos.map(({ src, alt, className }) => (
        <img
          loading="lazy"
          key={src}
          src={src}
          className={`gallery__image ${className ?? ''}`.trim()}
          alt={alt}
        />
      ))}
    </section>
  )
}

export default Gallery
