import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion'

const faqs = [
  {
    section: 'General',
    qa: [
      {
        question: "Qu'est-ce que les amicales ?",
        answer: (
          <span>
            C'est un projet à but pédagogique qui a pour objectif de réunir des jeunes de niveau
            bac-8 à bac+8 autour des différentes ligues de la robotique. Nous intervenons dans
            différents établissements scolaires pour faire découvrir la robotique et l'informatique
            aux jeunes, ou encore pour les aider à préparer des compétitions. Nous proposons deux
            formats de rencontres : à la journée ou à la demi-journée.
          </span>
        ),
      },
      {
        question: 'Comment puis-je participer ?',
        answer: (
          <span>
            Pour participer à une amicale, il suffit de vous inscrire sur notre site internet. Vous
            pouvez également nous contacter par mail à contact@birds-audiovisuel.fr pour plus de
            renseignements.
          </span>
        ),
      },
    ],
  },

  {
    section: 'Support',
    qa: [
      {
        question: 'Comment nous contactez ?',
        answer: (
          <span>
            Vous pouvez nous joindre sur notre discord <a href="">discord</a> ou par mail à
            contact@birds-audiovisuel.fr
          </span>
        ),
      },
    ],
  },
  {
    section: 'Documentation',
    qa: [
      {
        question: 'Comment se procurer le kit',
        answer: (
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga enim architecto sed a
            maxime maiores eos incidunt vel, aut neque.
          </span>
        ),
      },
    ],
  },
  {
    section: 'Integration',
    qa: [
      {
        question: 'Comment intégrer le programme',
        answer: (
          <span>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit ea nulla nostrum
            molestiae dolorem tempora quasi quisquam deserunt, sunt magni soluta aspernatur
            perferendis enim. Et magnam expedita quos adipisci nesciunt!
          </span>
        ),
      },
    ],
  },
]

export function FAQ() {
  return (
    <section id="faq">
      <div className="py-14">
        <div className="container mx-auto px-4 md:px-8">
          <div className="mx-auto max-w-5xl text-center">
            <h4 className="text-xl font-bold tracking-tight text-black dark:text-white">FAQs</h4>
            <h2 className="text-4xl font-bold tracking-tight text-black dark:text-white sm:text-6xl">
              Questions fréquemment posées
            </h2>
            <p className="mt-6 text-xl leading-8 text-black/80 dark:text-white">
              Si vous avez des questions plus précises, n'hésitez pas à nous contacter sur discord
            </p>
          </div>
          <div className="container mx-auto my-12 max-w-[600px] space-y-12">
            {faqs.map((faq, idx) => (
              <section key={idx} id={'faq-' + faq.section}>
                <h2 className="mb-4 text-left text-base font-semibold tracking-tight text-foreground/60">
                  {faq.section}
                </h2>
                <Accordion
                  type="single"
                  collapsible
                  className="flex w-full flex-col items-center justify-center"
                >
                  {faq.qa.map((item, i) => (
                    <AccordionItem key={i} value={item.question} className="w-full max-w-[600px]">
                      <AccordionTrigger>{item.question}</AccordionTrigger>
                      <AccordionContent>{item.answer}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </section>
            ))}
          </div>
          <h4 className="mb-12 text-center text-sm font-medium tracking-tight text-foreground/80">
            Besoin d'aide ? Contactez-nous à{' '}
            <a href="mailto:support@example.com" className="underline">
              contact@birds-audiovisuel.fr
            </a>
          </h4>
        </div>
      </div>
    </section>
  )
}
