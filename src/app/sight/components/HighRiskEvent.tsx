
function EventItem({ title, height }: { title: string; height: number }){
    return(
        <div
            className="bg-white rounded shadow flex items-center justify-center"
            style={{ height }}
        >
        {title}
        </div>
    )
}


export default function EventListPanel() {
  const events = Array.from({ length: 10 }, (_, i) => `事件${i + 1}`);

  return (
    <div className="flex flex-col h-screen p-4 gap-2">
      {/* 搜索框 */}
      <input
        type="text"
        placeholder="搜索事件..."
        className="h-12 p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {/* 列表区域，flex-1 占剩余高度 */}
      <div className="flex-1 flex flex-col gap-2">
        {events.map((title, idx) => (
          <EventItem key={idx} title={title} />
        ))}
      </div>
    </div>
  )
}