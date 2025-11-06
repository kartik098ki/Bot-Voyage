// DOM Elements
const chatInput = document.getElementById('chatInput');
const sendBtn = document.getElementById('sendBtn');
const searchBoxes = document.querySelectorAll('.search-box');
const activityTabs = document.querySelectorAll('.activity-tab');
const gemBtns = document.querySelectorAll('.gem-btn');
const activityBtns = document.querySelectorAll('.activity-btn');
const voiceBtns = document.querySelectorAll('.voice-btn');
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileNav = document.getElementById('mobileNav');
const mobileNavClose = document.getElementById('mobileNavClose');
const overlay = document.getElementById('overlay');
const searchResults = document.getElementById('searchResults');
const backBtn = document.getElementById('backBtn');
const resultsTitle = document.getElementById('resultsTitle');
const heroSection = document.getElementById('home');
const loginBtn = document.getElementById('loginBtn');
const mobileLoginBtn = document.getElementById('mobileLoginBtn');
const loginModal = document.getElementById('loginModal');
const modalClose = document.getElementById('modalClose');

// Video Modal Elements
const videoModal = document.getElementById('videoModal');
const videoClose = document.getElementById('videoClose');
const videoPlayer = document.getElementById('videoPlayer');
const videoTitle = document.getElementById('videoTitle');
const videoDescription = document.getElementById('videoDescription');

// Collaborative Modal Elements
const collabBtn = document.getElementById('collabBtn');
const collabModal = document.getElementById('collabModal');
const collabClose = document.getElementById('collabClose');
const collabCode = document.getElementById('collabCode');
const copyCodeBtn = document.getElementById('copyCodeBtn');
const collabTabs = document.querySelectorAll('.collab-tab');
const collabTabContents = document.querySelectorAll('.collab-tab-content');
const joinCodeInput = document.getElementById('joinCodeInput');
const joinBtn = document.getElementById('joinBtn');

// Split Money Modal Elements
const splitMoneyBtn = document.getElementById('splitMoneyBtn');
const splitModal = document.getElementById('splitModal');
const splitClose = document.getElementById('splitClose');
const sendSplitBtn = document.getElementById('sendSplitBtn');
const splitAmount = document.getElementById('splitAmount');
const peopleCount = document.getElementById('peopleCount');
const decreasePeople = document.getElementById('decreasePeople');
const increasePeople = document.getElementById('increasePeople');
const calculateSplit = document.getElementById('calculateSplit');
const splitResult = document.getElementById('splitResult');
const splitAmountPerPerson = document.getElementById('splitAmountPerPerson');

// Travel Space Modal Elements
const travelSpaceBtn = document.getElementById('travelSpaceBtn');
const travelSpaceModal = document.getElementById('travelSpaceModal');
const travelSpaceClose = document.getElementById('travelSpaceClose');
const travelSpaceTabs = document.querySelectorAll('.travel-space-tab');
const travelSpaceTabContents = document.querySelectorAll('.travel-space-tab-content');
const expenseName = document.getElementById('expenseName');
const expenseAmount = document.getElementById('expenseAmount');
const addExpenseBtn = document.getElementById('addExpenseBtn');
const expenseList = document.getElementById('expenseList');
const categoryBtns = document.querySelectorAll('.category-btn');
const budgetProgressBar = document.getElementById('budgetProgressBar');

// AI Vision Modal Elements
const aiVisionBtn = document.getElementById('aiVisionBtn');
const aiVisionModal = document.getElementById('aiVisionModal');
const aiVisionCloseBtn = document.getElementById('aiVisionCloseBtn');
const aiVisionUpload = document.getElementById('aiVisionUpload');
const aiVisionAnalyzeBtn = document.getElementById('aiVisionAnalyzeBtn');
const aiVisionResult = document.getElementById('aiVisionResult');
const aiVisionResultText = document.getElementById('aiVisionResultText');
const aiVisionVoiceBtn = document.getElementById('aiVisionVoiceBtn');

// Account Modal Elements
const accountBtn = document.getElementById('accountBtn');
const accountModal = document.getElementById('accountModal');
const accountClose = document.getElementById('accountClose');
const accountTabs = document.querySelectorAll('.account-tab');
const accountTabContents = document.querySelectorAll('.account-tab-content');

// Weather Elements
const weatherWidget = document.getElementById('weatherWidget');
const weatherIcon = document.getElementById('weatherIcon');
const weatherTemp = document.getElementById('weatherTemp');
const weatherLocation = document.getElementById('weatherLocation');
const mobileWeatherIcon = document.getElementById('mobileWeatherIcon');
const mobileWeatherTemp = document.getElementById('mobileWeatherTemp');
const mobileWeatherLocation = document.getElementById('mobileWeatherLocation');

// Destination Info Elements
const destinationTitle = document.getElementById('destinationTitle');
const destinationDescription = document.getElementById('destinationDescription');
const statValue1 = document.getElementById('statValue1');
const statValue2 = document.getElementById('statValue2');
const statValue3 = document.getElementById('statValue3');

// Dynamic Content Elements
const dayPlan = document.getElementById('dayPlan');
const gemsContainer = document.getElementById('gemsContainer');
const reelsContainer = document.getElementById('reelsContainer');
const hotelsContainer = document.getElementById('hotelsContainer');
const errorMessage = document.getElementById('errorMessage');

// FAQ Elements
const faqItems = document.querySelectorAll('.faq-item');

// Bottom Navigation Elements
const createBtn = document.getElementById('createBtn');
const aiTalkBtn = document.getElementById('aiTalkBtn');
const addBtn = document.getElementById('addBtn');

// Map variable
let map;

