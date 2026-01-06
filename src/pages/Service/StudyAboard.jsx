import React, { useState } from "react";
import {
  Calendar,
  CheckCircle,
  BookOpen,
  Globe,
  Home,
  DollarSign,
  Heart,
  Users,
  Plane,
  GraduationCap,
  Briefcase,
  FileText,
  Shield,
  MapPin,
  Clock,
  AlertCircle,
  ThumbsUp,
  MessageCircle,
  Share2,
  Download,
  Printer,
  Bookmark,
  ExternalLink,
  Building,
  CreditCard,
  Wifi,
  Coffee,
  Utensils,
  Smartphone,
  Sun,
  Cloud,
  Star,
  Target,
} from "lucide-react";

const StudyAbroadPreparation = () => {
  const [savedSections, setSavedSections] = useState([]);

  const content = {
    title:
      "The Unspoken Truth About Study Abroad Preparation: A Comprehensive Guide Based on Real Experience",
    subtitle:
      "After five transformative years living, studying, and working across three continents, here's the brutally honest playbook I wish someone had handed me before I boarded that one-way flight",
    author: "Dr. Minh Anh Nguyen",
    authorBio:
      "MBA, University of Melbourne | Former International Student in USA, Australia, Singapore | Education Consultant",
    meta: "Published January 20, 2024 • 15 min read • 8,742 views • Last updated February 15, 2024",

    sections: [
      {
        type: "intro",
        content: `The departure board at Tan Son Nhat Airport flickered with destinations I'd only dreamed of. I stood there in 2018 with two suitcases that contained my entire life, a heart pounding with equal parts excitement and dread, and a naive belief that my meticulous preparation had covered everything. Three weeks later, crying in a Melbourne supermarket aisle because I couldn't find the instant noodles, I realized how wrong I was. Study abroad preparation isn't just about documents and deposits—it's about preparing a version of yourself who can survive, thrive, and transform in a foreign ecosystem. This comprehensive guide distills five years of hard-won wisdom across three countries, supplemented by interviews with over 100 international students, into the honest playbook you won't find in university brochures.`,
      },
      {
        type: "philosophy",
        title: "The Mindset Shift: From Tourist to Temporary Citizen",
        icon: Globe,
        content: `The single most critical preparation happens between your ears. Universities prepare you academically, but nobody prepares you for the psychological recalibration required. You're not visiting—you're establishing a temporary life. This shift in identity requires deliberate cultivation.`,
        extended: [
          `The "observer" to "participant" transition: For the first three months, you'll naturally observe cultural differences as an outsider. The breakthrough comes when you stop observing and start participating authentically. This means joining conversations about local politics you don't fully understand, trying hobbies that don't exist back home, and making mistakes publicly.`,
          `Managing expectations vs. reality: Instagram shows picturesque libraries and international friend groups. Reality involves administrative nightmares, lonely Sundays, and cultural misunderstandings that leave you exhausted. Embrace both. The picturesque moments are real, but so are the difficult ones.`,
          `The grief of leaving and the guilt of changing: You will change profoundly. Your values, perspectives, and even personality will shift. This can create distance from people back home who expect you to return unchanged. Acknowledge this transformation as growth, not betrayal.`,
        ],
      },
      {
        type: "section",
        title: "Phase 1: Pre-Departure (6-12 Months Out) - The Foundation",
        icon: Calendar,
        content: `This phase is about building your runway. Most mistakes happen here because people underestimate the time required for thorough preparation.`,
        subsections: [
          {
            title: "Academic & Institutional Preparation",
            content: `Beyond transcripts and test scores, understand the pedagogical culture of your destination. Australian universities emphasize independent research, American institutions value class participation, Singaporean schools blend Eastern and Western approaches. Contact current students—not just through formal channels but through LinkedIn or department Facebook groups. Ask about unspoken expectations: Is attendance truly mandatory? How competitive are group projects? What's the actual workload versus what's advertised?`,
          },
          {
            title: "Financial Architecture",
            content: `Create three separate financial buffers: 1) Immediate settlement fund (3 months of living expenses untouched for emergencies), 2) Operational account (month-to-month expenses), 3) Opportunity fund (for travel, networking events, unexpected opportunities). Research banking options: many countries offer special student accounts with no fees. Understand tax implications—some student visas allow limited work but require tax filing.`,
          },
          {
            title: "Healthcare Navigation System",
            content: `Health insurance is mandatory but often inadequate. Understand what OSHC (Overseas Student Health Cover) or equivalent actually covers. Mental health services are critical—research counseling options at your university and local providers. Compile a medical dossier: vaccination records, prescription details (with generic names), allergy information, and a brief medical history in English.`,
          },
        ],
      },
      {
        type: "section",
        title: "Phase 2: The First 90 Days - Survival & Navigation",
        icon: MapPin,
        content: `The initial quarter determines your entire experience. This is when most students experience their lowest points and highest learning curves.`,
        subsections: [
          {
            title: "The Practicalities of Existence",
            content: `Housing: Temporary accommodation for the first two weeks gives you time to inspect apartments in person. Never rent sight-unseen. Understand tenant rights in your new country—they differ dramatically. Transportation: Master the public system within week one. Download local apps, understand zoning, purchase appropriate passes. Communication: Get a local number immediately. Research the best plans for international calls to back home.`,
          },
          {
            title: "Building Your Initial Support Network",
            content: `Your first friends will likely be other international students—this is natural but insufficient. Deliberately cultivate relationships with: 1) Local students (join clubs unrelated to academics), 2) University staff (administrators know everything), 3) Neighborhood connections (your barista, grocer, librarian). These relationships become your cultural translators.`,
          },
          {
            title: "Administrative Onboarding",
            content: `Complete these in your first week: 1) University registration, 2) Local police registration (if required), 3) Bank account opening, 4) Public transportation card, 5) SIM card registration, 6) University health center visit. Create a dedicated folder—physical and digital—for all documentation.`,
          },
        ],
      },
      {
        type: "story",
        title: "The Library Incident: When Systems Fail",
        content: `During my second month in Melbourne, I received a $200 fine for a library book I'd returned. The automated system had malfunctioned. After three frustrating visits to the library desk where I was told "the system shows it's not returned," I learned to navigate Australian bureaucratic culture: persistence with politeness, escalating appropriately, and documenting everything. I requested system logs, took photos of the return slot, and emailed with clear timestamps. The fine was waived, but the real lesson was understanding that systems everywhere have human gatekeepers. Your ability to navigate bureaucracy—with cultural awareness—is as important as your academic ability.`,
      },
      {
        type: "section",
        title: "Phase 3: Months 3-9 - Integration & Optimization",
        icon: Users,
        content: `Once survival is secured, the real transformation begins. This phase is about moving from existing to thriving.`,
        subsections: [
          {
            title: "Academic Excellence in Foreign Soil",
            content: `Western academic writing differs dramatically from Asian styles. Seek writing workshops early. Understand marking rubrics—what earns an A in your home country might be a B elsewhere. Office hours are not just for struggling students; they're relationship-building opportunities with professors who can become mentors and future recommenders. Form study groups with diverse members—different cultural approaches to problem-solving will expand your thinking.`,
          },
          {
            title: "Professional Development While International",
            content: `Start career planning immediately. International students face unique hurdles: visa restrictions, employer skepticism, cultural gaps in interview styles. Attend career fairs even in your first semester. Build a "global-ready" resume that highlights cross-cultural competencies. Secure internships early—competition is fierce. Network intentionally: alumni events, industry talks, LinkedIn outreach with personalized messages.`,
          },
          {
            title: "Cultural Fluency Development",
            content: `Move beyond superficial understanding. Learn the historical context of current social dynamics. Read local newspapers. Understand humor styles—what's considered funny differs dramatically. Participate in local traditions, even minor ones. The depth of your cultural understanding directly correlates with the richness of your experience.`,
          },
        ],
      },
      {
        type: "section",
        title: "Phase 4: The Final Stretch - Consolidation & Transition",
        icon: GraduationCap,
        content: `The last phase of your study abroad journey is about harvesting value and planning the next transition. This is often neglected, leaving students unprepared for re-entry or next steps.`,
        subsections: [
          {
            title: "Academic Closure with Foresight",
            content: `Maintain relationships with professors—they're your bridge to academic and professional networks. Request recommendation letters while your work is fresh in their minds. Complete all administrative checkouts: library returns, housing deposits, tax documentation. Create a portfolio of your best work across contexts.`,
          },
          {
            title: "Networking for the Next Chapter",
            content: `Your international network is your most valuable asset. Nurture these relationships before departure. Create a "departure roadmap" of connections to maintain. Consider joining alumni associations immediately. Document your cross-cultural competencies specifically for future employers.`,
          },
          {
            title: "The Re-Entry Paradox",
            content: `Returning home can be more disorienting than leaving. You've changed; home hasn't. Prepare for reverse culture shock. Plan a gradual reintegration. Find communities who understand your experience. Your international perspective is now a superpower—learn to translate it for different audiences.`,
          },
        ],
      },
      {
        type: "tools",
        title: "The Essential Toolkit: Digital & Analog Resources",
        icon: Smartphone,
        content: `These are the specific tools that made my journey manageable, tested across multiple countries.`,
        categories: [
          {
            name: "Financial Management",
            items: [
              {
                name: "Wise (formerly TransferWise)",
                purpose: "Lowest-cost international transfers",
              },
              {
                name: "Pocketbook (AU) / Mint (US)",
                purpose: "Automated budgeting and expense tracking",
              },
              {
                name: "Splitwise",
                purpose: "Managing shared expenses with housemates",
              },
            ],
          },
          {
            name: "Academic & Productivity",
            items: [
              {
                name: "Zotero / Mendeley",
                purpose: "Reference management for research papers",
              },
              {
                name: "Notion or Obsidian",
                purpose: "Centralized knowledge management system",
              },
              {
                name: "Grammarly Premium",
                purpose: "Adapting writing style to academic standards",
              },
            ],
          },
          {
            name: "Cultural Navigation",
            items: [
              {
                name: "Meetup & Eventbrite",
                purpose: "Finding local events and interest groups",
              },
              {
                name: "Citymapper > Google Maps",
                purpose: "Superior public transport navigation",
              },
              {
                name: "Tandem / HelloTalk",
                purpose: "Language exchange and cultural learning",
              },
            ],
          },
        ],
      },
      {
        type: "case_studies",
        title: "Comparative Case Studies: Sydney vs. Berlin vs. Singapore",
        icon: Building,
        content: `Each destination presents unique challenges and opportunities. Here's what you won't find in official guides.`,
        studies: [
          {
            location: "Sydney, Australia",
            strengths: [
              "Strong student protections",
              "Excellent public health system",
              "Outdoor lifestyle",
            ],
            challenges: [
              "Extremely high cost of living",
              "Competitive housing market",
              "Distance from other countries",
            ],
            insider_tip:
              "The 'share house' culture is real. Facebook groups like 'Fairy Floss Real Estate' are essential for finding accommodation. Bond claims are heavily regulated—document everything.",
          },
          {
            location: "Berlin, Germany",
            strengths: [
              "Low tuition fees",
              "Central European location",
              "Vibrant international community",
            ],
            challenges: [
              "Bureaucratic complexity",
              "Language barrier beyond university",
              "Housing crisis",
            ],
            insider_tip:
              "Anmeldung (registration) is mandatory within 14 days. Find housing first, everything else depends on it. German academic culture values independence highly—less hand-holding than other systems.",
          },
          {
            location: "Singapore",
            strengths: [
              "Academic excellence",
              "Strategic Asian hub",
              "Efficiency and safety",
            ],
            challenges: [
              "High pressure environment",
              "Strict regulations",
              "Limited physical space",
            ],
            insider_tip:
              "Network extensively within your department. Singapore runs on relationships. Understand the different cultural expectations between local and international students.",
          },
        ],
      },
      {
        type: "conclusion",
        title: "The Alchemy of Transformation",
        content: `Study abroad is fundamentally an alchemical process. You enter as one person and emerge as another. The pressure of foreignness, the loneliness of distance, the challenge of navigation—these are the fires that transform base metal into gold. But this transformation isn't automatic. It requires intention, resilience, and the courage to be uncomfortable for extended periods.

        Your greatest resource won't be your savings or your academic record—it will be your adaptability. The ability to learn new systems, communicate across cultural gaps, and rebuild your identity in foreign soil. This skill set, once developed, becomes permanent. You'll carry it into your career, relationships, and future challenges.

        Prepare meticulously for the practicalities, but leave room for the unexpected. The most valuable lessons often come from planned detours and spontaneous conversations. Document your journey—not just for social media, but for your future self. The person you're becoming will want to remember how it felt to be in process.

        Finally, extend grace—to yourself when you make mistakes, to others when cultural collisions occur, and to the process itself. Transformation is messy, nonlinear, and deeply personal. Your journey won't look like anyone else's, and that's exactly as it should be.

        The plane ticket is just the beginning. The real journey starts when you step off it, into a world that will challenge and change you in ways you cannot yet imagine. Embrace it all.`,
      },
    ],

    authorNote:
      "This article synthesizes five years of lived experience across three countries, interviews with 127 international students from 42 countries, and consultation with university international student offices. It represents the realities often omitted from official channels. For deeper discussion or specific questions, I welcome connection on LinkedIn or through my educational consultancy.",

    footer: {
      tags: [
        "International Education",
        "Cross-Cultural Adaptation",
        "Student Mobility",
        "Global Citizenship",
        "Academic Migration",
        "Cultural Intelligence",
        "Expat Life",
        "Educational Transformation",
      ],
      shareText: "Share this comprehensive guide with future global citizens",
      relatedArticles: [
        "Navigating Post-Study Work Visas: A Country-by-Country Analysis",
        "The Hidden Curriculum: What International Students Wish They Knew About Western Academia",
        "Building a Global Career from Your Dorm Room: Strategic Networking for Students",
        "Mental Health Across Borders: Maintaining Wellness While Studying Abroad",
        "The Economics of International Education: ROI Analysis for Different Destinations",
      ],
      disclaimer:
        "Experiences vary by individual, institution, and destination. This guide represents common patterns but cannot capture every unique circumstance. Always verify official requirements with relevant authorities.",
    },
  };

  const t = content;

  const toggleSave = (index) => {
    if (savedSections.includes(index)) {
      setSavedSections(savedSections.filter((i) => i !== index));
    } else {
      setSavedSections([...savedSections, index]);
    }
  };

  return (
    <article className="min-h-screen bg-white max-w-5xl mx-auto px-4 md:px-8 py-32 font-sans">
      {/* Article Header */}
      <header className="mb-16 border-b border-gray-200 pb-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
          <div className="flex items-center space-x-4 mb-6 md:mb-0">
            <div>
              <p className="font-bold text-gray-900 text-lg">{t.author}</p>
              <p className="text-sm text-gray-600">{t.authorBio}</p>
            </div>
          </div>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight tracking-tight">
          {t.title}
        </h1>

        <p className="text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed max-w-4xl">
          {t.subtitle}
        </p>

        <div className="flex flex-wrap items-center gap-4 text-gray-500 text-sm">
          <div className="flex items-center">
            <Calendar className="w-4 h-4 mr-2" />
            <span>{t.meta.split(" • ")[0]}</span>
          </div>
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-2" />
            <span>{t.meta.split(" • ")[1]}</span>
          </div>
          <div className="flex items-center">
            <Eye className="w-4 h-4 mr-2" />
            <span>{t.meta.split(" • ")[2]}</span>
          </div>
          <div className="flex items-center">
            <RefreshCw className="w-4 h-4 mr-2" />
            <span>{t.meta.split(" • ")[3]}</span>
          </div>
        </div>
      </header>

      {/* Featured Image with Caption */}
      <div className="mb-16 relative">
        <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
          <img
            src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Airport terminal with departure board"
            className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        </div>
        <div className="mt-4 flex justify-between items-start">
          <p className="text-sm text-gray-500 italic max-w-4xl">
            "The journey of international education transforms not just careers
            but identities—each airport departure lounge marks the beginning of
            a new self."
          </p>
        </div>
      </div>

      {/* Article Content */}
      <div className="prose prose-lg max-w-none">
        {t.sections.map((section, index) => (
          <div key={index} className={`mb-20 ${index === 0 ? "mt-12" : ""}`}>
            {/* Introduction */}
            {section.type === "intro" && (
              <div className="relative">
                <div className="absolute -left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-purple-500 hidden md:block"></div>
                <div className="text-xl leading-relaxed text-gray-700 space-y-6">
                  {section.content.split(". ").map((sentence, i, arr) => (
                    <p
                      key={i}
                      className={
                        i === 0
                          ? "first-letter:text-6xl first-letter:font-bold first-letter:text-gray-900 first-letter:mr-3 first-letter:float-left first-letter:leading-none"
                          : ""
                      }
                    >
                      {i === 0 ? sentence : sentence}
                      {i < arr.length - 1 ? "." : ""}
                    </p>
                  ))}
                </div>
              </div>
            )}

            {/* Philosophy Section */}
            {section.type === "philosophy" && (
              <section className="relative bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12 mb-16 border border-blue-100">
                <div className="flex items-start mb-10">
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                      {section.title}
                    </h2>
                    <p className="text-xl text-gray-700 mb-8">
                      {section.content}
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {section.extended.map((point, pointIndex) => (
                    <div
                      key={pointIndex}
                      className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition"
                    >
                      <p className="text-gray-700 leading-relaxed">{point}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Main Sections */}
            {(section.type === "section" ||
              section.type === "tools" ||
              section.type === "case_studies") && (
              <section className="relative">
                <div className="sticky top-20 mb-10 z-10">
                  <div className="inline-flex items-center bg-white border border-gray-200 rounded-full px-6 py-3 shadow-sm">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                      {section.title}
                    </h2>
                  </div>
                </div>

                <div className="ml-0 md:ml-4">
                  {section.content && (
                    <p className="text-xl text-gray-700 mb-10 leading-relaxed">
                      {section.content}
                    </p>
                  )}

                  {/* Subsections */}
                  {section.subsections && (
                    <div className="space-y-12 mb-12">
                      {section.subsections.map((sub, subIndex) => (
                        <div key={subIndex} className="relative">
                          <div className="absolute -left-6 top-0 w-3 h-3 bg-blue-500 rounded-full"></div>
                          <h3 className="text-2xl font-bold text-gray-800 mb-4">
                            {sub.title}
                          </h3>
                          <div className="text-gray-700 leading-relaxed space-y-4">
                            {sub.content.split(". ").map((sentence, i, arr) => (
                              <p key={i}>
                                {i === 0 ? sentence : sentence}
                                {i < arr.length - 1 ? "." : ""}
                              </p>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Tools Categories */}
                  {section.categories && (
                    <div className="space-y-10">
                      {section.categories.map((category, catIndex) => (
                        <div
                          key={catIndex}
                          className="bg-gradient-to-r from-gray-50 to-white rounded-xl p-8 border border-gray-200"
                        >
                          <h3 className="text-2xl font-bold text-gray-800 mb-6 pb-4 border-b border-gray-200">
                            {category.name}
                          </h3>
                          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {category.items.map((item, itemIndex) => (
                              <div
                                key={itemIndex}
                                className="bg-white rounded-lg p-5 border border-gray-200 hover:border-blue-300 hover:shadow-md transition"
                              >
                                <div className="flex items-start mb-3">
                                  <div className="bg-blue-100 text-blue-600 rounded-lg p-2 mr-3">
                                    <Star className="w-5 h-5" />
                                  </div>
                                  <h4 className="font-bold text-gray-900 text-lg">
                                    {item.name}
                                  </h4>
                                </div>
                                <p className="text-gray-600 text-sm">
                                  {item.purpose}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Case Studies */}
                  {section.studies && (
                    <div className="space-y-8">
                      {section.studies.map((study, studyIndex) => (
                        <div
                          key={studyIndex}
                          className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition"
                        >
                          <div className="flex flex-col md:flex-row md:items-start justify-between mb-6">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4 md:mb-0">
                              {study.location}
                            </h3>
                            <div className="flex items-center text-sm text-gray-500">
                              <MapPin className="w-4 h-4 mr-2" />
                              Case Study {studyIndex + 1} of{" "}
                              {section.studies.length}
                            </div>
                          </div>

                          <div className="grid md:grid-cols-2 gap-8 mb-8">
                            <div>
                              <h4 className="font-bold text-green-600 mb-3 flex items-center">
                                <CheckCircle className="w-5 h-5 mr-2" />
                                Strengths
                              </h4>
                              <ul className="space-y-2">
                                {study.strengths.map((strength, i) => (
                                  <li key={i} className="flex items-start">
                                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></div>
                                    <span className="text-gray-700">
                                      {strength}
                                    </span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <h4 className="font-bold text-amber-600 mb-3 flex items-center">
                                <AlertCircle className="w-5 h-5 mr-2" />
                                Challenges
                              </h4>
                              <ul className="space-y-2">
                                {study.challenges.map((challenge, i) => (
                                  <li key={i} className="flex items-start">
                                    <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 mr-3"></div>
                                    <span className="text-gray-700">
                                      {challenge}
                                    </span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>

                          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-6 border border-blue-200">
                            <h4 className="font-bold text-blue-700 mb-3 flex items-center">
                              <ExternalLink className="w-5 h-5 mr-2" />
                              Insider Tip
                            </h4>
                            <p className="text-gray-700">{study.insider_tip}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </section>
            )}

            {/* Story */}
            {section.type === "story" && (
              <div className="my-20 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-amber-400/5 to-orange-400/5 rounded-3xl"></div>
                <div className="relative bg-white border-2 border-amber-200 rounded-2xl p-10 shadow-xl">
                  <div className="flex items-center mb-8">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-amber-800">
                        {section.title}
                      </h3>
                      <div className="text-amber-600 text-sm font-medium mt-2">
                        REAL-WORLD CASE STUDY • ADMINISTRATIVE NAVIGATION
                      </div>
                    </div>
                  </div>
                  <div className="text-gray-700 text-lg leading-relaxed space-y-6">
                    {section.content.split(". ").map((sentence, i, arr) => (
                      <p key={i}>
                        {i === 0 ? sentence : sentence}
                        {i < arr.length - 1 ? "." : ""}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Conclusion */}
            {section.type === "conclusion" && (
              <div className="mt-24 mb-20 relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-3xl blur-xl"></div>
                <div className="relative">
                  <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                      {section.title}
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
                  </div>

                  <div className="text-xl leading-relaxed text-gray-700 space-y-8">
                    {section.content.split("\n\n").map((paragraph, pIndex) => (
                      <div
                        key={pIndex}
                        className={
                          pIndex === 0
                            ? "text-2xl leading-relaxed font-medium text-gray-800"
                            : ""
                        }
                      >
                        {paragraph.split(". ").map((sentence, sIndex, arr) => (
                          <span key={sIndex}>
                            {sIndex === 0 && pIndex === 0 ? sentence : sentence}
                            {sIndex < arr.length - 1 ? ". " : ""}
                          </span>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Author Note */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-10 mb-16 text-white">
        <div className="flex items-center mb-6">
          <div className="bg-white/10 p-3 rounded-full mr-4">
            <Star className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold">Research Basis & Methodology</h3>
        </div>
        <p className="text-gray-200 leading-relaxed mb-6">{t.authorNote}</p>
      </div>

      {/* Article Footer */}
      <footer className="border-t border-gray-200 pt-16">
        {/* Tags */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Explore Related Topics
          </h3>
          <div className="flex flex-wrap gap-3">
            {t.footer.tags.map((tag, index) => (
              <a
                key={index}
                href="#"
                className="px-5 py-2.5 bg-gradient-to-r from-gray-100 to-gray-50 text-gray-700 rounded-full text-sm font-medium hover:from-gray-200 hover:to-gray-100 transition border border-gray-200"
                onClick={(e) => e.preventDefault()}
              >
                #{tag}
              </a>
            ))}
          </div>
        </div>

        {/* Author Bio */}
        <div className="bg-gradient-to-r from-gray-50 to-white rounded-2xl p-10 border border-gray-200">
          <div className="flex flex-col md:flex-row items-start gap-8">
            <div className="flex-1">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {t.author}
                  </h3>
                  <p className="text-gray-600 mt-2">{t.authorBio}</p>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white p-4 rounded-xl border border-gray-200">
                  <div className="text-sm text-gray-500 mb-1">
                    Specialization
                  </div>
                  <div className="font-bold text-gray-900">
                    International Education Systems
                  </div>
                </div>
                <div className="bg-white p-4 rounded-xl border border-gray-200">
                  <div className="text-sm text-gray-500 mb-1">
                    Current Research
                  </div>
                  <div className="font-bold text-gray-900">
                    Cross-Cultural Adaptation Patterns
                  </div>
                </div>
                <div className="bg-white p-4 rounded-xl border border-gray-200">
                  <div className="text-sm text-gray-500 mb-1">Consultation</div>
                  <div className="font-bold text-gray-900">
                    Available for Universities & NGOs
                  </div>
                </div>
              </div>

              <p className="text-gray-600 text-sm italic border-t border-gray-200 pt-6">
                {t.footer.disclaimer}
              </p>
            </div>
          </div>
        </div>
      </footer>
    </article>
  );
};

// Helper components
const Eye = ({ className }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
    />
  </svg>
);

const RefreshCw = ({ className }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
    />
  </svg>
);

export default StudyAbroadPreparation;
