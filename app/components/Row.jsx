import Image from "next/image";

export default function Row({ ...props }) {
  //   console.log(props.displayedInfo);

  return props.displayedInfo != "" ? (
    <div className="contact-row flex py-3 gap-3">
      <div className="contact-heading flex items-center pl-4">
        <Image
          src={`/${props.row}.svg`}
          width={35}
          height={35}
          alt={`/${props.row}.svg`}
        />
        <p className="ml-3">{props.row}</p>
      </div>

      <div className="contant-cell flex items-center text-wrap max-w-[50ch]">
        {props.row === "Web" &&
        props.displayedInfo != undefined &&
        props.displayedInfo.startsWith("https://") === true ? (
          <a
            href={props.displayedInfo}
            target="_blank"
            className="underline text-sky-600 hover:text-sky-900"
          >
            {props.displayedInfo}
          </a>
        ) : (
          props.displayedInfo
        )}
      </div>
    </div>
  ) : null;
}
