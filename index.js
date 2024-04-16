window.addEventListener('scroll', function() {
        var sections = document.querySelectorAll('.section');
        var windowHeight = window.innerHeight;
        
        sections.forEach(function(section) {
            var position = section.getBoundingClientRect().top;
            
            if (position < windowHeight * 0.67) {
                section.classList.add('visible');
            } else {
                section.classList.remove('visible'); // Loại bỏ lớp 'visible' khi phần tử không còn trong vùng nhìn thấy
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
                section.classList.remove('visible'); // Loại bỏ lớp 'visible' khi phần tử không còn trong vùng nhìn thấy
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
                section.classList.remove('visible'); // Loại bỏ lớp 'visible' khi phần tử không còn trong vùng nhìn thấy
            }
        });
    });

function toggleDarkMode() {
      const body = document.body;
      const sections = document.querySelectorAll('.section, .info-section');
      
      body.classList.toggle('dark-mode'); // Chuyển đổi lớp 'dark-mode' cho thẻ body
      sections.forEach(section => section.classList.toggle('dark-mode')); // Chuyển đổi lớp 'dark-mode' cho các section
    }
