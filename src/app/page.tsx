import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start bg-black p-10 rounded-2xl">
        <h2 className="italic w-full ">By : MUHAMMAD ANUS AHMED</h2>
        <Link
          className="list-inside list-decimal text-4xl text-black box-border bg-slate-500 rounded-xl p-3 text-center sm:text-left uppercase "
          href={"/data/pakistan"}
        >
          go to assigment
        </Link>
      </main>
    </div>
  );
}
