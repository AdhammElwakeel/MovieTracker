import Plus from "../../assets/icons/Plus";
import Minus from "../../assets/icons/Minus";
import "./FAQ.css";
import { faqData } from "../../constants/FAQ";
import { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <>
      <div className="FAQ-section">
        <div className="section-header">
          <div className="section-title">
            <h2>Frequently Asked Questions</h2>
            <p>
              Got questions? We've got answers! Check out our FAQ section to
              find answers to the most common questions about StreamVibe.
            </p>
          </div>
          <button className="section-button">Ask a Question</button>
        </div>
        <div className="FAQ-items">
          {faqData.map((item, index) => (
            <div key={index} className="FAQ-card">
              <div className="item-number">{item.id}</div>
              <div className="item-text">
                <h2>{item.question}</h2>
                {openIndex === index && <p>{item.answer}</p>}
              </div>
              <div className="item-icon" onClick={() => toggleFAQ(index)}>
                {openIndex === index ? <Minus /> : <Plus />}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default FAQ;
