<template>
<div class="post-container">
    <h1>Blog Posts</h1>
    <div class="post-mini-container"> 
        <div class="post">
            <img class="img-post" src="@/assets/person1.jpg">
            <h4>Blog headline here</h4>
            <h6>Writer name</h6>
        </div>
        <div>
            <h5 class="blog-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae labore dolores laborum tempora aspernatur mollitia culpa nisi itaque. Ipsum, autem ea! Deserunt ullam magnam ad suscipit? Aspernatur quidem dolorem dicta temporibus omnis delectus cupiditate, deserunt vel natus iste dolores earum minus architecto, sapiente dolore? Molestiae rerum quisquam perferendis fugiat temporibus, fugit eos illum nisi pariatur tenetur molestias aliquam dolorem provident nulla ut iste voluptate ea amet magni? Incidunt, aliquam! Necessitatibus explicabo amet corrupti at illum soluta tempora, itaque labore natus, sint saepe laboriosam impedit. Hic quibusdam eligendi sed minima tenetur dolorum obcaecati placeat voluptate vitae mollitia eius nostrum, odit deleniti!
            </h5>
        </div>
        <div class="read-me">
            <h6 class="read-more">Read more..</h6>
        </div>
    </div>
</div>
</template>

<script>
 export default {
    name: 'homePosts'
 }
</script>

<style>

.post-container{
    width: 50%;  
    text-align: center;
    margin: auto; 
}
.post{
    display: flex; 
    margin: 0;
    justify-content: space-around 

}
.post-mini-container{
    border: 2px solid rgb(237, 234, 234); 
    border-radius: 20px; 
}
.post-mini-container:hover{
    border-color: rgb(253, 130, 130);
}
.img-post{
    width: 50px; 
    height: 50px; 
    padding: 15px; 
    border-radius: 50px; 
}
.blog-text{
    text-align: left; 
    padding: 8px; 
}

.read-more{ 
    text-align:  right;
    padding-right: 115px; 

}
.read-more:hover{
    background-color: rgb(253, 130, 130); 
    cursor: pointer; 
    border-radius: 50px; 
}
</style>