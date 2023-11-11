import Container from "@/components/container";

const Footer = ({ children }) => {
  return (
    <footer className="flex flex-row justify-center bg-rosePine-surface">
      <div class="md:py24 flex w-full flex-col items-center justify-between px-8 py-8 text-rosePine-muted md:flex-row md:px-24 lg:max-w-6xl">
        <ul class="w-full">
          <li>Copyright &copy; 2023 Nick M. Jones</li>
        </ul>

        <ul class="flex w-full flex-row justify-end gap-4">
          <li>Threads</li>
          <li>Dribbble</li>
          <li>Figma</li>
          <li>Medium</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
