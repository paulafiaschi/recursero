import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="hero bg-amber-50 h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse pt-56 pb-48 gap-10">
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
            En este espacio, puedes acceder a una variedad de información que no
            solo es valiosa, sino también está actualizada para garantizar que
            sean datos relevantes.
          </p>

          <Link href="#recursero" className="btn btn-success btn-wide mt-8">
            Explorar
          </Link>
        </div>
      </div>
    </div>
  );
}
