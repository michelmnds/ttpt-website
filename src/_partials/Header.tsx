import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <>
      <header
        className="w-[70%] h-[100px] m-auto fixed top-4 left-0 right-0 z-50 flex items-center justify-between p-4 rounded-full border-solid border border-primary backdrop-blur-md"
        style={{ backgroundColor: "rgb(0,0,0,0.3)" }}
      >
        <div className="flex flex-row items-center w-full gap-[5%]">
          <div className="flex flex-row items-center">
            <Image src="/icons/logo.png" alt="TTPT" width={80} height={80} />
            <h1 className="text-primary font-bold text-2xl tracking-wider">
              TTPT
            </h1>
          </div>
          <div className="flex flex-row items-center gap-8">
            <Link
              href="/guia"
              className="text-yellow-80 font-bold text-2xl hover:text-primary transition-colors"
            >
              Guia
            </Link>
            <Link
              href="/faq"
              className="text-yellow-80 font-bold text-2xl hover:text-primary transition-colors"
            >
              FAQ
            </Link>
            <Link
              href="/plus"
              className="text-yellow-80 font-bold text-2xl hover:text-primary transition-colors"
            >
              Plus +
            </Link>
          </div>
        </div>
        <button className="text-secondary text-xl rounded-full bg-primary h-full px-7">
          Começar
        </button>
      </header>
      <div className="fixed top-4 left-0 right-0 m-auto w-[80%] h-20 bg-primary blur-[150px] opacity-40" />
    </>
  );
}
