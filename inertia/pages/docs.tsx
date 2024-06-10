import { Head } from '@inertiajs/react'
import { FAQ } from '~/components/docs/faq'
import { Footer } from '~/components/docs/footer'
import { Hero } from '~/components/docs/hero_section'
import { LastCallToAction } from '~/components/docs/last_cta'
import { Companies } from '~/components/docs/social_proof'
import { TextRevealWord } from '~/components/docs/text_reveal_word'

export default function docs() {
  return (
    <>
      <Head title="Documentation" >
            <script defer src="https://umami-yck480o.5.75.226.51.sslip.io/script.js" data-website-id="c4104235-4d45-4d02-9399-6e9953755ec9"></script>
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
