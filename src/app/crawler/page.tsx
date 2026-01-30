"use client";

import styles from "./crawler.module.css"
import { useCrawlerSettings } from './lib/handleCrawlerSettings';
import Dashboard from "./components/dashboard";
import Celebrity from "./components/celebrity"
import Discussion from "./components/discussion";
import Link from 'next/link';


function CrawlerNavigation() {
  return (
    <div className={styles.crawler_navigation}>
      <nav aria-label="爬虫导航">
        <ul>
          <li><a href="/crawler/home">爬虫控制台</a></li>
          <li><Link href="/crawler/macro_env">宏观环境</Link></li>
          <li><a href="/crawler/industry">行业</a></li>
          <li><a href="/crawler/organization">公司</a></li>
          <li><a href="/crawler/publicfigures">公众人物</a></li>
          <li><a href="/crawler/hot">话题</a></li>
        </ul>
      </nav>
    </div>
  );
}


function CrawlerPlatform(){
    return(
      <div className={styles.crawler_platform}>

          <div className={styles.platform_pieChart} >
              1
          </div>

          <div className={styles.platform_barChart}>
              2
          </div>


      </div>
    )
}

// ================================================
function CrawlerMacroEnvSettings(){
  return(
    <div>

    </div>
  )
}

function CrawlerIndustrySettings(){}


function CrawlerOrganizationSettings(){}

// ================================================
function CrawlerCelebritySettings(){}

function ClawlerHotTopics(){

}
// ================================================



function CrawlerSettings() {
  const {
    selectedOption,
    setSelectedOption,
    handleSubmit,
    loading,
    error
  } = useCrawlerSettings();

  return (
    <div className={styles.crawler_settings}>
      {error && <div className={styles.error}>{error}</div>}

      <input type="search"></input>
      <select 
        multiple
        size={1}
        // value={selectedOption}
        // onChange={(e) => setSelectedOption(e.target.value)}
        // disabled={loading}
      >
        <optgroup label="亚洲">
              <option value="cn">中国</option>
              <option value="jp">日本</option>
              <option value="kr">韩国</option>
            </optgroup>
            
            <optgroup label="欧洲" disabled> 
              <option value="uk">英国</option>
              <option value="fr">法国</option>
              <option value="de">德国</option>
            </optgroup>
            
            <optgroup label="美洲">
              <option value="us">美国</option>
              <option value="ca">加拿大</option>
            </optgroup>
      </select>

      <button 
        onClick={handleSubmit} 
        disabled={loading}
      >
      </button>

      {loading ? '提交中...' : '提交'}


      <label for="username">用户名：</label>
      <input type="text" id="username"></input>

      <fieldset>
        <legend>请选择您喜欢的编程语言（多选）</legend>
        
        <label>
          <input type="checkbox" name="languages" value="js"/>
          JavaScript
        </label>
        
        <label>
          <input type="checkbox" name="languages" value="py"/>
          Python
        </label>
        
        <label>
          <input type="checkbox" name="languages" value="java"/>
          Java
        </label>
      </fieldset>


      
    </div>
  );
}



function ProportionStatistics() {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-4">比例统计</h3>
      
      {/* 饼状图容器 */}
      <div className="flex items-center justify-center space-x-8">
        {/* 饼图 */}
        <div className="relative w-48 h-48">
          <div 
            className="absolute inset-0 rounded-full"
            style={{
              background: `conic-gradient(
                #ef4444 0% 30%,
                #3b82f6 30% 65%,
                #10b981 65% 85%,
                #f59e0b 85% 100%
              )`
            }}
          ></div>
          
          {/* 中心文字 */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="text-2xl font-bold">100%</div>
              <div className="text-sm text-gray-500">总计</div>
            </div>
          </div>
        </div>

        {/* 图例 */}
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-red-500 rounded"></div>
            <span className="text-sm">类别 A (30%)</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-blue-500 rounded"></div>
            <span className="text-sm">类别 B (35%)</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-green-500 rounded"></div>
            <span className="text-sm">类别 C (20%)</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-yellow-500 rounded"></div>
            <span className="text-sm">类别 D (15%)</span>
          </div>
        </div>
      </div>
    </div>
  );
}


export default function crawlerPage() {
    return (
        <div className={styles.crawler_page}>
            {/* <h1 className="text-2xl font-bold mb-4">爬虫信息收集</h1> */}

            {/* <ProportionStatistics></ProportionStatistics> */}
            <CrawlerNavigation/>
            {/* <CrawlerStatistics/> */}
            <CrawlerPlatform/>
            <CrawlerSettings/>
            {/* <Dashboard />
            <Celebrity/>
            <Discussion/> */}
        </div>
    );
}