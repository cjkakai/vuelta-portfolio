const projects = [
  { title: 'Retail POS System', img: '/pos.svg', desc: 'A full-featured point-of-sale system built for a Nairobi-based retail chain with inventory tracking and sales reporting.' },
  { title: 'Business Management Dashboard', img: '/businessmgt.svg', desc: 'Internal dashboard for managing staff, tasks, and operations for a logistics company.' },
  { title: 'E-Commerce Web App', img: '/ecommerce.svg', desc: 'Custom online store with product management, cart, and M-Pesa payment integration.' },
]

const Projects = () => (
  <section id="projects" className="py-20 px-6 bg-white">
    <div className="max-w-[1140px] mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-black text-center mb-12">Our Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((p) => (
          <div key={p.title} className="rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
            <div className="bg-gray-100 h-48 flex items-center justify-center overflow-hidden">
              <img src={p.img} alt={p.title} className="h-full w-full object-cover" />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold text-black mb-2">{p.title}</h3>
              <p className="text-[#4c4c4c] text-sm leading-relaxed">{p.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default Projects
