// ===== NAVBAR STICKY =====
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
});

// ===== MOBILE MENU =====
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
const mobileClose = document.getElementById('mobileClose');

hamburger.addEventListener('click', () => {
    mobileMenu.classList.add('open');
});
mobileClose.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
});
document.addEventListener('click', (e) => {
    if (mobileMenu.classList.contains('open') && !mobileMenu.contains(e.target) && !hamburger.contains(e.target)) {
        mobileMenu.classList.remove('open');
    }
});

// ===== SEARCH OVERLAY =====
const searchToggle = document.getElementById('searchToggle');
const searchOverlay = document.getElementById('searchOverlay');
const searchClose = document.getElementById('searchClose');

searchToggle.addEventListener('click', () => {
    searchOverlay.classList.add('open');
    document.getElementById('searchInput').focus();
});
searchClose.addEventListener('click', () => {
    searchOverlay.classList.remove('open');
});
searchOverlay.addEventListener('click', (e) => {
    if (e.target === searchOverlay) {
        searchOverlay.classList.remove('open');
    }
});

// ===== BACK TO TOP =====
const backToTop = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
    }
});
backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ===== SCROLL REVEAL (IntersectionObserver) =====
document.addEventListener('DOMContentLoaded', () => {
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.2 });
    reveals.forEach(el => observer.observe(el));
});

// ===== PARALLAX FOR EDITORIAL =====
const editorialBg = document.getElementById('editorialBg');
if (editorialBg) {
    window.addEventListener('scroll', () => {
        const offset = window.pageYOffset;
        const speed = 0.4;
        editorialBg.style.transform = `translateY(${offset * speed}px)`;
    });
}

// ===== ACCORDION (product page) =====
document.querySelectorAll('.accordion-header').forEach(btn => {
    btn.addEventListener('click', () => {
        const body = btn.nextElementSibling;
        body.classList.toggle('open');
    });
});

// ===== FEATURED PRODUCT QUANTITY =====
const qtyValue = document.getElementById('qtyValue');
const qtyDec = document.getElementById('qtyDec');
const qtyInc = document.getElementById('qtyInc');
if (qtyDec && qtyInc && qtyValue) {
    let qty = 1;
    qtyDec.addEventListener('click', () => { if (qty > 1) qty--; qtyValue.textContent = qty; });
    qtyInc.addEventListener('click', () => { qty++; qtyValue.textContent = qty; });
}

// ===== FEATURED ADD TO CART =====
document.getElementById('featuredAddCart')?.addEventListener('click', () => {
    const product = products.find(p => p.name === "ARCTIC 01") || products[0];
    const qty = parseInt(document.getElementById('qtyValue').textContent);
    addToCart(product, qty);
});

// ===== COLOR / SIZE SELECTION (featured) =====
document.querySelectorAll('.color-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.color-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
    });
});
document.querySelectorAll('.size-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
    });
});

// ===== INIT CART COUNT =====
updateCartCount();
