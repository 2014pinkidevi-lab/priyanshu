import img1 from '../assets/images/regenerated_image_1777735854392.png';
import img2 from '../assets/images/regenerated_image_1777735856971.png';
import img3 from '../assets/images/regenerated_image_1777735859784.png';
import img4 from '../assets/images/regenerated_image_1777735861760.png';
import img5 from '../assets/images/regenerated_image_1777735863708.png';
import img6 from '../assets/images/regenerated_image_1777735865743.png';
import img7 from '../assets/images/regenerated_image_1777736779991.jpg';
import img8 from '../assets/images/regenerated_image_1777735913436.png';

export default function Gallery() {
  const images = [
    {
      url: img8,
      fallbackUrl: img8,
      alt: "Shree Ganesh Dental Clinic Logo",
      caption: "Our Clinic Logo"
    },
    {
      url: img1,
      fallbackUrl: img1,
      alt: "Clinic Interior",
      caption: "Advanced Dental Equipment"
    },
    {
      url: img2,
      fallbackUrl: img2,
      alt: "Clinic Entrance",
      caption: "Welcome to Our Clinic"
    },
    {
      url: img3,
      fallbackUrl: img3,
      alt: "Dental Care Room",
      caption: "State-of-the-Art Treatment"
    },
    {
      url: img4,
      fallbackUrl: img4,
      alt: "Reception Area",
      caption: "Pooja and Entrance"
    },
    {
      url: img5,
      fallbackUrl: img5,
      alt: "Signage",
      caption: "Glowing Signage"
    },
    {
      url: img6,
      fallbackUrl: img6,
      alt: "Waiting Area",
      caption: "Comfortable Waiting Lounge"
    },
    {
      url: img7,
      fallbackUrl: img7,
      alt: "Treatment Area",
      caption: "Hygienic Environment"
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      <section className="bg-blue-50 py-16 text-center border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-4">Clinic Gallery</h1>
          <p className="text-xl text-blue-700 max-w-2xl mx-auto">
            Take a virtual tour of our modern, hygienic, and comfortable facilities designed for your peace of mind.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {images.map((image, index) => (
              <div key={index} className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 bg-gray-100">
                <div className="aspect-[4/3] w-full bg-gray-200 flex items-center justify-center text-gray-400 relative">
                  <img 
                    src={image.url} 
                    onError={(e) => { e.currentTarget.src = image.fallbackUrl; e.currentTarget.onerror = null; }}
                    alt={image.alt} 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="text-white font-bold text-lg">{image.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
