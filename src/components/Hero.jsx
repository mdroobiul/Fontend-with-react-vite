export default function Hero() {
return(
    <>
<section id="home" className="h-[600px] flex flex-col items-center justify-center bg-slate-300 px-5 py-16 text-center">
  <h1 className="mb-4 text-4xl font-extrabold text-slate-800 md:text-5xl">
    Welcome to My Website
  </h1>
  <p className="mb-8 max-w-2xl text-lg leading-relaxed text-slate-800">
    This is my first React Website built with Vite & Tailwind CSS. Explore to learn more!
  </p>
  <button className="w-[160px] rounded-lg bg-cyan-500 py-3 text-base font-semibold text-white shadow-md transition-all duration-300 hover:bg-cyan-600">
    Click & Join Us
  </button>
</section>
    </>
)};