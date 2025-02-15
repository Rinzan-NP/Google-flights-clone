import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
    {
        id: 1,
        question: "How can I find cheap flights to anywhere?",
        answer: "You can find cheap flight deals to anywhere in the world on Google Flights. Just enter your departure city, choose Anywhere as the destination and select Explore. You can pick specific dates or leave departure and return dates blank if your plans are flexible. The cheapest fares to popular destinations will appear. You can filter the results to see only non-stop flights or flights under a certain price to more easily plan your perfect budget trip. If you already have a destination in mind, you can turn on price tracking to get alerts if the fare changes for a route or flight.",
    },
    {
        id: 2,
        question: "How can I get flight alerts for my trip?",
        answer: "You can track flight prices for specific dates or, if your plans are flexible, any dates. To get flight alerts for a specific round trip, choose your dates and flights and select Search. Then, you can turn on price tracking.",
    },
    {
        id: 3,
        question: "How can I find last-minute flight deals?",
        answer: "Finding last-minute flights is easy on Google Flights. Select your departure and destination cities in the form on the top of the page, and use the calendar to pick travel dates and find the lowest fares available. You can even check for flights departing today. To find the cheapest fares, it's usually best to book at least a few weeks in advance for domestic flights and a few months in advance for international travel.",
    },
    {
        id: 4,
        question: "How can I find cheap flights for a weekend getaway?",
        answer: "It's easy to use Google Flights to find deals on weekend getaways or even week-long trips. Just enter your departure and destination cities near the top of the page. Then, open the date selector and choose a trip length to see how the round-trip fare changes on different days. Adjust the trip type to see one-way fares. The cheapest available flights are highlighted and easy to spot. Once you settle on dates, select Search to see flight options and book the deal. You can also turn on price tracking to get alerts if the price changes for a route or flight.",
    },
    {
        id: 5,
        question: "How can I find flight deals if my travel plans are flexible?",
        answer: "It's easy to search for flights, even if your plans are up in the air. 1. Tap Explore near the top of the page. 2. Then, tap the calendar icon. 3. Toggle to Flexible dates and select a time frame or trip length. 4. Tap done. Trip options will appear on the map, with the cheapest available flights highlighted and easy to spot. Tap the destination to see available flight options you can select and book.",
    },
];

const Accordion = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="mx-auto p-6 mb-16">
            <h2 className="text-2xl font-semibold text-white dark:text-white mb-4">
                Frequently Asked Questions
            </h2>
            <div className="space-y-2">
                {faqs.map((faq, index) => (
                    <div
                        key={faq.id}
                        className="border border-gray-200 dark:border-gray-700 rounded-lg"
                    >
                        <button
                            onClick={() => toggleAccordion(index)}
                            className="flex items-center justify-between w-full p-5 text-left text-white dark:text-white font-medium bg-transparent dark:bg-transparent hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition"
                        >
                            <span>{faq.question}</span>
                            <FaChevronDown
                                className={`w-4 h-4 transition-transform ${
                                    openIndex === index ? "rotate-180" : ""
                                }`}
                            />
                        </button>
                        {openIndex === index && (
                            <div className="p-5 border-t border-gray-200 dark:border-gray-700 dark:bg-transparent">
                                <p className="text-white dark:text-white">
                                    {faq.answer}
                                </p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Accordion;
