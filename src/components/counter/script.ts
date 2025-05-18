import { AlpineComponent } from 'alpinejs';

type CounterDataOutput = {
  count: number;
  decrement: () => void;
  increment: () => void;
  change: (value: number) => void;
  input: Partial<Alpine.EncapsulateAttributes>;
};

export default function ({
  initialValue,
}: {
  initialValue: number;
}): AlpineComponent<CounterDataOutput> {
  return {
    count: initialValue,
    decrement() {
      this.count--;
    },
    increment() {
      this.count++;
    },
    change(value: number) {
      this.count = value;
    },
    input: {
      ':value': function() {
        return this.count;
      },
      '@input': function(event: { target: { value: string } }) {
        this.change(Number(event.target.value));
      },
      '@click.window': function() {
        console.log('clicked');
      },
      '@keydown.meta.window': function() {
        console.log('meta pressed')
      },
      '@keydown.shift.space': function() {
        console.log('shift + space pressed')
      },
      '@keydown.ctrl.enter': function() {
        console.log('ctrl + enter pressed')
      },
      'x-on:keyup.window': function(event: KeyboardEvent) {
        console.log({ eventKey: event.key });
      },
      '@keydown.shift.slash.window': function() {
        console.log('shift + slash pressed')
      },
      'x-show': function() {
        return this.count <= 10;
      },
      ':name': "count",
      'x-transition.duration.1000ms': function() {
        return true;
      }
    },
  };
}
