const Testimonials = () => (
  <section id="testimonials" className="py-20 px-6 bg-[#f9f9f9] overflow-hidden">
    <div className="max-w-[1140px] mx-auto" style={{ height: '80%' }}>

      <style>{`
        @keyframes slideLoop {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .slide-track {
          display: flex;
          width: max-content;
          animation: slideLoop 12s linear infinite;
        }
      `}</style>

      {/* Sliding track — 6 items (3 real + 3 clones for seamless loop) */}
      <div className="slide-track gap-6 items-center h-full">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="flex-shrink-0 w-[360px] h-[320px] rounded-2xl overflow-hidden">
            <img src="/test1.svg" alt="Testimonial" className="w-full h-full object-contain" />
          </div>
        ))}
      </div>

    </div>
  </section>
)

export default Testimonials
