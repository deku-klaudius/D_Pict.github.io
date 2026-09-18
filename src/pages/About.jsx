import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar.jsx';

export default function About() {

    return (
        <main>
            
    {/*  Static Image Backgrounds  */}
    <div className="fixed inset-0 w-full h-full z-0 bg-cover bg-center bg-no-repeat hidden dark:block" style={{ backgroundImage: "url('/img/dark_bg.jpg')" }}></div>
    <div className="fixed inset-0 w-full h-full z-0 bg-cover bg-center bg-no-repeat block dark:hidden" style={{ backgroundImage: "url('/img/light_bg.jpg')" }}></div>

    <Navbar />

    {/*  Main Content Container with generous spacing  */}
    <main className="relative z-10 flex-grow pt-32 pb-24 space-y-32">

        {/*  1 & 3. SECTION: HERO / PROFIL UTAMA & KAMPUS  */}
        <section className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/*  Text Info  */}
                <div className="space-y-6">
                    <div className="inline-flex items-center space-x-2 bg-blue-100 dark:bg-blue-950/80 border border-blue-500/40 px-4 py-1.5 rounded-full text-blue-400 text-sm font-semibold tracking-wide">
                        <i className="fa fa-graduation-cap"></i>
                        <span>Mahasiswa LP3I Jakarta Pusat (Kampus Utama)</span>
                    </div>
                    <h1 className="text-4xl lg:text-6xl font-bold tracking-tight text-black dark:text-white leading-tight">
                        Klaudius <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 glow-text">Oe Naimnou</span>
                    </h1>
                    <p className="text-black dark:text-white text-lg leading-relaxed">
                        Mahasiswa Manajemen Informatika dengan fokus Web Development. Berpengalaman membangun aplikasi full-stack menggunakan Html5, Css3, dan CodeIgniter 4, didukung pemahaman dasar keamanan aplikasi web dari pengalaman security testing. Terbiasa menangani proyek dari perancangan database, autentikasi, hingga deployment di lingkungan serverless. Interest sebagai Web Developer untuk mengasah kemampuan teknis dalam tim production-level.
                    </p>
                    <div className="flex flex-wrap gap-4 pt-4">
                        <a href="#skills" className="bg-blue-600 hover:bg-blue-500 text-black dark:text-white px-8 py-3 rounded-full font-semibold shadow-lg shadow-blue-600/40 transition transform hover:scale-105">Jelajahi Skills</a>
                        <Link to="/contact" className="border border-blue-500/50 hover:bg-blue-950/50 text-black dark:text-white px-8 py-3 rounded-full font-semibold transition">Hubungi Saya</Link>
                    </div>
                </div>

                {/*  Profile Photo Space  */}
                <div className="flex justify-center">
                    <div className="relative group">
                        {/*  Efek Cahaya Glow di belakang foto  */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-2xl blur-xl opacity-40 group-hover:opacity-75 transition duration-500"></div>
                        <div className="relative bg-white dark:bg-cardBg shadow-lg shadow-blue-500/10 border border-blue-500/30 rounded-2xl p-4 glow-box text-center">
                            {/*  Ganti src dengan path foto profil Anda  */}
                            <img src="/img/about/about.png" alt="Klaudius Oe Naimnou" className="rounded-xl w-80 h-96 object-cover mx-auto shadow-2xl" />
                            <div className="mt-4 bg-blue-950/90 border border-blue-500/40 rounded-xl py-3 px-4">
                                <h4 className="text-blue-400 font-bold text-base"><i className="fa fa-university mr-2"></i>LP3I Jakarta Pusat</h4>
                                <p className="text-gray-600 dark:text-gray-400 text-sm">Status: Kampus Utama</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/*  4 & 11. SECTION: HARD SKILLS & SOFT SKILLS  */}
        <section id="skills" className="max-w-7xl mx-auto px-6 space-y-16">
            <div className="text-center space-y-3">
                <span className="text-blue-400 font-bold tracking-widest uppercase text-sm">Keahlian</span>
                <h2 className="text-3xl lg:text-4xl font-bold">Skills & Competencies</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {/*  Hard Skills  */}
                <div className="glow-box bg-white/90 dark:bg-cardBg/60 shadow-lg shadow-blue-500/10 backdrop-blur-md card-bg h-full flex flex-col justify-center rounded-2xl p-8 space-y-6">
                    <div className="flex items-center space-x-3 border-b border-blue-900/50 pb-4">
                        <i className="fa fa-code text-2xl text-blue-400"></i>
                        <h3 className="text-2xl font-bold text-black dark:text-white">Hard Skills</h3>
                    </div>
                    <div className="flex flex-wrap gap-3">
                        <span className="bg-blue-100 dark:bg-blue-950/80 border border-blue-500/40 text-blue-800 dark:text-blue-300 px-4 py-2 rounded-xl text-sm font-semibold hover:bg-blue-600 hover:text-black dark:hover:text-white transition cursor-pointer">CodeIgniter 4</span>
                        <span className="bg-blue-100 dark:bg-blue-950/80 border border-blue-500/40 text-blue-800 dark:text-blue-300 px-4 py-2 rounded-xl text-sm font-semibold hover:bg-blue-600 hover:text-black dark:hover:text-white transition cursor-pointer">PHP</span>
                        <span className="bg-blue-100 dark:bg-blue-950/80 border border-blue-500/40 text-blue-800 dark:text-blue-300 px-4 py-2 rounded-xl text-sm font-semibold hover:bg-blue-600 hover:text-black dark:hover:text-white transition cursor-pointer">HTML5</span>
                        <span className="bg-blue-100 dark:bg-blue-950/80 border border-blue-500/40 text-blue-800 dark:text-blue-300 px-4 py-2 rounded-xl text-sm font-semibold hover:bg-blue-600 hover:text-black dark:hover:text-white transition cursor-pointer">MySQL</span>
                        <span className="bg-blue-100 dark:bg-blue-950/80 border border-blue-500/40 text-blue-800 dark:text-blue-300 px-4 py-2 rounded-xl text-sm font-semibold hover:bg-blue-600 hover:text-black dark:hover:text-white transition cursor-pointer">CSS3</span>
                        <span className="bg-blue-100 dark:bg-blue-950/80 border border-blue-500/40 text-blue-800 dark:text-blue-300 px-4 py-2 rounded-xl text-sm font-semibold hover:bg-blue-600 hover:text-black dark:hover:text-white transition cursor-pointer">AJAX</span>
                        <span className="bg-blue-100 dark:bg-blue-950/80 border border-blue-500/40 text-blue-800 dark:text-blue-300 px-4 py-2 rounded-xl text-sm font-semibold hover:bg-blue-600 hover:text-black dark:hover:text-white transition cursor-pointer">Git</span>
                        <span className="bg-blue-100 dark:bg-blue-950/80 border border-blue-500/40 text-blue-800 dark:text-blue-300 px-4 py-2 rounded-xl text-sm font-semibold hover:bg-blue-600 hover:text-black dark:hover:text-white transition cursor-pointer">NODE.JS</span>
                        <span className="bg-blue-100 dark:bg-blue-950/80 border border-blue-500/40 text-blue-800 dark:text-blue-300 px-4 py-2 rounded-xl text-sm font-semibold hover:bg-blue-600 hover:text-black dark:hover:text-white transition cursor-pointer">TAILWIND CSS</span>
                    </div>
                </div>

                {/*  Soft Skills  */}
                <div className="glow-box bg-white/90 dark:bg-cardBg/60 shadow-lg shadow-blue-500/10 backdrop-blur-md card-bg h-full flex flex-col justify-center rounded-2xl p-8 space-y-6">
                    <div className="flex items-center space-x-3 border-b border-blue-900/50 pb-4">
                        <i className="fa fa-users text-2xl text-blue-400"></i>
                        <h3 className="text-2xl font-bold text-black dark:text-white">Soft Skills</h3>
                    </div>
                    <div className="flex flex-wrap gap-3">
                        <span className="bg-cyan-100 dark:bg-cyan-950/60 border border-cyan-500/40 text-cyan-800 dark:text-cyan-300 px-4 py-2 rounded-xl text-sm font-semibold hover:bg-cyan-600 hover:text-black dark:hover:text-white transition cursor-pointer">Koordinasi Tim</span>
                        <span className="bg-cyan-100 dark:bg-cyan-950/60 border border-cyan-500/40 text-cyan-800 dark:text-cyan-300 px-4 py-2 rounded-xl text-sm font-semibold hover:bg-cyan-600 hover:text-black dark:hover:text-white transition cursor-pointer">Pemecahan Masalah</span>
                        <span className="bg-cyan-100 dark:bg-cyan-950/60 border border-cyan-500/40 text-cyan-800 dark:text-cyan-300 px-4 py-2 rounded-xl text-sm font-semibold hover:bg-cyan-600 hover:text-black dark:hover:text-white transition cursor-pointer">Inisiatif & Mandiri</span>
                        <span className="bg-cyan-100 dark:bg-cyan-950/60 border border-cyan-500/40 text-cyan-800 dark:text-cyan-300 px-4 py-2 rounded-xl text-sm font-semibold hover:bg-cyan-600 hover:text-black dark:hover:text-white transition cursor-pointer">Perhatian terhadap Detail</span>
                    </div>
                </div>
            </div>
        </section>

        {/*  5. SECTION: PROJECT WEBSITE  */}
        <section className="max-w-7xl mx-auto px-6 space-y-12">
            <div className="text-center space-y-3">
                <span className="text-blue-400 font-bold tracking-widest uppercase text-sm">Karya</span>
                <h2 className="text-3xl lg:text-4xl font-bold">Project Website</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-1 gap-8 max-w-3xl mx-auto">
                <div className="glow-box bg-white/90 dark:bg-cardBg/60 shadow-lg shadow-blue-500/10 backdrop-blur-md card-bg h-full flex flex-col justify-center rounded-2xl p-8 space-y-4">
                    <div className="flex justify-between items-start">
                        <div>
                            <h3 className="text-2xl font-bold text-black dark:text-white">KERENYES CHICKEN</h3>
                            <p className="text-blue-400 text-sm font-semibold mt-1">Web Development Project</p>
                        </div>
                        <span className="bg-blue-600/20 text-blue-400 border border-blue-500/30 px-3 py-1 rounded-full text-xs font-bold">Active</span>
                    </div>
                    <p className="text-black dark:text-white leading-relaxed">
                        Mengembangkan purwarupa dan antarmuka web fungsional menggunakan HTML5, CSS3, dan pengelolaan database MySQL terintegrasi back-end sederhana.
                    </p>
                    <ul className="space-y-2 text-gray-600 dark:text-gray-400 text-sm list-disc pl-5">
                        <li>Implementasi antarmuka responsif dan ramah pengguna.</li>
                        <li>Pengelolaan data produk dan sistem pemesanan dasar.</li>
                        <li>Pengujian fungsionalitas web secara berkala.</li>
                    </ul>
                    <div className="pt-4">
                        <a href="https://egigibran.github.io/kerenyes-chicken" target="_blank" className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-500 text-black dark:text-white px-6 py-2.5 rounded-xl font-semibold text-sm transition">
                            <span>Kunjungi Website</span>
                            <i className="fa fa-external-link"></i>
                        </a>
                    </div>
                </div>
            </div>
        </section>

        {/*  6. SECTION: GALERI FOTOGRAFIS (8 Link Instagram)  */}
        <section className="max-w-7xl mx-auto px-6 space-y-12">
            <div className="text-center space-y-3">
                <span className="text-blue-400 font-bold tracking-widest uppercase text-sm">Dokumentasi Visual</span>
                <h2 className="text-3xl lg:text-4xl font-bold">Galeri Fotografis</h2>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Klik tautan di bawah untuk melihat detail foto pada Instagram.</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {/*  8 Link Instagram  */}
                <a href="https://www.instagram.com" target="_blank" className="glow-box bg-white/90 dark:bg-cardBg/60 shadow-lg shadow-blue-500/10 backdrop-blur-md card-bg h-full flex flex-col justify-center rounded-xl p-6 text-center space-y-3 group block">
                    <div className="w-12 h-12 bg-blue-600/20 border border-blue-500/30 rounded-full flex items-center justify-center mx-auto text-blue-400 group-hover:bg-blue-600 group-hover:text-black dark:group-hover:text-white transition">
                        <i className="fa fa-instagram text-xl"></i>
                    </div>
                    <h4 className="font-bold text-black dark:text-white">Foto Galeri 1</h4>
                    <span className="text-xs text-blue-400 group-hover:underline">Lihat di Instagram <i className="fa fa-angle-right"></i></span>
                </a>
                <a href="https://www.instagram.com" target="_blank" className="glow-box bg-white/90 dark:bg-cardBg/60 shadow-lg shadow-blue-500/10 backdrop-blur-md card-bg h-full flex flex-col justify-center rounded-xl p-6 text-center space-y-3 group block">
                    <div className="w-12 h-12 bg-blue-600/20 border border-blue-500/30 rounded-full flex items-center justify-center mx-auto text-blue-400 group-hover:bg-blue-600 group-hover:text-black dark:group-hover:text-white transition">
                        <i className="fa fa-instagram text-xl"></i>
                    </div>
                    <h4 className="font-bold text-black dark:text-white">Foto Galeri 2</h4>
                    <span className="text-xs text-blue-400 group-hover:underline">Lihat di Instagram <i className="fa fa-angle-right"></i></span>
                </a>
                <a href="https://www.instagram.com" target="_blank" className="glow-box bg-white/90 dark:bg-cardBg/60 shadow-lg shadow-blue-500/10 backdrop-blur-md card-bg h-full flex flex-col justify-center rounded-xl p-6 text-center space-y-3 group block">
                    <div className="w-12 h-12 bg-blue-600/20 border border-blue-500/30 rounded-full flex items-center justify-center mx-auto text-blue-400 group-hover:bg-blue-600 group-hover:text-black dark:group-hover:text-white transition">
                        <i className="fa fa-instagram text-xl"></i>
                    </div>
                    <h4 className="font-bold text-black dark:text-white">Foto Galeri 3</h4>
                    <span className="text-xs text-blue-400 group-hover:underline">Lihat di Instagram <i className="fa fa-angle-right"></i></span>
                </a>
                <a href="https://www.instagram.com" target="_blank" className="glow-box bg-white/90 dark:bg-cardBg/60 shadow-lg shadow-blue-500/10 backdrop-blur-md card-bg h-full flex flex-col justify-center rounded-xl p-6 text-center space-y-3 group block">
                    <div className="w-12 h-12 bg-blue-600/20 border border-blue-500/30 rounded-full flex items-center justify-center mx-auto text-blue-400 group-hover:bg-blue-600 group-hover:text-black dark:group-hover:text-white transition">
                        <i className="fa fa-instagram text-xl"></i>
                    </div>
                    <h4 className="font-bold text-black dark:text-white">Foto Galeri 4</h4>
                    <span className="text-xs text-blue-400 group-hover:underline">Lihat di Instagram <i className="fa fa-angle-right"></i></span>
                </a>
                <a href="https://www.instagram.com" target="_blank" className="glow-box bg-white/90 dark:bg-cardBg/60 shadow-lg shadow-blue-500/10 backdrop-blur-md card-bg h-full flex flex-col justify-center rounded-xl p-6 text-center space-y-3 group block">
                    <div className="w-12 h-12 bg-blue-600/20 border border-blue-500/30 rounded-full flex items-center justify-center mx-auto text-blue-400 group-hover:bg-blue-600 group-hover:text-black dark:group-hover:text-white transition">
                        <i className="fa fa-instagram text-xl"></i>
                    </div>
                    <h4 className="font-bold text-black dark:text-white">Foto Galeri 5</h4>
                    <span className="text-xs text-blue-400 group-hover:underline">Lihat di Instagram <i className="fa fa-angle-right"></i></span>
                </a>
                <a href="https://www.instagram.com" target="_blank" className="glow-box bg-white/90 dark:bg-cardBg/60 shadow-lg shadow-blue-500/10 backdrop-blur-md card-bg h-full flex flex-col justify-center rounded-xl p-6 text-center space-y-3 group block">
                    <div className="w-12 h-12 bg-blue-600/20 border border-blue-500/30 rounded-full flex items-center justify-center mx-auto text-blue-400 group-hover:bg-blue-600 group-hover:text-black dark:group-hover:text-white transition">
                        <i className="fa fa-instagram text-xl"></i>
                    </div>
                    <h4 className="font-bold text-black dark:text-white">Foto Galeri 6</h4>
                    <span className="text-xs text-blue-400 group-hover:underline">Lihat di Instagram <i className="fa fa-angle-right"></i></span>
                </a>
                <a href="https://www.instagram.com" target="_blank" className="glow-box bg-white/90 dark:bg-cardBg/60 shadow-lg shadow-blue-500/10 backdrop-blur-md card-bg h-full flex flex-col justify-center rounded-xl p-6 text-center space-y-3 group block">
                    <div className="w-12 h-12 bg-blue-600/20 border border-blue-500/30 rounded-full flex items-center justify-center mx-auto text-blue-400 group-hover:bg-blue-600 group-hover:text-black dark:group-hover:text-white transition">
                        <i className="fa fa-instagram text-xl"></i>
                    </div>
                    <h4 className="font-bold text-black dark:text-white">Foto Galeri 7</h4>
                    <span className="text-xs text-blue-400 group-hover:underline">Lihat di Instagram <i className="fa fa-angle-right"></i></span>
                </a>
                <a href="https://www.instagram.com" target="_blank" className="glow-box bg-white/90 dark:bg-cardBg/60 shadow-lg shadow-blue-500/10 backdrop-blur-md card-bg h-full flex flex-col justify-center rounded-xl p-6 text-center space-y-3 group block">
                    <div className="w-12 h-12 bg-blue-600/20 border border-blue-500/30 rounded-full flex items-center justify-center mx-auto text-blue-400 group-hover:bg-blue-600 group-hover:text-black dark:group-hover:text-white transition">
                        <i className="fa fa-instagram text-xl"></i>
                    </div>
                    <h4 className="font-bold text-black dark:text-white">Foto Galeri 8</h4>
                    <span className="text-xs text-blue-400 group-hover:underline">Lihat di Instagram <i className="fa fa-angle-right"></i></span>
                </a>
            </div>
        </section>

        {/*  2. SECTION: TUGAS PROJECT VIDEO (5 Video: YouTube & Facebook)  */}
        <section className="max-w-7xl mx-auto px-6 space-y-12">
            <div className="text-center space-y-3">
                <span className="text-blue-400 font-bold tracking-widest uppercase text-sm">Kumpulan Video</span>
                <h2 className="text-3xl lg:text-4xl font-bold">Tugas Project Video</h2>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Dokumentasi video presentasi dan project yang telah diunggah.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/*  Video 1 (Facebook 1)  */}
                <div className="glow-box bg-white/90 dark:bg-cardBg/60 shadow-lg shadow-blue-500/10 backdrop-blur-md card-bg h-full flex flex-col justify-center rounded-2xl p-6 space-y-4">
                    <div className="flex items-center space-x-3">
                        <i className="fa-brands fa-facebook text-blue-500 text-2xl"></i>
                        <h4 className="font-bold text-black dark:text-white">Self Introduction</h4>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">First English Task : Make a self Introduction video.</p>
                    <a href="https://web.facebook.com/share/v/1DBygYzqRV/" target="_blank" className="inline-block bg-blue-600 hover:bg-blue-500 text-black dark:text-white px-5 py-2 rounded-xl text-sm font-semibold transition">Tonton Video <i className="fa fa-play ml-1"></i></a>
                </div>
                {/*  Video 2 (Tambahan link / cadangan slot ke-2)  */}
                <div className="glow-box bg-white/90 dark:bg-cardBg/60 shadow-lg shadow-blue-500/10 backdrop-blur-md card-bg h-full flex flex-col justify-center rounded-2xl p-6 space-y-4">
                    <div className="flex items-center space-x-3">
                        <i className="fa-brands fa-facebook text-blue-500 text-2xl"></i>
                        <h4 className="font-bold text-black dark:text-white">English Expressions</h4>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">Expressions of Permission in English Conversations.</p>
                    <a href="https://www.facebook.com/share/v/1AJ2gDzhnS/" target="_blank" className="inline-block bg-blue-600 hover:bg-blue-500 text-black dark:text-white px-5 py-2 rounded-xl text-sm font-semibold transition">Tonton Video <i className="fa fa-play ml-1"></i></a>
                </div>
                {/*  Video 1 (Tambahan link / cadangan slot ke-3)  */}
                <div className="glow-box bg-white/90 dark:bg-cardBg/60 shadow-lg shadow-blue-500/10 backdrop-blur-md card-bg h-full flex flex-col justify-center rounded-2xl p-6 space-y-4">
                    <div className="flex items-center space-x-3">
                        <i className="fa-brands fa-youtube text-red-500 text-2xl"></i>
                        <h4 className="font-bold text-black dark:text-white">Rekayasa Jaringan</h4>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">Tugas UAS - Rekayasa Instalasi Jaringan Kelompok 1.</p>
                    <a href="https://www.youtube.com/watch?v=oKOVpGQxusU" target="_blank" className="inline-block bg-red-600 hover:bg-red-500 text-black dark:text-white px-5 py-2 rounded-xl text-sm font-semibold transition">Tonton Video <i className="fa fa-play ml-1"></i></a>
                </div>
            {/*  Video 2 (Tambahan link / cadangan slot ke-4)  */}
                <div className="glow-box bg-white/90 dark:bg-cardBg/60 shadow-lg shadow-blue-500/10 backdrop-blur-md card-bg h-full flex flex-col justify-center rounded-2xl p-6 space-y-4">
                    <div className="flex items-center space-x-3">
                        <i className="fa-brands fa-youtube text-red-500 text-2xl"></i>
                        <h4 className="font-bold text-black dark:text-white">Mengenal Ransomware</h4>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">Mari Mengenal Ransomware Biar Tidak Terkena Link Phishing.</p>
                    <a href="https://www.youtube.com/watch?v=FeHkgPk-YIg&t=1s" target="_blank" className="inline-block bg-red-600 hover:bg-red-500 text-black dark:text-white px-5 py-2 rounded-xl text-sm font-semibold transition">Tonton Video <i className="fa fa-play ml-1"></i></a>
                </div>
            {/*  Video 3 (Tambahan link / cadangan slot ke-5)  */}
                <div className="glow-box bg-white/90 dark:bg-cardBg/60 shadow-lg shadow-blue-500/10 backdrop-blur-md card-bg h-full flex flex-col justify-center rounded-2xl p-6 space-y-4">
                    <div className="flex items-center space-x-3">
                        <i className="fa-brands fa-youtube text-red-500 text-2xl"></i>
                        <h4 className="font-bold text-black dark:text-white">English Interview</h4>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">English project find and talking foreigner.</p>
                    <a href="https://www.youtube.com/watch?v=00JMeaQ5FbI" target="_blank" className="inline-block bg-red-600 hover:bg-red-500 text-black dark:text-white px-5 py-2 rounded-xl text-sm font-semibold transition">Tonton Video <i className="fa fa-play ml-1"></i></a>
                </div>
                {/*  Video 4 (Tambahan link / cadangan slot ke-6)  */}
                <div className="glow-box bg-white/90 dark:bg-cardBg/60 shadow-lg shadow-blue-500/10 backdrop-blur-md card-bg h-full flex flex-col justify-center rounded-2xl p-6 space-y-4">
                    <div className="flex items-center space-x-3">
                        <i className="fa-brands fa-youtube text-red-500 text-2xl"></i>
                        <h4 className="font-bold text-black dark:text-white">Nyari Makan di Jakarta</h4>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">Cara Tanya Arah ke Warteg Terdekat (Getting Around).</p>
                    <a href="https://www.youtube.com/watch?v=5EkjGZDtP0A" target="_blank" className="inline-block bg-red-600 hover:bg-red-500 text-black dark:text-white px-5 py-2 rounded-xl text-sm font-semibold transition">Tonton Video <i className="fa fa-play ml-1"></i></a>
                </div>
            </div>
        </section>

        {/*  7. SECTION: SERTIFIKASI  */}
        <section className="max-w-7xl mx-auto px-6 space-y-12">
            <div className="text-center space-y-3">
                <span className="text-blue-400 font-bold tracking-widest uppercase text-sm">Kredensial Resmi</span>
                <h2 className="text-3xl lg:text-4xl font-bold">Sertifikasi</h2>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Klik gambar sertifikat untuk memperbesar tampilan.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {/*  Sertifikat 1  */}
                <div className="glow-box bg-white/90 dark:bg-cardBg/60 shadow-lg shadow-blue-500/10 backdrop-blur-md card-bg h-full flex flex-col justify-center rounded-2xl p-6 space-y-4 text-center">
                    <div className="overflow-hidden rounded-xl border border-blue-500/30">
                        {/*  Ganti path gambar sertifikat sesuai file Anda  */}
                        <a href="/img/about/about.png" target="_blank">
                            <img src="/img/about/about.png" alt="Database Administrator" className="w-full h-64 object-cover hover:scale-105 transition duration-500" />
                        </a>
                    </div>
                    <h3 className="text-xl font-bold text-black dark:text-white">Database Administrator</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">Sertifikasi keahlian pengelolaan dan perancangan database.</p>
                </div>
                {/*  Sertifikat 2  */}
                <div className="glow-box bg-white/90 dark:bg-cardBg/60 shadow-lg shadow-blue-500/10 backdrop-blur-md card-bg h-full flex flex-col justify-center rounded-2xl p-6 space-y-4 text-center">
                    <div className="overflow-hidden rounded-xl border border-blue-500/30">
                        <a href="/img/about/about.png" target="_blank">
                            <img src="/img/about/about.png" alt="TOK" className="w-full h-64 object-cover hover:scale-105 transition duration-500" />
                        </a>
                    </div>
                    <h3 className="text-xl font-bold text-black dark:text-white">TOK (Teknik Operator Komputer)</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">Sertifikasi kompetensi pengoperasian sistem komputer & aplikasi.</p>
                </div>
            </div>
        </section>

