<script lang="ts">
  import CalculatorModel from "../model/CalculatorModel";

  import Button from "./Button.svelte";
  import Row from "./Row.svelte";
  import Screen from "./Screen.svelte";

  let calc = new CalculatorModel();

  const inputtedValue = (num: string) => (calc = calc.inputtedValue(num));
  const inputtedDot = () => (calc = calc.inputtedDot());
  const inputtedOperation = (operation: string) =>
    (calc = calc.inputtedOperation(operation));
  const allClear = () => (calc = calc.AllClear());
  const calculate = () => (calc = calc.calculate());
</script>

<div class="calculator">
  <Screen value={calc.value} />
  <Row>
    <Button text="AC" triple alternative onClick={allClear} />
    <Button text="/" operation onClick={inputtedOperation} />
    <!-- <Button text="÷" operation onClick={inputtedOperation} /> -->
  </Row>
  <Row>
    <Button text="7" onClick={inputtedValue} />
    <Button text="8" onClick={inputtedValue} />
    <Button text="9" onClick={inputtedValue} />
    <Button text="*" operation onClick={inputtedOperation} />
    <!-- <Button text="x" operation onClick={inputtedOperation} /> -->
  </Row>
  <Row>
    <Button text="4" onClick={inputtedValue} />
    <Button text="5" onClick={inputtedValue} />
    <Button text="6" onClick={inputtedValue} />
    <Button text="-" operation onClick={inputtedOperation} />
  </Row>
  <Row>
    <Button text="1" onClick={inputtedValue} />
    <Button text="2" onClick={inputtedValue} />
    <Button text="3" onClick={inputtedValue} />
    <Button text="+" operation onClick={inputtedOperation} />
  </Row>
  <Row>
    <Button text="0" double zero onClick={inputtedValue} />
    <Button text="," onClick={inputtedDot} />
    <Button text="=" operation equals onClick={calculate} />
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
