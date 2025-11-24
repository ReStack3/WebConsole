export default function AlertList() {
  return (
    <div className="flex flex-col gap-6">

      {/* 第一行：搜索框 + 筛选框 卡片 */}
      <div className="bg-white shadow-md rounded-xl p-4">
        <div className="flex flex-col md:flex-row md:items-center gap-4">
          {/* 搜索框 */}
          <input
            type="text"
            placeholder="搜索事件..."
            className="flex-1 p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* 筛选框 */}
          <ul className="flex overflow-x-auto gap-2 snap-x snap-mandatory">
            {['1h', '6h', '12h', '1d', '7d', '30d'].map((label, idx) => (
              <li key={idx} className="snap-start">
                <input
                  type="radio"
                  id={`filter-${idx}`}
                  name="timeinterval"
                  className="hidden peer"
                  defaultChecked={idx === 1} // 默认选中6h
                />
                <label
                  htmlFor={`filter-${idx}`}
                  className="px-3 py-1.5 bg-gray-100 rounded-lg cursor-pointer text-gray-700 peer-checked:bg-blue-500 peer-checked:text-white whitespace-nowrap transition"
                >
                  {label}
                </label>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* 第二行：负面预警列表 卡片 */}
      <div className="bg-white shadow-md rounded-xl p-6 flex flex-col h-full">
        <h2 className="text-lg font-semibold mb-4">负面预警列表</h2>
        <ul className="divide-y divide-gray-200">
          <li className="py-2">事件 1 - 高风险</li>
          <li className="py-2">事件 2 - 中风险</li>
          <li className="py-2">事件 3 - 低风险</li>
          {/* 可以动态生成更多事件 */}
        </ul>
      </div>

    </div>
  );
}
