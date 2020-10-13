class Article {
  /**
   * @param {String} author: Article author
   * @param {String} title: Article title
   * @param {Date} publishDt: Article publish date
   * @param {String} content: Article content
   * @param {String[]} comments: Article comments
   */
  constructor({ author, title, publishDt, content, comments }) {
    this.author = author;
    this.title = title;
    this.publishDt = publishDt;
    this.content = content;
    this.comments = comments;
  }
}

module.exports = Article;
