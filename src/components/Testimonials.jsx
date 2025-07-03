import Section from "./Section";

const testimonials = [
  {
    name: "Ishika Srivas",
    role: "Product Designer",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "RealTimeCollab has completely transformed how our team works together. Instant feedback and live editing make every project smoother!",
  },
  {
    name: "Raj kumar",
    role: "Software Engineer",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "I love how easy it is to brainstorm and iterate with my colleagues. The real-time features are a game changer for remote teams.",
  },
  {
    name: "Kartik srivas",
    role: "Marketing Lead",
    avatar: "https://randomuser.me/api/portraits/men/65.jpg",
    text: "Our creative process is faster and more fun. RealTimeCollab helps us turn ideas into reality without the usual back-and-forth.",
  },
];

const Testimonials = () => (
  <Section id="testimonials" className="py-20 bg-n-1">
    <div className="container text-center">
      <h2 className="h2 mb-8 text-color-1">What Our Users Say</h2>
      <div className="grid gap-8 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center"
          >
            <img
              src={t.avatar}
              alt={t.name}
              className="w-16 h-16 rounded-full mb-4 border-4 border-color-2"
            />
            <p className="body-1 text-n-7 mb-4">“{t.text}”</p>
            <div className="font-heading font-bold text-color-4">{t.name}</div>
            <div className="text-sm text-n-4">{t.role}</div>
          </div>
        ))}
      </div>
    </div>
  </Section>
);

export default Testimonials; 