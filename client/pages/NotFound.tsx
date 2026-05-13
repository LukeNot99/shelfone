import { AppLayout } from "@/components/AppLayout";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <AppLayout>
      <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-6 text-left md:text-center md:items-center">
        <div className="space-y-4 md:space-y-6">
          <h1 className="font-heading text-3xl md:text-6xl text-foreground">
            Pagina non trovata
          </h1>
          <p className="font-body text-base md:text-xl text-muted-foreground max-w-sm md:max-w-2xl mx-auto leading-relaxed">
            Sembra che questa pagina non esista. Torna alla home per continuare a esplorare.
          </p>
          <div className="pt-4">
            <Link 
              to="/" 
              className="inline-block bg-shelf-blue text-white font-heading font-medium text-base md:text-lg px-8 py-3 md:px-10 md:py-4 rounded-full shadow-lg hover:bg-blue-600 hover:scale-105 transition-all active:scale-95"
            >
              Torna alla home
            </Link>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}