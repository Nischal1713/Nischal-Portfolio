import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from 'emailjs-com'
import { useState } from "react";

export const Contact = () => {
    const [formData, setformData] = useState({
        name: "",
        email: "",
        message: "",
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        emailjs.sendForm(import.meta.env.VITE_SERVICE_ID,import.meta.env.VITE_TEMPLATE_ID, e.target,import.meta.env.VITE_PUBLIC_KEY).then((result) => {
            alert("Message sent");
            setformData({ name: "", email: "", message: "" })
        }).catch(() => alert("oops! something went wrong"))
    };
    return (
        <section id="contact" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
                <div className="px-4 w-150">
                    <h2 className="text-5xl text-center md:text-7xl font-bold mb-6 bg-linear-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent leading-right">Get In Touch</h2>
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div className="flex flex-col md:flex-row gap-6">
                            <input type="text" id="name" name="name" value={formData.name} onChange={(e) => setformData({ ...formData, name: e.target.value })} placeholder="Name" className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 transition " required />
                            <input type="email" id="email" name="email" value={formData.email} onChange={(e) => setformData({ ...formData, email: e.target.value })} placeholder="Email" className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 transition" required />
                        </div>
                        <textarea id="message" value={formData.message} onChange={(e) => setformData({ ...formData, message: e.target.value })} name="message" rows={5} placeholder="Message" className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 transition " required></textarea>
                        <button type="submit" className="w-full bg-blue-500 text-white py-3 px-6 rounded font-medium overflow-hidden hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] transition">Send</button>
                    </form>
                </div>
            </RevealOnScroll>
        </section>
    )
}