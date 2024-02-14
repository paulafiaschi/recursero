import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="hero min-h-screen bg-amber-50">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <Image src={`/Web.svg`} width={35} height={35} alt={`/Web.svg`} />
        <div>
          <h1 className="text-5xl font-bold">Bienvenides al Recursero!</h1>
          <p className="py-6 max-w-[60ch]">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>

          <Link href="#recursero" className="btn btn-success mt-8">
            Explorar
          </Link>
        </div>
      </div>
    </div>
  );
}
