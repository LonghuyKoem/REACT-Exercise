export function HeroSectionComponent() {
  return (
    <section className="relative mx-9 h-[790px] overflow-hidden bg-gradient-to-br from-[#493b50] via-[#66516d] to-[#856b8c] mt-[100px]">
      <div className="absolute right-[-100px] top-[100px] w-[auto] h-[500px]">
        <img
          src="https://images.samsung.com/is/image/samsung/p6pim/us/f2607/gallery/us-galaxy-z-fold8-ultra-f976-600251-sm-f976uzvaxaa-553839126?$product-details-jpg$"
          alt=""
          className="w-full h-full object-contain"
        />
      </div>

      <img
        src="/images/galaxy-fold.png"
        className="absolute right-[-30px] top-[350px] w-[58%] object-contain"
        alt=""
      />

      <div className="absolute left-[8%] top-1/2 -translate-y-1/2">
        <h1 className="text-6xl font-semibold tracking-[-2px]">
          Galaxy Z Fold8 Ultra
        </h1>

        <p className="mt-7 max-w-[700px] text-xl leading-7">
          Multitask to the max. Get up to $1,000 instant trade-in credit or $200
          Samsung credit without trade-in. Plus, up to $1,900 in carrier deals.
        </p>

        <div className="mt-12 flex items-center gap-7">
          <button className="border-b-2 border-white pb-1 font-semibold hover:text-white">
            Learn More
          </button>

          <button className="rounded-full bg-white px-8 py-4 font-semibold text-black">
            Buy now
          </button>
        </div>
      </div>
    </section>
  );
}
