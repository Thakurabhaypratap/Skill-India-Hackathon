import React, { useState } from 'react';

function Issues() {
  const [accordion, setAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setAccordion(accordion === index ? null : index);
  };

  const faqData = [
    {
      question: "What are the best crops to grow in my region?",
      answer: "Find out which crops are best suited for your local climate and soil conditions.",
    },
    {
      question: "How can I determine the right time to plant my crops?",
      answer: "Learn how to use seasonal patterns and local weather data to optimize planting times.",
    },
    {
      question: "How can I improve the quality of my soil?",
      answer: "Get tips on soil testing, fertilization, and organic amendments to enhance soil health.",
    },
    {
      question: "What should I do if my crops are not growing as expected?",
      answer: "Find solutions for common growth issues, including nutrient deficiencies and environmental stress.",
    },
    {
      question: "How can I connect with other farmers and agricultural experts?",
      answer: "Find out how to join farming communities and networks for support and knowledge sharing.",
    },
  ];

  return (
    <section className="relative py-20 overflow-hidden bg-gray-50">
      {/* <img
        className="absolute top-0 left-0 mt-44"
        src="saturn-assets/images/faq/light-blue-left.png"
        alt=""
      />
      <img
        className="absolute top-0 right-0 mt-10"
        src="saturn-assets/images/faq/star-right.svg"
        alt=""
      /> */}




      <div className="relative container px-4 mx-auto ">
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-24 ">
            <span className="inline-block py-1 px-3 mb-4 text-xs font-semibold text-orange-900 bg-orange-50 rounded-full">
              FREQUENTLY ASK QUESTION
            </span>
            <h1 className="font-heading text-3xl xs:text-6xl md:text-5xl font-bold">
              <span>You ask? We </span>
              <span className="font-serif italic">answer</span>
            </h1>
          </div>


          <div className="flex flex-wrap -mx-4">
            {faqData.map((item, index) => (
              <div key={index} className="w-full lg:w-1/2 px-4 mb-6 lg:mb-8">
                <div className="px-8 py-10 bg-white rounded-3xl shadow-lg">
                  <div
                    className="flex cursor-pointer group w-full items-start justify-between text-left"
                    onClick={() => toggleAccordion(index)}
                   >



                    <div className="max-w-xl pr-5">
                      <h3
                        className={`text-xl font-semibold ${
                          accordion === index ? 'text-orange-900' : 'text-black'
                        }`}
                      >
                        {item.question}
                      </h3>
                      <div
                        style={{
                          height: accordion === index ? 'auto' : '0',
                          overflow: 'hidden',
                          transition: 'height 0.5s',
                        }}
                      >
                        <p className="text-lg text-gray-500 mt-3">
                          {item.answer}
                        </p>
                      </div>
                    </div>


                    
                    <div>
                      <span
                        className={`flex h-9 w-9 items-center justify-center rounded-full ${
                          accordion === index
                            ? 'bg-orange-900 text-orange-50'
                            : 'bg-orange-50 text-orange-900'
                        }`}
                      >
                        {accordion === index ? (
                          <svg
                            width="17"
                            height="3"
                            viewBox="0 0 17 3"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M15.4619 0.045166H1.46194C1.19673 0.045166 0.942374 0.150523 0.754838 0.338059C0.567302 0.525596 0.461945 0.77995 0.461945 1.04517C0.461945 1.31038 0.567302 1.56474 0.754838 1.75227C0.942374 1.93981 1.19673 2.04517 1.46194 2.04517H15.4619C15.7272 2.04517 15.9815 1.93981 16.1691 1.75227C16.3566 1.56474 16.4619 1.31038 16.4619 1.04517C16.4619 0.77995 16.3566 0.525596 16.1691 0.338059C15.9815 0.150523 15.7272 0.045166 15.4619 0.045166Z"
                              fill="currentColor"
                            />
                          </svg>
                        ) : (
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 14 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12.8334 6.16671H7.83337V1.16671C7.83337 0.945694 7.74558 0.733732 7.5893 0.577452C7.43302 0.421172 7.22105 0.333374 7.00004 0.333374C6.77903 0.333374 6.56707 0.421172 6.41079 0.577452C6.2545 0.733732 6.16671 0.945694 6.16671 1.16671V6.16671H1.16671C0.945694 6.16671 0.733732 6.2545 0.577452 6.41079C0.421172 6.56707 0.333374 6.77903 0.333374 7.00004C0.333374 7.22105 0.421172 7.43302 0.577452 7.5893C0.733732 7.74558 0.945694 7.83337 1.16671 7.83337H6.16671V12.8334C6.16671 13.0544 6.2545 13.2663 6.41079 13.4226C6.56707 13.5789 6.77903 13.6667 7.00004 13.6667C7.22105 13.6667 7.43302 13.5789 7.5893 13.4226C7.74558 13.2663 7.83337 13.0544 7.83337 12.8334V7.83337H12.8334C13.0544 7.83337 13.2663 7.74558 13.4226 7.5893C13.5789 7.43302 13.6667 7.22105 13.6667 7.00004C13.6667 6.77903 13.5789 6.56707 13.4226 6.41079C13.2663 6.2545 13.0544 6.16671 12.8334 6.16671Z"
                              fill="#FF460C"
                            />
                          </svg>
                        )}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>



        </div>
      </div>
    </section>
  );
}

export default Issues;
