

export default function Home() {
  return (
    <main className=" ">
      <section className=" home overflow-y-hidden relative h-[200px] xs:h-auto xs:aspect-[2/1] md:aspect-auto bg-home-mobile  md:bg-home-desktop bg-cover  bg-[center-top] bg-no-repeat ">
        <div className="container h-full md:min-h-screen  flex justify-end items-center">
          <div className="text-white ">
            <h2 className="md:text-6xl mb-0.5 md:mb-2 font-bold text-2xl font-MorabbaBold ">
              قهوه عربیکا تانزانیا
            </h2>
            <span className="font-MorabbaLight text-xl md:text-5xl ">
              یک فنجان بالانس!
            </span>
            <span className="block w-[100px] h-px md:h-0.5 my-3 md:my-8 bg-orange-300"></span>
            <p className="max-w-[201px] md:max-w-[460px] text-xs md:text-2xl font-Dana">
              قطعا نام آشنای عربیکا را شنیده اید،عربیکا یکی از گونه های قهوه است
              که در نواحی مختلف کمربند قهوه کشت میشود.
            </p>
          </div>
        </div>

        {/* curve */}
        <svg className="text-white dark:text-zinc-800 absolute w-[100px] h-[22px] bottom-0 right-0 left-0 mx-auto ">
          <use href="#curve"> </use>
        </svg>

        {/* rings */}
        <div className=" absolute  left-0 right-0 bottom-0 mx-auto translate-y-2/4  flex items-center justify-center w-[203px] h-[203px] border rounded-full border-white/25">
          <div className=" flex items-center justify-center w-[145px] h-[145px] border rounded-full border-white/50">
            <div className=" w-[95px] h-[95px] border rounded-full border-white/80"></div>
          </div>
        </div>
        {/* arrow rings */}

      </section>
    </main>
  );
}
