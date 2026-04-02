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

      {/* Sliding track — alternating test1/test2, doubled for seamless loop */}
      <div className="slide-track gap-6 items-center h-full">
        {[...Array(2)].flatMap((_, set) =>
          ['/test1.svg', '/test2.svg', '/test4.svg', '/test3.svg'].map((src, i) => (
            <div key={`${set}-${i}`} className="flex-shrink-0 w-[360px] h-[320px] rounded-2xl overflow-hidden">
              <img src={src} alt="Testimonial" className="w-full h-full object-contain" />
            </div>
          ))
        )}
      </div>

    </div>
  </section>
)

export default Testimonials
