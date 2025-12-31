import Image from "next/image";

interface HeroSectionProps {
  onBookAppointment: () => void;
}

export default function HeroSection({ onBookAppointment }: HeroSectionProps) {
  return (
    <section className="p-4 md:p-8 lg:p-12 max-w-7xl mx-auto">
      <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-center mb-6 leading-tight">
        Transform Your Smile With<br />
        <span className="text-[#2364a5]">Vinayak Dental Clinic</span>
      </h1>

      <div className="md:flex md:items-center md:gap-8 md:mb-12">
        <div className="relative rounded-lg h-48 md:h-[400px] mb-6 md:mb-0 md:flex-1 overflow-hidden shadow-lg">
          <div className="relative rounded-lg h-48 md:h-[400px] mb-6 md:mb-0 md:flex-1 overflow-hidden shadow-lg bg-black">
            <iframe
              className="w-full h-full object-cover rounded-lg"
              src="https://www.youtube.com/embed/h6QcqqguqgQ?si=VrJWaxNZTqPHn4cU"
              title="Vinayak Dental Clinic Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Special Offer Section */}
        <div className="bg-gradient-to-r from-black to-gray-800 text-white p-6 rounded-xl text-center mb-6 md:mb-0 md:flex-1 flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-[#73b23d]">
            Perfect Healthy Smile
          </h2>
          <h3 className="text-xl md:text-2xl font-semibold mb-6 text-white">
            Transform Your Smile with Expert Dental Care
          </h3>
          <div className="space-y-3 text-lg md:text-xl font-medium text-[#73b23d]">
            <p>✔ Painless Treatments</p>
            <p>✔ Advanced Technology</p>
            <p>✔ Trusted Dentists</p>
          </div>
          <button
            onClick={onBookAppointment}
            className="bg-brandBlue text-white px-8 py-4 rounded-xl text-xl font-bold shadow-lg hover:opacity-90 transition-colors pulse-element w-full md:w-auto mt-8"
          >
            📞 Book Consultation
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-3 mb-8 md:flex-row md:justify-center">
        <button onClick={onBookAppointment} className="bg-brandBlue text-white py-4 px-8 rounded-lg font-bold text-lg hover:opacity-90 transition-colors md:min-w-[240px]">
          📞 Book Consultation
        </button>
        <a
          href="tel:+919039730707"
          className="bg-brandBlue text-white py-4 px-8 rounded-lg font-bold text-lg text-center hover:opacity-90 transition-colors md:min-w-[240px]"
        >
          CALL NOW ☏
        </a>
      </div>

      {/* Why Choose Us Section */}
      <div className="mb-8">
        <h3 className="text-xl md:text-3xl font-bold text-center text-gray-900 mb-6">
          Why choose <span className="text-[#73b23d]">Vinayak Dental Clinic?</span>
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 mb-6">
          {[
            { icon: "/images/heroicons/Experience.png", title: "16+ Years Experience", desc: "Trusted dental care since 2011" },
            { icon: "/images/heroicons/premium.png", title: "High Quality", desc: "Advanced treatment standards" },
            { icon: "/images/heroicons/team.png", title: "Expert Team", desc: "Dr. Rahul Singh" },
            { icon: "/images/heroicons/Untitled.jpeg", title: "Intra Oral 3D Scanner", desc: "Latest Technology" },
            { icon: "/images/heroicons/tech.png", title: "Advanced Technology", desc: "Digital Dentistry" }
          ].map((usp, index) => (
            <div key={index} className="text-center bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow md:p-6">
              <Image src={usp.icon} alt={usp.title} width={48} height={48} className="mx-auto mb-2" />
              <h4 className="font-bold text-sm md:text-base text-gray-900 mb-1">{usp.title}</h4>
              <p className="text-xs md:text-sm text-gray-600">{usp.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gray-50 p-4 md:p-8 rounded-lg md:max-w-3xl md:mx-auto">
        <h3 className="font-bold text-[#2364a5] mb-3 md:text-xl">Our Highlights</h3>
        <ul className="space-y-2 mb-4">
          <li className="flex items-start gap-2">
            <span className="text-[#73b23d]">✔</span>
            <span className="text-sm md:text-base">16+ Years of Trusted Dental Care</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#73b23d]">✔</span>
            <span className="text-sm md:text-base">Advanced & High-Quality Treatment Standards</span>
          </li>

          <li className="flex items-start gap-2">
            <span className="text-[#73b23d]">✔</span>
            <span className="text-sm md:text-base">Specialist in Dental Braces & Aligners</span>
          </li>
        </ul>
        <button onClick={onBookAppointment} className="bg-brandBlue text-white py-3 px-6 rounded-lg font-bold w-full hover:opacity-90 transition-colors md:max-w-md md:mx-auto md:block">
          Request a Call back ➤
        </button>
        <small className="block text-center mt-2 text-gray-600 md:text-base">
          Professional Consultation & Digital scan
        </small>
      </div>
    </section>
  );
}