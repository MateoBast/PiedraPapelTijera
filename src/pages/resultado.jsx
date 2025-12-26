import Ganaste from '../componentes/cartel-ganaste'; // corregí el nombre si hace falta
import Perdiste from "../componentes/perdiste"
const Resultado = () => {
  return (
    <div>
      <h1>¡Aquí es donde estará el resultado!</h1>
      <Ganaste /> {/* Acá insertás la imagen */}
      <Perdiste /> {/* Acá insertás la imagen */}
    </div>
  );
};

export default Resultado;