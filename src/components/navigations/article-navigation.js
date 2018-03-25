import React, { Component } from 'react';
import './article-navigation.css';

export const Article = ({ article, articleNum, onClick }) => {
  return (
    <li className="article" onClick={onClick}>
      <p className="article-number">{articleNum + 1}</p>
      <h3 className="article-title">{article.title}</h3>
    </li>
  );
};

export const FeaturedArticle = ({ article }) => {
  return (
    <li className="featured">
      <div className="featured-article-container">
        <img
          className="featured-article-image"
          src={article.image}
          alt={article.title}
        />
        <div className="featured-article-text">
          <h3 className="featured-article-title">{article.title}</h3>
          <p className="featured-article-subtitle">{article.subtitle}</p>
        </div>
      </div>
    </li>
  );
};

export class ArticleNavigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      featuredArticleIndex: 0
    };

    this._onArticleClick = this._onArticleClick.bind(this);
  }

  _onArticleClick(id) {
    this.setState({
      featuredArticleIndex: id
    });
  }

  render() {
    const { articles } = this.props;
    const { featuredArticleIndex = 0 } = this.state;
    const featuredArticle = articles[featuredArticleIndex] || articles[0];

    return (
      <div className="article-nav-container">
        <FeaturedArticle article={featuredArticle} />
        <ul className="article-list">
          {articles.map((article, index) => {
            return index === featuredArticleIndex ? null : (
              <Article
                key={`Article-${index}`}
                onClick={() => this._onArticleClick(index)}
                article={article}
                articleNum={index}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}
