import React from "react";
import Navbar from "../../components/navbar";
import NewsCard from "../../components/newscard";
import { useRouter } from "next/router";
import styles from "../../styles/Home.module.css";
import Footer from "../../components/footer";
import Header from "../../components/header";

function Query({ articles, page }) {
  const router = useRouter();
  const row1 = articles.slice(1, 3);
  const fullnews = articles.slice(3, -1);

  return (
    <div className={styles.container}>
      <Navbar />
      <Header />
      {articles.length == 0 ? (
        <h1 className="container mx-auto fw-bold">Opps were out of stories 😢</h1>
      ) : (
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
      )}
      <Footer />
    </div>
  );
}

export const getServerSideProps = async (context) => {
  const query = context.query.query;
  if (!query) {
    return {
      props: {
        articles: [],
      },
    };
  }
  const res = await fetch(
    `https://newsapi.org/v2/top-headlines?pageSize=100&country=in&q=${query}&apiKey=dbc10f1961c7427b80f6fdfbb5b7c125`
  );
  const resjson = await res.json();
  return {
    props: {
      articles: resjson.articles,
    },
  };
};

export default Query;
