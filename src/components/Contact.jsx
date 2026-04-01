const Contact = () => (
  <section id="contact" className="py-20 px-6 bg-white">
    <div className="max-w-[680px] mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Contact Us</h2>
      <p className="text-[#4c4c4c] mb-2 text-sm">📞 +254 704 919 850</p>
      <p className="text-[#4c4c4c] mb-10 text-sm">✉️ cjkakai5@gmail.com</p>

      <form className="flex flex-col gap-4 text-left">
        <input
          type="text"
          placeholder="Your Name"
          className="border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-black transition-colors"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-black transition-colors"
        />
        <textarea
          rows={5}
          placeholder="Your Message"
          className="border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-black transition-colors resize-none"
        />
        <button
          type="submit"
          className="bg-black text-white py-3 rounded-full font-medium text-[16px] hover:bg-gray-800 transition-colors"
        >
          Send Message
        </button>
      </form>
    </div>
  </section>
)

export default Contact
