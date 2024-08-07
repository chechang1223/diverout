import Image from 'next/image';
import logoPic from '/public/logo-clean.svg';

export default function Section5() {
  return (
    <div className="h-screen bg-gradient-linear bg-center bg-cover bg-no-repeat flex justify-center items-center">
      <div className="max-w-[520px] space-y-4">
        <div className="flex flex-col space-y-4 pb-8">
          <div className="flex justify-center">
            <Image src={logoPic} alt="image of logo"></Image>
          </div>
          <p className="text-white font-poetsen-one text-5xl leading-tight tracking-[1.44] text-center text-balance">
            Become our Dive Shop <span className="text-[#00C9E4]">Partner</span>
          </p>
        </div>
        <div className="flex justify-center">
          <a
            className="opacity-80 text-2xl leading-[1.4] font-black py-2.5 px-[30px] rounded-xl bg-white shadow-[-3px_0px_0px_0px_#00C9E4_inset,_3px_0px_0px_0px_#00C9E4_inset,_0px_6px_24px_0px_rgba(0,_201,_228,_0.50)]"
            href=""
          >
            Join Now
          </a>
        </div>
      </div>
    </div>
  );
}
