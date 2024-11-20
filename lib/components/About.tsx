import Image from "next/image";
import {AboutHero} from "@/public";
import {Makes} from "@/lib/types/type";

function About() {
    return (
        <div>
            <section>
                <div className={'mt-[173px]'}>
                    <p className={'center-text'}>About Us</p>
                    <p className={'w-[1048px] text-center mx-auto text-[24px] tracking-wide'}>At Local Face, we believe
                        that perfumes are more than just scents; they are expressions of one&apos;s individuality and style.
                        Our passion for exquisite fragrances led us to curate a collection that captures the essence of
                        diverse personalities, bringing you an unparalleled olfactory experience.</p>
                    <Image src={AboutHero.src} alt={"Hero image"} width={1920} height={745}/>
                </div>
            </section>
            <section>
                <div className={'mt-[99px]'}>
                    <p className={'center-text'}>Our Story</p>
                    <p className={'w-[1048px] text-center mx-auto text-[24px] tracking-wide'}>Local Face Perfumes was
                        founded by a group of perfume enthusiasts with a shared vision to create a haven for perfume
                        lovers seeking authentic, locally-inspired fragrances. Inspired by the diversity and richness of
                        cultures around the world, we set out on a journey to curate a collection of scents that capture
                        the essence of each region. Our aim is to bring you closer to the heart and soul of different
                        cultures through the art of perfumery.</p>
                    <Image src={AboutHero.src} alt={"Hero image"} width={1920} height={745}/>
                </div>
            </section>
            <section>
                <div className={'mt-[171px] wrapper mb-[120px]'}>
                    <p className={'text-center text-[#AB572D] text-[32px] font-medium'}>What Makes Us Unique</p>
                    <div className={'flex justify-between'}>
                        {Makes.map((make) => (<div key={make.id} className={'w-[342px]'}>
                            <p className={'my-1 text-[20px] font-bold'}>{make.title}</p>
                            <p className={'text-[20px] tracking-wide'}>{make.description}</p>
                        </div>))}
                    </div>
                    <div className={'mt-[85px]'}>
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