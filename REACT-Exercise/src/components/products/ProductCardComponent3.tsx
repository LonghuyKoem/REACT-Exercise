export function ProductCardComponent3() {
  return (
    <div className="w-[400px] rounded-2xl bg-[#f7f7f7] p-5">
      <div className="flex h-[500px] items-center justify-center">
        <div className="flex h-[500px] items-center justify-center">
          <img
            src="https://images.samsung.com/is/image/samsung/p6pim/us/f2607/gallery/us-galaxy-zflip8-f776-sm-f776ulgaxaa-thumb-553842885?$200_200_PNG$"
            alt="Galaxy Z Fold8"
            className="h-[500px] w-auto object-contain"
          />
        </div>
      </div>

      <div>
        <h2 className="text-lg font-semibold text-black">Galaxy Z Fold8</h2>

        <p className="mt-2 text-sm leading-5 text-black">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis
          nemo, fugit, impedit illum totam dolorem ipsa aut quia harum odio
          accusamus molestiae fugiat id doloremque cum possimus. Non, odio
          quibusdam.
        </p>

        <p className="mt-5 text-base font-bold text-black">$249.99</p>

        <div className="mt-5 space-y-2">
          <button className="w-full rounded-full bg-black py-3 text-sm font-semibold text-white transition hover:bg-gray-800">
            Buy
          </button>

          <button className="w-full rounded-full border border-black bg-white py-3 text-sm font-medium text-black transition hover:bg-black hover:text-white">
            Learn more
          </button>
        </div>
      </div>
    </div>
  );
}
