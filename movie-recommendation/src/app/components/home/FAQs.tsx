"use client";

import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const faqs = [
    {
        question: "What is MyMovie?",
        answer: "MyMovie is a premium streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    },
    {
        question: "How much does MyMovie cost?",
        answer: "Watch MyMovie on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from $10 to $25 a month. No extra costs, no contracts.",
    },
    {
        question: "Where can I watch?",
        answer: "Watch anywhere, anytime. Sign in with your account to watch instantly on the web at mymovie.com from your personal computer or on any internet-connected device that offers the MyMovie app.",
    },
    {
        question: "How do I cancel?",
        answer: "MyMovie is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.",
    },
    {
        question: "Is MyMovie good for kids?",
        answer: "The MyMovie Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own safe space.",
    },
];

export default function FAQs() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faqs" className="w-full py-20 px-6 md:px-16 text-white bg-[#030A1B]">
            <div className="text-center mb-16">
                <h2 className="text-blue-400 font-semibold tracking-wide uppercase text-sm mb-2">
                    Common Questions
                </h2>
                <h1 className="text-3xl md:text-5xl font-bold">
                    Frequently Asked Questions
                </h1>
            </div>

            <div className="max-w-3xl mx-auto flex flex-col gap-4">
                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 hover:border-blue-500/50"
                    >
                        <button
                            className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                            onClick={() => toggleFAQ(index)}
                        >
                            <h3 className="text-lg md:text-xl font-medium">{faq.question}</h3>
                            <span className="text-blue-400 text-xl transition-transform duration-300">
                                {openIndex === index ? <FaMinus /> : <FaPlus />}
                            </span>
                        </button>
                        <div
                            className={`grid transition-[grid-template-rows] duration-300 ease-out ${openIndex === index ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                                }`}
                        >
                            <div className="overflow-hidden">
                                <p className="px-6 pb-6 text-gray-300 leading-relaxed">
                                    {faq.answer}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="text-center mt-12 text-gray-400">
                <p>
                    Ready to watch? Enter your email to create or restart your membership.
                </p>
            </div>
        </section>
    );
}
