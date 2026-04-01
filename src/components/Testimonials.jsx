const testimonials = [
  { name: 'James M.', role: 'Retail Business Owner', text: 'VUELTA TECH built us a POS system that completely transformed how we manage our store. Fast, reliable, and easy to use.' },
  { name: 'Amina K.', role: 'Startup Founder', text: 'They delivered our web application on time and within budget. The team was professional and communicative throughout.' },
  { name: 'Brian O.', role: 'Operations Manager', text: 'Our internal dashboard has saved us hours every week. Highly recommend VUELTA TECH for any business system needs.' },
]

const Testimonials = () => (
  <section id="testimonials" className="py-20 px-6 bg-[#f9f9f9]">
    <div className="max-w-[1140px] mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-black text-center mb-12">Testimonials</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t) => (
          <div key={t.name} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <p className="text-[#4c4c4c] text-sm leading-relaxed mb-5">"{t.text}"</p>
            <div>
              <p className="font-semibold text-black text-sm">{t.name}</p>
              <p className="text-gray-400 text-xs">{t.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default Testimonials
