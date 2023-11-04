const Header = ({ children }) => {
  return (
    <header className="flex flex-row justify-between items-center text-slate-600 py-8 px-8 md:px-24 bg-slate-50">
      <div>
        <a href="/">
          <svg
            width="37"
            height="37"
            viewBox="0 0 37 37"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="18.2422" cy="18.8721" r="18.1279" fill="#0040DC" />
            <path
              d="M7.90527 24.0405L18.2421 13.7037V24.0405L28.5789 13.7037"
              stroke="#FCFCFC"
              stroke-width="3.7563"
              stroke-linecap="round"
            />
          </svg>
        </a>
      </div>
    </header>
  );
};

export default Header;
