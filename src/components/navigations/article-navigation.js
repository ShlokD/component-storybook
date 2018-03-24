import React, { Component } from 'react';
import './article-navigation.css';

export const Article = ({ article, onClick }) => {
  return (
    <li className="article" onClick={onClick}>
      <h3 className="article-title">{article.title}</h3>
    </li>
  );
};

export const FeaturedArticle = ({ article }) => {
  return (
    <li className="article featured">
      <div className="featured-article-container">
        <img
          className="featured-article-image"
          src={article.image}
          alt={article.title}
        />
        <h3 className="featured-article-title">{article.title}</h3>
      </div>
    </li>
  );
};

export class ArticleNavigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      featuredArticle: 0
    };

    this._onArticleClick = this._onArticleClick.bind(this);
  }

  _onArticleClick(id) {
    this.setState({
      featuredArticle: id
    });
  }

  render() {
    const { articles } = this.props;
    const { featuredArticle } = this.state;

    return (
      <div className="article-nav-container">
        <ul className="article-list">
          {articles.map((article, index) => {
            return index === featuredArticle ? (
              <FeaturedArticle key={`Article-${index}`} article={article} />
            ) : (
              <Article
                key={`Article-${index}`}
                onClick={() => this._onArticleClick(index)}
                article={article}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}
