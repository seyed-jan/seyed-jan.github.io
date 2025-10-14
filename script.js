document.title = "صفحه شخصی - " + config.name;
document.querySelector('.name').textContent = config.name;
document.querySelector('.bio').textContent = config.bio;
document.getElementById('aboutText').textContent = config.about;
document.getElementById('instaLink').href = config.instagram;
document.getElementById('tgLink').href = config.telegram;
document.getElementById('ghLink').href = config.github;
// document.getElementById("email").textContent = config.email;
// document.getElementById('instaText').textContent = config.instagram.replace(/^https?:\/\//,'').replace('www.','');
// document.getElementById('tgText').textContent = config.telegram.replace(/^https?:\/\//,'').replace('www.','');
// document.getElementById('ghText').textContent = config.github.replace(/^https?:\/\//,'').replace('www.','');
// document.getElementById('cvLink').href = config.cv || '#';

const avatar = document.querySelector('#avatar img');
avatar.src = config.profileImage;
avatar.alt = config.name + ' - profile';

const favicon = document.querySelector('link[rel=\"icon\"]');
if (favicon && config.favicon) {
favicon.href = config.favicon;
}

// const projectsRoot = document.getElementById('projects');
// projects.forEach(p=>{
//   const el = document.createElement('article');
//   el.className = 'project';
//   el.innerHTML = `
//     ${escapeHtml(p.link) ? `<a href=${p.link}>` : ''}
//     <div class=\"thumb\", style="overflow:hidden"><img src='${escapeHtml(p.image || '')}' onerror="this.remove()" style="width:100%; height:100%; object-fit:cover; display:block;"></div>
//     <div class=\"meta\">
//       <strong>${escapeHtml(p.title)}</strong>
//   <div style=\"margin-top:6px;color:var(--muted)\">${escapeHtml(p.description)}</div>
//   <div class=\"tags\"><span class=\"tag\">HTML</span><span class=\"tag\">JS</span></div>
//     </div>
//     ${escapeHtml(p.link) ? `</a>` : ''}
//   `;
//   projectsRoot.appendChild(el);
// });

const blogRoot = document.getElementById('blog');
posts.forEach(p => {
  const d = document.createElement('div');
  d.className = 'post';
  d.innerHTML = `
<div class="p-thumb" style="overflow:hidden;"><img src='${escapeHtml(p.image || '')}' onerror="this.remove()" style="width:100%; height:100%; object-fit:cover; display:block;"></div>
<div style="flex:1">
    <h3>${escapeHtml(p.title)}</h3>
    <p class="post-content" style="white-space: pre-wrap;">${escapeHtml(p.content)}</p>
    <p class="muted" style="margin-top: 8px;"><small>${escapeHtml(p.date)}</small></p>
    </div>
`;
blogRoot.appendChild(d);
});


function escapeHtml(s){
     return String(s)
    .replace(/&/g,'&amp;')
    .replace(/</g,'&lt;')
    .replace(/>/g,'&gt;')
    .replace(/\"/g,'&quot;')
    .replace(/'/g,'&#39;');
}