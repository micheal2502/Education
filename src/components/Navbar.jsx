// components/Navbar.jsx
import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";
import {
  ChevronDown,
  Facebook,
  Linkedin,
  Instagram,
  Mail,
  MapPin,
} from "lucide-react";
import TransitionLink from "./Layout/TransitionLinks";

// Mobile Submenu Component (for overlay menu)
const MobileSubmenuLink = ({ link, index, showLinks, handleLinkClick, isActiveLink }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const hasSubmenu = link.submenu && link.submenu.length > 0;
  
  return (
    <div className="overflow-hidden">
      <div className="flex items-center justify-between">
        <TransitionLink
          to={link.path}
          onClick={!hasSubmenu ? handleLinkClick : undefined}
          className={`nav-link transition-all duration-700 transform pb-2 md:pb-3 text-2xl md:text-6xl ${
            showLinks
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-8"
          } hover:text-blue-400 ${
            isActiveLink(link.path) ? "nav-link-active" : ""
          } ${hasSubmenu ? "cursor-pointer" : ""}`}
          style={{
            transitionDelay: showLinks
              ? `${index * 100 + 200}ms`
              : "0ms",
          }}
        >
          {link.label}
        </TransitionLink>
        
        {hasSubmenu && (
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setIsExpanded(!isExpanded);
            }}
            className={`ml-4 p-2 transition-transform duration-300 ${
              isExpanded ? "rotate-180" : ""
            }`}
          >
            <ChevronDown size={28} className="text-[#0974B6]" />
          </button>
        )}
      </div>
      
      {/* Mobile submenu accordion */}
      {hasSubmenu && isExpanded && (
        <div className="ml-6 mt-3 mb-4 space-y-2 animate-fadeIn">
          {link.submenu.map((subItem, subIndex) => (
            <TransitionLink
              key={subItem.path}
              to={subItem.path}
              onClick={handleLinkClick}
              className="block text-xl md:text-3xl text-gray-600 hover:text-[#0974B6] pl-4 py-2 border-l-2 border-blue-200 hover:border-[#0974B6] transition-all duration-300"
              style={{
                transitionDelay: showLinks
                  ? `${index * 100 + 300 + (subIndex * 50)}ms`
                  : "0ms",
              }}
            >
              {subItem.label}
            </TransitionLink>
          ))}
        </div>
      )}
    </div>
  );
};

