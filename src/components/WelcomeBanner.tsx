import { FaFacebook, FaLinkedin, FaInstagram, FaArrowUp } from "react-icons/fa";
import profilePhoto from "../assets/images/photo.png";
import { PERSONAL_INFO, SOCIAL_LINKS } from "../data/constants";

interface WelcomeBannerProps {
  name?: string;
  role?: string;
  experience?: string;
  profilePhotoSrc?: string;
  socialLinks?: typeof SOCIAL_LINKS;
}

export default function WelcomeBanner({
  name = PERSONAL_INFO.name,
  role = PERSONAL_INFO.role,
  experience = PERSONAL_INFO.experience,
  profilePhotoSrc = profilePhoto,
  socialLinks = SOCIAL_LINKS,
}: WelcomeBannerProps) {
  const socialIcons = [
    {
      Icon: FaFacebook,
      href: socialLinks.facebook,
      shape: "rounded",
      platform: "facebook",
    },
    {
      Icon: FaInstagram,
      href: socialLinks.instagram,
      shape: "rounded-full",
      platform: "instagram",
    },
    {
      Icon: FaLinkedin,
      href: socialLinks.linkedin,
      shape: "rounded",
      platform: "linkedin",
    },
  ];

  return (
    <section id="about" className="bg-white py-20 relative">
      {/* Decorative dots - scattered multi-colored */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-red-500 rounded-full opacity-70"></div>
      <div className="absolute top-40 left-32 w-2 h-2 bg-yellow-500 rounded-full opacity-70"></div>
      <div className="absolute top-60 left-20 w-2 h-2 bg-blue-500 rounded-full opacity-70"></div>
      <div className="absolute top-80 left-40 w-2 h-2 bg-green-500 rounded-full opacity-70"></div>
      <div className="absolute bottom-40 left-24 w-2 h-2 bg-red-500 rounded-full opacity-70"></div>
      <div className="absolute bottom-20 left-36 w-2 h-2 bg-yellow-500 rounded-full opacity-70"></div>
      <div className="absolute top-16 right-16 w-2 h-2 bg-green-500 rounded-full opacity-70"></div>
      <div className="absolute top-32 right-24 w-2 h-2 bg-red-500 rounded-full opacity-70"></div>
      <div className="absolute top-48 right-12 w-2 h-2 bg-blue-500 rounded-full opacity-70"></div>
      <div className="absolute top-64 right-20 w-2 h-2 bg-yellow-500 rounded-full opacity-70"></div>

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative z-10">
            <div className="egg-shape inline-block border border-primary text-primary font-medium text-sm mb-6 py-2 px-6">
              Welcome
            </div>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight tracking-tight text-neutral">
              I have <span className="text-primary">Full Stack</span>
              <br />
              <span className="text-primary">Development</span> Experience
            </h1>
            <p className="mt-6 text-base lg:text-lg text-neutral/70 max-w-xl leading-relaxed">
              I'm {name}, a {role}. I've been helping businesses to solve their
              problems with my development skills for {experience} years.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="btn btn-primary rounded-md px-6 py-3 text-base font-medium"
              >
                Contact Me
              </a>
              <a
                href="#portfolio"
                className="inline-flex items-center gap-2 text-base text-neutral/70 hover:text-primary transition-colors font-medium"
              >
                View Portfolio{" "}
                <FaArrowUp className="w-4 h-4 text-primary rotate-45" />
              </a>
            </div>
          </div>
          <div className="relative">
            {/* green block behind */}
            <div className="absolute -top-6 left-20 h-64 w-60 lg:h-96 lg:w-80 bg-primary/80 z-0"></div>
            {/* black outline square overlay - above green */}
            <div className="absolute top-6 left-10 h-64 w-60 lg:h-96 lg:w-80 border-4 border-neutral rounded-md z-10"></div>

            {/* portrait - positioned inside the border */}
            <div className="relative top-8 left-14 rounded-2xl p-2 w-64 h-64 lg:w-80 lg:h-80 flex items-center justify-center z-20">
              <div className="avatar">
                <div className="w-40 lg:w-56 rounded-xl ring-2 ring-primary/40 ring-offset-2 ring-offset-base-100">
                  <img
                    src={profilePhotoSrc}
                    alt={`${name} - ${role} profile photo`}
                    className="object-cover"
                    loading="eager"
                  />
                </div>
              </div>
            </div>

            {/* Follow me on section */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col items-center gap-4">
              <p
                className="text-primary font-medium text-sm"
                style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
              >
                Follow me on:
              </p>
              <div className="w-px h-12 bg-primary/40"></div>
              <div className="flex flex-col gap-3">
                {socialIcons.map(({ Icon, href, shape, platform }) => (
                  <a
                    key={platform}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className={`w-10 h-10 ${shape} bg-primary text-primary-content flex items-center justify-center hover:bg-primary/90 transition`}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
