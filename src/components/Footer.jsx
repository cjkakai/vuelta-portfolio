const Footer = () => (
  <footer
    className="relative h-screen w-full bg-cover bg-center bg-no-repeat text-white"
    // style={{ backgroundImage: "url('/footer.svg')" }}
  >
    {/* Dark overlay for text contrast */}
    <div className="absolute inset-0 bg-black/50" />
    <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover" src="/hero.mp4" />
    {/* Content */}
    <div className="relative z-10 h-full max-w-[1140px] mx-auto px-6 flex flex-col justify-between py-16">

      {/* 4-Column Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 flex-1 content-center mb-10">

        {/* Column 1 – Services */}
        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest text-white mb-4">Services</h4>
          <ul className="flex flex-col gap-2 text-sm text-gray-300">
            {['Website Development', 'Web Applications', 'Point-of-Sale Systems', 'Inventory Management', 'Internal Business Systems'].map((s) => (
              <li key={s}>
                <a href="#services" className="hover:text-white hover:underline transition-colors">{s}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 2 – Resources */}
        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest text-white mb-4">Resources</h4>
          <ul className="flex flex-col gap-2 text-sm text-gray-300">
            {['Blog', 'Guides & Documentation', 'FAQs', 'Help Center'].map((r) => (
              <li key={r}>
                <a href="#" className="hover:text-white hover:underline transition-colors">{r}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3 – About Us */}
        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest text-white mb-4">About Us</h4>
          <p className="text-sm text-gray-300 leading-relaxed">
            VUELTA TECH helps businesses build websites, apps, and internal systems with remote teams and professional support.
          </p>
        </div>

        {/* Column 4 – Contact & Social */}
        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest text-white mb-4">Contact Us</h4>
          <ul className="flex flex-col gap-2 text-sm text-gray-300 mb-6">
            <li>📞 +254 704 919 850</li>
            <li>✉️ cjkakai5@gmail.com</li>
            <li className="leading-relaxed">📍 Office 113, 1st Floor, Applewood Adams, Ngong Road, Nairobi, Kenya</li>
          </ul>

          {/* Social Icons */}
          <div className="flex gap-4">
            {/* Instagram */}
            <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.975.975 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.975.975-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.975-.975-1.246-2.242-1.308-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.975-.975 2.242-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.014 7.052.072 5.197.157 3.355.673 2.014 2.014.673 3.355.157 5.197.072 7.052.014 8.332 0 8.741 0 12c0 3.259.014 3.668.072 4.948.085 1.855.601 3.697 1.942 5.038 1.341 1.341 3.183 1.857 5.038 1.942C8.332 23.986 8.741 24 12 24s3.668-.014 4.948-.072c1.855-.085 3.697-.601 5.038-1.942 1.341-1.341 1.857-3.183 1.942-5.038.058-1.28.072-1.689.072-4.948s-.014-3.668-.072-4.948c-.085-1.855-.601-3.697-1.942-5.038C20.645.673 18.803.157 16.948.072 15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
              </svg>
            </a>
            {/* LinkedIn */}
            <a href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452H16.89v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a1.98 1.98 0 1 1 0-3.96 1.98 1.98 0 0 1 0 3.96zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            {/* Twitter / X */}
            <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.253 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
              </svg>
            </a>
          </div>
        </div>

      </div>

      {/* Divider */}
      <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-gray-500 mt-auto">
        <p>© {new Date().getFullYear()} VUELTA TECH. All Rights Reserved.</p>
        <div className="flex gap-4">
          <a href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-gray-300 transition-colors">Terms of Service</a>
        </div>
      </div>

    </div>
  </footer>
)

export default Footer
