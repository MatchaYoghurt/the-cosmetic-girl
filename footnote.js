document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("sup[data-fn]").forEach(sup => {
    const id = sup.dataset.fn;
    const footnote = document.querySelector(`.footnote[data-id="${id}"]`);
    if (!footnote) return;

    const popup = document.createElement("div");
    popup.className = "tooltip";
    popup.innerHTML = footnote.innerHTML;
    document.body.appendChild(popup); // ⭐ 插入 body，而不是 sup 裡

    // 追蹤滑鼠移動
    sup.addEventListener("mouseenter", (e) => {
      const rect = sup.getBoundingClientRect();
      popup.style.display = "block";
      popup.style.position = "absolute";
      popup.style.top = `${window.scrollY + rect.bottom + 6}px`;
      popup.style.left = `${window.scrollX + rect.left + rect.width / 2}px`;
      popup.style.transform = "translateX(-50%)";
    });

    sup.addEventListener("mouseleave", () => {
      popup.style.display = "none";
    });
  });
});
