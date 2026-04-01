import { useEffect, useState } from 'react'

const cards = ['/service1.svg', '/service2.svg', '/service3.svg', '/service4.svg']

const Services = () => {
  const [current, setCurrent] = useState(0)
  const [stage, setStage] = useState('visible') // 'visible' | 'exit' | 'enter'

  useEffect(() => {
    const interval = setInterval(() => {
      // slide current card out to the right
      setStage('exit')
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % cards.length)
        // position next card off-screen left, then slide in
        setStage('enter')
        setTimeout(() => setStage('visible'), 50)
      }, 500)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const getTransform = () => {
    if (stage === 'exit') return 'translateX(110%)'
    if (stage === 'enter') return 'translateX(-110%)'
    return 'translateX(0)'
  }

  const getTransition = () =>
    stage === 'enter' ? 'none' : 'transform 2s cubic-bezier(0.4,0,0.2,1), opacity 0.55s ease'

  return (
    <section id="services" className="bg-[#0C0A25] h-screen w-full flex items-center overflow-hidden">
      <div className="w-full max-w-[1140px] mx-auto px-6 flex flex-col md:flex-row items-center gap-10 h-full py-16">

        {/* Left – Text */}
        <div className="w-full md:w-1/2 flex flex-col justify-center gap-6">
          <p className="text-[#41FF9E] text-sm font-semibold uppercase tracking-widest">What We Do</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">Our Services</h2>
          <p className="text-gray-400 text-[15px] leading-relaxed max-w-md">
            VUELTA TECH delivers custom digital solutions — from responsive websites and web applications to POS systems, inventory tools, and internal business platforms. We help you build, automate, and scale.
          </p>
          <ul className="flex flex-col gap-2 text-sm text-gray-300">
            {['Website Development', 'Web Applications', 'POS & Inventory Systems', 'Internal Business Systems'].map((s) => (
              <li key={s} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#41FF9E] inline-block" />
                {s}
              </li>
            ))}
          </ul>
          <a href="#contact">
            <button className="mt-2 border border-[#41FF9E] text-[#41FF9E] px-6 py-3 rounded-full text-sm font-semibold hover:bg-[#41FF9E] hover:text-black transition-all duration-300">
              Learn More
            </button>
          </a>
        </div>

        {/* Right – Sliding card */}
        <div className="w-full md:w-1/2 flex items-center justify-center overflow-hidden" style={{ height: '90%' }}>
          <div
            className="w-full h-full rounded-2xl overflow-hidden"
            style={{
              transform: getTransform(),
              opacity: stage === 'exit' ? 0 : 1,
              transition: getTransition(),
            }}
          >
            <img src={cards[current]} alt="Service" className="w-full h-full object-contain" />
          </div>
        </div>

      </div>
    </section>
  )
}

export default Services
