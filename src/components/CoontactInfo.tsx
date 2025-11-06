import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

interface ContactInfoProps {
  phone: string;
  email: string;
  address: string;
}

export default function ContactInfo({
  phone,
  email,
  address,
}: ContactInfoProps) {
  const contactItems = [
    {
      icon: FaPhone,
      label: "Call me",
      value: phone,
    },
    {
      icon: FaEnvelope,
      label: "Email me",
      value: email,
    },
    {
      icon: FaMapMarkerAlt,
      label: "Address",
      value: address,
    },
  ];

  return (
    <div className="space-y-4">
      {contactItems.map((item) => {
        const IconComponent = item.icon;
        return (
          <div key={item.label} className="flex items-center gap-4">
            <div
              className="w-12 h-12 rounded-lg bg-primary text-primary-content flex items-center justify-center shrink-0"
              aria-hidden="true"
            >
              <IconComponent className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground text-gray-400">
                {item.label}
              </p>
              {item.label === "Email me" ? (
                <a
                  href={`mailto:${item.value}`}
                  className="font-bold hover:text-primary transition"
                >
                  {item.value}
                </a>
              ) : item.label === "Call me" ? (
                <a
                  href={`tel:${item.value.replace(/\s/g, "")}`}
                  className="font-bold hover:text-primary transition"
                >
                  {item.value}
                </a>
              ) : (
                <p className="font-bold">{item.value}</p>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
