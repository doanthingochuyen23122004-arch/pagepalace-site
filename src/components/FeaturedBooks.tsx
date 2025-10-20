"use client";
import { useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

import book1 from "@/assets/book1.jpg";
import book2 from "@/assets/book2.jpg";
import book3 from "@/assets/book3.jpg";
import book4 from "@/assets/book4.jpg";
import book5 from "@/assets/book5.jpg";
import book6 from "@/assets/book6.jpg";

// --- COMPONENT: BookSection ---
const BookSection = ({ title, books }) => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    const { scrollLeft, clientWidth } = scrollRef.current;
    const scrollAmount = clientWidth * 0.8;
    scrollRef.current.scrollTo({
      left: direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative mb-20">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 font-serif text-accent text-center md:text-left">
        {title}
      </h2>

      {/* Nút cuộn trái */}
      <button
        onClick={() => scroll("left")}
        className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 bg-accent/90 text-white p-3 rounded-full shadow-lg hover:scale-110 transition z-10"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      {/* Danh sách sách cuộn ngang */}
      <motion.div
        ref={scrollRef}
        className="flex gap-5 overflow-x-auto scrollbar-hide scroll-smooth px-1 md:px-6 pb-2"
      >
        {books.map((book) => (
          <div
            key={book.id}
            className="flex-shrink-0 w-[140px] sm:w-[160px] md:w-[180px] lg:w-[200px]"
          >
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition transform hover:-translate-y-1 h-[330px] flex flex-col">
              {/* Ảnh bìa */}
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={book.cover}
                  alt={book.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>

              {/* Nội dung */}
              <div className="p-2 text-center h-[100px] flex flex-col justify-between">
                <h3 className="text-sm md:text-base font-semibold line-clamp-2 text-gray-800">
                  {book.title}
                </h3>
                <p className="text-xs text-gray-500 mt-1">{book.author}</p>
                {book.badge && (
                  <span
                    className={`inline-block mt-2 px-2 py-0.5 text-xs rounded-full font-medium ${
                      book.badge.includes("HOT")
                        ? "bg-pink-500/90 text-white"
                        : "bg-amber-200 text-amber-900"
                    }`}
                  >
                    {book.badge}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </motion.div>

      {/* Nút cuộn phải */}
      <button
        onClick={() => scroll("right")}
        className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 bg-accent/90 text-white p-3 rounded-full shadow-lg hover:scale-110 transition z-10"
      >
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  );
};

// --- COMPONENT: FeaturedBooks ---
const FeaturedBooks = () => {
  const booksHot = [
    { id: 1, title: "Buông bỏ buồn buông", author: "Trần Thị B", cover: book2, badge: "HOT 🔥" },
    { id: 2, title: "Rừng Na-Uy", author: "Haruki Murakami", cover: book4 },
    { id: 3, title: "Sinh ra là một bản thể", author: "John Mason", cover: book3 },
    { id: 4, title: "Hoa nở trên mây", author: "Lan Hương", cover: book1 },
    { id: 5, title: "Thành phố mờ ảo", author: "Lê Minh C", cover: book6 },
  ];

  const booksNew = [
    { id: 6, title: "Những ngày thơ ấu", author: "Tô Hoài", cover: book5 },
    { id: 7, title: "Chuyến tàu mùa thu", author: "Phan Trinh", cover: book5 },
    { id: 8, title: "Trăng trên đỉnh núi", author: "Hoàng Minh", cover: book1 },
    { id: 9, title: "Nơi ánh sáng không tắt", author: "Minh An", cover: book4 },
    { id: 10, title: "Buông bỏ buồn buông", author: "Trần Thị B", cover: book2, badge: "HOT 🔥" },
  ];

  const booksLove = [
    { id: 11, title: "Hẹn nhau mùa hoa trắng", author: "Ngọc Lan", cover: book6 },
    { id: 12, title: "Một ngày ở Paris", author: "Hạ Vy", cover: book1 },
    { id: 13, title: "Nụ cười của em", author: "An Nhiên", cover: book3 },
    { id: 14, title: "Gió vẫn hát", author: "Yến Phương", cover: book2 },
    { id: 15, title: "Buông bỏ buồn buông", author: "Trần Thị B", cover: book2, badge: "HOT 🔥" },
  ];

  const booksShort = [
    { id: 16, title: "Trái tim trên giấy", author: "Lê Phong", cover: book5 },
    { id: 17, title: "Bức thư gửi mùa thu", author: "Mai Ngọc", cover: book6 },
    { id: 18, title: "Những mảnh ký ức", author: "Hoài Nam", cover: book3 },
    { id: 19, title: "Dòng sông yên bình", author: "Tú Anh", cover: book1 },
    { id: 20, title: "Thành phố mờ ảo", author: "Lê Minh C", cover: book6 },
  ];

  return (
    <section className="py-16 px-4 bg-pink-50">
      <div className="container mx-auto">
        <BookSection title="🌸 Truyện nổi bật" books={booksHot} />
        <BookSection title="🔥 Truyện mới cập nhật" books={booksNew} />
        <BookSection title="💖 Truyện được yêu thích nhất" books={booksLove} />
        <BookSection title="🌙 Truyện ngắn cảm động" books={booksShort} />
      </div>
    </section>
  );
};

export default FeaturedBooks;
