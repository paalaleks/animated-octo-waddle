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
          <p>&quot; Meeting trials" &quot;</p>
        </div>
        <div className="image-container">
          <Image
            alt="Examining scriptures carefully"
            src={"/artwork_Study_4.png"}
            width={1528}
            height={1080}
          />
          <p>&quot; Examining scriptures carefully" &quot;</p>
        </div>
        <div className="image-container">
          <Image
            alt="Little delights; my favorite TV-show is on"
            src={"/artwork_little_delights.png"}
            width={1528}
            height={1080}
          />
          <p>&quot; Little delights; my favorite TV-show is on" &quot;</p>
        </div>
        <div className="image-container">
          <Image
            alt="We have to continue onwards"
            src={"/artwork_detmågåfremmover.png"}
            width={1528}
            height={1023}
          />
          <p>&quot; We have to continue onwards" &quot;</p>
        </div>
        <div className="portrait-image-container">
          <div className="image-container">
            <Image
              alt="GPS navigated airbaloon mail"
              src={"/artwork_airbaloon.png"}
              width={1528}
              height={2095}
            />
            <p>&quot; GPS navigated airbaloon mail" &quot;</p>
          </div>
          <div className="image-container">
            <Image
              alt=""
              src={"/artwork_josefskatter2.png"}
              width={1528}
              height={2095}
            />
            <p>&quot; Josef's cats" &quot;</p>
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
            <p>&quot; The Pearl" &quot;</p>
          </div>
          <div className="image-container">
            <Image
              alt="Not far away from us"
              src={"/artwork_Ikke_Langt_Borte.png"}
              width={1528}
              height={2161}
            />
            <p>&quot; Not far away from us" &quot;</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Artwork;
