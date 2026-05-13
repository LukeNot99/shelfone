import { AppLayout } from "@/components/AppLayout";

export default function Library() {
  return (
    <AppLayout>
      <div className="flex flex-col items-left justify-center min-h-[60vh] space-y-6 md:space-y-10">
        <div className="text-left space-y-4 md:space-y-6">
          <h1 className="font-heading text-2xl md:text-5xl text-foreground">
            La tua biblioteca
          </h1>
          <p className="font-body text-base md:text-xl text-muted-foreground max-w-sm md:max-w-2xl leading-relaxed">
            Qui troverai i tuoi libri in prestito, la wishlist e lo storico delle letture.
          </p>
          <p className="font-body text-sm md:text-lg text-muted-foreground/70 italic">
            Continua a esplorare per aggiungere contenuti!
          </p>
        </div>
      </div>
    </AppLayout>
  );
}