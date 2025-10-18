import { Card } from "./ui/card";
import { Badge } from "./ui/badge";

interface BookCardProps {
  title: string;
  author: string;
  cover: string;
  badge?: string;
  badgeVariant?: "default" | "secondary" | "destructive" | "outline";
}

const BookCard = ({ title, author, cover, badge, badgeVariant = "default" }: BookCardProps) => {
  return (
    <Card className="group relative overflow-hidden bg-card border-border hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer">
      <div className="relative aspect-[2/3] overflow-hidden">
        {badge && (
          <Badge 
            variant={badgeVariant as any}
            className="absolute top-3 left-3 z-10 bg-accent text-accent-foreground font-semibold px-3 py-1"
          >
            {badge}
          </Badge>
        )}
        <img
          src={cover}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <div className="p-4 bg-card">
        <h3 className="font-semibold text-card-foreground line-clamp-2 mb-1 text-base">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-1">{author}</p>
      </div>
    </Card>
  );
};

export default BookCard;
