const phones = [
    {
        "name": "Điện thoại iPhone 16 Pro Max 256GB",
        "price": "34.990.000₫",
        "color": "Gold",
        "os": "iOS 18",
        "cpu": "Apple A18 Pro 6 nhân",
        "gpu": "Apple GPU 6 nhân",
        "ram": "8 GB",
        "storage": "256 GB"
    },
    {
        "name": "Điện thoại Samsung Galaxy S24 Ultra 5G 12GB/512GB",
        "price": "33.490.000₫",
        "color": "Grey",
        "os": "Android 14",
        "cpu": "Snapdragon 8 Gen 3 for Galaxy",
        "gpu": "Adreno 750",
        "ram": "12 GB",
        "storage": "512 GB"
    },
    {
        "name": "Điện thoại OPPO A3 6GB/128GB",
        "price": "4.990.000₫",
        "color": "Purple",
        "os": "Android 14",
        "cpu": "Snapdragon 6s Gen 1 8 nhân",
        "gpu": "Adreno 610",
        "ram": "6 GB",
        "storage": "128 GB"
    },
    {
        "name": "Xiaomi 14T 12GB 512GB",
        "price": "12.990.000₫",
        "color": "Green Grey",
        "os": "Xiaomi HyperOS (Android 14)",
        "cpu": "MediaTek Dimensity 8300 Ultra 8 nhân",
        "gpu": "Mali-G615",
        "ram": "12 GB",
        "storage": "512 GB"
    },
    {
        "name": "Điện thoại Samsung Galaxy A55 5G 12GB/256GB",
        "price": "11.490.000₫",
        "color": "Blue",
        "os": "Android 14",
        "cpu": "Exynos 1480 8 nhân",
        "gpu": "AMD Titan 1WGP",
        "ram": "12 GB",
        "storage": "256 GB"
    },
    {
        "name": "Điện thoại Samsung Galaxy Z Fold6 5G 12GB/256GB",
        "price": "41.990.000₫",
        "color": "Light Grey",
        "os": "Android 14",
        "cpu": "Snapdragon 8 Gen 3 for Galaxy",
        "gpu": "Adreno 750",
        "ram": "12 GB",
        "storage": "256 GB"
    },
    {
        "name": "Điện thoại Samsung Galaxy Z Flip6 5G 12GB/256GB",
        "price": "26.990.000₫",
        "color": "Blue",
        "os": "Android 14",
        "cpu": "Snapdragon 8 Gen 3 for Galaxy",
        "gpu": "Adreno 750",
        "ram": "12 GB",
        "storage": "256 GB"
    },
    {
        "name": "Điện thoại Samsung Galaxy S23 FE 5G 8GB/128GB",
        "price": "14.890.000₫",
        "color": "Green Grey",
        "os": "Android 13",
        "cpu": "Exynos 2200 8 nhân",
        "gpu": "Xclipse 920",
        "ram": "8 GB",
        "storage": "128 GB"
    },
    {
        "name": "Điện thoại Samsung Galaxy S23 Ultra 5G 8GB/256GB",
        "price": "21.990.000₫",
        "color": "Green",
        "os": "Android 13",
        "cpu": "Snapdragon 8 Gen 2 for Galaxy",
        "gpu": "Adreno 740",
        "ram": "8 GB",
        "storage": "256 GB"
    },
    {
        "name": "Điện thoại iPhone 15 128GB",
        "price": "19.790.000₫",
        "color": "Pink",
        "os": "iOS 17",
        "cpu": "Apple A16 Bionic",
        "gpu": "Apple GPU 5 nhân",
        "ram": "6 GB",
        "storage": "128 GB"
    },
    {
        "name": "Điện thoại iPhone 15 Pro 128GB",
        "price": "28.990.000₫",
        "color": "Titan",
        "os": "iOS 17",
        "cpu": "Apple A17 Pro 6 nhân",
        "gpu": "Apple GPU 6 nhân",
        "ram": "8 GB",
        "storage": "128 GB"
    },
    {
        "name": "Điện thoại iPhone 16 128GB",
        "price": "22.290.000₫",
        "color": "Blue",
        "os": "iOS 18",
        "cpu": "Apple A18 6 nhân",
        "gpu": "Apple GPU 5 nhân",
        "ram": "8 GB",
        "storage": "128 GB"
    },
    {
        "name": "Điện thoại iPhone 14 128GB",
        "price": "17.390.000₫",
        "color": "Purple",
        "os": "iOS 17",
        "cpu": "Apple A15 Bionic",
        "gpu": "Apple GPU 5 nhân",
        "ram": "6 GB",
        "storage": "128 GB"
    },
    {
        "name": "Điện thoại iPhone 11 64GB",
        "price": "8.990.000₫",
        "color": "White",
        "os": "iOS 17",
        "cpu": "Apple A13 Bionic",
        "gpu": "Apple GPU 4 nhân",
        "ram": "4 GB",
        "storage": "64 GB"
    },
    {
        "name": "Điện thoại Xiaomi Redmi Note 13 8GB/128GB",
        "price": "4.990.000₫",
        "color": "Blue",
        "os": "Android 13",
        "cpu": "Snapdragon 685 8 nhân",
        "gpu": "Adreno 610",
        "ram": "8 GB",
        "storage": "128 GB"
    },
    {
        "name": "Điện thoại Xiaomi Redmi Note 13 Pro 8GB/128GB",
        "price": "6.990.000₫",
        "color": "Dark Blue",
        "os": "Android 13",
        "cpu": "MediaTek Helio G99-Ultra 8 nhân",
        "gpu": "Mali-G57 MC2",
        "ram": "8 GB",
        "storage": "128 GB"
    },
    {
        "name": "Điện thoại Xiaomi Redmi 13 6GB/128GB",
        "price": "4.290.000₫",
        "color": "Saphiare",
        "os": "Android 14",
        "cpu": "MediaTek Helio G91 Ultra 8 nhân",
        "gpu": "Mali-G52 MC2",
        "ram": "6 GB",
        "storage": "128 GB"
    },
    {
        "name": "Điện thoại Xiaomi Redmi 14C 6GB/128GB",
        "price": "3.290.000₫",
        "color": "Grey Blue",
        "os": "Android 14",
        "cpu": "MediaTek Helio G81-Ultra 8 nhân",
        "gpu": "Mali-G52 MC2",
        "ram": "6 GB",
        "storage": "128 GB"
    },
    {
        "name": "Điện thoại Xiaomi Redmi A3 3GB/64GB",
        "price": "2.490.000₫",
        "color": "Green",
        "os": "Android 14",
        "cpu": "MediaTek Helio G36 8 nhân",
        "gpu": "IMG PowerVR GE8320",
        "ram": "3 GB",
        "storage": "64 GB"
    },
    {
        "name": "Điện thoại OPPO Reno11 F 5G 8GB/256GB",
        "price": "8.490.000₫",
        "color": "Tím",
        "os": "Android 14",
        "cpu": "MediaTek Dimensity 7050 5G",
        "gpu": "Mali-G68 MC4",
        "ram": "8 GB",
        "storage": "256 GB"
    },
    {
        "name": "Điện thoại OPPO Reno12 5G 12GB/256GB",
        "price": "12.990.000₫",
        "color": "White",
        "os": "Android 14",
        "cpu": "Dimensity 7300-Energy 5G",
        "gpu": "Arm Mali-G615",
        "ram": "12 GB",
        "storage": "256 GB"
    },
    {
        "name": "Điện thoại OPPO Reno12 F 5G 12GB/256GB",
        "price": "9.990.000₫",
        "color": "Orange",
        "os": "Android 14",
        "cpu": "Dimensity 6300 5G",
        "gpu": "Mali-G57 MC2",
        "ram": "8 GB",
        "storage": "256 GB"
    },
    {
        "name": "Điện thoại OPPO Reno11 Pro 5G 12GB/512GB",
        "price": "12.990.000₫",
        "color": "White",
        "os": "Android 14",
        "cpu": "MediaTek Dimensity 7050 5G",
        "gpu": "Mali-G68 MC4",
        "ram": "8 GB",
        "storage": "256 GB"
    },
    {
        "name": "Điện thoại OPPO Reno10 Pro+ 5G 12GB/256GB",
        "price": "14.490.000₫",
        "color": "Purple",
        "os": "Android 13",
        "cpu": "MediaTek Dimensity 7050 5G",
        "gpu": "Mali-G68 MC4",
        "ram": "8 GB",
        "storage": "126 GB"
    }
];
// Lấy danh mục từ `localStorage`
const selectedCategory = localStorage.getItem('selectedCategory');

