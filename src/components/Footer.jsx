export default function Footer() {
  return (
    <>
    <footer id="contact" className="bg-slate-900 text-slate-300 pt-16 pb-8 px-6 mt-auto">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
        
        {/* Column 1: Brand Info */}
        <div className="md:col-span-2">
          <h3 className="text-2xl font-bold text-white mb-3">Roobiul</h3>
          <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
            React JS ও Tailwind CSS দিয়ে তৈরি একটি প্র্যাকটিস প্রজেক্ট। ভবিষ্যৎ ওয়েব ডেভেলপমেন্ট স্কিল বৃদ্ধির জন্য এটি একটি অনন্য প্রয়াস।
          </p>
        </div>

        {/* Column 2: Navigation Links */}
        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2.5 text-sm">
            <li><a href="#home" className="hover:text-indigo-400 transition-colors">Home</a></li>
            <li><a href="#about" className="hover:text-indigo-400 transition-colors">About Us</a></li>
            <li><a href="#features" className="hover:text-indigo-400 transition-colors">Features</a></li>
            <li><a href="#contact" className="hover:text-indigo-400 transition-colors">Contact</a></li>
          </ul>
        </div>

        {/* Column 3: Resource Links */}
        <div>
          <h4 className="text-white font-semibold mb-4">Resources</h4>
          <ul className="space-y-2.5 text-sm">
            <li><a href="#" className="hover:text-indigo-400 transition-colors">Documentation</a></li>
            <li><a href="#" className="hover:text-indigo-400 transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-indigo-400 transition-colors">Terms of Service</a></li>
            <li><a href="#" className="hover:text-indigo-400 transition-colors">Support</a></li>
          </ul>
        </div>

      </div>

      

      {/* Copyright Line */}
      <div className="max-w-6xl mx-auto pt-6 text-center text-xs text-slate-500">
             <div className="text-sm text-slate-400 font-medium">
                Created by{" "}
                <span className="bg-gradient-to-r from-red-500 to-amber-500 bg-clip-text text-transparent font-semibold hover:underline cursor-pointer">
                  Md Robiul Islam
          </span>
            </div>
        &copy; 2026 Roobiul. All rights reserved.
      </div>
    </footer>
    </>
  );
};