<style>
    
   
    .home{
        background-color: white;
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
   background-color: white;
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


<script>
	import Adduser from './adduser.svelte';
	
    import axios from "axios";

    


    const API_PORT = import.meta.env.VITE_BACKEND_API;
    console.log(API_PORT)
    let data = ''
    let adduser = false;
async function submitHandler(e) {

        const formData = Object.fromEntries(new FormData(e.target).entries());
         console.log(formData)
        const response = await axios.post(`${API_PORT}/adduser`,formData);
        console.log(response.data);
       if(!response) {
        adduser = true;
       }
}
</script>

<div class="home">
    {#if !adduser}
    <form on:submit|preventDefault="{submitHandler}">
<h3>Student Management System</h3>
<!-- <p><a href="/adduser" class="addbtn">Add User</a></p> -->
<p><input type="submit" class="addbtn" value="Add User"></p>
<table>
    <thead>
        <tr>
            <td>#</td>
            <td>Name</td>
            <td>Age</td>
            <td>City</td>
            <td>Edit</td>
            <td>Delete</td>
        </tr>
    </thead>
<tbody>
    <!-- <tr>
        <td>1</td>
        <td>Arun</td>
        <td>25</td>
        <td>Mumbai</td>
        <td><a href="" class="edit">Edit</a></td>
        <td><a href="" class="delete">Delete</a></td>
    </tr> -->

  <!-- <% for(let rows of data){ %>
  <tr>
    <td><%= rows.id %>&ensp;</td>
    <td><%= rows.name %>&ensp;</td>
    <td><%= rows.age %>&ensp;</td>
    <td><%= rows.city %>&ensp;</td>
    <td><a class="edit"  href="/update-user?id=<%= rows.id %>"  >Edit</a></td>
    <td><a class="delete"  href="/delete-user?id=<%= rows.id %>"  >Delete</a></td>        
  </tr>
  <%} %> -->
</tbody>
</table>
    </form>
{:else if adduser}
<Adduser />
{/if}
</div>

