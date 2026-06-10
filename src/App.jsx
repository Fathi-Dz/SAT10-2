import React from 'react';
import geweh from './assets/geweh.jpg';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white font-['Plus_Jakarta_Sans',_sans-serif] flex flex-col justify-between selection:bg-amber-400 selection:text-black">
      

      <nav className="w-full max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">

        <div className="text-xl font-extrabold tracking-wider">
          MF<span className="text-amber-400">.</span>AZHARY
        </div>
        
        <div className="flex gap-8 text-sm font-medium text-zinc-400">
          <a href="#home" className="text-white hover:text-amber-400 transition-colors">Home</a>
          <a href="#about" className="hover:text-amber-400 transition-colors">About</a>
          <a href="#projects" className="hover:text-amber-400 transition-colors">Projects</a>
        </div>
      </nav>

      <main className="flex-grow flex flex-col items-center justify-center text-center px-4 max-w-3xl mx-auto">
        

        <div className="relative mb-8">
          <div className="absolute inset-0 bg-amber-400 rounded-[30%_70%_70%_30%_/_30%_30%_70%_70%] blur-xl opacity-20"></div>
          <img 
            src={geweh} 
            alt="bezehhh" 
            className="w-40 h-40 object-cover border-4 border-amber-400 bg-zinc-800 relative z-10 shadow-lg"
            style={{
              borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%'
            }}
          />
        </div>

        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-white">
          Muhammad Firman Azhary
        </h1>

        <div className="inline-flex items-center gap-2 bg-zinc-900 border border-zinc-800 rounded-full px-4 py-1.5 text-xs md:text-sm font-medium mb-6">
          <span className="w-2 h-2 rounded-full bg-amber-400"></span>
          <span className="text-zinc-300">Full-Stack Web Developer & </span>
          <span className="text-amber-400 font-semibold">Technical Educator</span>
        </div>

        <p className="text-zinc-400 text-base md:text-lg leading-relaxed max-w-2xl mb-10">
          Specializing in building robust web applications using the MERN stack and 
          Laravel. Passionate about crafting clean code, mentoring the next generation of 
          developers, and bridging the gap between education and modern technology.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full sm:w-auto">
          <button className="w-full sm:w-auto bg-amber-400 text-black font-bold px-8 py-3 rounded-xl hover:bg-amber-300 active:scale-95 transition-all duration-200">
            Get In Touch
          </button>
          <button className="w-full sm:w-auto bg-zinc-950 text-zinc-300 border border-zinc-800 font-semibold px-8 py-3 rounded-xl hover:bg-zinc-900 hover:text-white active:scale-95 transition-all duration-200">
            View Projects
          </button>
        </div>
      </main>

      <footer className="w-full max-w-7xl mx-auto px-6 py-8 border-t border-zinc-900 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-zinc-500">
        <div>
          © 2026 Personal Portfolio. All rights reserved.
        </div>
        <div className="flex gap-6">
          <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-zinc-300 transition-colors">GitHub</a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-zinc-300 transition-colors">LinkedIn</a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-zinc-300 transition-colors">Twitter</a>
        </div>
      </footer>

    </div>
  );
}