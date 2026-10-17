import './Hero.css'

function Hero({
  header,
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
  onSecondaryCtaClick,
}) {
  return (
    <section className="hero" id="home">
      <div className="hero__main">
        {header}
        <div className="hero__content">
          <h1 className="hero__heading">{heading}</h1>
          {subtext && <p className="hero__subtext">{subtext}</p>}
          <div className="hero__actions">
            <a href={ctaHref} className="hero__cta">
              {ctaLabel}
            </a>
            {secondaryCtaLabel && (
              <a
                href={secondaryCtaHref}
                onClick={onSecondaryCtaClick}
                className="hero__cta hero__cta--secondary"
              >
                {secondaryCtaLabel}
              </a>
            )}
          </div>
        </div>
      </div>
      <div className="hero__media">
        <img
          src={image}
          srcSet={imageSrcSet}
          sizes="(max-width: 960px) 100vw, 50vw"
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
