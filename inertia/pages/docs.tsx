import { Head } from '@inertiajs/react'
import { Footer } from '~/components/home/footer'
import { Hero } from '~/components/docs/hero_section'
import { Companies } from '~/components/home/social_proof'


export default function docs() {
  return (
    <>
      <Head title="Documentation" >
            <script defer src="https://umami-yck480o.5.75.226.51.sslip.io/script.js" data-website-id="c4104235-4d45-4d02-9399-6e9953755ec9"></script>
      </Head>
      <Hero />
      <Companies />
      <Footer />
    </>
  )
}