// Sample data for different destinations
const SAMPLE_DATA = {
    'goa': {
        dayPlan: [
            {
                day: "Day 1",
                title: "Beach Exploration",
                activities: [
                    { time: "9:00 AM", name: "Arrival in Goa", description: "Check into your beachside resort" },
                    { time: "12:00 PM", name: "Beach Lunch", description: "Enjoy fresh seafood at a beach shack" },
                    { time: "3:00 PM", name: "Water Sports", description: "Try parasailing or jet skiing" },
                    { time: "7:00 PM", name: "Sunset Cruise", description: "Enjoy a beautiful sunset on the Mandovi River" }
                ]
            },
            {
                day: "Day 2",
                title: "Cultural Tour",
                activities: [
                    { time: "10:00 AM", name: "Old Goa Churches", description: "Visit UNESCO World Heritage sites" },
                    { time: "1:00 PM", name: "Goan Cuisine", description: "Try authentic Goan thali" },
                    { time: "4:00 PM", name: "Spice Plantation", description: "Tour a local spice plantation" }
                ]
            },
            {
                day: "Day 3",
                title: "Adventure Day",
                activities: [
                    { time: "9:00 AM", name: "Dudhsagar Falls", description: "Visit the spectacular waterfall" },
                    { time: "2:00 PM", name: "Wildlife Safari", description: "Explore Bhagwan Mahavir Wildlife Sanctuary" },
                    { time: "6:00 PM", name: "Beach Party", description: "Experience Goan nightlife" }
                ]
            }
        ],
        hiddenGems: [
            { name: "Butterfly Beach", description: "Secluded beach accessible only by boat", crowdLevel: "Low" },
            { name: "Chorla Ghat", description: "Scenic mountain pass with lush greenery", crowdLevel: "Medium" },
            { name: "Netravali Wildlife Sanctuary", description: "Lesser-known sanctuary with diverse flora", crowdLevel: "Low" }
        ],
        experienceReels: [
            { title: "Goan Beaches", description: "Experience the pristine beaches of Goa", videoUrl: "https://www.youtube.com/embed/your-video-id-1" },
            { title: "Goan Carnival", description: "Experience the vibrant Goan carnival", videoUrl: "https://www.youtube.com/embed/your-video-id-2" },
            { title: "Goan Cuisine", description: "Taste the authentic flavors of Goa", videoUrl: "https://www.youtube.com/embed/your-video-id-3" }
        ],
        hotels: [
            { name: "Taj Exotica Resort & Spa", description: "Luxury beachfront resort with private beach access", rating: 4.8, price: 15000, bookingUrl: "https://www.tajhotels.com/en-in/taj-exotica-goa/" },
            { name: "The Leela Goa", description: "5-star resort with lagoon-style pools", rating: 4.7, price: 12000, bookingUrl: "https://www.theleela.com/en-in/goa/" },
            { name: "Ahilya by the Sea", description: "Boutique hotel with Mediterranean architecture", rating: 4.9, price: 9000, bookingUrl: "https://www.ahilyabythesea.com/" }
        ]
    },
    'rajasthan': {
        dayPlan: [
            {
                day: "Day 1",
                title: "Jaipur Exploration",
                activities: [
                    { time: "8:00 AM", name: "Amber Fort", description: "Explore the magnificent fort with elephant ride" },
                    { time: "1:00 PM", name: "Rajasthani Thali", description: "Enjoy traditional Rajasthani cuisine" },
                    { time: "3:00 PM", name: "City Palace", description: "Visit the royal residence" },
                    { time: "6:00 PM", name: "Hawa Mahal", description: "Admire the Palace of Winds at sunset" }
                ]
            },
            {
                day: "Day 2",
                title: "Jodhpur Visit",
                activities: [
                    { time: "9:00 AM", name: "Mehrangarh Fort", description: "Explore one of India's largest forts" },
                    { time: "1:00 PM", name: "Blue City Walk", description: "Walk through the iconic blue streets" },
                    { time: "4:00 PM", name: "Rao Jodha Desert Rock Park", description: "Explore the ecological restoration park" }
                ]
            },
            {
                day: "Day 3",
                title: "Udaipur Experience",
                activities: [
                    { time: "10:00 AM", name: "City Palace", description: "Visit the majestic palace complex" },
                    { time: "1:00 PM", name: "Lake Pichola Boat Ride", description: "Enjoy a boat ride on the scenic lake" },
                    { time: "4:00 PM", name: "Jagdish Temple", description: "Visit the beautiful Hindu temple" }
                ]
            }
        ],
        hiddenGems: [
            { name: "Bhangarh Fort", description: "Most haunted fort in India with intriguing history", crowdLevel: "Medium" },
            { name: "Kuldhara Village", description: "Abandoned village with mysterious past", crowdLevel: "Low" },
            { name: "Ranakpur Jain Temple", description: "Stunning marble temple with intricate architecture", crowdLevel: "Medium" }
        ],
        experienceReels: [
            { title: "Rajasthan Forts", description: "Explore the majestic forts of Rajasthan", videoUrl: "https://www.youtube.com/embed/your-video-id-4" },
            { title: "Rajasthani Folk Dance", description: "Experience the vibrant folk dances", videoUrl: "https://www.youtube.com/embed/your-video-id-5" },
            { title: "Desert Safari", description: "Experience the Thar Desert on camelback", videoUrl: "https://www.youtube.com/embed/your-video-id-6" }
        ],
        hotels: [
            { name: "Taj Lake Palace, Udaipur", description: "Luxury hotel in the middle of Lake Pichola", rating: 4.9, price: 25000, bookingUrl: "https://www.tajhotels.com/en-in/taj-lake-palace-udaipur/" },
            { name: "Rambagh Palace, Jaipur", description: "Former royal residence turned luxury hotel", rating: 4.8, price: 20000, bookingUrl: "https://www.tajhotels.com/en-in/rambagh-palace-jaipur/" },
            { name: "Umaid Bhawan Palace, Jodhpur", description: "One of the world's largest private residences", rating: 4.7, price: 18000, bookingUrl: "https://www.tajhotels.com/en-in/umaid-bhawan-palace-jodhpur/" }
        ]
    },
    'mumbai': {
        dayPlan: [
            {
                day: "Day 1",
                title: "South Mumbai Exploration",
                activities: [
                    { time: "9:00 AM", name: "Gateway of India", description: "Visit the iconic monument" },
                    { time: "12:00 PM", name: "Marine Drive", description: "Stroll along the Queen's Necklace" },
                    { time: "3:00 PM", name: "Chhatrapati Shivaji Maharaj Terminus", description: "Admire the UNESCO World Heritage site" },
                    { time: "7:00 PM", name: "Street Food Tour", description: "Taste Mumbai's famous street food" }
                ]
            },
            {
                day: "Day 2",
                title: "Cultural Experience",
                activities: [
                    { time: "10:00 AM", name: "Elephanta Caves", description: "Take a ferry to visit ancient caves" },
                    { time: "1:00 PM", name: "Colaba Causeway", description: "Shop at the bustling market" },
                    { time: "4:00 PM", name: "Prince of Wales Museum", description: "Explore art and artifacts" }
                ]
            },
            {
                day: "Day 3",
                title: "Bollywood Experience",
                activities: [
                    { time: "10:00 AM", name: "Film City Tour", description: "Visit Bollywood studios" },
                    { time: "2:00 PM", name: "Juhu Beach", description: "Relax at the popular beach" },
                    { time: "6:00 PM", name: "Bollywood Show", description: "Watch a live Bollywood performance" }
                ]
            }
        ],
        hiddenGems: [
            { name: "Banganga Tank", description: "Ancient water tank with spiritual significance", crowdLevel: "Low" },
            { name: "Kanheri Caves", description: "Buddhist caves within Sanjay Gandhi National Park", crowdLevel: "Medium" },
            { name: "Versova Beach", description: "Less crowded beach with fishing village", crowdLevel: "Medium" }
        ],
        experienceReels: [
            { title: "Mumbai Street Food", description: "Taste the best street food in Mumbai", videoUrl: "https://www.youtube.com/embed/your-video-id-7" },
            { title: "Mumbai Local Trains", description: "Experience the lifeline of Mumbai", videoUrl: "https://www.youtube.com/embed/your-video-id-8" },
            { title: "Mumbai Monsoon", description: "Experience the magical Mumbai monsoon", videoUrl: "https://www.youtube.com/embed/your-video-id-9" }
        ],
        hotels: [
            { name: "Taj Mahal Palace, Mumbai", description: "Iconic luxury hotel overlooking the Arabian Sea", rating: 4.8, price: 18000, bookingUrl: "https://www.tajhotels.com/en-in/taj-mahal-palace-mumbai/" },
            { name: "The Oberoi, Mumbai", description: "Luxury hotel with stunning sea views", rating: 4.7, price: 16000, bookingUrl: "https://www.oberoihotels.com/hotels-in-mumbai/" },
            { name: "Trident, Nariman Point", description: "5-star hotel in the business district", rating: 4.6, price: 12000, bookingUrl: "https://www.tridenthotels.com/mumbai-nariman-point/" }
        ]
    }
};

// Mobile Menu Toggle
mobileMenuBtn.addEventListener('click', () => {
    mobileNav.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
});

mobileNavClose.addEventListener('click', () => {
    mobileNav.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = 'auto';
});

overlay.addEventListener('click', () => {
    mobileNav.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = 'auto';
});

// Close mobile nav when clicking on a link
const mobileNavLinks = document.querySelectorAll('.mobile-nav-links a');
mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileNav.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
});

// Home Button Functionality
document.querySelector('.logo').addEventListener('click', (e) => {
    e.preventDefault();
    if (searchResults.classList.contains('active')) {
        searchResults.classList.remove('active');
        heroSection.style.display = 'flex';
        document.getElementById('gems').style.display = 'block';
        document.getElementById('features').style.display = 'block';
        document.getElementById('activities').style.display = 'block';
        document.getElementById('faq').style.display = 'block';
        document.querySelector('footer').style.display = 'block';
        
        // Destroy map to free resources
        if (map) {
            map.remove();
            map = null;
        }
        
        // Scroll to top
        window.scrollTo(0, 0);
    }
});

// Login Button Functionality
loginBtn.addEventListener('click', () => {
    loginModal.classList.add('active');
    document.body.style.overflow = 'hidden';
});

mobileLoginBtn.addEventListener('click', () => {
    loginModal.classList.add('active');
    mobileNav.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = 'hidden';
});

modalClose.addEventListener('click', () => {
    loginModal.classList.remove('active');
    document.body.style.overflow = 'auto';
});

