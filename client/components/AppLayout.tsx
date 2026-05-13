import { ReactNode } from "react";
import { BottomNav } from "./BottomNav";
import { Logo } from "./Logo";
import { useNavigate } from "react-router-dom";
import { LogOut, Bell, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";

interface AppLayoutProps {
  children: ReactNode;
  showNav?: boolean;
  showLogo?: boolean;
  showAvatar?: boolean;
}

const notifications = [
  {
    id: 1,
    title: "Prestito Scaduto",
    book: "Il Piccolo Principe",
    date: "Ieri",
    read: false,
  },
  {
    id: 2,
    title: "Restituito con successo",
    book: "Harry Potter e la Pietra Filosofale",
    date: "2 giorni fa",
    read: true,
  },
  {
    id: 3,
    title: "Prenotazione confermata",
    book: "Cuore di Ciccia",
    date: "1 settimana fa",
    read: true,
  },
  {
    id: 4,
    title: "Restituito con successo",
    book: "1984",
    date: "2 settimane fa",
    read: true,
  },
  {
    id: 5,
    title: "Prestito avviato",
    book: "Il Signore degli Anelli",
    date: "1 mese fa",
    read: true,
  },
];

export const AppLayout = ({ children, showNav = true, showLogo = true, showAvatar = true }: AppLayoutProps) => {
  const navigate = useNavigate();
  const { theme, setTheme } = useTheme();

  const handleLogout = () => {
    navigate("/register");
  };

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
  
    <div className="min-h-screen pb-24 md:pb-32 relative bg-paper transition-colors duration-300">
      {showLogo && (
  
        <header className="sticky top-0 z-30 bg-white/60 dark:bg-background/80 backdrop-blur-md border-b border-gray-100/50 dark:border-border/50">
          <div className="p-4 pt-4 md:py-6 max-w-md md:max-w-6xl mx-auto flex items-center justify-between">
            <Logo className="md:scale-110 md:origin-left" />
            
            {showAvatar && (
              <Sheet>
                <SheetTrigger asChild>
                  <button className="relative outline-none transition-transform active:scale-95 hover:opacity-80">
                    <img 
                      src="/assets/avatar.png" 
                      alt="User Avatar" 
                      className="w-10 h-10 md:w-11 md:h-11 rounded-full border border-gray-200 dark:border-gray-700 shadow-sm object-cover"
                    />
                    <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 border-2 border-white dark:border-background rounded-full"></span>
                  </button>
                </SheetTrigger>
                
                <SheetContent side="right" className="w-[85%] sm:w-[380px] flex flex-col p-0 gap-0 border-l dark:border-border dark:bg-background">
                  
                  <SheetHeader className="p-6 border-b border-gray-100 dark:border-border text-left">
                    <SheetTitle className="flex items-center gap-2 font-heading text-xl dark:text-foreground">
                      <Bell className="w-5 h-5 text-shelf-blue" />
                      Notifiche
                    </SheetTitle>
                  </SheetHeader>

                  <ScrollArea className="flex-1">
                    <div className="p-6 space-y-6">
                      <div className="space-y-4">
                        <h3 className="font-body text-xs font-semibold text-gray-400 uppercase tracking-wider">
                          Cronologia Prestiti
                        </h3>
                        
                        <div className="space-y-1">
                          {notifications.map((item) => (
                            <div key={item.id} className="group flex gap-4 py-3 items-start hover:bg-gray-50 dark:hover:bg-accent/50 rounded-lg px-2 -mx-2 transition-colors cursor-pointer">
                              <div className={`mt-1 w-2 h-2 rounded-full shrink-0 ${item.read ? 'bg-gray-200 dark:bg-gray-600' : 'bg-shelf-blue'}`} />
                              <div className="space-y-1">
                                <p className="font-body text-sm font-medium text-gray-900 dark:text-gray-100 leading-none">
                                  {item.title}
                                </p>
                                <p className="font-body text-sm text-gray-600 dark:text-gray-400">
                                  {item.book}
                                </p>
                                <p className="font-body text-xs text-gray-400 dark:text-gray-500">
                                  {item.date}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </ScrollArea>

                  <div className="p-6 border-t border-gray-100 dark:border-border bg-gray-50/50 dark:bg-muted/20 flex items-center justify-between gap-4">
                    <button 
                      onClick={handleLogout}
                      className="flex-1 flex items-center gap-3 p-2 rounded-lg text-red-500 hover:bg-red-50 dark:hover:bg-red-950/20 transition-colors"
                    >
                      <LogOut className="w-5 h-5" />
                      <span className="font-body font-medium text-sm">Esci</span>
                    </button>

                    <button 
                      onClick={toggleTheme}
                      className="flex items-center justify-center p-2.5 rounded-lg text-gray-500 hover:bg-white dark:hover:bg-accent hover:shadow-sm dark:text-gray-400 dark:hover:text-white transition-all border border-transparent dark:hover:border-border"
                      title={theme === 'dark' ? "Passa al tema chiaro" : "Passa al tema scuro"}
                    >
                        <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                        <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                        <span className="sr-only">Cambia tema</span>
                    </button>
                  </div>

                </SheetContent>
              </Sheet>
            )}
          </div>
        </header>
      )}
      
      <main className="max-w-md md:max-w-6xl mx-auto px-4 md:px-8">
        {children}
      </main>
      
      {showNav && <BottomNav />}
    </div>
  );
};