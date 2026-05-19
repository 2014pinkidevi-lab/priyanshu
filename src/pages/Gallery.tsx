import galleryImg1 from '../assets/images/regenerated_image_1778918128541.png';
import galleryImg2 from '../assets/images/regenerated_image_1779176347070.png';
import galleryImg3 from '../assets/images/regenerated_image_1778918132960.png';
import galleryImg4 from '../assets/images/regenerated_image_1778918135052.png';
import galleryImg5 from '../assets/images/regenerated_image_1778918767719.png';

import t1b from '../assets/images/regenerated_image_1778595180767.jpg';
import t1a from '../assets/images/regenerated_image_1778131636244.jpg';
import t2b from '../assets/images/regenerated_image_1778131638408.jpg';
import t2a from '../assets/images/regenerated_image_1778131639932.jpg';
import t3b from '../assets/images/regenerated_image_1778919664294.png';
import t3a from '../assets/images/regenerated_image_1778918318781.webp';

export default function Gallery() {
  const images = [
    {
      url: galleryImg1,
      fallbackUrl: galleryImg1,
      alt: "Clinic Facility",
      caption: "High-Quality Care Center"
    },
    {
      url: galleryImg2,
      fallbackUrl: galleryImg2,
      alt: "Clinic Interior",
      caption: "Advanced Dental Equipment"
    },
    {
      url: galleryImg3,
      fallbackUrl: galleryImg3,
      alt: "Clinic Setup",
      caption: "Modern Treatment Tools"
    },
    {
      url: galleryImg4,
      fallbackUrl: galleryImg4,
      alt: "Dental Care Room",
      caption: "State-of-the-Art Treatment"
    },
    {
      url: galleryImg5,
      fallbackUrl: galleryImg5,
      alt: "Dental Environment",
      caption: "Clean & Hygienic Space"
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
          <div className="grid grid-cols-1 gap-8">
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
                  <p className="text-white font-bold max-text-sm md:text-lg">{image.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before and After Section */}
      <section className="bg-white py-16 md:py-24 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Case 1 */}
            <div className="bg-gray-50 rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col gap-4">
              <div>
                <h4 className="text-center text-sm font-bold text-gray-500 mb-2 uppercase tracking-wider">Before</h4>
                <div className="relative rounded-xl overflow-hidden aspect-square">
                  <img src={t1b} alt="Before treatment snapshot 1" className="w-full h-full object-cover" />
                </div>
              </div>
              <div>
                <h4 className="text-center text-sm font-bold text-green-600 mb-2 uppercase tracking-wider">After</h4>
                <div className="relative rounded-xl overflow-hidden aspect-square">
                  <img src={t1a} alt="After treatment snapshot 1" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>

            {/* Case 2 */}
            <div className="bg-gray-50 rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col gap-4">
              <div>
                <h4 className="text-center text-sm font-bold text-gray-500 mb-2 uppercase tracking-wider">Before</h4>
                <div className="relative rounded-xl overflow-hidden aspect-square">
                  <img src={t2b} alt="Before treatment snapshot 2" className="w-full h-full object-cover" />
                </div>
              </div>
              <div>
                <h4 className="text-center text-sm font-bold text-green-600 mb-2 uppercase tracking-wider">After</h4>
                <div className="relative rounded-xl overflow-hidden aspect-square">
                  <img src={t2a} alt="After treatment snapshot 2" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>

            {/* Case 3 */}
            <div className="bg-gray-50 rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col gap-4">
              <div>
                <h4 className="text-center text-sm font-bold text-gray-500 mb-2 uppercase tracking-wider">Before</h4>
                <div className="relative rounded-xl overflow-hidden aspect-square">
                  <img src={t3b} alt="Before treatment snapshot 3" className="w-full h-full object-cover" />
                </div>
              </div>
              <div>
                <h4 className="text-center text-sm font-bold text-green-600 mb-2 uppercase tracking-wider">After</h4>
                <div className="relative rounded-xl overflow-hidden aspect-square">
                  <img src={t3a} alt="After treatment snapshot 3" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
