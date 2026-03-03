export default function Contact() {
    return (
        <section id="contact" className="py-24 bg-white px-6">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-blue-900 mb-6">
                    Let’s Build Something Meaningful Together
                </h2>

                <p className="text-gray-600 mb-12">
                    I’m open to collaboration, freelance projects, and exciting
                    opportunities in web development.
                </p>

                <form className="grid gap-6">
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-900"
                    />

                    <input
                        type="email"
                        placeholder="Your Email"
                        className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-900"
                    />

                    <textarea
                        rows={5}
                        placeholder="Your Message"
                        className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-900"
                    ></textarea>

                    <button
                        type="submit"
                        className="bg-blue-900 text-white py-3 rounded-xl hover:bg-blue-800 transition"
                    >
                        Send Message
                    </button>
                </form>

                <div className="mt-12 flex justify-center gap-8 text-gray-600">
                    <a href="#" className="hover:text-blue-900 transition">
                        GitHub
                    </a>
                    <a href="#" className="hover:text-blue-900 transition">
                        LinkedIn
                    </a>
                    <a href="mailto:your@email.com" className="hover:text-blue-900 transition">
                        Email
                    </a>
                </div>
            </div>
        </section>
    );
}