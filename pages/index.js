/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Navbar from "../components/navbar";
import { useRouter } from "next/router";
import NewsCard from "../components/newscard";
import Header from "../components/header";


export default function Home({ articles }) {

  const router = useRouter();
  const row1 = articles.slice(1,3);
  const fullnews = articles.slice(3,-1)

  return (
    <div className={styles.container}>
     
      <Header/>
      <Navbar />

      <div className="container">
        <div className="row">
          <div className="col-8">
            <NewsCard article={articles[0]} />
          </div>
          <div className="col-4">
            <div className="row h-100">
              {row1.map((article) => (
                <NewsCard key={article.url} article={article} />
              ))}
            </div>
          </div>
        </div>
        <div className="row h-100">
          {fullnews.map((article) => (
            <div key={article.url} className="col-4">
              <NewsCard article={article} fullBody />
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

export const getServerSideProps = async (context) => {
  const res = await fetch(
    `https://newsapi.org/v2/top-headlines?pageSize=100&country=in&apiKey=dbc10f1961c7427b80f6fdfbb5b7c125`
  );
  const resjson = await res.json();
  return {
    props: {
      articles: resjson.articles,
    },
  };
};
