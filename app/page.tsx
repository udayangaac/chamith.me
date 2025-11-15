import { FaGithub, FaLinkedinIn, FaStackOverflow } from "react-icons/fa";

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/udayangaac",
    icon: FaGithub,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/udayangaac",
    icon: FaLinkedinIn,
  },
  {
    label: "Stack Overflow",
    href: "https://stackoverflow.com/users/5626522/chamith-udayanga",
    icon: FaStackOverflow,
  },
];

export default function Home() {
  return (
    <main>
      <section className="about" aria-labelledby="about-title">
        <p className="eyebrow">Hello, I’m</p>
        <h1 id="about-title">Chamith Udayanga.</h1>
        <p className="bio">
          I’m a software engineer and technical lead from Sri Lanka with more than seven
          years of experience building reliable digital products. I enjoy turning complex
          problems into simple, scalable systems, with a particular interest in backend
          engineering, microservices, cloud platforms, and distributed architecture.
        </p>
        <nav className="social-links" aria-label="Social links">
          {socialLinks.map(({ label, href, icon: Icon }) => (
            <a key={label} href={href} target="_blank" rel="noreferrer">
              <Icon aria-hidden="true" />
              <span>{label}</span>
            </a>
          ))}
        </nav>
      </section>
    </main>
  );
}
