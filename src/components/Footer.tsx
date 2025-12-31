import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-white p-4 md:p-8 lg:p-12">

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-6 md:mb-12">
          <Image
            src="/images/vinkeylogo.JPG"
            alt="Vinayak Dental Clinic"
            width={192}
            height={48}
            className="mx-auto mb-4 h-auto"
          />
        </div>

        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left mb-8">
          <div>
            <h3 className="font-bold text-[#2364a5] mb-2 md:text-lg">Contact Us</h3>
            <a href="tel:+919244966707" className="block text-[#2364a5] font-bold md:text-lg hover:text-black transition-colors">Primary: 9244966707</a>
            <a href="tel:+919039730707" className="block text-[#2364a5] font-bold md:text-lg hover:text-black transition-colors">Alt: 9039730707</a>
            <p className="text-gray-700">vinayakdentalhelp@gmail.com</p>
          </div>

          <div>
            <h3 className="font-bold text-[#2364a5] mb-2 md:text-lg">Clinic Timings</h3>
            <p className="text-gray-700 md:text-lg">
              Monday – Saturday: 10:00 AM to 8:00 PM<br />
              Sunday: 10:00 AM to 1:00 PM
            </p>
          </div>

          <div>
            <h3 className="font-bold text-[#2364a5] mb-2 md:text-lg">Location</h3>
            <a
              href="https://maps.app.goo.gl/TvaSZvAhUb8q4cWPA"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 font-bold hover:text-[#2364a5] transition-colors cursor-pointer block"
            >
              📍 Vinayak Dental Clinic<br />
              Imlipara Main Road, Near Muslim Sarai,<br />
              Old Bus Stand, Bilaspur, Chhattisgarh – 495001
            </a>
            <p className="text-sm text-gray-500 mt-1">Click to open in Google Maps</p>
          </div>
        </div>

        {/* Google Maps Embed */}
        <div className="mt-6 bg-gray-200 rounded-lg overflow-hidden h-[300px] md:h-[400px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d37090.163602374596!2d82.12314567470759!3d22.07017441054486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a280b650606f4b1%3A0x959286fab11a314b!2sVinayak%20Dental%20Clinic!5e1!3m2!1sen!2sin!4v1767178191751!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Orovac Dental Care Location - Malviya Nagar, Jaipur, Rajasthan 302017"
          ></iframe>
        </div>
      </div>
    </footer>
  );
}