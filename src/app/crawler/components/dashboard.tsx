import styles from "./dashboard.module.css"

function TopicDiscussionStatistics(){
    return(
        <div>
        
        </div>
    )
}

function CelebrityStatistics(){
    return(
        <div>

        </div>
    )
}

function ArticleStatistics(){
    return(
        <div>
        
        </div>
    
    )
}

export default function Dashboard() {
    return(
        <div className={styles.dashboard}>
            <p>hello</p>
            <ArticleStatistics/>

            <TopicDiscussionStatistics/>

            <CelebrityStatistics/>
        </div>
    )
}