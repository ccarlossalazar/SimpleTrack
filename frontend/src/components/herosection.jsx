import useFetch from "../hooks/useFetch"
 
 
 const HeroSection = () => {
    const {data,loading} = useFetch("equipment/countByType")

    return (
    <div>
      <div className=" py-24 sm:py-12">
        <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <div className='flex flex-col justify-center items-center'>
          <p className="mx-auto mt-2 max-w-lg text-center text-4xl font-semibold tracking-tight text-balance text-gray-100 sm:text-5xl pb-5">
            Saint Mary's Campus Recreation
          </p>
          <img src="/assets/logo.png"/>
          </div>
          <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
            <div className="relative lg:row-span-2">
              <div className="absolute inset-px rounded-lg bg-gray-300 lg:rounded-l-[2rem]"></div>
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
                <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                  <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                    Mobile friendly
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                Use our Campus Recreation app to sing in.
                  </p>
                </div>
                <div className="@container relative min-h-[30rem] w-full grow max-lg:mx-auto max-lg:max-w-sm">
                    <img
                      className=" inset-x-10 top-10 bottom-0 overflow-hidden object-cover"
                      src="/assets/recapp.png"
                      alt=""
                    />
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 lg:rounded-l-[2rem]"></div>
            </div>
            <div className="relative max-lg:row-start-1">
              <div className="absolute inset-px rounded-lg bg-gray-300 max-lg:rounded-t-[2rem]"></div>
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
                <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                  <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">Performance</p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                    NCAA regulated pool that is heated to 80 degrees. There is also a spa used for recovery and relaxation.
                  </p>
                </div>
                <div className="flex flex-1 items-center justify-center px-8 max-lg:pt-10 max-lg:pb-12 sm:px-10 lg:pb-2">
                  <img
                    className="w-full max-lg:max-w-xs rounded-lg"
                    src="/assets/pool.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 max-lg:rounded-t-[2rem]"></div>
            </div>
            <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
              <div className="absolute inset-px rounded-lg bg-gray-300"></div>
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]">
                <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                  <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">Security</p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                    Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi.
                  </p>
                </div>
                <div className="justify-center flex flex-1 items-center max-lg:py-6 lg:pb-2">
                  <img
                    className="flex rounded-lg"
                    src="/assets/racks.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5"></div>
            </div>
            <div className="relative lg:row-span-2">
              <div className="absolute inset-px rounded-lg bg-gray-300 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
                <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                  <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                    Powerful APIs
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                    Variety of cardio machines. Including Ellipticals, Treadmils, Stair Climbers and More.
                  </p>
                </div>
                <div className="justify-center items-center max-lg:py-6 lg:pb-2">
                  <img
                    className="flex p-8 rounded-2xl"
                    src="/assets/rockwall.jpg"
                    alt=""
                  />
                    <img
                    className="flex p-8 rounded-2xl"
                    src="/assets/cardio.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {loading ? ("Loading Please Wait!") : (<>
        <h1>Count</h1>
        </>)}
      </div>
    </div>
    )
  }

export default HeroSection