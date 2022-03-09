const DONT_RELOAD_SCREEN = false;
const RELOAD_SCREEN = true;

export default class CalculatorModel {
  #value: string;
  #accumulator: number;
  #clearScreen: boolean;
  #operation: string;

  constructor(
    value: string = null,
    accumulator: number = null,
    operation: string = null,
    clearScreen = false
  ) {
    this.#value = value;
    this.#accumulator = accumulator;
    this.#clearScreen = clearScreen;
    this.#operation = operation;
  }

  get value() {
    return this.#value?.replace(".", ",") || "0";
  }

  inputtedValue(newValue: string) {
    return new CalculatorModel(
      this.#clearScreen || !this.#value ? newValue : this.#value + newValue,
      this.#accumulator,
      this.#operation,
      DONT_RELOAD_SCREEN
    );
  }

  inputtedDot() {
    return new CalculatorModel(
      this.#value?.includes(".") ? this.#value : this.value + ".",
      this.#accumulator,
      this.#operation,
      DONT_RELOAD_SCREEN
    );
  }

  AllClear() {
    return new CalculatorModel();
  }

  inputtedOperation(nextOperation: string) {
    return this.calculate(nextOperation);
  }

  calculate(nextOperation: string = null) {
    const accumulator = !this.#operation
      ? parseFloat(this.#value)
      : eval(`${this.#accumulator} ${this.#operation} ${this.#value}`);

    const value = !this.#operation ? this.#value : `${accumulator}`;

    return new CalculatorModel(
      value,
      accumulator,
      nextOperation,
      nextOperation ? RELOAD_SCREEN : DONT_RELOAD_SCREEN
    );
  }
}
