import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import handTreeImage from "/images/protection.png";
import graduate from "/images/graduate.png";
import { useLanguage } from "../../contexts/LanguageContext";

const SixSenses = () => {
  const { language } = useLanguage();

  // Refs for animations
  const gridSectionRef = useRef(null);
  const heroSectionRef = useRef(null);
  const introSectionRef = useRef(null);
  const finalSectionRef = useRef(null);

  const content = {
    vie: {
      introSection: {
        badge: "HÀNH TRÌNH ĐẶC BIỆT",
        title: "Six Senses - Trải Nghiệm Đa Giác Quan",
        subtitle: "Khám phá thế giới bằng tất cả 6 giác quan của bạn",
        description:
          "Một hành trình 7 ngày độc đáo, nơi bạn sẽ học không chỉ bằng trí tuệ mà còn bằng trái tim, cảm xúc và tất cả các giác quan. Từ thiên nhiên hùng vĩ đến văn hóa bản địa, mỗi khoảnh khắc đều là một bài học sống động.",
        highlightText:
          "7 ngày chuyển hóa • 6 giác quan khám phá • Trọn vẹn trải nghiệm",
        ctaButton: "Tìm Hiểu Ngay",
      },
      gridSection: {
        agua: "AGUA",
        developMore: "Phát Triển nhiều hơn việc học",
        developDesc:
          "Chúng tôi kiến tạo một hành trình vừa nuôi dưỡng trí tuệ – cảm xúc, vừa tái tạo năng lượng toàn diện.",
        listenAndRespect: "Lắng nghe và cùng trân trọng",
        listenDesc:
          "Chúng tôi lắng nghe và trân trọng cảm xúc, suy nghĩ chân thực của các bạn trẻ, mang lại môi trường an lành, hạnh phúc và chân thực.",
        aguaMission:
          "Nếu AGUA theo đuổi sứ mệnh giáo dục giúp người học phát triển toàn diện và hạnh phúc, thì chúng tôi là biểu tượng của đào tạo chất lượng cao mà vẫn nuôi dưỡng cảm hứng, hòa mình vào công nghệ và kết nối với cộng đồng một cách sâu sắc.",
        togetherCreate: "Cùng nhau & chúng tôi kiến tạo",
        togetherDesc:
          "một hành trình vừa nuôi dưỡng trí tuệ – cảm xúc, vừa tái tạo năng lượng toàn diện.",
        sustainableTraining: "Đào tạo & Phát triển bền vững",
        sustainableDesc:
          "Chúng tôi tiên phong trong việc xây dựng nền tảng đào tạo công nghệ bền vững, cam kết phát triển toàn diện cho từng học viên.",
        relax: "Thư giãn thân - tâm - trí",
        relaxDesc: "để khơi nguồn sáng tạo",
      },
      heroSection: {
        title: "Hành trình 7 ngày và các hoạt động đặc biệt",
        subtitle:
          "7 ngày, 7 làn sóng mở ra hành trình khám phá bản thân, cảm hứng và sự kết nối sâu sắc với thế giới xung quanh từ 20-26/10/2025",
        ctaButton: "Bắt Đầu Hành Trình",
        stats: {
          students: "10,000+",
          experiences: "500+",
          countries: "20+",
          satisfaction: "98%",
        },
      },
      finalSection: {
        title: "Sẵn Sàng Cho Hành Trình Chuyển Hóa?",
        subtitle: "Đăng ký ngay để trở thành một phần của cộng đồng Six Senses",
        description:
          "Hãy để chúng tôi đồng hành cùng bạn trong hành trình khám phá bản thân và kết nối với thế giới. Mỗi bước chân là một trải nghiệm, mỗi trải nghiệm là một câu chuyện đáng nhớ.",
        features: [
          "Trải nghiệm đa giác quan độc quyền",
          "Hướng dẫn bởi chuyên gia tâm lý và giáo dục",
          "Môi trường an toàn và hỗ trợ 24/7",
          "Kết nối với cộng đồng cùng chí hướng",
          "Chứng nhận hoàn thành hành trình",
        ],
        ctaPrimary: "Đăng Ký Ngay",
        ctaSecondary: "Tải Brochure Chi Tiết",
      },
    },
    en: {
      introSection: {
        badge: "SPECIAL JOURNEY",
        title: "Six Senses - Multi-Sensory Experience",
        subtitle: "Discover the world with all your 6 senses",
        description:
          "A unique 7-day journey where you'll learn not only with your mind but also with your heart, emotions, and all senses. From majestic nature to indigenous culture, every moment is a living lesson.",
        highlightText:
          "7 days of transformation • 6 senses exploration • Complete experience",
        ctaButton: "Learn More",
      },
      gridSection: {
        agua: "AGUA",
        developMore: "Developing More Than Just Learning",
        developDesc:
          "We create a journey that nourishes both intellect - emotions, while regenerating comprehensive energy.",
        listenAndRespect: "Listening and Mutual Respect",
        listenDesc:
          "We listen and respect the genuine emotions and thoughts of young people, creating a peaceful, happy, and authentic environment.",
        aguaMission:
          "If AGUA pursues an educational mission that helps learners develop comprehensively and happily, then we are a symbol of high-quality training that still nurtures inspiration, immerses itself in technology, and deeply connects with the community.",
        togetherCreate: "Together & We Create",
        togetherDesc:
          "a journey that nourishes both intellect - emotions, while regenerating comprehensive energy.",
        sustainableTraining: "Training & Sustainable Development",
        sustainableDesc:
          "We pioneer in building sustainable technology training foundations, committed to comprehensive development for each student.",
        relax: "Relax Body - Mind - Spirit",
        relaxDesc: "to spark creativity",
      },
      heroSection: {
        title: "The 7-day journey AND  signature activities",
        subtitle:
          "7 days, 7 waves of discovery, exploring the self, inspiration, and meaningful connection with the world from October 20–26, 2025.",
        ctaButton: "Start Your Journey",
        stats: {
          students: "10,000+",
          experiences: "500+",
          countries: "20+",
          satisfaction: "98%",
        },
      },
      finalSection: {
        title: "Ready for Your Transformation Journey?",
        subtitle: "Register now to become part of the Six Senses community",
        description:
          "Let us accompany you on your journey of self-discovery and world connection. Every step is an experience, every experience is a memorable story.",
        features: [
          "Exclusive multi-sensory experience",
          "Guidance by psychology and education experts",
          "Safe environment with 24/7 support",
          "Connection with like-minded community",
          "Journey completion certificate",
        ],
        ctaPrimary: "Register Now",
        ctaSecondary: "Download Detailed Brochure",
      },
    },
  };

  // Get content based on current language
  const t = content[language] || content.vie;

  // Animation for Intro Section
  useEffect(() => {
    const ctx = gsap.context(() => {
      const introTl = gsap.timeline({
        scrollTrigger: {
          trigger: introSectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none none",
        },
      });

      // Animate badge
      introTl.fromTo(
        introSectionRef.current?.querySelector(".intro-badge"),
        { y: -30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
        0,
      );

      // Animate title
      introTl.fromTo(
        introSectionRef.current?.querySelector(".intro-title"),
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
        0.3,
      );

      // Animate subtitle
      introTl.fromTo(
        introSectionRef.current?.querySelector(".intro-subtitle"),
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
        0.6,
      );

      // Animate description
      introTl.fromTo(
        introSectionRef.current?.querySelector(".intro-description"),
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
        0.9,
      );

      // Animate highlight text
      introTl.fromTo(
        introSectionRef.current?.querySelector(".intro-highlight"),
        { scale: 0.9, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.8, ease: "back.out(1.7)" },
        1.2,
      );

      // Animate CTA button
      introTl.fromTo(
        introSectionRef.current?.querySelector(".intro-cta"),
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.6, ease: "back.out(1.7)" },
        1.5,
      );
    }, introSectionRef);

    return () => ctx.revert();
  }, [language]);

  // Animation for Grid Section
  useEffect(() => {
    const ctx = gsap.context(() => {
      const sectionTl = gsap.timeline({
        scrollTrigger: {
          trigger: gridSectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none none",
        },
      });

      // Animate left grid items
      const leftItems =
        gridSectionRef.current?.querySelectorAll(".left-section");
      if (leftItems) {
        sectionTl.fromTo(
          leftItems,
          { x: -100, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: "power2.out" },
          0,
        );
      }

      // Animate right grid items
      const rightItems =
        gridSectionRef.current?.querySelectorAll(".right-cell");
      if (rightItems) {
        sectionTl.fromTo(
          rightItems,
          { x: 100, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: "power2.out" },
          0.3,
        );
      }

      // Animate images with rotation effect
      const images = gridSectionRef.current?.querySelectorAll(".content-image");
      if (images) {
        sectionTl.fromTo(
          images,
          { scale: 0.8, rotation: -5, opacity: 0 },
          {
            scale: 1,
            rotation: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.1,
            ease: "back.out(1.4)",
          },
          0.6,
        );
      }
    }, gridSectionRef);

    return () => ctx.revert();
  }, [language]);

  // Animation for Hero Section
  useEffect(() => {
    const ctx = gsap.context(() => {
      const heroTl = gsap.timeline({
        scrollTrigger: {
          trigger: heroSectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none none",
        },
      });

      // Animate title with fade in and slide up
      heroTl.fromTo(
        heroSectionRef.current?.querySelector(".title-text"),
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
        0,
      );

      // Animate highlighted spans
      const highlightedSpans =
        heroSectionRef.current?.querySelectorAll(".highlight-text");
      if (highlightedSpans) {
        heroTl.fromTo(
          highlightedSpans,
          { scale: 0.8, opacity: 0, y: 20 },
          {
            scale: 1,
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: "back.out(1.7)",
          },
          0.4,
        );
      }

      // Animate subtitle with delay
      heroTl.fromTo(
        heroSectionRef.current?.querySelector(".hero-subtitle"),
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
        0.6,
      );

      // Animate hero image with parallax effect
      const heroImage = heroSectionRef.current?.querySelector(".hero-image");
      if (heroImage) {
        // Initial animation
        heroTl.fromTo(
          heroImage,
          { scale: 1.1, opacity: 0 },
          { scale: 1, opacity: 1, duration: 1.2, ease: "power2.out" },
          0.8,
        );

        // Parallax scroll effect
        gsap.to(heroImage, {
          y: 80,
          ease: "none",
          scrollTrigger: {
            trigger: heroSectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }
    }, heroSectionRef);

    return () => ctx.revert();
  }, [language]);

  // Animation for Final Section
  useEffect(() => {
    const ctx = gsap.context(() => {
      const finalTl = gsap.timeline({
        scrollTrigger: {
          trigger: finalSectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none none",
        },
      });

      // Animate title
      finalTl.fromTo(
        finalSectionRef.current?.querySelector(".final-title"),
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
        0,
      );

      // Animate subtitle
      finalTl.fromTo(
        finalSectionRef.current?.querySelector(".final-subtitle"),
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
        0.3,
      );

      // Animate description
      finalTl.fromTo(
        finalSectionRef.current?.querySelector(".final-description"),
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
        0.6,
      );

      // Animate features with stagger
      const features =
        finalSectionRef.current?.querySelectorAll(".feature-item");
      if (features) {
        finalTl.fromTo(
          features,
          { x: -20, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: "power2.out" },
          0.9,
        );
      }

      // Animate CTA buttons
      const ctaButtons =
        finalSectionRef.current?.querySelectorAll(".final-cta");
      if (ctaButtons) {
        finalTl.fromTo(
          ctaButtons,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: "power2.out" },
          1.2,
        );
      }
    }, finalSectionRef);

    return () => ctx.revert();
  }, [language]);

  // Function to parse and highlight text
  const renderTitleWithHighlight = () => {
    if (language === "vie") {
      // Vietnamese version - highlight "7 ngày" and "hoạt động đặc biệt"
      const title = t.heroSection.title;
      const parts = title.split(/(7 ngày|hoạt động đặc biệt)/);

      return parts.map((part, index) => {
        if (part === "7 ngày" || part === "hoạt động đặc biệt") {
          return (
            <span
              key={index}
              className="highlight-text italic text-[#0974B6] font-bold"
              style={{
                fontStyle: "italic",
                textShadow: "0 2px 4px rgba(9, 116, 182, 0.2)",
              }}
            >
              {part}
            </span>
          );
        }
        return <span key={index}>{part}</span>;
      });
    } else {
      // English version - highlight "7-day journey" and "signature activities"
      const title = t.heroSection.title;
      const parts = title.split(/(7-day journey|signature activities)/i);

      return parts.map((part, index) => {
        if (
          part.toLowerCase().includes("7-day journey") ||
          part.toLowerCase().includes("signature activities")
        ) {
          return (
            <span
              key={index}
              className="highlight-text italic text-[#0974B6] font-bold"
              style={{
                fontStyle: "italic",
                textShadow: "0 2px 4px rgba(9, 116, 182, 0.2)",
              }}
            >
              {part}
            </span>
          );
        }
        return <span key={index}>{part}</span>;
      });
    }
  };

  return (
    <>
      {/* Intro Hero Section */}
      <section
        className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-cyan-50"
        ref={introSectionRef}
      >
        <div className="container mx-auto px-4 md:px-8 lg:px-16 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            {/* Badge */}
            <div className="intro-badge inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full text-sm font-bold mb-8">
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
              {t.introSection.badge}
            </div>

            {/* Title */}
            <h1 className="title-text text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              {t.introSection.title}
            </h1>

            {/* Subtitle */}
            <p className="title-text text-xl md:text-2xl text-blue-600 mb-8 max-w-3xl mx-auto">
              {t.introSection.subtitle}
            </p>

            {/* Description */}
            <p className="title-text text-lg text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              {t.introSection.description}
            </p>
          </div>
        </div>

        <div className="tam-nhin-container mb-16 max-w-7xl mx-auto px-4 md:px-2">
          <div className="grid-layout">
            {/* Left Grid - 1/3 */}
            <div className="left-grid">
              <div className="left-section section-1">
                <div className="content">
                  <div className="text-with-image">
                    <div className="image-container">
                      <img
                        src={graduate}
                        alt="Graduate"
                        className="content-image graduate-image"
                      />
                    </div>
                    <div className="text-content">
                      <h3 className="hero-title" style={{ fontSize: "2rem" }}>
                        {t.gridSection.agua}
                      </h3>
                      <div className="divider"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="left-section section-2 hoverable">
                <div className="content">
                  <div className="text-with-image">
                    <div className="image-container">
                      <img
                        src={handTreeImage}
                        alt="Hand growing tree"
                        className="content-image"
                      />
                    </div>
                    <div className="section-title">
                      <h4>{t.gridSection.developMore}</h4>
                      <p>{t.gridSection.developDesc}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="left-section section-3">
                <div className="content">
                  <div className="text-with-image">
                    <div className="image-container">
                      <img
                        src={graduate}
                        alt="Graduate"
                        className="content-image graduate-image"
                      />
                    </div>
                    <div className="text-content">
                      <h4>{t.gridSection.listenAndRespect}</h4>
                      <p>{t.gridSection.listenDesc}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Grid - 2/3 */}
            <div className="right-grid">
              <div className="right-row top-row">
                <div className="right-cell cell-1">
                  <div className="content">
                    <div className="text-with-image">
                      <div className="image-container">
                        <img
                          src={graduate}
                          alt="Graduate"
                          className="content-image graduate-image"
                        />
                      </div>
                      <div className="text-content">
                        <p>{t.gridSection.aguaMission}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="right-cell cell-2 hoverable">
                  <div className="content">
                    <div className="text-with-image">
                      <div className="image-container">
                        <img
                          src={handTreeImage}
                          alt="Hand growing tree"
                          className="content-image"
                        />
                      </div>
                      <div className="section-title">
                        <h4>{t.gridSection.togetherCreate}</h4>
                        <p>{t.gridSection.togetherDesc}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="right-row bottom-row">
                <div className="right-cell cell-3 hoverable">
                  <div className="content">
                    <div className="text-with-image">
                      <div className="image-container">
                        <img
                          src={handTreeImage}
                          alt="Hand growing tree"
                          className="content-image"
                        />
                      </div>
                      <div className="section-title">
                        <h4>{t.gridSection.sustainableTraining}</h4>
                        <p>{t.gridSection.sustainableDesc}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="right-cell cell-4">
                  <div className="content">
                    <div className="text-with-image">
                      <div className="image-container">
                        <img
                          src={graduate}
                          alt="Graduate"
                          className="content-image graduate-image"
                        />
                      </div>
                      <div className="text-content">
                        <h4>{t.gridSection.relax}</h4>
                        <p>{t.gridSection.relaxDesc}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Section - Title first, then Image below */}
      <section className="w-full" ref={heroSectionRef}>
        {/* Text Content First */}
        <div className="container mx-auto px-4 md:px-8 lg:px-16 py-16 md:py-24">
          <div className="max-w-6xl mx-auto text-center">
            {/* Title with highlighted parts */}
            <h1 className="title-text text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-gray-900 leading-tight">
              {renderTitleWithHighlight()}
            </h1>

            {/* Subtitle */}
            <p className="title-text text-xl md:text-2xl lg:text-3xl text-[#686967] mb-8 max-w-4xl mx-auto leading-relaxed">
              {t.heroSection.subtitle}
            </p>
          </div>
        </div>

        {/* Full Width Image Below */}
        <div className="w-full overflow-hidden">
          <img src="/images/Six.png" alt="Six Senses Experience" />
        </div>
      </section>

      {/* Final CTA Section */}
      <section
        className="py-20 md:py-32 bg-gradient-to-b from-white to-blue-50"
        ref={finalSectionRef}
      >
        {/* Wave Decoration */}
        <div className="mt-16">
          <svg
            className="w-full h-12"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              fill="#0974B6"
              opacity="0.1"
            />
          </svg>
        </div>
      </section>
    </>
  );
};

export default SixSenses;