// Elegant Desktop Main Navbar Link Component (with luxurious hover dropdowns)
const DesktopNavLink = ({ link, isActiveLink, language }) => {
  const [isHovered, setIsHovered] = useState(false);
  const timeoutRef = useRef(null);
  const dropdownRef = useRef(null);
  
  const hasSubmenu = link.submenu && link.submenu.length > 0;
  
  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsHovered(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);
  
  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsHovered(true);
  };
  
  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsHovered(false);
    }, 200);
  };
  
  return (
    <div 
      ref={dropdownRef}
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <TransitionLink
        to={link.path}
        className={`px-6 py-3 text-sm font-medium transition-all duration-300 relative group ${
          isActiveLink(link.path) 
            ? "text-[#0974B6] font-semibold" 
            : "text-gray-800 hover:text-[#0974B6]"
        }`}
      >
        <span className="relative z-10 flex items-center">
          {link.label}
          {hasSubmenu && (
            <ChevronDown className={`ml-2 w-4 h-4 transition-transform duration-300 ${isHovered ? "rotate-180" : ""}`} />
          )}
        </span>
        
        {/* Animated underline effect */}
        <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-[#0974B6] to-blue-300 transition-all duration-500 group-hover:w-4/5" />
      </TransitionLink>
      
      {/* Luxurious desktop submenu dropdown */}
      {hasSubmenu && isHovered && (
        <div className="absolute left-1/2 transform -translate-x-1/2 top-full mt-1 bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl border border-blue-100/50 min-w-[280px] z-50 overflow-hidden animate-fadeIn">
          {/* Gradient top border */}
          <div className="h-[1px] bg-gradient-to-r from-transparent via-[#0974B6] to-transparent" />
          
          <div className="p-2">
            {link.submenu.map((subItem) => (
              <TransitionLink
                key={subItem.path}
                to={subItem.path}
                className="group/subitem relative flex items-center px-6 py-4 text-sm text-gray-700 hover:text-[#0974B6] transition-all duration-300 hover:bg-gradient-to-r from-blue-50/80 to-transparent rounded-xl"
              >
                {/* Icon indicator */}
                <div className="absolute left-3 opacity-0 group-hover/subitem:opacity-100 transition-opacity duration-300">
                  <div className="w-1 h-1 rounded-full bg-[#0974B6] animate-pulse" />
                </div>
                
                <span className="pl-2">{subItem.label}</span>
                
                {/* Hover line effect */}
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-[1px] bg-gradient-to-r from-transparent via-[#0974B6] to-transparent group-hover/subitem:w-3/4 transition-all duration-500" />
              </TransitionLink>
            ))}
          </div>
          
          {/* Gradient bottom border */}
          <div className="h-[1px] bg-gradient-to-r from-transparent via-blue-300 to-transparent" />
        </div>
      )}
    </div>
  );
};

// Hamburger button for mobile only
const MobileMenuButton = ({ menuOpen, toggleMenu }) => {
  return (
    <button
      className="p-2 md:p-3 z-50 relative w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-blue-50 to-white border border-blue-100 shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-300 group/hamburger md:hidden"
      onClick={toggleMenu}
    >
      <div className="relative w-5 h-5 md:w-6 md:h-6 mx-auto">
        <div
          className={`absolute top-0.5 md:top-1 left-0 w-5 md:w-6 h-0.5 transition-all duration-500 rounded-full ${
            menuOpen
              ? "top-2 md:top-3 rotate-45 bg-gradient-to-r from-[#274d72] to-[#1B2340]"
              : "top-0.5 md:top-1 rotate-0 bg-gradient-to-r from-[#0974B6] to-blue-500"
          } group-hover/hamburger:from-[#0056b3] group-hover/hamburger:to-blue-600`}
        />
        <div
          className={`absolute top-2 md:top-3 left-0 w-5 md:w-6 h-0.5 transition-all duration-500 rounded-full ${
            menuOpen
              ? "opacity-0 translate-x-3 md:translate-x-4"
              : "opacity-100 translate-x-0 bg-gradient-to-r from-blue-300 to-blue-200"
          } group-hover/hamburger:from-blue-400 group-hover/hamburger:to-blue-300`}
        />
        <div
          className={`absolute top-3.5 md:top-5 left-0 w-5 md:w-6 h-0.5 transition-all duration-500 rounded-full ${
            menuOpen
              ? "top-2 md:top-3 -rotate-45 bg-gradient-to-r from-[#274d72] to-[#1B2340]"
              : "top-3.5 md:top-5 rotate-0 bg-gradient-to-r from-blue-100 to-blue-50"
          } group-hover/hamburger:from-blue-200 group-hover/hamburger:to-blue-100`}
        />
      </div>

      {!menuOpen && (
        <div className="absolute inset-0 rounded-full border-2 border-blue-100/50 animate-ping opacity-0 group-hover/hamburger:opacity-100"></div>
      )}
    </button>
  );
};

export const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showLinks, setShowLinks] = useState(false);
  const location = useLocation();

  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);

  // Check if desktop on mount and resize
  useEffect(() => {
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    
    checkDesktop();
    window.addEventListener('resize', checkDesktop);
    
    return () => window.removeEventListener('resize', checkDesktop);
  }, []);

  // Effect to prevent scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
      document.body.style.overflow = "hidden";
    } else {
      const scrollY = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.overflow = "";

      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || "0") * -1);
      }
    }

    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Scroll effect handler
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (!menuOpen) {
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
          setIsHidden(true);
        } else if (currentScrollY < lastScrollY) {
          setIsHidden(false);
        }

        setIsScrolled(currentScrollY > 10);
      }

      setLastScrollY(currentScrollY);
    };

    let ticking = false;
    const throttledHandleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", throttledHandleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", throttledHandleScroll);
    };
  }, [lastScrollY, menuOpen]);

  const { language, toggleLanguage } = useLanguage();

  // Updated navLinks with submenus
