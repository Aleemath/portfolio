import { useState } from "react";
import { openWhatsApp, WHATSAPP_MESSAGES } from "../data/constants";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    budget: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Format WhatsApp message using the template
    const whatsappMessage = WHATSAPP_MESSAGES.contactForm(formData);

    // Open WhatsApp
    openWhatsApp(whatsappMessage);

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      budget: "",
      message: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="sr-only">
            Full name
          </label>
          <input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Full name"
            className="bg-muted border border-gray-300 p-3 rounded w-full"
            required
            aria-label="Full name"
          />
        </div>
        <div>
          <label htmlFor="email" className="sr-only">
            Your email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your email"
            className="bg-muted border border-gray-300 p-3 rounded w-full"
            required
            aria-label="Your email"
          />
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="phone" className="sr-only">
            Phone number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone number"
            className="bg-muted border border-gray-300 p-3 rounded w-full"
            required
            aria-label="Phone number"
          />
        </div>
        <div>
          <label htmlFor="budget" className="sr-only">
            Budget
          </label>
          <input
            id="budget"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            placeholder="Budget"
            className="bg-muted border border-gray-300 p-3 rounded w-full"
            aria-label="Budget (optional)"
          />
        </div>
      </div>
      <div>
        <label htmlFor="message" className="sr-only">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Message"
          className="bg-muted border border-gray-300 min-h-32 w-full p-3 rounded"
          required
          aria-label="Message"
        />
      </div>
      <div className="flex justify-end">
        <button type="submit" className="btn btn-primary w-max p-2 rounded-md">
          Submit Message
        </button>
      </div>
    </form>
  );
}
