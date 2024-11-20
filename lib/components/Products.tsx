'use client'
import Image from "next/image";
import {Aqua, SaleBG} from "@/public";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../services/service";

function Products() {
    const { data } = useQuery({
        queryKey: ['todos'],
        queryFn: getProducts,
      });
      
    console.log(data)
    return (
        <data>
            <section>
                <div className={'pt-[243px] wrapper'}>
                    <p className={'text-center text-[#C78800] text-[32px]'}>Best Selling Products</p>
                    <hr className={'bg-[#AB572D] border-0 h-px opacity-40'}/>
                    <form className={'flex justify-between items-center mt-10'}>
                        <div className={'flex items-center gap-x-[38px]'}>
                            <p className={'my-0'}>Filter by</p>
                            <select className={'outline-none'}>
                                <option>Collections</option>
                                <option>Channel Parfume</option>
                            </select>
                            <select className={'outline-none'}>
                                <option>Fragrance Families</option>
                                <option>Fragrance Families 1</option>
                                <option>Fragrance Families 2</option>
                                <option>Fragrance Families 3</option>
                            </select>
                            <select className={'outline-none'}>
                                <option>Gender</option>
                                <option>Male</option>
                                <option>Female</option>
                            </select>
                            <select className={'outline-none'}>
                                <option>Occasions</option>
                                <option>Occasions 1</option>
                                <option>Occasions 2</option>
                                <option>Occasions 3</option>
                            </select>
                        </div>
                        <div>
                            <select className={'outline-none'}>
                                <option>Sort by</option>
                                <option>Sort by 1</option>
                                <option>Sort by 2</option>
                                <option>Sort by 3</option>
                            </select>
                        </div>
                    </form>
                    <div className={'pt-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-11'}>
                    {data 
  ? Array(20).fill(data?.results).flat().slice(0, 20).map((product, id) => (
    <div 
      className={'h-[350px] 2xl:h-[405px] bg-black rounded-2xl text-white'} 
      key={id}
    >
      <Image 
        className={''} 
        src={product.images?.[0]?.images} 
        alt={product.title_ru} 
        width={310} 
        height={310} 
      />
      <p className={"pt-[14px] text-center text-[20px] leading-none my-0"}>
        {product.title_en}
      </p>
      <div className={'flex justify-center items-center gap-x-1 mt-2'}>
        <p className={'text-[#FFBF34]'}>${product.price}</p>
        <p>{product.description_ru}</p>
      </div>
    </div>
  ))
  : Array(20).fill(null).map((_, id) => ( // Render skeletons when no data
    <div 
      className={'h-[350px] 2xl:h-[405px] bg-gray-300 rounded-2xl animate-pulse'} 
      key={id}
    >
      <div className={'h-[260px] bg-gray-400 w-full rounded-t-2xl'}></div>
      <div className={'h-[20px] bg-gray-400 mt-4  mx-auto w-[70%] rounded'}></div>
      <div className={'h-[20px] bg-gray-400  mt-2 mx-auto w-[50%] rounded'}></div>
    </div>
  ))
}



                    </div>
                </div>
            </section>
            <section>
                <div className={'pt-[97px] text-white'}>
                 <p className={'center-text text-[#C78800]'}>Special Offers</p>
                    <div className={'h-[866px] w-full px-24 py-[146.5px] bg-center bg-cover'} style={{backgroundImage:`url(${SaleBG.src})`}}>
                     <div className={'flex flex-col justify-between  h-full'}>
                       <p className={'text-[46px] max-w-[608px] tracking-wider'}>Limited Time Offer: 20% OFF on Aqua Serenity Perfume!</p>
                       <div>
                           <p className={'text-[50px] my-0'}>Aqua Serenity </p>
                           <p className={'text-[36px] my-0 text-[#13D0E3]'}>Embrace the Tranquil Tides</p>
                           <p className={'mt-[35px] max-w-[597px] tracking-wide'}>Immerse yourself in the calming embrace of Aqua Serenity, a captivating fragrance that evokes the essence of water.</p>
                           <button className={'mt-[57px] border py-[9px] px-[31.5px] rounded-[10px] text-[14px] font-bold'}>Know More</button>
                       </div>
                     </div>
                    </div>
                </div>
            </section>
            <section>
                <div className={'h-[866px] w-full px-24 py-[146.5px] bg-cover bg-center'} style={{backgroundImage: `url(${Aqua.src})`}}>
                    <div className={'flex flex-col justify-between  h-full'}>
                        <p className={'text-[46px] max-w-[608px] tracking-wider'}>Limited Time Offer: 20% OFF on Aqua
                            Serenity Perfume!</p>
                        <div>
                            <p className={'text-[50px] my-0'}>Aqua Serenity </p>
                            <p className={'text-[36px] my-0 text-[#13D0E3]'}>Embrace the Tranquil Tides</p>
                            <p className={'mt-[35px] max-w-[597px] tracking-wide'}>Immerse yourself in the calming
                                embrace of Aqua Serenity, a captivating fragrance that evokes the essence of water.</p>
                            <button
                                className={'mt-[57px] border-black border py-[9px] px-[31.5px] rounded-[10px] text-[14px] font-bold'}>Know
                                More
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </data>
    );
}

export default Products;