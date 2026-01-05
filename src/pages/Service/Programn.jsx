import { useState, useEffect } from "react";
import { useLanguage } from "../../contexts/LanguageContext";
import { useNavigate } from "react-router-dom";

const Program = () => {
  const [scrolled, setScrolled] = useState(false);
  const { language } = useLanguage();
  const navigate = useNavigate(); 

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const content = {
    vie: {
      footer: {
        companyName: "Agua International Education",
        quickLinks: "Liên kết nhanh",
        home: "Trang Chủ",
        programs: "Gói Học Tập",
        people: "Con Người",
        opportunities: "Cơ Hội",
        contact: "Liên hệ",
        address: "123 Đường ABC, Quận XYZ<br />TP. Hồ Chí Minh, Việt Nam",
        phone: "+84 28 1234 5678",
        email: "info@agua.edu.vn",
        copyright: "© {year} Agua International Education. Bảo lưu mọi quyền.",
        privacy: "Chính sách bảo mật",
        terms: "Điều khoản sử dụng",
        sitemap: "Sitemap",
      },
    },
    en: {
      footer: {
        companyName: "Agua International Education",
        quickLinks: "Quick Links",
        home: "Home",
        programs: "Learning Packages",
        people: "Our People",
        opportunities: "Opportunities",
        contact: "Contact",
        address: "123 ABC Street, XYZ District<br />Ho Chi Minh City, Vietnam",
        phone: "+84 28 1234 5678",
        email: "info@agua.edu.vn",
        copyright:
          "© {year} Agua International Education. All rights reserved.",
        privacy: "Privacy Policy",
        terms: "Terms of Use",
        sitemap: "Sitemap",
      },
    },
  };

  const t = content[language] || content.vie;

    const tContent = {
    heroTitle:
        language === "vie" ? "Học từ trải nghiệm thực tế" : "Learning Through Real Experiences",
    heroSubtitle:
        language === "vie"
        ? "AGUA mang đến những chương trình du lịch, tình nguyện và giao lưu văn hóa giúp học viên học hỏi từ thực tế. Từ các cộng đồng địa phương đến các dự án quốc tế, mỗi trải nghiệm đều là một bài học quý giá."
        : "AGUA offers travel, volunteering, and cultural exchange programs that help students learn through real experiences. From local communities to international projects, each experience is a valuable lesson.",
    searchPlaceholder:
        language === "vie"
        ? "Tìm kiếm trải nghiệm bạn quan tâm..."
        : "Search for experiences you're interested in...",
    searchButton: language === "vie" ? "Bắt đầu hành trình" : "Start Journey",
    };

  return (
    <>
      <div className="manrope-regular">
        <div className="py-20"></div>

        {/* Hero Section với background pattern */}
        <section className="relative py-20 overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute inset-0 z-0 translate-y-8">
            <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-blue-100/40 to-cyan-100/30 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-blue-100/30 to-cyan-100/20 rounded-full translate-x-1/3 translate-y-1/3"></div>
            <div className="absolute top-1/2 right-1/4 w-48 h-48 bg-gradient-to-r from-blue-100/20 to-transparent rounded-full"></div>
            
            {/* Wave pattern */}
            <svg className="absolute bottom-5 left-0 w-full h-24 translate-y-8" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
                opacity=".25" fill="#0974B6" />
              <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" 
                opacity=".5" fill="#0974B6" />
              <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" 
                fill="#0974B6" />
                
            </svg>
          </div>

          <div className="container mx-auto px-5 relative z-10">
            {/* Animated floating icons */}
            <div className="absolute top-10 left-10 animate-float-slow">
              <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg">
                <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                </svg>
              </div>
            </div>

            <div className="absolute top-20 right-20 animate-float">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center shadow-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
            </div>

            <div className="max-w-4xl mx-auto text-center">
              {/* Decorative badge */}
              <div className="inline-flex items-center bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-2 rounded-full mb-8 animate-pulse-slow">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span className="manrope-bold">
                  {language === "vie" ? "Chương trình Agua" : "Agua Program"}
                </span>
              </div>

              <h1 className="manrope-extrabold text-5xl md:text-6xl lg:text-7xl text-[#0974B6] mb-6 leading-tight relative">
                {tContent.heroTitle}
                {/* Underline decoration */}
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-48 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent rounded-full"></div>
              </h1>
              
              <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto relative">
                {tContent.heroSubtitle}
                {/* Quote marks */}
                <span className="absolute -top-6 -left-6 text-6xl text-blue-200/50">"</span>
                <span className="absolute -bottom-6 -right-6 text-6xl text-blue-200/50">"</span>
              </p>
            </div>
          </div>

          {/* Search Bar với enhanced design */}
          <div className="mb-8 relative z-10">
            <div className="relative max-w-2xl mx-auto mb-6">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
              <div className="relative group">
                <input
                  type="text"
                  placeholder={tContent.searchPlaceholder}
                  className="w-full px-8 py-4 pl-14 pr-32 rounded-full border-2 border-blue-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-200/50 focus:outline-none transition-all duration-300 manrope-regular text-lg shadow-xl hover:shadow-2xl group-hover:border-blue-400 bg-white/95 backdrop-blur-sm"
                />
                <svg
                  className="absolute left-5 top-1/2 transform -translate-y-1/2 w-6 h-6 text-blue-500 group-hover:text-blue-600 transition-colors duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-3 rounded-full manrope-bold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2 group/btn">
                  <svg
                    className="w-5 h-5 group-hover/btn:rotate-12 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                  <span className="hidden sm:inline">
                    {tContent.searchButton}
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Grid Layout với enhanced cards */}
          <div className="container mx-auto px-5 relative z-10">
            {/* Floating particles */}
            <div className="absolute top-1/4 left-5 w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
            <div className="absolute top-1/3 right-10 w-2 h-2 bg-cyan-400 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
            <div className="absolute bottom-1/4 left-1/4 w-4 h-4 bg-blue-300 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>

            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              {/* Cột trái */}
              <div className="space-y-8 lg:space-y-12">
                {/* Ô đầu tiên - Enhanced design */}
                <div className="bg-gradient-to-br from-white to-blue-50 rounded-3xl p-8 lg:p-10 shadow-2xl border border-blue-100 relative overflow-hidden group">
                  {/* Corner decoration */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-bl-3xl"></div>
                  
                  <div className="inline-flex items-center mb-8 relative">
                    <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mr-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <span className="text-[#0974B6] manrope-bold text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600">
                      {language === "vie" ? "Hành Trình Khám Phá" : "The Journey Of Finding Your True Self"}
                    </span>
                  </div>
                  
                <p className="text-gray-700 manrope-regular text-xl leading-relaxed mb-8 relative z-10">
                {language === "vie" 
                    ? "Trải nghiệm chân thực từ các chương trình du lịch trải nghiệm, hoạt động tình nguyện quốc tế, và các dự án cộng đồng nơi học viên không chỉ học mà còn sống, cảm nhận và trưởng thành. Từ những chuyến đi xuyên biên giới đến các hành trình khám phá văn hóa bản địa, mỗi trải nghiệm là một bài học sống động về sự thích nghi, đồng cảm và phát triển bản thân."
                    : "Real-life experiences from travel immersion programs, international volunteering activities, and community projects where students don't just learn—they live, feel, and grow. From cross-border journeys to indigenous cultural explorations, each experience becomes a living lesson in adaptation, empathy, and personal development."}
                </p>

                  {/* Wave pattern at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 h-8">
                    <svg className="w-full h-full" viewBox="0 0 100 20" preserveAspectRatio="none">
                      <path d="M0,10 C20,5 40,15 60,10 C80,5 100,15 100,10 L100,20 L0,20 Z" fill="#0974B6" opacity="0.1"/>
                    </svg>
                  </div>
                </div>
                
                {/* Bài viết 1 - Enhanced */}
                <div className="group bg-white rounded-3xl shadow-2xl overflow-hidden h-[750px] hover:shadow-3xl transition-all duration-500 border border-gray-100 relative">
                  {/* Category badge */}
                  <div className="absolute top-6 left-6 z-20">
                    <div className="px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full text-sm manrope-bold shadow-lg">
                      {language === "vie" ? "THÀNH CÔNG" : "SUCCESS"}
                    </div>
                  </div>
                  
                  <div className="h-96 overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-10"></div>
                    <img 
                      src="/images/about1.png" 
                      alt={language === "vie" ? "Thành công học sinh" : "Student success"}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  
                  <div className="p-8 lg:p-10 flex flex-col h-[354px]">
                    <div className="flex items-center text-lg text-gray-500 mb-6">
                      <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span>{language === "vie" ? "15/03/2024" : "Mar 15, 2024"}</span>
                      <span className="mx-3">•</span>
                      <span>{language === "vie" ? "12 phút đọc" : "12 min read"}</span>
                    </div>
                    
                    <h3 className="text-3xl manrope-bold text-gray-900 mb-6 leading-tight group-hover:text-blue-600 transition-colors">
                      {language === "vie" ? "Tại sao lựa chọn Six Senses?" : "Why should you choose Six Senses?"}
                    </h3>
                    
                    <p className="text-gray-600 manrope-regular text-lg leading-relaxed mb-8 line-clamp-4">
                      {language === "vie" 
                        ? "Khám phá những chiến lược học tập và thích nghi văn hóa giúp học sinh quốc tế tỏa sáng trong môi trường đa văn hóa. Từ việc quản lý thời gian hiệu quả đến xây dựng mạng lưới quan hệ, bài viết cung cấp những insights quý giá cho hành trình du học. Hiểu biết sâu sắc về các hệ thống giáo dục khác nhau, phương pháp học tập chủ động, và kỹ năng giao tiếp đa văn hóa là chìa khóa thành công."
                        : "Discover the study strategies and cultural adaptation techniques that help international students excel in multicultural environments. From effective time management to building professional networks, this article provides valuable insights for study abroad journeys. Deep understanding of different education systems, active learning methods, and cross-cultural communication skills are key to success."}
                    </p>
                    
                    <div className="mt-auto flex items-center justify-between pt-6 border-t border-gray-100">
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mr-4 shadow-md group-hover:scale-110 transition-transform">
                          <span className="text-white manrope-bold text-lg">A</span>
                        </div>
                        <div>
                          <div className="text-gray-700 manrope-medium">
                            {language === "vie" ? "Tác giả AGUA" : "AGUA Author"}
                          </div>
                          <div className="text-sm text-gray-500">
                            {language === "vie" ? "Chuyên gia giáo dục" : "Education Expert"}
                          </div>
                        </div>
                      </div>
                    <button 
                        className="text-blue-600 manrope-bold text-lg hover:text-blue-800 flex items-center gap-2 group/btn"
                        onClick={() => navigate('sixsenses')}
                    >
                        {language === "vie" ? "Đọc tiếp" : "Read More"}
                        <svg className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </button>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Cột phải */}
              <div className="space-y-8 lg:space-y-12">
                {/* Bài viết Featured - Enhanced */}
                <div className="group bg-white rounded-3xl shadow-3xl overflow-hidden h-[750px] hover:shadow-4xl transition-all duration-500 relative border-2 border-transparent hover:border-blue-500/20">
                  {/* Featured badge with glow */}
                  <div className="absolute top-6 left-6 z-20">
                    <div className="px-5 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full text-base manrope-bold shadow-lg shadow-blue-500/50">
                      {language === "vie" ? "BÀI NỔI BẬT" : "FEATURED"}
                    </div>
                  </div>
                  
                  {/* View counter */}
                  <div className="absolute top-6 right-6 z-20 bg-white/90 backdrop-blur-sm text-gray-800 px-4 py-2 rounded-full text-sm manrope-medium shadow-md">
                    <span className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      {language === "vie" ? "Đã xem 2.5K" : "2.5K views"}
                    </span>
                  </div>
                  
                  <div className="h-96 overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10"></div>
                    <img 
                      src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
                      alt={language === "vie" ? "Phát triển lãnh đạo" : "Leadership development"}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  
                  <div className="p-8 lg:p-10 flex flex-col h-[354px]">
                    <h3 className="text-3xl manrope-bold text-gray-900 mb-6 leading-tight group-hover:text-blue-600 transition-colors">
                      {language === "vie" ? "Agua Writing Retreat" : "Agua Writing Retreat"}
                    </h3>
                    
                    <p className="text-gray-600 manrope-regular text-lg leading-relaxed mb-8">
                      {language === "vie" 
                        ? "Khám phá những mô hình lãnh đạo hiện đại và kỹ năng cần thiết để dẫn dắt trong thế giới đầy biến động. Bài viết phân tích các case study từ các nhà lãnh đạo trẻ thành công trên toàn cầu, cùng với các bài học thực tiễn có thể áp dụng ngay."
                        : "Explore modern leadership models and essential skills for guiding others in a volatile world. This article analyzes case studies from successful young leaders worldwide, along with practical lessons that can be applied immediately."}
                    </p>
                    
                    
                    <div className="mt-auto flex items-center justify-between pt-6 border-t border-gray-100">
                      <div className="flex items-center">
                        <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mr-4 shadow-lg">
                          <span className="text-white manrope-bold text-xl">M</span>
                        </div>
                        <div>
                          <div className="text-base manrope-bold text-gray-900">
                            {language === "vie" ? "Mentor Chuyên gia" : "Expert Mentor"}
                          </div>
                          <div className="text-sm text-gray-500 flex items-center">
                            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            {language === "vie" ? "Đọc 15 phút" : "15 min read"}
                          </div>
                        </div>
                      </div>
                      <button
                                              onClick={() => navigate('writing')}
                      className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-3 rounded-full manrope-bold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-3 group/btn">
                        {language === "vie" ? "Đọc tiếp" : "Read More"}
                        <svg className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                
                {/* Bài viết 3 - Enhanced */}
                <div className="group bg-white rounded-3xl shadow-2xl overflow-hidden h-[750px] hover:shadow-3xl transition-all duration-500 border border-gray-100 relative">
                  {/* Study abroad badge */}
                  <div className="absolute top-6 left-6 z-20">
                    <div className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full text-sm manrope-bold shadow-lg">
                      {language === "vie" ? "DU HỌC" : "ABROAD"}
                    </div>
                  </div>
                  
                  <div className="h-96 overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-10"></div>
                    <img 
                      src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
                      alt={language === "vie" ? "Du học" : "Study abroad"}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  
                  <div className="p-8 lg:p-10 flex flex-col h-[354px]">
                    <div className="flex items-center text-lg text-gray-500 mb-6">
                      <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span>{language === "vie" ? "05/03/2024" : "Mar 5, 2024"}</span>
                      <span className="mx-3">•</span>
                      <span>{language === "vie" ? "10 phút đọc" : "10 min read"}</span>
                    </div>
                    
                    <h3 className="text-3xl manrope-bold text-gray-900 mb-6 leading-tight group-hover:text-purple-600 transition-colors">
                      {language === "vie" ? "Hành trang du học: Những điều cần biết" : "Study Abroad Essentials: What should you know?"}
                    </h3>
                    
                    <p className="text-gray-600 manrope-regular text-lg leading-relaxed mb-8 line-clamp-4">
                      {language === "vie" 
                        ? "Cẩm nang toàn diện cho sinh viên chuẩn bị hành trình du học, từ thủ tục hồ sơ đến kỹ năng sống tự lập. Bao gồm các bước chuẩn bị visa, tài chính, và hội nhập văn hóa. Hướng dẫn chi tiết về chọn trường, xin học bổng, và chuẩn bị tâm lý cho cuộc sống mới."
                        : "A comprehensive guide for students preparing for study abroad journeys, from documentation procedures to independent living skills. Includes visa preparation steps, financial planning, and cultural integration strategies. Detailed guidance on school selection, scholarship applications, and psychological preparation for new life."}
                    </p>
                    
                    <div className="mt-auto flex items-center justify-between pt-6 border-t border-gray-100">
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mr-4 shadow-md">
                          <span className="text-white manrope-bold text-lg">S</span>
                        </div>
                        <div>
                          <div className="text-gray-700 manrope-medium">
                            {language === "vie" ? "Cựu du học sinh" : "Study Abroad Alumni"}
                          </div>
                          <div className="text-sm text-gray-500">
                            {language === "vie" ? "Đại học Mỹ" : "US University"}
                          </div>
                        </div>
                      </div>
                      <button
                                              onClick={() => navigate('studyaboard')}
                      className="text-purple-600 manrope-bold text-lg hover:text-purple-800 flex items-center gap-2 group/btn">
                        {language === "vie" ? "Đọc tiếp" : "Read More"}
                        <svg className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Newsletter Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-5">
            <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl manrope-bold text-gray-900 mb-4">
                {language === "vie" ? "Kết Nối Từ Làn Sóng Agua" : "Connect with the AGUA Wave"}
            </h2>
            <p className="text-gray-600 text-lg mb-8">
                {language === "vie" 
                ? "Nhận những dòng suy ngẫm và cảm hứng hàng tháng từ cộng đồng giáo dục AGUA, nơi tri thức lan tỏa như làn sóng và chạm đến mỗi hành trình học tập." 
                : "Receive inspiring reflections and educational insights from the Agua learning community, where knowledge flows like waves—touching every learner’s journey."}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
                <input
                type="email"
                placeholder={language === "vie" ? "Email của bạn" : "Your email"}
                className="flex-grow px-6 py-4 border border-gray-300 rounded-full focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none manrope-regular text-lg"
                />
                <button className="bg-blue-600 text-white px-8 py-4 rounded-full manrope-bold hover:bg-blue-700 transition-colors duration-300 whitespace-nowrap">
                {language === "vie" ? "Đăng ký" : "Subscribe"}
                </button>
            </div>
            
            <p className="text-sm text-gray-500 mt-4">
                {language === "vi" 
                ? "Dành riêng cho cộng đồng quan tâm đến hành trình học tập cùng AGUA." 
                : "For those who wish to stay connected with Agua’s educational journey."}
            </p>
            </div>
        </div>
        </section>
      </div>
    </>
  );
};

export default Program;