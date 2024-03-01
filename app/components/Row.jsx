import Image from "next/image";
import Link from "next/link";

export default function Row({ ...props }) {
  let languages = [];
  if (props.row === "Idiomas" && props.displayedInfo != undefined) {
    languages = props.displayedInfo.split(",");
  }

  return props.displayedInfo != "" ? (
    <div className="contact-row flex py-3 gap-3">
      <div className="contact-heading flex items-center pl-4">
        <Image
          src={`/${props.row}.svg`}
          width={35}
          height={35}
          alt={`/${props.row}.svg`}
        />
        <p className="ml-3 hidden md:block">{props.row}</p>
      </div>

      <div className="contant-cell flex items-center text-wrap max-w-[50ch]">
        {props.row === "Web" &&
        props.displayedInfo != undefined &&
        props.displayedInfo.startsWith("https://") === true ? (
          <Link
            href={props.displayedInfo}
            target="_blank"
            className="underline text-sky-600 hover:text-sky-900"
          >
            {props.displayedInfo}
          </Link>
        ) : props.row === "Idiomas" && props.displayedInfo != undefined ? (
          <>
            {languages.map((lang) => {
              return (
                <>
                  <Image
                    src={`/${lang}.svg`}
                    width={20}
                    height={20}
                    alt={`/${lang}.svg`}
                    key={lang}
                  />
                  <p className="ml-1 mr-4">{lang}</p>
                </>
              );
            })}
          </>
        ) : (
          props.displayedInfo
        )}
      </div>
    </div>
  ) : null;
}
