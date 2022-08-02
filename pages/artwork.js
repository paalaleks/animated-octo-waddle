import Image from "next/image";
import { useRouter } from "next/router";
import Footer from "../components/footer";

const Artwork = () => {
  const router = useRouter();

  return (
    <>
      <div className="topbar artwork-topbar">
        <h2>Artwork</h2>
        <i className="fa-solid fa-xmark" onClick={() => router.back()}></i>
      </div>
      <div className="artwork-container">
        <div className="image-container">
          <Image
            alt="Meeting trials"
            src={"/artwork_Prøvelser.png"}
            width={1528}
            height={1080}
          />
          <p>{"Meeting trials"}</p>
        </div>
        <div className="image-container">
          <Image
            alt="Examining scriptures carefully"
            src={"/artwork_Study_4.png"}
            width={1528}
            height={1080}
          />
          <p>{"Examining scriptures carefully"}</p>
        </div>
        <div className="image-container">
          <Image
            alt="Little delights; my favorite TV-show is on"
            src={"/artwork_little_delights.png"}
            width={1528}
            height={1080}
          />
          <p>{"Little delights; my favorite TV-show is on"}</p>
        </div>
        <div className="image-container">
          <Image
            alt="We have to continue onwards"
            src={"/artwork_detmågåfremmover.png"}
            width={1528}
            height={1023}
          />
          <p>'"; We have to continue onwards"'</p>
        </div>
        <div className="portrait-image-container">
          <div className="image-container">
            <Image
              alt="GPS navigated airbaloon mail"
              src={"/artwork_airbaloon.png"}
              width={1528}
              height={2095}
            />
            <p>{"GPS navigated airbaloon mail"}</p>
          </div>
          <div className="image-container">
            <Image
              alt=""
              src={"/artwork_josefskatter2.png"}
              width={1528}
              height={2095}
            />
            <p>{"Josef's cats"}</p>
          </div>
        </div>
        <div className="portrait-image-container">
          <div className="image-container">
            <Image
              alt="The Pearl"
              src={"/artwork_The_Pearl.png"}
              width={1528}
              height={2161}
            />
            <p>{"The Pearl"}</p>
          </div>
          <div className="image-container">
            <Image
              alt="Not far away from us"
              src={"/artwork_Ikke_Langt_Borte.png"}
              width={1528}
              height={2161}
            />
            <p>{"Not far away from us"}</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Artwork;
