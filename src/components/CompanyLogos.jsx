import { slack, notion, figma, framer, photoshop } from "../assets";

const logos = [
  { src: slack, alt: "Slack" },
  { src: notion, alt: "Notion" },
  { src: figma, alt: "Figma" },
  { src: framer, alt: "Framer" },
  { src: photoshop, alt: "Photoshop" },
];

const CompanyLogos = () => (
  <div className="flex justify-center gap-8 py-8">
    {logos.map((logo, i) => (
      <img
        key={i}
        src={logo.src}
        alt={logo.alt}
        className="h-10 w-auto grayscale hover:grayscale-0 transition"
      />
    ))}
  </div>
);

export default CompanyLogos;
