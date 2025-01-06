import React from 'react';
import './home.css';
import { useState, useRef } from 'react';
import { useEffect } from 'react';
// import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
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
        }, 10000);

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



const AboutUs = () => {
    return (
        <div className='about-us'>
            <h2>Who we are</h2>
            <p>provide accessible music instructions to everyone, regardless of age, race or financial backgrounds. music is as a universal language that brings about a better mental emotional health... creativity and stonger comunity
            we belive that music has the power to tranform lives. thats why we offer free nusic education for all. our doors are open to all and we strive to create a welcoming and supportive envirenment where everyone can explore their musical talents. whether you dream of playing piano, singing in a choir, or learning to play an instrumunt with friends, we have something for you.</p>

        </div>
    )
}

    const Programs = () => {
        const programs = [

            'program 1',
            'program 2',
            'program 3',
            'program 4',
            'program 5',
            'program 6',
            'program 7',
            'program 8',
            'program 9',
            'program 10',
        ];

        const [currentIndex, setCurrentIndex] = useState(0);
        const shiftRight = () => {
                    setCurrentIndex((rightItem) => (rightItem === 9 ? rightItem : rightItem + 1));
                };

        const shiftLeft = () => {
            setCurrentIndex((leftItem) => (leftItem === 0 ? leftItem : leftItem - 1 ))
        };

        return (
            <div className="programs-wrapper">
            <h2>Our Programs</h2>

            <div className="program-container">
                    <div className='program' 
                    style={{transform: `translateX(-${currentIndex * 100}%)`}}>
                        {programs.map((program, index) => 
                        (<div className='program-slide' key={index}>
                            {program} </div>))}
                    </div>
            </div>
            <button className='chevron-left' onClick={shiftLeft}><img  src='/chevron-right.svg' alt='chev-right'/></button>
            <button className='chevron-right' onClick={shiftRight}> <img  src='/chevron-right.svg' alt='chev-right'/></button>
            </div>
        );
    };

const Values = () => {
    return <div className='values'>
        <h2>Vision</h2>
        <p> creativity and stonger comunity
        we belive that music has the power to tranform lives. thats why we offer free nusic education for all. our doors are open to all and we strive to create a welcoming and supportive envirenment where everyone can explore their musical talents. whether you dream of playing piano, singing in a choir, or learning to play an instrumunt with friends, we have something for you.</p>
        <h2>Mission</h2>
        <p> creativity and stonger comunity
        we belive that music has the power to tranform lives. thats why we offer free nusic education for all. our doors are open to all and we strive to create a welcoming and supportive envirenment where everyone can explore their musical talents. whether you dream of playing piano, singing in a choir, or learning to play an instrumunt with friends, we have something for you.</p>


    </div>
}
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
            <AboutUs />
            <Programs />
                <span className='whatsapp'>
                    <img src="/whatsapp_logo.svg" alt="Whatsapp Logo" />
                </span>
            <Values />
            <Faqs />
            </main>
 
            <Footer />
            
        </div>
    );
};
export default Home;