// Close modal when clicking outside
loginModal.addEventListener('click', (e) => {
    if (e.target === loginModal) {
        loginModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// Video Modal Functionality
document.addEventListener('click', (e) => {
    if (e.target.closest('.reel-card')) {
        const reelCard = e.target.closest('.reel-card');
        const videoSrc = reelCard.getAttribute('data-video');
        const title = reelCard.getAttribute('data-title');
        const description = reelCard.getAttribute('data-description');
        
        videoPlayer.src = videoSrc;
        videoTitle.textContent = title;
        videoDescription.textContent = description;
        
        videoModal.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        // Play video
        videoPlayer.play();
    }
});

videoClose.addEventListener('click', () => {
    videoModal.classList.remove('active');
    document.body.style.overflow = 'auto';
    videoPlayer.pause();
    videoPlayer.currentTime = 0;
});

// Close modal when clicking outside
videoModal.addEventListener('click', (e) => {
    if (e.target === videoModal) {
        videoModal.classList.remove('active');
        document.body.style.overflow = 'auto';
        videoPlayer.pause();
        videoPlayer.currentTime = 0;
    }
});

// Collaborative Feature Functionality
collabBtn.addEventListener('click', () => {
    // Generate a random 4-digit code
    const code = Math.floor(1000 + Math.random() * 9000);
    collabCode.textContent = code;
    
    // Generate QR code
    document.getElementById('qrcode').innerHTML = '';
    new QRCode(document.getElementById('qrcode'), {
        text: `https://advatrip.com/collab/${code}`,
        width: 128,
        height: 128,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
    });
    
    collabModal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Create confetti effect
    createConfetti();
});

collabClose.addEventListener('click', () => {
    collabModal.classList.remove('active');
    document.body.style.overflow = 'auto';
});

// Close modal when clicking outside
collabModal.addEventListener('click', (e) => {
    if (e.target === collabModal) {
        collabModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// Tab switching functionality
collabTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        // Remove active class from all tabs and contents
        collabTabs.forEach(t => t.classList.remove('active'));
        collabTabContents.forEach(c => c.classList.remove('active'));
        
        // Add active class to clicked tab
        tab.classList.add('active');
        
        // Show corresponding content
        const tabId = tab.getAttribute('data-tab');
        document.getElementById(`${tabId}-tab`).classList.add('active');
    });
});

// Copy code functionality
copyCodeBtn.addEventListener('click', () => {
    const code = collabCode.textContent;
    navigator.clipboard.writeText(code).then(() => {
        // Show copied feedback
        const originalHTML = copyCodeBtn.innerHTML;
        copyCodeBtn.innerHTML = '<i class="fas fa-check"></i>';
        setTimeout(() => {
            copyCodeBtn.innerHTML = originalHTML;
        }, 2000);
    });
});

// Join functionality
joinBtn.addEventListener('click', () => {
    const code = joinCodeInput.value.trim();
    if (code && code.length === 4) {
        // In a real app, this would connect to the collaborative session
        alert(`Joining collaborative session with code: ${code}`);
        collabModal.classList.remove('active');
        document.body.style.overflow = 'auto';
        joinCodeInput.value = '';
    } else {
        // Show error feedback
        joinCodeInput.style.borderColor = 'var(--danger)';
        setTimeout(() => {
            joinCodeInput.style.borderColor = 'rgba(255, 255, 255, 0.1)';
        }, 2000);
    }
});

// Split Money Feature Functionality
splitMoneyBtn.addEventListener('click', () => {
    splitModal.classList.add('active');
    document.body.style.overflow = 'hidden';
});

splitClose.addEventListener('click', () => {
    splitModal.classList.remove('active');
    document.body.style.overflow = 'auto';
});

// Send split functionality
sendSplitBtn.addEventListener('click', () => {
    const amount = parseFloat(splitAmount.value);
    const count = parseInt(peopleCount.textContent);
    
    if (!isNaN(amount) && amount > 0 && count > 0) {
        const amountPerPerson = amount / count;
        
        // In a real app, this would open a share dialog
        if (navigator.share) {
            navigator.share({
                title: 'Split Expenses',
                text: `Each person should pay: ₹${amountPerPerson.toFixed(2)} for a total of ₹${amount.toFixed(0)} split between ${count} people.`,
                url: window.location.href
            });
        } else {
            // Fallback for browsers that don't support Web Share API
            alert(`Each person should pay: ₹${amountPerPerson.toFixed(2)} for a total of ₹${amount.toFixed(0)} split between ${count} people.`);
        }
    } else {
        // Show error feedback
        splitAmount.style.borderColor = 'var(--danger)';
        setTimeout(() => {
            splitAmount.style.borderColor = 'rgba(255, 255, 255, 0.1)';
        }, 2000);
    }
});

// Close modal when clicking outside
splitModal.addEventListener('click', (e) => {
    if (e.target === splitModal) {
        splitModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// People count functionality
decreasePeople.addEventListener('click', () => {
    let count = parseInt(peopleCount.textContent);
    if (count > 1) {
        count--;
        peopleCount.textContent = count;
    }
});

increasePeople.addEventListener('click', () => {
    let count = parseInt(peopleCount.textContent);
    count++;
    peopleCount.textContent = count;
});

// Calculate split functionality
calculateSplit.addEventListener('click', () => {
    const amount = parseFloat(splitAmount.value);
    const count = parseInt(peopleCount.textContent);
    
    if (!isNaN(amount) && amount > 0 && count > 0) {
        const amountPerPerson = amount / count;
        splitAmountPerPerson.textContent = `₹${amountPerPerson.toFixed(2)}`;
        splitResult.classList.add('show');
    } else {
        // Show error feedback
        splitAmount.style.borderColor = 'var(--danger)';
        setTimeout(() => {
            splitAmount.style.borderColor = 'rgba(255, 255, 255, 0.1)';
        }, 2000);
    }
});

// Travel Space Feature Functionality
travelSpaceBtn.addEventListener('click', () => {
    travelSpaceModal.classList.add('active');
    document.body.style.overflow = 'hidden';
});

travelSpaceClose.addEventListener('click', () => {
    travelSpaceModal.classList.remove('active');
    document.body.style.overflow = 'auto';
});

// Close modal when clicking outside
travelSpaceModal.addEventListener('click', (e) => {
    if (e.target === travelSpaceModal) {
        travelSpaceModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// Travel Space Tab switching functionality
travelSpaceTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        // Remove active class from all tabs and contents
        travelSpaceTabs.forEach(t => t.classList.remove('active'));
        travelSpaceTabContents.forEach(c => c.classList.remove('active'));
        
        // Add active class to clicked tab
        tab.classList.add('active');
        
        // Show corresponding content
        const tabId = tab.getAttribute('data-tab');
        document.getElementById(`${tabId}-tab`).classList.add('active');
    });
});

// Expense category selection
let selectedCategory = 'food';
categoryBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        categoryBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        selectedCategory = btn.getAttribute('data-category');
    });
});

// Add expense functionality
addExpenseBtn.addEventListener('click', () => {
    const name = expenseName.value.trim();
    const amount = parseFloat(expenseAmount.value);
    
    if (name && !isNaN(amount) && amount > 0) {
        // Create new expense item
        const expenseItem = document.createElement('div');
        expenseItem.className = 'expense-item';
        expenseItem.innerHTML = `
            <div class="expense-info">
                <div class="expense-name">${name}</div>
                <div class="expense-category-tag">${selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)}</div>
            </div>
            <div class="expense-amount">₹${amount.toFixed(2)}</div>
        `;
        
        // Add to expense list
        expenseList.appendChild(expenseItem);
        
        // Clear form
        expenseName.value = '';
        expenseAmount.value = '';
        
        // Update budget progress (mock)
        const currentProgress = parseInt(budgetProgressBar.style.width) || 30;
        const newProgress = Math.min(currentProgress + 5, 100);
        budgetProgressBar.style.width = `${newProgress}%`;
        
        // Show success feedback
        addExpenseBtn.textContent = 'Added!';
        addExpenseBtn.style.background = 'var(--success)';
        setTimeout(() => {
            addExpenseBtn.textContent = 'Add Expense';
            addExpenseBtn.style.background = '';
        }, 2000);
    } else {
        // Show error feedback
        expenseName.style.borderColor = 'var(--danger)';
        expenseAmount.style.borderColor = 'var(--danger)';
        setTimeout(() => {
            expenseName.style.borderColor = 'rgba(255, 255, 255, 0.1)';
            expenseAmount.style.borderColor = 'rgba(255, 255, 255, 0.1)';
        }, 2000);
    }
});

// AI Vision Feature Functionality
aiVisionBtn.addEventListener('click', () => {
    aiVisionModal.classList.add('active');
    document.body.style.overflow = 'hidden';
});

aiVisionCloseBtn.addEventListener('click', () => {
    aiVisionModal.classList.remove('active');
    document.body.style.overflow = 'auto';
});

