import { Phone, CheckCircle2 } from 'lucide-react';
import aboutImg from '../assets/images/regenerated_image_1778510950017.jpg';

export default function About() {
  return (
    <div className="flex flex-col bg-white">
      {/* Header */}
      <section className="bg-blue-50 py-16 md:py-24 border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-4">About Shree Ganesh Dental Clinic</h1>
          <p className="text-xl text-blue-700 max-w-3xl mx-auto">
            A modern, hygienic, and family-like atmosphere dedicated to providing the highest quality dental care in Worli.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Image Side */}
            <div className="relative">
              <div className="absolute inset-0 bg-blue-600 rounded-3xl transform translate-x-4 translate-y-4 opacity-10"></div>
              <div className="relative aspect-[4/3] bg-blue-50 rounded-3xl overflow-hidden shadow-xl flex items-center justify-center">
                 <img 
                  src={aboutImg} 
                  onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"; e.currentTarget.onerror = null; }}
                  alt="Dr Akshay and Dr Aasawari inside clinic" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Content Side */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Expert Care. Warm Environment.</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                At Shree Ganesh Dental Clinic, we believe that a visit to the dentist should be a comfortable, anxiety-free experience. Nestled in the heart of Worli, our clinic combines state-of-the-art technology with a warm, caring approach that makes every patient feel like family.
              </p>
              
              <div className="bg-gray-50 border border-gray-100 rounded-2xl p-8 mb-8">
                <h3 className="text-xl font-bold text-blue-800 mb-4">Meet Our Team</h3>
                
                <div className="mb-6 pb-6 border-b border-gray-200">
                  <h4 className="text-lg font-bold text-gray-900 flex items-center">
                    Dr. Akshay <span className="text-sm font-normal text-blue-600 ml-2">(Lead Surgeon & Co-founder)</span>
                  </h4>
                  <p className="text-gray-600 mt-2">
                    MDS in Oral Implantology & Prosthodontics, Dr. Akshay combines years of clinical precision with advanced expertise in dental implants and full-mouth rehabilitation. As our Lead Surgeon, he specializes in everything from complex extractions to aesthetic smile designing and TMJ disorders. With steady hands and a deep focus on long-term oral health, he ensures every patient receives world-class clinical outcomes and a perfected smile.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-bold text-gray-900 flex items-center mb-1">
                    Dr. Aasawari <span className="text-sm font-normal text-blue-600 ml-2">(Co-founder)</span>
                  </h4>
                  <p className="text-sm text-gray-500 mb-2 font-medium">BDS, Fellowship in Forensic Odontology</p>
                  <p className="text-gray-600 mt-2">
                    Dr. Aasawari is the friendly voice you hear when you reach out to us, personally attending all calls to provide tailored, expert guidance from the very start. With over 5 years of experience in general dentistry and a specialization in Root Canal Treatment and Cosmetic Dentistry, she ensures every patient is well-informed. Her empathetic approach makes you feel comfortable and cared for even before you step into the clinic.
                  </p>
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-4">Why Choose Us?</h3>
              <ul className="space-y-3">
                {[
                  "Strict Sterilization & Hygiene Protocols",
                  "Convenient Timing: 11 AM - 8 PM with No Lunch Breaks",
                  "Centrally Located at Worli (Opp. Canara Bank)",
                  "Family-friendly environment tailored for all ages"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircle2 className="text-blue-500 mr-3 shrink-0 mt-0.5" size={20} />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-10">
                <a href="tel:8888086156" className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 transition">
                  <Phone size={18} className="mr-2" />
                  Speak with Dr. Aasawari
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
