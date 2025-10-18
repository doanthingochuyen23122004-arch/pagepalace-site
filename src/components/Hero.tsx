import heroBackground from "@/assets/hinh-nen-meo-chill.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-start overflow-hidden -mt-[80px] pt-[80px] rounded-b-[40px] shadow-lg">
      {/* Ảnh nền */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.25), rgba(0,0,0,0.25)), url(${heroBackground})`,
        }}
      />

     

      {/* Nội dung chữ */}
      <div className="relative z-10 text-left px-8 md:px-20 py-20">
        <h2 className="text-5xl md:text-7xl font-bold text-white drop-shadow-2xl mb-6 font-serif leading-tight">
          kho
          <br />
          tàng
          <br />
          truyện
          <br />
          hay
        </h2>
        <p className="text-xl md:text-2xl text-white/90 drop-shadow-lg max-w-2xl">
          Khám phá thế giới văn chương qua từng trang sách
        </p>
      </div>
    </section>
  );
};

export default Hero;
