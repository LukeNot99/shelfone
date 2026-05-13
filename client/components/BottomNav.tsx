import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

export const BottomNav = () => {
  const location = useLocation();
  const pathname = location.pathname;

  const mainNavItems = [
    { path: "/", icon: "home", label: "Home" },
    { path: "/library", icon: "auto_stories", label: "Libreria" },
    { path: "/search", icon: "search", label: "Cerca" },
    { path: "/settings", icon: "more_horiz", label: "Altro" },
  ];

  return (
    <nav className="fixed bottom-6 left-0 right-0 z-50 pointer-events-none">
      <div className="max-w-[90%] md:max-w-2xl mx-auto flex items-end justify-between gap-3 pointer-events-auto">
        
 
        <div className="flex-1 bg-white dark:bg-zinc-900 border border-white/20 dark:border-zinc-800 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-black/20 rounded-[32px] h-20 px-2 flex items-center justify-between">
          {mainNavItems.map((item) => {
            const isActive = pathname === item.path;
            
            return (
              <Link
                key={item.path}
                to={item.path}
                className="flex-1 flex flex-col items-center justify-center h-full group"
              >
                <div 
                  className={cn(
                    "flex items-center justify-center w-12 h-12 rounded-[20px] transition-all duration-300",
                    isActive 
                      ? "bg-blue-100 dark:bg-shelf-blue/20" 
                      : "bg-transparent group-hover:bg-gray-50 dark:group-hover:bg-white/5"
                  )}
                >
                  <span 
                    className={cn(
                      "material-symbols-rounded text-[28px] transition-all duration-300",
                      isActive 
                        ? "text-shelf-blue dark:text-shelf-blue-light fill-current" 
                        : "text-gray-400 dark:text-zinc-500 group-hover:text-gray-600"
                    )}
                    style={{ 
                      fontVariationSettings: isActive ? "'FILL' 1, 'wght' 600" : "'FILL' 0, 'wght' 400" 
                    }}
                  >
                    {item.icon}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>


        <Link
          to="/chat"
          className={cn(
            "shrink-0 w-20 h-20 rounded-4xl flex items-center justify-center shadow-[0_8px_30px_rgb(0,136,255,0.3)] transition-all duration-300 hover:scale-105 active:scale-95",
            pathname === "/chat"
              ? "bg-shelf-blue dark:bg-shelf-blue text-white ring-4 ring-shelf-blue-light/30"
              : "bg-shelf-blue text-white"
          )}
        >
          <span 
            className="material-symbols-rounded text-[32px]"
            style={{ fontVariationSettings: "'FILL' 1, 'wght' 400" }}
          >
            support_agent
          </span>
        </Link>

      </div>
    </nav>
  );
};