import Image from "next/image";
import menu from "../assets/menu.svg";
import logo from "@/assets/logo.svg";
import Container from "@/components/container";

const Header = ({ children }) => {
  return (
    <Container>
      <div class="w-full flex flex-row justify-between items-center py-6">

        <div class="flex flex-row gap-2 items-center">
          <Image
            src={logo}
            height={32}
            width={32}
            alt="Logo"
          />
          <h1 class="text-rosePine-text">Nick Jones</h1>
        </div>

        <ul class="hidden lg:flex lg:flex-row text-rosePine-rose text-xs gap-4">
          <li>Notes</li>
          <li>Contact</li>
        </ul>

        <ul class="lg:hidden">
          <Image
            src={menu}
            width={24}
            height={16}
            alt="Menu button"
          />          
        </ul>

      </div>
    </Container>
  );
};

export default Header;
