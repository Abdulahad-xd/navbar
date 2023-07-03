import { Input } from "@/components/ui/input"
import { Search, ShoppingCart } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
export default function Navbar() {
    return (
        <div className="navbar flex justify-between mt-4 mx-10">

            <div className="flex justify-between space-x-40 ">
                <Image className="mx-20px "
                    src="/logo.webp"
                    width={180}
                    height={15}
                    alt="Picture of the author"
                />
                <div >
                    <ul className="flex gap-8 mx-4 items-center">
                        <li>
                            <Link href="/female">Female</Link>
                        </li>
                        <li>
                            <Link href="/male">Male</Link>
                        </li>
                        <li>
                            <Link href="/kids">Kids</Link>
                        </li>
                        <li>
                            <Link href="/all products">All Products</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="rightside flex space-x-96">
                <div className="placeholder relative mx-100px h-15 w-50">
                    <Input className="h-15 w-50"/>
                    <Search className="absolute top-1 left-2" />
                </div>
                <div className="rounded-full bg-gray 4px">
                    <div className="cart w-10 h-10 rounded-full bg-gray-300 flex justify-center items-center">
                        <div className="relative">
                            <div className="w-4 h-4 rounded-full bg-red-500 text-white absolute right-0 -top-2 flex justify-center items-center text-sm">0</div>
                            <ShoppingCart /></div></div>

                </div>
            </div>
        </div>
    )
}