export default function Header () {
return(
    <>
    <header className=" bg-slate-800 text-white px-8 py-5 flex justify-between items-center shadow-md ">
        <div className=" text-2xl font-bold tracking-wide " > Roobiul </div>
        <nav className=" flex space-x-6 ">
            <ul className=" flex list-none gap-[25px]">
                <li><a href="home" className=" relative py-[5px] text[1rem] text-[#fff5f5] transition-colors duration-300 hover:text-cyan-400 hover:drop-shadow-[0_0_10px_rgba(34,211,238,0.8)] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-cyan-400 after:transition-all after:duration-300 hover:after:w-full">Home</a></li>
                <li><a href="about" className=" relative py-[5px] text-[1rem] text-[#f8f0f0] transition-colors duration-300 hover:text-cyan-400 hover:drop-shadow-[0_0_10px_rgba(34,211,238,0.8)] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-cyan-400 after:transition-all after:duration-300 hover:after:w-full">About</a></li>
                <li><a href="contact" className="relative py-[5px] text-[1rem] text-[#fff5f5] transition-colors duration-300 hover:text-cyan-400 hover:drop-shadow-[0_0_10px_rgba(34,211,238,0.8)] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-cyan-400 after:transition-all after:duration-300 hover:after:w-full">Contact</a></li>
            </ul>
        </nav>
    </header>
    </>
)}; 