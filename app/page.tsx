import CompanionCard from "@/components/CompanionCard"
import CompanionsList from "@/components/CompanionsList"
import CTA from "@/components/CTA"
import { Button } from "@/components/ui/button"

const Page = () => {
  return (
    <div>
      <section className="home-section">
        <CompanionCard
        id='123'
        name='Neura the Brainy Explorer'
        topic='Neural Network of the Brain'
        subject= 'Science'
        duration={45}
        color='#ffda6e'
        />
        <CompanionCard
        id='456'
        name='Countsy the Number Wizard'
        topic='Derivatives & Integrals'
        subject= 'maths'
        duration={30}
        color='#e5d0ff'
        />
        <CompanionCard
        id='789'
        name='Verba the vocabulary builder'
        topic='language'
        subject= 'English literature'
        duration={30}
        color='#BDE7FF'
        />
        
        
      </section>
      <section className="home-section">
        <CompanionsList />
        <CTA />
      </section>
    </div>
  )
}

export default Page