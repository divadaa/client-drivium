import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="main">
      <h1>Bienvenid@ a Drivium</h1>

      <Link to="/login">Quiero iniciar sesión</Link>
    </div>
  );
}
