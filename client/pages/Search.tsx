import { AppLayout } from "@/components/AppLayout";

export default function Search() {
  return (
    <AppLayout>
      <div className="space-y-6 md:space-y-10 pb-8">
        <div className="pt-4">
          <h2 className="font-body font-medium text-lg md:text-2xl tracking-wider text-muted-foreground">
            Ciao Luca,
          </h2>

          <h1 className="font-body font-medium text-2xl md:text-5xl tracking-wide mt-2 text-foreground leading-tight">
            quale sarà la tua prossima lettura?
          </h1>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 pt-8">
          <button className="bg-card dark:bg-muted/30 rounded-2xl px-4 py-4 md:py-8 text-left shadow-lg dark:shadow-none dark:border dark:border-border hover:shadow-xl hover:-translate-y-1 transition-all">
            <span className="font-body text-base md:text-xl text-card-foreground">🍃 Cerca per citazione</span>
          </button>

          <button className="bg-card dark:bg-muted/30 rounded-2xl px-4 py-4 md:py-8 text-left shadow-lg dark:shadow-none dark:border dark:border-border hover:shadow-xl hover:-translate-y-1 transition-all">
            <span className="font-body text-base md:text-xl text-card-foreground">🎭 Cerca per genere</span>
          </button>

          <button className="bg-card dark:bg-muted/30 rounded-2xl px-4 py-4 md:py-8 text-left shadow-lg dark:shadow-none dark:border dark:border-border hover:shadow-xl hover:-translate-y-1 transition-all">
            <span className="font-body text-base md:text-xl text-card-foreground">✍🏼 Cerca per autore</span>
          </button>

          <button className="bg-card dark:bg-muted/30 rounded-2xl px-4 py-4 md:py-8 text-left shadow-lg dark:shadow-none dark:border dark:border-border hover:shadow-xl hover:-translate-y-1 transition-all">
            <span className="font-body text-base md:text-xl text-card-foreground">🔢 Cerca per ISBN</span>
          </button>
        </div>
      </div>
    </AppLayout>
  );
}