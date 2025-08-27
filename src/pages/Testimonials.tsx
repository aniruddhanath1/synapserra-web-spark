// import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

// const Testimonials = () => (
//   <div className="max-w-7xl mx-auto px-6 py-24">
//     <h2 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent text-center">What Our Clients Say</h2>
//     <Carousel>
//       <CarouselContent>
//         <CarouselItem>
//           <div className="bg-card/70 p-8 rounded-xl shadow-soft text-center">
//             <div className="flex justify-center mb-4">
//               {[...Array(5)].map((_, i) => (
//                 <svg key={i} className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.966a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.921-.755 1.688-1.54 1.118l-3.38-2.455a1 1 0 00-1.175 0l-3.38 2.455c-.784.57-1.838-.197-1.539-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.049 9.393c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.966z"/></svg>
//               ))}
//             </div>
//             <p className="text-lg text-muted-foreground mb-6">
//               “Synapserra delivered our project on time and exceeded expectations. Their team is highly skilled and professional.”
//             </p>
//             <div className="font-semibold text-primary">Amit Sharma</div>
//             <div className="text-sm text-muted-foreground">CTO, TechNova</div>
//           </div>
//         </CarouselItem>
//         <CarouselItem>
//           <div className="bg-card/70 p-8 rounded-xl shadow-soft text-center">
//             <div className="flex justify-center mb-4">
//               {[...Array(3)].map((_, i) => (
//                 <svg key={i} className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.966a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.921-.755 1.688-1.54 1.118l-3.38-2.455a1 1 0 00-1.175 0l-3.38 2.455c-.784.57-1.838-.197-1.539-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.049 9.393c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.966z"/></svg>
//               ))}
//             </div>
//             <p className="text-lg text-muted-foreground mb-6">
//               “Excellent service and support! We highly recommend Synapserra for Salesforce and web development.”
//             </p>
//             <div className="font-semibold text-primary">Emily Carter</div>
//             <div className="text-sm text-muted-foreground">Founder, BluePeak Solutions</div>
//           </div>
//         </CarouselItem>
//         <CarouselItem>
//           <div className="bg-card/70 p-8 rounded-xl shadow-soft text-center">
//             <div className="flex justify-center mb-4">
//               {[...Array(4)].map((_, i) => (
//                 <svg key={i} className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.966a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.921-.755 1.688-1.54 1.118l-3.38-2.455a1 1 0 00-1.175 0l-3.38 2.455c-.784.57-1.838-.197-1.539-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.049 9.393c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.966z"/></svg>
//               ))}
//             </div>
//             <p className="text-lg text-muted-foreground mb-6">
//               “Their innovative solutions helped us scale our business. Great experience working with the team.”
//             </p>
//             <div className="font-semibold text-primary">James Müller</div>
//             <div className="text-sm text-muted-foreground">Manager, TechSphere GmbH</div>
//           </div>
//         </CarouselItem>
//             <CarouselItem>
//               <div className="bg-card/70 p-8 rounded-xl shadow-soft text-center">
//                 <div className="flex justify-center mb-4">
//                   {[...Array(5)].map((_, i) => (
//                     <svg key={i} className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.966a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.921-.755 1.688-1.54 1.118l-3.38-2.455a1 1 0 00-1.175 0l-3.38 2.455c-.784.57-1.838-.197-1.539-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.049 9.393c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.966z"/></svg>
//                   ))}
//                 </div>
//                 <p className="text-lg text-muted-foreground mb-6">
//                   “The team at Synapserra provided outstanding support and technical expertise. Our cloud migration was seamless.”
//                 </p>
//                 <div className="font-semibold text-primary">Sofia Rossi</div>
//                 <div className="text-sm text-muted-foreground">IT Director, Innovatech S.p.A.</div>
//               </div>
//             </CarouselItem>
//             <CarouselItem>
//               <div className="bg-card/70 p-8 rounded-xl shadow-soft text-center">
//                 <div className="flex justify-center mb-4">
//                   {[...Array(3)].map((_, i) => (
//                     <svg key={i} className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.966a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.921-.755 1.688-1.54 1.118l-3.38-2.455a1 1 0 00-1.175 0l-3.38 2.455c-.784.57-1.838-.197-1.539-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.049 9.393c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.966z"/></svg>
//                   ))}
//                 </div>
//                 <p className="text-lg text-muted-foreground mb-6">
//                   “We saw a significant boost in productivity after implementing Synapserra’s solutions. Highly recommended!”
//                 </p>
//                 <div className="font-semibold text-primary">Lucas Dubois</div>
//                 <div className="text-sm text-muted-foreground">COO, Nexa Digital</div>
//               </div>
//             </CarouselItem>
//             <CarouselItem>
//               <div className="bg-card/70 p-8 rounded-xl shadow-soft text-center">
//                 <div className="flex justify-center mb-4">
//                   {[...Array(4)].map((_, i) => (
//                     <svg key={i} className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.966a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.921-.755 1.688-1.54 1.118l-3.38-2.455a1 1 0 00-1.175 0l-3.38 2.455c-.784.57-1.838-.197-1.539-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.049 9.393c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.966z"/></svg>
//                   ))}
//                 </div>
//                 <p className="text-lg text-muted-foreground mb-6">
//                   “Professional, reliable, and innovative. Synapserra exceeded our expectations in every way.”
//                 </p>
//                 <div className="font-semibold text-primary">Anna Johansson</div>
//                 <div className="text-sm text-muted-foreground">CEO, Nordic Webworks</div>
//               </div>
//             </CarouselItem>
//             <CarouselItem>
//               <div className="bg-card/70 p-8 rounded-xl shadow-soft text-center">
//                 <div className="flex justify-center mb-4">
//                   {[...Array(5)].map((_, i) => (
//                     <svg key={i} className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.966a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.921-.755 1.688-1.54 1.118l-3.38-2.455a1 1 0 00-1.175 0l-3.38 2.455c-.784.57-1.838-.197-1.539-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.049 9.393c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.966z"/></svg>
//                   ))}
//                 </div>
//                 <p className="text-lg text-muted-foreground mb-6">
//                   “Our e-commerce platform is now faster and more secure thanks to Synapserra’s expert team.”
//                 </p>
//                 <div className="font-semibold text-primary">Carlos Mendez</div>
//                 <div className="text-sm text-muted-foreground">CTO, MercadoPlus</div>
//               </div>
//             </CarouselItem>
//             <CarouselItem>
//               <div className="bg-card/70 p-8 rounded-xl shadow-soft text-center">
//                 <div className="flex justify-center mb-4">
//                   {[...Array(2)].map((_, i) => (
//                     <svg key={i} className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.966a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.921-.755 1.688-1.54 1.118l-3.38-2.455a1 1 0 00-1.175 0l-3.38 2.455c-.784.57-1.838-.197-1.539-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.049 9.393c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.966z"/></svg>
//                   ))}
//                 </div>
//                 <p className="text-lg text-muted-foreground mb-6">
//                   “Synapserra’s custom solutions helped us expand globally. Their support is top-notch.”
//                 </p>
//                 <div className="font-semibold text-primary">Mia Chen</div>
//                 <div className="text-sm text-muted-foreground">Product Manager, PacificSoft</div>
//               </div>
//             </CarouselItem>
//             <CarouselItem>
//               <div className="bg-card/70 p-8 rounded-xl shadow-soft text-center">
//                 <div className="flex justify-center mb-4">
//                   {[...Array(4)].map((_, i) => (
//                     <svg key={i} className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.966a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.921-.755 1.688-1.54 1.118l-3.38-2.455a1 1 0 00-1.175 0l-3.38 2.455c-.784.57-1.838-.197-1.539-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.049 9.393c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.966z"/></svg>
//                   ))}
//                 </div>
//                 <p className="text-lg text-muted-foreground mb-6">
//                   “We trust Synapserra for all our IT needs. Their team is responsive and highly skilled.”
//                 </p>
//                 <div className="font-semibold text-primary">David Brown</div>
//                 <div className="text-sm text-muted-foreground">CTO, BrightPath Solutions</div>
//               </div>
//             </CarouselItem>
//       </CarouselContent>
//       <CarouselPrevious />
//       <CarouselNext />
//     </Carousel>
//   </div>
// );

