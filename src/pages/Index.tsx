import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import FeaturedBooks from "@/components/FeaturedBooks";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-20">
        <Hero />
        <FeaturedBooks />
      </main>
    </div>
  );
};

export default Index;
