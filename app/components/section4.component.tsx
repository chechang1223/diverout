'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import styles from './section4.module.css';
import dataPic from '/public/section4/data.svg';
import importPic from '/public/section4/import.svg';

export default function Section4() {
  const TOTAL_STEPS = 9;
  const [infoStyles, setInfoStyles] = useState({});
  const [step, setStep] = useState(1);
  const [percentage, setPercentage] = useState('0');
  const [imagePercentage, setImagePercentage] = useState('0');
  const backgroundRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  const imageWrapperRef = useRef<HTMLImageElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

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
      const stepLength = totalLength / TOTAL_STEPS;
      const current = scrollTop - backgroundPosition;
      if (totalLength >= current) {
        let currentStep = Math.floor(current / stepLength) + 1;
        let percentage = Math.ceil(
          ((current % (stepLength * 3)) * 100) / (stepLength * 3)
        );
        setStep(currentStep);
        setPercentage(percentage.toString() + '%');
        if (imageRef.current && imageWrapperRef.current) {
          if (currentStep <= 3) {
            setImagePercentage('0');
          } else if (currentStep > 3 && currentStep < 7) {
            setImagePercentage(
              Math.ceil(
                ((imageRef.current.getBoundingClientRect().height -
                  imageWrapperRef.current.getBoundingClientRect().height) *
                  percentage) /
                  100
              ).toString() + 'px'
            );
          } else {
            setImagePercentage('100%');
          }
        }
      }
    }
  };

  useEffect(() => {
    if (backgroundRef.current) {
    }

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
        className={
          styles.background +
          ' h-[1000vh] relative flex justify-center items-start'
        }
      >
        <div
          ref={infoRef}
          style={{ ...infoStyles }}
          className={
            'sticky max-w-[1200px] pl-[120px] pr-[50px] flex gap-[100px] top-0 overflow-hidden'
          }
        >
          <div>
            <div
              style={{ opacity: step > 2 ? '0' : '100' }}
              className="absolute ease-in-out duration-1000"
            >
              <Image src={dataPic} alt="image of data" />
              <Image
                className="relative -top-3"
                src={importPic}
                alt="image of import"
              />
            </div>
            <div
              ref={imageWrapperRef}
              style={{ transform: step > 2 ? 'none' : 'translateY(53%)' }}
              className="relative min-w-[346px] w-[346px] overflow-hidden rounded-3xl border-[7px] border-white/50 transition-transform duration-1000 ease-in-out"
            >
              <Image
                src="https://www.figma.com/file/tN781Kc4g3875JdU7xNoVf/image/f384e5f07d35341a1230fb2ca4eed5c68a597304"
                width={692}
                height={1498}
                alt="image of Auto data import"
              />
              <div
                style={{
                  left: step >= 4 ? '0' : '100%',
                }}
                className="absolute top-0 left-full transition-all duration-300 ease-in-out w-full"
              >
                <Image
                  ref={imageRef}
                  style={{
                    transform: 'translateY(-' + imagePercentage + ')',
                  }}
                  className="transition-transform duration-75 ease-linear"
                  src="https://www.figma.com/file/tN781Kc4g3875JdU7xNoVf/image/35f89dec94d2934273c5252a242166c31aedb0ef"
                  width={692}
                  height={3416}
                  alt="image of Diverse detailed dive memories"
                />
              </div>
              <Image
                style={{ left: step >= 7 ? '0' : '100%' }}
                className="absolute top-0 left-full transition-all duration-300 ease-in-out"
                src="https://www.figma.com/file/tN781Kc4g3875JdU7xNoVf/image/51c19e0174305078caedc7f5edf605e6fb3d2396"
                width={780}
                height={1688}
                alt="image of Auto data import"
              />
              <Image
                style={{ left: step >= 9 ? '0' : '100%' }}
                className="absolute top-0 left-full transition-all duration-300 ease-in-out"
                src="https://www.figma.com/file/tN781Kc4g3875JdU7xNoVf/image/0a6e84e2c47d510457f2e91c69c4396febae15bf"
                width={780}
                height={1688}
                alt="image of Auto data import"
              />
            </div>
          </div>
          <div className="flex items-center">
            <div className="space-y-8 text-white">
              <h2 className="font-poetsen-one  text-5xl leading-tight tracking-[1.44px]">
                Dive Log Management
              </h2>
              <ul className="space-y-8">
                <li className="relative">
                  <div
                    style={{ opacity: step >= 1 && step <= 3 ? 1 : 0 }}
                    className="w-1 h-[60px] absolute -left-4 rounded-[1px] bg-[#F2F2F3]/30 overflow-hidden"
                  >
                    <div
                      style={{ height: percentage }}
                      className="w-1 bg-[#F2F2F3]"
                    ></div>
                  </div>
                  <div
                    className={`space-y-2 transition-opacity ease-out duration-[400ms] ${
                      step >= 1 && step <= 3
                        ? 'opacity-100'
                        : 'opacity-30 hover:opacity-60'
                    }`}
                  >
                    <h3 className="font-poetsen-one text-2xl leading-tight tracking-[0.24px]">
                      Auto data import
                    </h3>
                    <p className="font-semibold leading-[1.4] opacity-80">
                      View an overview of dive types, buddies and landscape in
                      one place
                    </p>
                  </div>
                </li>
                <li className="relative">
                  <div
                    style={{ opacity: step >= 4 && step <= 6 ? 1 : 0 }}
                    className="w-1 h-[60px] absolute -left-4 rounded-[1px] bg-[#F2F2F3]/30 overflow-hidden"
                  >
                    <div
                      style={{ height: percentage }}
                      className="w-1 bg-[#F2F2F3]"
                    ></div>
                  </div>
                  <div
                    className={`space-y-2 transition-opacity ease-out duration-[400ms] ${
                      step >= 4 && step <= 6
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
                    style={{ opacity: step >= 7 ? 1 : 0 }}
                    className="w-1 h-[60px] absolute -left-4 rounded-[1px] bg-[#F2F2F3]/30 overflow-hidden"
                  >
                    <div
                      style={{ height: percentage }}
                      className="w-1 bg-[#F2F2F3]"
                    ></div>
                  </div>
                  <div
                    className={`space-y-2 transition-opacity ease-out duration-[400ms] ${
                      step >= 7 ? 'opacity-100' : 'opacity-30 hover:opacity-60'
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
