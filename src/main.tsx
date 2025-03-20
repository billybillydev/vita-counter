import Alpine from 'alpinejs';
import './style.css';
import { App } from '$/components/app';

await import('$/components/counter/script').then((m) =>
  Alpine.data('counter', m.default)
);

window.Alpine = Alpine;

Alpine.start();

document.querySelector<HTMLDivElement>('#app')!.innerHTML = String(<App />);
