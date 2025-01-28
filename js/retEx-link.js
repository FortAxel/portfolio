document.addEventListener('DOMContentLoaded', () => {
    const projectContainer = document.getElementById('experienceList');

    navigationOrder.forEach(id => {
        const project = retexData[id];
        const projectCard = document.createElement('a');
        projectCard.href = `retEx.html?id=${id}`;
        projectCard.innerHTML = `
            <div class="project-card">
                <p class="txt">${project.linkTitle}</p>
            </div>
        `;
        projectContainer.appendChild(projectCard);
    });
});