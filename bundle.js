(()=>{function t(t){const e=window.location.href;document.querySelector("#app").textContent=e}document.body.addEventListener("click",(e=>{if(e.target.matches("a")){if(e.preventDefault(),!window.history)throw new Error("Your browser doesn't support history API");history.pushState({},"",e.target.href),t()}})),t()})();