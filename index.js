function createPost(){

  var postTitle = document.getElementById("postTitle").value;
  var postBody = document.getElementById("postBody").value;
  var postAuthor = document.getElementById("postAuthor").value;


  var postTemplate = document.getElementById("post-template").innerHTML;
  var pageTemplate = document.getElementById("page-template").innerHTML;
  var commentsTemplate = document.getElementById("comments-template").innerHTML;

  var templatePageFn = _.template(pageTemplate)

  var templateFn = _.template(postTemplate);

  var commentFn= _.template(commentsTemplate);


  var templateHTML = templateFn({ 'pTitle': postTitle, 'pBody': postBody, 'pAuthor': postAuthor});

  posts = document.getElementById("posts");


  posts += templateHTML


}



function postComment() {

  var commenter = document.getElementById("commenterName").value;
  var comment = document.getElementById("commentText").value;

  var commentTemplate = document.getElementById("comment-template").innerHTML;


  var templateFn= _.template(commentTemplate)

  var commentsDiv= document.getElementById("comments");

  var templateHTML = templateFn({ 'comment': comment, 'commenter': commenter });

  commentsDiv+=templateHTML



}
