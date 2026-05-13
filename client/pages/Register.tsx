import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Logo } from "@/components/Logo";

export default function Register() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    setIsLoading(true);

    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-8 bg-background animate-in fade-in zoom-in-95 duration-500">
        <div className="max-w-md w-full text-left space-y-6">
          <Logo className="text-3xl scale-110 origin-left" />
          <h1 className="font-body text-2xl font-medium leading-tight text-foreground">
            la biblioteca del tuo comune,
            <br />
            <span className="text-shelf-blue font-semibold">sempre in tasca.</span>
          </h1>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-8 bg-background">
      <div className="max-w-md w-full space-y-8">

        <div className="text-left">
          <Logo className="text-xl" />
        </div>


        <div className="text-left space-y-2">
          <h2 className="font-body font-medium text-lg text-foreground">
            Crea un account
          </h2>
          <h1 className="font-body font-medium text-2xl text-foreground">
            Inserisci la tua mail per registrarti su{" "}
            <span className="font-heading">
              <span className="text-foreground">shelf</span>
              <span className="text-shelf-blue">one.</span>
            </span>
          </h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="email@domain.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2.5 rounded-full border border-border bg-background font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-shelf-blue"
            required
          />
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-shelf-blue text-white font-heading font-medium text-sm px-8 py-2.5 rounded-full hover:bg-blue-600 transition-colors"
            >
              Continua
            </button>
          </div>
        </form>

        <p className="font-body text-sm text-muted-foreground leading-relaxed">
          Cliccando continua, accetti i nostri{" "}
          <span className="font-medium text-foreground">Termini di Servizio</span>{" "}
          e le nostre{" "}
          <span className="font-medium text-foreground">Privacy Policy</span>
          <br />
          <br />
          <span className="font-heading">
            <span className="text-foreground">shelf</span>
            <span className="text-shelf-blue">one.</span>
          </span>{" "}
          non condivide mai i tuoi dati personali con nessuno, promesso 🤝
        </p>
      </div>
    </div>
  );
}