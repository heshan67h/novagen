'use client';


import { useEffect, useState } from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';

export default function SocialBar() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show if at top or scrolling up
      if (currentScrollY < 50) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY) {
        // Scrolling down -> Hide
        setIsVisible(false);
      } else {
        // Scrolling up -> Show
        setIsVisible(true);
      }
      
      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      className={`fixed bottom-0 left-0 w-full z-50 transition-all duration-500 ease-in-out flex flex-col items-center ${
        isVisible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="w-full flex justify-between items-center px-8 md:px-20 py-2 bg-gradient-to-r from-[#0a0f23] to-[#16213e] border-t border-white/10 shadow-[0_-4px_20px_rgba(0,0,0,0.4)] text-white text-[15px]">
        {/* Left: Contact Info */}
        <div className="flex items-center gap-6">
          <a
            href="mailto:novagensoftware@gmail.com"
            className="flex items-center gap-2 text-white/90 focus:outline-none"
          >
            <FaEnvelope className="text-blue-400" /> novagensoftware@gmail.com
          </a>
          <span className="flex items-center gap-2 text-white/90">
            <FaMapMarkerAlt className="text-blue-400" /> Colombo, Sri Lanka
          </span>
          <a
            href="tel:+94725137006"
            className="flex items-center gap-2 text-white/90 focus:outline-none"
          >
            <FaPhoneAlt className="text-blue-400" /> +94 72 513 7006
          </a>
        </div>
        {/* Right: Social Icons */}
        <div className="flex items-center gap-6">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#1877F2] transition-colors"><FaFacebookF /></a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#1DA1F2] transition-colors"><FaTwitter /></a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#0A66C2] transition-colors"><FaLinkedinIn /></a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#fff] transition-colors"><FaGithub /></a>
        </div>
      </div>
    </div>
  );
}
