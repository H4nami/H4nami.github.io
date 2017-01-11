particlesJS("particles-js", { 
  "particles":{

    "number": {
      "value": 99,
      "density": { "enable": true, "value_area": 789.13 }
    },
    
    "color": { 
      "value": "#f492a0"
    },

    "shape": {
      "type": "image",
      "stroke": { "width": 0, "color": "#000000" },
      "polygon": { "nb_sides": 3 },
      "image": {
        "src": "sakura.png",
        "width": 150,
        "height": 150
      }
    },

    "opacity": {
      "value": 1,
      "random": false,
      "anim": { "enable": true, "speed": 1, "opacity_min": 0.1, "sync": false }
    },

    "size": {
      "value": 3, 
      "random": true,
      "anim": { "enable": false, "speed": 40, "size_min": 0.1, "sync": false }
    },

    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#f492a0",
      "opacity": 1,
      "width": 1.4204657549380908
    },

    "move": {
      "enable": true,
      "speed": 6,
      "direction": "bottom",
      "random": true,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": { "enable": false, "rotateX": 600, "rotateY": 1200 }
    }
  },


  "interactivity": {
    "detect_on": "canvas",
    
    "events": {
      "onhover": { "enable": true, "mode": "bubble" },
      "onclick": { "enable": true, "mode": "repulse" },
      "resize": true
    },

    "modes": {
      "grab": { "distance": 400, "line_linked": { "opacity": 1 }},
      "bubble": {
        "distance": 143.85614385614386,
        "size": 12.01,
        "duration": 1.1988011988011988,
        "opacity": 8,
        "speed": 3
      },
      "repulse": { "distance": 143.99999, "duration": 0.4 },
      "push": { "particles_nb": 4 },
      "remove": { "particles_nb": 2 }
    }
  },


  "retina_detect":true
});

var count_particles, stats, update;
stats = new Stats; 
stats.setMode(0); 
stats.domElement.style.position = 'absolute'; 
stats.domElement.style.left = '0px'; 
stats.domElement.style.top = '0px';
document.body.appendChild(stats.domElement); 
count_particles = document.querySelector('.js-count-particles'); 
update = function() {
  stats.begin(); 
  stats.end(); 
  if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
    count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
  } 
  requestAnimationFrame(update);
};
requestAnimationFrame(update);