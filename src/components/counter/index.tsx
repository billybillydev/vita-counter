type CounterProps = {
  initialValue: number;
};

export function Counter(props: CounterProps) {
  const data = JSON.stringify(props);

  return (
    <div x-data={`counter(${data})`} class="card">
      <button x-on:click="decrement">-</button>
      <input type="text" x-bind="input" />
      <button x-on:click="increment">+</button>
    </div>
  );
}
