'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

export default function Section2() {
  const [infoStyles, setInfoStyles] = useState({});
  const [step, setStep] = useState(1);
  const [percentage, setPercentage] = useState('0');
  const backgroundRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (!backgroundRef.current) {
      return;
    }
    const scrollTop = window.scrollY;
    const backgroundPosition =
      backgroundRef.current.getBoundingClientRect().top + window.scrollY;
    const vh = window.innerHeight;

    console.debug(backgroundPosition);

    if (
      scrollTop >= backgroundPosition &&
      scrollTop <=
        backgroundPosition +
          backgroundRef.current.getBoundingClientRect().height -
          vh
    ) {
      const totalLength =
        backgroundRef.current.getBoundingClientRect().height - vh;
      const stepLength = totalLength / 3;
      const current = scrollTop - backgroundPosition;
      if (totalLength >= current) {
        setStep(Math.floor(current / stepLength) + 1);
        setPercentage(
          Math.ceil(((current % stepLength) * 100) / stepLength).toString() +
            '%'
        );
      }
    }
  };

  useEffect(() => {
    if (infoRef.current) {
      const divHeight = infoRef.current.getBoundingClientRect().height;
      const vh = window.innerHeight;

      if (vh > divHeight) {
        const paddingTop = (vh - divHeight) / 2;
        setInfoStyles({
          paddingTop: `${paddingTop}px`,
          paddingBottom: `${paddingTop}px`,
          // top: `${paddingTop}px`,
        });
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [infoRef]);

  return (
    <div className="relative">
      <div
        ref={backgroundRef}
        className="bg-fixed h-[400vh] bg-gradient-radial bg-center bg-contain bg-no-repeat relative flex justify-center items-start"
      >
        <div
          ref={infoRef}
          style={{ ...infoStyles }}
          className={
            'sticky max-w-[1200px] pl-[120px] pr-[50px] flex gap-[100px] top-0'
          }
        >
          <div className="relative min-w-[346px] w-[346px] overflow-hidden rounded-3xl border-[7px] border-white/50">
            <Image
              src="https://www.figma.com/file/tN781Kc4g3875JdU7xNoVf/image/9ad8e4357c7839a3e72698c631cb630b5e41a274"
              width={780}
              height={1688}
              alt="image of Discover diving news"
            />
            <Image
              style={{ left: step === 2 || step === 3 ? '0' : '100%' }}
              className="absolute top-0 left-full transition-all duration-1000 ease-in-out"
              src="https://www.figma.com/file/tN781Kc4g3875JdU7xNoVf/image/0a78752ba183a6b3b51f5f75afa2560c01faf5ea"
              width={780}
              height={1688}
              alt="image of Explore dive sites"
            />
            <Image
              style={{ top: step === 3 ? '5%' : '100%' }}
              className="absolute top-full transition-all duration-1000 ease-in-out"
              src="https://www.figma.com/file/tN781Kc4g3875JdU7xNoVf/image/13ace06cfb3254909ff1c6aee4ac4f3c3252ab0e"
              width={692}
              height={1420}
              alt="image of Comments & Ratings"
            />
          </div>
          <div className="flex items-center">
            <div className="space-y-8 text-white">
              <h2 className="font-poetsen-one text-5xl leading-tight tracking-[1.44px]">
                Diving Discovery
              </h2>
              <ul className="space-y-8">
                <li className="relative">
                  <div
                    style={{ opacity: step === 1 ? 1 : 0 }}
                    className="w-1 h-[60px] absolute -left-4 rounded-[1px] bg-[#F2F2F3]/30 overflow-hidden"
                  >
                    <div
                      style={{ height: percentage }}
                      className="w-1 bg-[#F2F2F3]"
                    ></div>
                  </div>
                  <div
                    className={`space-y-2 transition-opacity ease-out duration-[400ms] ${
                      step === 1
                        ? 'opacity-100'
                        : 'opacity-30 hover:opacity-60'
                    }`}
                  >
                    <h3 className="font-poetsen-one text-2xl leading-tight tracking-[0.24px]">
                      Discover diving news
                    </h3>
                    <p className="font-semibold leading-[1.4] opacity-80">
                      Records of diving buddies from around the world are
                      compiled in this collection. You can find all about your
                      fellow divers right here.
                    </p>
                  </div>
                </li>
                <li className="relative">
                  <div
                    style={{ opacity: step === 2 ? 1 : 0 }}
                    className="w-1 h-[60px] absolute -left-4 rounded-[1px] bg-[#F2F2F3]/30 overflow-hidden"
                  >
                    <div
                      style={{ height: percentage }}
                      className="w-1 bg-[#F2F2F3]"
                    ></div>
                  </div>
                  <div
                    className={`space-y-2 transition-opacity ease-out duration-[400ms] ${
                      step === 2
                        ? 'opacity-100'
                        : 'opacity-30 hover:opacity-60'
                    }`}
                  >
                    <h3 className="font-poetsen-one text-2xl leading-tight tracking-[0.24px]">
                      Explore dive sites
                    </h3>
                    <p className="font-semibold leading-[1.4]">
                      You can easily locate dive sites and shops in your
                      vicinity by using the map view feature. This allows you
                      plan your diving adventures conveniently.
                    </p>
                  </div>
                </li>
                <li className="relative">
                  <div
                    style={{ opacity: step === 3 ? 1 : 0 }}
                    className="w-1 h-[60px] absolute -left-4 rounded-[1px] bg-[#F2F2F3]/30 overflow-hidden"
                  >
                    <div
                      style={{ height: percentage }}
                      className="w-1 bg-[#F2F2F3]"
                    ></div>
                  </div>
                  <div
                    className={`space-y-2 transition-opacity ease-out duration-[400ms] ${
                      step === 3
                        ? 'opacity-100'
                        : 'opacity-30 hover:opacity-60'
                    }`}
                  >
                    <h3 className="font-poetsen-one text-2xl leading-tight tracking-[0.24px]">
                      Comments & Ratings
                    </h3>
                    <p className="font-semibold leading-[1.4]">
                      You can see the comments & rating about a dive site / shop
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
