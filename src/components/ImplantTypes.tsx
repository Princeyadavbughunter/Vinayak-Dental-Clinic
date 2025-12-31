import Image from "next/image";

export default function ImplantTypes() {
  const treatments = [
    {
      title: "Dental Braces",
      price: "₹24,000",
      description: "Get the perfect smile with our advanced orthodontic braces.",
      features: [
        "Metal & Ceramic Options",
        "Effective for complex alignment",
        "Comfortable & Durable",
        "Expert follow-up care"
      ],
      image: "/images/implant/dental-braces.jpg"
    },
    {
      title: "Aligners",
      price: "₹75,000",
      description: "Invisible, removable, and comfortable teeth straightening.",
      features: [
        "Virtually Invisible",
        "Removable for eating/cleaning",
        "No metal wires or brackets",
        "Faster treatment time"
      ],
      image: "/images/implant/Transparent-Dental-Aligner.webp"
    }
  ];

  return (
    <section className="bg-black text-white p-4 md:p-8 lg:p-12 pb-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-bold text-center text-[#2364a5] mb-4">
          Treatment Charges
        </h2>
        <p className="text-center text-gray-300 mb-8 md:text-lg max-w-3xl mx-auto">
          Transparent pricing for your perfect smile at Vinayak Dental Clinic.
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {treatments.map((item, index) => (
            <div key={index} className="bg-white text-gray-800 p-6 rounded-lg shadow-lg border-2 border-transparent hover:border-[#01659e] transition-all transform hover:-translate-y-1">
              <div className="relative bg-gray-100 rounded-lg mb-4 h-48 flex items-center justify-center overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-center mb-2">{item.title}</h3>
              <div className="text-3xl font-bold text-center text-[#2364a5] mb-4">{item.price}</div>
              <p className="text-center mb-4 text-gray-600">{item.description}</p>
              <ul className="space-y-2 mb-6">
                {item.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="text-[#2364a5]">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full bg-brandBlue text-white py-3 rounded-lg font-bold hover:opacity-90 transition-opacity">
                Book Consultation
              </button>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gray-900 p-6 md:p-8 rounded-xl max-w-4xl mx-auto text-center border border-gray-700">
          <h3 className="text-2xl font-bold text-white mb-4">EMI & Finance Options</h3>
          <div className="grid md:grid-cols-2 gap-6 text-left">
            <div className="bg-gray-800 p-4 rounded-lg">
              <h4 className="font-bold text-[#2364a5] mb-2">Easy Financing</h4>
              <ul className="space-y-2 text-gray-300">
                <li>✅ Bajaj Finance available</li>
                <li>✅ No-cost EMI option</li>
              </ul>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg">
              <h4 className="font-bold text-[#2364a5] mb-2">Payment Plan</h4>
              <ul className="space-y-2 text-gray-300">
                <li>💰 ₹5,000 down payment</li>
                <li>📅 ₹1,900/month for 10 months</li>
                <li className="text-yellow-400 font-bold">🎁 Free Retainer (Worth ₹5,000)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}