import React, { useState } from 'react';

const FAQSection = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqs = [
        {
            question: "Is Sri Lanka safe for budget travelers?",
            answer: "Absolutely! Sri Lanka is known for its warm hospitality and is very safe for tourists. Following standard travel precautions, staying in well-reviewed boutique accommodations, and using reputable tour providers ensures a worry-free and high-quality budget experience."
        },
        {
            question: "What is the best time of year to visit?",
            answer: "The best time depends on your chosen side of the island. For the South and West coasts (and the Hill Country), December to April is ideal. For the East coast and the North, May to September offers the best weather. Sri Lanka is truly a year-round destination!"
        },
        {
            question: "Do I need a visa before arriving?",
            answer: "Most travelers require an Electronic Travel Authorization (ETA). You can apply easily online through the official portal. Processing usually takes between 24 to 48 hours, but we recommend applying at least a week before your flight."
        },
        {
            question: "How do you provide such low prices for luxury tours?",
            answer: "Our secrets lie in our 15+ years of local operational experience. We maintain direct partnerships with boutique hotels and local transport fleets, cutting out middle-man commissions to pass 100% of the savings directly to you."
        },
        {
            question: "Can I customize a budget tour package?",
            answer: "Yes! Every traveler is unique. While our curated collections offer the best baseline value, our expert travel designers can easily swap destinations, extend stays, or add specific activities to match your personal interests and budget constraints."
        }
    ];

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="faq-section">
            <div className="faq-container">
                <div className="faq-header">
                    <span className="about-tag">Your Guide</span>
                    <h2>Commonly Asked <br/> Questions.</h2>
                    <p>We've answered everything to help you plan the perfect journey.</p>
                </div>

                <div className="faq-list">
                    {faqs.map((faq, index) => (
                        <div 
                            key={index} 
                            className={`faq-item ${activeIndex === index ? 'active' : ''}`}
                            onClick={() => toggleAccordion(index)}
                        >
                            <div className="faq-question">
                                <span>{faq.question}</span>
                                <i className={`fa-solid ${activeIndex === index ? 'fa-minus' : 'fa-plus'}`}></i>
                            </div>
                            <div className="faq-answer">
                                <p>{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
