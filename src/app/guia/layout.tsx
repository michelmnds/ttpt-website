import Header from "@/_partials/Header";
import { PropsWithChildren } from "react";

export default async function GuideLayout({
  children,
}: Readonly<PropsWithChildren>) {
  return (
    <>
      <div className="flex align-center justify-center min-h-screen w-full flex-col">
        <Header />
        <div className="flex-center container m-auto flex-1 w-[68%] py-[200px]">
          {children}
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
}
