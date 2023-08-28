"use client"

import Image from 'next/image';
import SimpleImageSlider from "react-simple-image-slider";

const images = [
    { url: "/img1.png" },
    { url: "/img1.png" },
]

const ImageSlider = () => {
    return (
        <div>
            <SimpleImageSlider
                width={'100%'}
                height={'100%'}
                images={images}
                showBullets={true}
                showNavs={false}
            />
        </div>
    )
}

export default ImageSlider