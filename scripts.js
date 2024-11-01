// Three.js Initialization for 3D Icons
let scene, camera, renderer;
let icons = {};

function init() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth / 2, 400);
    document.getElementById('hero-canvas').appendChild(renderer.domElement);

    // Add lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(0, 10, 10);
    scene.add(directionalLight);

    // Add a rotating cube as a placeholder for 3D icon
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshStandardMaterial({ color: 0x2563eb });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
    icons['cube'] = cube;

    camera.position.z = 5;

    animate();
}

function animate() {
    requestAnimationFrame(animate);
    
    // Rotate icons
    Object.values(icons).forEach(icon => {
        icon.rotation.x += 0.01;
        icon.rotation.y += 0.01;
    });

    renderer.render(scene, camera);
}

// Initialize on load
window.addEventListener('load', init);

// Handle window resize
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth / 2, 400);
});

// Modal Functionality for Projects
const readMoreButtons = document.querySelectorAll('.read-more-btn');
const closeButtons = document.querySelectorAll('.close');

// Function to open modal
readMoreButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modalId = button.getAttribute('data-modal');
        document.getElementById(modalId).style.display = 'block';
    });
});

// Function to close modal
closeButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modalId = button.getAttribute('data-modal');
        document.getElementById(modalId).style.display = 'none';
    });
});

// Close modal when clicking outside of modal content
window.addEventListener('click', (event) => {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
    }
});
