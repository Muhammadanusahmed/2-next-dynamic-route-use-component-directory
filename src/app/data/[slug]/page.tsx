import comp from "@/components/data";

export default function Page({ params }: any) {
 
  // we have a two method 
  //first is make function and put data in it
  //second make data and export
  // let countryData = comp()

 
  //  function getdata(param: string) {
  //   return countryData.find((data) => data.country === param.toLowerCase());
  // }

  function getdata(param: string) {
    return comp.find((data) => data.country === param.toLowerCase());
  }

  let result = getdata(params.slug);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col p-8 rounded-3xl gap-8 row-start-2 items-center sm:items-start box-border bg-black cursor-pointer">
        <h2 className="italic w-full ">By : MUHAMMAD ANUS AHMED</h2>
        {result ? (
          <>
            <h1 className="list-inside list-decimal text-4xl text-center sm:text-left uppercase ">
              {result.country}
            </h1>

            <ul className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
              <li className="mb-2">capital : {result.capital}</li>
              <li>Language : {result.language}</li>
            </ul>
          </>
        ) : (
          <h1 className="list-inside list-decimal text-4xl text-center sm:text-left uppercase ">
            {params.slug} not found
          </h1>
        )}
        <div>
          <h1>avalable Data :</h1>
          <ul>1. Pakistan</ul>
          <ul>2. India</ul>
          <ul>3. Australia</ul>
          <ul>4. Brazil</ul>
        </div>
      </main>
    </div>
  );
}