// export default Testimonials;


import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Quote, Star } from "lucide-react";


type TItem = {
  name: string;
  role: string;
  company: string;
  avatar: string;
  rating: number; // 1..5
  quote: string;
  // Optional: companyLogoUrl?: string
};

const ITEMS: TItem[] = [
  {
    name: "Amit Sharma",
    role: "CTO",
    company: "TechNova",
    avatar: "https://randomuser.me/api/portraits/men/31.jpg",
    rating: 5,
    quote:
      "The team delivered exceptional results and exceeded our expectations.",
  },
  {
    name: "Emily Carter",
    role: "Founder",
    company: "BluePeak Solutions",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    rating: 4,
    quote:
      "Excellent service and support throughout the project lifecycle.",
  },
  {
    name: "James Müller",
    role: "Manager",
    company: "TechSphere GmbH",
    avatar: "https://randomuser.me/api/portraits/men/65.jpg",
    rating: 5,
    quote:
      "Innovative solutions that helped us scale quickly—great experience.",
  },
  {
    name: "Sofia Rossi",
    role: "IT Director",
    company: "Innovatech S.p.A.",
    avatar: "https://randomuser.me/api/portraits/women/12.jpg",
    rating: 5,
    quote:
      "Outstanding technical depth. Our cloud migration was seamless.",
  },
  {
    name: "Lucas Dubois",
    role: "COO",
    company: "Nexa Digital",
    avatar: "https://randomuser.me/api/portraits/men/22.jpg",
    rating: 3,
    quote:
      "Noticeable boost in team productivity after the rollout.",
  },
  {
    name: "Anna Johansson",
    role: "CEO",
    company: "Nordic Webworks",
    avatar: "https://randomuser.me/api/portraits/women/3.jpg",
    rating: 4,
    quote:
      "Professional, reliable, and genuinely collaborative partners.",
  },
];

