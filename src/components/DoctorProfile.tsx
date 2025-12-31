import Image from "next/image";

interface DoctorProfileProps {
  onBookAppointment: () => void;
}

export default function DoctorProfile({ onBookAppointment }: DoctorProfileProps) {
  return (
    <section className=" bg-brandBlue p-4 md:p-8 lg:p-12">
      <h2 className="text-white md:text-3xl font-bold text-center mb-6">Meet Our Principal Dentist</h2>

      <div className="bg-white rounded-lg p-4 md:p-8 shadow-sm max-w-6xl mx-auto">
        <div className="md:flex md:gap-8 md:items-start mb-8">
          <div className="text-center mb-6 md:mb-0 md:flex-shrink-0">
            <div className="w-48 md:w-64 aspect-[3/4] bg-gray-200 rounded-lg mx-auto mb-4 relative overflow-hidden">
              <Image
                src="/images/DR_Rahul.jpg"
                alt="Dr. Rahul Singh"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-[#2364a5]">Dr. Rahul Singh</h3>
            <p className="text-gray-600 font-medium">B.D.S</p>
            <p className="text-gray-600 font-medium">Teeth & Mouth Specialist</p>
          </div>

          <div className="space-y-4 text-gray-700 md:flex-grow">
            <p className="md:text-lg">
              Hello, I'm Dr. Rahul Singh, the proud owner of Vinayak Dental Clinic, committed to delivering excellence in oral healthcare. With our main branch located in Imlipara and an additional branch in Torwa, we have been dedicated to providing top-notch dental services since 2011.
            </p>

            <p className="md:text-lg">
              <strong>16+ years of clinical experience.</strong>
              In the realm of dental care, my expertise lies in three key areas. First and foremost is my proficiency in Orthodontic Treatment, where I specialize in crafting beautiful and healthy smiles for my patients. Second, I have extensive experience in Dental Implants, offering cutting-edge solutions for restoring dental functionality. Lastly, I excel in Advanced Root Canal Treatment, employing state-of-the-art 3D obturation technology to ensure precision and optimal outcomes.
            </p>

            <div className="md:grid md:grid-cols-2 md:gap-8 mt-6">
              <div>
                <h3 className="font-bold text-[#2364a5] mb-3 md:text-lg">Why Choose Us</h3>
                <h4 className="font-bold text-gray-800 mb-2">Expert and Experienced Team</h4>
                <p className="mb-2">Our clinic is home to skilled and compassionate dental professionals with years of experience. Whether it's routine dental care or complex procedures, you can trust that you are in the best hands.</p>

                <h4 className="font-bold text-gray-800 mb-2">State-of-the-Art Technology</h4>
                <p className="mb-2">We invest in the latest dental technologies and equipment to ensure that your treatment is efficient, comfortable, and effective. From digital X-rays to advanced sterilization techniques, we prioritize your safety and comfort.</p>

                <h4 className="font-bold text-gray-800 mb-2">Comprehensive Care</h4>
                <p>We offer a full spectrum of dental services, from preventive care to advanced treatments like implants and orthodontics. Our multi-specialty approach ensures that all your dental needs are met under one roof.</p>
              </div>

              <div>
                <h3 className="font-bold text-[#2364a5] mt-6 mb-3 md:mt-0 md:text-lg">⭐ Clinic Highlights</h3>
                <ul className="list-none md:text-lg space-y-2 mb-6">
                  <li className="flex items-start gap-2"><span>✅</span> <span>Intra Oral 3D Scanner</span></li>
                  <li className="flex items-start gap-2"><span>✅</span> <span>Advanced & high-quality treatment standards</span></li>
                  <li className="flex items-start gap-2"><span>✅</span> <span>16 years of trusted dental care</span></li>
                  <li className="flex items-start gap-2"><span>✅</span> <span>Patient-Centered Approach</span></li>
                  <li className="flex items-start gap-2"><span>✅</span> <span>Timely Appointments and Convenient Scheduling</span></li>
                  <li className="flex items-start gap-2"><span>✅</span> <span>Comfortable and Friendly Environment</span></li>
                </ul>

                <h3 className="font-bold text-[#2364a5] mb-3 md:text-lg">Specializations</h3>
                <ul className="list-disc list-inside md:text-lg space-y-1">
                  <li>Orthodontic Treatment</li>
                  <li>Dental Implants</li>
                  <li>Advanced Root Canal Treatment</li>
                  <li>Teeth & Mouth Specialist</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <button onClick={onBookAppointment} className="bg-brandBlue text-white py-3 px-6 rounded-lg font-bold w-full md:max-w-md md:mx-auto md:block">
          BOOK APPOINTMENT WITH DR. Rahul Singh
        </button>
      </div>
    </section>
  );
}