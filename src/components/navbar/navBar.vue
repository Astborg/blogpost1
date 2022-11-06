<template>
   <div class="container">
    <div>
      <img class="img" src="@/assets/bloglogo.jpg">
    </div>
    <div class="nav-div">
        <navbar class="nav">
                <ul class="navbar">
                    <router-link to="homePosts" class="li">Home</router-link>
                    <router-link to="writePost" class="li">Write a post</router-link>
                </ul>
        </navbar>
    </div>   
  </div>
</template>
<style>
.img{
  width: 100px; 
  padding-left: 20px;
  padding-top: 20px; 
}
.nav-div{
    background-color: rgb(232, 232, 229); 
}
.navbar{
    
    margin: auto; 
    list-style: none;
    display: flex; 
    justify-content: center;
    
}
.li{
    background-color: rgb(232, 232, 229); 
    border-radius: 50px; 
    padding: 10px; 
    margin: 10px;  
    cursor: pointer; 
}
.li:hover{
    background-color: rgb(162, 232, 162);
}
</style>