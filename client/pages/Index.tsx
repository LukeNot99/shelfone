import * as React from "react";
import { AppLayout } from "@/components/AppLayout";
import { Link } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const newArrivals = [
  { id: 1, title: "Il Piccolo Principe", img: "/assets/ipp.png" },
  { id: 2, title: "Harry Potter", img: "/assets/hp.png" },
  { id: 3, title: "Cuore di Ciccia", img: "/assets/cdc.png" },
  { id: 4, title: "La Compagnia dei Celestini", img: "/assets/lcdc.png" },
  { id: 5, title: "Il Piccolo Principe 2", img: "/assets/ipp.png" },
  { id: 6, title: "Harry Potter 2", img: "/assets/hp.png" },
];

const topSellers = [
  { id: 13, title: "Il Signore degli Anelli", img: "/assets/isda.png" },
  { id: 14, title: "Lo Hobbit", img: "/assets/isda_lh.png" },
  { id: 15, title: "Il Silmarillion", img: "/assets/is.png" },
];

const classicMysteries = [
  { id: 7, title: "Corpi al sole", img: "/assets/cas.png" },
  { id: 8, title: "Il Consiglio dei Quattro", img: "/assets/icdq.png" },
  { id: 9, title: "La prima indagine di Montalbano", img: "/assets/lpidm.png" },
  { id: 10, title: "La Banda dei Cinque", img: "/assets/lbdc.png" },
  { id: 11, title: "Corpi al sole 2", img: "/assets/cas.png" },
  { id: 12, title: "Il Consiglio dei Quattro 2", img: "/assets/icdq.png" },
];

const tileClass =
  "block rounded-2xl overflow-hidden shadow-md transition-transform duration-200 transform-gpu hover:scale-[1.03] hover:shadow-xl h-full bg-card";

const BookCarouselSection = ({
  title,
  subtitle,
  books,
}: {
  title?: string;
  subtitle?: string;
  books: { id: number; title: string; img: string }[];
}) => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="space-y-4 py-2 md:py-6">
      <div className="px-1">
        {title && (
          <h1 className="font-body font-medium text-lg md:text-3xl tracking-wider text-foreground">
            {title}
          </h1>
        )}
        {subtitle && (
          <p className="font-body text-sm md:text-xl tracking-wide mt-1 text-muted-foreground">
            {subtitle}
          </p>
        )}
      </div>

      <Carousel
        setApi={setApi}
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-4 py-4">
          {books.map((book) => (
            <CarouselItem
              key={book.id}
              className="pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4"
            >
              <div className="h-full px-1">
                <Link to={`/book/${book.id}`} className={tileClass}>
                  <Card className="border-0 shadow-none h-full bg-transparent">
                    <CardContent className="p-0 h-full">
                      <img
                        src={book.img}
                        alt={book.title}
                        className="w-full h-52 md:h-72 object-cover"
                      />
                    </CardContent>
                  </Card>
                </Link>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="hidden md:block">
          <CarouselPrevious className="left-2 bg-background/80 hover:bg-background text-foreground" />
          <CarouselNext className="right-2 bg-background/80 hover:bg-background text-foreground" />
        </div>
      </Carousel>

      <div className="flex justify-center gap-1.5 mt-2">
        {Array.from({ length: count }).map((_, index) => (
          <div
            key={index}
            className={cn(
              "h-2 rounded-full transition-all duration-300",
              current === index + 1
                ? "bg-shelf-blue w-6"
                : "bg-shelf-blue-light/50 dark:bg-shelf-blue/20 w-2"
            )}
          />
        ))}
      </div>
    </div>
  );
};

export default function Index() {
  return (
    <AppLayout>
      <div className="space-y-8 md:space-y-16 pb-8 pt-4">
        <BookCarouselSection
          title="Bentornato Luca,"
          subtitle="scopri le novità per ragazzi più apprezzate"
          books={newArrivals}
        />

        <BookCarouselSection
          title="Top 3 della settimana"
          subtitle="I best seller più venduti del momento"
          books={topSellers}
        />

        <BookCarouselSection
          subtitle="Sorpresa! Sono tornati i grandi gialli"
          books={classicMysteries}
        />
      </div>
    </AppLayout>
  );
}