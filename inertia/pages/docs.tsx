import { Head } from '@inertiajs/react'
import { FAQ } from '~/components/home/faq'
import { Footer } from '~/components/home/footer'
import { Hero } from '~/components/home/hero_section'
import { LastCallToAction } from '~/components/home/last_cta'
import { Companies } from '~/components/home/social_proof'
import { TextRevealWord } from '~/components/home/text_reveal_word'

export default function docs() {
  return (
    <>
      <Head title="Documentation" >
            <script defer src="https://umami-yck480o.5.75.226.51.sslip.io/script.js" data-website-id="c4104235-4d45-4d02-9399-6e9953755ec8"></script>
      </Head>
      <Hero />
      <Companies />
      <TextRevealWord />
      <FAQ />
      <LastCallToAction />
      <Footer />
    </>
  )
}
