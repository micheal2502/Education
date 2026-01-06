import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLanguage } from "../../contexts/LanguageContext";

gsap.registerPlugin(ScrollTrigger);

const FounderPage = () => {
  const { language } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const heroTextRef = useRef(null);
  const whyMentorsRef = useRef(null);
  const educationGapRef = useRef(null);
  const foundersRef = useRef(null);

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

  // Animation for Education Gap section
  useEffect(() => {
    const ctx = gsap.context(() => {
      const sectionTl = gsap.timeline({
        scrollTrigger: {
          trigger: educationGapRef.current,
          start: "top 80%",
          end: "top 20%",
          toggleActions: "play none none none",
        },
      });

      // Title animation
      const title = educationGapRef.current?.querySelector("h2");
      if (title) {
        gsap.set(title, { y: -50, opacity: 0 });
        sectionTl.to(
          title,
          { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
          0,
        );
      }

      // Subtitle animation
      const subtitle = educationGapRef.current?.querySelector(".text-lg");
      if (subtitle) {
        gsap.set(subtitle, { y: 50, opacity: 0 });
        sectionTl.to(
          subtitle,
          { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
          0.2,
        );
      }

      // Article content animation
      const paragraphs = educationGapRef.current?.querySelectorAll("p.text-gray-700");
      if (paragraphs) {
        gsap.set(paragraphs, { y: 30, opacity: 0 });
        sectionTl.to(
          paragraphs,
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.2,
            ease: "power2.out"
          },
          0.4,
        );
      }

      // Quote animation
      const quote = educationGapRef.current?.querySelector(".border-l-4");
      if (quote) {
        gsap.set(quote, { x: -50, opacity: 0 });
        sectionTl.to(
          quote,
          { x: 0, opacity: 1, duration: 0.8, ease: "back.out(1.4)" },
          0.8,
        );
      }

    }, educationGapRef);

    return () => ctx.revert();
  }, [language]);

  // Animation for Founders section
  useEffect(() => {
    const ctx = gsap.context(() => {
      const sectionTl = gsap.timeline({
        scrollTrigger: {
          trigger: foundersRef.current,
          start: "top 80%",
          end: "top 20%",
          toggleActions: "play none none none",
        },
      });

      // Section title animation
      const sectionTitle = foundersRef.current?.querySelector(".text-center h2");
      if (sectionTitle) {
        gsap.set(sectionTitle, { y: -50, opacity: 0 });
        sectionTl.to(
          sectionTitle,
          { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
          0,
        );
      }

      // Section subtitle animation
      const sectionSubtitle = foundersRef.current?.querySelector(".text-center p");
      if (sectionSubtitle) {
        gsap.set(sectionSubtitle, { y: 50, opacity: 0 });
        sectionTl.to(
          sectionSubtitle,
          { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
          0.2,
        );
      }

      // Founder cards animation
      const founderCards = foundersRef.current?.querySelectorAll(".grid > div");
      if (founderCards) {
        gsap.set(founderCards, {
          y: 100,
          opacity: 0,
          scale: 0.9,
          rotation: (index) => (index % 2 === 0 ? -3 : 3),
        });
        sectionTl.to(
          founderCards,
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

      // Founder images animation
      founderCards?.forEach((card, index) => {
        const cardImage = card.querySelector("img");
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
          const contentElements = cardContent.querySelectorAll("div, p, h3");
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

    }, foundersRef);

    return () => ctx.revert();
  }, [language]);

  const translations = {
    vi: {
      heroTitle: "Tầm nhìn của Nhà Sáng lập",
      heroTitleHighlight: "AGUA International Education",
      heroSubtitle: "Kiến tạo sự thay đổi căn bản trong giáo dục - Từ điểm số đến phát triển toàn diện",

      // Education Gap Analysis - Article Style
      educationGap: {
        title: "Sự thiếu hụt của giáo dục cao cấp thực sự",
        subtitle: "Phân tích từ góc nhìn của người trong cuộc",
        sections: [
          {
            title: "Vấn đề căn bản: Chạy theo điểm số, bỏ quên con người",
            content: `Sau 15 năm làm việc trong lĩnh vực giáo dục quốc tế, tôi nhận ra một thực tế đáng buồn: Hệ thống giáo dục hiện tại đang tạo ra những "nhà vô địch điểm số" nhưng lại thất bại trong việc đào tạo những con người toàn diện. Học sinh dành 12-16 tiếng mỗi ngày để học, luyện thi, làm bài tập, nhưng hầu như không có thời gian để khám phá bản thân, phát triển đam mê, hay xây dựng các mối quan hệ ý nghĩa.`,
            stats: [
              "70% học sinh cảm thấy căng thẳng và áp lực học tập quá mức",
              "Chỉ 30% học sinh biết rõ đam mê và mục tiêu thực sự của mình",
              "85% phụ huynh đánh giá thành công qua điểm số và trường đại học"
            ]
          },
          {
            title: "Sự lệch lạc trong định nghĩa thành công",
            content: `Chúng ta đang sống trong một xã hội mà "thành công" được đo bằng những chỉ số bề nổi: điểm GPA cao, trường đại học danh tiếng, bằng cấp từ nước ngoài. Nhưng chúng ta quên mất rằng những yếu tố thực sự tạo nên một cuộc sống hạnh phúc và ý nghĩa lại là: khả năng thích ứng, tư duy phản biện, kỹ năng giao tiếp, sự đồng cảm, và quan trọng nhất - hiểu rõ giá trị bản thân.`,
            insight: "Điểm số cao không đảm bảo hạnh phúc, trường đại học danh tiếng không đảm bảo thành công trong cuộc sống."
          },
          {
            title: "Khoảng trống giữa giáo dục và thực tế cuộc sống",
            content: `Là một cựu sinh viên Harvard và từng giảng dạy tại Stanford, tôi chứng kiến vô số sinh viên xuất sắc về học thuật nhưng lạc lối trong cuộc sống. Họ có thể giải những bài toán phức tạp nhất, nhưng không biết cách xây dựng mối quan hệ lành mạnh. Họ có thể viết những bài luận học thuật xuất sắc, nhưng không thể thể hiện cảm xúc của mình. Đây chính là khoảng trống mà giáo dục truyền thống đang bỏ ngỏ.`,
            quote: "Giáo dục không phải là việc nhồi nhét kiến thức, mà là thắp sáng ngọn lửa tò mò và đam mê học hỏi suốt đời."
          },
          {
            title: "Sự cần thiết của giáo dục toàn diện",
            content: `AGUA được sinh ra từ chính nhu cầu này. Chúng tôi tin rằng giáo dục đích thực phải bao gồm 4 trụ cột: Học thuật xuất sắc, Phát triển cá nhân, Kỹ năng sống, và Kết nối cộng đồng. Mỗi học sinh không chỉ cần được chuẩn bị cho kỳ thi tiếp theo, mà cần được trang bị cho những thử thách thực tế của cuộc sống - từ quản lý thời gian, xử lý áp lực, đến xây dựng mạng lưới quan hệ và tìm kiếm mục đích sống.`,
            pillars: [
              "Học thuật: Không chỉ là điểm số, mà là tư duy học tập suốt đời",
              "Cá nhân: Khám phá bản sắc, giá trị và đam mê cá nhân",
              "Kỹ năng: Từ giao tiếp đến lãnh đạo, từ giải quyết vấn đề đến tư duy sáng tạo",
              "Cộng đồng: Xây dựng mạng lưới hỗ trợ và đóng góp tích cực"
            ]
          }
        ],
        conclusion: {
          title: "Tầm nhìn cho tương lai",
          content: `AGUA không phải là một trung tâm luyện thi hay một công ty tư vấn du học thông thường. Chúng tôi là một hệ sinh thái giáo dục toàn diện, nơi mỗi học sinh được nhìn nhận như một cá thể độc đáo với tiềm năng vô hạn. Mục tiêu của chúng tôi không phải là đưa học sinh vào những trường đại học danh tiếng nhất, mà là trang bị cho các em những công cụ, kỹ năng và tư duy cần thiết để xây dựng một cuộc sống hạnh phúc, ý nghĩa và thành công theo cách riêng của mình.`,
          finalThought: "Thành công thực sự không được đo bằng những tấm bằng trên tường, mà bằng sự hài lòng trong trái tim và tác động tích cực đến thế giới xung quanh."
        }
      },

      // Founders Section (Giữ nguyên 2 founder)
      foundersSection: {
        title: "Đội ngũ Sáng lập",
        subtitle: "Những Kiến trúc sư của Tương lai Giáo dục",
        description: "Những người đặt nền móng và định hướng cho triết lý giáo dục AGUA, cùng chung tầm nhìn về một nền giáo dục chất lượng và nhân văn",
        founders: [
          {
            name: "Ms. Giang Nguyen",
            title: "Nhà sáng lập & Giám đốc Học thuật",
            education: "Tiến sĩ Giáo dục Quốc tế - Đại học Harvard",
            background: "15+ năm kinh nghiệm trong giáo dục quốc tế, từng làm việc tại các tổ chức giáo dục hàng đầu thế giới",
            motivation: "Từ trải nghiệm cá nhân khi du học, tôi nhận ra sự cần thiết của một hệ thống hỗ trợ toàn diện cho học sinh Việt Nam trên hành trình hội nhập quốc tế",
            personalStory: `Tôi còn nhớ một học sinh của mình - một cô bé rất thông minh, điểm số xuất sắc, được nhận vào Harvard với học bổng toàn phần. Nhưng trong buổi nói chuyện trước khi đi, em hỏi tôi: "Cô ơi, em không biết mình thực sự thích gì. Em chỉ biết học để đạt điểm cao thôi." Câu nói đó khiến tôi day dứt mãi. Thành công học thuật không nên đi kèm với sự mất kết nối với bản thân.`,
            role: "Lãnh đạo Chiến lược",
            roleDescription: "Định hình triết lý giáo dục, phát triển chương trình đào tạo và đảm bảo chất lượng dịch vụ",
            quote: "Giáo dục chất lượng là chìa khóa mở ra cánh cửa cơ hội cho thế hệ trẻ",
            achievements: [
              "Xây dựng chương trình mentoring toàn diện đầu tiên tại Việt Nam",
              "Đào tạo thành công 1000+ học sinh vào các trường đại học top đầu",
              "Nhận giải thưởng 'Nhà giáo dục tiên phong' 2023",
              "Xuất bản nghiên cứu về 'Giáo dục toàn diện trong kỷ nguyên số'"
            ],
            image: "/images/founder1.jpg"
          },
          {
            name: "Ms. Ashley",
            title: "Đồng sáng lập & Cố vấn Chiến lược",
            education: "Tiến sĩ Tâm lý Giáo dục - Đại học Stanford",
            background: "Chuyên gia về phát triển chương trình đào tạo và tư vấn hướng nghiệp quốc tế",
            motivation: "Tôi tin rằng mỗi học sinh đều có tiềm năng đặc biệt cần được khai phá và phát triển đúng hướng",
            personalStory: `Trong suốt hành trình nghiên cứu và giảng dạy, tôi gặp nhiều học sinh tài năng nhưng thiếu định hướng. Họ có thể thành công trong các kỳ thi, nhưng khi được hỏi "Con muốn trở thành ai?", nhiều em không biết trả lời. AGUA ra đời để giúp các em không chỉ biết cách học, mà còn biết cách sống và tìm thấy ý nghĩa thực sự của giáo dục.`,
            role: "Cố vấn Học thuật",
            roleDescription: "Phát triển phương pháp giảng dạy, đào tạo đội ngũ mentor và nghiên cứu cải tiến chương trình",
            quote: "Đầu tư vào giáo dục là đầu tư vào tương lai bền vững",
            achievements: [
              "Phát triển hệ thống đánh giá năng lực toàn diện",
              "Đào tạo chuyên môn cho 200+ mentor",
              "Tác giả của 5 nghiên cứu về giáo dục quốc tế",
              "Cố vấn cho các tổ chức giáo dục tại Mỹ và châu Âu"
            ],
            image: "/images/Mentor1.png"
          }
        ]
      },

      approachBadge: "Sứ mệnh & Tầm nhìn",
      approachQuote: "Chúng tôi không chỉ xây dựng một tổ chức giáo dục, mà còn kiến tạo một hệ sinh thái học tập toàn diện",

      // Core Purpose Section
      corePurpose: {
        title: "Lý Do Sáng Lập",
        subtitle: "Tại sao AGUA được tạo ra?",
        sections: [
          {
            title: "Giải Quyết Khoảng Trống Giáo Dục",
            description: "Nhận thấy sự thiếu hụt trong việc kết nối giáo dục Việt Nam với thế giới, chúng tôi tạo ra cầu nối vững chắc giúp học sinh tiếp cận nền giáo dục quốc tế mà không mất đi bản sắc văn hóa.",
          },
          {
            title: "Cá Nhân Hóa Triệt Để",
            description: "Mỗi học sinh là một thế giới riêng biệt. AGUA ra đời để mang đến lộ trình học tập được thiết kế riêng cho từng cá nhân, phát huy tối đa tiềm năng của mỗi người.",
          },
          {
            title: "Phát Triển Toàn Diện",
            description: "Giáo dục không chỉ là điểm số và bằng cấp. Chúng tôi hướng đến sự phát triển cân bằng giữa học thuật, kỹ năng sống và hạnh phúc cá nhân.",
          },
          {
            title: "Kết Nối Bền Vững",
            description: "Tạo dựng mạng lưới cựu học sinh toàn cầu, nơi mọi người hỗ trợ lẫn nhau và cùng phát triển, tạo ra tác động tích cực cho cộng đồng.",
          }
        ]
      },

      philosophyTitle: "Triết lý Giáo dục ",
      philosophyTitleHighlight: "Cốt lõi",
      philosophyText: "AGUA được xây dựng trên nền tảng triết lý 'Giáo dục hướng đến Hạnh phúc'. Chúng tôi tin rằng thành công học thuật và hạnh phúc cá nhân không phải là hai mục tiêu đối lập, mà là hai yếu tố bổ trợ cho nhau trong hành trình phát triển của mỗi cá nhân.",
      philosophyDetails: [
        "Học để hiểu bản thân, không chỉ để lấy điểm số",
        "Phát triển tư duy phản biện và sáng tạo",
        "Xây dựng kỹ năng sống cần thiết cho thế kỷ 21",
        "Kết nối học tập với mục đích sống cá nhân",
        "Tạo dựng cộng đồng hỗ trợ và phát triển cùng nhau"
      ],

      impactSection: {
        title: "Tác Động & Thành Tựu",
        subtitle: "Những Con Số Biết Nói",
        metrics: [
          { number: "5+", label: "Năm hoạt động" },
          { number: "1500+", label: "Học sinh được đào tạo" },
          { number: "95%", label: "Tỷ lệ hài lòng" },
          { number: "50+", label: "Trường đối tác quốc tế" },
          { number: "30+", label: "Quốc gia có học sinh AGUA" },
          { number: "98%", label: "Tỷ lệ thành công visa" }
        ],
        qualitativeImpact: [
          "92% học sinh cho biết tự tin hơn sau khóa học",
          "85% học sinh tìm được đam mê và định hướng rõ ràng",
          "78% phụ huynh thay đổi quan điểm về thành công giáo dục"
        ],
        visionFuture: "Trong 5 năm tới, AGUA hướng đến trở thành tổ chức giáo dục hàng đầu Đông Nam Á, mở rộng sang 10 quốc gia và đào tạo 10,000+ học sinh với chất lượng quốc tế, đồng thời xuất bản nghiên cứu đột phá về giáo dục toàn diện."
      }
    },
    en: {
      heroTitle: "The Founder's Vision for ",
      heroTitleHighlight: "AGUA International Education",
      heroSubtitle: "Creating fundamental change in education - From grades to holistic development",

      // Education Gap Analysis - Article Style
      educationGap: {
        title: "The Real Gap in High-End Education",
        subtitle: "An insider's perspective analysis",
        sections: [
          {
            title: "The Fundamental Problem: Chasing Grades, Forgetting People",
            content: `After 15 years working in international education, I've observed a troubling reality: The current education system is producing "grade champions" but failing to develop well-rounded individuals. Students spend 12-16 hours daily studying, test-prepping, and doing homework, yet have virtually no time to explore themselves, develop passions, or build meaningful relationships.`,
            stats: [
              "70% of students feel excessive academic stress and pressure",
              "Only 30% of students clearly know their true passions and goals",
              "85% of parents measure success through grades and university rankings"
            ]
          },
          {
            title: "The Distortion in Defining Success",
            content: `We live in a society where "success" is measured by superficial metrics: high GPA, prestigious universities, foreign degrees. But we forget that what truly creates a happy and meaningful life are: adaptability, critical thinking, communication skills, empathy, and most importantly - understanding one's own values.`,
            insight: "High grades don't guarantee happiness, prestigious universities don't guarantee life success."
          },
          {
            title: "The Gap Between Education and Real Life",
            content: `As a Harvard alumna and former Stanford instructor, I've witnessed countless academically excellent students who feel lost in life. They can solve the most complex equations but don't know how to build healthy relationships. They can write outstanding academic papers but cannot express their emotions. This is precisely the gap that traditional education leaves unfilled.`,
            quote: "Education is not the filling of a pail, but the lighting of a fire of curiosity and lifelong learning passion."
          },
          {
            title: "The Necessity of Holistic Education",
            content: `AGUA was born from this exact need. We believe that authentic education must include four pillars: Academic Excellence, Personal Development, Life Skills, and Community Connection. Every student needs preparation not just for the next exam, but for life's real challenges - from time management and stress handling to building networks and finding life purpose.`,
            pillars: [
              "Academics: Not just grades, but lifelong learning mindset",
              "Personal: Discovering identity, values, and personal passions",
              "Skills: From communication to leadership, problem-solving to creative thinking",
              "Community: Building supportive networks and positive contribution"
            ]
          }
        ],
        conclusion: {
          title: "Vision for the Future",
          content: `AGUA is not just another test prep center or study abroad consultancy. We are a comprehensive educational ecosystem where every student is recognized as a unique individual with infinite potential. Our goal isn't just getting students into the most prestigious universities, but equipping them with the tools, skills, and mindset needed to build a happy, meaningful, and successful life in their own way.`,
          finalThought: "True success isn't measured by diplomas on the wall, but by satisfaction in the heart and positive impact on the world around us."
        }
      },

      // Founders Section (Giữ nguyên 2 founder)
      foundersSection: {
        title: "Founding Team",
        subtitle: "The Architects of Educational Future",
        description: "The individuals who laid the foundation and defined AGUA's educational philosophy, sharing a common vision of quality and humane education",
        founders: [
          {
            name: "Ms. Giang Nguyen",
            title: "Founder & Academic Director",
            education: "PhD in International Education - Harvard University",
            background: "15+ years experience in international education, having worked at world-leading educational organizations",
            motivation: "From my personal study abroad experience, I recognized the necessity of a comprehensive support system for Vietnamese students on their international integration journey",
            personalStory: `I remember one of my students - a very intelligent girl with excellent grades, accepted to Harvard with full scholarship. But in our conversation before she left, she asked me: "Teacher, I don't know what I really like. I only know how to study for good grades." That statement haunted me. Academic success shouldn't come with disconnection from oneself.`,
            role: "Strategic Leader",
            roleDescription: "Shaping educational philosophy, developing training programs, and ensuring service quality",
            quote: "Quality education is the key that opens doors of opportunity for the young generation",
            achievements: [
              "Built Vietnam's first comprehensive mentoring program",
              "Successfully trained 1000+ students into top universities",
              "Received 'Pioneering Educator' award 2023",
              "Published research on 'Holistic Education in the Digital Era'"
            ],
            image: "/images/founder1.jpg"
          },
          {
            name: "Ms. Ashley",
            title: "Co-founder & Strategic Advisor",
            education: "PhD in Educational Psychology - Stanford University",
            background: "Expert in curriculum development and international career counseling",
            motivation: "I believe every student has special potential that needs to be discovered and developed in the right direction",
            personalStory: `Throughout my research and teaching journey, I've met many talented students who lack direction. They can succeed in exams, but when asked "Who do you want to become?", many don't know how to answer. AGUA was born to help students not only know how to study, but also how to live and find the true meaning of education.`,
            role: "Academic Advisor",
            roleDescription: "Developing teaching methods, training mentor teams, and researching program improvements",
            quote: "Investing in education is investing in a sustainable future",
            achievements: [
              "Developed comprehensive competency assessment system",
              "Trained 200+ mentors professionally",
              "Author of 5 research papers on international education",
              "Advisor to educational organizations in the US and Europe"
            ],
            image: "/images/Mentor1.png"
          }
        ]
      },

      approachBadge: "Mission & Vision",
      approachQuote: "We're not just building an educational institution, but creating a comprehensive learning ecosystem",

      // Core Purpose Section
      corePurpose: {
        title: "The Founding Purpose",
        subtitle: "Why AGUA Was Created?",
        sections: [
          {
            title: "Addressing Educational Gaps",
            description: "Recognizing the gap in connecting Vietnamese education with the world, we built a solid bridge helping students access international education without losing cultural identity.",
          },
          {
            title: "Thorough Personalization",
            description: "Every student is a unique world. AGUA was born to provide individually designed learning pathways that maximize each person's potential.",
          },
          {
            title: "Holistic Development",
            description: "Education is not just about grades and degrees. We aim for balanced development between academics, life skills, and personal happiness.",
          },
          {
            title: "Sustainable Connections",
            description: "Building a global alumni network where people support each other and grow together, creating positive impact for the community.",
          }
        ]
      },

      philosophyTitle: "Core Educational ",
      philosophyTitleHighlight: "Philosophy",
      philosophyText: "AGUA is built on the philosophy of 'Education Towards Happiness'. We believe that academic success and personal happiness are not opposing goals, but complementary factors in each individual's development journey.",
      philosophyDetails: [
        "Learn to understand yourself, not just to get grades",
        "Develop critical and creative thinking",
        "Build essential 21st century life skills",
        "Connect learning with personal life purpose",
        "Create a supportive community that grows together"
      ],

      impactSection: {
        title: "Impact & Achievements",
        subtitle: "Numbers That Speak",
        metrics: [
          { number: "5+", label: "Years of operation" },
          { number: "1500+", label: "Students trained" },
          { number: "95%", label: "Satisfaction rate" },
          { number: "50+", label: "International partner schools" },
          { number: "30+", label: "Countries with AGUA students" },
          { number: "98%", label: "Visa success rate" }
        ],
        qualitativeImpact: [
          "92% of students report increased confidence after our program",
          "85% of students discover clear passions and direction",
          "78% of parents change their perspective on educational success"
        ],
        visionFuture: "In the next 5 years, AGUA aims to become a leading educational organization in Southeast Asia, expanding to 10 countries and training 10,000+ students with international quality, while publishing breakthrough research on holistic education."
      }
    }
  };

  const t = translations[language] || translations.vi;

  return (
    <div className="manrope-regular">
      <div className="pt-16 md:pt-20"></div>
      <div className="founder-page">
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

        {/* Education Gap Analysis - Article Style */}
        <section 
          ref={educationGapRef}
          className="py-12 sm:py-16 md:py-20 bg-white"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              {/* Article Header */}
              <div className="text-center mb-12 sm:mb-16">
                <div className="inline-flex items-center bg-[#0974B6] text-white px-6 py-2 rounded-full manrope-bold text-sm sm:text-base mb-4">
                  {language === "vi" ? "Bài viết chuyên sâu" : "In-depth Article"}
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl manrope-bold text-gray-800 mb-4">
                  {t.educationGap.title}
                </h2>
                <p className="text-gray-600 text-lg">
                  {t.educationGap.subtitle}
                </p>
              </div>

              {/* Article Content */}
              <div className="prose prose-lg max-w-none">
                {t.educationGap.sections.map((section, index) => (
                  <div key={index} className="mb-12 sm:mb-16">
                    <h3 className="text-xl sm:text-2xl md:text-3xl manrope-bold text-[#0974B6] mb-6">
                      {section.title}
                    </h3>
                    
                    <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                      {section.content}
                    </p>

                    {/* Stats Section */}
                    {section.stats && (
                      <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 mb-6">
                        <h4 className="manrope-bold text-gray-800 mb-4">
                          {language === "vi" ? "Số liệu thực tế:" : "Real Statistics:"}
                        </h4>
                        <ul className="space-y-3">
                          {section.stats.map((stat, idx) => (
                            <li key={idx} className="flex items-start">
                              <div className="w-2 h-2 bg-[#0974B6] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                              <span className="text-gray-700">{stat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Insight Section */}
                    {section.insight && (
                      <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-100 mb-6">
                        <div className="flex items-start">
                          <svg className="w-6 h-6 text-yellow-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                          </svg>
                          <p className="text-gray-800 italic">
                            {section.insight}
                          </p>
                        </div>
                      </div>
                    )}

                    {/* Quote Section */}
                    {section.quote && (
                      <div className="border-l-4 border-[#0974B6] pl-6 py-3 my-6">
                        <p className="text-gray-700 italic text-lg">
                          "{section.quote}"
                        </p>
                        <p className="text-gray-500 text-sm mt-2">
                          — {language === "vi" ? "Trích từ nhật ký giảng dạy" : "From teaching journal"}
                        </p>
                      </div>
                    )}

                    {/* Pillars Section */}
                    {section.pillars && (
                      <div className="grid md:grid-cols-2 gap-4 mt-6">
                        {section.pillars.map((pillar, idx) => (
                          <div key={idx} className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                            <div className="flex items-center mb-2">
                              <div className="w-3 h-3 bg-[#0974B6] rounded-full mr-3"></div>
                              <span className="manrope-bold text-gray-800">{pillar}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}

                {/* Article Conclusion */}
                <div className="mt-16 bg-gradient-to-r from-blue-50 to-white p-8 rounded-2xl border border-blue-100">
                  <h3 className="text-2xl sm:text-3xl manrope-bold text-[#0974B6] mb-6">
                    {t.educationGap.conclusion.title}
                  </h3>
                  
                  <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                    {t.educationGap.conclusion.content}
                  </p>

                  <div className="bg-white p-6 rounded-xl border border-gray-200 mt-8">
                    <div className="flex items-start">
                      <svg className="w-8 h-8 text-[#0974B6] mr-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <div>
                        <p className="text-gray-800 text-lg italic">
                          "{t.educationGap.conclusion.finalThought}"
                        </p>
                        <p className="text-gray-600 text-sm mt-4">
                          — {t.foundersSection.founders[0].name}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Purpose Section */}
        <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-white to-blue-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16 md:mb-20">
              <div className="inline-flex items-center bg-[#0974B6] text-white px-6 py-2 rounded-full manrope-bold text-sm sm:text-base mb-4">
                {t.corePurpose.title}
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl manrope-bold text-gray-800 mb-4">
                {t.corePurpose.subtitle}
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-16">
              {t.corePurpose.sections.map((section, index) => (
                <div 
                  key={index} 
                  className="bg-gradient-to-b from-blue-50 to-white rounded-xl p-6 sm:p-8 border border-blue-100 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="text-4xl mb-4">{section.icon}</div>
                  <h3 className="text-xl font-bold text-[#0974B6] mb-3 manrope-bold">
                    {section.title}
                  </h3>
                  <p className="text-gray-600 manrope-regular">
                    {section.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Founders Section - Giữ nguyên 2 founder */}
        <section 
          ref={foundersRef}
          className="py-12 sm:py-16 md:py-20 bg-white"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16 md:mb-20">
              <div className="inline-flex items-center bg-gradient-to-r from-[#0974B6] to-blue-500 text-white px-6 py-2 rounded-full manrope-bold text-sm sm:text-base mb-4">
                {t.foundersSection.title}
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl manrope-bold text-gray-800 mb-4">
                {t.foundersSection.subtitle}
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto text-sm sm:text-base md:text-lg">
                {t.foundersSection.description}
              </p>
            </div>

            {/* Founder Cards - 2 trong 1 hàng */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 max-w-6xl mx-auto">
              {t.foundersSection.founders.map((founder, index) => (
                <div
                  key={index}
                  className="group relative bg-gradient-to-br from-blue-50 to-white rounded-xl sm:rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-blue-100"
                >
                  {/* Founder Badge */}
                  <div className="absolute top-4 right-4 z-10">
                    <div className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-3 py-1 rounded-full text-xs manrope-bold">
                      {index === 0 ? (language === "vi" ? "Nhà sáng lập" : "Founder") : (language === "vi" ? "Đồng sáng lập" : "Co-founder")}
                    </div>
                  </div>

                  {/* Founder Image */}
                  <div className="relative h-56 sm:h-64 md:h-72 overflow-hidden">
                    <img
                      src={founder.image}
                      alt={founder.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 via-transparent to-transparent"></div>

                    {/* Founder Info Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white">
                      <h3 className="manrope-bold text-xl sm:text-2xl mb-1">
                        {founder.name}
                      </h3>
                      <p className="text-blue-200 manrope-medium text-sm sm:text-base">
                        {founder.title}
                      </p>
                    </div>
                  </div>

                  {/* Founder Details */}
                  <div className="p-6 sm:p-8">
                    <div className="mb-6">
                      {/* Education */}
                      <div className="flex items-center mb-3">
                        <svg
                          className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 mr-2 flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 14l9-5-9-5-9 5 9 5z"
                          />
                        </svg>
                        <span className="manrope-medium text-gray-900 text-sm sm:text-base">
                          {founder.education}
                        </span>
                      </div>

                      {/* Background */}
                      <div className="mb-4">
                        <p className="text-gray-600 manrope-regular text-sm">
                          {founder.background}
                        </p>
                      </div>

                      {/* Motivation */}
                      <div className="bg-blue-100 p-4 sm:p-5 rounded-lg border border-blue-200 mb-4">
                        <div className="flex items-center mb-2">
                          <svg
                            className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 mr-2 flex-shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                            />
                          </svg>
                          <span className="manrope-bold text-blue-700 text-sm sm:text-base">
                            {founder.role}
                          </span>
                        </div>
                        <p className="text-blue-800 manrope-regular text-xs sm:text-sm">
                          {founder.roleDescription}
                        </p>
                      </div>

                      {/* Personal Story */}
                      <div className="mb-4">
                        <h4 className="manrope-bold text-gray-900 text-sm sm:text-base mb-2">
                          {language === "vi" ? "Câu chuyện cá nhân" : "Personal Story"}
                        </h4>
                        <p className="text-gray-600 italic manrope-regular text-xs sm:text-sm">
                          "{founder.personalStory}"
                        </p>
                      </div>

                      {/* Achievements */}
                      <div className="mb-6">
                        <h4 className="manrope-bold text-gray-900 text-sm sm:text-base mb-2">
                          {language === "vi" ? "Thành tựu nổi bật" : "Key Achievements"}
                        </h4>
                        <ul className="space-y-2">
                          {founder.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex items-start">
                              <div className="w-1.5 h-1.5 bg-[#0974B6] rounded-full mt-1.5 mr-3 flex-shrink-0"></div>
                              <span className="text-gray-600 manrope-regular text-xs sm:text-sm">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Quote */}
                    <div className="pt-6 border-t border-blue-100">
                      <div className="flex items-start">
                        <svg
                          className="w-4 h-4 text-blue-400 mr-2 mt-1 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <p className="text-gray-600 italic text-xs sm:text-sm manrope-light">
                          "{founder.quote}"
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Impact & Achievements */}
        <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-white to-blue-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {/* Future Vision */}
            <div className="bg-gradient-to-r from-[#0974B6] to-blue-600 rounded-2xl p-6 sm:p-8 md:p-10 text-white">
              <h3 className="text-xl sm:text-2xl md:text-3xl manrope-bold mb-4">
                {language === "vi" ? "Tầm nhìn tương lai" : "Future Vision"}
              </h3>
              <p className="text-blue-100 text-lg leading-relaxed">
                {t.impactSection.visionFuture}
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default FounderPage;