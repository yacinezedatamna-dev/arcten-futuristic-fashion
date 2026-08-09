// ===== RENDER SHOP PRODUCTS =====
function renderShopProducts(filteredProducts) {
    const grid = document.getElementById('shopProductGrid');
    if (!grid) return;
    const productsToRender = filteredProducts || products;
    grid.innerHTML = productsToRender.map(p => `
        <div class="product-card" data-id="${p.id}">
            <div class="product-card-image">
                <img src="${p.image}" alt="${p.name}" />
            </div>
            <div class="product-card-body">
                <div class="product-card-name">${p.name}</div>
                <div class="product-card-category">${p.category}</div>
                <div class="product-card-price">$${p.price}</div>
                <a href="product.html?id=${p.id}" class="btn btn-primary">VIEW PRODUCT</a>
            </div>
        </div>
    `).join('');
}

// ===== FILTERS & SORTING =====
function filterAndSort() {
    let filtered = [...products];

    // Category
    const cat = document.getElementById('filterCategory')?.value;
    if (cat && cat !== 'all') filtered = filtered.filter(p => p.category === cat);

    // Color
    const color = document.getElementById('filterColor')?.value;
    if (color && color !== 'all') filtered = filtered.filter(p => p.color === color);

    // Size
    const size = document.getElementById('filterSize')?.value;
    if (size && size !== 'all') filtered = filtered.filter(p => p.sizes.includes(size));

    // Price
    const price = document.getElementById('filterPrice')?.value;
    if (price && price !== 'all') {
        const [min, max] = price.split('-').map(Number);
        if (price.includes('+')) {
            filtered = filtered.filter(p => p.price >= 1000);
        } else {
            filtered = filtered.filter(p => p.price >= min && p.price <= max);
        }
    }

    // Sort
    const sort = document.getElementById('sortSelect')?.value;
    if (sort === 'low-high') filtered.sort((a, b) => a.price - b.price);
    else if (sort === 'high-low') filtered.sort((a, b) => b.price - a.price);
    else if (sort === 'newest') filtered.sort((a, b) => b.id - a.id);
    // 'featured' keeps original order

    renderShopProducts(filtered);
}

// ===== EVENT LISTENERS =====
document.addEventListener('DOMContentLoaded', () => {
    renderShopProducts();
    // Attach change events
    const filters = ['filterCategory', 'filterColor', 'filterSize', 'filterPrice', 'sortSelect'];
    filters.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.addEventListener('change', filterAndSort);
    });
});
