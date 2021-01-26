import React from 'react';
import Fade from "react-reveal/Fade";

import FAQBackground from "../components/backgrounds/FAQBackground";
import Question from "../components/Question";

const FAQ = (props) => {
    const { id = null } = props;

    return (
        <section className="relative min-h-screen pt-6 pb-12 sm:pb-24" id={id}>

            <FAQBackground/>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 z-50">

                <Fade>
                    <h1 className="text-gray-50 text-4xl text-center pt-16">
                        Frequently Asked Questions
                    </h1>
                </Fade>

                <div className="px-4 py-6 mx-auto md:px-24 lg:px-8 lg:py-8 mt-8">
                    <div className="max-w-xl sm:mx-auto lg:max-w-5xl">
                        <div className="space-y-4">

                            <Question title="What is Alerts?">
                                Alerts is a Text Message Service that caters all your reselling information straight to your phone.
                            </Question>

                            <Question title="How much does it Cost?">
                                Alerts currently costs $3.99 per month.
                            </Question>

                            <Question title="How can I sign up?">
                                Simply click on “Subscribe Now” to begin the process.
                            </Question>

                            <Question title="Does it matter if I have an Android or iPhone?">
                                Nope! As long as you have a phone number, Alerts will cover it all.
                            </Question>

                            <Question title="Which Countries are covered by Alerts?">
                                Currently only the US but worldwide coverage is coming soon.
                            </Question>

                            <Question title="Can I cancel anytime?">
                                Yes! You can cancel in our dashboard at anytime.
                            </Question>

                            <Question title="How soon will I start getting texts after purchase?">
                                Immediately.
                            </Question>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FAQ;
