export default function About () {
  return (
    <>
    <section id="about" className="bg-slate-50 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-cyan-600 font-semibold tracking-wider text-sm uppercase">About This Project</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 mt-2 mb-4">
            Building Modern Web Solutions
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            This project showcases a modern single-page application built using cutting-edge web technologies.
          </p>
        </div>

        {/* 3 Cards written manually */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="text-3xl mb-6 bg-cyan-50 text-cyan-600 w-14 h-14 rounded-xl flex items-center justify-center">⚡</div>
            <h3 className="text-xl font-bold text-slate-800 mb-3">High-Performance Architecture</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Engineered with React and Vite to deliver ultra-fast load times, seamless state management, and an exceptional user experience.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="text-3xl mb-6 bg-cyan-50 text-cyan-600 w-14 h-14 rounded-xl flex items-center justify-center">🎨</div>
            <h3 className="text-xl font-bold text-slate-800 mb-3">Modern UI/UX Design</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Styled with Tailwind CSS to ensure a clean, responsive layout that adapts flawlessly across desktops, tablets, and mobile devices.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="text-3xl mb-6 bg-cyan-50 text-cyan-600 w-14 h-14 rounded-xl flex items-center justify-center">🛠️</div>
            <h3 className="text-xl font-bold text-slate-800 mb-3">Scalable Component Structure</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Built using modular, clean, and reusable code principles—making future expansion and maintenance effortless.
            </p>
          </div>

        </div>

      </div>
    </section>
    </>
  );
};
