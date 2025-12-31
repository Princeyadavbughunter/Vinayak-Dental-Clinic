import Image from "next/image";

export default function GoogleReviews() {
  const reviews = [
    {
      name: "Pooja Kashyap",
      initials: "PK",
      date: "4 months ago",
      review: "Dr.rahul sir very good dental care professionalism, care, cleanliness, and clear communication, mentioning specific positive experiences like painless treatment, detailed explanations, and effective results, often focusing on the dentist's skill and the friendly, competent staff that makes patients comfortable and confident....Thank you sir"
    },
    {
      name: "Subhashree Ray",
      initials: "SR",
      date: "1 months ago",
      review: "I recently visited Vinayak Dental Clinic and had a very good experience. The doctor and staff were very professional, polite, and caring throughout the treatment. I felt very comfortable and well taken care of. I am truly happy with the treatment I received and would highly recommend this clinic to others."
    },
    {
      name: "Reshma Rakse",
      initials: "RR",
      date: "8 months ago",
      review: "They were absolutely amazing ! Dr. Alka yadav ma'am, Dr. Rahul singh sir ..both dental doctor's was very professional and caring. I had a great experience and would highly recommend them to anyone looking for excellent dental care ..."
    },
    {
      name: "Jitesh Chandra",
      initials: "JC",
      date: "6 months ago",
      review: "I had the best experience here! The orthodontic treatment was excellent, and the doctor is super friendly and caring. Really happy with the results!"
    }];

  return (
    <section className="p-4 md:p-8 lg:p-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-6 md:mb-10">
          <Image
            src="/images/google.png"
            alt="Google Logo"
            width={128}
            height={48}
            className="mx-auto mb-4 object-contain"
          />
          <h2 className="text-xl md:text-3xl font-bold">What Our Patients Say</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white border rounded-lg p-4 md:p-6 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-brandBlue text-white rounded-full flex items-center justify-center font-bold">
                  {review.initials}
                </div>
                <div>
                  <h3 className="font-bold md:text-lg">{review.name}</h3>
                  <p className="text-sm text-gray-600">{review.date}</p>
                </div>
              </div>
              <div className="flex text-yellow-400 mb-3">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>⭐</span>
                ))}
              </div>
              <p className="text-gray-700 text-sm md:text-base">{review.review}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}