<script lang="ts">
  import Calculator from "./components/Calculator.svelte";
</script>

<main>
  <Calculator />
</main>

<style>
  :global(body) {
    background-color: #000000;
  }

  :root {
    --background-color: #232223;
  }

  main {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
</style>
