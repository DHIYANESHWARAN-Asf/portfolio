import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, Download, Code2, Cpu, Terminal, Sparkles, RotateCcw, Compass } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const Hero = ({ onDownloadResume }) => {
  const { profile } = portfolioData;

  // Mouse Parallax Position
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // 2.5D / 360° Drag Rotation State
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const dragStartRef = useRef({ x: 0, y: 0 });
  const rotationStartRef = useRef({ x: 0, y: 0 });

  // Check Touch / Mobile
  const [isTouchDevice] = useState(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(pointer: coarse)').matches;
  });

  // Hero Name Character-by-Character Typing State
  const fullName = "DHIYANESHWARAN R";
  const [typedText, setTypedText] = useState(() => {
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return fullName;
    }
    return "";
  });
  const [showCursor, setShowCursor] = useState(() => {
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return false;
    }
    return true;
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (motionQuery.matches) return;

    let index = 0;
    const typingSpeed = 90; // Realistic speed (80-120ms)

    const timer = setInterval(() => {
      index++;
      setTypedText(fullName.slice(0, index));

      if (index >= fullName.length) {
        clearInterval(timer);
        // Keep cursor blinking for ~1s after completion, then smoothly hide
        setTimeout(() => {
          setShowCursor(false);
        }, 1000);
      }
    }, typingSpeed);

    return () => clearInterval(timer);
  }, []);

  // Track Mouse Movement for Subtle Background Parallax
  const handleMouseMove = (e) => {
    if (isDragging) return;
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth - 0.5) * 2; // -1 to 1
    const y = (clientY / innerHeight - 0.5) * 2; // -1 to 1
    setMousePos({ x, y });
  };

  // Drag Handlers for 360° / 2.5D Rotation
  const handlePointerDown = (e) => {
    setIsDragging(true);
    dragStartRef.current = { x: e.clientX, y: e.clientY };
    rotationStartRef.current = { ...rotation };
  };

  const handlePointerMove = (e) => {
    if (!isDragging) return;
    const deltaX = e.clientX - dragStartRef.current.x;
    const deltaY = e.clientY - dragStartRef.current.y;

    // Clamp rotationX to [-25, 25] and rotationY to [-60, 60] for 2.5D / 360 visual experience
    const newY = Math.min(Math.max(rotationStartRef.current.y + deltaX * 0.4, -60), 60);
    const newX = Math.min(Math.max(rotationStartRef.current.x - deltaY * 0.4, -25), 25);

    setRotation({ x: newX, y: newY });
  };

  const handlePointerUp = () => {
    setIsDragging(false);
  };

  const handleResetRotation = () => {
    setRotation({ x: 0, y: 0 });
  };

  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section
      id="hero"
      onMouseMove={handleMouseMove}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerUp}
      className="min-h-[95vh] flex flex-col justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-[#08090B] select-none"
    >
      {/* Subtle Background Code Visual Overlay */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20 font-mono text-[11px] text-zinc-600 space-y-3 p-8 hidden md:block">
        <div className="flex justify-between">
          <span>01 const developer = "DHIYANESHWARAN R";</span>
          <span>// System Online</span>
        </div>
        <div className="flex justify-between">
          <span>02 const focus = ["Data Science", "Software", "Web", "IoT", "Arduino", "C/C++"];</span>
          <span>BUILD • DEBUG • LEARN • REPEAT</span>
        </div>
        <div className="flex justify-between">
          <span>03 skills.map((tech) =&gt; engineer(tech));</span>
          <span>v1.0 • COMMAND CENTER</span>
        </div>
        <div className="flex justify-between">
          <span>04 system.status = "ready_to_build";</span>
          <span>// Sathyamangalam, Tamil Nadu</span>
        </div>
      </div>

      {/* Radial Blue Glow Background Effect reacting to mouse */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[140px] transition-transform duration-700 ease-out"
          style={{
            transform: `translate3d(calc(-50% + ${mousePos.x * 30}px), calc(-50% + ${mousePos.y * 30}px), 0)`
          }}
        ></div>
        <div className="absolute inset-0 bg-[radial-gradient(#1e222b_1px,transparent_1px)] [background-size:24px_24px] opacity-25"></div>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10 my-auto">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Developer Info & Headline */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="flex items-center space-x-3"
            >
              <div className="inline-flex items-center space-x-2.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span className="tracking-wide">{profile.availability}</span>
              </div>

              <span className="text-[11px] font-mono text-zinc-500 tracking-wider hidden sm:inline-block">
                BUILD • DEBUG • LEARN • REPEAT
              </span>
            </motion.div>

            {/* Name Heading — REALISTIC CHARACTER-BY-CHARACTER TYPING ANIMATION */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="space-y-3 min-h-[3.5rem] sm:min-h-[4.2rem]"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight flex items-center gap-3">
                <span className="inline-flex items-center whitespace-normal" aria-label={fullName}>
                  <span>{typedText}</span>
                  {showCursor && (
                    <span
                      aria-hidden="true"
                      className="inline-block w-[3px] h-[0.75em] bg-blue-500 ml-1 rounded-sm animate-pulse"
                    />
                  )}
                </span>
                <span className="w-3.5 h-3.5 rounded-full bg-blue-500 inline-block blue-glow-sm flex-shrink-0"></span>
              </h1>

              <p className="text-lg sm:text-xl md:text-2xl font-semibold text-blue-400 tracking-wide font-mono">
                M.Sc. Data Science Student <span className="text-zinc-600 font-sans mx-1">•</span> Developer <span className="text-zinc-600 font-sans mx-1">•</span> IoT Builder
              </p>
              <p className="text-sm sm:text-base text-zinc-400 font-medium tracking-wide flex items-center gap-2 pt-1 font-mono">
                <span className="w-2 h-2 rounded-full bg-blue-500 inline-block animate-pulse"></span>
                <span>Currently pursuing <span className="text-blue-400 font-semibold">M.Sc. Data Science</span> — 1st Year</span>
              </p>
            </motion.div>

            {/* Main Statement */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl sm:text-2xl lg:text-3xl font-bold text-zinc-100 leading-snug tracking-tight max-w-2xl"
            >
              "{profile.mainStatement}"
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-base sm:text-lg text-zinc-400 leading-relaxed max-w-xl"
            >
              {profile.supportingText}
            </motion.p>

            {/* Tactile Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <button
                onClick={() => scrollToSection('#projects')}
                className="group flex items-center space-x-2 px-6 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm rounded-xl transition-all duration-200 blue-glow-sm hover:scale-[1.03] active:scale-[0.98]"
              >
                <span>Explore My Work</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => scrollToSection('#contact')}
                className="flex items-center space-x-2 px-6 py-3.5 bg-[#101216] hover:bg-zinc-800 text-zinc-200 border border-zinc-800 hover:border-zinc-700 font-semibold text-sm rounded-xl transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
              >
                <Mail size={18} className="text-blue-400" />
                <span>Contact Me</span>
              </button>

              <button
                onClick={onDownloadResume}
                className="flex items-center space-x-2 px-5 py-3.5 bg-transparent hover:bg-zinc-900/60 text-zinc-400 hover:text-white font-medium text-sm rounded-xl border border-zinc-800 transition-colors"
              >
                <Download size={16} />
                <span>Download Resume</span>
              </button>
            </motion.div>
          </div>

          {/* Right Column: Interactive Developer Command Center Card with 2.5D / 360° Rotation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-5 relative flex items-center justify-center mt-8 lg:mt-0"
          >
            <div className="relative w-full max-w-md perspective-[1000px]">
              {/* Outer Glow Halo */}
              <div
                className="absolute -inset-1 bg-gradient-to-r from-blue-600/30 via-indigo-600/20 to-blue-500/30 rounded-3xl blur-xl opacity-75 transition-transform duration-500"
                style={{
                  transform: `translate3d(${mousePos.x * 15}px, ${mousePos.y * 15}px, 0)`
                }}
              ></div>

              {/* Interactive 2.5D / 360° Developer Identity Card */}
              <div
                onPointerDown={handlePointerDown}
                onPointerMove={handlePointerMove}
                className={`relative bg-[#101216] border border-zinc-800 rounded-2xl p-5 shadow-2xl space-y-4 transition-transform duration-100 ease-out cursor-grab ${
                  isDragging ? 'cursor-grabbing scale-[1.01]' : ''
                }`}
                style={{
                  transform: `rotateY(${rotation.y + mousePos.x * 8}deg) rotateX(${rotation.x - mousePos.y * 8}deg)`,
                  transformStyle: 'preserve-3d'
                }}
              >
                {/* Header Bar */}
                <div className="flex items-center justify-between border-b border-zinc-800/80 pb-3">
                  <div className="flex items-center space-x-2">
                    <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
                  </div>

                  <div className="flex items-center space-x-1.5 text-xs text-zinc-400 font-mono">
                    <Terminal size={14} className="text-blue-400" />
                    <span>dhiyaneshwaran.dev</span>
                  </div>
                </div>

                {/* Profile Photo / Hardware Visualization Area */}
                <div className="aspect-square bg-[#08090B] border border-zinc-800/90 rounded-xl flex flex-col items-center justify-center p-2 relative overflow-hidden group">
                  {profile.image ? (
                    <img
                      src={profile.image}
                      alt={profile.name}
                      className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-500 pointer-events-none"
                    />
                  ) : (
                    <div className="text-center space-y-4 relative z-10">
                      <div className="w-24 h-24 mx-auto rounded-2xl bg-gradient-to-br from-blue-600 to-blue-900 flex items-center justify-center border border-blue-400/30 shadow-lg shadow-blue-600/20 group-hover:scale-105 transition-transform">
                        <Cpu className="w-12 h-12 text-blue-200" />
                      </div>

                      <div className="space-y-1">
                        <p className="text-sm font-semibold text-white tracking-wide">Developer Workspace</p>
                        <p className="text-xs text-zinc-400 font-mono">Software • Data Science • IoT</p>
                      </div>
                    </div>
                  )}

                  {/* Interactive Rotation Reset Button & Drag Hint Overlay */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between pointer-events-none z-20">
                    <span className="text-[10px] font-mono text-blue-400/90 bg-[#08090B]/90 border border-zinc-800 px-2.5 py-1 rounded-md flex items-center gap-1">
                      <Compass size={11} className="animate-spin-slow" />
                      <span>{isTouchDevice ? "Touch & drag to explore" : "Drag to explore"}</span>
                    </span>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleResetRotation();
                      }}
                      className="pointer-events-auto text-[10px] font-mono text-zinc-400 hover:text-white bg-[#08090B]/90 border border-zinc-800 hover:border-blue-500/50 px-2 py-1 rounded-md flex items-center gap-1 transition-colors"
                      title="Reset 360° View"
                    >
                      <RotateCcw size={11} />
                      <span>Reset</span>
                    </button>
                  </div>

                  {/* Background grid line inside frame */}
                  <div className="absolute inset-0 bg-[radial-gradient(#1e222b_1px,transparent_1px)] [background-size:16px_16px] opacity-30 pointer-events-none"></div>
                </div>
              </div>

              {/* FLOATING CARD 1: Developer */}
              <motion.div
                animate={{
                  y: [0, -8, 0],
                  rotate: [0, 1.5, 0]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -top-5 -left-5 bg-[#101216]/95 border border-zinc-800 rounded-xl p-3 shadow-2xl flex items-center space-x-3 backdrop-blur-md z-30"
                style={{
                  transform: `translate3d(${mousePos.x * -12}px, ${mousePos.y * -12}px, 0)`
                }}
              >
                <div className="w-8 h-8 rounded-lg bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
                  <Code2 size={18} />
                </div>
                <div className="text-left">
                  <p className="text-xs font-semibold text-white">Developer</p>
                  <p className="text-[10px] text-zinc-400 font-mono">Web & Software</p>
                </div>
              </motion.div>

              {/* FLOATING CARD 2: Data Science */}
              <motion.div
                animate={{
                  y: [0, 8, 0],
                  rotate: [0, -1.5, 0]
                }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
                className="absolute top-1/3 -right-6 bg-[#101216]/95 border border-zinc-800 rounded-xl p-3 shadow-2xl flex items-center space-x-3 backdrop-blur-md z-30"
                style={{
                  transform: `translate3d(${mousePos.x * 12}px, ${mousePos.y * 12}px, 0)`
                }}
              >
                <div className="w-8 h-8 rounded-lg bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                  <Terminal size={18} />
                </div>
                <div className="text-left">
                  <p className="text-xs font-semibold text-white">Data Science</p>
                  <p className="text-[10px] text-zinc-400 font-mono">M.Sc. — 1st Year</p>
                </div>
              </motion.div>

              {/* FLOATING CARD 3: IoT Builder */}
              <motion.div
                animate={{
                  y: [0, -6, 0],
                  rotate: [0, 1, 0]
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
                className="absolute -bottom-5 left-4 bg-[#101216]/95 border border-zinc-800 rounded-xl p-3 shadow-2xl flex items-center space-x-3 backdrop-blur-md z-30"
                style={{
                  transform: `translate3d(${mousePos.x * -10}px, ${mousePos.y * -10}px, 0)`
                }}
              >
                <div className="w-8 h-8 rounded-lg bg-emerald-600/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <Cpu size={18} />
                </div>
                <div className="text-left">
                  <p className="text-xs font-semibold text-white">IoT Builder</p>
                  <p className="text-[10px] text-zinc-400 font-mono">Arduino • C/C++</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator at Bottom of Hero */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="pt-12 flex flex-col items-center justify-center"
        >
          <button
            onClick={() => scrollToSection('#about')}
            className="group flex flex-col items-center space-y-2 text-xs font-mono text-zinc-400 hover:text-blue-400 transition-colors cursor-pointer"
          >
            <span>Scroll to explore</span>
            <div className="w-5 h-8 border border-zinc-700 rounded-full flex items-start justify-center p-1 group-hover:border-blue-500/50 transition-colors">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="w-1.5 h-1.5 bg-blue-400 rounded-full"
              ></motion.div>
            </div>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
