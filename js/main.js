// js/main.js
document.addEventListener("DOMContentLoaded", function () {
  // === Render current year ===
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // === Mobile nav toggle ===
  const navToggle = document.getElementById("navToggle");
  const navList = document.getElementById("navList");
  if (navToggle) {
    navToggle.addEventListener("click", () => {
      navList.classList.toggle("show");
    });
  }

  // === Render project cards ===
  const grid = document.getElementById("projectGrid");
  if (grid && typeof PROJECTS !== "undefined") {
    Object.values(PROJECTS).forEach((p) => {
      const card = document.createElement("div");
      card.className = "project-card";

      card.innerHTML = `
        <img src="${p.thumb}" alt="${p.title} thumbnail" class="project-thumb">
        <h3 class="project-title">${p.title}</h3>
        <p class="project-desc">${p.description}</p>
        <div class="project-actions">
          <a href="${p.liveUrl}" target="_blank" rel="noopener" class="btn-live">View Live</a>
          <button class="btn-case" data-id="${p.id}">View Case Study</button>
        </div>
      `;

      grid.appendChild(card);
    });
  }

  // === Modal setup ===
  let modal = null;

  function createModal() {
  modal = document.createElement("div");
  modal.className = "project-modal-overlay";
  modal.innerHTML = `
    <div class="project-modal">
      <div class="project-modal__header">
        <h3 class="project-modal__title"></h3>
        <button class="project-modal__close">✕</button>
      </div>
      <div class="project-modal__body"></div>
    </div>`;
  document.body.appendChild(modal);

  modal.querySelector(".project-modal__close").addEventListener("click", () => closeModal());
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });
}


  function openModal(project) {
  if (!modal) createModal();
  modal.querySelector(".project-modal__title").textContent = project.title;
  modal.querySelector(".project-modal__body").innerHTML = project.caseStudyHtml || "<p>No case study available yet.</p>";
  modal.style.display = "flex"; // overlay uses flex
  document.body.style.overflow = "hidden";
}
function closeModal() {
  if (!modal) return;
  modal.style.display = "none";   // hide the overlay
  document.body.style.overflow = "";
}
  // === Handle case study button clicks ===
  document.body.addEventListener("click", (e) => {
    const btn = e.target.closest(".btn-case");
    if (!btn) return;
    const id = btn.getAttribute("data-id");
    if (id && PROJECTS[id]) {
      openModal(PROJECTS[id]);
    }
  });

  // === Smooth scrolling ===
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");
      if (targetId.length > 1) {
        e.preventDefault();
        const el = document.querySelector(targetId);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });
});
