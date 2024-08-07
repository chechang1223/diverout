import Image from 'next/image';
import appStorePic from '/public/appstore.svg';
import translationPic from '/public/translation.svg';

export default function NavBar() {
  return (
    <nav className="fixed top-0 w-full flex items-center justify-between px-8 z-10 h-[72px]">
      <h1>
        <a
          href="#"
          className="block w-[121px] h-8 bg-[url(/logo.svg)] indent-[101%] overflow-hidden text-wrap"
        >
          Diverout
        </a>
      </h1>
      <div className="flex items-center gap-8 text-white font-semibold leading-[1.4]">
        <p className="cursor-pointer">Partner Dashboard</p>
        <div className="cursor-pointer flex items-center gap-1.5">
          <Image src={translationPic} alt="image of translation" />
          <p>English</p>
        </div>
        <Image
          className="cursor-pointer"
          src={appStorePic}
          width={110}
          alt="image of apple store"
        />
      </div>
    </nav>
  );
}
