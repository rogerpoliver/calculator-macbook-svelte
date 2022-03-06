<script lang="ts">
  import { validate_store } from "svelte/internal";

  export let value: string;
  $: fontSize = value.length > 20 ? "small" : `s-${value.length}`;
</script>

<div class={`screen ${fontSize}`}>
  <span>{value}</span>
</div>

<style>
  .screen {
    display: flex;
    flex: 1;
    justify-content: flex-end;
    align-items: center;
    padding: 0px 5px;
    color: #fff;
    overflow: hidden;
    font-size: 1.7rem;
  }

  .s-10 {
    font-size: 1.5rem;
  }
  .s-11 {
    font-size: 1.4rem;
  }
  .s-12 {
    font-size: 1.3rem;
  }
  .s-13 {
    font-size: 1.2rem;
  }
  .s-14 {
    font-size: 1.1rem;
  }
  .s-15 {
    font-size: 1rem;
  }
  .s-16 {
    font-size: 0.9rem;
  }
  .s-17 {
    font-size: 0.8rem;
  }
  .s-18 {
    font-size: 0.7rem;
  }
  .s-19 {
    font-size: 0.6rem;
  }
  .s-20 {
    font-size: 0.5rem;
  }
</style>
