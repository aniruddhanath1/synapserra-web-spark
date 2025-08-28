// import { useState } from "react";

// const Contact = () => (
//   <>
//     <div className="w-full min-h-screen flex flex-col items-center justify-center py-12 bg-white">
//       <h1 className="text-5xl md:text-6xl font-extrabold mb-16 bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent text-center">
//         Contact Us
//       </h1>
//       <GlobalPresence />
//       <form className="w-full max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8 space-y-6 flex flex-col items-center">
//         <input
//           type="text"
//           placeholder="Name"
//           className="w-full border p-3 rounded text-lg"
//           required
//         />
//         <input
//           type="email"
//           placeholder="Email"
//           className="w-full border p-3 rounded text-lg"
//           required
//         />
//         <textarea
//           placeholder="Message"
//           className="w-full border p-3 rounded text-lg"
//           rows={6}
//           required
//         />
//         <button
//           type="submit"
//           className="bg-blue-600 text-white px-6 py-3 rounded text-lg font-semibold"
//         >
//           Send Message
//         </button>
//       </form>
//       <div className="mt-8 text-center w-full">
//         <p>Email: info@yourdomain.com</p>
//         <p>Phone: +91 XXXXX XXXXX</p>
//       </div>
//     </div>
//   </>
// );

// const locations = [
//   {
//     name: "Bangalore, India",
//     address: "Prestige Tech Park, Outer Ring Road, Bangalore, Karnataka 560103",
//     mapSrc:
//       "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.993073857956!2d77.6974200750737!3d12.93523898737259!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae13e7e2e2e2e3%3A0x2e2e2e2e2e2e2e2e!2sPrestige%20Tech%20Park!5e0!3m2!1sen!2sin!4v1691580000000!5m2!1sen!2sin",
//     pinStyle: {
//       left: "68.5%",
//       top: "46%",
//     },
//   },
//   {
//     name: "San Francisco, USA",
//     address: "600 California St, San Francisco, CA 94108",
//     mapSrc:
//       "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019019145409!2d-122.4064176846817!3d37.79287297975659!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064d1e2e2e2%3A0x2e2e2e2e2e2e2e2e!2s600%20California%20St%2C%20San%20Francisco%2C%20CA%2094108%2C%20USA!5e0!3m2!1sen!2sus!4v1691580000000!5m2!1sen!2sus",
//     pinStyle: {
//       left: "18%",
//       top: "35%",
//     },
//   },
// ];

// const GlobalPresence = () => {
//   const [selected, setSelected] = useState(0);
//   return (
//     <section
//       className="w-full h-full min-h-screen flex flex-col items-center justify-center bg-white mb-12 px-0 shadow-2xl"
//       style={{ height: "100vh" }}
//     >
//       <h2 className="text-3xl font-bold text-center mb-12">Global Presence</h2>
//       <div className="w-full h-full min-h-screen flex flex-col md:flex-row items-stretch justify-center gap-0 md:gap-0 bg-white rounded-none md:rounded-xl shadow-lg overflow-x-auto">
//         {/* Left: World map with interactive pins */}
//         <div className="relative flex-1 min-w-[300px] max-w-full flex items-center justify-center bg-gray-50 h-[300px] md:h-full">
//           <img
//             src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/World_map_-_low_resolution.svg/1200px-World_map_-_low_resolution.svg.png"
//             alt="World Map"
//             className="w-full h-full object-contain opacity-80"
//             style={{ maxWidth: "100%", maxHeight: "100%" }}
//           />
//           {locations.map((loc, idx) => (
//             <button
//               key={loc.name}
//               className={`absolute w-8 h-8 flex items-center justify-center rounded-full border-2 border-white z-20 transition-transform duration-200 ${
//                 selected === idx ? "scale-125 bg-primary" : "bg-blue-400"
//               }`}
//               style={{
//                 left: loc.pinStyle.left,
//                 top: loc.pinStyle.top,
//                 transform: "translate(-50%, -50%)",
//               }}
//               onClick={() => setSelected(idx)}
//               aria-label={`Show ${loc.name}`}
//             >
//               {/* Pin icon (Lucide or SVG) */}
//               <svg
//                 width="20"
//                 height="20"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="white"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 className="lucide lucide-map-pin"
//               >
//                 <path d="M21 10c0 6-9 13-9 13S3 16 3 10a9 9 0 1 1 18 0z" />
//                 <circle cx="12" cy="10" r="3" />
//               </svg>
//             </button>
//           ))}
//         </div>
//         {/* Right: Google Maps embed for selected location */}
//         <div className="flex-1 min-w-[300px] max-w-full flex flex-col items-center justify-center bg-white p-4 md:p-8 h-[350px] md:h-full">
//           <span className="inline-block bg-primary text-white px-3 py-1 rounded-full font-semibold mb-2">
//             {locations[selected].name}
//           </span>
//           <div className="text-center text-muted-foreground mb-4">
//             {locations[selected].address}
//           </div>
//           <iframe
//             src={locations[selected].mapSrc}
//             width="100%"
//             height="100%"
//             style={{
//               border: 0,
//               borderRadius: "12px",
//               minHeight: "250px",
//               maxHeight: "100%",
//             }}
//             allowFullScreen={true}
//             loading="lazy"
//             referrerPolicy="no-referrer-when-downgrade"
//             title={locations[selected].name + " Location"}
//           ></iframe>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;


