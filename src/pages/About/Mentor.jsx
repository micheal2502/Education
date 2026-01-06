import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLanguage } from "../../contexts/LanguageContext";
import { useNavigate } from "react-router-dom"; // Import useNavigate

gsap.registerPlugin(ScrollTrigger);

const MentorPage = () => {
  const { language } = useLanguage();
  const navigate = useNavigate(); // Initialize navigate function
  const [scrolled, setScrolled] = useState(false);
  const heroTextRef = useRef(null);
  const mentorsRef = useRef(null);
  const mentorMatchingRef = useRef(null);

  // Hero animation
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50 && !scrolled) {
        setScrolled(true);
        gsap.to(heroTextRef.current, {
          opacity: 0,
          y: -30,
          duration: 1.2,
          ease: "power3.inOut",
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  // Initial hero animation
  useEffect(() => {
    if (heroTextRef.current) {
      gsap.fromTo(
        heroTextRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.5, ease: "power3.out", delay: 0.3 },
      );
    }
  }, []);

  // Animation for Mentors section
  useEffect(() => {
    const ctx = gsap.context(() => {
      const sectionTl = gsap.timeline({
        scrollTrigger: {
          trigger: mentorsRef.current,
          start: "top 80%",
          end: "top 20%",
          toggleActions: "play none none none",
        },
      });

      const sectionTitle = mentorsRef.current?.querySelector(".text-center h2");
      if (sectionTitle) {
        gsap.set(sectionTitle, { y: -50, opacity: 0 });
        sectionTl.to(
          sectionTitle,
          { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
          0,
        );
      }

      const sectionSubtitle = mentorsRef.current?.querySelector(".text-center p");
      if (sectionSubtitle) {
        gsap.set(sectionSubtitle, { y: 50, opacity: 0 });
        sectionTl.to(
          sectionSubtitle,
          { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
          0.2,
        );
      }

      const mentorCards = mentorsRef.current?.querySelectorAll(".grid > div");
      if (mentorCards) {
        gsap.set(mentorCards, {
          y: 100,
          opacity: 0,
          scale: 0.9,
          rotation: (index) => (index % 2 === 0 ? -3 : 3),
        });
        sectionTl.to(
          mentorCards,
          {
            y: 0,
            opacity: 1,
            scale: 1,
            rotation: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: "back.out(1.4)",
          },
          0.4,
        );
      }

      mentorCards?.forEach((card, index) => {
        const cardImage = card.querySelector(".relative.h-96");
        const cardContent = card.querySelector(".p-6");

        if (cardImage) {
          gsap.set(cardImage, { scale: 0.8, opacity: 0 });
          sectionTl.to(
            cardImage,
            { scale: 1, opacity: 1, duration: 0.6, ease: "power2.out" },
            0.5 + index * 0.1,
          );
        }

        if (cardContent) {
          const contentElements = cardContent.querySelectorAll("div");
          gsap.set(contentElements, { y: 20, opacity: 0 });
          sectionTl.to(
            contentElements,
            {
              y: 0,
              opacity: 1,
              duration: 0.5,
              stagger: 0.1,
              ease: "power2.out",
            },
            0.7 + index * 0.1,
          );
        }
      });
    }, mentorsRef);

    return () => ctx.revert();
  }, [language]);

  // Animation for Matching section
  useEffect(() => {
    const ctx = gsap.context(() => {
      const sectionTl = gsap.timeline({
        scrollTrigger: {
          trigger: mentorMatchingRef.current,
          start: "top 80%",
          end: "top 20%",
          toggleActions: "play none none none",
        },
      });

      const leftColumn = mentorMatchingRef.current?.querySelector(
        ".lg\\:grid-cols-2 > div:first-child",
      );
      if (leftColumn) {
        gsap.set(leftColumn, { x: -100, opacity: 0 });
        sectionTl.to(
          leftColumn,
          { x: 0, opacity: 1, duration: 1, ease: "power2.out" },
          0,
        );
      }

      const title = mentorMatchingRef.current?.querySelector(
        ".lg\\:grid-cols-2 > div:first-child h2",
      );
      if (title) {
        gsap.set(title, { y: -30, opacity: 0 });
        sectionTl.to(
          title,
          { y: 0, opacity: 1, duration: 0.8, ease: "back.out(1.4)" },
          0.2,
        );
      }

      const subtitle = mentorMatchingRef.current?.querySelector(
        ".lg\\:grid-cols-2 > div:first-child p.text-lg",
      );
      if (subtitle) {
        gsap.set(subtitle, { y: 30, opacity: 0 });
        sectionTl.to(
          subtitle,
          { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
          0.3,
        );
      }

      const button = mentorMatchingRef.current?.querySelector("button");
      if (button) {
        gsap.set(button, { y: 50, opacity: 0, scale: 0.9 });
        sectionTl.to(
          button,
          { y: 0, opacity: 1, scale: 1, duration: 0.7, ease: "back.out(1.7)" },
          0.5,
        );
      }

      const privacyNote = mentorMatchingRef.current?.querySelector(
        ".py-10.text-gray-700",
      );
      if (privacyNote) {
        gsap.set(privacyNote, { y: 30, opacity: 0 });
        sectionTl.to(
          privacyNote,
          { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
          0.7,
        );
      }

      const rightColumn = mentorMatchingRef.current?.querySelector(
        ".lg\\:grid-cols-2 > div:last-child",
      );
      if (rightColumn) {
        gsap.set(rightColumn, { x: 100, opacity: 0, scale: 0.8 });
        sectionTl.to(
          rightColumn,
          { x: 0, opacity: 1, scale: 1, duration: 1.2, ease: "back.out(1.4)" },
          0.4,
        );
      }

      const glowEffect = mentorMatchingRef.current?.querySelector(
        ".absolute.bg-gradient-to-r",
      );
      if (glowEffect) {
        gsap.set(glowEffect, { scale: 0, opacity: 0 });
        sectionTl.to(
          glowEffect,
          { scale: 1, opacity: 0.7, duration: 1.5, ease: "power2.out" },
          0.6,
        );
      }

      const logo = mentorMatchingRef.current?.querySelector("img.w-80");
      if (logo) {
        gsap.set(logo, { scale: 0.5, opacity: 0, rotation: -180 });
        sectionTl.to(
          logo,
          {
            scale: 1,
            opacity: 1,
            rotation: 0,
            duration: 1,
            ease: "back.out(1.7)",
          },
          0.8,
        );
      }

      const logoText = mentorMatchingRef.current?.querySelector(
        ".text-center .text-3xl",
      );
      if (logoText) {
        gsap.set(logoText, { y: 50, opacity: 0 });
        sectionTl.to(
          logoText,
          { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
          1,
        );
      }
    }, mentorMatchingRef);

    return () => ctx.revert();
  }, [language]);

  // Handle button click to navigate to /contact
  const handleMatchingButtonClick = () => {
    navigate("/contact");
  };

  const translations = {
    vi: {
      heroTitle: "Đội Ngũ ",
      heroTitleHighlight: "Mentor Chuyên Môn",
      heroSubtitle: "Các chuyên gia giàu kinh nghiệm đồng hành cùng bạn trên hành trình chinh phục mục tiêu giáo dục quốc tế",

      // Mentors Introduction
      mentorsIntro: {
        title: "Đội ngũ Mentor đẳng cấp quốc tế",
        subtitle: "Chuyên gia từ các trường đại học hàng đầu thế giới",
        description: "Đội ngũ Mentor của AGUA không chỉ là những chuyên gia học thuật xuất sắc mà còn là những người truyền cảm hứng, người đồng hành và người định hướng cho học sinh trên con đường phát triển toàn diện."
      },

      // Mentors Stats
      mentorsStats: [
        { number: "100+", label: "Năm kinh nghiệm tổng" },
        { number: "15+", label: "Quốc gia từng sống và làm việc" },
        { number: "1000+", label: "Học sinh được mentor" },
        { number: "95%", label: "Tỷ lệ hài lòng" }
      ],

      // Mentoring Approach
      approachSection: {
        title: "Phương pháp đồng hành độc đáo",
        sections: [
          {
            title: "Cá Nhân Hóa Sâu Sắc",
            description: "Mỗi học sinh nhận được lộ trình học tập và phát triển được thiết kế riêng dựa trên tính cách, năng lực và mục tiêu cá nhân",
          },
          {
            title: "Hỗ Trợ Toàn Diện",
            description: "Đồng hành xuyên suốt từ định hướng, chuẩn bị hồ sơ, luyện phỏng vấn đến hỗ trợ sau khi nhập học",
          },
          {
            title: "Phát Triển Kỹ Năng",
            description: "Rèn luyện kỹ năng tư duy phản biện, giao tiếp, lãnh đạo và các kỹ năng sống cần thiết",
          },
          {
            title: "Kết Nối Quốc Tế",
            description: "Tiếp cận mạng lưới cựu học sinh và đối tác giáo dục trên toàn thế giới",
          }
        ]
      },

      // Mentors Section
      mentorsSection: {
        title: "Đội ngũ Mentor Chuyên môn",
        subtitle: "Chuyên gia Đồng hành",
        description: "Các chuyên gia giàu kinh nghiệm trực tiếp đồng hành cùng học sinh"
      },

      mentors: [
        {
          name: "Ms. Nguyễn Phương Ly",
          title: "Giám đốc Học thuật & Founder",
          education: "Tiến sĩ Giáo dục Quốc tế - Đại học Harvard",
          experience: "15+ năm tư vấn du học Mỹ & Châu Âu",
          specialty: "Học bổng toàn phần Ivy League & Top 50 Mỹ",
          expertise: [
            "Chiến lược học tập dài hạn",
            "Xây dựng hồ sơ xuất sắc",
            "Kỹ năng phỏng vấn học bổng",
            "Định hướng nghề nghiệp"
          ],
          achievements: [
            "Giúp 200+ học sinh đạt học bổng toàn phần",
            "Cựu giảng viên Đại học Stanford",
            "Tác giả sách 'Du học thành công'"
          ],
          quote: "Mỗi học sinh là một tiềm năng vô hạn cần được khai phá",
          availability: "5 học sinh/năm"
        },
        {
          name: "Mr. Bob Zeng",
          title: "Senior Mentor - UK & Europe",
          education: "Thạc sĩ Quản lý Giáo dục - Đại học Oxford",
          experience: "12 năm làm việc tại Vương quốc Anh",
          specialty: "Russell Group Universities & Medical Schools",
          expertise: [
            "Chiến lược apply UK top universities",
            "Personal Statement chuyên sâu",
            "Luyện phỏng vấn Oxford/Cambridge",
            "Định hướng ngành Y & Luật"
          ],
          achievements: [
            "Chuyên gia tuyển sinh Oxford/Cambridge",
            "Đào tạo 150+ học sinh vào top UK",
            "Cựu Admissions Officer - UCL"
          ],
          quote: "Chuẩn bị hôm nay cho thành công ngày mai",
          availability: "8 học sinh/năm"
        },
        {
          name: "Mr. Harry Bott",
          title: "Lead Mentor - Australia & Canada",
          education: "MBA - Đại học Toronto, CPA Canada",
          experience: "10 năm tư vấn di trú và du học",
          specialty: "Định cư sau tốt nghiệp & PR Pathways",
          expertise: [
            "Chiến lược định cư dài hạn",
            "Chọn trường & ngành có cơ hội việc làm",
            "Kết nối doanh nghiệp tại Úc & Canada",
            "Hồ sơ xin visa & PR"
          ],
          achievements: [
            "Tỷ lệ visa thành công 99%",
            "Chuyên gia Group of Eight Úc",
            "Cố vấn chính sách di trú"
          ],
          quote: "Lựa chọn đúng đắn tạo nên tương lai khác biệt",
          availability: "10 học sinh/năm"
        }
      ],

      // Matching Section
      matchingTitle: "Tìm Mentor phù hợp với mục tiêu của bạn",
      matchingSubtitle: "Mỗi học sinh là duy nhất, mỗi hành trình cần một người đồng hành phù hợp. Đăng ký ngay để được tư vấn và match với Mentor phù hợp nhất.",
      buttonText: "Đăng ký match mentor miễn phí",
      privacyNote: "Cam kết bảo mật thông tin khách hàng",

      // Matching Process
      matchingProcess: {
        title: "Quy trình Match Mentor",
        steps: [
          {
            step: 1,
            title: "Đánh giá nhu cầu",
            description: "Phân tích mục tiêu, năng lực và tính cách của học sinh"
          },
          {
            step: 2,
            title: "Match chuyên môn",
            description: "Kết nối với Mentor có chuyên môn phù hợp với mục tiêu"
          },
          {
            step: 3,
            title: "Buổi làm việc đầu tiên",
            description: "Làm quen và xây dựng lộ trình học tập cá nhân hóa"
          },
          {
            step: 4,
            title: "Đồng hành dài hạn",
            description: "Theo sát và điều chỉnh lộ trình theo tiến độ phát triển"
          }
        ]
      }
    },
    en: {
      heroTitle: "Professional ",
      heroTitleHighlight: "Mentor Team",
      heroSubtitle: "Experienced experts accompanying you on your journey to conquer international education goals",

      // Mentors Introduction
      mentorsIntro: {
        title: "World-class Mentor Team",
        subtitle: "Experts from top universities worldwide",
        description: "AGUA's Mentor team consists not only of excellent academic experts but also of inspiring individuals who guide and support students on their path to comprehensive development."
      },

      // Mentors Stats
      mentorsStats: [
        { number: "100+", label: "Total years of experience" },
        { number: "15+", label: "Countries lived and worked in" },
        { number: "1000+", label: "Students mentored" },
        { number: "95%", label: "Satisfaction rate" }
      ],

      // Mentoring Approach
      approachSection: {
        title: "Unique Mentoring Approach",
        sections: [
          {
            title: "Deep Personalization",
            description: "Each student receives a personalized learning and development pathway designed based on personality, abilities, and personal goals",
          },
          {
            title: "Comprehensive Support",
            description: "Continuous support from orientation, application preparation, interview training to post-admission assistance",
          },
          {
            title: "Skill Development",
            description: "Training in critical thinking, communication, leadership, and essential life skills",
          },
          {
            title: "International Connections",
            description: "Access to a global network of alumni and educational partners",
          }
        ]
      },

      // Mentors Section
      mentorsSection: {
        title: "Professional Mentor Team",
        subtitle: "Guiding Experts",
        description: "Experienced experts who directly guide and mentor students"
      },

      mentors: [
        {
          name: "Ms. Nguyễn Phương Ly",
          title: "Academic Director & Founder",
          education: "PhD in International Education - Harvard University",
          experience: "15+ years consulting for US & Europe study abroad",
          specialty: "Full scholarships to Ivy League & Top 50 US universities",
          expertise: [
            "Long-term learning strategy",
            "Building excellent profiles",
            "Scholarship interview skills",
            "Career orientation"
          ],
          achievements: [
            "Helped 200+ students secure full scholarships",
            "Former lecturer at Stanford University",
            "Author of 'Successful Study Abroad'"
          ],
          quote: "Every student is an infinite potential waiting to be discovered",
          availability: "5 students/year"
        },
        {
          name: "Mr. Bob Zeng",
          title: "Senior Mentor - UK & Europe",
          education: "Master's in Educational Management - University of Oxford",
          experience: "12 years working in the United Kingdom",
          specialty: "Russell Group Universities & Medical Schools",
          expertise: [
            "UK top university application strategy",
            "In-depth Personal Statement",
            "Oxford/Cambridge interview training",
            "Medicine & Law career guidance"
          ],
          achievements: [
            "Oxford/Cambridge admissions specialist",
            "Trained 150+ students into top UK universities",
            "Former Admissions Officer - UCL"
          ],
          quote: "Prepare today for success tomorrow",
          availability: "8 students/year"
        },
        {
          name: "Mr. Harry Bott",
          title: "Lead Mentor - Australia & Canada",
          education: "MBA - University of Toronto, CPA Canada",
          experience: "10 years in immigration and study abroad consulting",
          specialty: "Post-graduation settlement & PR Pathways",
          expertise: [
            "Long-term settlement strategy",
            "Choosing schools & majors with job opportunities",
            "Business connections in Australia & Canada",
            "Visa & PR application preparation"
          ],
          achievements: [
            "99% visa success rate",
            "Group of Eight Australia specialist",
            "Immigration policy advisor"
          ],
          quote: "The right choices make a different future",
          availability: "10 students/year"
        }
      ],

      // Matching Section
      matchingTitle: "Find the Right Mentor for Your Goals",
      matchingSubtitle: "Every student is unique, every journey needs the right companion. Register now for consultation and matching with the most suitable Mentor.",
      buttonText: "Register for free mentor matching",
      privacyNote: "Commitment to customer information security",

      // Matching Process
      matchingProcess: {
        title: "Mentor Matching Process",
        steps: [
          {
            step: 1,
            title: "Needs Assessment",
            description: "Analyze student's goals, abilities, and personality"
          },
          {
            step: 2,
            title: "Expert Matching",
            description: "Connect with Mentor whose expertise matches the goals"
          },
          {
            step: 3,
            title: "First Session",
            description: "Get acquainted and build personalized learning pathway"
          },
          {
            step: 4,
            title: "Long-term Support",
            description: "Continuous monitoring and pathway adjustments"
          }
        ]
      }
    }
  };

  const t = translations[language] || translations.vi;

  return (
    <div className="manrope-regular">
      <div className="pt-16 md:pt-20"></div>
      <div className="mentor-page">
        {/* Hero Section */}
        <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-white to-blue-50 manrope-regular">
          <div className="text-center max-w-5xl mx-auto px-4">
            <h1
              ref={heroTextRef}
              className="manrope-extrabold text-[#0974B6] 
                text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl
                leading-tight mb-4 sm:mb-6 md:mb-8"
            >
              {t.heroTitle}
              <span className="block">{t.heroTitleHighlight}</span>
            </h1>
            <p className="text-gray-600 text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto manrope-regular">
              {t.heroSubtitle}
            </p>
          </div>
        </section>

        {/* Mentors Section */}
        <section
          ref={mentorsRef}
          className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-white to-blue-50 manrope-regular"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <div className="inline-flex items-center bg-gradient-to-r from-[#0974B6] to-blue-500 text-white px-6 py-2 rounded-full manrope-bold text-sm sm:text-base mb-4">
                {t.mentorsSection.title}
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl manrope-bold text-gray-800 mb-4">
                {t.mentorsSection.subtitle}
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto text-sm sm:text-base md:text-lg">
                {t.mentorsSection.description}
              </p>
            </div>

            {/* Mentor Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {t.mentors.map((mentor, index) => {
                const mentorImages = [
                  "/images/Mentor1.png",
                  "/images/Mentor2.png",
                  "/images/Mentor3.png",
                ];

                return (
                  <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-200 hover:shadow-2xl transition-all duration-300">
                    {/* Mentor Image */}
                    <div className="relative h-72 sm:h-80 overflow-hidden">
                      <img
                        src={mentorImages[index]}
                        alt={mentor.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                      
                      {/* Availability Badge */}
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                        <span className="text-sm font-bold text-[#0974B6]">
                          {mentor.availability}
                        </span>
                      </div>

                      {/* Mentor Info */}
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <h3 className="text-2xl manrope-bold mb-2">{mentor.name}</h3>
                        <p className="text-blue-200 manrope-medium">{mentor.title}</p>
                      </div>
                    </div>

                    {/* Mentor Details */}
                    <div className="p-6">
                      {/* Education & Experience */}
                      <div className="mb-6">
                        <div className="flex items-start mb-4">
                          <svg className="w-5 h-5 text-[#0974B6] mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" />
                          </svg>
                          <div>
                            <div className="manrope-bold text-gray-900">{mentor.education}</div>
                            <div className="text-gray-600 text-sm mt-1">{mentor.experience}</div>
                          </div>
                        </div>

                        {/* Specialty */}
                        <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 mb-4">
                          <div className="manrope-bold text-[#0974B6] mb-2">
                            {language === "vi" ? "Chuyên môn chính" : "Main Specialty"}
                          </div>
                          <div className="text-gray-800 manrope-medium">{mentor.specialty}</div>
                        </div>

                        {/* Expertise */}
                        <div className="mb-4">
                          <div className="manrope-bold text-gray-900 mb-2">
                            {language === "vi" ? "Chuyên môn chi tiết" : "Detailed Expertise"}
                          </div>
                          <div className="space-y-2">
                            {mentor.expertise.map((item, idx) => (
                              <div key={idx} className="flex items-center">
                                <div className="w-1.5 h-1.5 bg-[#0974B6] rounded-full mr-3"></div>
                                <span className="text-gray-600 text-sm">{item}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Achievements */}
                        <div>
                          <div className="manrope-bold text-gray-900 mb-2">
                            {language === "vi" ? "Thành tựu" : "Achievements"}
                          </div>
                          <div className="space-y-2">
                            {mentor.achievements.map((achievement, idx) => (
                              <div key={idx} className="flex items-center">
                                <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></div>
                                <span className="text-gray-600 text-sm">{achievement}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Quote */}
                      <div className="pt-6 border-t border-gray-200">
                        <p className="text-gray-700 italic manrope-light">
                          "{mentor.quote}"
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Matching Process */}
        <section className="py-12 sm:py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl manrope-bold text-[#0974B6] mb-4">
                {t.matchingProcess.title}
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {t.matchingProcess.steps.map((step) => (
                <div key={step.step} className="relative">
                  {/* Step Number */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-[#0974B6] text-white rounded-full flex items-center justify-center manrope-bold text-lg">
                    {step.step}
                  </div>
                  
                  {/* Step Card */}
                  <div className="bg-gradient-to-b from-blue-50 to-white p-6 sm:p-8 pt-10 rounded-2xl border border-blue-100 text-center">
                    <h3 className="text-xl font-bold text-gray-800 mb-3 manrope-bold">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 manrope-regular">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mentor Matching CTA */}
        <section
          ref={mentorMatchingRef}
          className="py-12 sm:py-16 md:py-20 manrope-regular bg-gradient-to-b from-white to-blue-50"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
              {/* Left Column - Content */}
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl manrope-bold mb-4 sm:mb-6 leading-tight text-[#0974B6] leading-relaxed">
                  {t.matchingTitle}
                </h2>

                <p className="text-base sm:text-lg mb-6 sm:mb-8 text-gray-700 leading-relaxed manrope-regular">
                  {t.matchingSubtitle}
                </p>

                {/* Updated Button with onClick handler */}
                <button 
                  onClick={handleMatchingButtonClick}
                  className="bg-white text-[#0974B6] px-6 py-3 rounded-full manrope-bold border-2 border-[#0974B6] hover:bg-[#0974B6] hover:text-white transition-all duration-300 shadow-md w-full sm:w-auto flex items-center justify-center sm:justify-start group"
                >
                  <svg
                    className="w-6 h-6 mr-3 group-hover:animate-pulse"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                    />
                  </svg>
                  {t.buttonText}
                </button>

                {/* Privacy Note */}
                <div className="pt-8 sm:pt-10 text-gray-700 text-sm flex items-center mt-6">
                  <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {t.privacyNote}
                </div>
              </div>

              {/* Right Column - Logo */}
              <div className="relative order-first lg:order-last mt-8 lg:mt-0">
                <div className="relative flex items-center justify-center">
                  <div className="absolute w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-2xl opacity-50"></div>

                  <div className="relative z-10">
                    <div className="flex flex-col items-center">
                      <img
                        src="/images/logo2.png"
                        alt="AGUA International Education"
                        className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 object-contain mb-4"
                      />

                      <div className="text-center text-[#0974B6]">
                        <div className="text-2xl sm:text-3xl md:text-4xl manrope-bold mb-1">
                          AGUA
                        </div>
                        <div className="text-base sm:text-lg md:text-xl manrope-regular">
                          International Education
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MentorPage;