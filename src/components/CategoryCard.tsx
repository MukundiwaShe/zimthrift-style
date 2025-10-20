import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";

interface CategoryCardProps {
  title: string;
  itemCount: number;
  image: string;
  link: string;
}

const CategoryCard = ({ title, itemCount, image, link }: CategoryCardProps) => {
  return (
    <Link to={link}>
      <Card className="group overflow-hidden border-border hover:shadow-medium transition-all cursor-pointer">
        <CardContent className="p-0">
          <div className="relative h-64 overflow-hidden">
            <img
              src={image}
              alt={title}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
            <div className="absolute bottom-4 left-4 text-background">
              <h3 className="text-2xl font-bold">{title}</h3>
              <p className="text-sm text-background/90">{itemCount} items</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default CategoryCard;
