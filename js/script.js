const sections = document.getElementById('tools');

json.data.forEach(function(section) {
  let categoriesHtml = ``;

  section.categories.forEach(function(category) {
    let toolsHtml = ``;

    category.links.forEach(function(link) {
      toolsHtml += `<li>
          <a href="${link.url}" target="_blank">${link.title}</a>
          <span>${link.text}</span>
      </li>`;
    });

    categoriesHtml += `<div class="panel-content-category">
        <h3>${category.title}</h3>

        <ul>${toolsHtml}</ul>
    </div>`;
  });

  let sectionHtml = `<div class="panel collapse">
      <div class="panel-header">
          <p><i class="ion-${section.icon}"></i> ${section.name}</p>
          <div class="panel-header-right">
              <i class="arrow ion-arrow-down-b"></i>
          </div>
      </div>

      <div class="panel-content">
          ${categoriesHtml}
      </div>
  </div>`;

  sections.innerHTML += sectionHtml;
});

const panels = document.querySelectorAll('.panel-header');

panels.forEach(function(panel){
    panel.addEventListener('click', function(e) {
        e.preventDefault();

        const panelParent = panel.parentElement;
        const icon = panel.childNodes[0].childNodes[0];

        if (panelParent.className == 'panel collapse') {
            panelParent.classList.remove('collapse');
        } else {
            panelParent.classList.add('collapse');
        }
    });
});
