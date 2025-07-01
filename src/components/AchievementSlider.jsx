// src/components/AchievementSlider.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { StarBackground } from "@/components/StarBackground"; // Import StarBackground
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import certificate1 from "../assets/certificates/certificate1.png";
import certificate2 from "../assets/certificates/certificate2.png";
import certificate3 from "../assets/certificates/certificate3.png";
import certificate4 from "../assets/certificates/certificate4.png";
import certificate5 from "../assets/certificates/certificate5.png";
import certificate6 from "../assets/certificates/certificate6.png";
import certificate7 from "../assets/certificates/certificate7.png";


const certificates = [
  {
    id: 1,
    platform: "JPMorgan Chase",
    title: "Code For Good Hackathon, Mumbai 2025",
    description:
      " Were amoung the Top 2 best teams in our Problem statement, among 30+ national finalists teams, shortlisted from 50,000+ applicants, for developing a collaboration platform to streamline NGO-led teaching in government schools.",
    image: certificate1,
    link: "https://drive.google.com/file/d/1s2LpDZXGduTe2kZTei1f239abk35dp4m/view?usp=sharing",
  },
  {
    id: 2,
    platform: "Stanford University",
    title: "Supervised machine learning: Regression and Classification",
    description:
      "Completed upto 50+ modules on supervised machine learning, focusing on regression and classification techniques, including linear regression and logistic regression in Python.",
    image: certificate2,
    link: "https://drive.google.com/file/d/193D71RQmUW-G8PJEHQ5FbW84cf6mlcmw/view?usp=sharing",
  },
  {
    id: 3,
    platform: "Stanford University",
    title: "Advance machine learning: Deep Learning in Python",
    description:
      "Learned deep learning techniques using TensorFlow and Keras, focusing on neural networks, decision trees, and ensemble methods with 30+ modules of upto 40+ hours of content.",
    image: certificate3,
    link: "https://drive.google.com/file/d/1gJ3XRzFaTTaoCQg9swI_rGKBweqEhfr7/view?usp=sharing",
  },

   {
    id: 4,
    platform: "Indian Institute of Technology, Bombay",
    title: "16th British Parliamentary Debate",
    description:
      "Participated in the 16th British Parliamentary Debate at IIT Bombay, showcasing skills in public speaking and judging national-level debates as an adjudicator. Reached to the Finals amoung 100+ Adjudicators Selected from top Institutes across India through rigorous selection process.",
    image: certificate4,
    link: "https://drive.google.com/file/d/1-6udRvekgubMsOwx_-0hYb7zSbCsemYT/view?usp=drive_link",
  },

  {
    id: 5,
    platform: "IEEE, DTU",
    title: "Vihaan 007 Hackathon, 2024",
    description:
      "Finalist in the Vihaan 007 Hackathon organized by IEEE DTU, where we developed a web application to streamline the process of Tourism in India, enhancing user experience and accessibility.",
    image: certificate5,
    link: "https://drive.google.com/file/d/1YmuzC5EMJrDbSHuCfOK3v9IiXBXlEn9d/view?usp=drive_link",
  },
 
  {
    id: 6,
    platform: "IEEE DTU",
    title: "Vihaan 008 Hackathon, 2025",
    description:
      "Participated in the Vihaan 008 Hackathon organized by IEEE DTU, where we developed a web application related to fintech, enhancing financial literacy and accessibility for users.",
    image: certificate6,
    link: "https://drive.google.com/file/d/1FYnREMpVhNlL151WExYb4mUbndSSf2Xf/view?usp=sharing",
  },

  {
    id: 7,
    platform: "Indian Institute of Technology, Madras",
    title: "Joy Of Computing in Python - NPTEL Course",
    description:
      "Top1% and an 'Elite 'in the Joy of Computing using Python course by IIT Madras, covering Python programming fundamentals, data structures, and algorithms with a focus on practical applications.",
    image: certificate7,
    link: "https://drive.google.com/file/d/1qAKAQbBtKbCeImGGh7bpGvhXA6bv-4Hh/view?usp=sharing",
  },
];

export const AchievementSlider = () => {
  return (
    <section
      id="certifications"
      className="py-16 relative bg-black text-white overflow-hidden"
    >
      {/* Starry Background */}
      <StarBackground />

      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold animate-fade-in-delay-1">
          <span className="text-primary animate-fade-in-delay-2">My Achievements</span> & Certifications
        </h2>
      </div>
      <div className="max-w-7xl mx-auto px-4">
        <Swiper

          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{ clickable: true, dynamicBullets: true }}
          navigation={true}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {certificates.map((cert) => (
            <SwiperSlide key={cert.id}>
              <div className="animate-slide-in-left bg-secondary/30 rounded-xl shadow-md p-4 h-full flex flex-col justify-between max-h-[450px]">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="h-48 w-full object-cover rounded-md mb-4"
                />
                <div className="flex-grow mb-3 min-h-16">
                  <h3 className="text-lg font-semibold">{cert.platform}</h3>
                  <h4 className="text-md font-medium text-primary">
                    {cert.title}
                  </h4>
                  <p className="text-sm text-muted-foreground mt-2">
                    {cert.description}
                  </p>
                </div>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-center text-sm font-medium text-white bg-primary hover:bg-primary/80 px-4 py-2 rounded transition"
                >
                  View Certificate
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};


export default AchievementSlider;
