import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import RoomCard from "@/components/RoomCard";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <section className="p-8 grid md:grid-cols-3 gap-8">
        <RoomCard title="Eco Deluxe Room" image="/images/room1.jpg" desc="Ruang nyaman dengan pemandangan hijau." />
        <RoomCard title="Family Shelter" image="/images/room2.jpg" desc="Tempat singgah nyaman untuk keluarga." />
        <RoomCard title="Coffee Corner" image="/images/cafe.jpg" desc="Nikmati kopi hijau organik lokal." />
      </section>
      <Footer />
    </>
  );
}
