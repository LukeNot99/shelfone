import { AppLayout } from "@/components/AppLayout";
import { Switch } from "@/components/ui/switch";

export default function Settings() {
  return (
    <AppLayout>
      <div className="space-y-8 md:space-y-12 pb-8 pt-4">

        <div>
          <h2 className="font-body font-medium text-xl md:text-3xl tracking-wide mb-4 md:mb-6 text-foreground">
            Notifiche
          </h2>
          
          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
            <div className="bg-card dark:bg-muted/20 rounded-2xl border border-border p-4 md:p-6 shadow-lg dark:shadow-none hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <Switch defaultChecked className="mt-1 scale-110" />
                <div className="flex-1">
                  <h3 className="font-body font-medium text-sm md:text-lg text-foreground">
                    Consenti notifiche
                  </h3>
                  <p className="font-body text-xs md:text-sm text-muted-foreground mt-1">
                    Consenti la ricezione di notifiche in-app
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card dark:bg-muted/20 rounded-2xl border border-border p-4 md:p-6 shadow-lg dark:shadow-none hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <Switch defaultChecked className="mt-1 scale-110" />
                <div className="flex-1">
                  <h3 className="font-body font-medium text-sm md:text-lg text-foreground">
                    Wishlist
                  </h3>
                  <p className="font-body text-xs md:text-sm text-muted-foreground mt-1">
                    Avvisami quando un libro presente nella mia wishlist, torna disponibile al prestito
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card dark:bg-muted/20 rounded-2xl border border-border p-4 md:p-6 shadow-lg dark:shadow-none hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <Switch defaultChecked className="mt-1 scale-110" />
                <div className="flex-1">
                  <h3 className="font-body font-medium text-sm md:text-lg text-foreground">
                    Scadenza prestito
                  </h3>
                  <p className="font-body text-xs md:text-sm text-muted-foreground mt-1">
                    Avvisami 48h prima della scadenza del prestito
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card dark:bg-muted/20 rounded-2xl border border-border p-4 md:p-6 shadow-lg dark:shadow-none hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <Switch defaultChecked className="mt-1 scale-110" />
                <div className="flex-1">
                  <h3 className="font-body font-medium text-sm md:text-lg text-foreground">
                    Nuovi arrivi
                  </h3>
                  <p className="font-body text-xs md:text-sm text-muted-foreground mt-1">
                    Avvisami quando sono disponibili nuovi titoli
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="font-body font-medium text-xl md:text-3xl tracking-wide mb-4 md:mb-6 text-foreground">
            Impostazioni
          </h2>
          
          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
            <div className="bg-card dark:bg-muted/20 rounded-2xl border border-border p-4 md:p-6 shadow-lg dark:shadow-none hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <Switch defaultChecked className="mt-1 scale-110" />
                <div className="flex-1">
                  <h3 className="font-body font-medium text-sm md:text-lg text-foreground">
                    Suoni
                  </h3>
                  <p className="font-body text-xs md:text-sm text-muted-foreground mt-1">
                    Consenti toni di notifica in chat assistenza
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card dark:bg-muted/20 rounded-2xl border border-border p-4 md:p-6 shadow-lg dark:shadow-none hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <Switch defaultChecked className="mt-1 scale-110" />
                <div className="flex-1">
                  <h3 className="font-body font-medium text-sm md:text-lg text-foreground">
                    Mostra spoiler
                  </h3>
                  <p className="font-body text-xs md:text-sm text-muted-foreground mt-1">
                    Disattiva per non rovinarti la sorpresa
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}