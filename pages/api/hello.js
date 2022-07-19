export default function handler(req, res) {
  res.status(200).json({ name: "John Doe", apellido: "Sulca", curso: "10mo" });
}
