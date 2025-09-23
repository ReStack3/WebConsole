export default function ContentPlaceHolder() {
  return (
    <div className="bg-white shadow-lg rounded-lg -mt-12 mb-4 p-6">
      <div className="flex flex-col lg:flex-row lg:space-x-10">

        {/* 列 1 */}
        <div className="flex-1 space-y-5">
          {/* Ether Price */}
          <div className="flex items-center">
            <div className="w-6 text-center mr-3">
              <img
                className="mx-auto w-4"
                src="/images/svg/brands/ethereum-original.svg"
                alt="Ethereum Logo"
              />
            </div>
            <div className="flex-1">
              <div className="uppercase text-sm mb-1">Ether Price</div>
              <a href="#" className="text-gray-800 text-base">
                $4,294.74 <span className="text-gray-400">@ 0.038779 BTC</span>
                <span className="text-red-500 text-sm">(-1.04%)</span>
              </a>
            </div>
          </div>

          <hr className="my-5" />

          {/* Market Cap */}
          <div className="flex items-center">
            <div className="mr-3 text-2xl">🌐</div>
            <div className="flex-1">
              <div className="uppercase text-sm mb-1">Market Cap</div>
              <a href="#" className="text-gray-800 text-base">
                $518,397,150,086.00
              </a>
            </div>
          </div>
        </div>

        {/* 列 2 */}
        <div className="flex-1 space-y-5 border-t lg:border-t-0 lg:border-l lg:pl-6 lg:ml-6 pt-5 lg:pt-0">
          {/* Transactions & Gas */}
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div className="mr-3 text-2xl">🖧</div>
              <div>
                <div className="uppercase text-sm mb-1">Transactions</div>
                <a href="#" className="text-gray-800 text-base">2,978.26 M</a>
                <span className="text-gray-400 text-sm"> (14.1 TPS)</span>
              </div>
            </div>
            <div className="text-right">
              <div className="uppercase text-sm mb-1">Med Gas Price</div>
              <a href="#" className="text-gray-800 text-base">
                0.19 Gwei <span className="text-gray-400 text-sm">($0.02)</span>
              </a>
            </div>
          </div>

          <hr className="my-5" />

          {/* Last Blocks */}
          <div className="flex justify-between items-center">
            <div>
              <div className="uppercase text-sm mb-1">Last Finalized Block</div>
              <span className="text-base">23301983</span>
            </div>
            <div className="text-right">
              <div className="uppercase text-sm mb-1">Last Safe Block</div>
              <span className="text-base">23302015</span>
            </div>
          </div>
        </div>

        <div className="flex-1 space-y-5 border-t lg:border-t-0 lg:border-l lg:pl-6 lg:ml-6 pt-5 lg:pt-0">
          {/* Transactions & Gas */}
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div className="mr-3 text-2xl">🖧</div>
              <div>
                <div className="uppercase text-sm mb-1">Transactions</div>
                <a href="#" className="text-gray-800 text-base">2,978.26 M</a>
                <span className="text-gray-400 text-sm"> (14.1 TPS)</span>
              </div>
            </div>
            <div className="text-right">
              <div className="uppercase text-sm mb-1">Med Gas Price</div>
              <a href="#" className="text-gray-800 text-base">
                0.19 Gwei <span className="text-gray-400 text-sm">($0.02)</span>
              </a>
            </div>
          </div>

          <hr className="my-5" />

          {/* Last Blocks */}
          <div className="flex justify-between items-center">
            <div>
              <div className="uppercase text-sm mb-1">Last Finalized Block</div>
              <span className="text-base">23301983</span>
            </div>
            <div className="text-right">
              <div className="uppercase text-sm mb-1">Last Safe Block</div>
              <span className="text-base">23302015</span>
            </div>
          </div>
        </div>

        {/* 列 3 */}
        <div className="flex-1 border-t lg:border-t-0 lg:border-l lg:pl-6 lg:ml-6 pt-5 lg:pt-0">
          <div className="uppercase text-sm mb-2">Transaction History in 14 days</div>
          <div className="w-full h-24 bg-gray-100">
            {/* 这里可以放 Highcharts/Chart.js 图表 */}
          </div>
        </div>
      </div>
    </div>
  );
}
