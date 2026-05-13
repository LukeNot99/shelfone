import { AppLayout } from "@/components/AppLayout";
import { Phone, Plus, Mic, Smile } from "lucide-react";

export default function Chat() {
  return (
    <AppLayout showNav={true}>
      <div className="space-y-6 md:space-y-8 pb-40 md:pb-48">
        <div className="sticky top-21.25 md:top-23.25 z-20 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md flex items-center justify-between py-3 border-b border-shelf-border -mx-4 px-4 transition-all">
          <div className="flex items-center gap-3">
            <div className="relative">
                <img 
                src="/assets/helpdesk.png" 
                alt="Helpdesk" 
                className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-gray-100 dark:border-gray-700 object-cover"
                />
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 md:w-3 md:h-3 bg-green-500 border-2 border-white dark:border-zinc-900 rounded-full"></span>
            </div>
            <div>
              <h2 className="font-heading text-base md:text-xl font-medium text-foreground">Helpdesk</h2>
              <p className="font-body text-xs md:text-sm text-green-600 font-medium">Online</p>
            </div>
          </div>

          <button className="p-2.5 md:p-3 bg-gray-50 dark:bg-muted rounded-full hover:bg-gray-100 dark:hover:bg-muted/80 transition-colors active:scale-95">
            <Phone className="w-5 h-5 md:w-6 md:h-6 text-muted-foreground" />
          </button>
        </div>

        <div className="space-y-6 md:space-y-8">
          
          <div className="flex justify-end">
            <div className="bg-shelf-blue text-white rounded-2xl rounded-tr-sm px-5 py-3 md:px-6 md:py-4 max-w-[85%] md:max-w-[70%] shadow-sm">
              <p className="font-body text-sm md:text-lg leading-relaxed">
                buongiorno, vorrei sapere se è disponibile il libro Cuore di Edmondo De Amicis
              </p>
              <span className="text-[10px] md:text-xs text-blue-100 block text-right mt-1 opacity-80">10:42</span>
            </div>
          </div>

          <div className="flex items-end gap-3">
            <img 
              src="/assets/helpdesk.png" 
              alt="helpdesk" 
              className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-gray-100 dark:border-gray-700 mb-1 object-cover"
            />
            <div className="space-y-1.5 md:space-y-2 max-w-[85%] md:max-w-[70%]">
              <div className="bg-white dark:bg-muted border border-gray-100 dark:border-border rounded-2xl rounded-tl-sm px-4 py-2.5 md:px-6 md:py-4 shadow-sm">
                <p className="font-body text-sm md:text-lg text-foreground">Ciao Luca 👋</p>
              </div>
              <div className="bg-white dark:bg-muted border border-gray-100 dark:border-border rounded-2xl rounded-tl-sm px-4 py-2.5 md:px-6 md:py-4 shadow-sm">
                <p className="font-body text-sm md:text-lg text-foreground">Controlliamo subito la disponibilità...</p>
              </div>
              <div className="bg-white dark:bg-muted border border-gray-100 dark:border-border rounded-2xl rounded-tl-sm px-4 py-2.5 md:px-6 md:py-4 shadow-sm">
                <p className="font-body text-sm md:text-lg text-foreground">Sì, è disponibile alla prenotazione! 📚</p>
                <span className="text-[10px] md:text-xs text-muted-foreground block text-right mt-1">10:44</span>
              </div>
            </div>
          </div>

          <div className="flex justify-end flex-col items-end gap-1.5 md:gap-2">
            <div className="bg-shelf-blue text-white rounded-2xl rounded-tr-sm px-5 py-3 md:px-6 md:py-4 max-w-[85%] md:max-w-[70%] shadow-sm">
              <p className="font-body text-sm md:text-lg leading-relaxed">ok, allora desidero prenotarlo</p>
            </div>
            <div className="bg-shelf-blue text-white rounded-2xl rounded-tr-sm px-5 py-3 md:px-6 md:py-4 max-w-[85%] md:max-w-[70%] shadow-sm">
              <p className="font-body text-sm md:text-lg leading-relaxed">grazie di cuore ragazzi</p>
              <span className="text-[10px] md:text-xs text-blue-100 block text-right mt-1 opacity-80">10:45</span>
            </div>
          </div>
        </div>

        <div className="fixed bottom-32 md:bottom-32 left-0 right-0 px-4 max-w-md md:max-w-4xl mx-auto z-40 transition-all duration-300">
          <div className="bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md rounded-3xl border border-gray-200 dark:border-border p-2 flex items-center gap-2 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-none">
            <button className="p-2.5 text-muted-foreground hover:text-shelf-blue hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-full transition-all active:scale-95">
               <Plus className="w-5 h-5 md:w-6 md:h-6" />
            </button>
            
            <input 
              type="text" 
              placeholder="Scrivi un messaggio..." 
              className="flex-1 bg-transparent outline-none font-body text-sm md:text-lg px-2 text-foreground placeholder:text-muted-foreground"
            />
            
            <button className="p-2.5 text-muted-foreground hover:text-shelf-blue hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-full transition-all active:scale-95">
                <Smile className="w-5 h-5 md:w-6 md:h-6" />
            </button>
            <button className="p-2.5 text-muted-foreground hover:text-shelf-blue hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-full transition-all active:scale-95">
                <Mic className="w-5 h-5 md:w-6 md:h-6" />
            </button>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}