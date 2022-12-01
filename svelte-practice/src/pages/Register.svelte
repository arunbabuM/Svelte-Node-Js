<script>
    import axios from "axios";
    const API_PORT = import.meta.env.VITE_BACKEND_API;
    console.log(API_PORT)
    let data = ''

async function submitHandler(e) {

        const formData = Object.fromEntries(new FormData(e.target).entries());
         console.log(formData)
        const response = await axios.post(`${API_PORT}/register`,formData);
        console.log(response.data);
        data = response.data;

}
</script>

<style>
    .input-group {
        padding: 10px;
        margin: 10px;
    }
</style>

<div class="container">
    <div class="text-center">
    <img src="/images/logo-nmims.png" height="80" alt="Logo"/>
    </div>
    <!-- <h3 class="text-center text-white">Login</h3> -->
    <form class="login-form form text-center" on:submit|preventDefault={submitHandler}>
        <div class="input-group">
            <input type="text" class="form-control" name="username" placeholder="Username">
        </div>
        <div class="input-group">
            <input type="text" class="form-control" name="first_name" placeholder="First Name">
        </div>
        <div class="input-group">
            <input type="text" class="form-control" name="last_name" placeholder="Last Name">
        </div>
        <div class="input-group">
            <input type="text" class="form-control" name="email" placeholder="Email Id">
        </div>
        <div class="input-group">
            <input type="text" class="form-control" name="phone_number" placeholder="Contact Number">
        </div>
        <div class="input-group">
            <input type="text" class="form-control" name="password_hash" placeholder="Password">
        </div>
        <button type="submit" class="w-50 btn btn-success ">Submit</button>
    </form>
</div>