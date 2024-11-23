'use client'
import React, { useState } from 'react';
import Image from "next/image";
import {Logo} from "@/public";
import { Links} from "@/lib/types/type";
import Link from "next/link";
import { FiSearch } from "react-icons/fi";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const genericHamburgerLine = `h-1 w-6 my-1 rounded-full bg-black transition ease transform duration-300`;
  
    return (
        <div>
            <section className="flex items-center justify-between w-full wrapper mt-10 sm:mt-[51px]">
<Link href={'/'}><Image className='w-16 h-14 sm:w-[85px] sm:h-[76px]' priority={false} loading = 'lazy' src={Logo.src} alt="logo" width={85} height={76} /></Link>
                <div className="items-center gap-x-[91px] my-0 hidden sm:flex ">
                    <div className={'flex gap-x-[51px] my-0'}>
                        {Links.map((link) => (<Link href={link.url} key={link.id} className="">
<p className={'text-[18px] mb-0 font-bold '}> {link.name.toUpperCase()}</p>
                        </Link>))}
                    </div>
                    <FiSearch className={"text-[24px] text-stone-600"}/>

                </div>
                <button
      className="flex flex-col h-8 w-8 sm:hidden  border-black rounded justify-center items-center group"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div
        className={`${genericHamburgerLine} ${
          isOpen
            ? "rotate-45 translate-y-3 opacity-50 group-hover:opacity-100"
            : "opacity-50 group-hover:opacity-100"
        }`}
      />
      <div
        className={`${genericHamburgerLine} ${
          isOpen ? "opacity-0" : "opacity-50 group-hover:opacity-100"
        }`}
      />
      <div
        className={`${genericHamburgerLine} ${
          isOpen
            ? "-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100"
            : "opacity-50 group-hover:opacity-100"
        }`}
      />
    </button>
{isOpen && <div className='absolute flex sm:hidden text-center p-2  bg-slate-100 border rounded right-2 top-20  duration-300 transition-all'>
    <div className='flex flex-col gap-2'>{Links.map(link=><Link href={link.url} key={link.id}>
<p className={' mb-0 '}> {link.name.toUpperCase()}</p>
                        </Link>)}</div>
    </div>}
            </section>
        </div>
    );
}

export default Navbar;