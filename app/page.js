import Image from 'next/image'
import Marquee from '@/components/marquee';
import Container from '@/components/container';

export const metadata = {
  title: 'Nick M. Jones',
  description: 'Veteran product, UX, and graphic designer based in Providence.',
}
export default function Home() {
  return (
    <main>

      <Marquee />

      <Container>
        <h2 class="text-2xl font-bold text-center leading-tight text-rosePine-muted py-24">
          I'm a veteran product, UX, and graphic designer based in Providence (by way of NYC). Twenty+ years in the pixel mines. Dad, husband, musician, cook, camera operator, and next-life coffee shop owner.
        </h2>
      </Container>

      <Container>
        <div class="flex flex-col lg:flex-row text-rosePine-text p-24 gap-4">

          <div className="rounded-xl bg-rosePine-surface p-8 w-full">
            <h3 className="mb-4 text-base text-rosePine-iris">Writing</h3>
            <div className="mb-4 flex-col space-y-1">
              <a
                href="https://medium.com/design-bootcamp/listening-to-pavement-with-a-migraine-or-let-go-or-be-dragged-d3223a2bc6d6"
                target="_blank"
                rel="noreferrer"
              >
                Listening to Pavement with a migraine: or, “Let go or be dragged.”
              </a>
              <h4 className="text-sm text-[#6e6a86]">Medium - Oct. 2023</h4>
            </div>
            <div className="mb-4 flex-col space-y-1">
              <a
                href="https://medium.com/design-bootcamp/apples-dynamic-island-is-a-master-class-in-product-problem-solving-embracing-constraints-6e4e8ec00dc9"
                target="_blank"
                rel="noreferrer"
              >
                Apple’s ‘Dynamic Island’ is a master class in product problem
                solving & embracing constraints.
              </a>
              <h4 className="text-sm text-[#6e6a86]">Medium - Sept. 2022</h4>
            </div>
            <div className="mb-4 flex-col space-y-1">
              <a
                href="https://medium.com/pragmatic-ux/evolution-vs-revolution-and-the-zen-of-just-f-cking-starting-a807fab51647"
                target="_blank"
                rel="noreferrer"
              >
                “Evolution vs. Revolution” and the Zen of just f*cking starting
              </a>
              <h4 className="text-sm text-[#6e6a86]">Medium - Apr. 2018</h4>
            </div>
          </div>

          <div className="rounded-xl bg-rosePine-surface p-8 w-full">
            <h3 className="mb-4 text-base text-rosePine-iris">Music</h3>
            <p>
              I release ambient/electronic music under the name Glitch
              Ensemble&mdash;an effort to make music that isn't guitar-based, and
              that's more rooted in loops, drones, and atmosphere.
            </p>

            <div className="flex w-full flex-row items-center gap-6 py-4">
              <div className="w-44">Call It A Night - Single</div>
              <div className="text-sm text-[#6e6a86]">
                <a
                  href="https://music.apple.com/us/album/call-it-a-night-single/1707891572"
                  target="_blank"
                  rel="noreferrer"
                >
                  Apple
                </a>
              </div>
              <div className="text-sm text-[#6e6a86]">
                <a
                  href="https://open.spotify.com/album/0OaM9NakFZ7PjFI5LSJQ1f?si=MM0QLL3iTRismnmVaF1Zug"
                  target="_blank"
                  rel="noreferrer"
                >
                  Spotify
                </a>
              </div>
            </div>

            <div className="flex w-full flex-row items-center gap-6 py-4">
              <div className="w-44">Pretend Numbers EP</div>
              <div className="text-sm text-[#6e6a86]">
                <a
                  href="https://music.apple.com/us/album/pretend-numbers-ep/1703509006"
                  target="_blank"
                  rel="noreferrer"
                >
                  Apple
                </a>
              </div>
              <div className="text-sm text-[#6e6a86]">
                <a
                  href="https://open.spotify.com/album/5xus5iMkRSYd6tjS7EaKtx?si=HC0ksPCoREyDtKpIDdoVfA"
                  target="_blank"
                  rel="noreferrer"
                >
                  Spotify
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>

    </main>
  );
}
