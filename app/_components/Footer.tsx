import React from 'react';
import {FooterBG} from "@/public";
import { InstagramOutlined, TwitterOutlined} from "@ant-design/icons";
import {fCategories, fCustomers, fPages, fShopping} from "@/lib/types/type";
import Link from "next/link";
import { CgFacebook  } from "react-icons/cg";
import { GrLinkedinOption,GrTwitter,GrInstagram,GrFacebook } from "react-icons/gr";
function Footer() {
    return (
        <>
            <div className={'sm:h-[635px] w-full object-cover bg-cover bg-center sm:px-[200px] sm:py-[116px] text-white'}
                 style={{backgroundImage: `url(${FooterBG.src})`}}>
                <div className={'flex flex-col sm:flex-row sm:justify-between sm:items-center sm:gap-[140px]'}>
                    <div className='p-4'> 
                        <p className={'text-[#FFBF34] text-[20px] sm:text-[36px] my-0'}>Perfume</p>
                        <p className={'sm:mt-[26px] mt-4 font-medium sm:text-[24px]'}>Subscribe to Our Newsletter:</p>
                        <p className={'max-w-[304px]'}>Receive Updates on New Arrivals and Special Promotions!</p>
                        <form className={'flex'}>
                            <input
                                className={'bg-[#1D1D1D] placeholder:text-[#403F3F] outline-none p-3 rounded-l-[10px]'}
                                placeholder={'Your email here'}/>
                            <button className={'bg-[#FFBF34] p-3 font-medium rounded-r-[10px]'} type={'submit'}>Submit
                            </button>
                        </form>
                        <div className={'flex mt-[29px] gap-x-[15px]'}>
                            <div className={'rounded-full  px-[9px] pt-[8.5px] pb-[7px] bg-[#1DA1F2]'}>
                                <GrTwitter className={'text-[text-white] text-lg'}/>
                            </div>
                            <div className={'rounded-full  px-[9px] pt-[8.5px] pb-[7px] bg-[#3B5998]'}>
                                <CgFacebook   className={'text-[text-white] text-lg'}/>
                            </div>
                            <div className={'rounded-full  px-[9px] pt-[8.5px] pb-[7px] bg-[#0077B5]'}>
                                <GrLinkedinOption  className={'text-[text-white] text-lg'}/>
                            </div>
                            <div className={'rounded-full  px-[9px] pt-[8.5px] pb-[7px] bg-[#C13584]'}>
                                <GrInstagram className={'text-[text-white] text-lg'}/>
                            </div>
                        </div>
                    </div>
                    <div className={'flex  flex-wrap sm:flex-row  sm:justify-between sm:flex-1'}>
                    <div className='p-4 sm:p-0'>
                        <p className={'font-bold'}>Categories</p>
                        <div className={'flex flex-col gap-y-[10px]'}> {fCategories.map((data) => (
                            <Link href={data.path} key={data.id}>{data.name}</Link>))}
                        </div>
                    </div>
                    <div className='p-4 sm:p-0'>
                        <p className={'font-bold'}>Shopping</p>
                        <div className={'flex flex-col gap-y-[10px]'}> {fShopping.map((data) => (
                            <Link href={data.path} key={data.id}>{data.name}</Link>))}
                        </div>
                    </div>
                    <div className='p-4 sm:p-0'>
                        <p className={'font-bold'}>Customer care</p>
                        <div className={'flex flex-col gap-y-[10px]'}> {fCustomers.map((data) => (
                            <Link href={data.path} key={data.id}>{data.name}</Link>))}
                        </div>
                    </div>
                    <div className='p-4 sm:p-0'>
                        <p className={'font-bold'}>Pages</p>
                        <div className={'flex flex-col gap-y-[10px]'}> {fPages.map((data) => (
                            <Link href={data.path} key={data.id}>{data.name}</Link>))}
                        </div>
                    </div>
                    </div>
                </div>
               <div className={'flex justify-center items-center mt-8 md:mt-12  '}><hr className={'h-px border-0 bg-[#333333] w-[80%]'}/></div>
                <div><p className={'text-center text-[11px] py-8 md:py-12 '}>&copy; {new Date(Date.now()).getFullYear()} Perfume. All rights reserved </p></div>
            </div>
        </>
    );
}
export default Footer;