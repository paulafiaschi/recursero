import Link from "next/link";

export default function NavBar() {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">Las Otras</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Buscar</a>
          </li>
          <li>
            <details>
              <summary>Categorías</summary>
              <ul className="p-2 bg-base-100 rounded-t-none">
                <li>
                  <Link href="/about">Link 1</Link>
                </li>
                <li>
                  <Link href="/about">Link 2</Link>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
}
