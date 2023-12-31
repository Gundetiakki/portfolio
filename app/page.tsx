import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";

export default function Page() {
  return (
    <div className="container mx-auto h-full flex flex-col md:flex-row gap-12 items-center justify-center">
      <div className="font-bold h-full flex flex-col justify-center">
        <div className="mb-12">
          <div className="text-sm mb-3 text-gray-60">Hi all, I am</div>
          <div className="text-6xl mb-3 text-gray-60">Aakash Gundeti</div>
          <div className="text-3xl flex items-center text-blue-70">
            <span className="-ml-2">
              <FaChevronRight />
            </span>
            <span>Front-end developer</span>
          </div>
        </div>
        <div>
          <div className="mb-3 text-gray-50">
            // complete the game to continue
          </div>
          <div className="mb-3 text-gray-50">
            // you can also visit my Github page
          </div>
          <div>
            <span className="text-blue-70">const</span>{" "}
            <span className="text-green-50">githubLink</span> ={" "}
            <span className="text-orange-50">
              "<Link href={"https://github.com/aakash-gundeti"} target="_blank" className="underline">https://github.com/aakash-gundeti</Link>
              "
            </span>
          </div>
        </div>
      </div>
      <div className="font-bold hidden md:flex text-8xl text-teal-500 w-[40%] h-[60%] justify-center items-center drop-shadow-2xl bg-gradient rounded">
        AG
      </div>
    </div>
  );
}