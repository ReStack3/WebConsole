interface MetricItem {
  label: string;
  value: string | number;

}
interface MetricCardProps {
  metrics: MetricItem[]; // 支持多个指标
}

export default function MetricCard( { metrics }:  MetricCardProps){
    return (
        <div 
        className="p-4 bg-white rounded-xl shadow flex flex-col justify-center h-full overflow-y-auto">
        {
              metrics.map((metric, index) => (
                 <div key={index} className="flex justify-between items-center mb-2">
                    <div className="text-gray-100">{metric.label}</div>
                    <div className="text-xl font-bold">{metric.value}</div>
                </div>
            )
        )
        }
                
        </div>
    )
}

