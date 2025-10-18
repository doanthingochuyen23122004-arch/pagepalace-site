import BookCard from "./BookCard";
import book1 from "@/assets/book1.jpg";
import book2 from "@/assets/book2.jpg";
import book3 from "@/assets/book3.jpg";
import book4 from "@/assets/book4.jpg";
import book5 from "@/assets/book5.jpg";
import book6 from "@/assets/book6.jpg";

const FeaturedBooks = () => {
  const books = [
    {
      id: 1,
      title: "Bắn đầu tháng đầy - Ứng dụng thuật tâm lý vào bán hàng",
      author: "Nguyễn Văn A",
      cover: book1,
      badge: "89.000₫",
    },
    {
      id: 2,
      title: "Buông bỏ buồn buông",
      author: "Trần Thị B",
      cover: book2,
      badge: "HOT VIỆN",
    },
    {
      id: 3,
      title: "Sinh ra là một bản thể - Đừng chết như một bản sao",
      author: "John Mason",
      cover: book3,
    },
    {
      id: 4,
      title: "Rừng Na-Uy",
      author: "Haruki Murakami",
      cover: book4,
    },
    {
      id: 5,
      title: "Những ngày thơ ấu",
      author: "Tô Hoài",
      cover: book5,
    },
    {
      id: 6,
      title: "Thành phố mờ ảo",
      author: "Lê Minh C",
      cover: book6,
    },
  ];

  return (
    <section className="py-16 px-4 bg-background">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 font-serif text-accent">
          Truyện đề xuất
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {books.map((book) => (
            <BookCard
              key={book.id}
              title={book.title}
              author={book.author}
              cover={book.cover}
              badge={book.badge}
              badgeVariant={book.badge?.includes("HOT") ? "destructive" : "default"}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedBooks;
