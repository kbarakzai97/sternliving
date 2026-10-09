import './Hero.css'

function Hero({ image, imageSrcSet, imageAlt, heading, subtext, ctaLabel, ctaHref }) {
  return (
    <section className="hero" id="home">
      <img
        src={image}
        srcSet={imageSrcSet}
        sizes="100vw"
        width="1920"
        height="1280"
        fetchPriority="high"
        className="hero__image"
        alt={imageAlt}
      />
      <div className="hero__overlay">
        <h1 className="hero__heading">{heading}</h1>
        {subtext && <p className="hero__subtext">{subtext}</p>}
        <a href={ctaHref} className="hero__cta">
          {ctaLabel}
        </a>
      </div>
    </section>
  )
}

export default Hero
