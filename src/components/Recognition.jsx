import seniorLivingBadge from '../assets/seniorliving.webp'
import carePatrolLogo from '../assets/carepatrol.webp'
import oasisLogo from '../assets/oasis.webp'
import owlBeThereLogo from '../assets/owlbethere.webp'
import './Recognition.css'

const featured = {
  name: 'Best in Senior Living',
  source: 'Assisted Living Magazine',
  logo: seniorLivingBadge,
}

const partners = [
  {
    name: 'CarePatrol',
    tagline: 'Your Partner in Senior Care Solutions',
    logo: carePatrolLogo,
  },
  { name: 'Oasis', tagline: 'Senior Advisors', logo: oasisLogo },
  { name: 'Owl Be There', tagline: 'Wise Care Guidance', logo: owlBeThereLogo },
]

function Recognition() {
  return (
    <section className="recognition">
      <div className="recognition__block">
        <h2 className="recognition__heading">Featured In</h2>
        {featured.logo ? (
          <img
            src={featured.logo}
            className="recognition__badge"
            alt={`${featured.name} – ${featured.source}`}
          />
        ) : (
          <div className="recognition__badge-placeholder">
            <span className="recognition__stars" aria-hidden="true">
              ★★★★★
            </span>
            <strong>{featured.name}</strong>
            <span>{featured.source}</span>
          </div>
        )}
      </div>

      <div className="recognition__block">
        <h2 className="recognition__heading">Meet Our Trusted Partners</h2>
        <ul className="recognition__partners">
          {partners.map(({ name, tagline, logo }) => (
            <li className="recognition__partner" key={name}>
              {logo ? (
                <img src={logo} alt={name} />
              ) : (
                <span className="recognition__partner-placeholder">
                  <strong>{name}</strong>
                  <span>{tagline}</span>
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Recognition
