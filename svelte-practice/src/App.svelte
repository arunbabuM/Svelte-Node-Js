<script>
	
	
  import { Router, Route, Link } from "svelte-routing";

    import Login from "./pages/Login.svelte";
    import Home from "./pages/Home.svelte";
    import Adduser from './pages/adduser.svelte';
    
    

  export let url = "";
</script>

<Router url="{url}">
  
   <Link to="/" ><h4 style="color:white;"> Log In </h4></Link>
   <Link to="Home"><h4 style="color:white;">Home</h4></Link>
   <Link to="/adduser"></Link>
  <div>
   <Route path="/"><Login /></Route>
   <Route path="Home"><Home /></Route>
   <Route path="adduser"><Adduser /></Route>
   
  </div>
</Router>




