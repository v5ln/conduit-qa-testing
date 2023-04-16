import ArticleData from "../../fixtures/articleData";
import User from "../../fixtures/model/user";
import AccountData from "../../fixtures/accountData"


class Services {

  createNewArticle() {
    const token = localStorage.getItem('jwt');
    cy.request({
      method: 'POST',
      url: 'https://conduit.productionready.io/api/articles',
      headers: {
        'Authorization': `Token ${token}`
      },
      body: {
        article: {
          title: ArticleData.Title,
          description: ArticleData.Description,
          body: ArticleData.Body,
          tagList: ArticleData.TagList
        }
      }
    }).then(response => {
      const slug = response.body.article.slug;
      ArticleData.slug = slug;
    });
  }

  followUser(username: string) {
    username = '@' + username
    const token = localStorage.getItem('jwt');

    cy.request({
      method: 'POST',
      url: `https://conduit.productionready.io/api/profiles/${username}/follow`,
      headers: {
        'Authorization': `Token ${token}`
      }
    });
  }

  unfollowUser(username: string) {
    username = '@' + username
    const token = localStorage.getItem('jwt');

    cy.request({
      method: 'DELETE',
      url: `https://conduit.productionready.io/api/profiles/${username}/follow`,
      headers: {
        'Authorization': `Token ${token}`
      }
    });
  }

  deleteArticle(
    url?: string,
    articleId: string = url? ArticleData.getSlug(url):ArticleData.getSlug(url)) {
    const token = localStorage.getItem('jwt');

    cy.request({
      method: 'DELETE',
      url: `https://conduit.productionready.io/api/articles/${articleId}`,
      headers: {
        'Authorization': `Token ${token}`
      }
    });
  }

  favoriteArticle(
    url?: string,
    articleId: string = url? ArticleData.getSlug(url):ArticleData.getSlug(url)) {
    const token = localStorage.getItem('jwt');

    cy.request({
      method: 'POST',
      url: `https://conduit.productionready.io/api/articles/${articleId}/favorite`,
      headers: {
        'Authorization': `Token ${token}`
      }
    });
  }

  unfavoriteArticle(
    url?: string,
    articleId: string = url? ArticleData.getSlug(url):ArticleData.getSlug(url)) {
    const token = localStorage.getItem('jwt');

    cy.request({
      method: 'DELETE',
      url: `https://conduit.productionready.io/api/articles/${articleId}/favorite`,
      headers: {
        'Authorization': `Token ${token}`
      }
    });
  }

  addCommentToArticle(
    url?: string,
    articleId: string = url? ArticleData.getSlug(url):ArticleData.getSlug(url),
    comment: string = ArticleData.Comment) {
    const token = localStorage.getItem('jwt');
    cy.request({
      method: 'POST',
      url: `https://conduit.productionready.io/api/articles/${articleId}/comments`,
      headers: {
        'Authorization': `Token ${token}`
      },
      body: {
        comment: { body: comment }
      }
    }).then(response => {
      const commentId = response.body.comment.id;
      ArticleData.CommentId = commentId;
    });
  }

  deleteComment(
    url?: string,
    articleId: string = url? ArticleData.getSlug(url):ArticleData.getSlug(url),
    commentId: number = ArticleData.CommentId) {
    const token = localStorage.getItem('jwt');

    cy.request({
      method: 'DELETE',
      url: `https://conduit.productionready.io/api/articles/${articleId}/comments/${commentId}`,
      headers: {
        'Authorization': `Token ${token}`
      }
    });
  }

  static createNewUser(){
    cy.logout()
    AccountData.getNewUsername()
    AccountData.getNewEmail()
    AccountData.getNewPassword()
    cy.signup(AccountData.newUsername, AccountData.newEmail, AccountData.newPassword)
    
  }
}

export default Services;
