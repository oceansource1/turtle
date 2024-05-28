let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = 'none';
    });
    slides[index].style.display = 'block';
}

function changeSlide(step) {
    currentSlide += step;
    if (currentSlide >= slides.length) {
        currentSlide = 0;
    } else if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }
    showSlide(currentSlide);
}

document.addEventListener('DOMContentLoaded', function () {
    showSlide(currentSlide);  // Show the first slide initially
});

document.querySelectorAll('.faq-question').forEach(item => {
    item.addEventListener('click', () => {
        const answer = item.nextElementSibling;
        if (answer.style.display === "block") {
            answer.style.display = "none";
        } else {
            answer.style.display = "block";
        }
    });
});

document.getElementById('uploadBtn').addEventListener('click', function () {
    document.getElementById('turtleImage').click();  // Trigger the file input click
});

document.getElementById('turtleImage').addEventListener('change', function() {
    const fileChosenSpan = document.getElementById('fileChosen');
    if (this.files.length > 0) {
        fileChosenSpan.textContent = this.files[0].name;  // Update the span to show the file name
    } else {
        fileChosenSpan.textContent = 'No file chosen';  // Reset the text if no file is selected
    }
});

function identifyDisease() {
    const fileInput = document.getElementById('turtleImage');
    const resultsDiv = document.getElementById('results');

    resultsDiv.innerHTML = '';  // Clear previous results

    if (fileInput.files.length > 0) {
        const file = fileInput.files[0];
        resultsDiv.innerHTML = `<p>Analyzing the image of ${file.name}...</p>`;

        // Simulate an analysis delay and show results
        setTimeout(() => {
            resultsDiv.innerHTML += `<p>Analysis complete. Potential issues detected: <strong>Shell rot, Vitamin A deficiency</strong>.</p>`;
        }, 2000);
    } else {
        resultsDiv.innerHTML = `<p>Please upload an image of your turtle.</p>`;
    }
}

const speciesData = [
    { name: "Green Sea Turtle", description: "Marine turtle found in tropical and subtropical seas around the world." },
    { name: "Loggerhead Sea Turtle", description: "The loggerhead is known for its large head and carnivorous habits." },
    { name: "Leatherback Sea Turtle", description: "The largest of all living turtles and highly migratory." },
    
];

function filterSpecies() {
    const searchText = document.getElementById('searchBox').value.toLowerCase();
    const filteredData = speciesData.filter(species => species.name.toLowerCase().includes(searchText));
    displaySpecies(filteredData);
}

function displaySpecies(speciesList) {
    const gallery = document.getElementById('speciesGallery');
    gallery.innerHTML = ''; 
    speciesList.forEach(species => {
        const div = document.createElement('div');
        div.className = 'speciesItem';
        div.innerHTML = `<h3>${species.name}</h3><p>${species.description}</p>`;
        gallery.appendChild(div);
    });
}

document.addEventListener('DOMContentLoaded', function() {
    displaySpecies(speciesData); 
});


