import './Hero.css'

function Hero({ image, imageAlt, heading, subtext, ctaLabel, ctaHref }) {
  return (
    <section className="hero">
      <img src={image} className="hero__image" alt={imageAlt} />
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
