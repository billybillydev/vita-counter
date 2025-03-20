import { AlpineComponent } from 'alpinejs';

type CounterDataOutput = {
  counter: number;
  decrement: () => void;
  increment: () => void;
  change: (
    this: AlpineComponent<CounterDataOutput> & {
      $event: { target: { value: string } };
    },
    value: number
  ) => void;
  input: Record<
    string,
    (
      this: AlpineComponent<CounterDataOutput> & {
        $event: { target: { value: string } };
      }
    ) => void
  >;
};

export default function ({
  initialValue,
}: {
  initialValue: number;
}): CounterDataOutput {
  return {
    counter: initialValue,
    decrement() {
      this.counter--;
    },
    increment() {
      this.counter++;
    },
    change() {
      this.counter = Number(this.$event.target.value);
    },
    input: {
      [':value']() {
        return this.counter;
      },
      ['@input']() {
        this.change(Number(this.$event.target.value));
      },
    },
  };
}
