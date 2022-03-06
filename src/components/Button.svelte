<script lang="ts">
  export let double: boolean = false;
  export let triple: boolean = false;
  export let operation: boolean = false;
  export let alternative: boolean = false;
  export let zero: boolean = false;
  export let equals: boolean = false;
  export let text: string;
  export let onClick: (valor: string) => void = () => {};
</script>

<button
  on:click={() => onClick(text)}
  class="button"
  class:double
  class:triple
  class:operation
  class:alternative
  class:zero
  class:equals
>
  {text}
</button>

<style>
  .button {
    flex-basis: 25%;
    margin: 0;
    border: solid 1px var(--background-color);
    background-color: #565659;
    color: #ffff;
  }
  .double {
    flex-basis: 50%;
  }
  .triple {
    flex-basis: 75%;
  }
  .operation {
    background-color: #ff9f2f;
  }
  .alternative {
    background-color: #393839;
  }

  .zero {
    border-radius: 0px 0px 0px 10px;
  }

  .equals {
    border-radius: 0px 0px 10px 0px;
  }
</style>
