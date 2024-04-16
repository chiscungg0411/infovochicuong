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
      body.classList.toggle('dark-mode');
      
      // Lấy biểu tượng Dark Mode
      const darkModeIcon = document.getElementById('darkModeIcon');

      // Kiểm tra trạng thái của Dark Mode
      if (body.classList.contains('dark-mode')) {
        // Nếu là Dark Mode, chuyển sang biểu tượng trăng
        darkModeIcon.innerHTML = '<i class="fas fa-sun"></i>';
      } else {
        // Nếu là Light Mode, chuyển sang biểu tượng mặt trời
        darkModeIcon.innerHTML = '<i class="fas fa-moon"></i>';
      }
    }

