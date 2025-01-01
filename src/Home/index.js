import React from 'react';
import './home.css';
import { useState } from 'react';
import { useEffect } from 'react';
const Header = () => {
    return (
        <header>
            <div className='logo-container'>
                 <img className='ganz-logo' src="/ganz-logo.png" alt="Ganzmusik Logo" />
            </div>
    
            <p className='log-in'>Log in</p>
            <button className='apply'>Apply</button>
        </header>
    );
};
const ImageSlider = () => {
    const images = [
        '/slide-image1.jpg',
        '/slide-image2.jpg',
        '/slide-image3.jpg',
        '/slide-image4.jpg',
        '/slide-image5.jpg',
        '/slide-image1.jpg',
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000); // Change image every 3 seconds

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className="slider">
            <div
                className="slider-inner"
                style={{
                    transform: `translateX(-${currentIndex * 100}%)`,
                    transition: 'transform 1s ease-in-out',
                    display: 'flex',
                }}
            >
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`Slide ${index}`}
                        className="slide"
                        style={{
                            width: '100%',
                            flexShrink: 0,
                        }}
                    />
                ))}
            </div>
        </div>
    );
};

const Faqs = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const questionsAnswers = [
        {
            question: "What is Ganzmusik all about?",
            answer: "answer to the question answer to the questionanswer to the questionanswer to the questionanswer to the questionanswer to the questionanswer to the question"  
        },
        {
            question: "Who would be my teachers?",
            answer: "answer to the question."
        },
        {
            question: "Is Ganzmusik really free and how do the organisers get paid?",
            answer: "answer to the question"
        },
        {
            question: "How long does is take to learn music in Ganzmusik?",
            answer: "answer to the question"
        },
        {
            question: "Does Ganzmusik provide any certification?",
            answer: "answer to the question"
        }
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
                        <div className="faq-answer">
                            {item.answer}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};
const Footer = () => {
    return (
        <footer>
            <p>&copy; 2024 Ganzmusik. All rights reserved.</p>
        </footer>
    );
};



function Home() {
    return (
        <div className="container">
            <Header />
            <main>
                <ImageSlider />
                <span className='whatsapp'>
                    <img src="/whatsapp_logo.svg" alt="Whatsapp Logo" />
                </span>
             <Faqs />
            </main>
 
            <Footer />
            
        </div>
    );
};
export default Home;