// Close modal when clicking outside
aiVisionModal.addEventListener('click', (e) => {
    if (e.target === aiVisionModal) {
        aiVisionModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// AI Vision upload functionality
aiVisionUpload.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
        // In a real app, this would upload the image to an AI service
        // For demo, we'll just show the result
        aiVisionResult.classList.add('show');
        
        // Mock AI analysis text based on file name
        const fileName = file.name.toLowerCase();
        let analysisText = '';
        
        if (fileName.includes('temple') || fileName.includes('monument')) {
            analysisText = 'This appears to be a beautiful historical monument with intricate architecture. Based on the design elements, this looks like it could be from the Mughal era, possibly a fort or palace in Rajasthan. The red sandstone construction and detailed carvings are characteristic of that period. This would be a great place to learn about Indian history and culture.';
        } else if (fileName.includes('beach') || fileName.includes('sea')) {
            analysisText = 'This is a stunning beach location with pristine white sand and clear blue waters. The palm trees suggest a tropical climate, likely in South India or one of the island territories. This would be perfect for relaxation, water sports, and enjoying beautiful sunsets. Consider visiting during the winter months for the best weather.';
        } else if (fileName.includes('mountain') || fileName.includes('hill')) {
            analysisText = 'This shows a breathtaking mountain landscape with lush greenery. The terrain suggests this could be in the Himalayan region or the Western Ghats. The clear skies and dense vegetation indicate a healthy ecosystem. This would be ideal for trekking, nature photography, and escaping the summer heat.';
        } else {
            analysisText = 'This is a beautiful location that showcases the diverse landscapes of India. The unique features and natural beauty make it a must-visit destination for travelers seeking authentic experiences. Consider the best time to visit based on the climate and local festivals.';
        }
        
        aiVisionResultText.textContent = analysisText;
    }
});

// AI Vision analyze button
aiVisionAnalyzeBtn.addEventListener('click', () => {
    // Trigger file input click
    aiVisionUpload.click();
});

// AI Vision voice functionality
aiVisionVoiceBtn.addEventListener('click', () => {
    const text = aiVisionResultText.textContent;
    
    // Check if browser supports speech synthesis
    if ('speechSynthesis' in window) {
        // Create a new speech synthesis utterance
        const utterance = new SpeechSynthesisUtterance(text);
        
        // Set voice parameters
        utterance.rate = 0.9;
        utterance.pitch = 1;
        utterance.volume = 1;
        
        // Speak the text
        speechSynthesis.speak(utterance);
        
        // Show feedback
        const originalHTML = aiVisionVoiceBtn.innerHTML;
        aiVisionVoiceBtn.innerHTML = '<i class="fas fa-check"></i> Playing';
        setTimeout(() => {
            aiVisionVoiceBtn.innerHTML = originalHTML;
        }, 3000);
    } else {
        // Fallback for browsers that don't support speech synthesis
        alert('Your browser does not support text-to-speech functionality.');
    }
});

// Account Modal Functionality
accountBtn.addEventListener('click', () => {
    accountModal.classList.add('active');
    document.body.style.overflow = 'hidden';
});

accountClose.addEventListener('click', () => {
    accountModal.classList.remove('active');
    document.body.style.overflow = 'auto';
});

// Close modal when clicking outside
accountModal.addEventListener('click', (e) => {
    if (e.target === accountModal) {
        accountModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// Account Tab switching functionality
accountTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        // Remove active class from all tabs and contents
        accountTabs.forEach(t => t.classList.remove('active'));
        accountTabContents.forEach(c => c.classList.remove('active'));
        
        // Add active class to clicked tab
        tab.classList.add('active');
        
        // Show corresponding content
        const tabId = tab.getAttribute('data-tab');
        document.getElementById(`${tabId}-tab`).classList.add('active');
    });
});

// Function to update the search results page with generated content
function updateSearchResults(data, destination) {
    // Update destination info
    destinationTitle.textContent = destination;
    destinationDescription.textContent = `Discover the beauty of ${destination} with our curated travel experiences.`;
    statValue1.textContent = "24";
    statValue2.textContent = "4.8";
    statValue3.textContent = "3";

    // Update day-wise plan
    dayPlan.innerHTML = '';
    data.dayPlan.forEach(day => {
        const dayCard = document.createElement('div');
        dayCard.className = 'day-card';
        
        const dayHeader = document.createElement('div');
        dayHeader.className = 'day-header';
        
        const dayTitle = document.createElement('h4');
        dayTitle.className = 'day-title';
        dayTitle.textContent = day.title;
        
        const dayDate = document.createElement('span');
        dayDate.className = 'day-date';
        dayDate.textContent = day.day;
        
        dayHeader.appendChild(dayTitle);
        dayHeader.appendChild(dayDate);
        
        const dayActivities = document.createElement('div');
        dayActivities.className = 'day-activities';
        
        day.activities.forEach(activity => {
            const dayActivity = document.createElement('div');
            dayActivity.className = 'day-activity';
            
            const activityIcon = document.createElement('div');
            activityIcon.className = 'day-activity-icon';
            activityIcon.innerHTML = '<i class="fas fa-map-marker-alt"></i>';
            
            const activityInfo = document.createElement('div');
            activityInfo.className = 'day-activity-info';
            
            const activityHeader = document.createElement('div');
            activityHeader.className = 'day-activity-header';
            
            const activityName = document.createElement('div');
            activityName.className = 'day-activity-name';
            activityName.textContent = activity.name;
            
            const activityTime = document.createElement('div');
            activityTime.className = 'day-activity-time';
            activityTime.textContent = activity.time;
            
            activityHeader.appendChild(activityName);
            activityHeader.appendChild(activityTime);
            
            const activityDesc = document.createElement('div');
            activityDesc.className = 'day-activity-desc';
            activityDesc.textContent = activity.description;
            
            activityInfo.appendChild(activityHeader);
            activityInfo.appendChild(activityDesc);
            
            dayActivity.appendChild(activityIcon);
            dayActivity.appendChild(activityInfo);
            
            dayActivities.appendChild(dayActivity);
        });
        
        dayCard.appendChild(dayHeader);
        dayCard.appendChild(dayActivities);
        
        dayPlan.appendChild(dayCard);
    });

    // Update hidden gems
    gemsContainer.innerHTML = '';
    data.hiddenGems.forEach(gem => {
        const gemCard = document.createElement('div');
        gemCard.className = 'gem-card';
        
        const gemImg = document.createElement('img');
        gemImg.className = 'gem-img';
        gemImg.src = `https://picsum.photos/seed/${gem.name.replace(/\s+/g, '')}/400/300.jpg`;
        gemImg.alt = gem.name;
        
        const gemContent = document.createElement('div');
        gemContent.className = 'gem-content';
        
        const gemTitle = document.createElement('h3');
        gemTitle.className = 'gem-title';
        gemTitle.innerHTML = `${gem.name} <span class="gem-badge">Hidden</span>`;
        
        const gemDescription = document.createElement('p');
        gemDescription.className = 'gem-description';
        gemDescription.textContent = gem.description;
        
        const gemCrowdWidget = document.createElement('div');
        gemCrowdWidget.className = 'gem-crowd-widget';
        
        const crowdIconClass = gem.crowdLevel === 'Low' ? 'gem-crowd-low-icon' : 
                              gem.crowdLevel === 'Medium' ? 'gem-crowd-medium-icon' : 'gem-crowd-high-icon';
        
        gemCrowdWidget.innerHTML = `
            <i class="fas fa-users gem-crowd-icon ${crowdIconClass}"></i>
            <div class="gem-crowd-info">
                <div class="gem-crowd-level">${gem.crowdLevel}</div>
                <div class="gem-crowd-location">${destination}</div>
            </div>
        `;
        
        const gemFooter = document.createElement('div');
        gemFooter.className = 'gem-footer';
        
        const gemLocation = document.createElement('div');
        gemLocation.className = 'gem-location';
        gemLocation.innerHTML = '<i class="fas fa-map-marker-alt"></i><span>Hidden Location</span>';
        
        const gemBtn = document.createElement('button');
        gemBtn.className = 'gem-btn';
        gemBtn.textContent = 'Explore';
        gemBtn.setAttribute('data-gem', gem.name.replace(/\s+/g, '-').toLowerCase());
        
        gemFooter.appendChild(gemLocation);
        gemFooter.appendChild(gemBtn);
        
        gemContent.appendChild(gemTitle);
        gemContent.appendChild(gemDescription);
        gemContent.appendChild(gemCrowdWidget);
        gemContent.appendChild(gemFooter);
        
        gemCard.appendChild(gemImg);
        gemCard.appendChild(gemContent);
        
        gemsContainer.appendChild(gemCard);
    });

    // Update experience reels
    reelsContainer.innerHTML = '';
    data.experienceReels.forEach((reel, index) => {
        const reelCard = document.createElement('div');
        reelCard.className = 'reel-card';
        reelCard.setAttribute('data-video', reel.videoUrl);
        reelCard.setAttribute('data-title', reel.title);
        reelCard.setAttribute('data-description', reel.description);
        
        const reelThumbnail = document.createElement('img');
        reelThumbnail.className = 'reel-thumbnail';
        reelThumbnail.src = `https://picsum.photos/seed/${reel.title.replace(/\s+/g, '')}/400/600.jpg`;
        reelThumbnail.alt = reel.title;
        
        const reelOverlay = document.createElement('div');
        reelOverlay.className = 'reel-overlay';
        
        const reelTitle = document.createElement('h4');
        reelTitle.className = 'reel-title';
        reelTitle.textContent = reel.title;
        
        const reelStats = document.createElement('div');
        reelStats.className = 'reel-stats';
        
        const reelStat1 = document.createElement('div');
        reelStat1.className = 'reel-stat';
        reelStat1.innerHTML = '<i class="fas fa-heart"></i><span>' + (Math.floor(Math.random() * 20) + 5) + 'K</span>';
        
        const reelStat2 = document.createElement('div');
        reelStat2.className = 'reel-stat';
        reelStat2.innerHTML = '<i class="fas fa-eye"></i><span>' + (Math.floor(Math.random() * 50) + 20) + 'K</span>';
        
        reelStats.appendChild(reelStat1);
        reelStats.appendChild(reelStat2);
        
        reelOverlay.appendChild(reelTitle);
        reelOverlay.appendChild(reelStats);
        
        const reelPlayButton = document.createElement('div');
        reelPlayButton.className = 'reel-play-button';
        reelPlayButton.innerHTML = '<i class="fas fa-play"></i>';
        
        reelCard.appendChild(reelThumbnail);
        reelCard.appendChild(reelOverlay);
        reelCard.appendChild(reelPlayButton);
        
        reelsContainer.appendChild(reelCard);
    });

    // Update hotels
    hotelsContainer.innerHTML = '';
    data.hotels.forEach(hotel => {
        const hotelCard = document.createElement('div');
        hotelCard.className = 'hotel-card';
        
        const hotelImg = document.createElement('img');
        hotelImg.className = 'hotel-img';
        hotelImg.src = `https://picsum.photos/seed/${hotel.name.replace(/\s+/g, '')}/400/300.jpg`;
        hotelImg.alt = hotel.name;
        
        const hotelContent = document.createElement('div');
        hotelContent.className = 'hotel-content';
        
        const hotelTitle = document.createElement('h3');
        hotelTitle.className = 'hotel-title';
        hotelTitle.textContent = hotel.name;
        
        const hotelRating = document.createElement('div');
        hotelRating.className = 'hotel-rating';
        hotelRating.innerHTML = `<i class="fas fa-star"></i><span>${hotel.rating} (${Math.floor(Math.random() * 200) + 50})</span>`;
        
        const hotelDescription = document.createElement('p');
        hotelDescription.className = 'hotel-description';
        hotelDescription.textContent = hotel.description;
        
        const hotelFooter = document.createElement('div');
        hotelFooter.className = 'hotel-footer';
        
        const hotelPrice = document.createElement('div');
        hotelPrice.className = 'hotel-price';
        hotelPrice.textContent = `₹${hotel.price}/night`;
        
        const hotelBtn = document.createElement('button');
        hotelBtn.className = 'hotel-btn book-now-btn';
        hotelBtn.textContent = 'Book Now';
        hotelBtn.setAttribute('data-hotel', hotel.name.replace(/\s+/g, '-').toLowerCase());
        hotelBtn.setAttribute('data-booking-url', hotel.bookingUrl);
        
        hotelFooter.appendChild(hotelPrice);
        hotelFooter.appendChild(hotelBtn);
        
        hotelContent.appendChild(hotelTitle);
        hotelContent.appendChild(hotelRating);
        hotelContent.appendChild(hotelDescription);
        hotelContent.appendChild(hotelFooter);
        
        hotelCard.appendChild(hotelImg);
        hotelCard.appendChild(hotelContent);
        
        hotelsContainer.appendChild(hotelCard);
    });
}