const navLinks = {
  vie: [
    { path: "/home", label: "Trang Chủ" },
    { 
      path: "/services", 
      label: "Gói Học Tập",
      submenu: [
        { path: "/services/personalized", label: "Lộ trình giáo dục chuyên biệt", enLabel: "IELTS Preparation" },
        { path: "/services/program", label: "Chương trình trải nghiệm thực tế", enLabel: "SAT/ACT Preparation" },
      ]
    },
    { 
      path: "/philosophy", 
      label: "Định Hướng",
    },
    { path: "/contact", label: "Liên Hệ" },
    { 
      path: "/about", 
      label: "Con Người",
    },
    { path: "/connect/step1", label: "Khởi trình" },
    { 
      path: "/blog", 
      label: "Blog",
    },
  ],
  en: [
    { path: "/home", label: "Home" },
    { 
      path: "/services", 
      label: "Learning Packages",
      submenu: [
        { path: "/services/personalized", label: "Personalized Educational Pathway", vieLabel: "Lộ trình giáo dục chuyên biệt" },
        { path: "/services/program", label: "Practical Experience Program", vieLabel: "Chương trình trải nghiệm thực tế" },
      ]
    },
    { 
      path: "/philosophy", 
      label: "Philosophy",
    },
    { path: "/contact", label: "Contact" },
    { 
      path: "/about", 
      label: "Our People",
    },
    { path: "/connect/step1", label: "Get Started" },
    { 
      path: "/blog", 
      label: "Blog",

    },
  ],
};

  const toggleMenu = () => {
    if (!menuOpen) {
      setMenuOpen(true);
      setTimeout(() => setShowLinks(true), 300);
    } else {
      setShowLinks(false);
      setTimeout(() => setMenuOpen(false), 400);
    }
  };

  useEffect(() => {
    setMenuOpen(false);
    setShowLinks(false);
  }, [location]);

  const isActiveLink = (path) => {
    return location.pathname === path;
  };

  const LanguageDropdown = ({ textColor = "text-[#0974B6]" }) => {
    const getDisplayLanguage = () => {
      return language === "en" ? "EN" : "VN";
    };

    const changeLanguage = (lang) => {
      const langCode = lang === "EN" ? "en" : "vie";
      toggleLanguage(langCode);
    };

    return (
      <div className="relative group cursor-pointer select-none">
        <span className={`flex items-center font-semibold ${textColor}`}>
          {getDisplayLanguage()}
          <ChevronDown className="w-4 h-4 ml-1 transition-transform group-hover:rotate-180" />
        </span>
        <div className="absolute left-0 mt-1 flex flex-col opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 bg-white/95 backdrop-blur-sm rounded-xl shadow-xl border border-blue-100/50 min-w-[60px] p-2 z-50">
          {["EN", "VN"].map((lang) => (
            <span
              key={lang}
              onClick={() => changeLanguage(lang)}
              className={`cursor-pointer py-1.5 px-3 text-sm transition font-medium rounded-lg ${
                lang === getDisplayLanguage() 
                  ? "text-[#0974B6] bg-blue-50/50" 
                  : "text-gray-700 hover:text-[#0974B6] hover:bg-blue-50/30"
              }`}
            >
              {lang}
            </span>
          ))}
        </div>
      </div>
    );
  };

  const handleLinkClick = () => {
    setShowLinks(false);
    setTimeout(() => setMenuOpen(false), 400);
  };

  const currentNavLinks = navLinks[language] || navLinks.en;
  const followText = language === "vie" ? "Theo dõi chúng tôi" : "Follow Us";

  return (
    <>
      {/* Main Navbar */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${
          isHidden ? "-translate-y-full" : "translate-y-0"
        } ${
          menuOpen
            ? "bg-white"
            : isScrolled
              ? "bg-white/95 backdrop-blur-sm shadow-lg"
              : "bg-transparent"
        } max-w-[100vw]`}
      >
        <div className="relative flex items-center justify-between py-4 px-4 md:px-20">
          {/* Logo */}
          <div className="flex-1 flex justify-start">
            <TransitionLink to="/home" className="flex items-center gap-4">
              <img src="/images/logo2.png" alt="Logo" className="h-12" />
              <div className="flex flex-col">
                <span className="text-[#0974B6] font-bold text-2xl leading-tight">
                  Agua
                </span>
                <span className="text-[#0974B6] font-semibold text-sm leading-tight">
                  International
                </span>
                <span className="text-[#0974B6] font-semibold text-sm leading-tight">
                  Education
                </span>
              </div>
            </TransitionLink>
          </div>

          {/* Desktop Navigation Links (Hidden on mobile) */}
          {isDesktop && (
            <div className="hidden md:flex flex-1 justify-center">
              <div className="flex items-center space-x-8">
                {currentNavLinks.map((link) => (
                  <DesktopNavLink 
                    key={link.path}
                    link={link}
                    isActiveLink={isActiveLink}
                    language={language}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Right side: Language and Menu button (Mobile only) */}
          <div className="flex items-center space-x-2 md:space-x-6">
            <LanguageDropdown textColor="text-[#0974B6]" />
            <MobileMenuButton menuOpen={menuOpen} toggleMenu={toggleMenu} />
          </div>
        </div>
      </nav>

      {/* Full-screen overlay menu (for mobile/tablet) */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-white flex flex-col transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] z-40 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } overflow-y-auto`}
      >
        <div className="sticky top-0 bg-white z-10 border-b border-blue-100">
          <div className="flex justify-between items-center py-6 px-6 md:px-20">
            <TransitionLink
              to="/home"
              className="flex items-center gap-3"
              onClick={handleLinkClick}
            >
              <img
                src="/images/logo2.png"
                alt="Logo"
                className="h-10 md:h-14"
              />
              <div className="flex flex-col">
                <span className="text-[#1B2340] font-bold text-lg md:text-2xl leading-tight">
                  Agua
                </span>
                <span className="text-[#1B2340] font-semibold text-xs md:text-sm leading-tight">
                  International Education
                </span>
              </div>
            </TransitionLink>

            <button
              onClick={toggleMenu}
              className="p-2 text-[#1B2340] hover:text-blue-600 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        <div className="flex-1 flex flex-col md:flex-row">
          {/* Left: Navigation links with mobile submenus */}
          <div className="flex-1 flex flex-col px-6 md:px-20 py-6 md:py-10 space-y-4 md:space-y-8">
            {currentNavLinks.map((link, index) => (
              <MobileSubmenuLink
                key={link.path}
                link={link}
                index={index}
                showLinks={showLinks}
                handleLinkClick={handleLinkClick}
                isActiveLink={isActiveLink}
              />
            ))}
          </div>

          {/* Right: Contact & Social section - Luxurious redesign */}
          <div className="w-full md:w-1/3 px-6 md:px-10 py-6 md:py-10 border-t md:border-l border-blue-100 bg-gradient-to-b from-white to-blue-50/30">
            <div
              className={`transition-all duration-700 transform ${
                showLinks
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{
                transitionDelay: showLinks
                  ? `${currentNavLinks.length * 100 + 400}ms`
                  : "0ms",
              }}
            >
              <h3 className="text-lg md:text-xl font-semibold text-[#1B2340] mb-6 md:mb-8">
                {followText}
              </h3>

              {/* Luxurious Social Media Grid */}
              <div className="grid grid-cols-3 gap-3 mb-8 md:mb-12">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center p-4 rounded-2xl bg-gradient-to-br from-white to-blue-50 border border-blue-100 hover:border-blue-300 hover:shadow-xl transition-all duration-300"
                >
                  <div className="p-3 rounded-full bg-gradient-to-br from-blue-100 to-white mb-3 group-hover:scale-110 transition-transform duration-300">
                    <Facebook className="w-5 h-5 text-[#0974B6]" />
                  </div>
                  <span className="text-xs font-medium text-[#1B2340]">Facebook</span>
                  <span className="text-xs text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">@agua</span>
                </a>

                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center p-4 rounded-2xl bg-gradient-to-br from-white to-blue-50 border border-blue-100 hover:border-blue-300 hover:shadow-xl transition-all duration-300"
                >
                  <div className="p-3 rounded-full bg-gradient-to-br from-blue-100 to-white mb-3 group-hover:scale-110 transition-transform duration-300">
                    <Linkedin className="w-5 h-5 text-[#0974B6]" />
                  </div>
                  <span className="text-xs font-medium text-[#1B2340]">LinkedIn</span>
                  <span className="text-xs text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Agua</span>
                </a>

                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center p-4 rounded-2xl bg-gradient-to-br from-white to-pink-50 border border-pink-100 hover:border-pink-300 hover:shadow-xl transition-all duration-300"
                >
                  <div className="p-3 rounded-full bg-gradient-to-br from-pink-100 to-white mb-3 group-hover:scale-110 transition-transform duration-300">
                    <Instagram className="w-5 h-5 text-pink-500" />
                  </div>
                  <span className="text-xs font-medium text-[#1B2340]">Instagram</span>
                  <span className="text-xs text-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">@agua</span>
                </a>
              </div>

              {/* Elegant Contact Information */}
              <div className="mb-8 md:mb-12">
                <h4 className="text-lg md:text-xl font-semibold text-[#1B2340] mb-6">
                  {language === "vie" ? "Liên hệ" : "Contact"}
                </h4>

                <div className="space-y-4">
                  <div className="group flex items-start space-x-3 p-4 rounded-2xl bg-gradient-to-br from-white to-blue-50 border border-blue-100 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
                    <div className="p-2 rounded-lg bg-gradient-to-br from-blue-50 to-white border border-blue-100 flex items-center justify-center w-10 h-10">
                      <Mail className="w-5 h-5 text-[#0974B6]" />
                    </div>
                    <div className="flex-1">
                      <span className="text-sm font-medium text-[#1B2340]">Email</span>
                      <a
                        href="mailto:info@aguainternational.edu"
                        className="text-sm text-blue-600 hover:text-blue-800 transition-colors duration-300 break-all block mt-1"
                      >
                        info@aguainternational.edu
                      </a>
                    </div>
                  </div>

                  <div className="group flex items-start space-x-3 p-4 rounded-2xl bg-gradient-to-br from-white to-blue-50 border border-blue-100 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
                    <div className="p-2 rounded-lg bg-gradient-to-br from-blue-50 to-white border border-blue-100 flex items-center justify-center w-10 h-10">
                      <MapPin className="w-5 h-5 text-[#0974B6]" />
                    </div>
                    <div className="flex-1">
                      <span className="text-sm font-medium text-[#1B2340]">
                        {language === "vie" ? "Địa chỉ" : "Address"}
                      </span>
                      <span className="text-sm text-[#1B2340] opacity-80 leading-relaxed block mt-1">
                        {language === "vie"
                          ? "20 Mỹ Giang 2A, Khu biệt thự Phú Mỹ Hưng, Quận 7, TP. Hồ Chí Minh"
                          : "20 My Giang 2A, Phu My Hung, District 7, Ho Chi Minh City"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Elegant Language Selector */}
              <div
                className={`transition-all duration-700 transform ${
                  showLinks
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{
                  transitionDelay: showLinks
                    ? `${currentNavLinks.length * 100 + 600}ms`
                    : "0ms",
                }}
              >
                <div className="p-4 rounded-2xl bg-gradient-to-br from-white to-blue-50 border border-blue-100">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <img
                        src="/images/image.png"
                        alt="Language"
                        className="h-8 w-8"
                        onError={(e) => {
                          e.target.style.display = "none";
                        }}
                      />
                      <span className="text-sm font-medium text-[#1B2340]">
                        {language === "vie" ? "Ngôn ngữ" : "Language"}
                      </span>
                    </div>
                    <div className="flex items-center space-x-1 bg-gradient-to-br from-blue-50 to-white rounded-full p-1 border border-blue-100">
                      <button
                        onClick={() => toggleLanguage("en")}
                        className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                          language === "en"
                            ? "text-[#0974B6] bg-white shadow-sm"
                            : "text-gray-600 hover:text-[#0974B6] hover:bg-white/50"
                        }`}
                      >
                        ENG
                      </button>
                      <button
                        onClick={() => toggleLanguage("vie")}
                        className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                          language === "vie"
                            ? "text-[#0974B6] bg-white shadow-sm"
                            : "text-gray-600 hover:text-[#0974B6] hover:bg-white/50"
                        }`}
                      >
                        VIE
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CSS Animation for Fade In */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.25s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
        
        /* Custom scrollbar for overlay menu */
        .overflow-y-auto::-webkit-scrollbar {
          width: 6px;
        }
        
        .overflow-y-auto::-webkit-scrollbar-track {
          background: transparent;
        }
        
        .overflow-y-auto::-webkit-scrollbar-thumb {
          background: rgba(9, 116, 182, 0.2);
          border-radius: 3px;
        }
        
        .overflow-y-auto::-webkit-scrollbar-thumb:hover {
          background: rgba(9, 116, 182, 0.3);
        }
      `}</style>
    </>
  );
};