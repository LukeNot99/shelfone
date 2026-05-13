import { useState } from "react";
import { AppLayout } from "@/components/AppLayout";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft, ZoomIn } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Dialog, DialogContent } from "@/components/ui/dialog";

export default function BookDetail() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleBooking = () => {
    toast({
      title: "Prenotato, buona lettura!",
      description: "Ben fatto, ti abbiamo inviato una mail con la conferma.",
      duration: 3000,
    });
  };

  return (
    <AppLayout showNav={true}>
      <div className="space-y-8 pb-8 md:space-y-12">
        
        <div className="space-y-6 md:space-y-8">
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-6 h-6 md:w-8 md:h-8" />
          </button>

          <div className="flex justify-between items-start gap-4">
            <div className="space-y-1 md:space-y-3">
              <h1 className="font-heading text-3xl md:text-6xl font-bold leading-tight text-foreground">
                Il Piccolo Principe
              </h1>
              <h2 className="font-body text-xl md:text-3xl font-medium text-muted-foreground">
                Antoine de Saint Exupéry
              </h2>
            </div>

            <div className="flex flex-col items-end shrink-0 text-right">
              <img 
                src="/assets/bompiani.png" 
                alt="Bompiani" 
                className="w-14 md:w-20 h-auto object-contain mb-1 dark:invert dark:opacity-80" 
              />
              <div className="font-body text-xs md:text-sm text-muted-foreground leading-tight">
                <span className="block font-medium text-foreground">70 min</span>
                <span>pub. 1943</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <button 
            onClick={handleBooking}
            className="bg-shelf-blue text-white font-heading font-medium text-sm md:text-lg px-8 py-3 md:px-10 md:py-4 rounded-full shadow-lg hover:bg-blue-600 hover:scale-105 transition-all active:scale-95"
          >
            Prenotalo ora
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-12 gap-5 md:gap-12 items-start">
          <div className="md:col-span-4 rounded-lg overflow-hidden shadow-md cursor-pointer group relative" onClick={() => setSelectedImage("/assets/copertina.png")}>
            <img
              src="/assets/copertina.png"
              alt="Il Piccolo Principe Cover"
              className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                <ZoomIn className="text-white w-8 h-8 drop-shadow-md" />
            </div>
          </div>
          
          <div className="md:col-span-8">
            <p className="font-body text-xs md:text-lg text-right md:text-left text-muted-foreground leading-relaxed text-pretty md:leading-loose">
              Racconto poetico e filosofico che, attraverso un linguaggio semplice e simbolico, esplora temi profondi come l'amicizia, l'amore, la solitudine e il senso della vita. La storia mette a confronto lo sguardo puro e curioso dell'infanzia con quello spesso rigido e distratto degli adulti, invitando il lettore a riscoprire ciò che è essenziale e invisibile agli occhi.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-12 gap-5 md:gap-12 items-center">
          <div className="md:col-span-8 md:order-1">
            <p className="font-body text-sm md:text-xl md:font-medium italic text-foreground leading-relaxed border-l-2 md:border-l-4 border-shelf-blue pl-3 md:pl-6">
              "Ecco il mio segreto. È molto semplice: non si vede bene che col cuore. L'essenziale è invisibile agli occhi."
            </p>
          </div>
          
          <div className="md:col-span-4 md:order-2 rounded-lg overflow-hidden shadow-sm cursor-pointer group relative" onClick={() => setSelectedImage("/assets/quarta.png")}>
            <img
              src="/assets/quarta.png"
              alt="Retro copertina"
              className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
            />
             <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                <ZoomIn className="text-white w-8 h-8 drop-shadow-md" />
            </div>
          </div>
        </div>

      </div>

      <Dialog open={!!selectedImage} onOpenChange={(open) => !open && setSelectedImage(null)}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden bg-transparent border-none shadow-none flex justify-center items-center">
            {selectedImage && (
                <img 
                    src={selectedImage} 
                    alt="Ingrandimento" 
                    className="max-h-[85vh] w-auto rounded-lg shadow-2xl"
                />
            )}
        </DialogContent>
      </Dialog>

    </AppLayout>
  );
}