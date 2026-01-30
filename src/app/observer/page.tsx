
import MetricPanel from "./components/MetricPanel";
import TrendChart from "./components/TrendChart";
import AlertList from "./components/AlertList";
import WordCloud from "./components/WordCloud";

// export default function Dashboard() {
//   return (
//     <div className="flex flex-col min-h-screen gap-6 p-6">
      
//       <MetricPanel />


//     <div className="h-[800px] px-6 flex space-x-6">
//         {/* 左侧折线图，占宽度 3/4 */}
//         <div className="flex-[3] h-full">
//           <TrendChart />
//         </div>

//         {/* 右侧热词云，占宽度 1/4 */}
//         <div className="flex-[1] h-full">
//           <WordCloud />
//         </div>
//     </div>


  
//       <div className="h-[800px] px-6">
//           <AlertList />
//       </div>

      
//     </div>
//   );
// }

import styles from "./observer.module.css"
import Link from 'next/link';



function ObserverNavigation() {
  return (
    <div className={styles.observer_navigation}>
      <nav aria-label="导航">
        <ul>
          <li><Link href="/observer/macroEnv">宏观环境</Link></li>
          <li><a href="/observer/industry">行业分析</a></li>
          <li><a href="/observer/company">公司分析</a></li>
          <li><a href="/observer/sentiment">情绪分析</a></li>
          <li><a href="/observer/technical">技术分析</a></li>
        </ul>
      </nav>
    </div>
  );
}


function MonitorPublicFigure(){
  return(
    <div className={styles.public_figure}>
      公众人物监测
    </div>
  );
}


export default function ObserverPage(){
  return(
    <div className={styles.observer_page}>
      <ObserverNavigation/>
      <MonitorPublicFigure/>
    </div>
    )
}