// Chat functionality with sample data
async function sendMessage() {
    const message = chatInput.value.trim();
    if (message) {
        // Hide any previous error messages
        errorMessage.classList.remove('show');
        
        // Show loading state
        const chatInputContainer = document.querySelector('.chat-input-container');
        chatInputContainer.classList.add('loading');
        
        // Extract destination from message
        let destination = message;
        if (message.toLowerCase().includes('delhi')) {
            destination = 'Delhi';
        } else if (message.toLowerCase().includes('mumbai')) {
            destination = 'Mumbai';
        } else if (message.toLowerCase().includes('goa')) {
            destination = 'Goa';
        } else if (message.toLowerCase().includes('rajasthan')) {
            destination = 'Rajasthan';
        } else if (message.toLowerCase().includes('kerala')) {
            destination = 'Kerala';
        } else if (message.toLowerCase().includes('kashmir')) {
            destination = 'Kashmir';
        } else if (message.toLowerCase().includes('himachal')) {
            destination = 'Himachal Pradesh';
        }
        
        try {
            // Simulate API call delay
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            // Get data for destination or return default
            const destinationKey = destination.toLowerCase();
            const travelPlan = SAMPLE_DATA[destinationKey] || {
                dayPlan: [
                    {
                        day: "Day 1",
                        title: "Exploration",
                        activities: [
                            { time: "10:00 AM", name: "Arrival", description: "Check into your accommodation" },
                            { time: "1:00 PM", name: "Local Cuisine", description: "Try authentic local dishes" },
                            { time: "4:00 PM", name: "City Tour", description: "Explore the main attractions" }
                        ]
                    },
                    {
                        day: "Day 2",
                        title: "Adventure",
                        activities: [
                            { time: "9:00 AM", name: "Adventure Activity", description: "Experience local adventures" },
                            { time: "2:00 PM", name: "Cultural Site", description: "Visit cultural landmarks" }
                        ]
                    },
                    {
                        day: "Day 3",
                        title: "Relaxation",
                        activities: [
                            { time: "10:00 AM", name: "Leisure Time", description: "Enjoy at your own pace" },
                            { time: "3:00 PM", name: "Shopping", description: "Shop for local souvenirs" }
                        ]
                    }
                ],
                hiddenGems: [
                    { name: "Secret Spot", description: "A hidden gem known only to locals", crowdLevel: "Low" },
                    { name: "Scenic Viewpoint", description: "Breathtaking views away from crowds", crowdLevel: "Medium" },
                    { name: "Local Market", description: "Authentic market experience", crowdLevel: "High" }
                ],
                experienceReels: [
                    { title: "Local Culture", description: "Experience the local way of life", videoUrl: "https://www.youtube.com/embed/your-video-id-10" },
                    { title: "Natural Beauty", description: "Discover the natural wonders", videoUrl: "https://www.youtube.com/embed/your-video-id-11" },
                    { title: "Local Cuisine", description: "Taste the authentic flavors", videoUrl: "https://www.youtube.com/embed/your-video-id-12" }
                ],
                hotels: [
                    { name: "Luxury Resort", description: "Premium accommodation with all amenities", rating: 4.8, price: 15000, bookingUrl: "#" },
                    { name: "Boutique Hotel", description: "Charming hotel with personalized service", rating: 4.6, price: 8000, bookingUrl: "#" },
                    { name: "Budget Stay", description: "Comfortable accommodation at great value", rating: 4.2, price: 4000, bookingUrl: "#" }
                ]
            };
            
            if (travelPlan) {
                // Show search results page
                heroSection.style.display = 'none';
                document.getElementById('gems').style.display = 'none';
                document.getElementById('features').style.display = 'none';
                document.getElementById('activities').style.display = 'none';
                document.getElementById('faq').style.display = 'none';
                document.querySelector('footer').style.display = 'none';
                searchResults.classList.add('active');
                
                // Set the title based on the search query
                resultsTitle.textContent = `Travel Plan for ${destination}`;
                
                // Update the search results with generated content
                updateSearchResults(travelPlan, destination);
                
                // Initialize map based on destination
                initializeMap(destination);
                
                // Scroll to top
                window.scrollTo(0, 0);
            } else {
                // Show error message
                errorMessage.classList.add('show');
            }
        } catch (error) {
            console.error('Error:', error);
            // Show error message
            errorMessage.classList.add('show');
        } finally {
            // Remove loading state
            chatInputContainer.classList.remove('loading');
        }
        
        // Clear input
        chatInput.value = '';
    }
}

sendBtn.addEventListener('click', sendMessage);
chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

// Search boxes functionality
searchBoxes.forEach(box => {
    box.addEventListener('click', () => {
        const searchQuery = box.textContent.trim();
        chatInput.value = `I want to ${searchQuery.toLowerCase()}`;
        sendMessage();
    });
});

