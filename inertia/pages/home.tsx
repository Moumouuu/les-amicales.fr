import { Head } from '@inertiajs/react'
import { FAQ } from '~/components/home/faq'
import { Footer } from '~/components/home/footer'
import { Hero } from '~/components/home/hero_section'
import { LastCallToAction } from '~/components/home/last_cta'
import { Companies } from '~/components/home/social_proof'
import { TextRevealWord } from '~/components/home/text_reveal_word'

export default function Home() {
  return (
    <>
      <Head title="Homepage" />
      <Hero />
      <Companies />
      <TextRevealWord />
      <FAQ />
      <LastCallToAction />
      <Footer />
    </>
  )
}
