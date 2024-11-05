import React from 'react';
import Image from "next/image";
// @ts-ignore
import {Logo} from "@/public";
import { Links} from "@/lib/types/type";
import {SearchOutlined} from "@ant-design/icons";
import Link from "next/link";

function Navbar() {

    return (
        <div>
            <section className="flex items-center justify-between w-full wrapper mt-[51px]">
<Image src={Logo.src} alt="logo" width={85} height={76} />
                <div className="flex items-center gap-[91px]  ">
                    <div className={'flex gap-[51px] items-center'}>
                        {Links.map((link) => (<Link href={link.url} key={link.id} className="">
                           <p className={'text-lg font-bold '}> {link.name.toUpperCase()}</p>
                        </Link>))}
                    </div>
                    <SearchOutlined className={"text-2xl text-stone-600"}/>
                </div>
            </section>
        </div>
    );
}

export default Navbar;