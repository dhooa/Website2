export default function RoomCard({ title, image, desc }) {
  return (
    <div className="rounded overflow-hidden shadow-lg hover:scale-105 transform transition duration-300">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p>{desc}</p>
      </div>
    </div>
  );
}