const Stars = ({ n }: { n: number }) => (
  <div className="flex justify-center gap-1 mb-3" aria-label={`${n} star rating`}>
    {Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${i < n ? "text-yellow-400" : "text-gray-300"}`}
        fill={i < n ? "currentColor" : "none"}
        strokeWidth={2}
      />
    ))}
  </div>
);

const Card = ({ item }: { item: TItem }) => (
  <div className="bg-white dark:bg-white rounded-2xl border border-border/50 p-6 shadow-sm hover:shadow-lg transition-all duration-300 h-full flex flex-col">
    {/* header: avatar + quote icon */}
    <div className="flex items-center justify-between">
      <img
        src={item.avatar}
        alt={item.name}
        className="h-12 w-12 rounded-full object-cover ring-2 ring-primary/30"
      />
      <Quote className="h-6 w-6 text-primary/60" />
    </div>

    {/* quote */}
    <p className="mt-4 text-gray-800 text-[15px] leading-relaxed flex-1">
      “{item.quote}”
    </p>

    {/* rating */}
    <Stars n={item.rating} />

    {/* name / role / company */}
    <div className="mt-2">
      <div className="text-lg font-semibold text-gray-900">{item.name}</div>
      <div className="text-sm text-gray-700">{item.role}</div>
      <div className="mt-1 text-sm font-medium text-gray-900">{item.company}</div>
      {/* If you have a company logo, place it here instead of text */}
      {/* <img src={item.companyLogoUrl} alt={item.company} className="h-5 mt-2 opacity-80" /> */}
    </div>
  </div>
);

const Testimonials = () => (
  <div className="max-w-7xl mx-auto px-6 py-24">
    <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-10">
      <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
        What Our Clients Say
      </span>
    </h2>

    <Carousel className="relative">
      <CarouselContent className="-ml-4">
        {ITEMS.map((item, idx) => (
          <CarouselItem
            key={idx}
            className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3"
          >
            <Card item={item} />
          </CarouselItem>
        ))}
      </CarouselContent>

      {/* clean, minimal controls */}
      <CarouselPrevious className="left-0 md:-left-6 bg-white/90 hover:bg-white text-gray-900 border border-border/60 shadow-sm" />
      <CarouselNext className="right-0 md:-right-6 bg-white/90 hover:bg-white text-gray-900 border border-border/60 shadow-sm" />
    </Carousel>
  </div>
);

export default Testimonials;
