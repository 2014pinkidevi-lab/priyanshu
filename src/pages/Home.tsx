import { Link } from 'react-router-dom';
import { Phone, CheckCircle2, Star, Clock, ArrowRight } from 'lucide-react';
import generatedHeroImg from '../assets/images/regenerated_image_1778510057320.jpg';

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-blue-50 pt-16 pb-24 lg:pt-24 lg:pb-32 overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-100 rounded-full opacity-50 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-blue-100 rounded-full opacity-50 blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <a href="https://maps.app.goo.gl/Czg34RFuiokUXpjX6?g_st=aw" target="_blank" rel="noopener noreferrer" className="inline-block px-4 py-2 bg-blue-100 text-blue-800 font-semibold rounded-full text-sm mb-6 shadow-sm hover:bg-blue-200 transition">
              Worli, Mumbai
            </a>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
              <span className="text-blue-600">Multi-speciality Dental Clinic</span> in Worli
            </h1>
            <p className="text-2xl text-gray-700 font-semibold mb-2">
              We care about your smile
            </p>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              At Shree Ganesh Dental Clinic, we are committed to providing the highest quality dental care in a hygienic, comfortable, and friendly environment. Our goal is to make every visit a smooth and Comfortable while helping you achieve a healthy and confident smile.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a href="tel:8888086156" className="inline-flex justify-center items-center px-8 py-4 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 transition shadow-lg hover:shadow-xl hover:-translate-y-0.5 duration-200">
                <Phone className="mr-2" size={20} />
                Book Appointment
              </a>
              <Link to="/services" className="inline-flex justify-center items-center px-8 py-4 bg-white text-blue-700 font-bold rounded-full border-2 border-blue-100 hover:border-blue-200 hover:bg-blue-50 transition shadow-sm">
                Explore Services
              </Link>
            </div>

            <div className="flex items-center space-x-4 bg-white p-4 rounded-xl shadow-sm border border-blue-50 inline-flex">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="text-yellow-400 fill-current" size={20} />
                ))}
              </div>
              <p className="text-sm font-medium text-gray-700 italic">
                "Professional, courteous, and friendly doctors made me feel like family."
              </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square bg-blue-600 rounded-full absolute inset-0 transform translate-x-4 translate-y-4 opacity-10"></div>
            {/* Placeholder for clinic image */}
            <div className="relative aspect-[4/3] bg-gray-200 rounded-3xl overflow-hidden shadow-2xl border-4 border-white flex items-center justify-center bg-blue-50">
              <img 
                src={generatedHeroImg} 
                onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"; e.currentTarget.onerror = null; }}
                alt="Dr Akshay, Dr Aasawari, and patient inside clinic" 
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 animate-bounce" style={{ animationDuration: '3s' }}>
              <div className="flex items-center space-x-4">
                <div className="bg-blue-100 p-3 rounded-full text-blue-600">
                  <Clock size={28} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">Perfect for Office Goers</p>
                  <p className="font-bold text-gray-900 leading-tight">11 AM - 8 PM<br/><span className="text-blue-600">No Lunch Break</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Services Strip */}
      <section className="py-16 bg-white shrink-0">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Comprehensive Dental Care</h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">From routine checkups to advanced smile makeovers, we provide all services under one roof.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Root Canal (RCT)", desc: "Painless & quick procedure." },
              { title: "Dental Implants", desc: "Permanent & natural look." },
              { title: "Invisalign & Braces", desc: "Clear aligners & smile design." },
              { title: "Smile Makeover", desc: "Cosmetic dentistry & aesthetics." }
            ].map((service, idx) => (
              <div key={idx} className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-blue-200 hover:shadow-md transition cursor-pointer group">
                <CheckCircle2 className="text-blue-500 mb-4 group-hover:scale-110 transition-transform" size={32} />
                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.desc}</p>
                <Link to="/services" className="text-blue-600 font-medium flex items-center group-hover:text-blue-700">
                  Learn more <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/services" className="inline-flex items-center font-bold text-blue-700 hover:text-blue-800 underline underline-offset-4">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">Patient Testimonials</h2>
            <p className="text-xl text-blue-700 max-w-2xl mx-auto">See what our patients have to say about their experience.</p>
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
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-800 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 opacity-10">
           <svg width="400" height="400" viewBox="0 0 24 24" fill="currentColor"><path d="M10 21V11c0-1.2-1.5-1.5-2-1.5S6 9.8 6 11v10"/><path d="M14 21V11c0-1.2 1.5-1.5 2-1.5s2 .3 2 1.5v10"/><path d="M10 5.5v-.5c0-1.1.9-2 2-2s2 .9 2 2v.5"/><path d="M6 14.5c0-1 1-1.5 1-1.5s1 .5 1 1.5"/><path d="M18 14.5c0-1-1-1.5-1-1.5s-1 .5-1 1.5"/></svg>
        </div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready for a Brighter Smile?</h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Dr. Aasawari personally attends all calls to provide expert guidance from the very start. Call today to schedule your consultation.
          </p>
          <a href="tel:8888086156" className="inline-flex justify-center items-center px-10 py-5 bg-white text-blue-800 font-bold text-lg rounded-full hover:bg-gray-50 transition shadow-2xl hover:scale-105 duration-200">
            <Phone className="mr-3 text-blue-600" size={24} />
            Call: 88880 86156
          </a>
          <p className="mt-6 text-blue-200 font-medium">
             <a href="https://maps.app.goo.gl/Czg34RFuiokUXpjX6?g_st=aw" target="_blank" rel="noopener noreferrer" className="hover:text-white underline underline-offset-4">
                Located opposite Canara Bank, Worli
             </a>
          </p>
        </div>
      </section>
    </div>
  );
}
