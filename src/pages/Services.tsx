import { Phone, ChevronRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import clinicBg from '../assets/images/regenerated_image_1777627660380.png';

import img1 from '../assets/images/regenerated_image_1778131856457.jpg';
import img2 from '../assets/images/regenerated_image_1778131858126.jpg';
import img3 from '../assets/images/regenerated_image_1778131859467.jpg';
import img4 from '../assets/images/regenerated_image_1778131860861.jpg';

import t1b from '../assets/images/regenerated_image_1778595180767.jpg';
import t1a from '../assets/images/regenerated_image_1778131636244.jpg';
import t2b from '../assets/images/regenerated_image_1778131638408.jpg';
import t2a from '../assets/images/regenerated_image_1778131639932.jpg';
import resImg1 from '../assets/images/regenerated_image_1778919415390.png';
import resImg2 from '../assets/images/regenerated_image_1778918614827.webp';

import icon1 from '../assets/images/regenerated_image_1777735854392.png';
import icon2 from '../assets/images/regenerated_image_1777735856971.png';
import icon3 from '../assets/images/regenerated_image_1777735867930.png';
import icon4 from '../assets/images/regenerated_image_1777735913436.png';
import icon5 from '../assets/images/regenerated_image_1778592430354.png';
import icon6 from '../assets/images/regenerated_image_1778596210278.png';
import icon7 from '../assets/images/regenerated_image_1778596213628.png';
import icon8 from '../assets/images/regenerated_image_1778839497033.png';

export default function Services() {
  const serviceCategories = [
    {
      category: "Restorative & Surgical",
      hindiTag: "दांत ठीक करना और सर्जरी",
      description: "Comprehensive treatments to restore the health and function of your teeth.",
      services: [
        {
          title: "Implant",
          tagline: "हमेशा के लिए दांत लगवाना।",
          description: "Replace missing teeth with stable, durable, and natural-looking dental implants.",
          icon: <img src={icon1} alt="Implant" className="w-full h-full object-contain" />
        },
        {
          title: "Tooth removal",
          tagline: "बिना दर्द के दांत निकालना।",
          description: "Expert removal of heavily damaged teeth and complex impacted wisdom teeth.",
          icon: <img src={icon2} alt="Tooth removal" className="w-full h-full object-contain" />
        },
        {
          title: "Dentures",
          tagline: "आरामदायक नकली दांत।",
          description: "Replace missing teeth with comfortable and natural-looking custom dentures.",
          icon: <img src={icon3} alt="Dentures" className="w-full h-full object-contain" />
        },
        {
          title: "Fillings",
          tagline: "कैविटी और दांत की भराई।",
          description: "High-quality, tooth-colored composite materials used safely to fill cavities and stop decay.",
          icon: <img src={icon4} alt="Fillings" className="w-full h-full object-contain" />
        }
      ]
    },
    {
      category: "Cosmetic & Orthodontic",
      hindiTag: "स्माइल डिजाइन",
      description: "Transform your smile with our expert aesthetic treatments.",
      services: [
        {
          title: "Braces",
          tagline: "दांत सीधे करने वाले तार।",
          description: "Traditional and modern orthodontic options to effectively correct bites and crowding over time.",
          icon: <img src={icon5} alt="Braces" className="w-full h-full object-contain" />
        },
        {
          title: "Teeth whitening",
          tagline: "दांत चमकाना।",
          description: "Professional whitening procedures to remove deep stains and dramatically brighten your teeth.",
          icon: <img src={icon6} alt="Teeth whitening" className="w-full h-full object-contain" />
        }
      ]
    },
    {
      category: "General Care",
      hindiTag: "रूटीन चेकअप",
      description: "Essential care to keep your smile healthy and bright all year round.",
      services: [
        {
          title: "Teeth cleaning",
          tagline: "दांतों की सफाई और चमक।",
          description: "Detailed professional scaling to remove built-up plaque, preventing gingivitis and freshening your breath.",
          icon: <img src={icon7} alt="Teeth cleaning" className="w-full h-full object-contain" />
        },
        {
          title: "Oral health consultation",
          tagline: "एक्सपर्ट सलाह और चेकअप।",
          description: "Comprehensive dental checkups, personalized planning, and expert answers from our lead doctors.",
          icon: <img src={icon8} alt="Oral health consultation" className="w-full h-full object-contain" />
        }
      ]
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      <section className="bg-blue-900 text-white py-16 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Our Services</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed mb-8">
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
                  <div className="w-16 h-16 bg-transparent rounded-xl flex items-center justify-center text-blue-600 mb-6 overflow-hidden ring-1 ring-gray-100">
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
              resImg1,
              resImg2
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

