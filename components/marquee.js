import React from "react";
import Button from "@/components/button";
import Container from '@/components/container'
import Image from "next/image";
import ef from '../assets/ef.png';
import tile from '../assets/tplp.png';

const Marquee = ({ children }) => {
  return (
    <Container screen>
      <div id="intro" className="flex flex-col-reverse lg:flex-row items-center py-8 gap-12 fader flex-">

        <div class="w-full">
          <h1 className="w-full text-6xl lg:text-7xl text-rosePine-text font-bold mb-4">
            <span class="leading-tighter md:leading-tight">
              I make things <br/>people like.
            </span>
          </h1>
          <h2 class="text-rosePine-muted mb-6 text-xl leading-normal tracking-normal">
            Websites, apps, and other things that help people get stuff done—and feel at ease while they're at it.
          </h2>
          <Button>About me</Button>
        </div>

        <div class="w-full">
          <Image
            src={tile}
          />
        </div>

      </div>
    </Container>  
  );
};

  export default Marquee;
