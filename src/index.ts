function render(hash?: string) {
  const href = window.location.href;

  document.querySelector("#app")!.textContent = href 
}

const navLinks: NodeListOf<HTMLAnchorElement> = document.body.querySelectorAll('.nav');

if (isProd) {
  Array.from(navLinks).forEach((link) => {
    link.href = PREFIX + link.pathname; 
  });
}

document.body.addEventListener("click", (ev) => {
  if ((ev.target as HTMLElement).matches("a")) {
    // const hash = (ev.target as HTMLAnchorElement).hash;
    ev.preventDefault();

    if (!window.history) throw new Error('Your browser doesn\'t support history API');
    
    history.pushState({}, '', (ev.target as HTMLAnchorElement).href);

    render();
  }
});

render();
