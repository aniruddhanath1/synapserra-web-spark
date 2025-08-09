import { useState } from "react";

const Contact = () => (
  <>
    <div className="w-full min-h-screen flex flex-col items-center justify-center py-12 bg-white">
  <h1 className="text-5xl md:text-6xl font-extrabold mb-16 bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent text-center">Contact Us</h1>
      <GlobalPresence />
      <form className="w-full max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8 space-y-6 flex flex-col items-center">
        <input type="text" placeholder="Name" className="w-full border p-3 rounded text-lg" required />
        <input type="email" placeholder="Email" className="w-full border p-3 rounded text-lg" required />
        <textarea placeholder="Message" className="w-full border p-3 rounded text-lg" rows={6} required />
        <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded text-lg font-semibold">Send Message</button>
      </form>
      <div className="mt-8 text-center w-full">
        <p>Email: info@yourdomain.com</p>
        <p>Phone: +91 XXXXX XXXXX</p>
      </div>
    </div>
  </>
);

const locations = [
  {
    name: "Bangalore, India",
    address: "Prestige Tech Park, Outer Ring Road, Bangalore, Karnataka 560103",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.993073857956!2d77.6974200750737!3d12.93523898737259!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae13e7e2e2e2e3%3A0x2e2e2e2e2e2e2e2e!2sPrestige%20Tech%20Park!5e0!3m2!1sen!2sin!4v1691580000000!5m2!1sen!2sin",
    pinStyle: {
      left: "68.5%",
      top: "46%",
    },
  },
  {
    name: "San Francisco, USA",
    address: "600 California St, San Francisco, CA 94108",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019019145409!2d-122.4064176846817!3d37.79287297975659!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064d1e2e2e2%3A0x2e2e2e2e2e2e2e2e!2s600%20California%20St%2C%20San%20Francisco%2C%20CA%2094108%2C%20USA!5e0!3m2!1sen!2sus!4v1691580000000!5m2!1sen!2sus",
    pinStyle: {
      left: "18%",
      top: "35%",
    },
  },
];

const GlobalPresence = () => {
  const [selected, setSelected] = useState(0);
  return (
    <section className="w-full h-full min-h-screen flex flex-col items-center justify-center bg-white mb-12 px-0 shadow-2xl" style={{height: '100vh'}}>
      <h2 className="text-3xl font-bold text-center mb-12">Global Presence</h2>
      <div className="w-full h-full min-h-screen flex flex-col md:flex-row items-stretch justify-center gap-0 md:gap-0 bg-white rounded-none md:rounded-xl shadow-lg overflow-x-auto">
        {/* Left: World map with interactive pins */}
        <div className="relative flex-1 min-w-[300px] max-w-full flex items-center justify-center bg-gray-50 h-[300px] md:h-full">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/World_map_-_low_resolution.svg/1200px-World_map_-_low_resolution.svg.png"
            alt="World Map"
            className="w-full h-full object-contain opacity-80"
            style={{ maxWidth: "100%", maxHeight: "100%" }}
          />
          {locations.map((loc, idx) => (
            <button
              key={loc.name}
              className={`absolute w-8 h-8 flex items-center justify-center rounded-full border-2 border-white z-20 transition-transform duration-200 ${selected === idx ? "scale-125 bg-primary" : "bg-blue-400"}`}
              style={{ left: loc.pinStyle.left, top: loc.pinStyle.top, transform: "translate(-50%, -50%)" }}
              onClick={() => setSelected(idx)}
              aria-label={`Show ${loc.name}`}
            >
              {/* Pin icon (Lucide or SVG) */}
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin">
                <path d="M21 10c0 6-9 13-9 13S3 16 3 10a9 9 0 1 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </button>
          ))}
        </div>
        {/* Right: Google Maps embed for selected location */}
        <div className="flex-1 min-w-[300px] max-w-full flex flex-col items-center justify-center bg-white p-4 md:p-8 h-[350px] md:h-full">
          <span className="inline-block bg-primary text-white px-3 py-1 rounded-full font-semibold mb-2">
            {locations[selected].name}
          </span>
          <div className="text-center text-muted-foreground mb-4">
            {locations[selected].address}
          </div>
          <iframe
            src={locations[selected].mapSrc}
            width="100%"
            height="100%"
            style={{ border: 0, borderRadius: "12px", minHeight: "250px", maxHeight: "100%" }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={locations[selected].name + " Location"}
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
