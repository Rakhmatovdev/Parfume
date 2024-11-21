import Image from "next/image";
import {AboutHero} from "@/public";
import {Makes} from "@/lib/types/type";

function About() {
    return (
        <div>
            <section>
                <div className={'mt-10 sm:mt-[173px]'}>
                    <p className={'sm:center-text font-bold text-xl'}>About Us</p>
                    <p className={'sm:w-[1048px] sm:text-center mx-auto sm:text-[24px] tracking-wide'}>At Local Face, we believe
                        that perfumes are more than just scents; they are expressions of one&apos;s individuality and style.
                        Our passion for exquisite fragrances led us to curate a collection that captures the essence of
                        diverse personalities, bringing you an unparalleled olfactory experience.</p>
                    <Image className="sm:w-[1920] sm:h-[745]" src={AboutHero.src} alt={"Hero image"} width={1920} height={745}/>
                </div>
            </section>
            <section>
                <div className={'sm:mt-[99px] mt-4'}>
                    <p className={'sm:center-text font-bold text-xl'}>Our Story</p>
                    <p className={'sm:w-[1048px] sm:text-center mx-auto sm:text-[24px] tracking-wide '}>Local Face Perfumes was
                        founded by a group of perfume enthusiasts with a shared vision to create a haven for perfume
                        lovers seeking authentic, locally-inspired fragrances. Inspired by the diversity and richness of
                        cultures around the world, we set out on a journey to curate a collection of scents that capture
                        the essence of each region. Our aim is to bring you closer to the heart and soul of different
                        cultures through the art of perfumery.</p>
                    <Image src={AboutHero.src} alt={"Hero image"} width={1920} height={745}/>
                </div>
            </section>
            <section>
                <div className={'sm:mt-[171px] mt-10 mb-10 wrapper sm:mb-[120px]'}>
                    <p className={'sm:text-center text-[#AB572D] sm:text-[32px] text-xl font-medium'}>What Makes Us Unique</p>
                    <div className={'flex sm:flex-row flex-col  sm:justify-between'}>
                        {Makes.map((make) => (<div key={make.id} className={'w-[342px]'}>
                            <p className={'my-1 text-[20px] font-bold'}>{make.title}</p>
                            <p className={'text-[20px] tracking-wide'}>{make.description}</p>
                        </div>))}
                    </div>
                    <div className={'sm:mt-[85px] mt-4'}>
                        <p className={'text-[20px] tracking-wide'}>Join us on this olfactory adventure as we celebrate
                            the diverse tapestry of scents from around the world. Discover the captivating aromas that
                            embrace the essence of local cultures and connect with the beauty of our shared
                            humanity.</p>

                        <p className={'text-[20px] tracking-wide'}>Thank you for being a part of our journey.</p>
                        <p className={'text-[20px] tracking-wide my-0'}>With love and gratitude,</p>
                        <p className={'text-[20px] tracking-wide my-0'}> The Local Face Perfumes Team</p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default About;