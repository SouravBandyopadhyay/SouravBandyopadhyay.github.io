'use client'

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import Toast from "@/components/ui/toast"; // Adjust the path based on your project structure

function ContactSection() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [toast, setToast] = useState<{ message: string; type: "success" | "danger" } | null>(null);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setToast({ message: 'Email sent successfully!', type: 'success' });
        // Clear form fields if needed
        setName('');
        setEmail('');
        setMessage('');
      } else {
        setToast({ message: `Error sending email: ${result.error}`, type: 'danger' });
      }
    } catch (error) {
      setToast({ message: 'Unexpected error occurred.', type: 'danger' });
    }
  };

  return (
    <section
      id="contact"
      className="w-full py-12 md:py-24 lg:py-32"
      aria-labelledby="contact-heading"
    >
      <div className="container px-4 md:px-6">
        <div className="mx-auto flex max-w-5xl flex-col gap-8 overflow-hidden rounded-[2rem] border border-black/10 bg-[#f7f7f5] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.04)] sm:p-8 lg:flex-row lg:items-start lg:justify-between lg:p-10">
          <div className="max-w-xl space-y-4">
            <p className="eyebrow">Contact</p>
            <h2 id="contact-heading" className="text-3xl font-semibold tracking-[-0.03em] text-black sm:text-4xl">
              Let’s build something thoughtful together.
            </h2>
            <p className="text-lg leading-relaxed text-black/70">
              If you’re looking for a developer who values clarity, product sense, and careful execution, I’d love to hear about your idea.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="w-full max-w-xl space-y-4">
            <Input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-black/10 bg-white px-4 py-2.5 text-sm text-black shadow-sm placeholder:text-black/45 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-black/20"
            />
            <Input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-black/10 bg-white px-4 py-2.5 text-sm text-black shadow-sm placeholder:text-black/45 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-black/20"
            />
            <Textarea
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full border border-black/10 bg-white px-4 py-2.5 text-sm text-black shadow-sm placeholder:text-black/45 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-black/20"
              rows={5}
            />
            <Button type="submit" className="w-full rounded-full bg-black px-5 py-2.5 text-sm font-medium text-white hover:bg-black/90">
              Send Message
            </Button>
          </form>
        </div>

        {toast && (
          <Toast
            message={toast.message}
            type={toast.type}
            onClose={() => setToast(null)}
          />
        )}
      </div>
    </section>
  );
}

export default ContactSection;
