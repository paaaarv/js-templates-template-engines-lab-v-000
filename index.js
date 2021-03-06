function createPost(){

  var postTitle = document.getElementById("postTitle").value;
  var postBody = document.getElementById("postBody").value;
  var postAuthor = document.getElementById("postAuthor").value;


  var postTemplate = document.getElementById("post-template").innerHTML;
  var pageTemplate = document.getElementById("page-template").innerHTML;
  var commentsTemplate = document.getElementById("comments-template").innerHTML;

  var templatePageFn = _.template(pageTemplate)

  mainDiv = document.getElementsByTagName("main")[0].innerHTML;
  mainDiv+= templatePageFn()


  var templateFn = _.template(postTemplate);

  var commentFn= _.template(commentsTemplate);


  var templateHTML = templateFn({ 'pTitle': postTitle, 'pBody': postBody, 'pAuthor': postAuthor});



  posts = document.getElementById("post");


  posts += templateHTML
  posts += commentFn()


  console.log(mainDiv)




}



function postComment() {

  var commenter = document.getElementById("commenterName").value;
  var comment = document.getElementById("commentText").value;
  console.log(commenter)
  console.log(comment)

  var commentsDiv= document.getElementById("comments");

  var commentHTML = commentFn({ 'comment': comment, 'commenter': commenter });

  commentsDiv+=templateHTML



}
