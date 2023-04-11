import { Before } from "@badeball/cypress-cucumber-preprocessor";
import Services from './services';

const services = new Services()

Before(({ tags : "@createNewArticle"}),()=>{
    services.createNewArticle()
});

Before(({ tags : "@addCommentToArticle"}),()=>{
    services.addCommentToArticle()
});

Before(({ tags : "@favoriteArticle"}),()=>{
    services.favoriteArticle()
});

Before(({ tags : "@followUser"}),()=>{
    services.followUser('@conduitTC')
});

Before(({ tags : "@deleteArticle"}),()=>{
    services.deleteArticle()
});

Before(({ tags : "@deleteComment"}),()=>{
    services.deleteComment()
});

Before(({ tags : "@unfavoriteArticle"}),()=>{
    services.unfavoriteArticle()
});

Before(({ tags : "@unfollowUser"}),()=>{
    services.unfollowUser('@conduitTC')
});
