import styles from './article.module.css';


function Filter(){
    return(
        <div>

        </div>
    )
}

function Search(){
    return(
        <div className={styles.crawler_search}>
            <input/>  
            <button></button>
            <Filter/>
        </div>
    )
}

function ArticleList(){
    return(
        <div>   

        </div>
    )
}


export default function Article() {
    return(
        <div className={styles.article}>
            <p>这里页面信息</p>
            <Search/>
            <ArticleList/>
        </div>
    )
}