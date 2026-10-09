import philosophyImg from '../assets/team-philosophy.webp'
import checkIcon from '../assets/Coral Circle Checkmark Icon.png'
import paintingImg from '../assets/team-painting.webp'
import diningImg from '../assets/team-dining.webp'
import './OurTeam.css'

const beliefs = [
  'Every resident has a unique story',
  'Care plans should be individualized',
  'Independence should be supported whenever possible',
  'Families should be active partners',
]

const teamPerks = [
  'Consistent caregivers',
  'Direct access to leadership',
  'Higher staff-to-resident attention',
  'Personalized communication',
]

function OurTeam() {
  return (
    <>
      <section className="team-hero">
        <h1 className="team-hero__heading">
          Compassionate Leadership.
          <br />
          Dedicated Care.
          <br />
          A True Home Environment.
        </h1>
        <p className="team-hero__text">
          At Stern Life Assisted Living, our team is the heart of everything we
          do. We are committed to providing safe, person-centered care in a
          warm, residential setting where every resident is treated like
          family.
        </p>
      </section>

      <section className="leader">
        {/* TODO: replace with a photo of Rebecca */}
        <div className="leader__photo" role="img" aria-label="Photo of Rebecca Yeboah" />
        <div className="leader__bio">
          <h2 className="leader__name">
            Rebecca Yeboah BSN
            <br />
            Assisted Living Manager (ALM)
          </h2>
          <p>
            Rebecca Yeboah brings over 15 years of experience in the senior care
            industry to Stern Life Assisted Living. Throughout her career, she
            has worked across every level of senior living — from large
            institutional facilities to mid-sized communities and small
            residential homes.
          </p>
          <p>
            Her broad experience gave her firsthand insight into both the
            strengths and shortcomings of traditional senior care models. It
            was this experience that helped inspire the vision behind Stern
            Life: a more personalized, home-like environment where residents
            receive attentive, compassionate care in a setting that truly feels
            like family.
          </p>
          <p>
            Rebecca is a Certified Nursing Assistant (CNA), Certified Medication
            Technician (CMT), and holds a Bachelor of Science in Nursing (BSN).
            Her clinical background allows her to lead with both competence and
            compassion, ensuring that residents receive safe, high-quality care
            tailored to their individual needs.
          </p>
          <p>
            Known for her warm personality and welcoming smile, Rebecca creates
            an atmosphere where residents feel respected, valued, and
            understood. Caring is not just her profession — it is her passion
            and calling.
          </p>
          <p>
            Under her leadership, Stern Life maintains a strong commitment to
            dignity, safety, and person-centered care.
          </p>
        </div>
      </section>

      <section className="philosophy">
        <div className="philosophy__media">
          <img
            src={philosophyImg}
            className="philosophy__image"
            alt="Caregiver walking hand in hand with a smiling senior woman in a garden"
          />
        </div>
        <div className="philosophy__text">
          <h2 className="philosophy__heading">Our Care Philosophy</h2>
          <ul className="philosophy__list">
            {beliefs.map((belief) => (
              <li className="philosophy__item" key={belief}>
                <img src={checkIcon} className="philosophy__icon" alt="" />
                <span>{belief}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="team-info">
        <div className="team-info__row">
          <img
            src={paintingImg}
            className="team-info__image"
            alt="Senior woman embracing a senior man as he paints"
          />
          <div className="team-info__text">
            <h2 className="team-info__heading">A Small Team With a Big Heart</h2>
            <p>
              Unlike large corporate campuses where staff may rotate
              frequently, Stern Life operates small residential homes. This
              allows our team to build stronger, more meaningful relationships
              with residents and families.
            </p>
            <ul className="team-info__list">
              {teamPerks.map((perk) => (
                <li key={perk}>{perk}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="team-info__row team-info__row--reverse">
          <img
            src={diningImg}
            className="team-info__image"
            alt="Caregiver sharing a laugh with residents at the breakfast table"
          />
          <div className="team-info__text">
            <h2 className="team-info__heading">
              Safety &amp; Professional Standards
            </h2>
            <p>
              Our team operates in compliance with Maryland Office of Health
              Care Quality (OHCQ) standards and follows strict medication,
              safety, and infection control protocols.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default OurTeam
