export default function HeaderMeo() {
  return (
    <header className="w-full bg-white border-b border-lime-100 px-8 py-4 flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <img src="/logo-meo.png" alt="Logo" className="w-8 h-8" />
        <h1 className="text-lg font-semibold text-[#577b49]">
          TRUYỆN NHÀ MEO <span className="text-xl">🐾</span>
        </h1>
      </div>

      {/* Navigation */}
      <nav className="hidden md:flex items-center gap-6 text-[#5e714c] font-medium">
        <a href="#" className="hover:text-[#3b5d32] transition">Trang chủ</a>
        <a href="#" className="hover:text-[#3b5d32] transition">Thể loại</a>
        <a href="#" className="hover:text-[#3b5d32] transition">Đầu trang</a>

        <div className="flex items-center border border-[#d2d8c7] bg-[#fafdf8] rounded-full px-3 py-1.5">
          <input
            type="text"
            placeholder="Tìm kiếm..."
            className="bg-transparent outline-none text-sm text-[#4f6040] placeholder-[#9bb08a] w-32"
          />
          <button className="text-[#577b49] ml-1 text-sm">🔍</button>
        </div>
      </nav>
    </header>
  );
}
