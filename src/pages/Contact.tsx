import { MapPin, Phone, Clock, Instagram } from 'lucide-react';

export default function Contact() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <section className="bg-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Contact & Location</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Ready to book your appointment? Reach out to us below and step into a world of painless dental care.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
          
          {/* Information Side */}
          <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Get In Touch</h2>
            
            <div className="space-y-8">
              {/* Phone */}
              <div className="flex">
                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 shrink-0 mr-4">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Book Your Appointment</h3>
                  <p className="text-gray-600 mb-4">
                    Dr. Aasawari is available to provide expert guidance and help you schedule your visit.
                  </p>
                  <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3 mb-4">
                    <a href="tel:8888086156" className="inline-flex items-center justify-center text-blue-700 font-bold bg-blue-50 border border-blue-100 px-5 py-2.5 rounded-xl hover:bg-blue-100 transition">
                      <Phone size={18} className="mr-2" />
                      Call: 88880 86156
                    </a>
                    <a href="https://wa.me/918888086156?text=Hello,%20I%20want%20to%20book%20an%20appointment." target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center text-white font-bold bg-[#25D366] px-5 py-2.5 rounded-xl hover:bg-[#128C7E] transition shadow-sm">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2"
                      >
                        <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                        <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
                      </svg>
                      WhatsApp Us
                    </a>
                  </div>
                  <div>
                    <span className="text-sm text-gray-500">Lead Surgeon:</span>
                    <a href="tel:8356879112" className="text-sm font-bold text-blue-700 ml-2 hover:underline">Dr. Akshay - 83568 79112</a>
                  </div>
                </div>
              </div>

              {/* Address */}
              <div className="flex">
                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 shrink-0 mr-4">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Clinic Location</h3>
                  <p className="text-gray-800 font-medium mb-1">Shree Ganesh Dental Clinic</p>
                  <p className="text-gray-600 leading-relaxed">
                    2nd Floor, Ready Money Terrace,<br/>
                    201, Dr Annie Besant Rd,<br/>
                    <span className="font-bold text-blue-800 bg-blue-50 px-1 mt-1 inline-block">Opp. Canara Bank</span>, Worli,<br/>
                    Mumbai 400018.
                  </p>
                  <a 
                    href="https://maps.app.goo.gl/Czg34RFuiokUXpjX6?g_st=aw" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition mt-2 underline"
                  >
                    <MapPin size={16} className="mr-1" /> Get Directions
                  </a>
                </div>
              </div>

              {/* Timings */}
              <div className="flex">
                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 shrink-0 mr-4">
                  <Clock size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Clinic Timings</h3>
                  <p className="text-gray-800 font-medium">Monday to Sunday</p>
                  <p className="text-blue-700 font-bold text-xl my-1">11:00 AM to 8:00 PM</p>
                  <p className="text-sm font-semibold text-gray-500 tracking-wider uppercase">Full Day • No Lunch Break</p>
                </div>
              </div>

              {/* Social */}
              <div className="flex pt-2 border-t border-gray-100">
                <div className="w-12 h-12 bg-pink-50 rounded-full flex items-center justify-center text-pink-600 shrink-0 mr-4">
                  <Instagram size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Social Media</h3>
                  <p className="text-gray-600 mb-2">Follow us for updates and dental tips.</p>
                  <a 
                    href="https://www.instagram.com/reel/DMchE97sHyq/?igsh=MWEyYzJ1MWtlZGpqdw==" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-pink-600 font-medium hover:text-pink-800 transition underline"
                  >
                     <Instagram size={16} className="mr-1" /> Follow us on Instagram
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Map Side */}
          <div className="bg-gray-200 relative min-h-[400px]">
             {/* Map Placeholder */}
             <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center border-l border-gray-100">
               <MapPin size={48} className="text-gray-400 mb-4" />
               <h3 className="text-2xl font-bold text-gray-700 mb-2">Interactive Map Area</h3>
               <p className="text-gray-500 mb-6">
                 (Embed actual Google Maps iframe here using the Worli address)
               </p>
               <a 
                 href="https://maps.google.com/?q=2nd+Floor,+Ready+Money+Terrace,+201,+Dr+Annie+Besant+Rd,+Opp.+Canara+Bank,+Worli,+Mumbai+400018" 
                 target="_blank"
                 rel="noopener noreferrer"
                 className="inline-flex items-center px-6 py-3 bg-gray-900 text-white font-medium rounded-lg hover:bg-black transition"
               >
                 Open in Google Maps
               </a>
             </div>
             {/* In a real implementation, you would replace the div above with an iframe:
               <iframe 
                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.6789!2d72.812345!3d18.991234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDU5JzI4LjQiTiA3MsKwNDgnNDQuNCJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin" 
                 width="100%" 
                 height="100%" 
                 style={{ border: 0 }} 
                 allowFullScreen 
                 loading="lazy" 
                 referrerPolicy="no-referrer-when-downgrade"
                 className="absolute inset-0"
               ></iframe>
             */}
          </div>

        </div>
      </section>
    </div>
  );
}
