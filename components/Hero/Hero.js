import Link from "next/link";
import { ArrowRightCircleIcon } from "@heroicons/react/24/solid";

export default function Hero() {
  return (
    <div className="h-screen flex items-center sm:max-w-screen-xl mx-auto w-full sm:px-0 px-4 border-b border-gray-400">
      <div className="sm:grid grid-cols-2 flex flex-col gap-20">
        <div className="sm:order-1 order-last flex justify-center flex-col">
          <h1 className="sm:max-w-lg sm:text-6xl text-4xl sm:text-left text-center font-extralight leading-tight">
            We are bridging
            <span className="font-medium">
              {" "}
              traditional and next-generation{" "}
            </span>
            asset classes.
          </h1>
          <p className="sm:max-w-lg sm:text-left text-center text-lg mt-10">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus,
            dignissimos. Voluptatum fuga minima doloremque aut, facilis hic
            corrupti.
          </p>
          <section className="flex items-center gap-5 mt-10">
            <Link
              href="/"
              className="w-32 relative inline-flex items-center justify-center whitespace-nowrap border border-black bg-black px-8 py-3 text-bse font-normal text-white hover:bg-white hover:text-black"
            >
              I want shop
            </Link>
            <Link href="/" className="flex items-center gap-3">
              <ArrowRightCircleIcon width="30" />
              Get job with us
            </Link>
          </section>
        </div>
        <div className="flex justify-end order-1 sm:order-1">
          <img
            src="https://project-lavagna.s3.amazonaws.com/001_6512f9ad87.svg?updated_at=2022-12-04T09:31:20.504Z"
            alt=""
          />
        </div>
      </div>
      <div className="absolute bottom-16 left-0 w-full sm:flex flex-col hidden">
        <p className="text-center text-base">
          Trusted by incumbents and challengers alike
        </p>
        <section className="flex justify-center gap-20 mt-10">
          <img
            src="https://project-lavagna.s3.amazonaws.com/002_ee63ac778d.svg?updated_at=2022-12-04T09:58:02.986Z"
            alt=""
          />
          <img
            src="https://project-lavagna.s3.amazonaws.com/003_c94231e20d.svg?updated_at=2022-12-04T09:58:02.477Z"
            alt=""
          />
          <img
            src="https://project-lavagna.s3.amazonaws.com/004_e4be737e57.svg?updated_at=2022-12-04T09:58:02.460Z"
            alt=""
          />
          <img
            src="https://project-lavagna.s3.amazonaws.com/005_9c038d4870.svg?updated_at=2022-12-04T09:58:02.451Z"
            alt=""
          />
        </section>
      </div>
    </div>
  );
}
