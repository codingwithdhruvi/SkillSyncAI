import Link from "next/link"

const CTA = () => {
  return (
    <section className='cta-section'>
      <div className='cta-badge'>Start Learning Your Way.</div>
      <h2>Build and Personalize Learning Companion</h2>
      <p>Pick a name, subject, voice & personality - and start learning through voice conversations that feel natural and fun.</p>
      <img src="images/cta.svg" alt=""
      width={362} height={232}
      />
      <button className="btn-primary cursor-pointer">
        <img src="/icons/plus.svg" alt="" />
        <Link href='/companions/new'>
        <p>Build a new Companion</p>
        </Link>
      </button>
    </section>
  )
}

export default CTA