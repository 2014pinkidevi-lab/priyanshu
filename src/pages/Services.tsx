import { Phone, ChevronRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import clinicBg from '../assets/images/regenerated_image_1777627660380.png';

import img1 from '../assets/images/regenerated_image_1778131856457.jpg';
import img2 from '../assets/images/regenerated_image_1778131858126.jpg';
import img3 from '../assets/images/regenerated_image_1778131859467.jpg';
import img4 from '../assets/images/regenerated_image_1778131860861.jpg';

import t1b from '../assets/images/regenerated_image_1778131634807.jpg';
import t1a from '../assets/images/regenerated_image_1778131636244.jpg';
import t2b from '../assets/images/regenerated_image_1778131638408.jpg';
import t2a from '../assets/images/regenerated_image_1778131639932.jpg';

export default function Services() {
  const serviceCategories = [
    {
      category: "Restorative & Surgical Services",
      hindiTag: "Daant Theek Karna",
      description: "Comprehensive treatments to restore the health and function of your teeth.",
      services: [
        {
          title: "Implant & Dentures",
          tagline: "Daant lagwana aur nakli daant.",
          description: "Replace missing teeth with stable, durable, and natural-looking dental implants or custom dentures.",
          icon: <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3a4.5 4.5 0 0 0-4.5 4.5v1.5a3 3 0 0 0-3 3v2.5a3 3 0 0 0 3 3v3a2 2 0 0 0 4 0v-2.5h1v2.5a2 2 0 0 0 4 0v-3a3 3 0 0 0 3-3V12a3 3 0 0 0-3-3v-1.5A4.5 4.5 0 0 0 12 3z"/></svg>
        },
        {
          title: "Root Canal Treatment (RCT)",
          tagline: "Dard se rahat ke liye painless ilaaj.",
          description: "Don't let the fear of pain keep you from resolving deep tooth decay. Our modern techniques ensure a smooth, painless procedure.",
          icon: <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v6"/><path d="m10 6 2-2 2 2"/><path d="M12 22v-4"/><path d="m14 20-2 2-2-2"/><path d="M2.5 12h5"/><path d="m6 10 2 2-2 2"/><path d="M21.5 12h-5"/><path d="m18 10-2 2 2 2"/><path d="M12 8a4 4 0 0 0-4 4v4h8v-4a4 4 0 0 0-4-4z"/></svg>
        },
        {
          title: "Tooth Removal / Extraction",
          tagline: "Kharab daant nikalna (Wisdom tooth surgery).",
          description: "Expert removal of heavily damaged teeth and complex impacted wisdom teeth with rapid healing.",
          icon: <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 6-2 4 2 4 2-4-2-4z"/><path d="M12 14v4"/><path d="M4.93 4.93 8.46 8.46"/><path d="m15.54 15.54 3.53 3.53"/><path d="M19.07 4.93 15.54 8.46"/><path d="m8.46 15.54-3.53 3.53"/><path d="M22 12h-4"/><path d="M6 12H2"/></svg>
        },
        {
          title: "Gum Surgeries",
          tagline: "Masoodon ki surgery.",
          description: "Advanced treatments to repair receding gums, treat infections, and restore gum health.",
          icon: <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
        },
        {
          title: "Crowns and Bridges",
          tagline: "Daant par cap ya bridge lagwana.",
          description: "Custom-made tooth crowns (caps) and bridges to cover damaged teeth and bridge gaps.",
          icon: <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12h20"/><path d="M4 12v4a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-4"/><path d="M12 2v10"/></svg>
        },
        {
          title: "Fillings",
          tagline: "Cavity aur daant ki bharai.",
          description: "High-quality, tooth-colored composite materials used safely to fill cavities and stop decay.",
          icon: <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><circle cx="12" cy="12" r="4"/></svg>
        }
      ]
    },
    {
      category: "Cosmetic & Orthodontic Services",
      hindiTag: "Smile Design",
      description: "Transform your smile with our expert aesthetic treatments.",
      services: [
        {
          title: "Invisalign & Clear Aligners",
          tagline: "Bina taar ke daant seedhe karna.",
          description: "Straighten your teeth comfortably and discreetly with practically invisible aligners.",
          icon: <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 12c-1.8 0-3 1.2-3 3 0 1.2.6 3 3 3 1.8 0 3-1.2 3-3s-1.2-3-3-3Z"/><path d="M7 12c-1.8 0-3 1.2-3 3 0 1.2.6 3 3 3 1.8 0 3-1.2 3-3s-1.2-3-3-3Z"/><path d="M10 15c.6 0 1-1.4 1-3v-3a2 2 0 1 1 4 0v3c0 1.6.4 3 1 3"/><path d="M17 9c-1.8 0-3 1.2-3 3"/><path d="M7 9c1.8 0 3 1.2 3 3"/></svg>
        },
        {
          title: "Braces",
          tagline: "Daant seedhe karne wale taar.",
          description: "Traditional and modern orthodontic options to effectively correct bites and crowding over time.",
          icon: <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 10h-2V8h2v2zm-8 0H8V8h2v2zm12 0h-2V8h2v2zM6 10H4V8h2v2zm6 12c-3.31 0-6-2.69-6-6h2c0 2.21 1.79 4 4 4s4-1.79 4-4h2c0 3.31-2.69 6-6 6zm6-6h2v-2h-2v2zm-8 0H8v-2h2v2z"/></svg>
        },
        {
          title: "Smile Design / Veneers",
          tagline: "Smile ko sundar banana.",
          description: "Custom-made veneers tailored perfectly to your facial structure for a complete, glamorous smile makeover.",
          icon: <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="m8 14 4 2 4-2"/><path d="m9 9 .01.01"/><path d="m15 9 .01.01"/></svg>
        },
        {
          title: "Teeth Whitening",
          tagline: "Daant chamkana.",
          description: "Professional whitening procedures to remove deep stains and dramatically brighten your teeth.",
          icon: <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>
        }
      ]
    },
    {
      category: "General Care",
      hindiTag: "Routine Dental Maintenance",
      description: "Essential care to keep your smile healthy and bright all year round.",
      services: [
        {
          title: "Teeth Cleaning / Scaling",
          tagline: "Daanton ki safai aur chamak.",
          description: "Detailed professional scaling to remove built-up plaque, preventing gingivitis and freshening your breath.",
          icon: <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
        },
        {
          title: "Oral Health Consultation",
          tagline: "Dr. Akshay aur Dr. Aasawari ke dwara expert salah.",
          description: "Comprehensive dental checkups, personalized planning, and expert answers from our lead doctors.",
          icon: <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
        }
      ]
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      <section className="bg-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Our Services</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
            World-class treatments utilizing the latest technology to ensure painless, precise, and permanent results.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 mt-12 md:mt-16">
        {serviceCategories.map((section, catIndex) => (
          <div key={catIndex} className="mb-20">
            <div className="mb-10 text-center md:text-left">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">{section.category}</h2>
              <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-4">
                <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-bold tracking-wide">
                  {section.hindiTag}
                </span>
                <p className="text-gray-600 font-medium">{section.description}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {section.services.map((service, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 hover:shadow-md hover:border-blue-200 transition group">
                  <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-sm font-semibold tracking-wide text-blue-700 mb-4 bg-blue-50 inline-block px-3 py-1 rounded-md">
                    {service.tagline}
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Banner Image */}
        <div className="mb-20 rounded-3xl overflow-hidden shadow-xl border-4 border-white relative h-64 md:h-96 w-full">
          <img 
            src={clinicBg} 
            alt="Modern Dental Clinic Interior" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-blue-900/20 mix-blend-multiply"></div>
        </div>

        {/* Transformations / Before-After Section */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Real Transformations</h2>
            <p className="text-lg text-gray-600">See the difference our treatments can make.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[
              img1,
              img2,
              img3,
              img4,
              t1a,
              t2b
            ].map((imgSrc, index) => (
              <div key={index} className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 items-center justify-center flex">
                <div className="w-full relative rounded-xl overflow-hidden shadow-inner">
                  <img src={imgSrc} alt={`Before and After Treatment ${index + 1}`} className="w-full h-auto object-cover" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Normal Gallery Section */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Clinic Gallery</h2>
            <p className="text-lg text-gray-600">A glimpse into our state-of-the-art facility and team.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="rounded-xl overflow-hidden shadow-sm aspect-[4/5] object-cover">
              <img src={img1} alt="Clinic view 1" className="w-full h-full object-cover hover:scale-105 transition duration-500" />
            </div>
            <div className="rounded-xl overflow-hidden shadow-sm aspect-[4/5] object-cover">
              <img src={img2} alt="Clinic view 2" className="w-full h-full object-cover hover:scale-105 transition duration-500" />
            </div>
            <div className="rounded-xl overflow-hidden shadow-sm aspect-[4/5] object-cover">
              <img src={img3} alt="Clinic view 3" className="w-full h-full object-cover hover:scale-105 transition duration-500" />
            </div>
            <div className="rounded-xl overflow-hidden shadow-sm aspect-[4/5] object-cover">
              <img src={img4} alt="Clinic view 4" className="w-full h-full object-cover hover:scale-105 transition duration-500" />
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Patient Testimonials</h2>
            <p className="text-lg text-gray-600">Real experiences from our clinic.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                text: "Thank you Dr. Aasawari and Dr. Akshay for being patient and giving me the best treatment. Your friendly nature and the comfort helped me to overcome my fear...☺️👍🏻",
                author: "Gauri Gaonkar"
              },
              {
                text: "Professional, courteous, and friendly doctors made me feel like family. My root canal was painless and quick. Highly recommend!”",
                author: "Mandar Pawar"
              },
              {
                text: "Very happy with my treatment here. The doctors were knowledgeable and highly professional, hygienic clinic equipped with a modern setup",
                author: "Akshay Dhamapurkar"
              },
              {
                text: "I would like to sincerely thank Dr. Akshay Gajakosh and Dr. Asawari for their professional advice, care, and support throughout my dental treatment. Their guidance on dental scaling and the tooth extraction process was clear, reassuring, and handled with great expertise. I truly appreciated the time they took to explain each step and ensure my comfort. The entire experience was smooth and well-managed, and I’m grateful for the compassionate approach they both brought to the treatment.",
                author: "Nimisha Hotkar"
              },
              {
                text: "I recently visited Shree Ganesh Dental Clinic for a check up..found out that I had a cavity with one of my tooth which was troubling me for quite sometime...Dr Aasawari was very patient with me and made sure that I was very comfortable during the whole treatment..she explained the whole procedure to me very properly..I was very happy with the treatment also it was a pain-free experience.. Thanks and kudos to Dr Akshay and Dr Aasawari,definitely my go to dentist from now on..",
                author: "Nidhi Rathod"
              },
              {
                text: "One of the best dentists i have ever come across!!! Dr Aasawari was extremely patient and handled my queries and my treatment with atmost care!!!! Thank you for making my dental experience nice!!",
                author: "Henna mehta"
              },
              {
                text: "Thankyou Dr. Aasawari for a very comfortable experience! Highly recommended!",
                author: "Samruddhi Shastrakar"
              }
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-blue-100 flex flex-col justify-between">
                <div>
                  <div className="flex text-yellow-400 mb-4">
                    <Star className="fill-current" size={20} />
                    <Star className="fill-current" size={20} />
                    <Star className="fill-current" size={20} />
                    <Star className="fill-current" size={20} />
                    <Star className="fill-current" size={20} />
                  </div>
                  <p className="text-gray-700 italic mb-6 leading-relaxed">"{testimonial.text}"</p>
                </div>
                <p className="font-bold text-gray-900">— {testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Banner at bottom */}
        <div className="bg-white border border-blue-100 rounded-3xl p-8 md:p-16 text-center shadow-lg relative overflow-hidden">
          <div className="absolute top-0 left-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl -ml-20 -mt-20"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl -mr-20 -mb-20"></div>
          
          <div className="relative z-10">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6">Unsure what you need?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">
              Every smile is unique. Call us for a consultation, and Dr. Aasawari will discuss your options and help you determine the best path forward for your oral health.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <a href="tel:8888086156" className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-bold text-lg rounded-full hover:bg-blue-700 transition shadow hover:shadow-lg w-full sm:w-auto justify-center">
                <Phone size={24} className="mr-3" />
                Call: 88880 86156
              </a>
              <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-700 font-bold text-lg rounded-full border-2 border-blue-100 hover:border-blue-200 transition shadow-sm w-full sm:w-auto">
                Find Our Clinic <ChevronRight className="ml-1" size={20} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

