import Image from "next/image";
import dribbbleLogo from "../assets/dribbble.png";
import mediumLogo from "../assets/medium.png";
import threadsLogo from "../assets/threads.png";
import figmaLogo from "../assets/figma.png";

export default function Icons() {
  return(
    <ul className="flex flex-row gap-4 md:text-lg">
      <li>
        <Image
          src={dribbbleLogo}
          alt="Dribbble logo"
          width={32}
          height={32}
        />
      </li>
      <li>
        <Image src={figmaLogo} alt="Figma logo" width={32} height={32} />
      </li>
      <li>
        <Image
          src={threadsLogo}
          alt="Threads logo"
          width={32}
          height={32}
        />
      </li>
      <li>
        <Image
          src={mediumLogo}
          alt="Medium logo"
          width={32}
          height={32}
        />
      </li>
    </ul>
  );
};