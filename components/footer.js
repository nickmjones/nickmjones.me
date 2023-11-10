const Footer = ({ children }) => {
  return(
    <footer className="px-8 py-8 md:py-16 md:px-24 text-sm text-slate-500 bg-[#191724] text-center">
      <ul>
        <li>Copyright &copy; 2023 Nick M. Jones</li>
        <li class="text-xs">All rights reserved</li>
        <li class="text-xs">Made with <span class="text-rosePine-love">&#9829;</span> and also Javascript.</li>
      </ul>
    </footer>
  )
}

export default Footer