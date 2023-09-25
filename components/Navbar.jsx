import Link from "next/link";

export default function Navbar(){
    return (
        // bgcolor:slate-800 padding left and right: px-8(pixels) padding up and down py-3(pixels)
        <nav className="flex justify-between items-center bg-slate-800 px-8 py-3">
            <Link className = "text-white font-bold"href={"/"}>
                Justin Be Coding
            </Link>
            
            {/* p-2 = padding 2 */}
            {/* addTopic folder */}
            <Link className = "bg-white p-2" href={"/addTopic"}>
                Add Topic
            </Link>
        </nav>
    );
}