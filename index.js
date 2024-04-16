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

const body = document.body;
   const switch_mode = document.querySelector('#switch-mode i');
   // Load mode 
   let mode = localStorage.getItem('darkmode');
   if(mode=='true'){
      body.classList.add('dark');
      switch_mode.className = "bi bi-brightness-high-fill";
   }
 
   switch_mode.addEventListener('click', () =>{
      switch_mode.classList.toggle('bi-moon-stars-fill');
      switch_mode.classList.toggle('bi-brightness-high-fill');
      let mode = body.classList.toggle('dark');
      // save mode 
      localStorage.setItem('darkmode', mode);
   });
