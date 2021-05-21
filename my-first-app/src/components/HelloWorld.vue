<template>
  <div class="text-danger jumbotron">
    Applying Style using bootstrap

    <div class="container">
        <div class="row">
            <p class="col-md-4" id="para1">Para1</p>
            <p class="col-md-4" id="para2">Para2</p>
            <p class="col-md-5" id="para3">Para3</p>
        </div>
    </div>
  <div>
    <button class="btn btn-primary">Primary</button>
    <button class="btn btn-info">Info</button>
    <button class="btn btn-success">Success</button>
    <button class="btn btn-warning">Warning</button>
    <button class="btn btn-danger">Danger</button>
  </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
#para1{
  background-color: green;
}
#para2{
  background-color: orange;

}
#para3{
  background-color: aqua;
}
</style>
