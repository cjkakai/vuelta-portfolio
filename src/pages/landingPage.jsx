const LandingPage = () => {
  return (
    <div className="bg-white min-h-screen font-inter">

      {/* Navigation */}
      <nav className="flex flex-wrap items-center justify-between max-w-[1140px] mx-auto px-6 py-8 gap-4">
        <div className="flex items-center gap-2 text-2xl font-bold text-black tracking-tight">
          <img src="/logo.svg" alt="Vuelta Tech Logo" className="w-15 h-15" />
          <span>VUELTA TECH</span>
        </div>

        <div className="hidden md:flex gap-8 text-[16px] text-[#101010]">
          <a href="#home" className="hover:opacity-70 transition-opacity">Home</a>
          <a href="#services" className="hover:opacity-70 transition-opacity">Services</a>
          <a href="#case-studies" className="hover:opacity-70 transition-opacity">Case Studies</a>
          <a href="#testimonials" className="hover:opacity-70 transition-opacity">Testimonials</a>
          <a href="#contact" className="hover:opacity-70 transition-opacity">Contact us</a>
        </div>

        <button className="bg-black text-white px-5 py-2 rounded-full font-poppins text-[16px] hover:bg-gray-800 transition-colors">
          Get Started
        </button>
      </nav>

      {/* Hero Section */}
      <main className="max-w-[680px] mx-auto text-center pt-12 pb-20 px-6">

        {/* Badge */}
        <div className="inline-block bg-[#92f4ae] px-4 py-2 rounded-full mb-5">
          <p className="text-[14px] text-black">
            Offshore web and software development company
          </p>
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-semibold leading-tight tracking-tight text-black mb-5">
          Hire skilled developers to build your Website &amp; Apps
        </h1>

        {/* Description */}
        <p className="font-poppins text-[16px] leading-[24px] text-[#4c4c4c] mb-8">
          <span className="font-bold">VUELTA TECH</span> is a Website and Software Development Company. We help startups and businesses set up remote teams and build their web or mobile application and websites.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4 justify-center items-center mb-16">
          <button className="bg-black text-white px-6 py-3 rounded-full text-[18px] font-medium hover:bg-gray-800 transition-colors">
            Portfolio
          </button>

          <button className="border-2 border-black rounded-full px-6 py-3 flex items-center gap-2 text-[18px] font-medium text-black hover:bg-gray-50 transition-colors">
            Start your project
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>

        {/* Images */}
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center mt-8">
          <img
            src="/img1coding.jpg"
            alt="Development showcase"
            className="w-full md:w-[240px] h-[220px] object-cover rounded-[20px]"
          />
          <img
            src="/img2coding.jpg"
            alt="Project example"
            className="w-full md:w-[360px] h-[220px] object-cover rounded-[20px]"
          />
          <img
            src="/img3coding.jpg"
            alt="Team collaboration"
            className="w-full md:w-[220px] h-[220px] object-cover rounded-[20px]"
          />
        </div>

      </main>
    </div>
  );
};

export default LandingPage;
