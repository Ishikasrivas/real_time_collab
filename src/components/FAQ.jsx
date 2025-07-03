import { useState } from "react";
import Section from "./Section";

const faqs = [
  {
    question: "What is RealTimeCollab?",
    answer:
      "RealTimeCollab is a real-time collaboration platform that lets teams edit, brainstorm, and share feedback instantly, all in one place.",
  },
  {
    question: "Is my data secure on RealTimeCollab?",
    answer:
      "Absolutely! We use end-to-end encryption and industry-standard security practices to keep your data safe and private.",
  },
  {
    question: "Can I use RealTimeCollab for free?",
    answer:
      "Yes! We offer a free plan with core features. Upgrade anytime for advanced tools and unlimited collaboration.",
  },
  {
    question: "Does RealTimeCollab support integrations?",
    answer:
      "Yes, you can connect with popular tools like Slack, Google Drive, and more to streamline your workflow.",
  },
];

const FAQ = () => {
  const [open, setOpen] = useState(null);

  return (
    <Section id="faq" className="py-20 bg-n-1">
      <div className="container max-w-2xl mx-auto">
        <h2 className="h2 mb-8 text-color-1 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-n-2 pb-4">
              <button
                className="w-full text-left flex justify-between items-center font-heading text-lg text-n-7 focus:outline-none"
                onClick={() => setOpen(open === i ? null : i)}
              >
                {faq.question}
                <span className="ml-2 text-color-2 text-2xl">{open === i ? "-" : "+"}</span>
              </button>
              {open === i && (
                <div className="mt-2 text-n-4 body-1 animate-fade-in">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default FAQ; 