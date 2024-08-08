import Image from 'next/image';
import appStorePic from '/public/appstore.svg';
import usersPic from '/public/section1/users.svg';
import placesPic from '/public/section1/places.svg';
import postsPic from '/public/section1/posts.svg';
import { getDictionary, Locale } from '../[lang]/dictionaries';
import DOMPurify from 'isomorphic-dompurify';

export default async function Section1({ lang }: { lang: Locale }) {
  const dict = await getDictionary(lang);
  
  return (
    <div className="h-screen bg-[url('https://www.figma.com/file/tN781Kc4g3875JdU7xNoVf/image/1cf1ee5e13e11cfd1202c52aec571f52275fc33d')] bg-center bg-cover bg-no-repeat flex items-center justify-center">
      <div className="max-w-[880px] space-y-12">
        <div className="text-white text-center flex flex-col gap-6 pb-6">
          <h2
            className="text-[64px] leading-[1.15] tracking-[1.92px] font-poetsen-one"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(dict.section1.title, { USE_PROFILES: { html: true } }),
            }}
          ></h2>
          <p className="text-center text-lg font-medium leading-[1.4]">
            {dict.section1.description}
          </p>
        </div>
        <div className="flex items-center justify-center">
          <a
            href="https://apps.apple.com/tw/app/diverout-scuba-freediving/id6477954849"
            target="_blank"
          >
            <Image
              className="cursor-pointer"
              src={appStorePic}
              width={210}
              alt="image of apple store"
            />
          </a>
        </div>
        <ul className="flex items-center justify-center gap-5">
          <li className="rounded-[20px] border border-black/20 bg-gradient-to-b from-black/[.24] to-black/[.42] shadow-[0px_12px_24px_0px_rgba(0,_0,_0,_0.15)] backdrop-blur-[5px]">
            <div className="flex justify-center items-start py-5 px-[30px] gap-[15px]">
              <Image
                className="cursor-pointer"
                src={usersPic}
                width={48}
                alt="image of users"
              />
              <ul className="text-white opacity-80">
                <li className="font-poetsen-one text-xl leading-[1.4]">
                  10,000+
                </li>
                <li className="text-sm font-medium leading-[1.4]">Users</li>
              </ul>
            </div>
          </li>
          <li className="rounded-[20px] border border-black/20 bg-gradient-to-b from-black/[.24] to-black/[.42] shadow-[0px_12px_24px_0px_rgba(0,_0,_0,_0.15)] backdrop-blur-[5px]">
            <div className="flex justify-center items-start py-5 px-[30px] gap-[15px]">
              <Image
                className="cursor-pointer"
                src={placesPic}
                width={48}
                alt="image of places"
              />
              <ul className="text-white opacity-80">
                <li className="font-poetsen-one text-xl leading-[1.4]">
                  10,000+
                </li>
                <li className="text-sm font-medium leading-[1.4]">Places</li>
              </ul>
            </div>
          </li>
          <li className="rounded-[20px] border border-black/20 bg-gradient-to-b from-black/[.24] to-black/[.42] shadow-[0px_12px_24px_0px_rgba(0,_0,_0,_0.15)] backdrop-blur-[5px]">
            <div className="flex justify-center items-start py-5 px-[30px] gap-[15px]">
              <Image
                className="cursor-pointer"
                src={postsPic}
                width={48}
                alt="image of posts"
              />
              <ul className="text-white opacity-80">
                <li className="font-poetsen-one text-xl leading-[1.4]">
                  100,000+
                </li>
                <li className="text-sm font-medium leading-[1.4]">Posts</li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
