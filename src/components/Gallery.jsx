import smileImg from '../assets/gallery-caregiver-smile.jpg'
import walkerImg from '../assets/gallery-walker.jpg'
import './Gallery.css'

function Gallery() {
  return (
    <section className="gallery">
      <img
        src={smileImg}
        className="gallery__image gallery__image--main"
        alt="Caregiver smiling with her arm around a senior woman"
      />
      <img
        src={walkerImg}
        className="gallery__image gallery__image--side"
        alt="Caregiver helping a senior man walk with a walker"
      />
    </section>
  )
}

export default Gallery
