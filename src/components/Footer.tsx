import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import { SOCIAL_LINKS, PERSONAL_INFO } from "../data/constants";

interface FooterProps {
  designerName?: string;
  socialLinks?: typeof SOCIAL_LINKS;
}

export default function Footer({
  designerName = PERSONAL_INFO.name,
  socialLinks = SOCIAL_LINKS,
}: FooterProps) {
  const currentYear = new Date().getFullYear();
  const socialIcons = [
    { Icon: FaFacebook, href: socialLinks.facebook, platform: "facebook" },
    { Icon: FaTwitter, href: socialLinks.twitter, platform: "twitter" },
    { Icon: FaLinkedin, href: socialLinks.linkedin, platform: "linkedin" },
    { Icon: FaInstagram, href: socialLinks.instagram, platform: "instagram" },
  ];

  return (
    <footer className="bg-white border-t border-gray-200 py-8 relative">
      {/* Dense dot blocks - bottom corners */}
      <div className="absolute bottom-0 left-0 w-16 h-32 hidden lg:block pointer-events-none opacity-40">
        {Array.from({ length: 48 }, (_, i) => {
          const row = Math.floor(i / 6);
          const col = i % 6;
          return (
            <div
              key={i}
              className="absolute w-1 h-1 bg-primary rounded-full"
              style={{
                left: `${col * 16}%`,
                top: `${row * 12}%`,
              }}
            />
          );
        })}
      </div>
      <div className="absolute bottom-0 right-0 w-16 h-32 hidden lg:block pointer-events-none opacity-40">
        {Array.from({ length: 48 }, (_, i) => {
          const row = Math.floor(i / 6);
          const col = i % 6;
          return (
            <div
              key={i}
              className="absolute w-1 h-1 bg-primary rounded-full"
              style={{
                right: `${col * 16}%`,
                top: `${row * 12}%`,
              }}
            />
          );
        })}
      </div>

      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <p className="text-neutral/60 text-sm whitespace-nowrap">
            © {currentYear}. All Rights Reserved
          </p>
          <p className="text-neutral/60 text-sm whitespace-nowrap">
            Designed by {designerName}
          </p>
          <div className="flex gap-3">
            {socialIcons.map(({ Icon, href, platform }) => (
              <a
                key={platform}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={
                  href.startsWith("http") ? "noopener noreferrer" : undefined
                }
                className="w-8 h-8 rounded-full bg-primary text-primary-content flex items-center justify-center hover:bg-primary/90 transition"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
