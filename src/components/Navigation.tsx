import { Search } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl">📚</span>
            <h1 className="text-xl font-bold font-serif text-foreground">
              TRUYỆN NHƯ HEO
            </h1>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <Button variant="ghost" className="text-foreground hover:text-primary">
              Trang chủ
            </Button>
            <Button variant="ghost" className="text-foreground hover:text-primary">
              Thể loại
            </Button>
            <Button variant="ghost" className="text-foreground hover:text-primary">
              Đầu trang
            </Button>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative hidden sm:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Tìm kiếm..."
                className="pl-10 w-64 bg-secondary/50 border-border focus:border-primary transition-colors"
              />
            </div>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Search className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
