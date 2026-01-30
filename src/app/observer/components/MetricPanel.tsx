import MetricCard from "./MetricCard";

export default function MetricPanel() {
    return (
        <div className="flex space-x-1 h-[100px] px-6">
     
        <div className="flex-1 h-full">
                    <MetricCard
                        metrics={[
                            { label: "舆情总量", value: "12345" },
                            { label: "风险预警", value: "3 条" },
                        ]} 
                        
                    />
        </div>

        <div className="flex-[2] h-full"> 
            <MetricCard metrics={[
                { label: "情感比例", value: "正面 60% / 负面 40%" }
            ]} />

        </div>
       
        <div className="flex-1 h-full">
            <MetricCard metrics={[
                        { label: "智能问答", value: "开始问答吧" }
            ]} />
        </div>

    </div>
    )
}


