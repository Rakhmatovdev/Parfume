import React from 'react';
import Image from "next/image";
// @ts-ignore
import {Logo} from "@/public";
import { Links} from "@/lib/types/type";
import { SearchOutlined} from "@ant-design/icons";
import Link from "next/link";

function Navbar() {

    return (
        <div>
            <section className="flex items-center justify-between w-full wrapper mt-[51px]">
<Image src={Logo.src} alt="logo" width={85} height={76} />
                <div className="flex items-center gap-x-[91px] my-0 ">
                    <div className={'flex gap-x-[51px] my-0'}>
                        {Links.map((link) => (<Link href={link.url} key={link.id} className="">
                           <p className={'text-[18px] mb-0 font-bold '}> {link.name.toUpperCase()}</p>
                        </Link>))}
                    </div>
                    <SearchOutlined className={"text-[24px]  text-stone-600"}/>

                </div>
            </section>
        </div>
    );
}

export default Navbar;