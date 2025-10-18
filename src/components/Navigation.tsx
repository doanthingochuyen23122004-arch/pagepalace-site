export default function HeaderMeo() { 
  return (
    <header className="w-full bg-white/80 backdrop-blur-sm border-b border-lime-100 px-8 py-4 flex items-center justify-between shadow-sm">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <img src="/logo-meo.png" alt="Logo" className="w-8 h-8" />
        <h1 className="text-lg font-semibold text-[#577b49] tracking-wide">
          TRUYỆN NHÀ MEO <span className="text-xl">🐾</span>
        </h1>
      </div>

      {/* Navigation */}
      <nav className="hidden md:flex items-center gap-6 text-[#5e714c] font-medium">
        {["Trang chủ", "Thể loại", "Đầu trang"].map((item) => (
          <a
            key={item}
            href="#"
            className="relative px-4 py-2 rounded-full transition-all duration-300 
                       hover:bg-[#5e9e4a] hover:text-white"
          >
            {item}
          </a>
        ))}

        {/* Ô tìm kiếm */}
        <div className="flex items-center border border-[#d2d8c7] bg-[#fafdf8] rounded-full px-3 py-1.5 transition-all duration-300 hover:border-[#a3c78a]">
          <input
            type="text"
            placeholder="Tìm kiếm..."
            className="bg-transparent outline-none text-sm text-[#4f6040] placeholder-[#9bb08a] w-32"
          />
          <button
            className="text-[#577b49] ml-1 text-sm hover:text-white hover:bg-[#5e9e4a] rounded-full px-2 py-1 transition-all duration-300"
          >
            🔍
          </button>
        </div>
      </nav>
    </header>
  );
}
