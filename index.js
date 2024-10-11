document.addEventListener('mousemove', (e) => {
    const trail = document.createElement('div');
    trail.classList.add('trail');
    const trailSize = 20;
    trail.style.left = `${e.pageX - trailSize / 50}px`;
    trail.style.top = `${e.pageY - trailSize / 50}px`;
    document.body.appendChild(trail);
    setTimeout(() => {
      trail.remove();
    }, 200);
  });
  

window.addEventListener('load', function() {
    const loading = document.getElementById('loading');
    const content = document.getElementById('content');
    setTimeout(() => {
        loading.style.display = 'none';
        content.style.display = 'block';
        content.classList.add('show');
    }, 2000);
});
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('.section, .info-section, .theend-section');
    const windowHeight = window.innerHeight;

    sections.forEach(section => {
        const position = section.getBoundingClientRect().top;
        if (position < windowHeight * 0.67) {
            section.classList.add('visible');
        } else {
            section.classList.remove('visible');
        }
    });
});


window.addEventListener('scroll', function() {
    var sections = document.querySelectorAll('.section');
    var windowHeight = window.innerHeight;
    
    sections.forEach(function(section) {
        var position = section.getBoundingClientRect().top;
        
        if (position < windowHeight * 0.67) {
            section.classList.add('visible');
        } else {
            section.classList.remove('visible');
        }
    });
});

window.addEventListener('scroll', function() {
    var sections = document.querySelectorAll('.info-section');
    var windowHeight = window.innerHeight;
    
    sections.forEach(function(section) {
        var position = section.getBoundingClientRect().top;
        
        if (position < windowHeight * 0.67) {
            section.classList.add('visible');
        } else {
            section.classList.remove('visible');
        }
    });
});


window.addEventListener('scroll', function() {
    var sections = document.querySelectorAll('.over-section');
    var windowHeight = window.innerHeight;
    
    sections.forEach(function(section) {
        var position = section.getBoundingClientRect().top;
        
        if (position < windowHeight * 0.67) {
            section.classList.add('visible');
        } else {
            section.classList.remove('visible');
    }});
});
window.addEventListener('scroll', function() {
    var sections = document.querySelectorAll('.theend-section');
    var windowHeight = window.innerHeight;
    
    sections.forEach(function(section) {
        var position = section.getBoundingClientRect().top;
        
        if (position < windowHeight * 0.67) {
            section.classList.add('visible');
        } else {
            section.classList.remove('visible');
        }
    });
});



