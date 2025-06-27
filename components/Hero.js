export default function Hero() {
  return (
    <section className="h-[80vh] bg-cover bg-center flex items-center justify-center text-white text-center" style={{ backgroundImage: "url('/images/hero.jpg')" }}>
      <div className="bg-black bg-opacity-50 p-8 rounded">
        <h2 className="text-4xl md:text-6xl font-bold mb-4 animate-pulse">Stay Green, Stay Cozy</h2>
        <p className="text-lg">Tempat singgah nyaman di tengah kebun kopi hijau.</p>
      </div>
    </section>
  );
}
