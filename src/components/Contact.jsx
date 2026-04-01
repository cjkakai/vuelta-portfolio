const Contact = () => (
  <section id="contact" className="py-20 px-6 bg-white flex justify-center">

    {/* SVG container – 75% width, centered, rounded, no footer touch */}
    <div
      className="relative w-full max-w-[75%] min-h-[600px] rounded-3xl overflow-hidden flex items-center "
      style={{
        backgroundImage: "url('/contact.svg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Form sits on the left white space of the SVG */}
      <div className="w-1/2 h-full flex flex-col justify-center px-10 py-12 border-l border-gray-300">
        <h2 className="text-2xl font-bold text-black mb-6">Contact Us</h2>

        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="border border-gray-300 rounded-xl px-4 py-3 text-sm text-black placeholder-gray-400 outline-none focus:border-black transition-colors bg-transparent"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="border border-gray-300 rounded-xl px-4 py-3 text-sm text-black placeholder-gray-400 outline-none focus:border-black transition-colors bg-transparent"
          />
          <input
            type="text"
            placeholder="Subject"
            className="border border-gray-300 rounded-xl px-4 py-3 text-sm text-black placeholder-gray-400 outline-none focus:border-black transition-colors bg-transparent"
          />
          <textarea
            rows={5}
            placeholder="Your Message"
            className="border border-gray-300 rounded-xl px-4 py-3 text-sm text-black placeholder-gray-400 outline-none focus:border-black transition-colors resize-none bg-transparent"
          />
          <button
            type="submit"
            className="bg-black text-white py-3 rounded-full font-semibold text-[16px] hover:bg-gray-800 transition-colors mt-1"
          >
            Send Message
          </button>
        </form>
      </div>

    </div>

  </section>
)

export default Contact
