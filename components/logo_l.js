import Image from "next/image";

function Logo_l({ props }) {
  return (
    <Image
      alt="Next.js logo"
      src={"/paal.svg"}
      width={716}
      height={262}
      layout={"responsive"}
    />
  );
}

export default Logo_l;
