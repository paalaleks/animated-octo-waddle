import Image from "next/image";

function Logo_s({ props }) {
  return (
    <Image
      alt="Fullstakk logo"
      src={"/paal_2.svg"}
      width={445}
      height={212}
      layout={"responsive"}
    />
  );
}

export default Logo_s;
