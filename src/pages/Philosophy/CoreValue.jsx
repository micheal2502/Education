import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLanguage } from "../../contexts/LanguageContext";

gsap.registerPlugin(ScrollTrigger);

const CoreValue = () => {
  const { language } = useLanguage();

  // Professional, passionate content about education
  const content = {
    vie: {
      title: "Giá Trị Cốt Lõi",
      subtitle: "Những nguyên tắc định hình nền tảng giáo dục Agua",
      missionStatement: "Tại Agua International Education, chúng tôi tin rằng giáo dục không chỉ là việc truyền đạt kiến thức mà là quá trình khai phóng tiềm năng, xây dựng nhân cách, và chuẩn bị hành trang cho thế hệ lãnh đạo tương lai. Mỗi giá trị dưới đây đều được thiết kế để phát triển toàn diện con người - từ trí tuệ, tâm hồn đến kỹ năng sống.",
      educationalPhilosophy: "Phương châm giáo dục của chúng tôi dựa trên nghiên cứu sư phạm hiện đại kết hợp với sự thấu hiểu sâu sắc về văn hóa Á Đông, tạo nên môi trường học tập nơi mỗi học viên được công nhận là một cá thể độc đáo với tiềm năng vô hạn.",
      values: {
        "Proactiveness - Chủ Động":
          "Trong thế giới biến động không ngừng, tính chủ động không còn là lợi thế mà là yêu cầu bắt buộc. Chúng tôi đào tạo học viên trở thành những người tiên phong - dám nghĩ, dám làm, và dám chịu trách nhiệm. Bằng cách khuyến khích tư duy phản biện và kỹ năng ra quyết định, học viên Agua học cách nhận diện cơ hội, chủ động tạo lập tương lai thay vì thụ động chờ đợi. Chương trình giảng dạy được thiết kế để phát triển khả năng lãnh đạo tự thân, nơi mỗi cá nhân trở thành kiến trúc sư của chính hành trình học tập và phát triển của mình.",
        "Inquisitiveness - Ham Học Hỏi":
          "Niềm đam mê học tập suốt đời là động lực then chốt trong kỷ nguyên 4.0. Tại Agua, chúng tôi không chỉ dạy kiến thức mà còn nuôi dưỡng trí tò mò trí tuệ - khả năng đặt câu hỏi sâu sắc, tìm tòi khám phá, và duy trì tinh thần học hỏi không ngừng nghỉ. Phương pháp Socratic được áp dụng để phát triển tư duy phản biện, khuyến khích học viên không ngừng chất vấn, phân tích, và xây dựng hiểu biết cá nhân. Mỗi bài học là một hành trình khám phá, mỗi thắc mắc là một cánh cửa mở ra chân trời tri thức mới.",
        "Integrity - Chính Trực":
          "Nhân cách quan trọng hơn thành tích. Chúng tôi xây dựng nền tảng đạo đức vững chắc cho học viên thông qua việc thực hành tính chính trực trong mọi khía cạnh học tập và cuộc sống. Học viên Agua học cách sống trung thực với bản thân, tôn trọng sự thật, và dũng cảm bảo vệ các nguyên tắc đạo đức. Trong môi trường đề cao tính minh bạch và trách nhiệm, học viên phát triển thành những công dân toàn cầu có đạo đức, biết cân bằng giữa lợi ích cá nhân và trách nhiệm xã hội.",
        "Creativity - Sáng Tạo":
          "Sáng tạo không phải là tài năng thiên bẩm mà là kỹ năng có thể rèn luyện. Chúng tôi thiết kế không gian học tập khuyến khích tư duy 'outside the box', nơi sai lầm được xem như cơ hội học tập và ý tưởng táo bạo được đón nhận. Thông qua phương pháp học tập dự án và giải quyết vấn đề thực tế, học viên phát triển khả năng tư duy thiết kế, kết nối đa ngành, và tạo ra giải pháp đột phá. Tại Agua, mỗi học viên đều là nhà đổi mới tiềm năng, được trao quyền để biến ý tưởng thành giá trị thực tiễn.",
        "Respect - Tôn Trọng":
          "Giáo dục toàn diện bắt đầu từ sự tôn trọng - tôn trọng bản thân, tôn trọng người khác, và tôn trọng sự đa dạng. Chúng tôi xây dựng cộng đồng học tập nơi mọi cá nhân được lắng nghe, mọi quan điểm được tôn trọng, và mọi khác biệt được trân quý. Học viên Agua phát triển nhận thức đa văn hóa sâu sắc, hiểu biết về các giá trị truyền thống Á Đông đồng thời mở rộng tầm nhìn toàn cầu. Sự tôn trọng được thể hiện qua ngôn ngữ, hành vi, và thái độ học tập, tạo nền tảng cho hợp tác hiệu quả và phát triển bền vững.",
      },
      educationalImpact: "Các giá trị này không tồn tại riêng lẻ mà tương hỗ lẫn nhau, tạo thành hệ sinh thái giáo dục toàn diện. Khi được tích hợp vào chương trình giảng dạy và văn hóa học đường, chúng trở thành nền tảng vững chắc cho sự phát triển trí tuệ, nhân cách và kỹ năng sống - chuẩn bị cho học viên không chỉ thành công trong học tập mà còn thịnh vượng trong cuộc sống.",
      images: {
        "Proactiveness - Chủ Động": "/images/proactive.jpg",
        "Inquisitiveness - Ham Học Hỏi": "/images/learning.jpg",
        "Integrity - Chính Trực": "/images/integrity.jpg",
        "Creativity - Sáng Tạo": "/images/creativity.jpg",
        "Respect - Tôn Trọng": "/images/respect.jpg",
      },
    },
    en: {
      title: "Core Values",
      subtitle: "Principles that Define Agua's Educational Foundation",
      missionStatement: "At Agua International Education, we believe education transcends knowledge transmission—it is a transformative journey of unleashing potential, building character, and equipping future leaders. Each value below is meticulously designed to cultivate holistic human development—intellectual, emotional, and practical.",
      educationalPhilosophy: "Our educational approach integrates modern pedagogical research with deep cultural understanding of Eastern traditions, creating a learning environment where each student is recognized as a unique individual with boundless potential.",
      values: {
        Proactiveness:
          "In an ever-changing world, proactiveness is no longer an advantage but a necessity. We cultivate students to become pioneers—thoughtful, decisive, and accountable. Through critical thinking and decision-making skills, Agua learners identify opportunities and actively shape their futures. Our curriculum develops self-leadership, empowering each individual to architect their own learning journey and personal growth.",
        Inquisitiveness:
          "Lifelong learning passion is crucial in the 4.0 era. At Agua, we teach knowledge while nurturing intellectual curiosity—the ability to ask profound questions, explore relentlessly, and maintain an insatiable learning spirit. The Socratic method fosters critical thinking, encouraging continuous inquiry, analysis, and personal understanding. Every lesson is an exploration, every question a gateway to new horizons.",
        Integrity:
          "Character matters more than achievement. We build strong ethical foundations through practicing integrity in all learning and life aspects. Agua students learn honesty, truth respect, and moral courage. In our transparent, accountable environment, students evolve into ethical global citizens who balance personal interests with social responsibility.",
        Creativity:
          "Creativity is not innate talent but a trainable skill. We design learning spaces encouraging 'outside the box' thinking, where mistakes become learning opportunities and bold ideas are welcomed. Through project-based learning and real-world problem-solving, students develop design thinking, interdisciplinary connections, and breakthrough solutions. At Agua, every student is a potential innovator empowered to transform ideas into practical value.",
        Respect:
          "Holistic education begins with respect—for self, others, and diversity. We build a learning community where every voice is heard, every perspective valued, and every difference cherished. Agua students develop deep multicultural awareness, understanding Eastern traditional values while embracing global perspectives. Respect manifests through language, behavior, and learning attitudes, forming foundations for effective collaboration and sustainable development.",
      },
      educationalImpact: "These values are interconnected, creating a comprehensive educational ecosystem. When integrated into curriculum and school culture, they form a solid foundation for intellectual, character, and life skills development—preparing students not only for academic success but for lifelong flourishing.",
      images: {
        Proactiveness: "/images/proactive.jpg",
        Inquisitiveness: "/images/learning.jpg",
        Integrity: "/images/integrity.jpg",
        Creativity: "/images/creativity.jpg",
        Respect: "/images/respect.jpg",
      },
    },
  };

  const t = content[language] || content.vie;

  const getValueKeys = () => {
    if (language === "vie") {
      return [
        "Proactiveness - Chủ Động",
        "Inquisitiveness - Ham Học Hỏi",
        "Integrity - Chính Trực",
        "Creativity - Sáng Tạo",
        "Respect - Tôn Trọng",
      ];
    } else {
      return [
        "Proactiveness",
        "Inquisitiveness",
        "Integrity",
        "Creativity",
        "Respect",
      ];
    }
  };

  const containerRef = useRef(null);
  const valueItemsRef = useRef([]);
  const philosophyRef = useRef(null);
  const impactRef = useRef(null);

  const addToRefs = (el) => {
    if (el && !valueItemsRef.current.includes(el)) {
      valueItemsRef.current.push(el);
    }
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Mission statement animation
      gsap.fromTo(
        ".mission-statement",
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: ".mission-statement",
            start: "top 85%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Educational philosophy animation
      gsap.fromTo(
        ".educational-philosophy",
        {
          x: -50,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: ".educational-philosophy",
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Value items animation
      valueItemsRef.current.forEach((item, index) => {
        const icon = item.querySelector(".icon-circle");
        const title = item.querySelector(".value-title");
        const description = item.querySelector(".value-description");
        const image = item.querySelector(".value-image img");

        const itemTl = gsap.timeline({
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
            end: "bottom 15%",
            toggleActions: "play none none reverse",
          },
        });

        itemTl.fromTo(
          icon,
          {
            rotation: -180,
            scale: 0,
            opacity: 0,
          },
          {
            rotation: 0,
            scale: 1,
            opacity: 1,
            duration: 0.8,
            ease: "back.out(1.4)",
          },
          0
        );

        itemTl.fromTo(
          title,
          {
            x: -50,
            opacity: 0,
          },
          {
            x: 0,
            opacity: 1,
            duration: 0.6,
            ease: "power2.out",
          },
          0.2
        );

        itemTl.fromTo(
          description,
          {
            y: 30,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power2.out",
          },
          0.4
        );

        itemTl.fromTo(
          image,
          {
            scale: 0.8,
            opacity: 0,
            filter: "blur(5px)",
          },
          {
            scale: 1,
            opacity: 1,
            filter: "blur(0px)",
            duration: 1,
            ease: "power2.out",
          },
          0.6
        );
      });

      // Educational impact animation
      gsap.fromTo(
        ".educational-impact",
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: ".educational-impact",
            start: "top 85%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [language]);

  return (
    <div
      className="core-values-container py-24 bg-gradient-to-b from-blue-50 via-white to-blue-100/30"
      ref={containerRef}
    >
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1B2340] mb-6">
            {t.title}
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* Mission Statement */}
        <div className="mission-statement mb-16 max-w-6xl mx-auto">
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-blue-100/50">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 mt-2">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                  <span className="text-white text-2xl">✦</span>
                </div>
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-[#1B2340] mb-4">
                  {language === "vie" ? "Tầm Nhìn Giáo Dục" : "Educational Vision"}
                </h3>
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                  {t.missionStatement}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Educational Philosophy */}
        <div className="educational-philosophy mb-20 max-w-6xl mx-auto">
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50/50 rounded-3xl p-8 md:p-10 border border-blue-200/30">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl md:text-3xl font-bold text-[#1B2340]">
                {language === "vie" ? "Triết Lý Giáo Dục" : "Educational Philosophy"}
              </h3>
              <div className="hidden md:block w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              {t.educationalPhilosophy}
            </p>
          </div>
        </div>

        {/* Core Values Grid */}
        <div className="values-grid max-w-6xl mx-auto mb-20">
          {getValueKeys().map((key, index) => (
            <div
              key={key}
              className={`value-item bg-white rounded-3xl shadow-xl overflow-hidden mb-8 transform transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 border border-gray-100`}
              ref={addToRefs}
            >
              <div className="flex flex-col lg:flex-row items-stretch">
                {/* Content Section */}
                <div className="lg:w-2/3 p-8 lg:p-10">
                  <div className="flex items-start space-x-6">
                    <div className="value-icon flex-shrink-0">
                      <div className="icon-circle w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center text-white text-3xl font-bold shadow-xl">
                        {index + 1}
                      </div>
                    </div>
                    <div className="value-content flex-1">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="value-title text-2xl lg:text-3xl font-bold text-[#1B2340] leading-tight">
                          {key}
                        </h3>
                        <div className="hidden lg:block w-12 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"></div>
                      </div>
                      <p className="value-description text-gray-700 leading-relaxed text-lg">
                        {t.values[key]}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Image Section */}
                <div className="value-image lg:w-1/3 relative overflow-hidden min-h-[300px] lg:min-h-full">
                  <div className="absolute inset-0 bg-gradient-to-l from-blue-100/30 to-transparent z-10"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10"></div>
                  <img
                    src={t.images[key]}
                    alt={key}
                    className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-110"
                    onError={(e) => {
                      e.target.src = "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80";
                    }}
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
                    <div className="text-white text-sm font-semibold bg-black/40 backdrop-blur-sm rounded-full px-4 py-2 inline-block">
                      {language === "vie" ? "Giá Trị Cốt Lõi" : "Core Value"}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Educational Impact */}
        <div className="educational-impact max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-[#1B2340] to-[#3d76b8] rounded-3xl p-10 md:p-12 text-white shadow-2xl">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl md:text-3xl font-bold">
                {language === "vie" ? "Tác Động Giáo Dục Toàn Diện" : "Holistic Educational Impact"}
              </h3>
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                <span className="text-2xl">⚡</span>
              </div>
            </div>
            <p className="text-lg md:text-xl leading-relaxed opacity-95">
              {t.educationalImpact}
            </p>
            <div className="mt-8 pt-8 border-t border-white/20">
              <div className="flex flex-wrap gap-4">
                <div className="bg-white/10 rounded-full px-6 py-3 backdrop-blur-sm">
                  <span className="font-semibold">
                    {language === "vie" ? "Phát Triển Toàn Diện" : "Holistic Development"}
                  </span>
                </div>
                <div className="bg-white/10 rounded-full px-6 py-3 backdrop-blur-sm">
                  <span className="font-semibold">
                    {language === "vie" ? "Lãnh Đạo Tương Lai" : "Future Leadership"}
                  </span>
                </div>
                <div className="bg-white/10 rounded-full px-6 py-3 backdrop-blur-sm">
                  <span className="font-semibold">
                    {language === "vie" ? "Công Dân Toàn Cầu" : "Global Citizenship"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-200/10 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-200/10 rounded-full blur-3xl -z-10"></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-gradient-to-br from-blue-400/5 to-cyan-400/5 rounded-full -z-10"></div>
      </div>
    </div>
  );
};

export default CoreValue;