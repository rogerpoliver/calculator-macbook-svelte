<script lang="ts">
  import Button from "./Button.svelte";
  import Row from "./Row.svelte";
  import Screen from "./Screen.svelte";

  class Model {
    value: string
    constructor(value: string = '0') {
      this.value = value
    }
  }

  let obj = new Model()
  
 
  let value = "";
  function numberChoosed(number: string) {
    value += number;
  }
</script>

<div class="calculator">
  <Screen value={value} />
  <Row>
    <Button text="AC" triple alternative />
    <Button text="÷" operation />
  </Row>
  <Row>
    <Button text="7" onClick={numberChoosed} />
    <Button text="8" onClick={numberChoosed}/>
    <Button text="9" onClick={numberChoosed}/>
    <Button text="x" operation onClick={numberChoosed}/>
  </Row>
  <Row>
    <Button text="4" />
    <Button text="5" />
    <Button text="6" />
    <Button text="-" operation />
  </Row>
  <Row>
    <Button text="1" />
    <Button text="2" />
    <Button text="3" />
    <Button text="+" operation />
  </Row>
  <Row>
    <Button text="0" double zero />
    <Button text="," />
    <Button text="=" operation equals />
  </Row>
</div>

<style>
  .calculator {
    height: 220px;
    width: 150px;
    background-color: var(--background-color);
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 1px;
    border-radius: 10px;
  }
</style>
