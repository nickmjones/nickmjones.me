export default function flexContainer({children, screen}) {
  if (screen === true) {
    return(
      <div class="flex flex-col md:flex-row min-w-full items-center justify-center min-h-[85vh]">
        <div class="w-full md:max-w-6xl flex flex-col md:flex-row items-center px-8 md:px-24">
          {children}
        </div>
      </div>
    );
    } else {
      return(
        <div class="flex flex-col md:flex-row min-w-full items-center justify-center">
          <div class="w-full md:max-w-6xl flex flex-col md:flex-row items-center px-8 md:px-24">
            {children}
          </div>
        </div>
      );
    }
}