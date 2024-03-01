import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="hero bg-amber-50 md:h-screen mb-8">
      <div className="hero-content flex-col lg:flex-row-reverse md:pt-56 pt-40 md:pb-48 pb-24 gap-10">
        {/* <Image src={`/Web.svg`} width={35} height={35} alt={`/Web.svg`} /> */}
        <div className="hero-image relative">
          <Image
            src="./smile.svg"
            width={200}
            height={200}
            alt="Carita feliz con fondo amarillo"
          />
          <Image
            className="absolute"
            src="./envelope.svg"
            width={80}
            height={80}
            alt=""
            id="envelope"
          />
          <Image
            className="absolute"
            src="./luggage.svg"
            width={80}
            height={80}
            alt=""
            id="luggage"
          />
          <Image
            className="absolute"
            src="./movies.svg"
            width={80}
            height={80}
            alt=""
            id="movies"
          />
          <Image
            className="absolute"
            src="./health.svg"
            width={80}
            height={80}
            alt=""
            id="health"
          />
          <Image
            className="absolute"
            src="./alert.svg"
            width={80}
            height={80}
            alt=""
            id="alert"
          />
        </div>
        <div className="md:mt-0 mt-40">
          <h1 className="text-5xl font-bold">Bienvenides al Recursero!</h1>
          <p className="py-6 max-w-[50ch] text-xl">
            El recursero es una recopilación de información útil para personas
            hispanohablantes que viven en Dinamarca. Es un documento vivo y
            colectivo, gestionado por la Asociación Las Otras. No incluye
            servicios que brindamos directamente, por lo que no nos hacemos
            responsables por los mismos.
          </p>

          <Link href="#recursero" className="btn btn-success btn-wide mt-8">
            Explorar
          </Link>
        </div>
      </div>
    </div>
  );
}
