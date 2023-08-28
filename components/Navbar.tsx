import Image from "next/image"
import Link from "next/link"
import { ContactPop } from "./ContactPop"


const links = [
    {
        href: '/',
        label: 'About'
    },
    {
        href: '/',
        label: 'Blog'
    },
    {
        href: '/',
        label: 'Carrier'
    },

]
const Navbar = () => {
    return (
        <header className="px-[41px] absolute top-0 py-[33px] z-10 w-full">
            <nav className="flex justify-between items-center w-[100%] mx-auto"> {/* Adjust the width */}
                <Link
                    href={'/'}
                >
                    <Image
                        src="/logo.png"
                        alt="logo"
                        width={128}
                        height={128}
                        className="object-contain"
                    />
                </Link>

                <ul className="flex gap-x-4 items-center">
                    {
                        links.map(({ href, label }) => (
                            <li className="text-linkColor text-sm" key={`${href}${label}`}>
                                <Link href={href}>
                                    {label}
                                </Link>
                            </li>
                        ))
                    }

                    <li>
                        <ContactPop />
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar
