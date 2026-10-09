import './Hero.css'

function Hero({
  image,
  imageSrcSet,
  imageAlt,
  eyebrow,
  heading,
  subtext,
  ctaLabel,
  ctaHref,
  secondaryCtaLabel,
  secondaryCtaHref,
}) {
  return (
    <section className="hero" id="home">
      <div className="hero__content">
        {eyebrow && <p className="hero__eyebrow">{eyebrow}</p>}
        <h1 className="hero__heading">{heading}</h1>
        {subtext && <p className="hero__subtext">{subtext}</p>}
        <div className="hero__actions">
          <a href={ctaHref} className="hero__cta">
            {ctaLabel}
          </a>
          {secondaryCtaLabel && (
            <a href={secondaryCtaHref} className="hero__cta hero__cta--secondary">
              {secondaryCtaLabel}
            </a>
          )}
        </div>
      </div>
      <div className="hero__media">
        <img
          src={image}
          srcSet={imageSrcSet}
          sizes="(max-width: 900px) 100vw, 55vw"
          width="1920"
          height="1280"
          fetchPriority="high"
          className="hero__image"
          alt={imageAlt}
        />
      </div>
    </section>
  )
}

export default Hero
