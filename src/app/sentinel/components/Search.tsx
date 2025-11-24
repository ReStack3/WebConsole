"use client";

export default function Search() {
  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col lg:flex-row justify-between items-center">
        {/* 左侧搜索内容 */}
        <div className="flex-1 lg:max-w-3xl mb-5">
          <h1 className="text-white text-3xl lg:text-4xl font-medium mb-3">
            The Ethereum Blockchain Explorer
          </h1>

          <form action="/search" method="GET" className="mb-3">
            <div className="flex gap-2 p-2.5 bg-white rounded border">
              {/* Search Filter */}
              <div className="hidden sm:block">
                <select
                  name="f"
                  className="border-0 text-base p-2 rounded"
                  aria-label="Filter select"
                >
                  <option value="0" >All Filters</option>
                  <option value="1">Addresses</option>
                  <option value="2">Tokens</option>
                  <option value="3">Name Tags</option>
                  <option value="6">Domain Names</option>
                  <option value="4">Labels</option>
                  <option value="5">Websites</option>
                </select>
              </div>

              {/* Search Box */}
              <div className="flex-1 relative">
                <input
                  id="search-panel"
                  type="text"
                  name="q"
                  className="w-full border-0 text-base pr-8"
                  placeholder="Search by Address / Txn Hash / Block / Token / Domain Name"
                  autoComplete="off"
                  spellCheck={false}
                  maxLength={68}
                  onKeyUp={(e) => console.log()} // handleSearchText
                />
                <button
                  type="submit"
                  className="absolute right-1 top-1/2 -translate-y-1/2 bg-blue-600 text-white px-3 py-1 rounded"
                >
                  🔍
                </button>
              </div>
            </div>
          </form>

          {/* Text Ads */}
          <p className="text-white text-opacity-75 mb-0 min-h-[22px]">
            {/* 可以插入广告内容 */}
            Sponsored Ads Slots Available! <a href="#" className="underline">Book your slot here!</a>
          </p>
        </div>

        {/* 右侧横幅广告 */}
        <div className="flex-shrink-0 mx-auto mt-4 lg:mt-0">
          <div className="hidden lg:flex justify-center items-center">
            <a href="#" target="_blank" rel="nofollow" className="relative inline-block">
              <span className="absolute right-3 top-[-0.5rem] bg-white text-dark shadow-sm rounded px-1 text-xs">Ad</span>
              <img
                className="rounded"
                src="https://etherscan.io/images/gen/moonpay_etherscan_dec24_321x101.png"
                alt="Ad Banner"
                width={321}
                height={101}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
