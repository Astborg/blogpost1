<template>
    <div>
        <form class="form">
            <label for="">Writer name: </label>
            <input type="text" max="500">
            <br>
            <label for="img">Select image:</label>
            <input type="file" id="img" name="img" accept="image/*">
            <br>
            <label for="">Your blogtext: </label>
            <textarea name="" id="" cols="30" rows="30"></textarea>

        </form> 
    </div>
</template>
<script>
export default {
    name: 'writePost'
}

</script>
<style>
.form{
    width: 50%;  
    text-align: left;
    margin: auto; 
    display: flex; 
    flex-direction: column;
    
}

</style>