<script>
    import Register from "./pages/Register.svelte";


</script>

<style>
  main {
    min-width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: start;
    padding-left: 50px;
    align-items: center;
  }
  section {
    background-color: rgba(255, 160, 160, 0.4);
    border-radius: 40px;
    box-shadow: rgba(253, 6, 6, 0.2) 0px 7px 29px 0px;
    padding: 50px;
    width: 40%;
    height: 90vh;
  }

</style>

<main>
  <section>
    <Register />
  </section>
</main>