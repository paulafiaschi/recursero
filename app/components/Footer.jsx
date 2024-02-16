import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="footer p-10 bg-green-900 text-white items-center">
      <aside>
        <Link href="https://www.lasotras.dk" target="_blank">
          <Image
            src="/logo_white.png"
            width={80}
            height={80}
            alt="Logo de Las Otras"
          />
          <p className="text-lg font-bold">Asociación Las Otras</p>
          <p className="max-w-[50ch]">
            Organización sin fines de lucro de mirada feminista e interseccional
            ubicada en Copenhague, Dinamarca.
          </p>
        </Link>
      </aside>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <Link href="https://www.instagram.com/lasotras.dk/" target="_blank">
            <Image
              src="/instagram.svg"
              width={30}
              height={30}
              alt="Instagram icon"
            />
          </Link>
          <Link href="https://www.facebook.com/lasotras.dk" target="_blank">
            <Image
              src="/facebook.svg"
              width={30}
              height={30}
              alt="Facebook icon"
            />
          </Link>
        </div>
      </nav>
    </footer>
  );
}
