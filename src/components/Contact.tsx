import ContactForm from "./ContactForm";
import ContactInfo from "./CoontactInfo";
import { PERSONAL_INFO } from "../data/constants";

interface ContactProps {
  phone?: string;
  email?: string;
  address?: string;
}

export default function Contact({
  phone = PERSONAL_INFO.phone,
  email = PERSONAL_INFO.email,
  address = PERSONAL_INFO.address,
}: ContactProps) {
  return (
    <section
      id="contact"
      className="bg-white relative container mx-auto px-6 py-20"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="egg-shape inline-block border border-primary text-primary font-medium text-sm px-6 py-2 mb-6">
            Contact
          </div>
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight mb-4 text-neutral">
            Let's Discuss Your <span className="text-primary">Project</span>
          </h2>
          <p className="text-base lg:text-lg text-neutral/70 max-w-2xl mx-auto leading-relaxed">
            Let's make something new, different and more meaningful or make
            thing more visual or conceptual
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 ">
          <ContactInfo phone={phone} email={email} address={address} />
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
