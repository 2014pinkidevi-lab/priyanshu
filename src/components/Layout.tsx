import { Outlet, Link, useLocation } from 'react-router-dom';
import { Phone, Clock, MapPin, Menu, X, Instagram } from 'lucide-react';
import { useState } from 'react';

import logoImg from '../assets/images/regenerated_image_1778509934328.jpg';

export default function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-800 bg-gray-50">
      {/* Top Header */}
      <div className="bg-blue-700 text-white py-2 px-4 shadow-sm text-sm hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex space-x-6">
            <div className="flex items-center space-x-2">
              <Clock size={16} />
              <span>11:00 AM - 8:00 PM</span>
            </div>
            <a href="https://maps.app.goo.gl/5igDs8oTkLvRZSXTA?g_st=aw" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:text-blue-200 transition">
              <MapPin size={16} />
              <span>Worli, Mumbai</span>
            </a>
          </div>
          <div className="flex items-center space-x-6 font-medium">
            <a href="https://www.instagram.com/reel/DMchE97sHyq/?igsh=MWEyYzJ1MWtlZGpqdw==" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-1 hover:text-blue-200 transition">
              <Instagram size={16} />
              <span>Instagram</span>
            </a>
            <div className="flex items-center space-x-2">
              <Phone size={16} />
              <span>Call Dr. Aasawari: 88880 86156</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header className="bg-white sticky top-0 z-50 shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <div className="flex items-center justify-center">
              <div className="w-12 h-12 md:w-14 md:h-14 flex-shrink-0 relative flex items-center justify-center mr-1 rounded-full overflow-hidden bg-white shadow-sm border border-gray-100">
                <img src={logoImg} alt="Shree Ganesh Dental Clinic Logo" className="w-full h-full object-contain" />
              </div>
            </div>
            <div>
              <h1 className="text-xl font-bold text-blue-800 leading-tight">Shree Ganesh</h1>
              <p className="text-xs text-blue-600 font-medium tracking-wide">DENTAL CLINIC</p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`font-medium transition-colors ${
                  isActive(link.path) ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <a 
            href="https://wa.me/918888086156?text=Hello,%20I%20want%20to%20book%20an%20appointment." 
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center justify-center px-6 py-2.5 bg-green-500 text-white font-medium rounded-full hover:bg-green-600 transition-colors shadow-sm"
          >
            <Phone size={18} className="mr-2" />
            Book Appointment
          </a>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-gray-600 hover:text-blue-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 flex flex-col px-4 py-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block font-medium py-2 ${
                  isActive(link.path) ? 'text-blue-600' : 'text-gray-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <a 
              href="https://wa.me/918888086156?text=Hello,%20I%20want%20to%20book%20an%20appointment." 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-green-500 text-white font-medium rounded-lg mt-4 w-full"
            >
              <Phone size={18} className="mr-2" />
              Book Appointment
            </a>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[999] flex flex-col space-y-4">
        {/* Instagram Button */}
        <a
          href="https://www.instagram.com/reel/DMchE97sHyq/?igsh=MWEyYzJ1MWtlZGpqdw=="
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 text-white w-12 h-12 sm:w-14 sm:h-14 rounded-full shadow-xl active:scale-95 hover:scale-110 hover:opacity-90 transition-all duration-300 flex items-center justify-center group"
          aria-label="Follow on Instagram"
        >
          <Instagram className="w-6 h-6 sm:w-7 sm:h-7" />
        </a>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/918888086156?text=Hello,%20I%20want%20to%20book%20an%20appointment."
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#25D366] text-white w-12 h-12 sm:w-14 sm:h-14 rounded-full shadow-xl active:scale-95 hover:scale-110 hover:bg-[#128C7E] transition-all duration-300 flex items-center justify-center group"
          aria-label="Chat on WhatsApp"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-7 h-7 sm:w-8 sm:h-8"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
            <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
          </svg>
        </a>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
               <div className="flex items-center justify-center">
                <div className="w-12 h-12 flex-shrink-0 relative flex items-center justify-center mr-1 rounded-full overflow-hidden bg-white shadow-sm border border-gray-100">
                  <img src={logoImg} alt="Shree Ganesh Dental Clinic Logo" className="w-full h-full object-contain" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold leading-tight">Shree Ganesh</h3>
                <p className="text-[10px] text-blue-400 font-bold tracking-widest uppercase">Dental Clinic</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Experience painless, modern dentistry in a family-like atmosphere right in the heart of Worli.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-gray-700 pb-2 inline-block">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="text-blue-500 mt-1 mr-3 flex-shrink-0" size={20} />
                <p className="text-gray-300">
                  2nd Floor, Ready Money Terrace, 201, Dr Annie Besant Rd, Opp. Canara Bank, <a href="https://maps.app.goo.gl/5igDs8oTkLvRZSXTA?g_st=aw" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">Worli, Mumbai 400018</a>.
                </p>
              </div>
              <div className="flex items-start">
                <Phone className="text-blue-500 mt-1 mr-3 flex-shrink-0" size={20} />
                <div className="text-gray-300">
                  <a href="tel:8888086156" className="hover:text-blue-400 block mb-2">Dr. Aasawari: 88880 86156</a>
                  <a href="tel:8356879112" className="hover:text-blue-400 block">Dr. Akshay: 83568 79112</a>
                </div>
              </div>
              <div className="flex items-start pt-2">
                <Instagram className="text-blue-500 mt-1 mr-3 flex-shrink-0" size={20} />
                <div className="text-gray-300">
                  <a href="https://www.instagram.com/reel/DMchE97sHyq/?igsh=MWEyYzJ1MWtlZGpqdw==" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 block font-medium underline-offset-2 hover:underline">Follow us on Instagram</a>
                </div>
              </div>
            </div>
          </div>

          <div>
             <h4 className="text-lg font-bold mb-6 border-b border-gray-700 pb-2 inline-block">Working Hours</h4>
             <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
               <div className="flex items-center space-x-3 mb-4">
                 <Clock className="text-blue-400" size={24} />
                 <div>
                   <p className="font-medium text-white">Clinic Timings</p>
                   <p className="text-gray-400 text-sm">Perfect for office-goers</p>
                 </div>
               </div>
               <div className="space-y-2 mt-4 text-gray-300">
                 <div className="flex justify-between border-b border-gray-700 pb-2">
                   <span>Monday - Saturday</span>
                   <span className="font-medium text-white">11:00 AM - 8:00 PM</span>
                 </div>
               </div>
             </div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Shree Ganesh Dental Clinic. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
