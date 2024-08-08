'use client';

import Image from 'next/image';
import translationPic from '/public/translation.svg';
import searchPic from '/public/icon_search.svg';
import checkPic from '/public/icon_check.svg';
import { ChangeEvent, useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { Locale } from '../[lang]/dictionaries';

export default function Translation() {
  const { lang }: { lang: Locale } = useParams();
  const dictionaries = [
    { target: 'English', current: 'English', code: 'en' },
    { target: '繁體中文', current: 'Traditional Chinese', code: 'zh' },
  ];
  const [isOpened, setIsOpened] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [filteredDictionaries, setFilteredDictionaries] =
    useState(dictionaries);

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    setInputValue(event.target.value);
    setFilteredDictionaries(
      event.target.value
        ? dictionaries.filter(
            (dictionary) =>
              dictionary.current.includes(event.target.value) ||
              dictionary.target.includes(event.target.value)
          )
        : dictionaries
    );
  }

  return (
    <div className="relative">
      <div
        className={`${
          isOpened ? '' : 'hidden'
        } fixed bg-transparent w-screen h-screen`}
        onClick={() => setIsOpened(!isOpened)}
      ></div>
      <button
        className="flex items-center gap-1.5"
        onClick={() => setIsOpened(!isOpened)}
      >
        <Image src={translationPic} alt="image of translation" />
        <p>English</p>
      </button>
      <div
        className={`${
          isOpened ? '' : 'hidden'
        } absolute top-[calc(100%+4px)] right-0 rounded-xl overflow-hidden bg-white shadow-[0px_6px_20px_0px_rgba(0,_0,_0,_0.04),_0px_16px_100px_0px_rgba(0,_0,_0,_0.08)]`}
      >
        <ul className="overflow-y-auto text-[17px] text-black leading-[1.4] tracking-[0.34px] space-y-0.5 w-[285px] max-h-[400px] pb-1 px-3 ">
          <li className="sticky top-0 pb-2 pt-3 rounded-[4px] bg-white">
            <div className="relative text-base font-normal leading-none tracking-normal">
              <input
                type="text"
                className="peer appearance-none rounded-lg bg-[#7676801F] py-2 pr-4 pl-10 w-full"
                value={inputValue}
                onChange={(event) => handleInputChange(event)}
              />
              <Image
                src={searchPic}
                alt="image of search"
                className="absolute left-4 top-1/2 -translate-y-1/2 text-center"
              />
              <label
                className={`${
                  !!inputValue ? 'peer-valid:hidden' : ''
                } absolute left-10 top-1/2 -translate-y-1/2 text-[#AAAEB5]`}
              >
                Search
              </label>
            </div>
          </li>
          {filteredDictionaries.map((dictionary, index) => {
            return (
              <li
                key={index}
                className={`${
                  lang === dictionary.code
                    ? 'bg-[#0097AB]/10'
                    : 'hover:bg-[#7676801F]'
                } px-4 py-2 rounded-lg`}
              >
                <Link
                  className="cursor-pointer flex justify-between items-center"
                  href={`/${dictionary.code}`}
                >
                  <div className='space-y-0.5'>
                    <p>{dictionary.target}</p>
                    <p className="text-xs tracking-normal text-[#6F737A]">
                      {dictionary.current}
                    </p>
                  </div>
                  <Image
                    src={checkPic}
                    alt="image of check"
                    className={`${lang === dictionary.code ? 'block': 'hidden'}`}
                  />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
