<script>
    
</script>

<style>

.home{
        background-color: greenyellow;
        height: 100vh;
        width: 100VH;
    }

    

@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
 
 *{
   margin: 0;
   padding: 0;
 }
 html{
   background-color: cadetblue;
 }
 body{
   font-family: 'Roboto', sans-serif;
   height: 1000px;
   width: 800px;
   background-color: rgb(213, 236, 180);
   margin: 0 auto;
   font-size: 15;
 }
  
 h3{
   font-size: 20px;
   color:tomato;
   padding:10px;
   border-bottom: 1px solid #afafaf;
 }
 table{
   width: 100%;
   padding:10px;
   border-collapse: collapse;
 }
  
 table thead td{
   padding: 5px;
   background-color: lightslategray;
   color:white;
 }
 table tbody td{
   padding: 5px;
 }
  
 table tbody tr:nth-child(even){
   background-color: rgb(229, 231, 233);
 }
  
 .edit,.delete,.addbtn{
   text-decoration: none;
   color:white;
   padding:2px 10px 2px 10px;
   text-align: center;
   border-radius: 3px;
   background-color: blueviolet;
 }
 .delete{
   background-color: red;
 }
  
 p{
   text-align: right;
   padding:5px;
 }
  
 .addbtn{
   background-color:darkslategrey;
 }
  
 .form-group{
  margin-top: 10px;
  padding:5px;
 }
 .form-group label,.form-group input{
   display: block;
 }
  
 button{
   color:white;
   padding:2px 10px 2px 10px;
   border:none;
   border-radius: 3px;
   background-color: blueviolet;
   font-size: 12px;
  
 }
  
 .alert{
   display: block;
   padding: 5px;
   background: forestgreen;
   border-radius: 3px;
   height: 20px;
   color:white;
 }
  
 input{
   font-size: 15px;
 }


</style>

<div>
    <body>
        <h3>Add New Student</h3>
        <form method="post" action="/insertuser">
        <div class="form-group">
            <label for="name">Name</label>
            <input type="text" required name="name" >
        </div>
    
        <div class="form-group">
            <label for="age">Age</label>
            <input type="text" required name="age">
        </div>
    
        <div class="form-group">
            <label for="city">City</label>
            <input type="text" required name="city">
        </div>
    
        <div class="form-group">
          <button type="submit">Save Details</button>
        </div>
        </form>
    
       
        <button><a href="/crud" class="viewbtn">View All</a></button>
        
        
    </body>

</div>