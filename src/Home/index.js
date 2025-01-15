import React from "react";
import "./home.css";
import { useState, useEffect } from "react";
import {Link, useNavigate} from "react-router-dom";
import {useMediaQuery} from "react-responsive";


const Header = () => {
    const navigate = useNavigate();
    const handleLogin = () => { navigate("/Login");}
  
  return (
    <header>
      <div className="logo-container">
        <img className="ganz-logo" src="/ganz-logo.png" alt="Ganzmusik Logo" />
      </div>

      <p className="log-in" onClick={handleLogin}>Log in</p>
      <Link to="/Register">
      <button className="apply">Apply</button>
      </Link>
      
    </header>
  );
};
const ImageSlider = () => {
  const images = [
    "/slide-image1.jpg",
    "/slide-image2.jpg",
    "/slide-image3.jpg",
    "/slide-image4.jpg",
    "/slide-image5.jpg",
    "/slide-image1.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="slider">
      <div
        className="slider-inner"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          transition: "transform 1s ease-in-out",
          display: "flex",
        }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index}`}
            className="slide"
            style={{
              width: "100%",
              flexShrink: 0,
            }}
          />
        ))}
      </div>
    </div>
  );
};

const AboutUs = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const toggleReadMore = () => {
        setIsExpanded(!isExpanded);
    };
  return (
    <div className="about-us">
      <h2>Who we are</h2>
      <p>
        Ganzmusik is a music school that provides complete music trainnig for everyone regardless of age, or financial background. We belive that{!isExpanded && "..."} {isExpanded && (<span>music is a universal language that improves mental & emotional health, thereby increasing creativiy and bringing about a community of happy, loving, and productive people.<br /> <br />
        As it sounds "Ganz", our trainning covers a wide areas of musicianship, aiming to make out from it a full musician. whether you dream of playing in the orchestra, or becoming a concert pianist, or you have a strong love for music, there is something exiting waiting for you here.</span> )} <br/>
        <button onClick={toggleReadMore} style={{
            position:"relative",
            cursor:"pointer",
            left:"30%",
            bottom:"-0.5rem",
            backgroundColor:"transparent",
            border:"none",
            color:"var(--ganz-color)",
        }}>
            {isExpanded ? "Read Less" : "Read More"}
        </button>
      </p>
        
    </div>
  );
};

const Programs = () => {
  const programs = [
    {
        title: <h1>PIANO</h1>,
        description:<p>... this covers a wide range of areas including basics of music reading, keyboard fingering, chords and cadences, solo and choral accompaniments, hymns playing, classicals, improvisation etc.</p>,
    },
    {
        title: <h1>VIOLIN</h1>,
        description:<p>...this course provides an excellent opportunity to mastering the art of violin playing, bringing every player to the reality of how much control music has on everything. You learn tunning, posture, bowing & plucking, musical interpretation, vibrato, double stops etc.  </p>,
    },
    {
        title: <h1>GUITAR</h1>,
        description:<p>...here is a vast course in guitar playing where you are trained in proper posture and techniques, chords, scales, arpeggios and many other areas, bringing you into total command of the guitar for pleasure or carreer. </p>,
    },
    {
        title: <h1>SAXOPHONE</h1>,
        description:<p>...you get practical knowledge and skill to play all the saxophone types. you learn breath control, embouchure, articulation, improvisation, scales, fingering etc. </p>,
    },
    {
        title: <h1>DRUMS & PERCUSSION</h1>,
        description:<p>...focusing on meter, syncopation, rhythms, improvisation,performance & ensemble playing, orcherstra percussion, rock, jazz, pop etc. </p>,
    },
    {
        title: <h1>TALKING DRUM (AFRICA)</h1>,
        description:<p>...this course gives a rare opportunity to learn the values of "Gan-gan",... its history, cultural significance, types, grips and holds, melody & improvisation, meter & complex rhythms.   </p>,
    },
    {
        title: <h1>MUSIC PROD. & MNGT.</h1>,
        description:<p>... a lively course that grants you skills to handle DAWs and studio operations, labels and artist development & management, online streaming, copyrights, & relevant projects,  </p>,
    },
    {
        title: <h1>COMPOSITION</h1>,
        description:<p>... equipping you with skills in modern and ancient composition, delving into areas such as compositional techniques, music theory, music history, orchestration, performance.</p>,
    },
    {
        title: <h1>DANCE & CHOREOGRAPHY</h1>,
        description:<p>...this course opens you up to priciples and application of movements, space & time, notation, aesthetic approaches, performance, and analysis. </p>,
    },
    {
        title: <h1>GENERAL MUSICIANSHIP</h1>,
        description:<p>...covering a wide range of foundational musical concepts, this course is designed to bring out the best musician in you. You get to learn Tonic-solfarization, simple harmony, rhythm, ensembles, improvisation..." </p>,
    },
    
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const shiftRight = () => {
    setCurrentIndex((rightItem) =>
      rightItem === 9 ? rightItem : rightItem + 1
    );
  };

  const shiftLeft = () => {
    setCurrentIndex((leftItem) => (leftItem === 0 ? leftItem : leftItem - 1));
  };

  const isTablet = useMediaQuery({query: '(min-width: 768px) and (max-width: 1023px)'});
  const islarge = useMediaQuery({query: '(min-width: 1024px)'});
  const programStyle = {
    transform: isTablet ? `translateX(-${currentIndex * 116}%)`: islarge ? `translateX(-${currentIndex * 105}%)` : `translateX(-${currentIndex * 100}%)` ,

  } 

  return (
    <div className="programs-wrapper">
      <h2>Our Programs</h2>

      <div className="program-container">
        <div
          className="program"
          style={programStyle}>

          {programs.map((program, index) => (
            <div className="program-slide" key={index}>
              {program.title}{program.description}
              <Link to="/Register">
                <button className="program-apply">Apply</button>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <button className="chevron-left" onClick={shiftLeft}>
        <img src="/chevron-right.svg" alt="chev-right" />
      </button>
      <button className="chevron-right" onClick={shiftRight}>
        {" "}
        <img src="/chevron-right.svg" alt="chev-right" />
      </button>
    </div>
  );
};
const UpcomingEvents = () => {
    const events = [
        {   date: "Jan 15, 2025", 
            time: "18:00", 
            title: "Winter Concert", 
            description: "Join us for an interesting night of poular and classical music performances by our students." },
        {   date: "April 1, 2025", 
            time: "19:30", 
            title: "Jazz Night", 
            description: "Experience an evening of smooth jazz and improvisation." },
        {   date: "Sept 15, 2025",
            time: "16:00", 
            title: "Spring Recital", 
            description: "Our students showcase their progress in this annual recital." },
        {   date: "2024-04-25", 
            time: "14:00", 
            title: "Music Workshop & Introduction", 
            description: "Look forward to our introductory session for aspiring musicians of all levels." },
    ];

    const handleMouseEnter = (e) => {
        e.currentTarget.style.backgroundColor = "#ffece7";
    };

    const handleMouseLeave = (e) => {
        e.currentTarget.style.backgroundColor = "transparent";
    };

    return (
        <div className="upcoming-events">
            <h2 style={{
                padding:"0 1rem",
                backgroundColor:"var(--ganz-color)",
                color:"#f4f4f4",
                height:"4rem",
                alignContent:"center",
                }}>UPCOMING EVENTS</h2>
            <ul className="events">
                {events.map((event, index) => (
                    <li 
                        key={index}
                        className="event-item"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        style={{ 
                            padding: "10px",
                            listStyleType:"none",
                            borderBottom:"solid#20405d",
                            borderRadius: "3px",
                            transition: "background-color 0.7s" }}
                    >
                        <h3>{event.title}</h3>
                        <p style={{
                            display:"flex",
                            alignItems:"center",
                            gap:"5px",
                        }}><img src="\date-icon.svg" />{event.date} 
                        </p>
                        <p style={{
                            display:"flex",
                            alignItems:"center",
                            gap:"5px",
                        }}>
                        <img src="\time-icon.svg" />{event.time}</p>
                        <p>{event.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};
const Teachers = () => {
    const teachers = [
        {
            name: "Tomi Williams",
            instrument: "Piano & Organ",
            bio: "Williams has over 15 years experience playing and teaching piano and has performed in many concerts in America and West Africa.",
            image: "/profile-icon.svg",
        },
        {
            name: "Mappy Jones",
            instrument: "Violin",
            bio: "Jones is a renowned violinist with a passion for teaching and a love for classical music. ",
            image: "/profile-icon.svg",
        },
        {
            name: "Peniel Michael",
            instrument: "Guitar",
            bio: "Michael is a versatile guitarist with expertise in various genres, including rock, jazz, and classical.",
            image: "/profile-icon.svg",
        },
        {
            name: "Emily Davis",
            instrument: "Saxophone",
            bio: "Emily is a skilled saxophonist known for her improvisational skills and vibrant performances.",
            image: "/profile-icon.svg",
        },
    ];

    return (
        <div className="teachers">
            <h2>Meet Our Instructors</h2>
            <div className="teacher-profiles">
                {teachers.map((teacher, index) => (
                    <div className="teacher-profile" key={index}>
                        <img src={teacher.image} alt={`${teacher.name}`} className="teacher-image" />
                        <h3>{teacher.name}</h3>
                        <p><strong>Instrument:</strong> {teacher.instrument}</p>
                        <p>{teacher.bio}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

const Values = () => {
  return (
    <div className="value-container">
    <div className="values">
      <h2>Vision</h2>
      <p>
        "We are becoming a global institution that gives everyone the opportunity to share and feel the beauty in life through music".  
      </p>
      </div>
      <div className="values">
      <h2>Mission</h2>
      <p>
        "providing free platform for everyone to learn and make music regardless of backgrounds".
      </p>
    </div>
    </div>
  );
};
const Faqs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const questionsAnswers = [
    {
      question: "What is Ganzmusik all about?",
      answer:
        "Ganzmusik is all about bringing the reality of music to everyone through trainnings, rehearsals, concert performances and recordings. No special requirement is needed, your desire and willingness is all that matters.",
    },
    {
      question: "What instrument can I learn?",
      answer: "you can possibly learn any instrument you are interested in",
    },
    {
      question: "Can I learn more than more instruments?",
      answer: "Definitely, your ability will determine how many instruments you can learn, and how many you can learn simultaneously. ",
    },

    {
      question: "How much does it cost?",
      answer: "Our services and materials are free of charge. However, we encourage donations and support.",
    },
    {
      question: "How do you finance the program?",
      answer: "we are able to achieve these by supports, sponsorships, donations and volunteers.",
    },
    {
      question: "How can I also donate?",
      answer: "Click this link to donate, volunteer or sponsor any of our programs.",
    },
    {
      question: "How long does is take to learn music in Ganzmusik?",
      answer: "This depends on youur ability and schedules. We have courses timelines but you can deside to take the same course for as many as three times.",
    },
    {
      question: "Does Ganzmusik provide any certification?",
      answer: "We don't provide certification at the moment but we may be able to issue certificates soon.",
    },
    {
      question: "Can i take courses online?",
      answer: "We strongly advise that you learn onsite, However,  our online portal may be able to support online learning soon.",
    },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faqs">
      <h2>FAQs</h2>
      {questionsAnswers.map((item, index) => (
        <div key={index} className="faq-item">
          <div className="faq-question" onClick={() => toggleAccordion(index)}>
            {item.question}
          </div>
          {activeIndex === index && (
            <div className="faq-answer">{item.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
};
const Footer = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        e.target.reset();
        alert("FORM SUBMITTED \nThank you for contacting us, and you will hear from us soon.");
        
    }
    const whatsAppCall = () => {
        const message = "Hello, I would like to have some conversations about Ganzmusik.";
        const encodedMessage = encodeURIComponent(message);
        window.open(`https://wa.me/+4915205437196?text=${encodedMessage}`, "_blank");
    };
  return (
    <footer>
      <div className="contact-container">
      
        <form className="contact-us" onSubmit={handleSubmit}>
          <h3>Contact us</h3>
            <input className="name" placeholder="Name" minLength={3} maxLength={30} required></input>
            <input className="email" placeholder="Email" type="email" minLength={10} maxLength={30}required></input>
            <textarea className="message" placeholder="Your message..." autoComplete="on" required></textarea>
            <button>Send</button>
        </form>
        <div className="social-media">
            <img src="/icon-facebook.svg" />
            <img src="/icon-twitter.svg" />
            <img src="/icon-youtube.svg" />
            <img src="/icon-instagram.svg" />
            <img src="/icon-tiktok.svg" />
        </div>
        
        </div>
        
      <p className="copyright">&copy; 2024 Ganzmusik. All rights reserved.</p>
      <span className="whatsapp" onClick={whatsAppCall}>
          <img src="/whatsapp_logo.svg" alt="Whatsapp Logo" />
        </span>
    </footer>
    
  );
};

function Home() {
  return (
    <div className="container">
      <Header />
      <main>
        <ImageSlider />
        <AboutUs />
        <Programs />
        <UpcomingEvents />
        <Teachers/>      
        <Values />
        <Faqs />
        <Footer />
      </main>
      
    </div>
  );
}
export default Home;
