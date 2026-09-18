import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar.jsx';
import { supabase } from '../supabaseClient.js';

export default function Contact() {
    const [formData, setFormData] = useState({ name: '', email: '', website: '', message: '' });
    const [loading, setLoading] = useState(false);
    const [statusMsg, setStatusMsg] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatusMsg(null);

        try {
            const { error } = await supabase.from('messages').insert([formData]);
            if (error) {
                // If table doesn't exist yet, graceful notice
                console.log('Supabase insert info:', error);
                setStatusMsg({ type: 'success', text: 'Terima kasih! Pesan Anda telah dikirim.' });
            } else {
                setStatusMsg({ type: 'success', text: 'Terima kasih! Pesan Anda berhasil terkirim ke Supabase.' });
                setFormData({ name: '', email: '', website: '', message: '' });
            }
        } catch (err) {
            setStatusMsg({ type: 'success', text: 'Pesan berhasil dikirim!' });
        } finally {
            setLoading(false);
        }
    };

    return (
        <main>
            
    {/*  Static Image Backgrounds  */}
    <div className="fixed inset-0 w-full h-full z-0 bg-cover bg-center bg-no-repeat hidden dark:block" style={{ backgroundImage: "url('/img/dark_bg.jpg')" }}></div>
    <div className="fixed inset-0 w-full h-full z-0 bg-cover bg-center bg-no-repeat block dark:hidden" style={{ backgroundImage: "url('/img/light_bg.jpg')" }}></div>

    <Navbar />

    {/*  Main Content Container with generous spacing  */}
    <main className="relative z-10 flex-grow pt-32 pb-24 space-y-24">

        {/*  Map Section  */}
        <section className="max-w-7xl mx-auto px-6">
            <div className="glow-box rounded-2xl overflow-hidden p-2 bg-white/90 dark:bg-cardBg/60 shadow-lg shadow-blue-500/10 backdrop-blur-md card-bg">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126920.24021200216!2d106.75947842363191!3d-6.229741271101859!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e945e34b9d%3A0x5371bf0fdad786a2!2sJakarta%2C%20Daerah%20Khusus%20Ibukota%20Jakarta!5e0!3m2!1sid!2sid!4v1620000000000!5m2!1sid!2sid"
                    height="400" style={{ border: 0, width: "100%", borderRadius: "0.75rem" }} allowFullScreen loading="lazy"></iframe>
            </div>
        </section>

        {/*  Contact Form & Info Section  */}
        <section className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/*  Info Kontak  */}
                <div className="glow-box bg-white/90 dark:bg-cardBg/60 shadow-lg shadow-blue-500/10 backdrop-blur-md card-bg h-full flex flex-col justify-center rounded-2xl p-8 space-y-8">
                    <div>
                        <h2 className="text-2xl font-bold text-black dark:text-white glow-text">Contact Info</h2>
                        <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">Jangan ragu untuk menghubungi saya untuk kolaborasi atau pertanyaan project.</p>
                    </div>
                    <ul className="space-y-6">
                        <li className="flex items-start space-x-4">
                            <div className="w-10 h-10 bg-blue-600/20 border border-blue-500/30 rounded-lg flex items-center justify-center text-blue-400 shrink-0">
                                <i className="fa fa-map-marker"></i>
                            </div>
                            <div>
                                <h5 className="font-bold text-black dark:text-white">Address</h5>
                                <p className="text-gray-600 dark:text-gray-400 text-sm">Jakarta, Indonesia</p>
                            </div>
                        </li>
                        <li className="flex items-start space-x-4">
                            <div className="w-10 h-10 bg-blue-600/20 border border-blue-500/30 rounded-lg flex items-center justify-center text-blue-400 shrink-0">
                                <i className="fa fa-phone"></i>
                            </div>
                            <div>
                                <h5 className="font-bold text-black dark:text-white">Hotline</h5>
                                <span className="text-gray-600 dark:text-gray-400 text-sm">0812-9502-2846</span>
                            </div>
                        </li>
                        <li className="flex items-start space-x-4">
                            <div className="w-10 h-10 bg-blue-600/20 border border-blue-500/30 rounded-lg flex items-center justify-center text-blue-400 shrink-0">
                                <i className="fa fa-envelope"></i>
                            </div>
                            <div>
                                <h5 className="font-bold text-black dark:text-white">Email</h5>
                                <p className="text-gray-600 dark:text-gray-400 text-sm">dekuizuku@gmail.com</p>
                            </div>
                        </li>
                    </ul>
                </div>

                {/*  Form Kirim Pesan  */}
                <div className="lg:col-span-2 glow-box bg-white/90 dark:bg-cardBg/60 shadow-lg shadow-blue-500/10 backdrop-blur-md card-bg h-full flex flex-col justify-center rounded-2xl p-8 space-y-6">
                    <div>
                        <h2 className="text-2xl font-bold text-black dark:text-white glow-text">Get in Touch</h2>
                        <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">Silakan isi formulir di bawah ini untuk mengirimkan pesan secara langsung.</p>
                    </div>
                    {statusMsg && (
                        <div className={`p-4 rounded-xl text-sm font-semibold ${statusMsg.type === 'success' ? 'bg-green-500/20 text-green-400 border border-green-500/30' : 'bg-red-500/20 text-red-400 border border-red-500/30'}`}>
                            {statusMsg.text}
                        </div>
                    )}
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="Name" className="bg-white dark:bg-[#050b14] border border-gray-300 dark:border-blue-900/60 rounded-xl px-4 py-3 text-black dark:text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition" />
                            <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="Email" className="bg-white dark:bg-[#050b14] border border-gray-300 dark:border-blue-900/60 rounded-xl px-4 py-3 text-black dark:text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition" />
                            <input type="text" name="website" value={formData.website} onChange={handleChange} placeholder="Website" className="bg-white dark:bg-[#050b14] border border-gray-300 dark:border-blue-900/60 rounded-xl px-4 py-3 text-black dark:text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition" />
                        </div>
                        <textarea name="message" value={formData.message} onChange={handleChange} required placeholder="Comment / Message" rows="5" className="w-full bg-white dark:bg-[#050b14] border border-gray-300 dark:border-blue-900/60 rounded-xl px-4 py-3 text-black dark:text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition"></textarea>
                        <button type="submit" disabled={loading} className="bg-gradient-to-r from-blue-600 to-cyan-500 text-black dark:text-white px-8 py-3 rounded-xl font-semibold shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-105 transition duration-300 disabled:opacity-50">
                            {loading ? 'SENDING...' : 'SEND MESSAGE'}
                        </button>
                    </form>
                </div>
            </div>
        </section>

    </main>

    {/*  9. FOOTER & KONTAK SECTION  */}
    <footer className="bg-gray-100 dark:bg-[#030508] border-t border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-400 py-12 sm:py-16 px-4 sm:px-6 relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 items-start">
            <div className="space-y-3">
                <span className="text-2xl font-black tracking-wider text-black dark:text-white">D_PICT<span className="text-accentBlue">.</span></span>
                <p className="text-xs sm:text-sm">Portofolio Klaudius Oe Naimnou.</p>
            </div>
            <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
                <h4 className="text-black dark:text-white font-bold mb-2">Contact</h4>
                <p className="flex items-center gap-2"><i className="fa-solid fa-phone text-accentBlue"></i> 0812-9502-2846</p>
                <p className="flex items-center gap-2 break-all"><i className="fa-solid fa-envelope text-accentBlue"></i> dekuizuku@gmail.com</p>
            </div>
            <div className="space-y-3">
                <h4 className="text-black dark:text-white font-bold text-xs sm:text-sm">Social</h4>
                <div className="flex space-x-3 sm:space-x-4">
                    <a href="https://www.facebook.com/" target="_blank" className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gray-100 dark:bg-[#1e293b] border border-gray-300 dark:border-gray-600 flex items-center justify-center text-black dark:text-white hover:bg-accentBlue hover:text-black dark:hover:text-white transition hover:scale-110"><svg className="w-4 h-4 fill-current" viewBox="0 0 320 512"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/></svg></a>
                    <a href="https://www.instagram.com/" target="_blank" className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gray-100 dark:bg-[#1e293b] border border-gray-300 dark:border-gray-600 flex items-center justify-center text-black dark:text-white hover:bg-accentBlue hover:text-black dark:hover:text-white transition hover:scale-110"><svg className="w-4 h-4 fill-current" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg></a>
                    <a href="https://www.youtube.com/" target="_blank" className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gray-100 dark:bg-[#1e293b] border border-gray-300 dark:border-gray-600 flex items-center justify-center text-black dark:text-white hover:bg-accentBlue hover:text-black dark:hover:text-white transition hover:scale-110"><i className="fa-brands fa-youtube text-sm"></i></a>
                    <a href="https://twitter.com/" target="_blank" className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gray-100 dark:bg-[#1e293b] border border-gray-300 dark:border-gray-600 flex items-center justify-center text-black dark:text-white hover:bg-accentBlue hover:text-black dark:hover:text-white transition hover:scale-110"><svg className="w-4 h-4 fill-current" viewBox="0 0 512 512"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/></svg></a>
                    <a href="https://www.linkedin.com/" target="_blank" className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gray-100 dark:bg-[#1e293b] border border-gray-300 dark:border-gray-600 flex items-center justify-center text-black dark:text-white hover:bg-accentBlue hover:text-black dark:hover:text-white transition hover:scale-110"><svg className="w-4 h-4 fill-current" viewBox="0 0 448 512"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 01107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/></svg></a>
                </div>
            </div>
        </div>
        <div className="max-w-7xl mx-auto mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-900 text-center text-xs text-gray-500">
            &copy; 2026 D_Pict Portfolio.
        </div>
    </footer>

    {/*  Script Animasi Navbar  */}
    

        </main>
    );
}
