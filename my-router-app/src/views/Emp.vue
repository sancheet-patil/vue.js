<template>
    <div>
        <p id="name">Employee Name :: {{$route.params.ename}}</p>
        <br>
        <p id="id"> Employee Id :: {{$route.params.eid}}</p>
        <br>
        <p id="designation">Employee Designation ::{{$route.params.edesig}}</p>
    </div>
</template>
<script>
export default {
    name: 'Employee'
}
</script>
<style>
    #name{
        margin-left:300px;
        color:red;
        background-color: aqua;
        font-size:30px;
    }
    #id{
        margin-left:270px;
        color:green;
        font-size:20px;
    }
    #designation{
        margin-left:300px;
        color:deeppink;
        font-size:40px;
    }
</style>

