
import { Users, Award, Lightbulb, HeartHandshake, Rocket } from "lucide-react";

const team = [
  {
    name: "Priya Verma",
    role: "CEO & Founder",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "James Müller",
    role: "CTO",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Sofia Rossi",
    role: "Lead Designer",
    img: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "Lucas Dubois",
    role: "Head of Development",
    img: "https://randomuser.me/api/portraits/men/76.jpg",
  },
];

const About = () => (
  <div className="relative min-h-screen bg-gradient-to-br from-background to-secondary/30">
    {/* Hero Section */}
    <section className="max-w-5xl mx-auto px-6 py-16 text-center">
      <h1 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">About Us</h1>
      <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
        We are a passionate team of creators, strategists, and technologists dedicated to building digital experiences that drive innovation and growth. Our mission is to empower businesses with modern solutions and creative excellence.
      </p>
      <div className="flex flex-wrap justify-center gap-6 mb-12">
        <div className="flex flex-col items-center p-6 bg-white/80 rounded-xl shadow border border-border w-56">
          <Lightbulb className="w-8 h-8 text-primary mb-2" />
          <span className="font-semibold text-lg mb-1">Innovation</span>
          <span className="text-sm text-muted-foreground">We bring fresh ideas and creative solutions to every project.</span>
        </div>
        <div className="flex flex-col items-center p-6 bg-white/80 rounded-xl shadow border border-border w-56">
          <HeartHandshake className="w-8 h-8 text-primary mb-2" />
          <span className="font-semibold text-lg mb-1">Integrity</span>
          <span className="text-sm text-muted-foreground">Honesty and transparency are at the core of our values.</span>
        </div>
        <div className="flex flex-col items-center p-6 bg-white/80 rounded-xl shadow border border-border w-56">
          <Award className="w-8 h-8 text-primary mb-2" />
          <span className="font-semibold text-lg mb-1">Excellence</span>
          <span className="text-sm text-muted-foreground">We strive for the highest standards in everything we do.</span>
        </div>
        <div className="flex flex-col items-center p-6 bg-white/80 rounded-xl shadow border border-border w-56">
          <Users className="w-8 h-8 text-primary mb-2" />
          <span className="font-semibold text-lg mb-1">Collaboration</span>
          <span className="text-sm text-muted-foreground">We work closely with our clients to achieve shared success.</span>
        </div>
        <div className="flex flex-col items-center p-6 bg-white/80 rounded-xl shadow border border-border w-56">
          <Rocket className="w-8 h-8 text-primary mb-2" />
          <span className="font-semibold text-lg mb-1">Growth</span>
          <span className="text-sm text-muted-foreground">Empowering businesses to reach new heights.</span>
        </div>
      </div>
    </section>

    {/* Team Section */}
    <section className="max-w-5xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold text-center mb-10">Meet Our Team</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 justify-items-center">
        {team.map((member, idx) => (
          <div key={idx} className="flex flex-col items-center bg-white/90 rounded-xl shadow-lg p-6 border border-border hover:shadow-xl transition-all duration-300">
            <img src={member.img} alt={member.name} className="w-24 h-24 rounded-full mb-4 object-cover border-4 border-primary" />
            <div className="font-semibold text-lg mb-1 text-foreground">{member.name}</div>
            <div className="text-sm text-muted-foreground mb-2">{member.role}</div>
          </div>
        ))}
      </div>
    </section>

    {/* Mission & Values Section */}
    <section className="max-w-5xl mx-auto px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl p-8 shadow flex flex-col items-center">
          <h2 className="text-2xl font-bold mb-4 text-center">Our Mission</h2>
          <p className="text-center text-lg text-muted-foreground">
            To shape the future of digital interactions through excellence, creativity, and user-centric design.
          </p>
        </div>
        <div className="bg-gradient-to-br from-secondary/10 to-primary/10 rounded-xl p-8 shadow flex flex-col items-center">
          <h2 className="text-2xl font-bold mb-4 text-center">Our Values</h2>
          <ul className="list-disc pl-5 text-lg text-center">
            <li>Innovation</li>
            <li>Integrity</li>
            <li>Collaboration</li>
            <li>Excellence</li>
            <li>Growth</li>
          </ul>
        </div>
      </div>
    </section>
  </div>
);

export default About;
