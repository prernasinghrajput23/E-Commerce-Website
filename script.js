// Select elements
const navbar = document.querySelector("#Navbar");
const mobileMenuIcon = document.querySelector("#mobile");
const closeMenuIcon = document.querySelector("#close");

// Toggle mobile menu
mobileMenuIcon.addEventListener("click", () => {
    navbar.classList.add("active"); // Add active class to show menu
});

closeMenuIcon.addEventListener("click", () => {
    navbar.classList.remove("active"); // Remove active class to hide menu
});

// Scroll to section on button click
const heroButton = document.querySelector("#hero button");
heroButton.addEventListener("click", () => {
    window.scrollTo({
        top: document.querySelector("#feature").offsetTop,
        behavior: "smooth", // Smooth scrolling effect
    });
});

// Newsletter form submission
const newsletterForm = document.querySelector("#newsletter .form");
newsletterForm.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent page reload
    const emailInput = document.querySelector("#newsletter input").value;

    if (validateEmail(emailInput)) {
        alert("Thank you for subscribing!");
    } else {
        alert("Please enter a valid email address.");
    }
});

// Email validation function
function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}







const proData = [
    {
        category:"Cartoon AStronaut T-Shirts",
        items:[
            {
                image:"images/f8.jpg",
                title: "Cartoon AStronaut T-Shirts",
                price:"499$",
                description:"Cartoon AStronaut T-Shirts"
            }
        ]
    }
];











// Select all cart cards
const pro = document.querySelectorAll('.pro');

// Function to display modal with details
function showDetails(proIndex, containerIndex = 0) {
    const selectedCategory = proData[proIndex];
    const selectedItem = selectedCategory.items[containerIndex];

    // Remove existing modal if any
    const existingModal = document.querySelector('.modal');
    if (existingModal) existingModal.remove();

    // Create a new modal
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.style.position = 'fixed';
    modal.style.top = '50%';
    modal.style.left = '50%';
    modal.style.transform = 'translate(-50%, -50%)';
    modal.style.background = '#fff';
    modal.style.padding = '20px';
    modal.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
    modal.style.width = '30%';
    modal.style.maxWidth = '300px';
    modal.style.zIndex = '1000';
    modal.innerHTML = `
        <h2>${selectedCategory.category}</h2>
        <img src="${selectedItem.image}" alt="${selectedItem.title}" style="width: 100%; border-radius: 8px;">
        <h3>${selectedItem.title}</h3>
        <p><strong>Price:</strong> ${selectedItem.price}</p>
        <p>${selectedItem.description}</p>
        <div style="margin-top: 10px; display: flex; justify-content: space-between;">
            <button class="prev-btn" style="padding: 10px; background: #007bff; color: white; border: none; cursor: pointer;">Previous</button>
            <button class="next-btn" style="padding: 10px; background: #007bff; color: white; border: none; cursor: pointer;">Next</button>
        </div>
        <button class="close-modal" style="margin-top: 20px; padding: 10px 20px; background: red; color: white; border: none; cursor: pointer;">Close</button>
    `;

    // Append modal to the body
    document.body.appendChild(modal);

    // Add functionality to close the modal
    document.querySelector('.close-modal').addEventListener('click', () => {
        modal.remove();
    });

    // Add functionality for navigation buttons
    document.querySelector('.prev-btn').addEventListener('click', () => {
        const prevIndex = (itemIndex - 1 + selectedCategory.items.length) % selectedCategory.items.length;
        showDetails(categoryIndex, prevIndex);
    });

    document.querySelector('.next-btn').addEventListener('click', () => {
        const nextIndex = (itemIndex + 1) % selectedCategory.items.length;
        showDetails(categoryIndex, nextIndex);
    });
}

// Add click event listeners to each cart card
cartCards.forEach((card, index) => {
    card.addEventListener('click', () => showDetails(index));
});





















