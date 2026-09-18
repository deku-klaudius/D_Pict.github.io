import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar.jsx';

export default function Home() {

    useEffect(() => {
        const wrap = document.querySelector('.carousel-wrap');
        const items = document.querySelectorAll('.carousel-item');
        if (!wrap || items.length === 0) return;

        let currentAngle = 0;
        let targetAngle = 0;
        let isHovered = false;
        const theta = 360 / items.length;

        const enterHandlers = [];
        const leaveHandlers = [];

        items.forEach((item, index) => {
            const enter = () => {
                isHovered = true;
                let remainder = currentAngle % 360;
                if (remainder > 0) remainder -= 360; 
                let targetBase = -index * theta;
                let diff = targetBase - remainder;
                if (diff > 180) diff -= 360;
                if (diff < -180) diff += 360;
                targetAngle = currentAngle + diff;
            };
            const leave = () => { isHovered = false; };
            
            item.addEventListener('mouseenter', enter);
            item.addEventListener('mouseleave', leave);
            enterHandlers.push(enter);
            leaveHandlers.push(leave);
        });

        let animationId;
        function update() {
            if (!isHovered) {
                targetAngle -= 0.5; 
            }
            currentAngle += (targetAngle - currentAngle) * 0.1; 
            wrap.style.transform = `rotateY(${currentAngle}deg)`;

            items.forEach((item, index) => {
                let absAngle = (index * theta + currentAngle) % 360;
                if (absAngle < 0) absAngle += 360;
                if (absAngle > 180) absAngle -= 360;
                let dist = Math.abs(absAngle);
                
                let blur = (dist / 180) * 6; 
                let op = 1 - (dist / 180) * 0.8;
                
                item.style.filter = `blur(${blur}px)`;
                item.style.opacity = op;
            });
            animationId = requestAnimationFrame(update);
        }
        update();

        return () => {
            cancelAnimationFrame(animationId);
            items.forEach((item, i) => {
                item.removeEventListener('mouseenter', enterHandlers[i]);
                item.removeEventListener('mouseleave', leaveHandlers[i]);
            });
        };
    }, []);

    return (
        <main>
            

    {/*  Static Image Backgrounds  */}
    <div className="fixed inset-0 w-full h-full z-0 bg-cover bg-center bg-no-repeat hidden dark:block" style={{ backgroundImage: "url('/img/dark_bg.jpg')" }}></div>
    <div className="fixed inset-0 w-full h-full z-0 bg-cover bg-center bg-no-repeat block dark:hidden" style={{ backgroundImage: "url('/img/light_bg.jpg')" }}></div>

    <Navbar />

    {/*  1. BERANDA SECTION  */}
    <section id="beranda" className="pt-32 sm:pt-44 pb-20 sm:pb-32 px-4 sm:px-6 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between relative z-10 gap-10">
        <div className="md:w-1/2 space-y-5 text-center md:text-left">
            <span className="inline-block px-3 sm:px-4 py-1.5 rounded-full text-xs font-semibold bg-accentBlue/10 text-accentBlue border border-accentBlue/20">Mahasiswa LP3I Jakarta Pusat (Kampus Utama)</span>
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-snug sm:leading-tight text-black dark:text-white">
                Membangun Generasi Siap Kerja Melalui Konsep <span className="text-transparent bg-clip-text bg-gradient-to-r from-accentBlue to-blue-400">Link and Match</span>
            </h1>
            <p className="text-black dark:text-white text-sm sm:text-base leading-relaxed">
                Latar belakang pendirian LP3I didasari oleh adanya kesenjangan antara dunia pendidikan dan dunia kerja, di mana banyak lulusan sekolah atau kuliah belum siap pakai dan tidak sesuai dengan kebutuhan industri. Pendiri melihat tingginya angka pengangguran akibat ketidakcocokan keterampilan. Konsep "Link and Match" dan porsi praktik yang besar dihadirkan untuk mengatasi masalah tersebut.
            </p>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-3 sm:gap-4 pt-2">
                <Link to="/about" className="px-6 sm:px-8 py-3 rounded-xl bg-accentBlue font-semibold text-sm text-black dark:text-white text-center hover:bg-deepBlue transition shadow-lg shadow-accentBlue/30 hover:scale-105 duration-300">Jelajahi Tentang</Link>
                <Link to="/contact" className="px-6 sm:px-8 py-3 rounded-xl bg-white dark:bg-cardBg shadow-lg shadow-blue-500/10 border border-gray-300 dark:border-gray-700 font-semibold text-sm text-gray-800 dark:text-gray-200 text-center hover:border-accentBlue transition hover:scale-105 duration-300">Hubungi Saya</Link>
            </div>
        </div>
        <div className="md:w-1/2 w-full flex justify-center">
            <div data-aos="fade-up" data-tilt data-tilt-max="15" data-tilt-speed="400" data-tilt-glare="true" data-tilt-max-glare="0.3" className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-3xl overflow-hidden border-2 border-accentBlue/30 shadow-2xl shadow-accentBlue/40 bg-white/90 dark:bg-cardBg/40 shadow-lg shadow-blue-500/10 backdrop-blur-xl card-bg flex flex-col items-center justify-center p-6 sm:p-8 hover:scale-105 transition-transform duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 dark:from-blue-950/40 via-blue-100/10 dark:via-transparent to-transparent pointer-events-none rounded-3xl"></div>
                
                {/*  SLOT TEMPAT LOGO KAMPUS  */}
                <div className="relative z-10 text-center space-y-3 sm:space-y-4">
                    <div className="w-24 h-24 sm:w-32 sm:h-32 mx-auto rounded-2xl bg-white dark:bg-white/5 border border-white/60 dark:border-accentBlue/30 flex items-center justify-center p-3 shadow-xl shadow-blue-500/15 dark:shadow-lg backdrop-blur-md">
                        <img src="/img/Logo_LP3I.png" alt="Logo LP3I Jakarta Pusat" className="max-h-full max-w-full object-contain filter drop-shadow-[0_4px_8px_rgba(59,130,246,0.25)] dark:drop-shadow-[0_0_10px_rgba(59,130,246,0.5)] transition-transform duration-300 hover:scale-110" />
                    </div>
                    <div className="bg-white/70 dark:bg-darkBg/50 px-4 sm:px-6 py-2 sm:py-3 rounded-xl border border-accentBlue/30 backdrop-blur-sm">
                        <h3 className="text-sm sm:text-base font-bold text-black dark:text-white">LP3I Jakarta Pusat</h3>
                        <p className="text-[11px] sm:text-xs text-accentBlue font-medium mt-0.5">Kampus Utama - Vokasi & Penempatan Kerja</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/*  2. KAMPUS UTAMA & DETAIL KAMPUS SECTION  */}
    <section className="py-12 sm:py-16 px-4 sm:px-6 max-w-5xl mx-auto relative z-10 mb-8 sm:mb-16">
        <div data-aos="fade-up" data-tilt data-tilt-max="5" data-tilt-glare="true" data-tilt-max-glare="0.2" className="p-6 sm:p-10 rounded-3xl bg-white/90 dark:bg-cardBg/60 shadow-lg shadow-blue-500/10 backdrop-blur-lg card-bg border border-blue-200 dark:border-white/5 section-glow shadow-xl shadow-blue-900/10 dark:shadow-none">
            <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-8 text-center md:text-left">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-accentBlue/10 border border-accentBlue/30 flex items-center justify-center text-accentBlue text-3xl sm:text-4xl flex-shrink-0">
                    <i className="fa-solid fa-university"></i>
                </div>
                <div className="space-y-2 sm:space-y-3">
                    <span className="text-accentBlue text-xs font-bold uppercase tracking-widest">Academic Information</span>
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">LP3I Jakarta Pusat - Kampus Utama</h2>
                    <p className="text-black dark:text-white leading-relaxed text-xs sm:text-sm md:text-base">
                        Lembaga Pendidikan Vokasi terkemuka yang berfokus pada penempatan kerja dan keahlian praktis siap industri. Sebagai bagian dari Kampus Utama Jakarta Pusat, kurikulum dirancang secara spesifik untuk menjembatani kebutuhan dunia kerja nyata melalui metode pembelajaran vokasi berstandar tinggi.
                    </p>
                </div>
            </div>
        </div>
    </section>

    {/*  3. HARD SKILLS & SOFT SKILLS SECTION  */}
    <section id="skills" className="py-12 sm:py-16 px-4 sm:px-6 max-w-7xl mx-auto relative z-10 mb-8 sm:mb-16">
        <div className="text-center space-y-2 sm:space-y-3 mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">My <span className="text-accentBlue">Skills</span></h2>
            <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">Hard Skills & Soft Skills Mastered</p>
        </div>

        {/*  Hard Skills Grid  */}
        <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-accentBlue flex items-center gap-2"><i className="fa-solid fa-code"></i> Hard Skills</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-6 mb-12 sm:mb-16">
            {/*  1. CodeIgniter 4  */}
            <div data-aos="fade-up" data-tilt data-tilt-max="15" data-tilt-glare="true" data-tilt-max-glare="0.2" className="p-4 sm:p-6 rounded-2xl bg-white/90 dark:bg-cardBg/60 shadow-lg shadow-blue-500/10 backdrop-blur-md border border-blue-200 dark:border-white/5 section-glow shadow-xl shadow-blue-900/10 dark:shadow-none text-center hover:scale-105 duration-300 group">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-accentBlue/10 flex items-center justify-center text-accentBlue mx-auto mb-3 sm:mb-4 text-xl sm:text-2xl group-hover:bg-accentBlue group-hover:text-black dark:group-hover:text-white transition">
                    <i className="fa-solid fa-fire"></i>
                </div>
                <h4 className="font-bold text-xs sm:text-sm">CodeIgniter 4</h4>
            </div>
            {/*  2. PHP  */}
            <div data-aos="fade-up" data-tilt data-tilt-max="15" data-tilt-glare="true" data-tilt-max-glare="0.2" className="p-4 sm:p-6 rounded-2xl bg-white/90 dark:bg-cardBg/60 shadow-lg shadow-blue-500/10 backdrop-blur-md border border-blue-200 dark:border-white/5 section-glow shadow-xl shadow-blue-900/10 dark:shadow-none text-center hover:scale-105 duration-300 group">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-accentBlue/10 flex items-center justify-center text-accentBlue mx-auto mb-3 sm:mb-4 text-xl sm:text-2xl group-hover:bg-accentBlue group-hover:text-black dark:group-hover:text-white transition">
                    <i className="fa-solid fa-code"></i>
                </div>
                <h4 className="font-bold text-xs sm:text-sm">PHP</h4>
            </div>
            {/*  3. HTML5  */}
            <div data-aos="fade-up" data-tilt data-tilt-max="15" data-tilt-glare="true" data-tilt-max-glare="0.2" className="p-4 sm:p-6 rounded-2xl bg-white/90 dark:bg-cardBg/60 shadow-lg shadow-blue-500/10 backdrop-blur-md card-bg border border-blue-200 dark:border-white/5 section-glow shadow-xl shadow-blue-900/10 dark:shadow-none text-center hover:scale-105 duration-300 group h-full flex flex-col justify-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-accentBlue/10 flex items-center justify-center text-accentBlue mx-auto mb-3 sm:mb-4 text-xl sm:text-2xl group-hover:bg-accentBlue group-hover:text-black dark:group-hover:text-white transition">
                    <i className="fa-brands fa-html5"></i>
                </div>
                <h4 className="font-bold text-xs sm:text-sm">HTML5</h4>
            </div>
            {/*  4. MySQL  */}
            <div data-aos="fade-up" data-tilt data-tilt-max="15" data-tilt-glare="true" data-tilt-max-glare="0.2" className="p-4 sm:p-6 rounded-2xl bg-white/90 dark:bg-cardBg/60 shadow-lg shadow-blue-500/10 backdrop-blur-md card-bg border border-blue-200 dark:border-white/5 section-glow shadow-xl shadow-blue-900/10 dark:shadow-none text-center hover:scale-105 duration-300 group h-full flex flex-col justify-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-accentBlue/10 flex items-center justify-center text-accentBlue mx-auto mb-3 sm:mb-4 text-xl sm:text-2xl group-hover:bg-accentBlue group-hover:text-black dark:group-hover:text-white transition">
                    <i className="fa-solid fa-database"></i>
                </div>
                <h4 className="font-bold text-xs sm:text-sm">MySQL</h4>
            </div>
            {/*  5. CSS3  */}
            <div data-aos="fade-up" data-tilt data-tilt-max="15" data-tilt-glare="true" data-tilt-max-glare="0.2" className="p-4 sm:p-6 rounded-2xl bg-white/90 dark:bg-cardBg/60 shadow-lg shadow-blue-500/10 backdrop-blur-md card-bg border border-blue-200 dark:border-white/5 section-glow shadow-xl shadow-blue-900/10 dark:shadow-none text-center hover:scale-105 duration-300 group h-full flex flex-col justify-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-accentBlue/10 flex items-center justify-center text-accentBlue mx-auto mb-3 sm:mb-4 text-xl sm:text-2xl group-hover:bg-accentBlue group-hover:text-black dark:group-hover:text-white transition">
                    <i className="fa-brands fa-css3-alt"></i>
                </div>
                <h4 className="font-bold text-xs sm:text-sm">CSS3</h4>
            </div>
            {/*  6. AJAX  */}
            <div data-aos="fade-up" data-tilt data-tilt-max="15" data-tilt-glare="true" data-tilt-max-glare="0.2" className="p-4 sm:p-6 rounded-2xl bg-white/90 dark:bg-cardBg/60 shadow-lg shadow-blue-500/10 backdrop-blur-md card-bg border border-blue-200 dark:border-white/5 section-glow shadow-xl shadow-blue-900/10 dark:shadow-none text-center hover:scale-105 duration-300 group h-full flex flex-col justify-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-accentBlue/10 flex items-center justify-center text-accentBlue mx-auto mb-3 sm:mb-4 text-xl sm:text-2xl group-hover:bg-accentBlue group-hover:text-black dark:group-hover:text-white transition">
                    <i className="fa-solid fa-bolt"></i>
                </div>
                <h4 className="font-bold text-xs sm:text-sm">AJAX</h4>
            </div>
            {/*  7. Git  */}
            <div data-aos="fade-up" data-tilt data-tilt-max="15" data-tilt-glare="true" data-tilt-max-glare="0.2" className="p-4 sm:p-6 rounded-2xl bg-white/90 dark:bg-cardBg/60 shadow-lg shadow-blue-500/10 backdrop-blur-md card-bg border border-blue-200 dark:border-white/5 section-glow shadow-xl shadow-blue-900/10 dark:shadow-none text-center hover:scale-105 duration-300 group h-full flex flex-col justify-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-accentBlue/10 flex items-center justify-center text-accentBlue mx-auto mb-3 sm:mb-4 text-xl sm:text-2xl group-hover:bg-accentBlue group-hover:text-black dark:group-hover:text-white transition">
                    <i className="fa-brands fa-git-alt"></i>
                </div>
                <h4 className="font-bold text-xs sm:text-sm">Git</h4>
            </div>
            {/*  8. NODE.JS  */}
            <div data-aos="fade-up" data-tilt data-tilt-max="15" data-tilt-glare="true" data-tilt-max-glare="0.2" className="p-4 sm:p-6 rounded-2xl bg-white/90 dark:bg-cardBg/60 shadow-lg shadow-blue-500/10 backdrop-blur-md card-bg border border-blue-200 dark:border-white/5 section-glow shadow-xl shadow-blue-900/10 dark:shadow-none text-center hover:scale-105 duration-300 group h-full flex flex-col justify-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-accentBlue/10 flex items-center justify-center text-accentBlue mx-auto mb-3 sm:mb-4 text-xl sm:text-2xl group-hover:bg-accentBlue group-hover:text-black dark:group-hover:text-white transition">
                    <i className="fa-brands fa-node-js"></i>
                </div>
                <h4 className="font-bold text-xs sm:text-sm">NODE.JS</h4>
            </div>
            {/*  9. TAILWIND CSS  */}
            <div data-aos="fade-up" data-tilt data-tilt-max="15" data-tilt-glare="true" data-tilt-max-glare="0.2" className="p-4 sm:p-6 rounded-2xl bg-white/90 dark:bg-cardBg/60 shadow-lg shadow-blue-500/10 backdrop-blur-md card-bg border border-blue-200 dark:border-white/5 section-glow shadow-xl shadow-blue-900/10 dark:shadow-none text-center hover:scale-105 duration-300 group h-full flex flex-col justify-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-accentBlue/10 flex items-center justify-center text-accentBlue mx-auto mb-3 sm:mb-4 text-xl sm:text-2xl group-hover:bg-accentBlue group-hover:text-black dark:group-hover:text-white transition">
                    <i className="fa-solid fa-wind"></i>
                </div>
                <h4 className="font-bold text-xs sm:text-sm">TAILWIND CSS</h4>
            </div>
            {/*  10. REACT.JS  */}
            <div data-aos="fade-up" data-tilt data-tilt-max="15" data-tilt-glare="true" data-tilt-max-glare="0.2" className="p-4 sm:p-6 rounded-2xl bg-white/90 dark:bg-cardBg/60 shadow-lg shadow-blue-500/10 backdrop-blur-md card-bg border border-blue-200 dark:border-white/5 section-glow shadow-xl shadow-blue-900/10 dark:shadow-none text-center hover:scale-105 duration-300 group h-full flex flex-col justify-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-accentBlue/10 flex items-center justify-center text-accentBlue mx-auto mb-3 sm:mb-4 text-xl sm:text-2xl group-hover:bg-accentBlue group-hover:text-black dark:group-hover:text-white transition">
                    <i className="fa-brands fa-react"></i>
                </div>
                <h4 className="font-bold text-xs sm:text-sm">REACT.JS</h4>
            </div>
            {/*  11. SUPABASE  */}
            <div data-aos="fade-up" data-tilt data-tilt-max="15" data-tilt-glare="true" data-tilt-max-glare="0.2" className="p-4 sm:p-6 rounded-2xl bg-white/90 dark:bg-cardBg/60 shadow-lg shadow-blue-500/10 backdrop-blur-md card-bg border border-blue-200 dark:border-white/5 section-glow shadow-xl shadow-blue-900/10 dark:shadow-none text-center hover:scale-105 duration-300 group h-full flex flex-col justify-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-accentBlue/10 flex items-center justify-center text-accentBlue mx-auto mb-3 sm:mb-4 text-xl sm:text-2xl group-hover:bg-accentBlue group-hover:text-black dark:group-hover:text-white transition">
                    <i className="fa-solid fa-bolt"></i>
                </div>
                <h4 className="font-bold text-xs sm:text-sm">SUPABASE</h4>
            </div>
        </div>

        {/*  Soft Skills  */}
        <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-accentBlue flex items-center gap-2"><i className="fa-solid fa-users"></i> Soft Skills</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            <div data-aos="fade-up" data-tilt data-tilt-max="15" data-tilt-glare="true" data-tilt-max-glare="0.2" className="p-4 sm:p-6 rounded-2xl bg-white/90 dark:bg-cardBg/60 shadow-lg shadow-blue-500/10 backdrop-blur-md card-bg border border-blue-200 dark:border-white/5 section-glow shadow-xl shadow-blue-900/10 dark:shadow-none text-center hover:scale-105 duration-300 h-full flex flex-col justify-center">
                <h4 className="font-bold text-black dark:text-white text-sm sm:text-base">Koordinasi Tim</h4>
            </div>
            <div data-aos="fade-up" data-tilt data-tilt-max="15" data-tilt-glare="true" data-tilt-max-glare="0.2" className="p-4 sm:p-6 rounded-2xl bg-white/90 dark:bg-cardBg/60 shadow-lg shadow-blue-500/10 backdrop-blur-md card-bg border border-blue-200 dark:border-white/5 section-glow shadow-xl shadow-blue-900/10 dark:shadow-none text-center hover:scale-105 duration-300 h-full flex flex-col justify-center">
                <h4 className="font-bold text-black dark:text-white text-sm sm:text-base">Pemecahan Masalah</h4>
            </div>
            <div data-aos="fade-up" data-tilt data-tilt-max="15" data-tilt-glare="true" data-tilt-max-glare="0.2" className="p-4 sm:p-6 rounded-2xl bg-white/90 dark:bg-cardBg/60 shadow-lg shadow-blue-500/10 backdrop-blur-md card-bg border border-blue-200 dark:border-white/5 section-glow shadow-xl shadow-blue-900/10 dark:shadow-none text-center hover:scale-105 duration-300 h-full flex flex-col justify-center">
                <h4 className="font-bold text-black dark:text-white text-sm sm:text-base">Inisiatif & Mandiri</h4>
            </div>
            <div className="p-4 sm:p-6 rounded-2xl bg-white/90 dark:bg-cardBg/60 shadow-lg shadow-blue-500/10 backdrop-blur-md card-bg border border-blue-200 dark:border-white/5 section-glow shadow-xl shadow-blue-900/10 dark:shadow-none text-center hover:scale-105 duration-300 h-full flex flex-col justify-center">
                <h4 className="font-bold text-black dark:text-white text-sm sm:text-base">Perhatian terhadap Detail</h4>
            </div>
        </div>
    </section>


    {/*  5. GALERI FOTOGRAFI SECTION  */}
    <section id="galeri" className="py-12 sm:py-16 px-4 sm:px-6 max-w-7xl mx-auto relative z-10 mb-8 sm:mb-16">
        <div className="text-center space-y-2 sm:space-y-3 mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Photography <span className="text-accentBlue">Gallery</span></h2>
            <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">Scan the QR Code or click the card to view the Instagram post</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            
            {/*  QR Code 1  */}
            <div data-aos="fade-up" data-tilt data-tilt-max="8" data-tilt-glare="true" data-tilt-max-glare="0.2" className="rounded-2xl bg-white/90 dark:bg-cardBg/60 shadow-lg shadow-blue-500/10 backdrop-blur-lg card-bg border border-blue-200 dark:border-white/5 section-glow shadow-xl shadow-blue-900/10 dark:shadow-none overflow-hidden hover:scale-105 duration-300 flex flex-col p-4 sm:p-5 justify-between h-full">
                <a href="https://www.instagram.com/p/DGCPcF8z7ME/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" target="_blank" className="block group overflow-hidden rounded-xl mb-4 bg-white p-2">
                    <img src="/img/qr/qr-1.png.png" alt="QR Code Galeri 1" className="w-full h-40 sm:h-44 object-contain group-hover:scale-105 transition duration-300" />
                </a>
                <div>
                    <span className="text-xs text-accentBlue font-semibold uppercase tracking-wider">Galeri #1</span>
                    <h4 className="font-bold text-xs sm:text-sm text-black dark:text-white mt-1 mb-3">11 Februari 2025</h4>
                </div>
                <a href="https://www.instagram.com/p/DGCPcF8z7ME/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" target="_blank" className="w-full py-2.5 rounded-xl bg-accentBlue text-black dark:text-white text-xs font-semibold text-center hover:bg-deepBlue transition flex items-center justify-center gap-1.5 shadow-lg shadow-accentBlue/20">
                    Buka Instagram <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
            </div>

            {/*  QR Code 2  */}
            <div data-aos="fade-up" data-tilt data-tilt-max="8" data-tilt-glare="true" data-tilt-max-glare="0.2" className="rounded-2xl bg-white/90 dark:bg-cardBg/60 shadow-lg shadow-blue-500/10 backdrop-blur-lg card-bg border border-blue-200 dark:border-white/5 section-glow shadow-xl shadow-blue-900/10 dark:shadow-none overflow-hidden hover:scale-105 duration-300 flex flex-col p-4 sm:p-5 justify-between h-full">
                <a href="https://www.instagram.com/p/DF1k57CTv3e/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" target="_blank" className="block group overflow-hidden rounded-xl mb-4 bg-white p-2">
                    <img src="/img/qr/qr-2.png.png" alt="QR Code Galeri 2" className="w-full h-40 sm:h-44 object-contain group-hover:scale-105 transition duration-300" />
                </a>
                <div>
                    <span className="text-xs text-accentBlue font-semibold uppercase tracking-wider">Galeri #2</span>
                    <h4 className="font-bold text-xs sm:text-sm text-black dark:text-white mt-1 mb-3">15 Februari 2025</h4>
                </div>
                <a href="https://www.instagram.com/p/DF1k57CTv3e/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" target="_blank" className="w-full py-2.5 rounded-xl bg-accentBlue text-black dark:text-white text-xs font-semibold text-center hover:bg-deepBlue transition flex items-center justify-center gap-1.5 shadow-lg shadow-accentBlue/20">
                    Buka Instagram <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
            </div>

            {/*  QR Code 3  */}
            <div data-aos="fade-up" data-tilt data-tilt-max="8" data-tilt-glare="true" data-tilt-max-glare="0.2" className="rounded-2xl bg-white/90 dark:bg-cardBg/60 shadow-lg shadow-blue-500/10 backdrop-blur-lg card-bg border border-blue-200 dark:border-white/5 section-glow shadow-xl shadow-blue-900/10 dark:shadow-none overflow-hidden hover:scale-105 duration-300 flex flex-col p-4 sm:p-5 justify-between h-full">
                <a href="https://www.instagram.com/p/DGxC3kXpIZ6/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" target="_blank" className="block group overflow-hidden rounded-xl mb-4 bg-white p-2">
                    <img src="/img/qr/qr-3.png.png" alt="QR Code Galeri 3" className="w-full h-40 sm:h-44 object-contain group-hover:scale-105 transition duration-300" />
                </a>
                <div>
                    <span className="text-xs text-accentBlue font-semibold uppercase tracking-wider">Galeri #3</span>
                    <h4 className="font-bold text-xs sm:text-sm text-black dark:text-white mt-1 mb-3">18 Februari 2025</h4>
                </div>
                <a href="https://www.instagram.com/p/DGxC3kXpIZ6/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" target="_blank" className="w-full py-2.5 rounded-xl bg-accentBlue text-black dark:text-white text-xs font-semibold text-center hover:bg-deepBlue transition flex items-center justify-center gap-1.5 shadow-lg shadow-accentBlue/20">
                    Buka Instagram <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
            </div>

            {/*  QR Code 4  */}
            <div data-aos="fade-up" data-tilt data-tilt-max="8" data-tilt-glare="true" data-tilt-max-glare="0.2" className="rounded-2xl bg-white/90 dark:bg-cardBg/60 shadow-lg shadow-blue-500/10 backdrop-blur-lg card-bg border border-blue-200 dark:border-white/5 section-glow shadow-xl shadow-blue-900/10 dark:shadow-none overflow-hidden hover:scale-105 duration-300 flex flex-col p-4 sm:p-5 justify-between h-full">
                <a href="https://www.instagram.com/p/DG0byhKTho1/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" target="_blank" className="block group overflow-hidden rounded-xl mb-4 bg-white p-2">
                    <img src="/img/qr/qr-4.png.png" alt="QR Code Galeri 4" className="w-full h-40 sm:h-44 object-contain group-hover:scale-105 transition duration-300" />
                </a>
                <div>
                    <span className="text-xs text-accentBlue font-semibold uppercase tracking-wider">Galeri #4</span>
                    <h4 className="font-bold text-xs sm:text-sm text-black dark:text-white mt-1 mb-3">1 Maret 2025</h4>
                </div>
                <a href="https://www.instagram.com/p/DG0byhKTho1/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" target="_blank" className="w-full py-2.5 rounded-xl bg-accentBlue text-black dark:text-white text-xs font-semibold text-center hover:bg-deepBlue transition flex items-center justify-center gap-1.5 shadow-lg shadow-accentBlue/20">
                    Buka Instagram <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
            </div>

            {/*  QR Code 5  */}
            <div data-aos="fade-up" data-tilt data-tilt-max="8" data-tilt-glare="true" data-tilt-max-glare="0.2" className="rounded-2xl bg-white/90 dark:bg-cardBg/60 shadow-lg shadow-blue-500/10 backdrop-blur-lg card-bg border border-blue-200 dark:border-white/5 section-glow shadow-xl shadow-blue-900/10 dark:shadow-none overflow-hidden hover:scale-105 duration-300 flex flex-col p-4 sm:p-5 justify-between h-full">
                <a href="https://www.instagram.com/p/DGo9hjgTSQj/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" target="_blank" className="block group overflow-hidden rounded-xl mb-4 bg-white p-2">
                    <img src="/img/qr/qr-5.png.png" alt="QR Code Galeri 5" className="w-full h-40 sm:h-44 object-contain group-hover:scale-105 transition duration-300" />
                </a>
                <div>
                    <span className="text-xs text-accentBlue font-semibold uppercase tracking-wider">Galeri #5</span>
                    <h4 className="font-bold text-xs sm:text-sm text-black dark:text-white mt-1 mb-3">4 Maret 2025</h4>
                </div>
                <a href="https://www.instagram.com/p/DGo9hjgTSQj/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" target="_blank" className="w-full py-2.5 rounded-xl bg-accentBlue text-black dark:text-white text-xs font-semibold text-center hover:bg-deepBlue transition flex items-center justify-center gap-1.5 shadow-lg shadow-accentBlue/20">
                    Buka Instagram <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
            </div>

            {/*  QR Code 6  */}
            <div data-aos="fade-up" data-tilt data-tilt-max="8" data-tilt-glare="true" data-tilt-max-glare="0.2" className="rounded-2xl bg-white/90 dark:bg-cardBg/60 shadow-lg shadow-blue-500/10 backdrop-blur-lg card-bg border border-blue-200 dark:border-white/5 section-glow shadow-xl shadow-blue-900/10 dark:shadow-none overflow-hidden hover:scale-105 duration-300 flex flex-col p-4 sm:p-5 justify-between h-full">
                <a href="https://www.instagram.com/p/DGMN8jezj4T/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" target="_blank" className="block group overflow-hidden rounded-xl mb-4 bg-white p-2">
                    <img src="/img/qr/qr-6.png.png" alt="QR Code Galeri 6" className="w-full h-40 sm:h-44 object-contain group-hover:scale-105 transition duration-300" />
                </a>
                <div>
                    <span className="text-xs text-accentBlue font-semibold uppercase tracking-wider">Galeri #6</span>
                    <h4 className="font-bold text-xs sm:text-sm text-black dark:text-white mt-1 mb-3">9 Februari 2025</h4>
                </div>
                <a href="https://www.instagram.com/p/DGMN8jezj4T/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" target="_blank" className="w-full py-2.5 rounded-xl bg-accentBlue text-black dark:text-white text-xs font-semibold text-center hover:bg-deepBlue transition flex items-center justify-center gap-1.5 shadow-lg shadow-accentBlue/20">
                    Buka Instagram <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
            </div>

            {/*  QR Code 7  */}
            <div data-aos="fade-up" data-tilt data-tilt-max="8" data-tilt-glare="true" data-tilt-max-glare="0.2" className="rounded-2xl bg-white/90 dark:bg-cardBg/60 shadow-lg shadow-blue-500/10 backdrop-blur-lg card-bg border border-blue-200 dark:border-white/5 section-glow shadow-xl shadow-blue-900/10 dark:shadow-none overflow-hidden hover:scale-105 duration-300 flex flex-col p-4 sm:p-5 justify-between h-full">
                <a href="https://www.instagram.com/p/DGGESvmTqT9/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" target="_blank" className="block group overflow-hidden rounded-xl mb-4 bg-white p-2">
                    <img src="/img/qr/qr-7.png.png" alt="QR Code Galeri 7" className="w-full h-40 sm:h-44 object-contain group-hover:scale-105 transition duration-300" />
                </a>
                <div>
                    <span className="text-xs text-accentBlue font-semibold uppercase tracking-wider">Galeri #7</span>
                    <h4 className="font-bold text-xs sm:text-sm text-black dark:text-white mt-1 mb-3">14 Februari 2025</h4>
                </div>
                <a href="https://www.instagram.com/p/DGGESvmTqT9/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" target="_blank" className="w-full py-2.5 rounded-xl bg-accentBlue text-black dark:text-white text-xs font-semibold text-center hover:bg-deepBlue transition flex items-center justify-center gap-1.5 shadow-lg shadow-accentBlue/20">
                    Buka Instagram <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
            </div>

            {/*  QR Code 8  */}
            <div data-aos="fade-up" data-tilt data-tilt-max="8" data-tilt-glare="true" data-tilt-max-glare="0.2" className="rounded-2xl bg-white/90 dark:bg-cardBg/60 shadow-lg shadow-blue-500/10 backdrop-blur-lg card-bg border border-blue-200 dark:border-white/5 section-glow shadow-xl shadow-blue-900/10 dark:shadow-none overflow-hidden hover:scale-105 duration-300 flex flex-col p-4 sm:p-5 justify-between h-full">
                <a href="https://www.instagram.com/p/DF69ffFTqwn/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" target="_blank" className="block group overflow-hidden rounded-xl mb-4 bg-white p-2">
                    <img src="/img/qr/qr-8.png.png" alt="QR Code Galeri 8" className="w-full h-40 sm:h-44 object-contain group-hover:scale-105 transition duration-300" />
                </a>
                <div>
                    <span className="text-xs text-accentBlue font-semibold uppercase tracking-wider">Galeri #8</span>
                    <h4 className="font-bold text-xs sm:text-sm text-black dark:text-white mt-1 mb-3">18 Februari 2025 (2)</h4>
                </div>
                <a href="https://www.instagram.com/p/DF69ffFTqwn/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" target="_blank" className="w-full py-2.5 rounded-xl bg-accentBlue text-black dark:text-white text-xs font-semibold text-center hover:bg-deepBlue transition flex items-center justify-center gap-1.5 shadow-lg shadow-accentBlue/20">
                    Buka Instagram <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
            </div>

        </div>
    </section>

    {/*  6. VIDEO PROJECT / TUGAS SECTION  */}
    
    <section id="video" className="py-12 sm:py-16 px-4 sm:px-6 max-w-7xl mx-auto relative z-10 mb-8 sm:mb-16 overflow-hidden sm:overflow-visible">
        <div className="text-center space-y-2 sm:space-y-3 mb-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Video <span className="text-accentBlue">Projects & Assignments</span></h2>
            <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">A collection of documentation videos for academic assignments, presentations, and social media</p>
        </div>
        
        <div className="carousel-scene" data-aos="fade-up">
            <div className="carousel-wrap">
                {/*  Video 1 (Facebook)  */}
                <div className="carousel-item rounded-3xl bg-white/90 dark:bg-cardBg/60 shadow-lg shadow-blue-500/10 backdrop-blur-lg border border-blue-200 dark:border-white/5 overflow-hidden transition-all duration-300 hover:shadow-blue-500/30">
                    <div className="h-44 sm:h-48 bg-blue-900/40 flex items-center justify-center relative">
                        <a href="https://www.facebook.com/share/v/1AJ2gDzhnS/" target="_blank" className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-accentBlue text-black dark:text-white flex items-center justify-center text-lg sm:text-xl shadow-lg shadow-accentBlue/40 hover:scale-110 transition">
                            <i className="fa-solid fa-play ml-1"></i>
                        </a>
                    </div>
                    <div className="p-5 sm:p-6 flex-1 flex flex-col justify-center">
                        <span className="text-xs px-2.5 py-1 rounded-full bg-blue-500/10 text-accentBlue font-semibold w-fit">Facebook Video</span>
                        <h4 className="font-bold text-sm sm:text-base mt-3 text-black dark:text-white">Dokumentasi Acara</h4>
                    </div>
                </div>
                {/*  Video 2 (YouTube)  */}
                <div className="carousel-item rounded-3xl bg-white/90 dark:bg-cardBg/60 shadow-lg shadow-blue-500/10 backdrop-blur-lg border border-blue-200 dark:border-white/5 overflow-hidden transition-all duration-300 hover:shadow-blue-500/30">
                    <div className="h-44 sm:h-48 bg-cover bg-center relative" style={{ backgroundImage: "url('https://img.youtube.com/vi/FeHkgPk-YIg/hqdefault.jpg')" }}>
                        <a href="https://www.youtube.com/watch?v=FeHkgPk-YIg&t=1s" target="_blank" className="absolute inset-0 flex items-center justify-center bg-black/40">
                            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-accentBlue text-black dark:text-white flex items-center justify-center text-lg sm:text-xl shadow-lg shadow-accentBlue/40 hover:scale-110 transition">
                                <i className="fa-solid fa-play ml-1"></i>
                            </div>
                        </a>
                    </div>
                    <div className="p-5 sm:p-6 flex-1 flex flex-col justify-center">
                        <span className="text-xs px-2.5 py-1 rounded-full bg-red-500/10 text-red-400 font-semibold w-fit">YouTube Video</span>
                        <h4 className="font-bold text-sm sm:text-base mt-3 text-black dark:text-white">Mengenal Ransomware</h4>
                    </div>
                </div>
                {/*  Video 3 (YouTube)  */}
                <div className="carousel-item rounded-3xl bg-white/90 dark:bg-cardBg/60 shadow-lg shadow-blue-500/10 backdrop-blur-lg border border-blue-200 dark:border-white/5 overflow-hidden transition-all duration-300 hover:shadow-blue-500/30">
                    <div className="h-44 sm:h-48 bg-cover bg-center relative" style={{ backgroundImage: "url('https://img.youtube.com/vi/5EkjGZDtP0A/hqdefault.jpg')" }}>
                        <a href="https://www.youtube.com/watch?v=5EkjGZDtP0A" target="_blank" className="absolute inset-0 flex items-center justify-center bg-black/40">
                            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-accentBlue text-black dark:text-white flex items-center justify-center text-lg sm:text-xl shadow-lg shadow-accentBlue/40 hover:scale-110 transition">
                                <i className="fa-solid fa-play ml-1"></i>
                            </div>
                        </a>
                    </div>
                    <div className="p-5 sm:p-6 flex-1 flex flex-col justify-center">
                        <span className="text-xs px-2.5 py-1 rounded-full bg-red-500/10 text-red-400 font-semibold w-fit">YouTube Video</span>
                        <h4 className="font-bold text-sm sm:text-base mt-3 text-black dark:text-white">Nyari Makan di Jakarta</h4>
                    </div>
                </div>
                {/*  Video 4 (YouTube)  */}
                <div className="carousel-item rounded-3xl bg-white/90 dark:bg-cardBg/60 shadow-lg shadow-blue-500/10 backdrop-blur-lg border border-blue-200 dark:border-white/5 overflow-hidden transition-all duration-300 hover:shadow-blue-500/30">
                    <div className="h-44 sm:h-48 bg-cover bg-center relative" style={{ backgroundImage: "url('https://img.youtube.com/vi/oKOVpGQxusU/hqdefault.jpg')" }}>
                        <a href="https://www.youtube.com/watch?v=oKOVpGQxusU" target="_blank" className="absolute inset-0 flex items-center justify-center bg-black/40">
                            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-accentBlue text-black dark:text-white flex items-center justify-center text-lg sm:text-xl shadow-lg shadow-accentBlue/40 hover:scale-110 transition">
                                <i className="fa-solid fa-play ml-1"></i>
                            </div>
                        </a>
                    </div>
                    <div className="p-5 sm:p-6 flex-1 flex flex-col justify-center">
                        <span className="text-xs px-2.5 py-1 rounded-full bg-red-500/10 text-red-400 font-semibold w-fit">YouTube Video</span>
                        <h4 className="font-bold text-sm sm:text-base mt-3 text-black dark:text-white">Rekayasa Jaringan</h4>
                    </div>
                </div>
                {/*  Video 5 (YouTube Tambahan)  */}
                <div className="carousel-item rounded-3xl bg-white/90 dark:bg-cardBg/60 shadow-lg shadow-blue-500/10 backdrop-blur-lg border border-blue-200 dark:border-white/5 overflow-hidden transition-all duration-300 hover:shadow-blue-500/30">
                    <div className="h-44 sm:h-48 bg-gradient-to-r from-deepBlue to-accentBlue flex items-center justify-center relative">
                        <a href="https://www.youtube.com/watch?v=00JMeaQ5FbI" target="_blank" className="absolute inset-0 flex items-center justify-center">
                            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white text-accentBlue flex items-center justify-center text-xl sm:text-2xl shadow-xl hover:scale-110 transition z-10">
                                <i className="fa-solid fa-play ml-1"></i>
                            </div>
                        </a>
                    </div>
                    <div className="p-5 sm:p-6 flex-1 flex flex-col justify-center">
                        <span class="text-xs px-2.5 py-1 rounded-full bg-accentBlue/10 text-accentBlue font-semibold w-fit">Dokumentasi Tambahan</span>
                        <h4 className="font-bold text-base sm:text-lg mt-3 text-black dark:text-white">English Interview Project</h4>
                        <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm mt-2">Video dokumentasi wawancara dengan turis asing di Kota Tua.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    

    {/*  7. SERTIFIKASI SECTION  */}
    <section id="sertifikasi" className="py-12 sm:py-16 px-4 sm:px-6 max-w-7xl mx-auto relative z-10 mb-8 sm:mb-16">
        <div className="text-center space-y-2 sm:space-y-3 mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Certifications & <span className="text-accentBlue">Competencies</span></h2>
            <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">Click the certificate image to view the full details</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
            {/*  Sertifikat 1  */}
            <div data-aos="fade-up" data-tilt data-tilt-max="5" data-tilt-glare="true" data-tilt-max-glare="0.2" className="p-5 sm:p-6 rounded-3xl bg-white/90 dark:bg-cardBg/60 shadow-lg shadow-blue-500/10 backdrop-blur-lg card-bg border border-blue-200 dark:border-white/5 section-glow shadow-xl shadow-blue-900/10 dark:shadow-none hover:scale-105 duration-300 flex flex-col space-y-4 h-full">
                <a href="detail-sertif.html?id=database-administrator" className="block h-48 sm:h-56 rounded-2xl bg-gradient-to-br from-blue-900 via-deepBlue to-cardBg flex items-center justify-center text-center p-6 border border-accentBlue/30 group overflow-hidden relative">
                    <div className="absolute inset-0 bg-accentBlue/20 opacity-0 group-hover:opacity-100 transition"></div>
                    <div className="relative z-10">
                        <i className="fa-solid fa-database text-4xl sm:text-5xl text-accentBlue mb-3"></i>
                        <h4 className="text-black dark:text-white font-bold text-base sm:text-lg">Database Administrator</h4>
                        <span className="text-xs text-accentBlue mt-2 inline-block underline">Klik untuk melihat detail sertifikat</span>
                    </div>
                </a>
                <div>
                    <h3 className="font-bold text-lg sm:text-xl text-black dark:text-white">Database Administrator</h3>
                    <p className="text-xs sm:text-sm text-black dark:text-white mt-1 leading-relaxed">Sertifikasi keahlian dalam perancangan skema relasional, optimasi query SQL, serta manajemen basis data tingkat lanjut.</p>
                </div>
            </div>
            {/*  Sertifikat 2  */}
            <div data-aos="fade-up" data-tilt data-tilt-max="5" data-tilt-glare="true" data-tilt-max-glare="0.2" className="p-5 sm:p-6 rounded-3xl bg-white/90 dark:bg-cardBg/60 shadow-lg shadow-blue-500/10 backdrop-blur-lg card-bg border border-blue-200 dark:border-white/5 section-glow shadow-xl shadow-blue-900/10 dark:shadow-none hover:scale-105 duration-300 flex flex-col space-y-4 h-full">
                <a href="detail-sertif.html?id=tok-komputer" className="block h-48 sm:h-56 rounded-2xl bg-gradient-to-br from-deepBlue via-blue-900 to-cardBg flex items-center justify-center text-center p-6 border border-accentBlue/30 group overflow-hidden relative">
                    <div className="absolute inset-0 bg-accentBlue/20 opacity-0 group-hover:opacity-100 transition"></div>
                    <div className="relative z-10">
                        <i className="fa-solid fa-certificate text-4xl sm:text-5xl text-accentBlue mb-3"></i>
                        <h4 className="text-black dark:text-white font-bold text-base sm:text-lg">TOK (Teknik Operator Komputer)</h4>
                        <span className="text-xs text-accentBlue mt-2 inline-block underline">Klik untuk melihat detail sertifikat</span>
                    </div>
                </a>
                <div>
                    <h3 className="font-bold text-lg sm:text-xl text-black dark:text-white">TOK (Teknik Operator Komputer)</h3>
                    <p className="text-xs sm:text-sm text-black dark:text-white mt-1 leading-relaxed">Sertifikasi kompetensi operasional sistem komputer perkantoran, manajemen sistem, dan produktivitas digital.</p>
                </div>
            </div>
        </div>
    </section>

    {/*  8. WORK EXPERIENCE & ORGANIZATIONAL EXPERIENCE SECTION  */}
    <section id="pengalaman" className="py-12 sm:py-16 px-4 sm:px-6 max-w-7xl mx-auto relative z-10 mb-8 sm:mb-16">
        <div className="text-center space-y-2 sm:space-y-3 mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Work & <span className="text-accentBlue">Organization</span></h2>
            <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">History of professional work experience and campus organizations</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {/*  Work Experience 1: BNP Media Printing  */}
            <div data-aos="fade-up" className="glow-box bg-white/90 dark:bg-cardBg/60 shadow-lg shadow-blue-500/10 backdrop-blur-md card-bg h-full flex flex-col justify-between rounded-2xl p-6 sm:p-8 space-y-4 group">
                <div className="space-y-3">
                    <div className="flex justify-between items-center">
                        <span className="text-xs bg-blue-600/20 text-accentBlue border border-blue-500/30 px-3 py-1 rounded-full font-bold">Jan 2017 - Feb 2018</span>
                    </div>
                    <h3 className="text-xl font-bold text-black dark:text-white group-hover:text-accentBlue transition">BNP Media Printing</h3>
                    <h4 className="text-accentBlue font-medium text-sm">Design</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">Bertanggung jawab dalam pembuatan materi visual dan desain cetak sesuai dengan kebutuhan produksi perusahaan.</p>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                    <a href="/img/bnp-1.jpg" target="_blank" className="px-4 py-2 bg-accentBlue text-white text-xs font-semibold rounded-full hover:bg-blue-600 transition"><i className="fa-solid fa-image mr-1"></i> Gambar 1</a>
                    <a href="/img/bnp-2.jpg" target="_blank" className="px-4 py-2 bg-accentBlue text-white text-xs font-semibold rounded-full hover:bg-blue-600 transition"><i className="fa-solid fa-image mr-1"></i> Gambar 2</a>
                    <a href="/img/bnp-3.jpg" target="_blank" className="px-4 py-2 bg-accentBlue text-white text-xs font-semibold rounded-full hover:bg-blue-600 transition"><i className="fa-solid fa-image mr-1"></i> Gambar 3</a>
                </div>
            </div>

            {/*  Work Experience 2: PT. Sinar Jaya Prakarsa  */}
            <div data-aos="fade-up" className="glow-box bg-white/90 dark:bg-cardBg/60 shadow-lg shadow-blue-500/10 backdrop-blur-md card-bg h-full flex flex-col justify-between rounded-2xl p-6 sm:p-8 space-y-4 group">
                <div className="space-y-3">
                    <div className="flex justify-between items-center">
                        <span className="text-xs bg-blue-600/20 text-accentBlue border border-blue-500/30 px-3 py-1 rounded-full font-bold">Apr 2020 - Jul 2024</span>
                    </div>
                    <h3 className="text-xl font-bold text-black dark:text-white group-hover:text-accentBlue transition">PT. Sinar Jaya Prakarsa</h3>
                    <h4 className="text-accentBlue font-medium text-sm">Roll Produksi</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">Mengelola proses operasional mesin produksi secara sistematis dan menjaga standar kualitas kerja di bawah tekanan operasional.</p>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                    <a href="/img/sinarjaya-1.jpg" target="_blank" className="px-4 py-2 bg-accentBlue text-white text-xs font-semibold rounded-full hover:bg-blue-600 transition"><i className="fa-solid fa-image mr-1"></i> Gambar 1</a>
                    <a href="/img/sinarjaya-2.jpg" target="_blank" className="px-4 py-2 bg-accentBlue text-white text-xs font-semibold rounded-full hover:bg-blue-600 transition"><i className="fa-solid fa-image mr-1"></i> Gambar 2</a>
                    <a href="/img/sinarjaya-3.jpg" target="_blank" className="px-4 py-2 bg-accentBlue text-white text-xs font-semibold rounded-full hover:bg-blue-600 transition"><i className="fa-solid fa-image mr-1"></i> Gambar 3</a>
                </div>
            </div>

            {/*  Organizational Experience: UKM Timekovi  */}
            <div data-aos="fade-up" className="glow-box bg-white/90 dark:bg-cardBg/60 shadow-lg shadow-blue-500/10 backdrop-blur-md card-bg h-full flex flex-col justify-between rounded-2xl p-6 sm:p-8 space-y-4 group">
                <div className="space-y-3">
                    <div className="flex justify-between items-center">
                        <span className="text-xs bg-cyan-600/20 text-cyan-400 border border-cyan-500/30 px-3 py-1 rounded-full font-bold">2024 - 2026</span>
                    </div>
                    <h3 className="text-xl font-bold text-black dark:text-white group-hover:text-cyan-400 transition">UKM Timekovi</h3>
                    <h4 className="text-cyan-400 font-medium text-sm">Anggota</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">Aktif berpartisipasi dalam kegiatan organisasi, mengasah keterampilan komunikasi, koordinasi tim, dan tanggung jawab kolektif.</p>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                    <a href="/img/timekovi-video.mp4" target="_blank" className="px-4 py-2 bg-cyan-500 text-white text-xs font-semibold rounded-full hover:bg-cyan-600 transition"><i className="fa-solid fa-video mr-1"></i> Lihat Video</a>
                </div>
            </div>
        </div>
    </section>

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
                    <a href="https://www.linkedin.com/" target="_blank" className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gray-100 dark:bg-[#1e293b] border border-gray-300 dark:border-gray-600 flex items-center justify-center text-black dark:text-white hover:bg-accentBase hover:text-black dark:hover:text-white transition hover:scale-110"><svg className="w-4 h-4 fill-current" viewBox="0 0 448 512"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 01107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/></svg></a>
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
