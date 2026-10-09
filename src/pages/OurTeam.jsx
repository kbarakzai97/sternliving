import philosophyImg from '../assets/heroimage.webp'
import checkIcon from '../assets/Coral Circle Checkmark Icon.png'
import './OurTeam.css'

const beliefs = [
  'Every resident has a unique story',
  'Care plans should be individualized',
  'Independence should be supported whenever possible',
  'Families should be active partners',
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
            alt="Caregiver walking arm in arm with a senior woman outdoors"
          />
        </div>
        <div className="philosophy__text">
          <p className="philosophy__eyebrow">At Stern Life, we believe</p>
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
    </>
  )
}

export default OurTeam