// Back button functionality
backBtn.addEventListener('click', () => {
    searchResults.classList.remove('active');
    heroSection.style.display = 'flex';
    document.getElementById('gems').style.display = 'block';
    document.getElementById('features').style.display = 'block';
    document.getElementById('activities').style.display = 'block';
    document.getElementById('faq').style.display = 'block';
    document.querySelector('footer').style.display = 'block';
    
    // Destroy map to free resources
    if (map) {
        map.remove();
        map = null;
    }
    
    // Scroll to top
    window.scrollTo(0, 0);
});

// Activity tabs functionality
activityTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        activityTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        // In a real app, this would filter the activities
    });
});

// Gem buttons functionality
gemBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const gemId = btn.getAttribute('data-gem');
        if (gemId) {
            // Show gem details modal
            showGemDetails(gemId);
        }
    });
});

// Function to show gem details
function showGemDetails(gemId) {
    // Create a modal for gem details
    const gemModal = document.createElement('div');
    gemModal.className = 'gem-modal';
    gemModal.innerHTML = `
        <div class="gem-modal-content">
            <button class="gem-modal-close">
                <i class="fas fa-times"></i>
            </button>
            <h3 class="gem-modal-title">Hidden Gem Details</h3>
            <div class="gem-modal-body">
                <p>This is a hidden gem that offers unique experiences away from the crowds. Perfect for travelers looking for authentic and off-the-beaten-path adventures.</p>
                <div class="gem-modal-info">
                    <div class="gem-modal-info-item">
                        <i class="fas fa-map-marker-alt"></i>
                        <span>Location: Hidden Paradise</span>
                    </div>
                    <div class="gem-modal-info-item">
                        <i class="fas fa-clock"></i>
                        <span>Best time to visit: Early morning or late afternoon</span>
                    </div>
                    <div class="gem-modal-info-item">
                        <i class="fas fa-users"></i>
                        <span>Crowd level: Low</span>
                    </div>
                </div>
                <div class="gem-modal-actions">
                    <button class="gem-modal-btn primary">Add to Trip</button>
                    <button class="gem-modal-btn secondary">Get Directions</button>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(gemModal);
    
    // Show modal with animation
    setTimeout(() => {
        gemModal.classList.add('active');
    }, 10);
    
    // Close modal functionality
    const closeBtn = gemModal.querySelector('.gem-modal-close');
    closeBtn.addEventListener('click', () => {
        gemModal.classList.remove('active');
        setTimeout(() => {
            document.body.removeChild(gemModal);
        }, 300);
    });
    
    // Add to trip functionality
    const addBtn = gemModal.querySelector('.gem-modal-btn.primary');
    addBtn.addEventListener('click', () => {
        // Show success message
        addBtn.textContent = 'Added!';
        addBtn.classList.add('success');
        setTimeout(() => {
            gemModal.classList.remove('active');
            setTimeout(() => {
                document.body.removeChild(gemModal);
            }, 300);
        }, 1000);
    });
    
    // Get directions functionality
    const directionsBtn = gemModal.querySelector('.gem-modal-btn.secondary');
    directionsBtn.addEventListener('click', () => {
        // In a real app, this would open maps with directions
        alert('Opening directions to this hidden gem...');
    });
}

// Voice button functionality (simulated)
voiceBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // In a real app, this would activate voice recognition
        console.log('Voice button clicked');
    });
});

// Bottom Navigation Buttons
createBtn.addEventListener('click', () => {
    // Create new trip or expense
    travelSpaceModal.classList.add('active');
    document.body.style.overflow = 'hidden';
});

aiTalkBtn.addEventListener('click', () => {
    // Open AI chat
    chatInput.focus();
});

addBtn.addEventListener('click', () => {
    // Open AI Vision
    aiVisionModal.classList.add('active');
    document.body.style.overflow = 'hidden';
});

// Initialize map based on destination
function initializeMap(destination) {
    // Map coordinates for different destinations
    const destinations = {
        'goa': [15.2993, 74.1240],
        'rajasthan': [27.0238, 74.2179],
        'mumbai': [19.0760, 72.8777],
        'delhi': [28.7041, 77.1025],
        'kashmir': [33.7781, 76.5762],
        'kerala': [10.8505, 76.2711],
        'himachal pradesh': [31.1048, 77.1734]
    };
    
    // Get coordinates for the destination
    let coords = [20.5937, 78.9629]; // Default to center of India
    let destinationName = 'India';
    
    // Check if destination is in our list
    const destKey = destination.toLowerCase();
    for (const key in destinations) {
        if (destKey.includes(key)) {
            coords = destinations[key];
            destinationName = key.charAt(0).toUpperCase() + key.slice(1);
            break;
        }
    }
    
    // Initialize the map
    map = L.map('map').setView(coords, 10);
    
    // Add tile layer with better styling
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 18
    }).addTo(map);
    
    // Add a custom icon for the marker
    const customIcon = L.divIcon({
        html: '<div style="background-color: var(--primary); width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; border: 3px solid white; box-shadow: 0 2px 5px rgba(0,0,0,0.3);"><i class="fas fa-map-marker-alt"></i></div>',
        iconSize: [30, 30],
        iconAnchor: [15, 30],
        popupAnchor: [0, -30],
        className: 'custom-div-icon'
    });
    
    // Add a marker for the destination
    L.marker(coords, { icon: customIcon }).addTo(map)
        .bindPopup(`<b>${destinationName}</b><br>Your travel destination`)
        .openPopup();
    
    // Add additional markers for points of interest
    if (destKey === 'goa') {
        L.marker([15.4909, 73.8278], { icon: customIcon }).addTo(map)
            .bindPopup('<b>Panaji</b><br>Capital of Goa');
        
        L.marker([15.2993, 74.1240], { icon: customIcon }).addTo(map)
            .bindPopup('<b>South Goa</b><br>Beautiful beaches');
    } else if (destKey === 'rajasthan') {
        L.marker([26.9124, 75.7873], { icon: customIcon }).addTo(map)
            .bindPopup('<b>Jaipur</b><br>Pink City');
        
        L.marker([26.2389, 73.0243], { icon: customIcon }).addTo(map)
            .bindPopup('<b>Udaipur</b><br>City of Lakes');
    } else if (destKey === 'mumbai') {
        L.marker([19.0760, 72.8777], { icon: customIcon }).addTo(map)
            .bindPopup('<b>Mumbai</b><br>City of Dreams');
        
        L.marker([19.0822, 72.8812], { icon: customIcon }).addTo(map)
            .bindPopup('<b>Marine Drive</b><br>Queen\'s Necklace');
    }
}

// Function to update weather UI
function updateWeatherUI(data) {
    // Update weather icon based on weather condition
    let iconClass = 'fas fa-sun';
    if (data.weather && data.weather.length > 0) {
        const condition = data.weather[0].main.toLowerCase();
        
        if (condition.includes('cloud')) {
            iconClass = 'fas fa-cloud';
        } else if (condition.includes('rain')) {
            iconClass = 'fas fa-cloud-rain';
        } else if (condition.includes('thunder')) {
            iconClass = 'fas fa-bolt';
        } else if (condition.includes('snow')) {
            iconClass = 'fas fa-snowflake';
        } else if (condition.includes('mist') || condition.includes('fog')) {
            iconClass = 'fas fa-smog';
        }
    }
    
    // Update weather elements
    weatherIcon.className = iconClass + ' weather-icon';
    mobileWeatherIcon.className = iconClass + ' weather-icon';
    
    // Update temperature
    const temp = Math.round(data.main.temp);
    weatherTemp.textContent = `${temp}°C`;
    mobileWeatherTemp.textContent = `${temp}°C`;
    
    // Update location
    const cityName = data.name;
    weatherLocation.textContent = cityName;
    mobileWeatherLocation.textContent = cityName;
}

// Function to fetch weather data
async function fetchWeatherData(city = 'Delhi') {
    try {
        // Try to get real weather data
        const apiKey = 'YOUR_OPENWEATHERMAP_API_KEY'; // Replace with your API key
        if (apiKey !== 'YOUR_OPENWEATHERMAP_API_KEY') {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
            
            if (response.status === 200) {
                const data = await response.json();
                updateWeatherUI(data);
                return;
            }
        }
        
        // Fallback to mock data
        const mockData = {
            name: city,
            main: {
                temp: Math.floor(Math.random() * 15) + 20,
                feels_like: Math.floor(Math.random() * 15) + 20,
                humidity: Math.floor(Math.random() * 40) + 40
            },
            weather: [
                {
                    main: 'Clear',
                    description: 'clear sky'
                }
            ]
        };
        updateWeatherUI(mockData);
    } catch (error) {
        console.error('Error fetching weather data:', error);
        // Fallback to default values if API fails
        weatherIcon.className = 'fas fa-sun weather-icon';
        mobileWeatherIcon.className = 'fas fa-sun weather-icon';
        weatherTemp.textContent = '28°C';
        mobileWeatherTemp.textContent = '28°C';
        weatherLocation.textContent = 'Delhi';
        mobileWeatherLocation.textContent = 'Delhi';
    }
}

// Fetch weather data on page load
fetchWeatherData();

// Update weather when clicking on the weather widget
weatherWidget.addEventListener('click', () => {
    // In a real app, this could open a detailed weather view
    // For demo, we'll just refresh the data
    fetchWeatherData();
});

// FAQ Toggle Functionality
faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
        item.classList.toggle('active');
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.gem-card, .activity-card, .reel-card, .hotel-card, .feature-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Prevent zoom on double tap (mobile)
let lastTouchEnd = 0;
document.addEventListener('touchend', function (event) {
    const now = (new Date()).getTime();
    if (now - lastTouchEnd <= 300) {
        event.preventDefault();
    }
    lastTouchEnd = now;
}, false);

// Book now buttons
document.addEventListener('click', (e) => {
    if (e.target.closest('.book-now-btn')) {
        const btn = e.target.closest('.book-now-btn');
        const activityCard = btn.closest('.activity-card');
        const activityName = activityCard.querySelector('.activity-title').textContent;
        
        // Show booking confirmation modal
        showBookingModal(activityName);
    }
});

// Function to show booking modal
function showBookingModal(activityName) {
    const bookingModal = document.createElement('div');
    bookingModal.className = 'booking-modal';
    bookingModal.innerHTML = `
        <div class="booking-modal-content">
            <button class="booking-modal-close">
                <i class="fas fa-times"></i>
            </button>
            <h3 class="booking-modal-title">Book Your Adventure</h3>
            <div class="booking-modal-body">
                <div class="booking-activity">
                    <h4>${activityName}</h4>
                    <p>Get ready for an unforgettable experience!</p>
                </div>
                <div class="booking-form">
                    <div class="form-group">
                        <label for="booking-date">Select Date</label>
                        <input type="date" id="booking-date" class="form-input">
                    </div>
                    <div class="form-group">
                        <label for="booking-guests">Number of Guests</label>
                        <select id="booking-guests" class="form-input">
                            <option value="1">1 Guest</option>
                            <option value="2">2 Guests</option>
                            <option value="3">3 Guests</option>
                            <option value="4">4 Guests</option>
                            <option value="5">5+ Guests</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="booking-name">Full Name</label>
                        <input type="text" id="booking-name" class="form-input" placeholder="Enter your full name">
                    </div>
                    <div class="form-group">
                        <label for="booking-email">Email</label>
                        <input type="email" id="booking-email" class="form-input" placeholder="Enter your email">
                    </div>
                    <div class="form-group">
                        <label for="booking-phone">Phone Number</label>
                        <input type="tel" id="booking-phone" class="form-input" placeholder="Enter your phone number">
                    </div>
                </div>
                <div class="booking-modal-actions">
                    <button class="booking-modal-btn secondary">Cancel</button>
                    <button class="booking-modal-btn primary">Confirm Booking</button>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(bookingModal);
    
    // Show modal with animation
    setTimeout(() => {
        bookingModal.classList.add('active');
    }, 10);
    
    // Close modal functionality
    const closeBtn = bookingModal.querySelector('.booking-modal-close');
    const cancelBtn = bookingModal.querySelector('.booking-modal-btn.secondary');
    
    const closeModal = () => {
        bookingModal.classList.remove('active');
        setTimeout(() => {
            document.body.removeChild(bookingModal);
        }, 300);
    };
    
    closeBtn.addEventListener('click', closeModal);
    cancelBtn.addEventListener('click', closeModal);
    
    // Confirm booking functionality
    const confirmBtn = bookingModal.querySelector('.booking-modal-btn.primary');
    confirmBtn.addEventListener('click', () => {
        const date = document.getElementById('booking-date').value;
        const guests = document.getElementById('booking-guests').value;
        const name = document.getElementById('booking-name').value;
        const email = document.getElementById('booking-email').value;
        const phone = document.getElementById('booking-phone').value;
        
        if (date && name && email && phone) {
            // Show success message
            confirmBtn.textContent = 'Booking Confirmed!';
            confirmBtn.classList.add('success');
            
            // In a real app, this would send the booking data to a server
            setTimeout(() => {
                closeModal();
                // Show confirmation notification
                showNotification('Booking confirmed! Check your email for details.');
            }, 1500);
        } else {
            // Show error message
            showNotification('Please fill in all required fields.', 'error');
        }
    });
}

