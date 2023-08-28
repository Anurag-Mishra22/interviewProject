import Image from "next/image"


const Hero = () => {
    return (
        <section className="px-[41px]  mt-[150px]">
            <div>
                <div className="flex flex-col gap-y-4">
                    <h1 className="text-4xl text-start leading-[50px]">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </h1>
                    <p className="text-sm">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>

                    <div className="flex gap-x-2">
                        <Image
                            src="/AppStoreBadge.png"
                            alt="img1"
                            width={128}
                            height={128}
                            className="object-contain"
                        />
                        <Image
                            src="/google-play-badge.png"
                            alt="img1"
                            width={158}
                            height={158}
                            className="object-contain"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero