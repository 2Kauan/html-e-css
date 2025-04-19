// JavaScript (script.js) 

function showSection(id) { document.querySelectorAll('.content-section').forEach(section => { section.classList.remove('active'); }); const activeSection = document.getElementById(id); if (activeSection) { activeSection.classList.add('active'); 
    
} 
}