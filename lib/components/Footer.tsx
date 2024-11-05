import React from 'react';
import {FooterBG} from "@/public";

function Footer() {
    return (
        <>
            <div className={'h-[635px] w-full object-cover bg-cover bg-center px-[200px] py-[116px] text-white'}
                 style={{backgroundImage: `url(${FooterBG.src})`}}>
            <div>
                <p className={'text-[#FFBF34] text-[36px] my-0'}>Perfume</p>
                <p className={'mt-[26px] font-medium text-[24px]'}>Subscribe to Our Newsletter:</p>
                <p className={'max-w-[304px]'}>Receive Updates on New Arrivals and Special Promotions!</p>
                <form className={'flex'}>
                    <input className={'bg-[#1D1D1D] placeholder:text-[#403F3F] outline-none p-3 rounded-l-[10px]'} placeholder={'Your email here'}/>
                    <button className={'bg-[#FFBF34] p-3 font-medium rounded-r-[10px]'} type={'submit'}>Submit</button>
                </form>
                <div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
            </div>
        </>
    );
}

export default Footer;