{/*  8 & 12. SECTION: WORK EXPERIENCE & ORGANIZATIONAL EXPERIENCE  */}
                <section className="max-w-7xl mx-auto px-6 space-y-16">
                    <div className="text-center space-y-3">
                        <span className="text-blue-400 font-bold tracking-widest uppercase text-sm">Riwayat Karir & Organisasi</span>
                        <h2 className="text-3xl lg:text-4xl font-bold">Pengalaman & Organisasi</h2>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">Klik pada masing-masing kartu pengalaman untuk melihat galeri foto dokumentasi.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/*  Work Experience 1: BNP Media Printing  */}
            <div className="glow-box bg-white/90 dark:bg-cardBg/60 shadow-lg shadow-blue-500/10 backdrop-blur-md card-bg h-full flex flex-col justify-center rounded-2xl p-8 space-y-4 group">
                <div className="flex justify-between items-center">
                    <span className="text-xs bg-blue-600/20 text-blue-400 border border-blue-500/30 px-3 py-1 rounded-full font-bold">Jan 2017 - Feb 2018</span>
                </div>
                <h3 className="text-xl font-bold text-black dark:text-white group-hover:text-blue-400 transition">BNP Media Printing</h3>
                <h4 className="text-blue-400 font-medium text-sm">Design</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">Bertanggung jawab dalam pembuatan materi visual dan desain cetak sesuai dengan kebutuhan produksi perusahaan.</p>
                <div className="mt-4 flex flex-wrap gap-2">
                    <a href="/img/bnp-1.jpg" target="_blank" className="px-4 py-2 bg-blue-500 text-white text-xs font-semibold rounded-full hover:bg-blue-600 transition"><i className="fa-solid fa-image mr-1"></i> Gambar 1</a>
                    <a href="/img/bnp-2.jpg" target="_blank" className="px-4 py-2 bg-blue-500 text-white text-xs font-semibold rounded-full hover:bg-blue-600 transition"><i className="fa-solid fa-image mr-1"></i> Gambar 2</a>
                    <a href="/img/bnp-3.jpg" target="_blank" className="px-4 py-2 bg-blue-500 text-white text-xs font-semibold rounded-full hover:bg-blue-600 transition"><i className="fa-solid fa-image mr-1"></i> Gambar 3</a>
                </div>
            </div>

            {/*  Work Experience 2: PT. Sinar Jaya Prakarsa  */}
            <div className="glow-box bg-white/90 dark:bg-cardBg/60 shadow-lg shadow-blue-500/10 backdrop-blur-md card-bg h-full flex flex-col justify-center rounded-2xl p-8 space-y-4 group">
                <div className="flex justify-between items-center">
                    <span className="text-xs bg-blue-600/20 text-blue-400 border border-blue-500/30 px-3 py-1 rounded-full font-bold">Apr 2020 - Jul 2024</span>
                </div>
                <h3 className="text-xl font-bold text-black dark:text-white group-hover:text-blue-400 transition">PT. Sinar Jaya Prakarsa</h3>
                <h4 className="text-blue-400 font-medium text-sm">Roll Produksi</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">Mengelola proses operasional mesin produksi secara sistematis dan menjaga standar kualitas kerja di bawah tekanan operasional.</p>
                <div className="mt-4 flex flex-wrap gap-2">
                    <a href="/img/sinarjaya-1.jpg" target="_blank" className="px-4 py-2 bg-blue-500 text-white text-xs font-semibold rounded-full hover:bg-blue-600 transition"><i className="fa-solid fa-image mr-1"></i> Gambar 1</a>
                    <a href="/img/sinarjaya-2.jpg" target="_blank" className="px-4 py-2 bg-blue-500 text-white text-xs font-semibold rounded-full hover:bg-blue-600 transition"><i className="fa-solid fa-image mr-1"></i> Gambar 2</a>
                    <a href="/img/sinarjaya-3.jpg" target="_blank" className="px-4 py-2 bg-blue-500 text-white text-xs font-semibold rounded-full hover:bg-blue-600 transition"><i className="fa-solid fa-image mr-1"></i> Gambar 3</a>
                </div>
            </div>

            {/*  Organizational Experience: UKM Timekovi  */}
            <div className="glow-box bg-white/90 dark:bg-cardBg/60 shadow-lg shadow-blue-500/10 backdrop-blur-md card-bg h-full flex flex-col justify-center rounded-2xl p-8 space-y-4 group">
                <div className="flex justify-between items-center">
                    <span className="text-xs bg-cyan-600/20 text-cyan-400 border border-cyan-500/30 px-3 py-1 rounded-full font-bold">2024 - 2026</span>
                </div>
                <h3 className="text-xl font-bold text-black dark:text-white group-hover:text-cyan-400 transition">UKM Timekovi</h3>
                <h4 className="text-cyan-400 font-medium text-sm">Anggota</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">Aktif berpartisipasi dalam kegiatan organisasi, mengasah keterampilan komunikasi, koordinasi tim, dan tanggung jawab kolektif.</p>
                <div className="mt-4 flex flex-wrap gap-2">
                    <a href="/img/timekovi-video.mp4" target="_blank" className="px-4 py-2 bg-cyan-500 text-white text-xs font-semibold rounded-full hover:bg-cyan-600 transition"><i className="fa-solid fa-video mr-1"></i> Lihat Video</a>
                </div>
            </div>
        </div>
        </section>

    </main>

    {/*  9. FOOTER  */}
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
