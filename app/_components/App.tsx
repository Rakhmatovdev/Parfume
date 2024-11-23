'use client'
import { Articles } from "@/lib/types/type";
import { HeroImg, SaleBG, values, ValuesBG } from "@/public";
import Hero1 from "../../public/images/hero1.png"
import Hero2 from "../../public/images/hero2.png"
import {
    InstagramOutlined, LeftOutlined, RightOutlined,
    TwitterOutlined
} from "@ant-design/icons";
import Image from "next/image";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { getCollections, getProducts } from "@/lib/services/service";
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import {CgFacebook} from "react-icons/cg";

function App() {
  

    const {data} = useQuery({ queryKey: ['todos'], queryFn: getProducts})
    const { data: Collections } = useQuery({
        queryKey: ['categories'],
        queryFn: getCollections
      });
      
    return (
        <div>

            <section>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between wrapper mt-10 sm:mt-0">
                    <div className="flex sm:flex-col sm:gap-y-[43px] gap-x-2 sm:gap-x-2">
                        <TwitterOutlined className="sm:-rotate-90 text-2xl "/>
                        <CgFacebook className="sm:-rotate-90 text-2xl"/>
                        <InstagramOutlined className="sm:-rotate-90 text-2xl"/>
                    </div>
                    <div>
                        <p className="sm:text-[15px] font-semibold mt-4 sm:mt-0">WRIST WATCH, 2018</p>
                        <p className="sm:text-[70px] font-bold text-[24px] leading-[50px] ">{"PerFume".toUpperCase()}</p>
                        <div className="flex flex-col sm:flex-row sm:gap-x-[56px]">
                            <p className="sm:text-[15px] font-semibold">Name of Stakeholder</p>
                            <div className='flex flex-col gap-y-[4px] text-[#4B4B4B]'>
                                <p className={'sm:text-[15px] font-semibold'}>ABOUT</p>
                                <p className={'w-[308px] text-[14px]'}>Introducing &quot;Titanic Elegance,&quot; a perfume
                                    inspired by the iconic movie Titanic. Just like the engine telegraph in the Titanic,
                                    this fragrance controls the essence of elegance and sophistication, guiding you
                                    through your day with grace and style.</p>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <Image className={"w-[200px] h-[200px] sm:w-[430px] sm:h-[648px]"} src={Hero1.src} alt="Hero 1" width={430} height={648} />
                        <Image src={Hero2.src} alt="Hero 1" width={328} height={494}
                               className="absolute bottom-0 left-24 sm:bottom-10 sm:left-[247px] -z-10 w-[200px] h-[200px] sm:w-[328px] sm:h-[494px]"/>
                    </div>
                    <div className="sm:flex flex-col  sm:items-center hidden sm:gap-y-[150px] sm:translate-x-8">
                        <div className="flex justify-end items-end "><p
                            className="rotate-90 text-[15px] text-[#484848]">
                            StakeHolder Name
                        </p></div>
                        <div className="rotate-90 w-[70px] h-[2px] bg-[#A0A0A0]"/>
                    </div>
                </div>

            </section>
            <section>
                <div className="flex mt-10 items-center sm:justify-between w-full wrapper text-[#535353]">
                    <div className={'flex sm:gap-x-[143px] w-full justify-between items-center sm:justify-start sm:items-start  '}>
                        <p>01</p>
                        <div>
                            <LeftOutlined className={'cursor-pointer'}/>
                            <RightOutlined className={'cursor-pointer'}/>
                        </div>
                    </div>
                    <div className={'sm:flex hidden'}>{"Parfume".toUpperCase()}</div>
                </div>
            </section>
            <section>
                <div className="flex sm:items-center flex-col sm:flex-row sm:justify-between w-full sm:h-[731px] mt-10 sm:mt-[142px]"
                     style={{backgroundImage: `url(${ValuesBG.src})`}}>
                    <div className={'sm:px-[96px] sm:py-[79px] px-2 flex flex-col sm:flex-row sm:justify-between sm:gap-x-48 items-center text-[#FDFDFD]'}>
                       <div> <Image className={'rounded-3xl'} src={values.src} alt={'value hero'} width={670} height={573}/></div>
                        <div className={''}>
                            <p className={'sm:text-[50px] text-[20px] mt-4 sm:mt-0'}>Our Values</p>
                            <p className={'sm:text-[20px] text-sm max-w-[588px] leading-6 '}>At Local Face, our perfume retail store is built on a foundation of passion and
                                authenticity. We believe in celebrating the individuality of every customer, providing a
                                diverse collection of scents that resonate with their unique personality and style. Our
                                dedicated team of fragrance enthusiasts is committed to creating a welcoming and
                                inclusive environment, where connections are forged, and inspiration thrives.
<br/>
<br/>
                                Embracing sustainability and continuous learning, Local Face strives to be more than
                                just a shopping destination; we are a community that inspires and empowers individuals
                                on their fragrance journey.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="flex flex-col text-[20px] sm:flex-row sm:items-center sm:justify-between w-full wrapper sm:mt-[177px] pt-10 px-2 sm:px-[100px] sm:pb-[144px]">
                    <div>
                        <p className={'sm:text-[50px] text-[#C78800] font-semibold max-w-[746px]'}>Elevate Your Spirit with Victory Scented Fragrances!</p>
                        <p className={'max-w-[530px]  sm:text-[24px]'}>Shop now and embrace the sweet smell of victory with Local Face.
                        </p>
                    </div>
                    <Image className={'rounded-[40px]'} src={HeroImg.src} alt={"Hero image"} width={714} height={444}/>
                </div>
            </section>

            <section>
                <div className="wrapper">
                <p className={'sm:center-text text-2xl font-bold mt-10'}>Best selling products</p>
                    <Swiper
                        className=" sm:pt-24   rounded-xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 sm:gap-11"
                        spaceBetween={50}
                        slidesPerView={1}
                        breakpoints={{
                            640: {slidesPerView: 2, spaceBetween: 20},
                            768: {slidesPerView: 4, spaceBetween: 30},
                            1024: {slidesPerView: 5, spaceBetween: 40},
                        }}
                    >
                        {data
                            ? Array(20).fill(data?.results).flat().slice(0, 20).map((product, id) => (
                                <SwiperSlide key={id} className={'bg-black  rounded-2xl w-[310px]'}>
                                    <Link href={`products/${product.id}`}
                                          className="  2xl:h-[405px] h-full rounded-2xl text-white cursor-pointer">
                                        <Image
                                            className="h-[270px] w-full object-cover rounded-t-2xl sm:w-[310px] 2xl:h-[310px]"
                                            src={product.images?.[0]?.images || '/placeholder-image.jpg'}
                                            alt={product.title_ru || 'Product image'}
                                            width={310}
                                            height={310}
                                        />
                                        <p className="pt-[14px] text-center text-[20px] leading-none my-0">{product.title_en || 'No Title'}</p>
                                        <div className="flex justify-center items-center gap-x-1 mt-2">
                                            <p className="text-[#FFBF34]">${product.price}</p>
                                            <p>{product.description_ru || 'No description available'}</p>
                                        </div>
                                    </Link>
                                </SwiperSlide>
                            ))

                            :<div className={'  rounded-xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 sm:gap-11'}>{Array(5).fill(null).map((_, id) => (
                                <div key={id} className="h-[350px] 2xl:h-[405px] bg-gray-300 rounded-2xl animate-pulse">
                                    <div className="h-[260px] bg-gray-400 w-full rounded-t-2xl"></div>
                                    <div className="h-[20px] bg-gray-400 mt-4 mx-auto w-[70%] rounded"></div>
                                    <div className="h-[20px] bg-gray-400 mt-2 mx-auto w-[50%] rounded"></div>
                                </div>
                            ))}</div> }
                    </Swiper>
                </div>
            </section>
            <section>
                <div className={'sm:pt-[268px] pt-10 '}>
                    <p className={'sm:center-tex text-xl font-bold px-2 sm:px-0'}>Our Collections</p>
              {Collections?.results && <><div className={'flex gap-x-2 sm:gap-x-[46px]'}>
               <div className={'relative'}><p className={'absolute text-[8px] sm:text-[24px] line-clamp-1 font-medium text-white bottom-0 left-2 sm:left-10'}>{Collections.results[0].title_en}</p> <Image className={'object-cover  h-full'} src={Collections.results[0].icon} alt={Collections.results[0].title_en} width={802} height={460}/></div>
               <div className={'relative'}><p className={'absolute text-[8px] sm:text-[24px] line-clamp-1 font-medium text-white bottom-0 left-2 sm:left-10'}>{Collections.results[1].title_en}</p> <Image className={'object-cover  h-full'} src={Collections.results[1].icon} alt={Collections.results[1].title_en} width={1072} height={460}/></div>
               </div>
                    <div className={'flex sm:gap-[46px] gap-2 sm:pt-[46px] pt-2'}>
                        <div className={'relative'}><p className={'absolute text-[8px] sm:text-[24px] line-clamp-1 font-medium text-white bottom-0 left-2 sm:left-10'}>{Collections.results[2].title_en}</p> <Image className={'object-cover  h-full'} src={Collections.results[2].icon} alt={Collections.results[2].title_en} width={889} height={480}/></div>
                        <div className={'relative'}><p className={'absolute text-[8px] sm:text-[24px] line-clamp-1 font-medium text-white bottom-0 left-2 sm:left-10'}>{Collections.results[3].title_en}</p> <Image className={'object-cover  h-full w-full'} src={Collections.results[3].icon} alt={Collections.results[3].title_en} width={974} height={480}/></div>

                    </div>
                    <div className={'flex sm:gap-[46px]  gap-2 sm:pt-[46px] pt-2'}>
                        <div className={'relative'}><p className={'absolute text-[8px] sm:text-[24px] line-clamp-1 font-medium text-white bottom-0 left-2 sm:left-10'}>{Collections.results[4].title_en}</p> <Image className={'object-cover  h-full'} src={Collections.results[4].icon} alt={Collections.results[4].title_en} width={555} height={480}/></div>
                        <div className={'relative'}><p className={'absolute text-[8px] sm:text-[24px] line-clamp-1 font-medium text-white bottom-0 left-2 sm:left-10'}>{Collections.results[5].title_en}</p> <Image className={'object-cover  h-full'} src={Collections.results[5].icon} alt={Collections.results[5].title_en} width={555} height={480}/></div>
                        <div className={'relative'}><p className={'absolute text-[8px] sm:text-[24px] line-clamp-1 font-medium text-white bottom-0 left-2 sm:left-10'}>{Collections.results[6].title_en}</p> <Image className={'object-cover  h-full w-full'} src={Collections.results[6].icon} alt={Collections.results[6].title_en} width={555} height={480}/></div>
                    </div></>}
                </div>
            </section>

            <section>
                <div className={'sm:mt-[120px] mt-10 w-full sm:h-[866px] bg-cover bg-center px-2 sm:px-0'} style={{backgroundImage:`url(${SaleBG.src})`}}>
<div className={'max-w-[605px] sm:pt-[227px] pt-10 sm:pl-[96px] text-white'}>
    <p className={'sm:text-[50px] font-medium'}>Perfume Year-End Sale! Up to 50% OFF</p>
    <p className={'sm:text-[20px] font-light leading-6 text-sm'}>Discover an exquisite collection of premium perfumes at unbelievable prices during our exclusive Perfume Sale!</p>
    <button className={' sm:px-[70.5px] sm:py-[14px] mb-10 sm:mb-0 px-10 py-3 rounded-[10px] font-semibold italic bg-[#FFBF34]'}>Know More</button>
</div>
                </div>
            </section>

            <section>
                <div className={'sm:pt-[120px] pt-10 pb-10 sm:pb-20 wrapper'}>
                    <p className={'sm:center-text text-xl font-bold px-2 my-0 sm:px-0'}>Latest Articles</p>
                    <div className={'sm:pt-[100px] pt-9 flex flex-col sm:flex-row sm:gap-x-[76px]'}>
                        {Articles.map(article => (<div key={article.id} className={'sm:w-[375px] sm:h-[712px] px-2 sm:px-0 mt-10 sm:mt-0'}>
             <Image className={'sm:w-[375px] sm:h-[375px]'} src={article.image} alt={article.image} width={375} height={375}/>
                            <div>
                                <p className={'sm:text-[20px]   font-bold mt-6 sm:mt-12 line-clamp-3'}>{article.name}</p>
                                <p className={'line-clamp-6 text-sm sm:text-base'}>{article.description}</p>
                                <button className={'text-[14px] mt-0 px-[34px] py-[9px] border sm:mt-10 border-black font-bold rounded-[10px]'}>Read More</button>
                            </div>
                        </div>))}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default App;