import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="hero bg-amber-50">
      <div className="hero-content flex-col lg:flex-row-reverse pt-48 pb-36">
        {/* <Image src={`/Web.svg`} width={35} height={35} alt={`/Web.svg`} /> */}
        <div>
          <h1 className="text-5xl font-bold">Bienvenides al Recursero!</h1>
          <p className="py-6 max-w-[50ch] text-xl">
            En este espacio, podés acceder a una variedad de información que no
            solo es valiosa, sino también está actualizada para garantizar que
            sean datos relevantes.
          </p>

          {/* <Link href="#recursero" className="btn btn-success mt-8">
            Explorar
          </Link> */}
        </div>
      </div>
    </div>
  );
}
