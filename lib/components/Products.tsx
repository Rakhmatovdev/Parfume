import {allProduct} from "@/lib/types/type";
import Image from "next/image";
import {Aqua, SaleBG} from "@/public";

function Products() {
    return (
        <div>
            <section>
                <div className={'pt-[243px] wrapper'}>
                    <p className={'text-center text-[#C78800] text-[32px]'}>Best Selling Products</p>
                    <hr className={'bg-[#AB572D] border-0 h-px opacity-40'}/>
                    <form className={'flex justify-between items-center mt-10'}>
                        <div className={'flex items-center gap-x-[38px]'}>
                            <p className={'my-0'}>Filter by</p>
                            <select className={'outline-none'}>
                                <option>Collections</option>
                                <option>Collections 1</option>
                                <option>Collections 2</option>
                                <option>Collections 3</option>
                            </select>
                            <select className={'outline-none'}>
                                <option>Fragrance Families</option>
                                <option>Fragrance Families 1</option>
                                <option>Fragrance Families 2</option>
                                <option>Fragrance Families 3</option>
                            </select>
                            <select className={'outline-none'}>
                                <option>Gender</option>
                                <option>Gender 1</option>
                                <option>Gender 2</option>
                                <option>Gender 3</option>
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
                        {allProduct.map((product) => (<div className={'h-[350px] 2xl:h-[405px]   bg-black rounded-2xl  text-white'} key={product.id}>
                            <Image className={''} src={product.image} alt={product.name} width={310} height={374}/>
                            <p className={" pt-[14px] text-center text-[20px] leading-none my-0 "}>{product.name}</p>
                            <div className={'flex justify-center items-center gap-x-1 mt-2'}><p className={'text-[#FFBF34]'}>${product.price}.00</p><p>{product.volume}ml</p></div>
                        </div>))}
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
        </div>
    );
}

export default Products;