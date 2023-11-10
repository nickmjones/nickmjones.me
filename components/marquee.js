  import React from "react";
  import Image from "next/image";
  import workpath from "../assets/wp.png";
  import Container from "@/components/container";
  import Button from "@/components/button";

  const Marquee = ({ children }) => {
    return (
      <Container screen>
        <div id="intro" className="flex flex-col lg:flex-row items-center py-8 gap-6 fader">

          <div class="w-full">
            <h1 className="w-full text-6xl lg:text-7xl line-clamp-2 text-rosePine-text font-bold mb-6">
              <span class="leading-tight">
                I make things people like.
              </span>
            </h1>
            <Button>About me</Button>
          </div>

          <div class="w-full">
            <Image
              src={workpath}
              width={680}
              height={585}
              alt="Workpath screenshot"
            />
          </div>

        </div>
      </Container>
    );
  };

  export default Marquee;
