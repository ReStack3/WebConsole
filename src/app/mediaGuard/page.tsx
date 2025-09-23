// app/page.tsx
import MetricPanel from "./components/MetricPanel";
import TrendChart from "./components/TrendChart";
import AlertList from "./components/AlertList";
import WordCloud from "./components/WordCloud";

export default function Dashboard() {
  return (
    <div className="flex flex-col min-h-screen gap-6 p-6">
      


      <MetricPanel />
 

    <div className="h-[800px] px-6 flex space-x-6">
        {/* 左侧折线图，占宽度 3/4 */}
        <div className="flex-[3] h-full">
          <TrendChart />
        </div>

        {/* 右侧热词云，占宽度 1/4 */}
        <div className="flex-[1] h-full">
          <WordCloud />
        </div>
    </div>


  
       <div className="h-[800px] px-6">
          <AlertList />
      </div>

      
    </div>
  );
}
