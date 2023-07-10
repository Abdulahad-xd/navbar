import { Input } from "@/components/ui/input"
import { Search, ShoppingCart } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
export default function Navbar() {
    return (
        <div className="navbar flex justify-between mt-5  mx-10 text-sm item-center">

            
                <Image className="h-5 w-20  "
                    src="/logo.webp"
                    width={50}
                    height={50}
                    alt="logo"
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
            <div className="flex flex-row border w-40">
                <div>
            <Search className="h-3 w-3" />
            </div>
            <div>
            <input 
            type="text"
            className=" bg-transparent placeholder:text-sm w-[400px]"
            placeholder="what you are looking for"
           />
           </div>
           
            </div>
                <div className="rounded-full bg-gray 3px">
                    <div className="cart w-7 h-7 rounded-full bg-gray-300 flex justify-center items-center">
                        <div className="relative">
                            <div className="w-3 h-3 rounded-full bg-red-500 text-white absolute right-0 -top-2 flex justify-center items-center text-sm">0</div>
                            <ShoppingCart className="w-5 h-5"/></div></div>

                </div>
            </div>
       
    )
}

