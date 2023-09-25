import RemoveBtn from "./RemoveBtn";
import {HiPencilAlt} from "react-icons/hi";
import Link from "next/link";

export default function TopicsList()
{
    return(
        <>
            {/* my-3 = margin 3 */}
            <div className ="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start">
                <div>
                    <h2 className="font-bold text-2xl">Topic Title</h2>
                    <div>Topic Desceription</div>
                </div>
                <div className="flex gap-2">
                    <RemoveBtn/>
                    {/* want to go to this page */}
                    <Link href={"./editTopic/123"}>
                        <HiPencilAlt size={24}/>
                    </Link>
                </div>
            </div>
        </>
    );
}