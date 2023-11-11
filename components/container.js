export default function flexContainer({ children, screen }) {
  if (screen === true) {
    return (
      <div class="flex min-h-[85vh] min-w-full flex-col items-center justify-center md:flex-row">
        <div class="flex w-full flex-col items-center px-8 md:flex-row md:px-24 lg:max-w-6xl">
          {children}
        </div>
      </div>
    );
  } else {
    return (
      <div class="flex min-w-full flex-col items-center justify-center md:flex-row">
        <div class="flex w-full flex-col items-center px-8 md:flex-row md:px-24 lg:max-w-6xl">
          {children}
        </div>
      </div>
    );
  }
}
