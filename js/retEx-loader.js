document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const currentId = urlParams.get('id');

    if (!currentId || !retexData[currentId]) {
        window.location.href = 'index.html';
        return;
    }

    const currentRetex = retexData[currentId];

    document.getElementById('projectImage').src = currentRetex.image;
    document.getElementById('projectTitle').textContent = currentRetex.title;

    // requirements
    const requirementsList = document.getElementById('requirements');
    currentRetex.requirements.forEach(req => {
        const li = document.createElement('li');
        li.innerHTML = `<p class="txt">${req}</p>`;
        requirementsList.appendChild(li);
    });

    // tools
    const toolsList = document.getElementById('tools');
    currentRetex.tools.forEach(tool => {
        const li = document.createElement('li');
        li.innerHTML = `<p class="txt">${tool}</p>`;
        toolsList.appendChild(li);
    });

    // skills
    const skillsList = document.getElementById('skillsList');
    currentRetex.skills.forEach(skill => {
        const li = document.createElement('li');
        li.innerHTML = `<p class="txt">${skill}</p>`;
        skillsList.appendChild(li);
    });

    // tool logo
    const toolLogos = document.getElementById('toolLogos');
    currentRetex.toolLogos.forEach(logo => {
        const img = document.createElement('img');
        img.src = logo;
        img.alt = '';
        toolLogos.appendChild(img);
    });

    // nav
    const currentIndex = navigationOrder.indexOf(currentId);
    const prevIndex = (currentIndex - 1 + navigationOrder.length) % navigationOrder.length;
    const nextIndex = (currentIndex + 1) % navigationOrder.length;

    const prevId = navigationOrder[prevIndex];
    const nextId = navigationOrder[nextIndex];

    document.getElementById('prevLink').href = `./retEx.html?id=${prevId}`;
    document.getElementById('nextLink').href = `./retEx.html?id=${nextId}`;

    document.getElementById('prevTitle').textContent = retexData[prevId].linkTitle;
    document.getElementById('nextTitle').textContent = retexData[nextId].linkTitle;

    // page title
    document.title = currentRetex.title;
});
