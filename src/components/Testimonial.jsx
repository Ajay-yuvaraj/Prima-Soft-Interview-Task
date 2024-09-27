import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const sliderContents = [
    {
        name: "Jacob Jones",
        text: "As a budding startup, we sought a financial solution that was simple, secure, and scalable. Swift Revel checked all the boxes, enabling focus on growth.",
        image:"/img/Jacobs.png",
    },
    {
        name: "Marvin McKinney",
        text: "Since switching to Swift Revel, I finally have peace of mind regarding my business finances. With their secure platform, I trust my data's protection completely.",
        image:"/img/Mervin.png"
    },
    {
        name: "Theresa Webb",
        text: "Swift Revel empowers me to manage my business finances with confidence and ease. Their integrated tax solutions ensure I'm always tax compliant.",
        company: "Company A",
        image:"/img/Terasa.png"
    },
    {
        name: "Jones",
        text: "We needed a payment gateway that could handle our diverse customer base. Swift Revel offers a wide range of payment options, making it easy for our clients to pay.",
        image:"/img/Jones.png"
    },
    {
        name: "Ronald Richards",
        text: "Since switching to Swift Revel, I finally have peace of mind regarding my business finances. With their secure platform, I trust my data's protection completely.",
        company: "Company A",
        image:"/img/John.png"
    },
    {
        name: "Cody Fisher",
        text: " As a Freelancer, managing invoices and chasing payments was a constant headache. Now, with automated and secure payment I am getting paid on time, every time.",
        image:"/img/Jacobs.png"

    }
    
]

const Testimonial = () => {
  const [currentSlideDiv, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);


    const settings = {
        dots: false,
        infinite: true,
        speed: 2500, 
        slidesToShow: 3.7,
        slidesToScroll: 1,
        centerMode: false,
        arrows: false,
        pauseOnHover: false,
        autoplay: true,
        beforeChange: (index, newIndex) => setCurrentSlide(newIndex),
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
            
        ]
    }

    useEffect(() => {
        const handleScroll = (e) => {
          if (e.deltaY > 0 || e.deltaX > 0) {
            sliderRef.current.slickNext();
          } else if (e.deltaY < 0 || e.deltaX < 0) {
            sliderRef.current.slickPrev();
          }
        };
    
        window.addEventListener('wheel', handleScroll);
    
        return () => {
          window.removeEventListener('wheel', handleScroll);
        };
      }, []);

    return (
        <div className="Testimonial-sections">
          <div className="CustomTitle-Testimonials">
            <h1 className="Testimonial-Title">What Users Say</h1>
            <p className="Testimonial-Description">
              Testimonials that speak louder than words! Customer stories that light up our day.
            </p>
          </div>
        <div className='content-slider'>
          <Slider ref={sliderRef} {...settings}>
            {
              sliderContents.map((item, index) => (

                <div className={`Customer-Reviews-Slide ${( index % 2 === currentSlideDiv % 2 ) ? 'slide-odd' : 'slide-even'}`} key={index}>
                  <div className="testimonial-slide-inner">
                    <div className="testimonial-profile">
                      <img src={item.image} alt={item.name} className="profile-image" />
                    </div>
                    <h4 className='Customer-name'>{item.name}</h4>
                    <p className='ReviewContent'>{item.text}</p>
                  </div>
                </div>
              ))
            }
          </Slider>
          </div>
        </div>
    );
}

export default Testimonial;


