// document.addEventListener("DOMContentLoaded", function() {
//     // Function to fetch JSON data
//     function fetchJsonData(json_path) {
//       return fetch(json_path)
//         .then(response => response.json())
//         .catch(error => {
//           console.error('Error fetching JSON:', error);
//           return null;
//         });
//     }

//     // Get JSON file path from URL query parameter
//     function getUrlParameter(sParam) {
//       var sPageURL = window.location.search.substring(1);
//       var urlParams = new URLSearchParams(sPageURL);
//       return urlParams.get(sParam);
//     }

//     var jsonPath = getUrlParameter('json_path');
//     console.log("test")
//     if (jsonPath) {
//       fetchJsonData(jsonPath)
//         .then(data => {
//           if (data) {
//             // Update product name
//             document.getElementById('productName').textContent = data.name;

//             // Update baking type
//             document.getElementById('bakingType').textContent = data.baking_type;

//             // Update description
//             document.getElementById('description').textContent = data.description;

//             // Update dimensions
//             document.getElementById('dimensions').textContent = data.dimensions;

//             // Update weight
//             document.getElementById('weight').textContent = data.weight;

//             // Update price
//             document.getElementById('price').textContent = data.price;

//             // Update image slider
//             var imageSlider = document.getElementById('imageSlider');
//             data.image_paths.forEach(imagePath => {
//               var swiperSlide = document.createElement('div');
//               swiperSlide.className = 'swiper-slide';
//               var img = document.createElement('img');
//               img.src = imagePath;
//               img.alt = ''; // You can set alt text if needed
//               swiperSlide.appendChild(img);
//               imageSlider.appendChild(swiperSlide);
//             });

//             // Initialize Swiper slider after images are added
//             var swiper = new Swiper('.portfolio-details-slider', {
//               loop: true,
//               pagination: {
//                 el: '.swiper-pagination',
//                 clickable: true,
//               },
//             });
//           }
//         });
//     }
//   });

// document.addEventListener("DOMContentLoaded", function() {
//   // Function to fetch JSON data
//   function fetchJsonData(json_path) {
//     return fetch(json_path)
//       .then(response => response.json())
//       .catch(error => {
//         console.error('Error fetching JSON:', error);
//         return null;
//       });
//   }

//   // Get JSON file path from URL query parameter
//   function getUrlParameter(sParam) {
//     var sPageURL = window.location.search.substring(1);
//     var urlParams = new URLSearchParams(sPageURL);
//     return urlParams.get(sParam);
//   }

//   var jsonPath = getUrlParameter('json_path');

//   if (jsonPath) {
//     fetchJsonData(jsonPath)
//       .then(data => {
//         if (data) {
//           // Update product name
//           document.getElementById('productName').textContent = data.name;

//           // Update baking type
//           document.getElementById('bakingType').textContent = data.baking_type;

//           // Update description
//           document.getElementById('description').textContent = data.description;

//           // Update dimensions
//           document.getElementById('dimensions').textContent = data.dimensions;

//           // Update weight
//           document.getElementById('weight').textContent = data.weight;

//           // Update price
//           document.getElementById('price').textContent = data.price;

//           // Create image slider
//           var imageSlider = document.getElementById('imageSlider');
//           imageSlider.innerHTML = ''; // Clear any existing slides
//           data.image_paths.forEach(imagePath => {
//             var swiperSlide = document.createElement('div');
//             swiperSlide.className = 'swiper-slide';
//             var img = document.createElement('img');
//             img.src = imagePath;
//             img.alt = ''; // You can set alt text if needed
//             swiperSlide.appendChild(img);
//             imageSlider.appendChild(swiperSlide);
//           });

//           // Initialize Swiper slider after images are added
//           var swiper = new Swiper('.portfolio-details-slider', {
//             loop: true,
//             pagination: {
//               el: '.swiper-pagination',
//               clickable: true,
//             },
//           });
//         }
//       })
//       .catch(error => {
//         console.error('Error fetching or parsing JSON:', error);
//       });
//   }
// });


document.addEventListener("DOMContentLoaded", function() {
  // Function to fetch JSON data
  function fetchJsonData(json_path) {
    return fetch(json_path)
      .then(response => response.json())
      .catch(error => {
        console.error('Error fetching JSON:', error);
        return null;
      });
  }

  // Get JSON file path from URL query parameter
  function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1);
    var urlParams = new URLSearchParams(sPageURL);
    return urlParams.get(sParam);
  }

  var jsonPath = getUrlParameter('json_path');
  
  if (jsonPath) {
    fetchJsonData(jsonPath)
      .then(data => {
        if (data) {
          // Update product details
          document.getElementById('productName').textContent = data.name;
          document.getElementById('bakingType').textContent = data.baking_type;
          document.getElementById('description').textContent = data.description;
          document.getElementById('dimensions').textContent = data.dimensions;
          document.getElementById('weight').textContent = data.weight;
          document.getElementById('price').textContent = data.price;

          // Clear existing slides
          var imageSlider = document.getElementById('imageSlider');
          imageSlider.innerHTML = '';

          // Create image slides
          data.image_paths.forEach(imagePath => {
            var swiperSlide = document.createElement('div');
            swiperSlide.className = 'swiper-slide';
            var img = document.createElement('img');
            img.src = imagePath;
            img.alt = ''; // You can set alt text if needed
            swiperSlide.appendChild(img);
            imageSlider.appendChild(swiperSlide);
          });

          // Ensure only one Swiper instance
          if (window.mySwiper) {
            window.mySwiper.destroy(true, true);
          }

          // Initialize Swiper
          window.mySwiper = new Swiper('.portfolio-details-slider', {
            loop: true,
            pagination: {
              el: '.swiper-pagination',
              clickable: true,
            },
          });
        }
      })
      .catch(error => {
        console.error('Error fetching or parsing JSON:', error);
      });
  }
});