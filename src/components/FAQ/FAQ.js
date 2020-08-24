import React from 'react';
import { container, collapseSign } from './FAQ.module.css';
import Collapsible from 'react-collapsible';
import faqs from './faq.json';

const FAQ = () => {
  return (
    <section className={`${container} px-20 py-16`}>
      <h2 className="h2">Frequently Asked Questions</h2>
      <div className="flex flex-col md:flex-row justify-between text-dark-200 mt-8">
        <div className="flex-1 bg-white p-6 md:mr-6 mb-10">
          {
            faqs.map(faq => (
              <>
              <Collapsible trigger={
                <p className="w-full" className="py-3 flex justify-between text-dark-600 text-base cursor-pointer">
                  <span>{faq.question}</span>
                  <span className="collapseSign"></span>
                </p>
              }>
                <p>{faq.answer}</p>
              </Collapsible>
              <p className="mt-2 b-b-light"></p>
              </>
            ))
          }
        </div>
        <div className="flex-1 bg-white p-6 mb-10">
        {
            faqs.map(faq => (
              <>
              <Collapsible trigger={
                <p className="w-full" className="py-3 flex justify-between text-dark-600 text-base cursor-pointer">
                  <span>{faq.question}</span>
                  <span className="collapseSign"></span>
                </p>
              }>
                <p>{faq.answer}</p>
              </Collapsible>
              <p className="mt-2 b-b-light"></p>
              </>
            ))
          }
        </div>
      </div>
    </section>
  )
};

export default FAQ;