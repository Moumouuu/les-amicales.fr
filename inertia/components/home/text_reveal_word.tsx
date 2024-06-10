import TextReveal from '~/components/ui/text_reveal'

export function TextRevealWord() {
  return (
    <div className="z-10 flex min-h-[12rem] items-center justify-center rounded-lg border bg-white dark:bg-black">
      <TextReveal text="Créer votre robot et devenez un veritable sauveteur !" />
      <TextReveal text="Coder votre propre star du foot et devenez champion de la ligue !" />
    </div>
    
  )
}
