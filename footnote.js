
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("sup[data-fn]").forEach(sup => {
    const id = sup.dataset.fn;
    const footnote = document.querySelector(`.footnote[data-id="${id}"]`);
    if (!footnote) return;
    const popup = document.createElement("div");
    popup.className = "tooltip";
    popup.innerHTML = footnote.innerHTML;
    sup.appendChild(popup);
  });
});
