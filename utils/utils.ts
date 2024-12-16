const symbols = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+{}|:<>?~-=[];,./';
let interval: NodeJS.Timeout;

export function scrambleWordEffect(el: HTMLElement) {
  let iterations = 0;

  clearInterval(interval);

  interval = setInterval(() => {
    el.innerText = el.innerText.split('').map((letter, index) => {
      if(index < iterations) {
        return el.dataset.value![index];
      }

      return symbols[Math.floor(Math.random() * symbols.length)];
    }).join('');

    if (iterations >= el.dataset.value!.length) {
      clearInterval(interval);
    }

    iterations += 1/3
  }, 30)
}