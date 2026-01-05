import React from "react";
import { useLanguage } from "../../contexts/LanguageContext";
import { Calendar, CheckCircle, BookOpen, Globe, Home, DollarSign, Heart, Users } from "lucide-react";

const StudyAbroadPreparation = () => {
  const { language } = useLanguage();

  const content = {
    vie: {
      title: "Cẩm Nang Du Học: Những Điều Cần Biết Và Chuẩn Bị Trước Khi Lên Đường",
      subtitle: "Hành trang đầy đủ cho hành trình học tập tại nước ngoài - từ giấy tờ, tài chính đến tâm lý và kỹ năng sống",
      meta: "Đăng bởi Du Học Team • 20/01/2024 • 10 phút đọc",
      
      sections: {
        checklist: {
          title: "Danh Sách Kiểm Tra Trước Khi Đi",
          items: [
            "Hộ chiếu còn hạn ít nhất 6 tháng",
            "Visa du học đã được cấp",
            "Thư mời nhập học chính thức",
            "Bảo hiểm y tế quốc tế",
            "Bằng cấp, học bạ đã dịch thuật công chứng",
            "Ảnh thẻ các loại (3x4, 4x6)"
          ]
        },
        financial: {
          title: "Chuẩn Bị Tài Chính",
          items: [
            "Mở tài khoản ngân hàng quốc tế",
            "Thẻ tín dụng/ghi nợ quốc tế",
            "Chuẩn bị tiền mặt (ngoại tệ)",
            "Nghiên cứu chi phí sinh hoạt tại nước sở tại",
            "Tìm hiểu về làm thêm cho du học sinh",
            "Các học bổng hỗ trợ"
          ]
        },
        accommodation: {
          title: "Chỗ Ở Và Sinh Hoạt",
          items: [
            "Đặt ký túc xá trước 3 tháng",
            "Nghiên cứu khu vực sinh sống",
            "Chuẩn bị đồ dùng cá nhân thiết yếu",
            "Tìm hiểu về phương tiện công cộng",
            "Mua sim điện thoại địa phương",
            "Thiết lập internet/wifi"
          ]
        },
        health: {
          title: "Sức Khỏe Và An Toàn",
          items: [
            "Khám sức khỏe tổng quát",
            "Tiêm chủng đầy đủ",
            "Mang theo thuốc thông dụng",
            "Tìm hiểu hệ thống y tế địa phương",
            "Lưu số khẩn cấp",
            "Đăng ký với Đại sứ quán Việt Nam"
          ]
        }
      },
      
      timeline: {
        title: "Lộ Trình Chuẩn Bị 12 Tháng",
        steps: [
          { month: "12 tháng trước", task: "Nghiên cứu trường, ngành học, nước đến" },
          { month: "10 tháng trước", task: "Chuẩn bị hồ sơ, thi chứng chỉ ngoại ngữ" },
          { month: "8 tháng trước", task: "Nộp hồ sơ xin học, xin học bổng" },
          { month: "6 tháng trước", task: "Nhận thư mời, chuẩn bị hồ sơ visa" },
          { month: "4 tháng trước", task: "Nộp visa, đặt vé máy bay, chỗ ở" },
          { month: "2 tháng trước", task: "Hoàn tất thủ tục tài chính, mua bảo hiểm" },
          { month: "1 tháng trước", task: "Khám sức khỏe, sắp xếp đồ đạc" },
          { month: "1 tuần trước", task: "Đóng gói, kiểm tra lần cuối" }
        ]
      },
      
      tips: {
        title: "Mẹo Hữu Ích Cho Tân Du Học Sinh",
        items: [
          "Scan tất cả giấy tờ quan trọng lưu cloud",
          "Mang theo một ít mì gói, gia vị Việt Nam",
          "Học nấu một vài món ăn cơ bản",
          "Tải ứng dụng ngân hàng, maps, giao thông",
          "Chuẩn bị ổ cắm điện chuyển đổi",
          "Đọc review về thành phố từ du học sinh cũ"
        ]
      },
      
      quote: "Du học không chỉ là học kiến thức, mà còn là học cách trưởng thành, tự lập và thích nghi.",
      quoteAuthor: "Cựu du học sinh tại Mỹ",
      
      footer: {
        tags: ["Du Học", "Chuẩn Bị", "Hướng Dẫn", "Tài Chính", "Visa", "Sinh Hoạt"],
        about: "Bài viết tổng hợp những điều cần biết và chuẩn bị trước khi đi du học, giúp bạn tự tin bắt đầu hành trình mới.",
        share: "Chia sẻ bài viết"
      }
    },
    
    en: {
      title: "Study Abroad Handbook: Essential Things to Know and Prepare Before Departure",
      subtitle: "Complete preparation for studying overseas - from documents and finances to psychology and life skills",
      meta: "Posted by Study Abroad Team • Jan 20, 2024 • 10 min read",
      
      sections: {
        checklist: {
          title: "Pre-Departure Checklist",
          items: [
            "Passport valid for at least 6 months",
            "Student visa granted",
            "Official admission letter",
            "International health insurance",
            "Certified translations of diplomas and transcripts",
            "Various ID photos (3x4, 4x6)"
          ]
        },
        financial: {
          title: "Financial Preparation",
          items: [
            "Open international bank account",
            "International credit/debit card",
            "Prepare cash (foreign currency)",
            "Research cost of living in host country",
            "Learn about part-time work for students",
            "Available scholarships and support"
          ]
        },
        accommodation: {
          title: "Accommodation and Living",
          items: [
            "Book dormitory 3 months in advance",
            "Research living areas",
            "Pack essential personal items",
            "Learn about public transportation",
            "Get local SIM card",
            "Set up internet/wifi"
          ]
        },
        health: {
          title: "Health and Safety",
          items: [
            "Complete medical check-up",
            "Full vaccination",
            "Bring common medicines",
            "Research local healthcare system",
            "Save emergency contacts",
            "Register with Vietnamese Embassy"
          ]
        }
      },
      
      timeline: {
        title: "12-Month Preparation Timeline",
        steps: [
          { month: "12 months before", task: "Research schools, majors, destination countries" },
          { month: "10 months before", task: "Prepare documents, take language tests" },
          { month: "8 months before", task: "Submit applications, apply for scholarships" },
          { month: "6 months before", task: "Receive offer letter, prepare visa documents" },
          { month: "4 months before", task: "Apply for visa, book flights and accommodation" },
          { month: "2 months before", task: "Complete financial procedures, buy insurance" },
          { month: "1 month before", task: "Medical check-up, organize belongings" },
          { month: "1 week before", task: "Final packing and checks" }
        ]
      },
      
      tips: {
        title: "Useful Tips for New International Students",
        items: [
          "Scan all important documents to cloud storage",
          "Bring some instant noodles, Vietnamese spices",
          "Learn to cook a few basic dishes",
          "Download banking, maps, transportation apps",
          "Prepare power plug adapters",
          "Read city reviews from former students"
        ]
      },
      
      quote: "Studying abroad isn't just about gaining knowledge, but learning to mature, become independent, and adapt.",
      quoteAuthor: "Former student in the USA",
      
      footer: {
        tags: ["Study Abroad", "Preparation", "Guide", "Finance", "Visa", "Living"],
        about: "Comprehensive guide on essential things to know and prepare before studying abroad, helping you confidently start your new journey.",
        share: "Share this article"
      }
    }
  };

  const t = content[language] || content.vie;

  const icons = {
    checklist: CheckCircle,
    financial: DollarSign,
    accommodation: Home,
    academic: BookOpen,
    cultural: Globe,
    health: Heart,
    timeline: Calendar,
    tips: Users
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white max-w-6xl mx-auto px-4 md:px-8 py-12">
      
      {/* Article Header */}
      <header className="mb-12 text-center">
        <div className="mb-6">
          <span className="bg-blue-100 text-blue-700 font-bold text-sm px-4 py-2 rounded-full uppercase tracking-wide">
            {language === "vie" ? "HƯỚNG DẪN CHI TIẾT" : "DETAILED GUIDE"}
          </span>
        </div>
        
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          {t.title}
        </h1>
        
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
          {t.subtitle}
        </p>
        
        <div className="text-gray-500 text-sm mb-8">
          {t.meta}
        </div>
        
        <div className="flex justify-center space-x-4 mb-8">
          <div className="flex items-center text-blue-600">
            <Calendar className="w-5 h-5 mr-2" />
            <span>{language === "vie" ? "Kế hoạch" : "Planning"}</span>
          </div>
          <div className="flex items-center text-green-600">
            <CheckCircle className="w-5 h-5 mr-2" />
            <span>{language === "vie" ? "Checklist" : "Checklist"}</span>
          </div>
          <div className="flex items-center text-purple-600">
            <BookOpen className="w-5 h-5 mr-2" />
            <span>{language === "vie" ? "Học tập" : "Academic"}</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="grid lg:grid-cols-3 gap-8 mb-12">
        
        {/* Left Column - Preparation Sections */}
        <div className="lg:col-span-2">
          
          {/* Quote Section */}
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-8 rounded-2xl mb-8">
            <p className="text-2xl italic mb-4">
              "{t.quote}"
            </p>
            <p className="text-right">
              — {t.quoteAuthor}
            </p>
          </div>

          {/* Preparation Sections */}
          {Object.entries(t.sections).map(([key, section]) => {
            const Icon = icons[key];
            return (
              <section key={key} className="mb-10 bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-6">
                  <div className="bg-blue-100 p-3 rounded-lg mr-4">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    {section.title}
                  </h2>
                </div>
                
                <ul className="space-y-3">
                  {section.items.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <div className="bg-green-100 p-1 rounded-full mr-3 mt-1">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                      </div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                
                {/* Section Image */}
                <div className="mt-6">
                  <img 
                    src={getSectionImage(key)}
                    alt={section.title}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
              </section>
            );
          })}
        </div>

        {/* Right Column - Timeline & Tips */}
        <div className="space-y-8">
          
          {/* Timeline Card */}
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="flex items-center mb-6">
              <div className="bg-purple-100 p-3 rounded-lg mr-4">
                <Calendar className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">
                {t.timeline.title}
              </h3>
            </div>
            
            <div className="space-y-4">
              {t.timeline.steps.map((step, index) => (
                <div key={index} className="flex items-start border-l-2 border-blue-500 pl-4 pb-4 last:pb-0">
                  <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold -ml-3 mt-0.5">
                    {index + 1}
                  </div>
                  <div className="ml-4">
                    <p className="font-bold text-gray-900">{step.month}</p>
                    <p className="text-gray-600 text-sm">{step.task}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tips Card */}
          <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-6 shadow-lg">
            <div className="flex items-center mb-6">
              <div className="bg-cyan-100 p-3 rounded-lg mr-4">
                <Users className="w-6 h-6 text-cyan-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">
                {t.tips.title}
              </h3>
            </div>
            
            <ul className="space-y-3">
              {t.tips.items.map((tip, index) => (
                <li key={index} className="flex items-start">
                  <span className="bg-white text-cyan-600 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold mr-3 mt-1">
                    {index + 1}
                  </span>
                  <span className="text-gray-700">{tip}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Important Documents Image */}
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Important documents"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <p className="text-center text-gray-600 text-sm font-bold">
              {language === "vie" 
                ? "Giấy tờ quan trọng cần chuẩn bị kỹ" 
                : "Important documents to prepare carefully"}
            </p>
          </div>
        </div>
      </div>

      {/* Packing Checklist */}
      <div className="bg-white rounded-2xl p-8 shadow-lg mb-12">
        <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          {language === "vie" ? "Danh Sách Đồ Cần Mang" : "Essential Packing List"}
        </h3>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="space-y-4">
            <h4 className="font-bold text-blue-700 flex items-center">
              <CheckCircle className="w-5 h-5 mr-2" />
              {language === "vie" ? "Giấy tờ" : "Documents"}
            </h4>
            <ul className="space-y-2">
              {[
                language === "vie" ? "Hộ chiếu + Visa" : "Passport + Visa",
                language === "vie" ? "Thư nhập học" : "Admission letter",
                language === "vie" ? "Bảo hiểm y tế" : "Health insurance",
                language === "vie" ? "Bằng cấp công chứng" : "Certified diplomas"
              ].map((item, idx) => (
                <li key={idx} className="text-gray-700">• {item}</li>
              ))}
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-bold text-green-700 flex items-center">
              <CheckCircle className="w-5 h-5 mr-2" />
              {language === "vie" ? "Điện tử" : "Electronics"}
            </h4>
            <ul className="space-y-2">
              {[
                language === "vie" ? "Laptop + Sạc" : "Laptop + Charger",
                language === "vie" ? "Adapter ổ cắm" : "Power plug adapter",
                language === "vie" ? "Điện thoại + Sim" : "Phone + SIM card",
                language === "vie" ? "Ổ cứng di động" : "Portable hard drive"
              ].map((item, idx) => (
                <li key={idx} className="text-gray-700">• {item}</li>
              ))}
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-bold text-purple-700 flex items-center">
              <CheckCircle className="w-5 h-5 mr-2" />
              {language === "vie" ? "Cá nhân" : "Personal"}
            </h4>
            <ul className="space-y-2">
              {[
                language === "vie" ? "Thuốc cá nhân" : "Personal medication",
                language === "vie" ? "Đồ dùng vệ sinh" : "Toiletries",
                language === "vie" ? "Quần áo theo mùa" : "Seasonal clothing",
                language === "vie" ? "Tiền mặt + Thẻ" : "Cash + Cards"
              ].map((item, idx) => (
                <li key={idx} className="text-gray-700">• {item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

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
                className="px-4 py-2 bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 rounded-full text-sm font-medium hover:from-blue-200 hover:to-cyan-200 transition"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* About */}
        <div className="mb-8 bg-blue-50 rounded-2xl p-6">
          <h3 className="text-gray-700 font-bold mb-3">
            {language === "vie" ? "Về bài viết" : "About This Article"}
          </h3>
          <p className="text-gray-600">
            {t.footer.about}
          </p>
        </div>

      </footer>
    </div>
  );
};

// Helper function to get section images
const getSectionImage = (key) => {
  const images = {
    checklist: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    financial: "https://images.unsplash.com/photo-1554224154-22dec7ec8818?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    accommodation: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    academic: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    cultural: "https://images.unsplash.com/photo-1519677100203-5f5a1c56b7b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    health: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  };
  return images[key] || "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
};

export default StudyAbroadPreparation;