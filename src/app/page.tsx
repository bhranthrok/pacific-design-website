import Image from 'next/image';
import Link from 'next/link';
import YelpReviews from '@/components/YelpReviews';

export default function Home() {
  return (
    <>
    <section id="hero" className='relative w-full h-[70vh] md:h-screen'>
      <Image
        src="/Render.webp"
        alt="Landscaping Work"
        fill
        priority
        className='object-cover'
      />
      <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center">
        <h1 className="text-white pb-3 text-xl md:text-3xl">
          Pacific Design Landscaping
        </h1>
        <h2 className="text-white  text-2xl md:text-6xl">
          Transform Your Outdoor Space
        </h2>
          <div className="flex flex-col items-center gap-4 pt-6 md:flex-row md:justify-center md:gap-10">
          <button className="px-6 py-3 rounded-xl backdrop-blur-sm bg-white/10 border border-white/20 text-white font-semibold shadow-md hover:bg-white/20 transition-all duration-300">
            <Link href="#services">Our Services</Link>
          </button>
          <button className="px-6 py-3 rounded-xl backdrop-blur-sm bg-white/10 border border-white/20 text-white font-semibold shadow-md hover:bg-white/20 transition-all duration-300">
            <Link href="#contact">Get a Free Quote</Link>
          </button>
        </div>
      </div>
    </section>

    <section id="about" className="min-h-[30vh] w-full bg-my-light-beige py-15 px-6 items-center justify-center">
      <h1 className="text-3xl text-bold text-center pb-10">About Us</h1>
      <h1 className="text-2xl text-center">
        At Pacific Design, we specialize in designing and constructing stunning outdoor spaces that are both beautiful and functional. From redesigning your garden to building custom patios or transforming your entire landscape, our team of skilled professionals is with you every step of the way. With a focus on quality craftsmanship and meticulous attention to detail, we ensure every project exceeds expectations. Let us help you create the perfect outdoor space that enhances both the beauty and value of your property.
        </h1>
    </section>

    <section id="services" className="min-h-screen bg-my-beige py-15 px-6">
      <h1 className="text-3xl text-bold text-center pb-10">Our Services</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-6xl mx-auto">
        <div className="relative rounded-xl overflow-hidden shadow-lg group h-64">
          <Image
            src="/services/DesignPlanning.webp"
            alt="Card 1"
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h3 className="text-white text-xl">Design & Planning</h3>
        </div>
      </div>

      <div className="relative rounded-xl overflow-hidden shadow-lg group h-64">
          <Image
            src="/services/Installation.webp"
            alt="Card 2"
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h3 className="text-white text-xl">Installation</h3>
        </div>
      </div>

      <div className="relative rounded-xl overflow-hidden shadow-lg group h-64">
          <Image
            src="/services/Hardscaping & Structures.webp"
            alt="Card 3"
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h3 className="text-white text-xl">Hardscaping & Structures</h3>
        </div>
      </div>

      <div className="relative rounded-xl overflow-hidden shadow-lg group h-64">
          <Image
            src="/services/Maintenance & Management.webp"
            alt="Card 3"
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h3 className="text-white text-xl">Maintenance & Management</h3>
        </div>
      </div>

      </div>

    </section>

    <section id="reviews" className="items-center min-h-screen bg-my-light-beige py-15 px-6">
      <h1 className="text-3xl text-bold text-center pb-10">Reviews</h1>
        <YelpReviews />
    </section>

    <section id="contact" className="min-h-[30vh] bg-my-beige py-15 px-6">
      <h1 className="text-3xl text-bold text-center">Contact Us</h1>
      <h1 className="flex justify-center items-center text-3xl pt-5">(650) 796-5188</h1>
    </section>
    <div className="w-full flex justify-end bg-my-beige px-6 py-2">
      <p className="text-sm text-gray-900">
        Website by <a href="https://www.linkedin.com/in/luizcauet/" className="hover:underline">Luiz Blum </a>
        & <a href="https://hherakoi.artstation.com" className="hover:underline">Eri Foulds</a>
      </p>
    </div>
  </>
  );
}