// Function to show notification
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}"></i>
            <span>${message}</span>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // Show notification with animation
    setTimeout(() => {
        notification.classList.add('show');
    }, 10);
    
    // Hide notification after 3 seconds
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Hotel booking functionality
document.addEventListener('click', (e) => {
    if (e.target.closest('.hotel-btn.book-now-btn')) {
        const btn = e.target.closest('.hotel-btn');
        const hotelCard = btn.closest('.hotel-card');
        const hotelName = hotelCard.querySelector('.hotel-title').textContent;
        const bookingUrl = btn.getAttribute('data-booking-url');
        
        if (bookingUrl && bookingUrl !== '#') {
            // Open booking URL in a new tab
            window.open(bookingUrl, '_blank');
        } else {
            // Show hotel booking modal
            showHotelBookingModal(hotelName);
        }
    }
});

// Function to show hotel booking modal
function showHotelBookingModal(hotelName) {
    const hotelBookingModal = document.createElement('div');
    hotelBookingModal.className = 'hotel-booking-modal';
    hotelBookingModal.innerHTML = `
        <div class="hotel-booking-modal-content">
            <button class="hotel-booking-modal-close">
                <i class="fas fa-times"></i>
            </button>
            <h3 class="hotel-booking-modal-title">Book Your Stay</h3>
            <div class="hotel-booking-modal-body">
                <div class="hotel-booking-info">
                    <h4>${hotelName}</h4>
                    <p>Experience luxury and comfort during your trip.</p>
                </div>
                <div class="hotel-booking-form">
                    <div class="form-group">
                        <label for="hotel-checkin">Check-in Date</label>
                        <input type="date" id="hotel-checkin" class="form-input">
                    </div>
                    <div class="form-group">
                        <label for="hotel-checkout">Check-out Date</label>
                        <input type="date" id="hotel-checkout" class="form-input">
                    </div>
                    <div class="form-group">
                        <label for="hotel-rooms">Number of Rooms</label>
                        <select id="hotel-rooms" class="form-input">
                            <option value="1">1 Room</option>
                            <option value="2">2 Rooms</option>
                            <option value="3">3 Rooms</option>
                            <option value="4">4+ Rooms</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="hotel-guests">Number of Guests</label>
                        <select id="hotel-guests" class="form-input">
                            <option value="1">1 Guest</option>
                            <option value="2">2 Guests</option>
                            <option value="3">3 Guests</option>
                            <option value="4">4 Guests</option>
                            <option value="5">5+ Guests</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="hotel-name">Full Name</label>
                        <input type="text" id="hotel-name" class="form-input" placeholder="Enter your full name">
                    </div>
                    <div class="form-group">
                        <label for="hotel-email">Email</label>
                        <input type="email" id="hotel-email" class="form-input" placeholder="Enter your email">
                    </div>
                    <div class="form-group">
                        <label for="hotel-phone">Phone Number</label>
                        <input type="tel" id="hotel-phone" class="form-input" placeholder="Enter your phone number">
                    </div>
                </div>
                <div class="hotel-booking-modal-actions">
                    <button class="hotel-booking-modal-btn secondary">Cancel</button>
                    <button class="hotel-booking-modal-btn primary">Confirm Booking</button>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(hotelBookingModal);
    
    // Show modal with animation
    setTimeout(() => {
        hotelBookingModal.classList.add('active');
    }, 10);
    
    // Close modal functionality
    const closeBtn = hotelBookingModal.querySelector('.hotel-booking-modal-close');
    const cancelBtn = hotelBookingModal.querySelector('.hotel-booking-modal-btn.secondary');
    
    const closeModal = () => {
        hotelBookingModal.classList.remove('active');
        setTimeout(() => {
            document.body.removeChild(hotelBookingModal);
        }, 300);
    };
    
    closeBtn.addEventListener('click', closeModal);
    cancelBtn.addEventListener('click', closeModal);
    
    // Confirm booking functionality
    const confirmBtn = hotelBookingModal.querySelector('.hotel-booking-modal-btn.primary');
    confirmBtn.addEventListener('click', () => {
        const checkin = document.getElementById('hotel-checkin').value;
        const checkout = document.getElementById('hotel-checkout').value;
        const rooms = document.getElementById('hotel-rooms').value;
        const guests = document.getElementById('hotel-guests').value;
        const name = document.getElementById('hotel-name').value;
        const email = document.getElementById('hotel-email').value;
        const phone = document.getElementById('hotel-phone').value;
        
        if (checkin && checkout && name && email && phone) {
            // Show success message
            confirmBtn.textContent = 'Booking Confirmed!';
            confirmBtn.classList.add('success');
            
            // In a real app, this would send the booking data to a server
            setTimeout(() => {
                closeModal();
                // Show confirmation notification
                showNotification('Hotel booking confirmed! Check your email for details.');
            }, 1500);
        } else {
            // Show error message
            showNotification('Please fill in all required fields.', 'error');
        }
    });
}

// Confetti Effect Function
function createConfetti() {
    const colors = ['#f44336', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5', '#2196f3', '#03a9f4', '#00bcd4', '#009688', '#4caf50', '#8bc34a', '#cddc39', '#ffeb3b', '#ffc107', '#ff9800', '#ff5722'];
    const confettiCount = 150;
    
    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.width = Math.random() * 10 + 5 + 'px';
        confetti.style.height = confetti.style.width;
        confetti.style.opacity = Math.random() * 0.8 + 0.2;
        confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
        confetti.style.animationDuration = Math.random() * 3 + 2 + 's';
        confetti.style.animationDelay = Math.random() * 0.5 + 's';
        document.body.appendChild(confetti);
        
        // Remove after animation
        setTimeout(() => {
            confetti.remove();
        }, 5000);
    }
}

// Special hero animation
document.addEventListener('DOMContentLoaded', () => {
    const heroTitle = document.querySelector('.hero-title');
    const heroSubtitle = document.querySelector('.hero-subtitle');
    
    // Add initial animation
    setTimeout(() => {
        heroTitle.style.animation = 'none';
        heroTitle.style.opacity = '1';
        heroTitle.style.transform = 'translateY(0)';
    }, 3000);
    
    setTimeout(() => {
        heroSubtitle.style.opacity = '1';
        heroSubtitle.style.transform = 'translateY(0)';
    }, 3500);
    
    // Add interactive particles
    const heroContent = document.querySelector('.hero-content');
    
    heroContent.addEventListener('mousemove', (e) => {
        const particles = document.querySelectorAll('.particle');
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;
        
        particles.forEach((particle, index) => {
            const speed = (index % 5 + 1) * 0.5;
            const x = (mouseX - 0.5) * speed * 20;
            const y = (mouseY - 0.5) * speed * 20;
            
            particle.style.transform = `translate(${x}px, ${y}px)`;
        });
    });
    
    heroContent.addEventListener('mouseleave', () => {
        const particles = document.querySelectorAll('.particle');
        particles.forEach(particle => {
            particle.style.transform = '';
        });
    });
});

// Add CSS for modals and notifications
const additionalCSS = `
/* Booking Modal */
.booking-modal, .hotel-booking-modal, .gem-modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 5000;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s, visibility 0.3s;
}

