import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Animation } from './Animation';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef()
    const [sent, setSent] = useState(false);
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_i16di8x', 'template_rc0ke4g', form.current, {
                publicKey: 'HKrsrYC-31ttxYPQL',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    setSent(true)
                    form.current.reset()
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };
    return (
        <div className="bg-yellow-400 lg:mx-32 md:mx-16 rounded-2xl p-12 flex flex-col items-center" id="contact">
            <h2 className="text-2xl font-bold  mb-10 text-center">Let's Connect</h2>

            <div className="container mx-auto flex flex-col md:flex-row items-center">

                <motion.div
                    initial={{ x: 100, opacity: 0 }}

                    variants={Animation("up", 0.2)}
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.7 }}
                    className="md:w-1/2 lg:pl-36"
                >
                    <div className="my-8 text-center md:text-left">
                        <h3 className="text-xl font-semibold mb-4">Contact Details</h3>
                        <p className="flex justify-center md:justify-start items-center mb-2">
                            <span className="mr-2"><img width="24" height="24" src="https://img.icons8.com/emoji/48/mobile-phone.png" alt="mobile-phone" /></span> +8801872062931
                        </p>
                        <p className="flex justify-center md:justify-start items-center mb-2">
                            <span className="mr-2"><img width="24" height="24" src="https://img.icons8.com/color/48/whatsapp--v1.png" alt="whatsapp--v1" /></span>
                            +8801872062931
                        </p>
                        <p className="flex justify-center md:justify-start items-center mb-2">
                            <span className="mr-2"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 48 48">
                                <linearGradient id="6769YB8EDCGhMGPdL9zwWa_ho8QlOYvMuG3_gr1" x1="15.072" x2="24.111" y1="13.624" y2="24.129" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#e3e3e3"></stop><stop offset="1" stop-color="#e2e2e2"></stop></linearGradient><path fill="url(#6769YB8EDCGhMGPdL9zwWa_ho8QlOYvMuG3_gr1)" d="M42.485,40H5.515C4.126,40,3,38.874,3,37.485V10.515C3,9.126,4.126,8,5.515,8h36.969	C43.874,8,45,9.126,45,10.515v26.969C45,38.874,43.874,40,42.485,40z"></path><linearGradient id="6769YB8EDCGhMGPdL9zwWb_ho8QlOYvMuG3_gr2" x1="26.453" x2="36.17" y1="25.441" y2="37.643" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#f5f5f5"></stop><stop offset=".03" stop-color="#eee"></stop><stop offset="1" stop-color="#eee"></stop></linearGradient><path fill="url(#6769YB8EDCGhMGPdL9zwWb_ho8QlOYvMuG3_gr2)" d="M42.485,40H8l37-29v26.485C45,38.874,43.874,40,42.485,40z"></path><linearGradient id="6769YB8EDCGhMGPdL9zwWc_ho8QlOYvMuG3_gr3" x1="3" x2="45" y1="24" y2="24" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#d74a39"></stop><stop offset="1" stop-color="#c73d28"></stop></linearGradient><path fill="url(#6769YB8EDCGhMGPdL9zwWc_ho8QlOYvMuG3_gr3)" d="M5.515,8H8v32H5.515C4.126,40,3,38.874,3,37.485V10.515C3,9.126,4.126,8,5.515,8z M42.485,8	H40v32h2.485C43.874,40,45,38.874,45,37.485V10.515C45,9.126,43.874,8,42.485,8z"></path><linearGradient id="6769YB8EDCGhMGPdL9zwWd_ho8QlOYvMuG3_gr4" x1="24" x2="24" y1="8" y2="38.181" gradientUnits="userSpaceOnUse"><stop offset="0" stop-opacity=".15"></stop><stop offset="1" stop-opacity=".03"></stop></linearGradient><path fill="url(#6769YB8EDCGhMGPdL9zwWd_ho8QlOYvMuG3_gr4)" d="M42.485,40H30.515L3,11.485v-0.969C3,9.126,4.126,8,5.515,8h36.969	C43.874,8,45,9.126,45,10.515v26.969C45,38.874,43.874,40,42.485,40z"></path><linearGradient id="6769YB8EDCGhMGPdL9zwWe_ho8QlOYvMuG3_gr5" x1="3" x2="45" y1="17.73" y2="17.73" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#f5f5f5"></stop><stop offset="1" stop-color="#f5f5f5"></stop></linearGradient><path fill="url(#6769YB8EDCGhMGPdL9zwWe_ho8QlOYvMuG3_gr5)" d="M43.822,13.101L24,27.459L4.178,13.101C3.438,12.565,3,11.707,3,10.793v-0.278	C3,9.126,4.126,8,5.515,8h36.969C43.874,8,45,9.126,45,10.515v0.278C45,11.707,44.562,12.565,43.822,13.101z"></path><linearGradient id="6769YB8EDCGhMGPdL9zwWf_ho8QlOYvMuG3_gr6" x1="24" x2="24" y1="8.446" y2="27.811" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#e05141"></stop><stop offset="1" stop-color="#de4735"></stop></linearGradient><path fill="url(#6769YB8EDCGhMGPdL9zwWf_ho8QlOYvMuG3_gr6)" d="M42.485,8h-0.3L24,21.172L5.815,8h-0.3C4.126,8,3,9.126,3,10.515v0.278	c0,0.914,0.438,1.772,1.178,2.308L24,27.459l19.822-14.358C44.562,12.565,45,11.707,45,10.793v-0.278C45,9.126,43.874,8,42.485,8z"></path>
                            </svg></span> imtiazahm21@gmail.com
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Social</h3>
                        <div className="flex justify-center md:justify-start gap-6 mb-6">
                            <a href="https://www.linkedin.com/in/imtiaz-ahmed-25a357201" target="_blank" rel="noopener noreferrer">
                                <svg className="w-6 h-6 fill-current hover:text-blue-500" viewBox="0 0 50 50">
                                    <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56c3.97,0,7.19,2.73,7.19,8.26V39z" />
                                </svg>
                            </a>
                            <a href="https://github.com/ImtiazAhmed01" target="_blank" rel="noopener noreferrer">
                                <svg className="w-6 h-6 fill-current hover:text-gray-400" viewBox="0 0 50 50">
                                    <path d="M17.791,46.836C18.502,46.53,19,45.823,19,45v-5.4c0-0.197,0.016-0.402,0.041-0.61C19.027,38.994,19.014,38.997,19,39c0,0-3,0-3.6,0c-1.5,0-2.8-0.6-3.4-1.8c-0.7-1.3-1-3.5-2.8-4.7C8.9,32.3,9.1,32,9.7,32c0.6,0.1,1.9,0.9,2.7,2c0.9,1.1,1.8,2,3.4,2c2.487,0,3.82-0.125,4.622-0.555C21.356,34.056,22.649,33,24,33v-0.025c-5.668-0.182-9.289-2.066-10.975-4.975c-3.665,0.042-6.856,0.405-8.677,0.707c-0.058-0.327-0.108-0.656-0.151-0.987c1.797-0.296,4.843-0.647,8.345-0.714c-0.112-0.276-0.209-0.559-0.291-0.849c-3.511-0.178-6.541-0.039-8.187,0.097c-0.02-0.332-0.047-0.663-0.051-0.999c1.649-0.135,4.597-0.27,8.018-0.111c-0.079-0.5-0.13-1.011-0.13-1.543c0-1.7,0.6-3.5,1.7-5c-0.5-1.7-1.2-5.3,0.2-6.6c2.7,0,4.6,1.3,5.5,2.1C21,13.4,22.9,13,25,13s4,0.4,5.6,1.1c0.9-0.8,2.8-2.1,5.5-2.1c1.5,1.4,0.7,5,0.2,6.6c1.1,1.5,1.7,3.2,1.6,5c0,0.484-0.045,0.951-0.11,1.409c3.499-0.172,6.527-0.034,8.204,0.102c-0.002,0.337-0.033,0.666-0.051,0.999c-1.671-0.138-4.775-0.28-8.359-0.089c-0.089,0.336-0.197,0.663-0.325,0.98c3.546,0.046,6.665,0.389,8.548,0.689c-0.043,0.332-0.093,0.661-0.151,0.987c-1.912-0.306-5.171-0.664-8.879-0.682C35.112,30.873,31.557,32.75,26,32.969V33c2.6,0,5,3.9,5,6.6V45c0,0.823,0.498,1.53,1.209,1.836C41.37,43.804,48,35.164,48,25C48,12.318,37.683,2,25,2S2,12.318,2,25C2,35.164,8.63,43.804,17.791,46.836z" />
                                </svg>
                            </a>
                            <a href="https://www.facebook.com/imtiaz.ahmedar" target="_blank" rel="noopener noreferrer">
                                <svg className="w-6 h-6 fill-current hover:text-blue-600" viewBox="0 0 24 24">
                                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </motion.div>


                <div className="hidden md:block h-96 w-0.5 bg-gray-400 mx-8"></div>

                <motion.div
                    initial={{ x: -40, opacity: 0 }}


                    variants={Animation("up", 0.2)}
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.7 }}
                    className="md:w-1/2 mt-8 md:mt-0"
                >
                    <form ref={form} className="bg-[#2E1D10] text-white p-8 rounded-lg shadow-md" onSubmit={sendEmail}>
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
                            <input type="text" id="name" name="name" className="w-full p-2 rounded-lg bg-gray-900 text-gray-100 focus:outline-none" placeholder="John Doe" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm font-medium mb-2">Your Email</label>
                            <input type="email" id="email" className="w-full p-2 rounded-lg bg-gray-900 text-gray-100 focus:outline-none" name="email" placeholder="email@example.com" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="message" className="block text-sm font-medium mb-2">Wrrite your message</label>
                            <textarea id="message" name="message" className="w-full p-2 rounded-lg bg-gray-900 text-gray-100 focus:outline-none" placeholder="Write your message..." rows="4"></textarea>
                        </div>
                        <button type="submit" className="px-6 py-2 bg-yellow-400 hover:bg-yellow-600 text-black font-semibold rounded-lg">Submit</button>
                        {sent && <p className="text-green-600 mt-2">Your message has been sent.</p>}
                    </form>
                </motion.div>
            </div>
        </div>
    );
};

export default Contact;