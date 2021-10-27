/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";

function NewsCard({ article, fullBody = false }) {
  const router = useRouter();
  return (
    <div
      key={article.url}
      className={`${styles.hover} col-12 mb-3`}
      onClick={() => {
        router.push((window.location.href = `${article.url}`));
      }}
    >
      <div className="card h-100 text-white overflow-hidden">
        <img
          src={
            article.urlToImage == undefined
              ? "https://images.unsplash.com/photo-1478940020726-e9e191651f1a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
              : article.urlToImage
          }
          className={`${styles.card} card-img img-fluid ${
            fullBody ? styles.full : ""
          }`}
          alt=".."
        />
        <div className={styles.overlay}></div>
        <div className="card-img-overlay d-flex flex-column justify-content-end w-75">
          <h5 className="card-title">{article.title}</h5>
          <p className="small text-secondary mb-0">
            Published at {article.publishedAt.slice(0, 10)}
          </p>
        </div>
      </div>
      {fullBody ? (
        <div className="card-footer border-0 h-100 bg-secondary text-light">
          <p className="card-text small">{article.description}</p>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default NewsCard;
