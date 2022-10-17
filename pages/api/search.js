import axios from "axios";

let usersURL =
  "https://mwb03srtpc.execute-api.sa-east-1.amazonaws.com/api/users";
export default function handler(req, res) {
  const users = axios.get(usersURL);
  const { q } = req.query;

  if (q) {
    const results = users.data.filter((user) => {
      const { nombre, apellidoPaterno, apellidoMaterno } = user;

      const fullName = `${nombre} ${apellidoPaterno} ${apellidoMaterno}`;
      return fullName.toLowerCase().includes(q.toLowerCase());
    });
    return res.status(200).json(results);
  }
}