.booking-modal.active, .hotel-booking-modal.active, .gem-modal.active {
    opacity: 1;
    visibility: visible;
}

.booking-modal-content, .hotel-booking-modal-content, .gem-modal-content {
    background: rgba(30, 41, 59, 0.95);
    backdrop-filter: blur(20px);
    border-radius: 20px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    padding: 2rem;
    max-width: 500px;
    width: 90%;
    max-height: 90vh;
    overflow-y: auto;
    transform: translateY(20px);
    transition: transform 0.3s;
    position: relative;
}

.booking-modal.active .booking-modal-content,
.hotel-booking-modal.active .hotel-booking-modal-content,
.gem-modal.active .gem-modal-content {
    transform: translateY(0);
}

.booking-modal-content::before,
.hotel-booking-modal-content::before,
.gem-modal-content::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, var(--primary), var(--secondary), var(--accent));
    animation: shimmer 3s infinite;
}

.booking-modal-title, .hotel-booking-modal-title, .gem-modal-title {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
    color: var(--light);
}

.booking-modal-close, .hotel-booking-modal-close, .gem-modal-close {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: none;
    border: none;
    color: var(--gray);
    font-size: 1.5rem;
    cursor: pointer;
    transition: color 0.3s;
}

.booking-modal-close:hover, .hotel-booking-modal-close:hover, .gem-modal-close:hover {
    color: var(--light);
}

.booking-activity, .hotel-booking-info, .gem-modal-body {
    margin-bottom: 1.5rem;
}

.booking-activity h4, .hotel-booking-info h4, .gem-modal-title {
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
    color: var(--primary);
}

.booking-form, .hotel-booking-form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.form-group {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.form-group label {
    color: var(--light);
    font-weight: 500;
}

.form-input {
    background: rgba(15, 23, 42, 0.8);
    color: var(--light);
    border: 1px solid rgba(255, 255, 255, 0.1);
    padding: 0.8rem 1rem;
    border-radius: 12px;
    font-size: 1rem;
    outline: none;
}

.form-input:focus {
    border-color: var(--primary);
}

.booking-modal-actions, .hotel-booking-modal-actions, .gem-modal-actions {
    display: flex;
    gap: 1rem;
    justify-content: flex-end;
    margin-top: 1.5rem;
}

.booking-modal-btn, .hotel-booking-modal-btn, .gem-modal-btn {
    padding: 0.6rem 1.5rem;
    border-radius: 50px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s;
    font-size: 1rem;
    border: none;
}

.booking-modal-btn.primary, .hotel-booking-modal-btn.primary, .gem-modal-btn.primary {
    background: linear-gradient(135deg, var(--primary), var(--secondary));
    color: white;
}

.booking-modal-btn.primary:hover, .hotel-booking-modal-btn.primary:hover, .gem-modal-btn.primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(99, 102, 241, 0.4);
}

.booking-modal-btn.secondary, .hotel-booking-modal-btn.secondary, .gem-modal-btn.secondary {
    background: rgba(255, 255, 255, 0.1);
    color: var(--light);
}

.booking-modal-btn.secondary:hover, .hotel-booking-modal-btn.secondary:hover, .gem-modal-btn.secondary:hover {
    background: rgba(255, 255, 255, 0.2);
}

.booking-modal-btn.success, .hotel-booking-modal-btn.success, .gem-modal-btn.success {
    background: var(--success);
}

/* Notification */
.notification {
    position: fixed;
    top: 20px;
    right: 20px;
    background: rgba(30, 41, 59, 0.95);
    backdrop-filter: blur(20px);
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    padding: 1rem 1.5rem;
    max-width: 300px;
    transform: translateX(120%);
    transition: transform 0.3s ease;
    z-index: 6000;
}

.notification.show {
    transform: translateX(0);
}

.notification.success {
    border-left: 4px solid var(--success);
}

.notification.error {
    border-left: 4px solid var(--danger);
}

.notification-content {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    color: var(--light);
}

.notification i {
    font-size: 1.2rem;
}

.notification.success i {
    color: var(--success);
}

.notification.error i {
    color: var(--danger);
}

/* Gem Modal Info */
.gem-modal-info {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    margin: 1rem 0;
}

.gem-modal-info-item {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    color: var(--light);
}

.gem-modal-info-item i {
    color: var(--primary);
    width: 20px;
}

/* Confetti */
.confetti {
    position: fixed;
    width: 10px;
    height: 10px;
    top: -10px;
    z-index: 9999;
    animation: confetti-fall linear forwards;
}

@keyframes confetti-fall {
    to {
        transform: translateY(calc(100vh + 20px)) rotate(360deg);
    }
}

/* Custom Leaflet Marker */
.custom-div-icon {
    background: transparent !important;
    border: none !important;
}

/* Mobile Responsive */
@media (max-width: 768px) {
    .booking-modal-content, .hotel-booking-modal-content, .gem-modal-content {
        padding: 1.5rem;
        width: 95%;
    }
    
    .booking-modal-actions, .hotel-booking-modal-actions, .gem-modal-actions {
        flex-direction: column;
    }
    
    .notification {
        right: 10px;
        left: 10px;
        max-width: none;
    }
}
`;

// Add the additional CSS to the page
const style = document.createElement('style');
style.textContent = additionalCSS;
document.head.appendChild(style);
