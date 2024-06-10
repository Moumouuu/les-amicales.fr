import { motion, useInView } from 'framer-motion'
import { ArrowRightIcon, ChevronRight } from 'lucide-react'
import { useRef } from 'react'
import { cn } from '~/lib/utils'
import AnimatedShinyText from '../ui/animated_shiny_text'
import { BorderBeam } from '../ui/border_beam'

export function Hero() {
  const fadeInRef = useRef(null)
  const fadeInInView = useInView(fadeInRef, {
    once: true,
  })

  const fadeUpVariants = {
    initial: {
      opacity: 0,
      y: 24,
    },
    animate: {
      opacity: 1,
      y: 0,
    },
  }

  return (
    <section id="hero">
      <div className="relative flex justify-center h-full overflow-hidden py-14">
        <div className="container z-10 flex flex-col">
          <div className="mt-20 grid grid-cols-1">
            <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
              <span>✨Documentation</span>
              <img src="https://amicales-rsk.vlamynck.fr/src/img/Logo_tr.png" alt="logo" className="w-8 h-8" />
            </AnimatedShinyText>
            
            <div className="flex flex-col items-center gap-6 pb-8 text-center">
              <motion.h1
                ref={fadeInRef}
                className="text-balance bg-gradient-to-br from-black from-30%  to-black/60 bg-clip-text py-6 text-5xl font-medium leading-none tracking-tighter text-transparent  text-black  sm:text-6xl md:text-7xl lg:text-8xl"
                animate={fadeInInView ? 'animate' : 'initial'}
                variants={fadeUpVariants}
                initial={false}
                transition={{
                  duration: 0.6,
                  delay: 0.1,
                  ease: [0.21, 0.47, 0.32, 0.98],
                  type: 'spring',
                }}
              >
                Ici vous retrouverez notre moteur de recherche <br /> <span className="font-semibold">spécialisé robotique !</span>
              </motion.h1>

              <motion.p
                className="text-balance text-lg tracking-tight text-gray-400 md:text-xl"
                animate={fadeInInView ? 'animate' : 'initial'}
                variants={fadeUpVariants}
                initial={false}
                transition={{
                  duration: 0.6,
                  delay: 0.2,
                  ease: [0.21, 0.47, 0.32, 0.98],
                  type: 'spring',
                }}
              >
                Nous travailons dur pour vous fournir les meilleures ressources, les plus récentes et les plus pertinentes pour vous aider à trouver ce que vous cherchez en un temps record.
                    </motion.p>

              <motion.div
                animate={fadeInInView ? 'animate' : 'initial'}
                variants={fadeUpVariants}
                className="flex flex-col gap-4 lg:flex-row"
                initial={false}
                transition={{
                  duration: 0.6,
                  delay: 0.3,
                  ease: [0.21, 0.47, 0.32, 0.98],
                  type: 'spring',
                }}
              >
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSegtLg4LdKe8l07uQGihOPoOOBvAYKjPFQdRdVsJdCb6Cpo0Q/viewform?usp=pp_url"
                  className={cn(
                    // colors
                    'bg-black  text-white shadow hover:bg-black/90 ',

                    // layout
                    'group relative inline-flex h-9 w-full items-center justify-center gap-2 overflow-hidden whitespace-pre rounded-md px-4 py-2 text-base font-semibold tracking-tighter focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 md:flex',

                    // animation
                    'transform-gpu ring-offset-current transition-all duration-300 ease-out hover:ring-2 hover:ring-primary hover:ring-offset-2'
                  )}
                >
                  Participer aux amicales <ArrowRightIcon className="size-4 translate-x-0 transition-all duration-300 ease-out group-hover:translate-x-1" />
                  <ChevronRight className="size-4 translate-x-0 transition-all duration-300 ease-out group-hover:translate-x-1" />
                </a>
              </motion.div>
            </div>
          </div>

          <motion.div
            animate={fadeInInView ? 'animate' : 'initial'}
            variants={fadeUpVariants}
            initial={false}
            transition={{
              duration: 1.4,
              delay: 0.4,
              ease: [0.21, 0.47, 0.32, 0.98],
              type: 'spring',
            }}
            className="rounded-xl relative mt-24 h-full w-full after:absolute after:inset-0 after:z-10 after:[background:linear-gradient(to_top,#fff_10%,transparent)]"
          >
            <div
              className={cn(
                'absolute inset-0 bottom-1/2 h-full w-full transform-gpu [filter:blur(120px)]',

                // light styles
                '[background-image:linear-gradient(to_bottom,#ffaa40,transparent_30%)]'
              )}
            />

            <video
              autoPlay
              loop
              muted
              src="https://www.youtube.com/embed/N2fMqyN_Ips"
              className="rounded-xl w-full aspect-video object-cover"
            />
           <BorderBeam size={150} />
            <BorderBeam size={150} delay={7} />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
