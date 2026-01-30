

// ┌─────────────────────────────────────────────┐
// │          PEST Macro Intelligence Console    │
// ├───────────────┬───────────────┬─────────────┤
// │ 参数配置区     │ 数据来源区     │ 分析结果区   │
// │ (Filters)      │ (Sources)     │ (Insights)  │
// │               │               │             │
// │ 国家选择       │ ✔ 信息源选择   │ 结构化摘要   │
// │ PEST维度选择   │ ✔ PDF上传      │ 风险评分     │
// │ 时间范围       │ ✔ 关键词补充   │ 置信度       │
// │ 权重参数       │               │ 可导出       │
// │               │               │             │
// │ [运行分析]     │               │             │
// └───────────────┴───────────────┴─────────────┘

"use client";
import { Source_Code_Pro } from 'next/font/google';
import styles from './macroEnv.module.css'
import { useState } from "react";

function CountrySetting() {

    const countries = ["美国", "中国", "德国", "日本", "印度"];

    const [selected, setSelected] = useState("请选择国家");
    const [open, setOpen] = useState(false);

    return (
        <div className={styles.country_content}>

            {/* 显示区域 */}
            <div
                className={styles.country_select}
                onClick={() => setOpen(!open)}
            >
                <span>{selected}</span>
                <span className={styles.arrow}>▼</span>
            </div>

            {/* 下拉列表 */}
            {open && (
                <div className={styles.dropdown}>
                    {countries.map(country => (
                        <div
                            key={country}
                            className={styles.dropdown_item}
                            onClick={() => {
                                setSelected(country);
                                setOpen(false);
                            }}
                        >
                            {country}
                        </div>
                    ))}
                </div>
            )}

        </div>
    );
}

function PestSetting() {

    const pestItems = [
        { key: "politics", label: "政治", color: "#ff6b6b" },
        { key: "economy", label: "经济", color: "#4dabf7" },
        { key: "society", label: "社会", color: "#51cf66" },
        { key: "technology", label: "科技", color: "#845ef7" }
    ];

    return (
        <div className={styles.pest_content}>
            {pestItems.map(item => (
                <div
                    key={item.key}
                    className={styles.pest_btn}
                    style={{ "--hoverColor": item.color } as React.CSSProperties}
                >
                    {item.label}
                </div>
            ))}
        </div>
    );
}

// --------------------------------------

function UserUploadPanel(){
    return <div>用户上传文件区域</div>
}

function FileSelectPanel(){
    return <div>本地文件选择器</div>
}

function AutoSearchPanel(){
    return <div>系统自动检索数据源</div>
}


type UploadSettingProps = {
    mode: string;
    setMode: (mode: string) => void;
};

function UploadSetting({mode, setMode}: UploadSettingProps){

    const options = [
        {key:"upload", label:"用户自定义上传"},
        {key:"file", label:"自定义选择文件"},
        {key:"auto", label:"系统自行搜索"}
    ];

    return(
        <div className={styles.upload_content}>
            {options.map(opt => (
                <button
                    key={opt.key}
                    onClick={()=>setMode(opt.key)}
                >
                    {opt.label}
                </button>
            ))}
        </div>
    );
}


type ModeType = "upload" | "file" | "auto";


type SourcesProps = {
    mode: ModeType;
};


function Sources({mode}: SourcesProps){

    return(
        <div className={styles.sources_panel}>

            {mode === "upload" && <UserUploadPanel/>}
            {mode === "file" && <FileSelectPanel/>}
            {mode === "auto" && <AutoSearchPanel/>}

        </div>
    )
}

function SourcesArea({ mode, setMode }: UploadSettingProps) {
    return (
        <div className={styles.sources_area}>
            <h2>数据源展示区</h2>
            <Sources mode={mode} />
        </div>
    )
}


export default function MacroEnvPage() {
    // ✅ 状态提升到最顶层
    const [mode, setMode] = useState<ModeType>("upload");


    const [clicked, setClicked] = useState(false);
    const handleClick = () => {
        console.log("按钮被点击了！");
        setClicked(!clicked);
    }

    return (
        <div className={styles.macro_env_page}>

            {/* 参数配置区 */}
            <div className={styles.param_cfg_area}>
                <h2>参数配置区</h2>
                <CountrySetting/>
                <PestSetting/>
                {/* 可以放在独立 div 内 */}
                <UploadSetting mode={mode} setMode={setMode}/>
                
               <button
                className={`${styles.run_button} ${clicked ? styles.active : ""}`}
                onClick={handleClick}
            >
                真正的按钮
            </button>

                
            </div>

            {/* 数据源展示区 */}
            <SourcesArea mode={mode} setMode={setMode}/>

            {/* 分析结果区 */}
            <div className={styles.results_area}>
                <h2>观察洞察区</h2>
                <div className={styles.results_content}>
                    <p>分析结果...</p>
                </div>
            </div>

            
        </div>
    )
}
