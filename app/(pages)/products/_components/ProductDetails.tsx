"use client";
import Image from "next/image";
import { Reviews } from "@/lib/types/type";
import { Rate } from "antd";
import Badger from "@/app/(pages)/products/_components/Badge";
import { HeartOutlined } from "@ant-design/icons";
import { Aferpay } from "@/public";
import Progressing from "@/app/(pages)/products/_components/Progres";
import { useQuery } from "@tanstack/react-query";
import { getProductById, getProducts } from "@/lib/services/service";
import { useParams } from "next/navigation";


 function ProductDetails() {
  const { productId} = useParams<{ productId: string }>();

  const { data,isLoading } = useQuery({
    queryKey: ["todos"],
    queryFn: getProducts,
  });

  const { data: productOne,isFetching } = useQuery({
    queryKey: ["todosOne", productId],
    queryFn: () => getProductById(productId),
  });

  if(isLoading){
return <div>Loading...</div>
  }
  if(isFetching){
    return <div>Loading...</div>
      }

  return (
    <div>
      <section>
        <div className={"flex justify-center  gap-x-64 mt-[309px]"}>
          {productOne && (
            <Image
              className={"rounded-3xl bg-cover bg-center object-cover"}
              src={productOne.images[0].images}
              alt={productOne.title_ru}
              width={532}
              height={806}
            />
          )}
          <div>
            <p className={"text-[40px]"}>Luxurious Elixir</p>
            <p className={"max-w-[608px] text-[#151515] tracking-wide"}>
              Step into a world of unparalleled opulence with Luxurious Elixir,
              an exquisite fragrance that weaves an enchanting symphony of gold
              and luxury. This gilded elixir is a celebration of sophistication,
              crafted with the finest essences and imbued with the allure of
              precious golden hues.
            </p>
            <div className={"flex gap-x-[10px] text-[#151515] items-center"}>
              <Rate
                disabled
                defaultValue={5}
                style={{ color: "#C78800", fontSize: "14px" }}
              />
              <p className={"text-[12px] my-0"}>(90)</p>
              <p className={"underline text-[10px] my-0"}>
                Reviews and Ratings
              </p>
            </div>
            {productOne && (
              <div>
                <div className={"flex gap-x-[30px] mt-10"}>
                  <div>
                    <input
                      type="radio"
                      id="hosting-small"
                      name="hosting"
                      value="hosting-small"
                      className="hidden peer"
                      required
                    />
                    <label
                      htmlFor="hosting-small"
                      className={
                        " cursor-pointer peer-checked:border-blue-600 peer-checked:text-blue-600  hover:text-gray-600 hover:bg-gray-100"
                      }
                    >
                      <Image
                        className={"rounded-lg bg-cover bg-center"}
                        src={productOne.images[0].images}
                        alt={productOne.title_en}
                        width={88}
                        height={124.5}
                      />{" "}
                      <p className={"text-center mt-[10px] my-0"}>
                        {productOne.description_en}
                      </p>
                    </label>
                  </div>

                  <div>
                    <input
                      type="radio"
                      id="hosting-big"
                      name="hosting"
                      value="hosting-big"
                      className="hidden peer"
                      required
                    />
                    <label
                      htmlFor="hosting-big"
                      className={
                        " cursor-pointer peer-checked:border-blue-600 peer-checked:text-blue-600  hover:text-gray-600 hover:bg-gray-100"
                      }
                    >
                      <Image
                        className={"rounded-lg bg-cover bg-center"}
                        src={productOne.images[0].images}
                        alt={productOne.images[0].images}
                        width={88}
                        height={124.5}
                      />{" "}
                      <p className={"text-center mt-[10px] my-0"}>
                        {productOne.description_ru}
                      </p>
                    </label>
                  </div>
                </div>
                <p className={"text-[24px] text-[#C78800] my-0 mt-9"}>
                  ${productOne?.price}
                </p>
              </div>
            )}
            <div className={"mt-9 flex items-center gap-x-[62px]"}>
              <Badger />
              <div className={"flex gap-x-4"}>
                <p className={"my-0"}>Wish list</p>
                <HeartOutlined />
              </div>
            </div>
            <button
              className={
                "w-full mt-9 py-5 bg-[#FFBF34] max-w-[607px] text-[20.95px] font-bold rounded-[10px] tracking-wide"
              }
            >
              Add to Bag
            </button>
            <div className={"flex items-center gap-x-[10px] mt-4"}>
            
              <div
                className={
                  "px-[7px] py-[6px] bg-[#FFBF34] w-[87px] rounded-[23px] object-cover bg-cover bg-center"
                }
              >
                <Image
                  src={Aferpay.src}
                  alt={"Aferpay"}
                  width={73}
                  height={13.6}
                />
              </div>
              <p className={"text-[12px] text-[#151515] my-0"}>
                Shop now and pay later with 4 payments
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className={"mt-[120px] wrapper"}>
          <p className={"text-[32px] tracking-wide"}>Product Details</p>
          <p className={"text-[20px] tracking-wide my-0"}>
            Step into a world of unparalleled opulence with Luxurious Elixir, an
            exquisite fragrance that weaves an enchanting symphony of gold and
            luxury. This gilded elixir is a celebration of sophistication,
            crafted with the finest essences and imbued with the allure of
            precious golden hues. From the first spritz to the lingering
            dry-down, Luxurious Elixir promises an intoxicating experience that
            embodies the essence of lavish indulgence.
          </p>
          <p className={"text-[32px] tracking-wide mt-[116px]"}>
            The Golden Overture
          </p>
          <p className={"text-[20px] tracking-wide"}>
            Luxurious Elixir opens with a grand flourish of radiant citrus and
            sun-kissed fruits, reminiscent of golden rays caressing your senses.
            The opulent heart unfolds with a bouquet of velvety roses and rare
            blooms, their essence radiating with the allure of gilded petals. As
            the fragrance settles, a sumptuous blend of warm amber, creamy
            vanilla, and smooth sandalwood evokes a sense of ultimate luxury and
            refinement.
          </p>
        </div>
      </section>
      <section>
        <div className={"wrapper"}>
          <p className={"center-text mt-[120px]"}>Reviews</p>
          <div className={"flex justify-center gap-[120px]"}>
              <Progressing />
            <div className={"text-[#252525]"}>
              <Rate
                className={"text-2xl mt-2"}
                disabled
                defaultValue={5}
                style={{ color: "#C78800" }}
              />
              <p className={"text-[24px]  my-0"}>5 out fo 5</p>
              <p className={"my-4"}>99% OF REVIEWERS RECOMMEND THIS PRODUCT</p>
              <div className={"flex gap-12"}>
                <p className={"my-0"}>90 reviews</p>
                <button>+ Add a Review</button>
              </div>
            </div>
          </div>
          <div className={"flex flex-col gap-y-10 mt-10"}>
            {Reviews.map((review) => (
              <div className={"flex gap-x-4 items-start mt-6"} key={review.id}>
                <Image
                  src={review.image}
                  alt={review.name}
                  width={52}
                  height={52}
                />
                <div>
                  <Rate
                    className={"text-xl"}
                    disabled
                    defaultValue={5}
                    style={{ color: "#C78800" }}
                  />
                  <p className={"text-[18px] tracking-wide"}>{review.title}</p>
                  <div className={"flex gap-16"}>
                    <p className={"tracking-wide"}>{review.name}</p>
                    <p className={"tracking-wide"}>{review.createdAt}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className={"flex justify-center items-center mt-10"}>
            {" "}
            <button
              className={
                "tracking-wide px-[65px] py-4 border border-[#252525] text-[#252525] rounded-[10px]"
              }
            >
              Load More
            </button>
          </div>
        </div>
      </section>
      <section>
        <div className={"wrapper mb-[120px]"}>
          <p className={"center-text mt-[170px] text-[#CACACA]"}>
            Discover More
          </p>
          <div className={"flex gap-11"}>
            {data?.results?.map((product) => (
              <div
                className={
                  "w-[310px] h-[345px] bg-black rounded-2xl  text-white"
                }
                key={product.id}
              >
                <Image
                  className={""}
                  src={product.images[0].images}
                  alt={product.title_en}
                  width={310}
                  height={374}
                />
                <p
                  className={
                    " pt-[14px] text-center text-[20px] leading-none my-0 "
                  }
                >
                  {product.title_en}
                </p>
                <div
                  className={"flex justify-center items-center gap-x-1 mt-2"}
                >
                  <p className={"text-[#FFBF34]"}>${product.price}</p>
                  <p>{product.description_en}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProductDetails;
