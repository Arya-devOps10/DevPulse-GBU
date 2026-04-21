document.addEventListener('DOMContentLoaded', () => {
    // --- 1. Elements Selection ---
    const modal = document.getElementById("projectModal");
    const addNewBtn = document.querySelector(".add-new-btn");
    const closeBtn = document.querySelector(".close-btn");
    const projectForm = document.getElementById("projectForm");
    const projectsContainer = document.getElementById("projectsContainer");
    const projectBtn = document.querySelector(".project-select-btn");
    const projectMenu = document.querySelector(".project-list-items");

    console.log("DevPulse JS Initialized 🚀");

    // --- 2. Dropdown Toggle Logic ---
    if (projectBtn && projectMenu) {
        projectBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            projectMenu.classList.toggle('show');
        });
    }

    // --- 3. Modal Open Logic ---
    if (addNewBtn && modal) {
        addNewBtn.addEventListener("click", (e) => {
            e.preventDefault();
            e.stopPropagation();
            modal.style.display = "flex"; // CSS flex handling ke liye
            if (projectMenu) projectMenu.classList.remove('show');
            console.log("Modal Opened!");
        });
    }

    // --- 4. Modal Close Logic ---
    if (closeBtn) {
        closeBtn.onclick = () => {
            modal.style.display = "none";
        };
    }

    // Outside click handling (Modal aur Dropdown band karne ke liye)
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
        if (projectBtn && !projectBtn.contains(event.target)) {
            if (projectMenu) projectMenu.classList.remove('show');
        }
    });

    // --- 5. Add Project Logic (The Magic) ---
    if (projectForm && projectsContainer) {
        projectForm.onsubmit = (e) => {
            e.preventDefault();

            // Values fetch karna
            const name = projectForm.querySelector('input[type="text"]').value;
            const url = projectForm.querySelector('input[type="url"]').value;
            const lang = projectForm.querySelector('select').value;

            // Naya Project Card Structure
            const newProjectHTML = `
                <div class="glass-card project-card animate-pop">
                    <div class="project-info">
                        <div class="project-header">
                            <h3>${name}</h3>
                            <span class="lang-tag">${lang.split(' ')[0]}</span>
                        </div>
                        <p>New repository successfully synced from GitHub.</p>
                        <div class="project-footer">
                            <span class="status active-glow"><i class="fa-solid fa-circle"></i> Just Added</span>
                            <a href="${url}" target="_blank"><i class="fa-brands fa-github"></i> View</a>
                        </div>
                    </div>
                </div>
            `;

            // Dashboard par sabse upar add karna
            projectsContainer.insertAdjacentHTML('afterbegin', newProjectHTML);

            // Modal band karna aur form reset
            modal.style.display = "none";
            projectForm.reset();

            console.log("Project: " + name + " added successfully! 🔥");
        };
    }
});