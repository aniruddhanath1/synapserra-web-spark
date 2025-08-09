import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const Testimonials = () => (
  <div className="max-w-7xl mx-auto px-6 py-24">
    <h2 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent text-center">What Our Clients Say</h2>
    <Carousel>
      <CarouselContent>
        <CarouselItem>
          <div className="bg-card/70 p-8 rounded-xl shadow-soft text-center">
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.966a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.921-.755 1.688-1.54 1.118l-3.38-2.455a1 1 0 00-1.175 0l-3.38 2.455c-.784.57-1.838-.197-1.539-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.049 9.393c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.966z"/></svg>
              ))}
            </div>
            <p className="text-lg text-muted-foreground mb-6">
              “Synapserra delivered our project on time and exceeded expectations. Their team is highly skilled and professional.”
            </p>
            <div className="font-semibold text-primary">Amit Sharma</div>
            <div className="text-sm text-muted-foreground">CTO, TechNova</div>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="bg-card/70 p-8 rounded-xl shadow-soft text-center">
            <div className="flex justify-center mb-4">
              {[...Array(3)].map((_, i) => (
                <svg key={i} className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.966a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.921-.755 1.688-1.54 1.118l-3.38-2.455a1 1 0 00-1.175 0l-3.38 2.455c-.784.57-1.838-.197-1.539-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.049 9.393c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.966z"/></svg>
              ))}
            </div>
            <p className="text-lg text-muted-foreground mb-6">
              “Excellent service and support! We highly recommend Synapserra for Salesforce and web development.”
            </p>
            <div className="font-semibold text-primary">Emily Carter</div>
            <div className="text-sm text-muted-foreground">Founder, BluePeak Solutions</div>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="bg-card/70 p-8 rounded-xl shadow-soft text-center">
            <div className="flex justify-center mb-4">
              {[...Array(4)].map((_, i) => (
                <svg key={i} className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.966a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.921-.755 1.688-1.54 1.118l-3.38-2.455a1 1 0 00-1.175 0l-3.38 2.455c-.784.57-1.838-.197-1.539-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.049 9.393c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.966z"/></svg>
              ))}
            </div>
            <p className="text-lg text-muted-foreground mb-6">
              “Their innovative solutions helped us scale our business. Great experience working with the team.”
            </p>
            <div className="font-semibold text-primary">James Müller</div>
            <div className="text-sm text-muted-foreground">Manager, TechSphere GmbH</div>
          </div>
        </CarouselItem>
            <CarouselItem>
              <div className="bg-card/70 p-8 rounded-xl shadow-soft text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.966a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.921-.755 1.688-1.54 1.118l-3.38-2.455a1 1 0 00-1.175 0l-3.38 2.455c-.784.57-1.838-.197-1.539-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.049 9.393c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.966z"/></svg>
                  ))}
                </div>
                <p className="text-lg text-muted-foreground mb-6">
                  “The team at Synapserra provided outstanding support and technical expertise. Our cloud migration was seamless.”
                </p>
                <div className="font-semibold text-primary">Sofia Rossi</div>
                <div className="text-sm text-muted-foreground">IT Director, Innovatech S.p.A.</div>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="bg-card/70 p-8 rounded-xl shadow-soft text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(3)].map((_, i) => (
                    <svg key={i} className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.966a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.921-.755 1.688-1.54 1.118l-3.38-2.455a1 1 0 00-1.175 0l-3.38 2.455c-.784.57-1.838-.197-1.539-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.049 9.393c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.966z"/></svg>
                  ))}
                </div>
                <p className="text-lg text-muted-foreground mb-6">
                  “We saw a significant boost in productivity after implementing Synapserra’s solutions. Highly recommended!”
                </p>
                <div className="font-semibold text-primary">Lucas Dubois</div>
                <div className="text-sm text-muted-foreground">COO, Nexa Digital</div>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="bg-card/70 p-8 rounded-xl shadow-soft text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(4)].map((_, i) => (
                    <svg key={i} className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.966a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.921-.755 1.688-1.54 1.118l-3.38-2.455a1 1 0 00-1.175 0l-3.38 2.455c-.784.57-1.838-.197-1.539-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.049 9.393c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.966z"/></svg>
                  ))}
                </div>
                <p className="text-lg text-muted-foreground mb-6">
                  “Professional, reliable, and innovative. Synapserra exceeded our expectations in every way.”
                </p>
                <div className="font-semibold text-primary">Anna Johansson</div>
                <div className="text-sm text-muted-foreground">CEO, Nordic Webworks</div>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="bg-card/70 p-8 rounded-xl shadow-soft text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.966a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.921-.755 1.688-1.54 1.118l-3.38-2.455a1 1 0 00-1.175 0l-3.38 2.455c-.784.57-1.838-.197-1.539-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.049 9.393c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.966z"/></svg>
                  ))}
                </div>
                <p className="text-lg text-muted-foreground mb-6">
                  “Our e-commerce platform is now faster and more secure thanks to Synapserra’s expert team.”
                </p>
                <div className="font-semibold text-primary">Carlos Mendez</div>
                <div className="text-sm text-muted-foreground">CTO, MercadoPlus</div>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="bg-card/70 p-8 rounded-xl shadow-soft text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(2)].map((_, i) => (
                    <svg key={i} className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.966a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.921-.755 1.688-1.54 1.118l-3.38-2.455a1 1 0 00-1.175 0l-3.38 2.455c-.784.57-1.838-.197-1.539-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.049 9.393c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.966z"/></svg>
                  ))}
                </div>
                <p className="text-lg text-muted-foreground mb-6">
                  “Synapserra’s custom solutions helped us expand globally. Their support is top-notch.”
                </p>
                <div className="font-semibold text-primary">Mia Chen</div>
                <div className="text-sm text-muted-foreground">Product Manager, PacificSoft</div>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="bg-card/70 p-8 rounded-xl shadow-soft text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(4)].map((_, i) => (
                    <svg key={i} className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.966a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.921-.755 1.688-1.54 1.118l-3.38-2.455a1 1 0 00-1.175 0l-3.38 2.455c-.784.57-1.838-.197-1.539-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.049 9.393c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.966z"/></svg>
                  ))}
                </div>
                <p className="text-lg text-muted-foreground mb-6">
                  “We trust Synapserra for all our IT needs. Their team is responsive and highly skilled.”
                </p>
                <div className="font-semibold text-primary">David Brown</div>
                <div className="text-sm text-muted-foreground">CTO, BrightPath Solutions</div>
              </div>
            </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  </div>
);

export default Testimonials;
