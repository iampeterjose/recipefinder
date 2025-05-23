function Contact () {
    return (
        <section id="contact" className="relative bg-gradient-to-br from-indigo-50 via-white to-indigo-100 py-24 overflow-hidden">
            <div className="max-w-2xl mx-auto px-4 bg-white/90 rounded-3xl shadow-2xl border border-indigo-100 p-10 relative z-10">
                <h2 className="text-4xl font-extrabold text-indigo-800 mb-4 text-center tracking-tight">Contact Us</h2>
                <p className="text-lg text-indigo-700 mb-8 text-center">
                    Have a question, suggestion, or just want to say hello? Fill out the form below and we'll get back to you soon!
                </p>
                <form className="flex flex-col gap-6">
                    <div>
                        <label className="block text-indigo-700 font-semibold mb-1" htmlFor="name">Name</label>
                        <input
                            id="name"
                            type="text"
                            className="w-full px-4 py-2 rounded-lg border border-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-400 bg-white shadow"
                            placeholder="Your Name"
                        />
                    </div>
                    <div>
                        <label className="block text-indigo-700 font-semibold mb-1" htmlFor="email">Email</label>
                        <input
                            id="email"
                            type="email"
                            className="w-full px-4 py-2 rounded-lg border border-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-400 bg-white shadow"
                            placeholder="you@email.com"
                        />
                    </div>
                    <div>
                        <label className="block text-indigo-700 font-semibold mb-1" htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            rows={5}
                            className="w-full px-4 py-2 rounded-lg border border-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-400 bg-white shadow resize-none"
                            placeholder="How can we help you?"
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-gradient-to-r from-indigo-500 to-indigo-700 hover:from-indigo-600 hover:to-indigo-800 text-white px-8 py-3 rounded-full font-semibold shadow transition"
                    >
                        Send Message
                    </button>
                </form>
            </div>
            {/* Decorative SVGs */}
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-indigo-100 rounded-full opacity-30 blur-2xl z-0"></div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-indigo-200 rounded-full opacity-20 blur-2xl z-0"></div>
        </section>
    )
}

export default Contact;