import { useState, FormEvent } from "react";
import { Send, MapPin } from "lucide-react";

const locations = [
  {
    name: "Bangalore, India",
    address: "Prestige Tech Park, Outer Ring Road, Bangalore, Karnataka 560103",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.993073857956!2d77.6974200750737!3d12.93523898737259!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae13e7e2e2e2e3%3A0x2e2e2e2e2e2e2e2e!2sPrestige%20Tech%20Park!5e0!3m2!1sen!2sin!4v1691580000000!5m2!1sen!2sin",
  },
  {
    name: "San Francisco, USA",
    address: "600 California St, San Francisco, CA 94108",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019019145409!2d-122.4064176846817!3d37.79287297975659!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064d1e2e2e2%3A0x2e2e2e2e2e2e2e2e!2s600%20California%20St%2C%20San%20Francisco%2C%20CA%2094108!5e0!3m2!1sen!2sus!4v1691580000000",
  },
];

export default function Contact() {
  const [selected, setSelected] = useState(0);
  const [sending, setSending] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => setSending(false), 1000); // TODO: wire to backend
  };

  return (
    <section id="contact" className="bg-background">
      <div className="max-w-6xl mx-auto px-6 pt-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-foreground text-center bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent" >
          Contact Us
        </h1>
        <p className="text-center text-muted-foreground mt-2 mb-8">
          Find us worldwide and drop a line—let’s get your project moving.
        </p>

        {/* ====== FULL-WIDTH MAP BANNER (visible on all screens) ====== */}
        <div className="mb-4 flex flex-wrap items-center justify-center gap-3">
          {locations.map((loc, i) => (
            <button
              key={loc.name}
              onClick={() => setSelected(i)}
              className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm border transition
                ${selected === i ? "bg-primary text-white border-primary" : "bg-card text-foreground border-border hover:bg-primary/10"}`}
            >
              <MapPin className="h-4 w-4" />
              {loc.name}
            </button>
          ))}
        </div>

        <div className="rounded-2xl overflow-hidden border border-border/50 shadow-sm mb-10">
          <iframe
            key={selected} // force refresh on change
            src={locations[selected].mapSrc}
            title={`${locations[selected].name} Map`}
            className="w-full aspect-[16/9] md:aspect-[21/9]"
            loading="lazy"
            style={{ border: 0 }}
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* ====== SPLIT: FORM (left) + MINI MAP (right, hidden on small) ====== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch pb-16">
          {/* Form card with soft gradient */}
          <div className="relative rounded-2xl border border-border/50 shadow-sm overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/10 to-transparent" />
            <div className="relative p-6 md:p-8 bg-white/70 dark:bg-white">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Project Inquiry</h2>
              <p className="text-gray-700 mb-6">
                Share a few details and our team will respond within one business day.
              </p>

              <form onSubmit={onSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Your name"
                    required
                    className="rounded-lg border border-border/60 px-4 py-3 text-gray-900 text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/40"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    className="text-gray-400  rounded-lg border border-border/60 px-4 py-3 text-gray-900  focus:outline-none focus:ring-2 focus:ring-primary/40"
                  />
                </div>

                <input
                  type="text"
                  placeholder="Company / Website"
                  className="text-gray-400  w-full rounded-lg border border-border/60 px-4 py-3   focus:outline-none focus:ring-2 focus:ring-primary/40"
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <select className="rounded-lg border border-border/60 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/40">
                    <option>Budget (USD)</option>
                    <option>$5k – $15k</option>
                    <option>$15k – $50k</option>
                    <option>$50k+</option>
                  </select>
                  <select className="rounded-lg border border-border/60 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/40">
                    <option>Timeline</option>
                    <option>ASAP</option>
                    <option>1–3 months</option>
                    <option>3–6 months</option>
                  </select>
                </div>

                <textarea
                  rows={6}
                  placeholder="Tell us about your project…"
                  required
                  className=" text-gray-400 w-full rounded-lg border border-border/60 px-4 py-3 text-gray-900  focus:outline-none focus:ring-2 focus:ring-primary/40"
                />

                <button
                  type="submit"
                  disabled={sending}
                  className="inline-flex items-center justify-center gap-2 w-full md:w-auto rounded-lg px-6 py-3 font-semibold text-white bg-primary hover:brightness-110 disabled:opacity-70"
                >
                  <Send className="h-4 w-4" />
                  {sending ? "Sending…" : "Send Message"}
                </button>
              </form>
            </div>
          </div>




          {/* Mini map – hidden on small screens, shows on md+ */}
          <div className="hidden md:block rounded-2xl overflow-hidden border border-border/50 shadow-sm">
            <div className="px-6 pt-6">
              <h3 className="text-xl font-bold text-foreground">{locations[selected].name}</h3>
              <p className="text-muted-foreground mt-1 mb-4">{locations[selected].address}</p>
            </div>
            <iframe
              key={`mini-${selected}`}
              src={locations[selected].mapSrc}
              title={`${locations[selected].name} Mini Map`}
              className="w-full h-full"
              loading="lazy"
              style={{ border: 0 }}
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          
        </div>
      </div>
    </section>
  );
}
