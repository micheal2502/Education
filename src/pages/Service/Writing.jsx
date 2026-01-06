import React from "react";
import { useLanguage } from "../../contexts/LanguageContext";

const AguaWritingRetreat = () => {
  const { language } = useLanguage();

  const content = {
    vie: {
      title: "AGUA Writing Retreat: Hành Trình Viết Của Những Người Yêu Chữ",
      subtitle:
        "5 ngày ở Đà Lạt, nơi ngòi bút tìm lại cảm hứng và câu chữ kết nối những tâm hồn đồng điệu",
      meta: "Đăng bởi AGUA Team • 15/10/2024 • 8 phút đọc",

      sections: {
        intro: {
          title: "Khởi Đầu Của Một Không Gian Sáng Tạo",
          content:
            "Vào một buổi sáng tháng 10 năm 2023, giữa sương mù Đà Lạt, ý tưởng về một không gian viết lách dành riêng cho cộng đồng yêu chữ đã ra đời. AGUA Writing Retreat không phải là một khóa học thông thường, mà là hành trình khám phá bản thân qua ngôn từ.",
        },
        inspiration: {
          title: "Cảm Hứng Từ Những Câu Chuyện Chưa Kể",
          content:
            "Mỗi người đến với Writing Retreat đều mang theo một câu chuyện riêng. Có người đang viết dở cuốn tiểu thuyết đầu tay, có người muốn lưu giữ ký ức gia đình, cũng có người đơn giản chỉ muốn tìm lại niềm vui viết lách đã bị cuộc sống hối hả lấy mất.",
        },
        experience: {
          title: "Trải Nghiệm 5 Ngày Đặc Biệt",
          content:
            "Không gian biệt thự cổ với view rừng thông trở thành nơi lý tưởng cho sự sáng tạo. Buổi sáng bắt đầu bằng thiền viết, buổi chiều là workshop chia sẻ kỹ thuật, buổi tối là những cuộc trò chuyện bên lò sưởi về văn chương và cuộc sống.",
        },
        community: {
          title: "Cộng Đồng Những Người Viết",
          content:
            "Điều đặc biệt nhất ở Writing Retreat không phải là kiến thức học được, mà là những kết nối hình thành. 20 con người từ những ngành nghề khác nhau, nhưng cùng chung tình yêu với chữ nghĩa, đã trở thành một gia đình nhỏ hỗ trợ nhau trên hành trình sáng tạo.",
        },
        stories: {
          title: "Những Câu Chuyện Đáng Nhớ",
          content:
            "Chị Minh Anh, một nhân viên ngân hàng 35 tuổi, đã hoàn thành 3 chương tiểu thuyết đầu tiên sau 5 năm ấp ủ. Anh Văn Hùng, doanh nhân 42 tuổi, bắt đầu viết tự truyện về hành trình khởi nghiệp. Cô bé Linh, sinh viên 20 tuổi, tìm lại được đam mê viết lách sau thời gian dài mất phương hướng.",
        },
        impact: {
          title: "Tác Động Lâu Dài",
          content:
            "Sau khi kết thúc retreat, nhiều người vẫn duy trì thói quen viết hàng ngày. Một nhóm nhỏ tiếp tục gặp nhau hàng tháng để chia sẻ tác phẩm. Một số bắt đầu hợp tác trong các dự án viết sách chung. Writing Retreat không chỉ là 5 ngày, mà là khởi đầu cho nhiều hành trình dài hơn.",
        },
        reflection: {
          title: "Suy Ngẫm Về Hành Trình",
          content:
            "Viết không chỉ là kỹ năng, mà còn là cách chúng ta kết nối với bản thân và thế giới xung quanh. AGUA Writing Retreat đã chứng minh rằng, khi có không gian phù hợp và cộng đồng hỗ trợ, ai cũng có thể viết nên câu chuyện của riêng mình.",
        },
      },

      quote: "Viết là cách chúng ta để lại dấu chân trên cát thời gian.",
      quoteAuthor: "Một thành viên AGUA Writing Retreat",

      footer: {
        tags: ["Viết lách", "Sáng tạo", "Đà Lạt", "Cộng đồng", "AGUA"],
        about:
          "Bài viết chia sẻ về hành trình và câu chuyện của AGUA Writing Retreat, nơi kết nối những người yêu chữ.",
        share: "Chia sẻ bài viết",
      },
    },

    en: {
      title: "AGUA Writing Retreat: The Writing Journey of Word Lovers",
      subtitle:
        "5 days in Da Lat, where pens rediscover inspiration and words connect kindred spirits",
      meta: "Posted by AGUA Team • Oct 15, 2024 • 8 min read",

      sections: {
        intro: {
          title: "The Beginning of a Creative Space",
          content:
            "On a October morning in 2023, amidst the Da Lat mist, the idea for a writing space dedicated to word lovers was born. AGUA Writing Retreat is not a typical course, but a journey of self-discovery through language.",
        },
        inspiration: {
          title: "Inspiration from Untold Stories",
          content:
            "Each person coming to Writing Retreat brings their own story. Some are halfway through their first novel, some want to preserve family memories, others simply want to rediscover the joy of writing lost to the hectic pace of life.",
        },
        experience: {
          title: "The Special 5-Day Experience",
          content:
            "The heritage villa with pine forest views becomes an ideal space for creativity. Mornings start with writing meditation, afternoons feature technique workshops, evenings bring conversations about literature and life by the fireplace.",
        },
        community: {
          title: "The Community of Writers",
          content:
            "The most special thing about Writing Retreat isn't the knowledge gained, but the connections formed. 20 people from different professions, united by their love for words, become a small family supporting each other on their creative journeys.",
        },
        stories: {
          title: "Memorable Stories",
          content:
            "Ms. Minh Anh, a 35-year-old banker, completed the first 3 chapters of her novel after 5 years of contemplation. Mr. Van Hung, a 42-year-old entrepreneur, began writing his startup journey memoir. Young Linh, a 20-year-old student, rediscovered her passion for writing after a long period of uncertainty.",
        },
        impact: {
          title: "Long-Term Impact",
          content:
            "After the retreat ends, many maintain their daily writing habits. A small group continues meeting monthly to share their work. Some begin collaborating on joint book projects. Writing Retreat isn't just 5 days—it's the beginning of longer journeys.",
        },
        reflection: {
          title: "Reflections on the Journey",
          content:
            "Writing isn't just a skill—it's how we connect with ourselves and the world around us. AGUA Writing Retreat has shown that with the right space and supportive community, everyone can write their own story.",
        },
      },

      quote: "Writing is how we leave footprints on the sands of time.",
      quoteAuthor: "An AGUA Writing Retreat member",

      footer: {
        tags: ["Writing", "Creativity", "Da Lat", "Community", "AGUA"],
        about:
          "An article sharing the journey and stories of AGUA Writing Retreat, connecting word lovers.",
        share: "Share this article",
      },
    },
  };

  const t = content[language] || content.vie;

  return (
    <div className="min-h-screen bg-white max-w-4xl mx-auto px-4 md:px-8 py-12">
      {/* Article Header */}
      <header className="mb-12">
        <div className="mb-6">
          <span className="text-blue-600 font-bold text-sm uppercase tracking-wide">
            {language === "vie" ? "TRẢI NGHIỆM" : "EXPERIENCE"}
          </span>
        </div>

        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
          {t.title}
        </h1>

        <p className="text-xl text-gray-600 mb-6 leading-relaxed">
          {t.subtitle}
        </p>

        <div className="text-gray-500 text-sm mb-8">{t.meta}</div>

        <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-cyan-600 mb-8"></div>
      </header>

      {/* Featured Image - Unsplash image */}
      <div className="mb-12">
        <img
          src="https://images.unsplash.com/photo-1495446815901-a7297e633e8d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          alt="Writing retreat"
          className="w-full h-64 md:h-96 object-cover rounded-lg mb-2"
        />
        <p className="text-gray-500 text-sm text-center italic">
          {language === "vie"
            ? "Không gian viết lách yên tĩnh tại Đà Lạt (Nguồn: Unsplash)"
            : "Tranquil writing space in Da Lat (Source: Unsplash)"}
        </p>
      </div>

      {/* Article Content */}
      <article className="prose prose-lg max-w-none mb-12">
        {/* Introduction */}
        <section className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            {t.sections.intro.title}
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            {t.sections.intro.content}
          </p>
        </section>

        {/* Inspiration */}
        <section className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            {t.sections.inspiration.title}
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            {t.sections.inspiration.content}
          </p>

          {/* Quote */}
          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8">
            <p className="text-xl italic text-gray-800 mb-2">"{t.quote}"</p>
            <p className="text-gray-600">— {t.quoteAuthor}</p>
          </div>
        </section>

        {/* Experience */}
        <section className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            {t.sections.experience.title}
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            {t.sections.experience.content}
          </p>

          <div className="grid md:grid-cols-2 gap-6 my-8">
            <div>
              <img
                src="https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Writing workshop"
                className="w-full h-48 object-cover rounded-lg mb-2"
              />
              <p className="text-gray-500 text-sm text-center italic">
                {language === "vie"
                  ? "Buổi workshop viết sáng tạo"
                  : "Creative writing workshop"}
              </p>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1511735111819-9a3f7709049c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Group discussion"
                className="w-full h-48 object-cover rounded-lg mb-2"
              />
              <p className="text-gray-500 text-sm text-center italic">
                {language === "vie"
                  ? "Thảo luận nhóm về văn chương"
                  : "Group discussion about literature "}
              </p>
            </div>
          </div>
        </section>

        {/* Community */}
        <section className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            {t.sections.community.title}
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            {t.sections.community.content}
          </p>

          {/* Community Image */}
          <div className="my-8">
            <img
              src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
              alt="Writing community"
              className="w-full h-64 object-cover rounded-lg mb-2"
            />
            <p className="text-gray-500 text-sm text-center italic">
              {language === "vie"
                ? "Cộng đồng những người viết hỗ trợ lẫn nhau"
                : "Community of writers supporting each other"}
            </p>
          </div>
        </section>

        {/* Stories */}
        <section className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            {t.sections.stories.title}
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            {t.sections.stories.content}
          </p>

          {/* Story Images */}
          <div className="grid md:grid-cols-3 gap-4 my-8">
            <div>
              <img
                src="https://images.unsplash.com/photo-1516979187457-637abb4f9353?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Person writing"
                className="w-full h-40 object-cover rounded-lg mb-2"
              />
              <p className="text-gray-500 text-xs text-center italic">
                {language === "vie"
                  ? "Đang viết tiểu thuyết"
                  : "Writing a novel"}
              </p>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Reading book"
                className="w-full h-40 object-cover rounded-lg mb-2"
              />
              <p className="text-gray-500 text-xs text-center italic">
                {language === "vie"
                  ? "Đọc và phản biện"
                  : "Reading and critique"}
              </p>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Book collection"
                className="w-full h-40 object-cover rounded-lg mb-2"
              />
              <p className="text-gray-500 text-xs text-center italic">
                {language === "vie" ? "Tác phẩm hoàn thành" : "Completed works"}
              </p>
            </div>
          </div>
        </section>

        {/* Impact */}
        <section className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            {t.sections.impact.title}
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            {t.sections.impact.content}
          </p>

          {/* Impact Image */}
          <div className="my-8">
            <img
              src="https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
              alt="Long term writing habit"
              className="w-full h-64 object-cover rounded-lg mb-2"
            />
            <p className="text-gray-500 text-sm text-center italic">
              {language === "vie"
                ? "Xây dựng thói quen viết lâu dài "
                : "Building long-term writing habits "}
            </p>
          </div>
        </section>

        {/* Reflection */}
        <section className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            {t.sections.reflection.title}
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            {t.sections.reflection.content}
          </p>

          {/* Final Image */}
          <div className="my-8">
            <img
              src="https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
              alt="Writing inspiration"
              className="w-full h-64 object-cover rounded-lg mb-2"
            />
            <p className="text-gray-500 text-sm text-center italic">
              {language === "vie"
                ? "Nguồn cảm hứng vô tận từ thiên nhiên"
                : "Endless inspiration from nature"}
            </p>
          </div>
        </section>
      </article>

      {/* Article Footer */}
      <footer className="border-t border-gray-200 pt-8">
        {/* Tags */}
        <div className="mb-8">
          <h3 className="text-gray-700 font-bold mb-3">
            {language === "vie" ? "Thẻ bài viết" : "Article Tags"}
          </h3>
          <div className="flex flex-wrap gap-2">
            {t.footer.tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* About */}
        <div className="mb-8">
          <h3 className="text-gray-700 font-bold mb-3">
            {language === "vie" ? "Về bài viết" : "About This Article"}
          </h3>
          <p className="text-gray-600">{t.footer.about}</p>
        </div>
      </footer>
    </div>
  );
};

export default AguaWritingRetreat;
