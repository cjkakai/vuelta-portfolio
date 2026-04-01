const services = [
  { title: 'Website Development', desc: 'Professional, fast, and responsive websites tailored to your brand and business goals.' },
  { title: 'Web Applications', desc: 'Custom web apps built to streamline your workflows and serve your customers better.' },
  { title: 'POS & Inventory Systems', desc: 'Point-of-sale and inventory management systems designed for retail and hospitality businesses.' },
  { title: 'Internal Business Systems', desc: 'Custom internal tools — dashboards, CRMs, ERPs — to automate and manage your operations.' },
]

const Services = () => (
  <section id="services" className="py-20 px-6 bg-[#f9f9f9]">
    <div className="max-w-[1140px] mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-black text-center mb-12">Our Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((s) => (
          <div key={s.title} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <h3 className="text-lg font-semibold text-black mb-3">{s.title}</h3>
            <p className="text-[#4c4c4c] text-sm leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default Services
