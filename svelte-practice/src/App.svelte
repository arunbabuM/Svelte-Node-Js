<script>
  import { Router, Route, Link } from "svelte-routing";

    import Login from "./pages/Login.svelte";
    import Home from "./pages/Home.svelte";
    

  export let url = "";
</script>

<Router url="{url}">
  <nav>
   <Link to="/">Log In</Link>
   <Link to="Home">Home</Link>
   <Link to="blog">Blog</Link>
  </nav>
  <div>
   <Route path="/"><Login /></Route>
   <Route path="Home"><Home /></Route>

  </div>
</Router>