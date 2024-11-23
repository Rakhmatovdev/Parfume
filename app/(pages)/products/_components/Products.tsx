"use client"
 import { Aqua, SaleBG } from "@/public";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "@/lib/services/service";

function Products () {
  const { data } = useQuery({
    queryKey: ["todos"],
    queryFn: getProducts,
  });


      
    return (
        <>
            <section>

                <div className={'sm:pt-[243px] pt-20 wrapper'}>
                    <p className={'sm:text-center text-[#C78800] text-xl sm:text-[32px]'}>Best Selling Products</p>
                    <hr className={'bg-[#AB572D] border-0 h-px opacity-40'}/>
                    <form
                        className={'flex flex-col  sm:flex-row  sm:justify-between gap-y-2 sm:gap-y-0 sm:items-center mt-10 mb-10'}>
                        <div className={'flex  flex-col sm:flex-row sm:items-center gap-y-2 sm:gap-y-0 gap-x-[38px]'}>
                            <p className={'m-0 font-semibold sm:font-normal'}>Filter by</p>
                            <select className={'outline-none'}>
                                <option>Collections</option>
                                <option>Channel Perfume</option>
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
                            <select className={'outline-none w-full'}>
                                <option>Sort by</option>
                                <option>Sort by 1</option>
                                <option>Sort by 2</option>
                                <option>Sort by 3</option>
                            </select>
                        </div>
                    </form>
                    <Swiper
                        className=" sm:pt-24  rounded-xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 sm:gap-11"
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
                                <SwiperSlide key={id} className={'bg-black  rounded-2xl'}>
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
                <div className={'sm:pt-[97px] pt-16 text-white'}>
                    <p className={'sm:center-text text-xl px-2 sm:px-0 text-[#C78800]'}>Special Offers</p>
                    <div className={'sm:h-[866px] w-full sm:px-24 py-10 px-2 sm:py-[146.5px] bg-center bg-cover'}
                         style={{backgroundImage: `url(${SaleBG.src})`}}>
                        <div className={'flex flex-col justify-between  h-full'}>
                            <p className={'sm:text-[46px] sm:leading-[55px]  text-xl max-w-[608px] tracking-wider'}>Limited Time Offer: 20% OFF on
                                Aqua Serenity Perfume!</p>
                            <div>
                                <p className={'sm:text-[50px] text-2xl my-0 sm:leading-[50px]'}>Aqua Serenity </p>
                                <p className={'sm:text-[36px] text-xl my-0 text-[#13D0E3] sm:leading-[50px]'}>Embrace the Tranquil Tides</p>
                                <p className={'sm:mt-[35px] mt-4 max-w-[597px] tracking-wide'}>Immerse yourself in the calming
                                    embrace of Aqua Serenity, a captivating fragrance that evokes the essence of
                                    water.</p>
                                <button
                                    className={'sm:mt-[57px] mt-4 border py-[9px] px-[31.5px] rounded-[10px] text-[14px] font-bold'}>Know
                                    More
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className={' text-black'}>

                    <div className={'sm:h-[866px] w-full sm:px-24 py-10 px-2 sm:py-[146.5px] bg-center bg-cover'}
                         style={{backgroundImage: `url(${Aqua.src})`}}>
                        <div className={'flex flex-col justify-between  h-full'}>
                            <p className={'sm:text-[46px] sm:leading-[55px] text-xl max-w-[608px] tracking-wider'}>Limited Time Offer: 20% OFF on
                                Aqua Serenity Perfume!</p>
                            <div>
                                <p className={'sm:text-[50px] text-2xl my-0 sm:leading-[50px]'}>Aqua Serenity </p>
                                <p className={'sm:text-[36px] text-xl my-0 text-[#13D0E3] sm:leading-[50px]'}>Embrace the Tranquil Tides</p>
                                <p className={'sm:mt-[35px] mt-4 max-w-[597px] tracking-wide'}>Immerse yourself in the calming
                                    embrace of Aqua Serenity, a captivating fragrance that evokes the essence of
                                    water.</p>
                                <button
                                    className={'sm:mt-[57px] mt-4 border border-black py-[9px] px-[31.5px] rounded-[10px] text-[14px] font-bold'}>Know
                                    More
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Products;