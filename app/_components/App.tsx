'use client'
import { Articles } from "@/lib/types/type";
import { HeroImg, SaleBG, values, ValuesBG } from "@/public";
import Hero1 from "../../public/images/hero1.png"
import Hero2 from "../../public/images/hero2.png"
import {
    FacebookOutlined,
    InstagramOutlined, LeftOutlined, RightOutlined,
    TwitterOutlined
} from "@ant-design/icons";
import Image from "next/image";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { getCollections, getProducts } from "@/lib/services/service";


function App() {
  

    const {data} = useQuery({ queryKey: ['todos'], queryFn: getProducts})
    const { data: Collections } = useQuery({
        queryKey: ['categories'],
        queryFn: getCollections
      });
      
    return (
        <div>

            <section>
                <div className="flex items-center justify-between wrapper">
                    <div className="flex flex-col gap-y-[43px]">
                        <TwitterOutlined className="-rotate-90 text-2xl "/>
                        <FacebookOutlined className="-rotate-90 text-2xl"/>
                        <InstagramOutlined className="-rotate-90 text-2xl"/>
                    </div>
                    <div>
                        <p className="text-[15px] font-semibold">WRIST WATCH, 2018</p>
                        <p className="text-[70px] font-bold">{"PerFume".toUpperCase()}</p>
                        <div className="flex flex-row gap-x-[56px]">
                            <p className="text-[15px] font-semibold">Name of Stakeholder</p>
                            <div className='flex flex-col gap-y-[4px] text-[#4B4B4B]'>
                                <p className={'text-[15px] font-semibold'}>ABOUT</p>
                                <p className={'w-[308px] text-[14px]'}>Introducing &quot;Titanic Elegance,&quot; a perfume
                                    inspired by the iconic movie Titanic. Just like the engine telegraph in the Titanic,
                                    this fragrance controls the essence of elegance and sophistication, guiding you
                                    through your day with grace and style.</p>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <Image src={Hero1.src} alt="Hero 1" width={430} height={648} className=""/>
                        <Image src={Hero2.src} alt="Hero 1" width={328} height={494}
                               className="absolute bottom-10 left-[247px] -z-10"/>
                    </div>
                    <div className="flex flex-col items-center  gap-y-[150px] translate-x-8">
                        <div className="flex justify-end items-end "><p
                            className="rotate-90 text-[15px] text-[#484848]">
                            StakeHolder Name
                        </p></div>
                        <div className="rotate-90 w-[70px] h-[2px] bg-[#A0A0A0]"/>
                    </div>
                </div>

            </section>
            <section>
                <div className="flex items-center justify-between w-full wrapper text-[#535353]">
                    <div className={'flex gap-x-[143px] '}>
                        <p>01</p>
                        <div>
                            <LeftOutlined className={'cursor-pointer'}/>
                            <RightOutlined className={'cursor-pointer'}/>
                        </div>
                    </div>
                    <div >{"Parfume".toUpperCase()}</div>
                </div>
            </section>
            <section>
                <div className="flex items-center justify-between w-full h-[731px] mt-[142px]"
                     style={{backgroundImage: `url(${ValuesBG.src})`}}>
                    <div className={'px-[96px] py-[79px] flex justify-between gap-x-48 items-center text-[#FDFDFD]'}>
                       <div> <Image className={'rounded-3xl'} src={values.src} alt={'value hero'} width={670} height={573}/></div>
                        <div className={''}>
                            <p className={'text-[50px] '}>Our Values</p>
                            <p className={'text-[20px] max-w-[588px] leading-6 '}>At Local Face, our perfume retail store is built on a foundation of passion and
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
                <div className="flex items-center justify-between w-full wrapper mt-[177px] px-[100px] pb-[144px]">
                    <div>
                        <p className={'text-[50px] text-[#C78800] font-semibold max-w-[746px]'}>Elevate Your Spirit with Victory Scented Fragrances!</p>
                        <p className={'max-w-[530px] text-[24px]'}>Shop now and embrace the sweet smell of victory with Local Face.
                        </p>
                    </div>
                    <Image className={'rounded-[40px]'} src={HeroImg.src} alt={"Hero image"} width={714} height={444}/>
                </div>
            </section>
            <section>
                <div className="wrapper">
                <p className={'center-text'}>Best selling products</p>
                    
                    <div className="flex gap-11">
                    {data ? (
  Array(5).fill(data.results).flat().slice(0, 5).map((product, id) => (
    <Link href={`products/${product.id}`}  className="cursor-pointer  w-[310px] h-[345px] bg-black rounded-2xl text-white" key={id}>
      <Image className="" src={product.images?.[0]?.images} alt={product.title_en} width={310} height={374} />
      <p className="pt-[14px] text-center text-[20px] leading-none my-0">{product.title_en}</p>
      <div className="flex justify-center items-center gap-x-1 mt-2">
        <p className="text-[#FFBF34]">${product.price}</p>
        <p>{product.description_ru}</p>
      </div>
    </Link>
  ))
) : (
  Array(5)
    .fill(null)
    .map((_, id) => (
      <div
        className="h-[350px] 2xl:h-[405px] bg-gray-300 rounded-2xl animate-pulse"
        key={id}
      >
        <div className="h-[260px] bg-gray-400 w-full rounded-t-2xl"></div>
       
        <div className="h-[20px] bg-gray-400 mt-4 mx-auto w-[70%] rounded"></div>
        
        <div className="h-[20px] bg-gray-400 mt-2 mx-auto w-[50%] rounded"></div>
      </div>
    ))
)}</div>
                </div>
            </section>
            <section>
                <div className={'pt-[268px]'}>
                    <p className={'center-text'}>Our Collections</p>
              {Collections?.results && <><div className={'flex gap-x-[46px]'}>
               <div className={'relative'}><p className={'absolute text-[24px] font-medium text-white bottom-0 left-10'}>{Collections.results[0].title_en}</p> <Image className={'object-cover  h-full'} src={Collections.results[0].icon} alt={Collections.results[0].title_en} width={802} height={460}/></div>
               <div className={'relative'}><p className={'absolute text-[24px] font-medium text-white bottom-0 left-10'}>{Collections.results[1].title_en}</p> <Image className={'object-cover  h-full'} src={Collections.results[1].icon} alt={Collections.results[1].title_en} width={1072} height={460}/></div>
               </div>
                    <div className={'flex gap-[46px] pt-[46px]'}>
                        <div className={'relative'}><p className={'absolute text-[24px] font-medium text-white bottom-0 left-10'}>{Collections.results[2].title_en}</p> <Image className={'object-cover  h-full'} src={Collections.results[2].icon} alt={Collections.results[2].title_en} width={889} height={480}/></div>
                        <div className={'relative'}><p className={'absolute text-[24px] font-medium text-white bottom-0 left-10'}>{Collections.results[3].title_en}</p> <Image className={'object-cover  h-full'} src={Collections.results[3].icon} alt={Collections.results[3].title_en} width={974} height={480}/></div>

                    </div>
                    <div className={'flex gap-[46px] pt-[46px] '}>
                        <div className={'relative'}><p className={'absolute text-[24px] font-medium text-white bottom-0 left-10'}>{Collections.results[4].title_en}</p> <Image className={'object-cover  h-full'} src={Collections.results[4].icon} alt={Collections.results[4].title_en} width={555} height={480}/></div>
                        <div className={'relative'}><p className={'absolute text-[24px] font-medium text-white bottom-0 left-10'}>{Collections.results[5].title_en}</p> <Image className={'object-cover  h-full'} src={Collections.results[5].icon} alt={Collections.results[5].title_en} width={555} height={480}/></div>
                        <div className={'relative'}><p className={'absolute text-[24px] font-medium text-white bottom-0 left-10'}>{Collections.results[6].title_en}</p> <Image className={'object-cover  h-full'} src={Collections.results[6].icon} alt={Collections.results[6].title_en} width={555} height={480}/></div>
                    </div></>}
                </div>
            </section>
            <section>
                <div className={'mt-[120px] w-full h-[866px] bg-cover bg-center'} style={{backgroundImage:`url(${SaleBG.src})`}}>
<div className={'max-w-[605px] pt-[227px] pl-[96px] text-white'}>
    <p className={'text-[50px] font-medium'}>Perfume Year-End Sale! Up to 50% OFF</p>
    <p className={'text-[20px] font-light'}>Discover an exquisite collection of premium perfumes at unbelievable prices during our exclusive Perfume Sale!</p>
    <button className={' px-[70.5px] py-[14px] rounded-[10px] font-semibold italic bg-[#FFBF34]'}>Know More</button>
</div>
                </div>
            </section>
            <section>
                <div className={'pt-[120px] wrapper'}>
                    <p className={'center-text'}>Latest Articles</p>
                    <div className={'pt-[100px] flex gap-x-[76px]'}>
                        {Articles.map(article => (<div key={article.id} className={'w-[375px] h-[712px]'}>
             <Image src={article.image} alt={article.image} width={375} height={375}/>
                            <div>
                                <p className={'text-[20px]  font-bold mt-12 line-clamp-3'}>{article.name}</p>
                                <p className={'line-clamp-6'}>{article.description}</p>
                                <button className={'text-[14px] px-[34px] py-[9px] border mt-10 border-black font-bold rounded-[10px]'}>Read More</button>
                            </div>
                        </div>))}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default App;