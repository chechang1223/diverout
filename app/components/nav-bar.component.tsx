import Image from 'next/image';
import appStorePic from '/public/appstore.svg';
import Translation from './translation.component';

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
        <a href="">
          <p>Partner Dashboard</p>
        </a>
        <Translation />
        <a
          href="https://apps.apple.com/tw/app/diverout-scuba-freediving/id6477954849"
          target="_blank"
        >
          <Image
            className="cursor-pointer"
            src={appStorePic}
            width={110}
            alt="image of apple store"
          />
        </a>
      </div>
    </nav>
  );
}