// Lọc sản phẩm theo danh mục
let filteredProducts = phones.filter(product => {
    return product.name.toLowerCase().includes(selectedCategory.toLowerCase());
});
if(selectedCategory=="Tất cả sản phẩm"){
    filteredProducts = phones;
}

// Lấy phần tử chính nơi các carousels sẽ được hiển thị
const mainContainer = document.querySelector('.carousel-container'); // Đảm bảo có phần tử .carousel-container trong HTML

// Xóa nội dung hiện có trong mainContainer
mainContainer.innerHTML = '';

// Chia các sản phẩm đã lọc thành nhóm (4 sản phẩm mỗi slide)
const chunks = [];
for (let i = 0; i < filteredProducts.length; i += 4) {
    chunks.push(filteredProducts.slice(i, i + 4));
}

// Tạo một `carousel slide` cho từng nhóm sản phẩm và thêm vào `mainContainer`
chunks.forEach((chunk, index) => {
    // Tạo một div cho carousel slide
    const carouselSlide = document.createElement('div');
    carouselSlide.classList.add('carousel', 'slide', `carousel-slide-${index}`);
    carouselSlide.setAttribute('data-bs-ride', 'carousel');
    carouselSlide.style.marginBottom = '20px';

    // Tạo một div cho carousel-inner
    const carouselInner = document.createElement('div');
    carouselInner.classList.add('carousel-inner');

    // Tạo một carousel-item cho slide này
    const carouselItem = document.createElement('div');
    carouselItem.classList.add('carousel-item', 'active');
    carouselItem.style.background = '#ffffff';

    // Tạo một hàng cho các sản phẩm trong carousel-item
    const row = document.createElement('div');
    row.classList.add('row', 'g-0', 'slider-row');

    // Tạo từng sản phẩm trong nhóm
    chunk.forEach(product => {
        const col = document.createElement('div');
        col.classList.add('col-sm-6', 'col-md-3', 'col-lg-3', 'col-xl-3', 'col-xxl-3');

        col.innerHTML = `
            <div class="card">
                <div class="card-body text-center" style="border-width: 0px !important;background: #c5c5c5;border-radius: 15px;margin-bottom: 10px;">
                    <img src="./assets/img/${product.name.toLowerCase().replace(/[\s\/]/g, '')}.jpg" style="margin-bottom: 10px;border-radius: 15px;width: 250px;height: 250px;">
                    <h4 class="card-title price-head" style="font-size: 18px; font-family: 'Times New Roman', Times, serif;min-height:65px;">
                        <strong>${product.name}</strong><br><br>
                    </h4>
                    <h1 class="price-cost" style="font-size: 18px;color: rgb(167,44,27);">
                        <strong>${product.price}</strong>
                    </h1>
                    <button class="btn btn-secondary view-detail-btn" type="button" data-name="${product.name}" style="min-width: 100%;background: #ba0100;border-style: none;">Xem chi tiết</button>
                </div>
            </div>
        `;

        row.appendChild(col);
    });

    // Thêm hàng vào carousel-item
    carouselItem.appendChild(row);

    // Thêm carousel-item vào carousel-inner
    carouselInner.appendChild(carouselItem);

    // Thêm carousel-inner vào carousel slide
    carouselSlide.appendChild(carouselInner);

    // Thêm carousel slide vào mainContainer
    mainContainer.appendChild(carouselSlide);
});

// Thêm sự kiện cho các nút "Xem chi tiết" để lưu thông tin sản phẩm vào localStorage khi nhấn vào
document.querySelectorAll('.view-detail-btn').forEach(button => {
    button.addEventListener('click', function() {
        // Lấy tên sản phẩm từ thuộc tính data-name
        const productName = this.getAttribute('data-name');
        
        // Tìm sản phẩm trong mảng `phones`
        const selectedProduct = phones.find(product => product.name === productName);

        // Lưu thông tin sản phẩm vào localStorage
        localStorage.setItem('selectedPhone', JSON.stringify(selectedProduct));

        // Điều hướng đến trang chi tiết sản phẩm (nếu cần)
        window.location.href = './productdetail.html';
    });
});