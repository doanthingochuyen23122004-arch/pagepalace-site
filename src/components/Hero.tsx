import heroBackground from "@/assets/hình nền mèo chilljpg(1).jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden rounded-b-[40px] shadow-lg">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${heroBackground})`,
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-[#fffaf2]/40 to-transparent" />

      <div className="relative z-10 text-center px-4 py-20">
        <h2 className="text-5xl md:text-7xl font-bold text-white drop-shadow-2xl mb-6 font-serif leading-tight">
          kho
          <br />
          tàng
          <br />
          truyện 
          <br />
          hay
        </h2>
        <p className="text-xl md:text-2xl text-white/90 drop-shadow-lg max-w-2xl mx-auto">
          Khám phá thế giới văn chương qua từng trang sách
        </p>
      </div>
    </section>
  );
};

export default Hero;
