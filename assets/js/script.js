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
// Lấy 8 sản phẩm đầu tiên từ mảng phones
// Lấy 8 sản phẩm đầu tiên từ mảng phones
const products = phones.slice(0, 8);

// Lấy các phần tử cần thiết từ DOM
const carouselInner = document.querySelector('.carousel-inner.item1');

// Xóa tất cả nội dung hiện có trong slider
carouselInner.innerHTML = '';

// Chia các sản phẩm thành hai nhóm (4 sản phẩm mỗi slide) để hiển thị trong các slide khác nhau
const chunks = [];
for (let i = 0; i < products.length; i += 4) {
    chunks.push(products.slice(i, i + 4));
}

// Tạo HTML động cho từng nhóm sản phẩm
chunks.forEach((chunk, index) => {
    // Tạo một div cho carousel-item
    const carouselItem = document.createElement('div');
    carouselItem.classList.add('carousel-item');
    if (index === 0) {
        carouselItem.classList.add('active'); // Đặt slide đầu tiên là active
    }
    carouselItem.style.background = '#ffffff';

    // Tạo một hàng cho các sản phẩm
    const row = document.createElement('div');
    row.classList.add('row', 'g-0', 'slider-row');

    // Tạo từng sản phẩm trong nhóm
    chunk.forEach((product, productIndex) => {
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
                    <button class="btn btn-secondary view-detail-btn" type="button" data-index="${index * 4 + productIndex}" style="min-width: 100%;background: #ba0100;border-style: none;">Xem chi tiết</button>
                </div>
            </div>
        `;
        row.appendChild(col);
    });

    // Thêm hàng vào carousel item
    carouselItem.appendChild(row);

    // Thêm carousel item vào carousel inner
    carouselInner.appendChild(carouselItem);
});
for(let i in phones){
    console.log(phones[i].name.toLowerCase().replace(/[\s\/]/g, ''))
}
// Thêm sự kiện cho tất cả các nút "Xem chi tiết"
document.querySelectorAll('.view-detail-btn').forEach(button => {
    button.addEventListener('click', function() {
        const productIndex = this.getAttribute('data-index');
        const selectedProduct = phones[productIndex];

        // Lưu thông tin sản phẩm vào localStorage
        localStorage.setItem('selectedPhone', JSON.stringify(selectedProduct));

        // Điều hướng đến trang chi tiết sản phẩm (nếu có)
        window.location.href = './productdetail.html';
    });
});
// Lấy 8 sản phẩm tiếp theo từ mảng phones (từ phần tử thứ 8 đến thứ 15)
const nextProducts = phones.slice(8, 16);

// Lấy phần tử carousel inner cho phần tiếp theo
const carouselInnerNext = document.querySelector('.carousel-inner.item2');

// Xóa nội dung hiện có trong slider nếu cần (nếu muốn thêm mới hoàn toàn)
carouselInnerNext.innerHTML = '';

// Chia các sản phẩm thành hai nhóm (4 sản phẩm mỗi slide) để hiển thị trong các slide khác nhau
const nextChunks = [];
for (let i = 0; i < nextProducts.length; i += 4) {
    nextChunks.push(nextProducts.slice(i, i + 4));
}

// Tạo HTML động cho từng nhóm sản phẩm
nextChunks.forEach((chunk, index) => {
    // Tạo một div cho carousel-item
    const carouselItem = document.createElement('div');
    carouselItem.classList.add('carousel-item');
    if (index === 0) {
        carouselItem.classList.add('active'); // Đặt slide đầu tiên là active
    }
    carouselItem.style.background = '#ffffff';

    // Tạo một hàng cho các sản phẩm
    const row = document.createElement('div');
    row.classList.add('row', 'g-0', 'slider-row');

    // Tạo từng sản phẩm trong nhóm
    chunk.forEach((product, productIndex) => {
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
                    <button class="btn btn-secondary view-detail-btn" type="button" data-index="${8 + index * 4 + productIndex}" style="min-width: 100%;background: #ba0100;border-style: none;">Xem chi tiết</button>
                </div>
            </div>
        `;

        row.appendChild(col);
    });

    // Thêm hàng vào carousel item
    carouselItem.appendChild(row);

    // Thêm carousel item vào carousel inner
    carouselInnerNext.appendChild(carouselItem);
});

// Thêm sự kiện cho tất cả các nút "Xem chi tiết" của 8 sản phẩm tiếp theo
document.querySelectorAll('.view-detail-btn').forEach(button => {
    button.addEventListener('click', function() {
        const productIndex = this.getAttribute('data-index');
        const selectedProduct = phones[productIndex];

        // Lưu thông tin sản phẩm vào localStorage
        localStorage.setItem('selectedPhone', JSON.stringify(selectedProduct));

        // Điều hướng đến trang chi tiết sản phẩm (nếu có)
        window.location.href = './productdetail.html';
    });
});
// Danh muc
// Lấy tất cả các mục trong dropdown menu
const dropdownItems = document.querySelectorAll('.dropdown-item');

// Thêm sự kiện click cho từng mục
dropdownItems.forEach(item => {
    item.addEventListener('click', function() {
        // Lấy tên danh mục từ nội dung của item
        let category = this.textContent.trim();
        if(category=="Apple"){
            category ="Iphone";
        }
        console.log(category)
        // Lưu danh mục vào localStorage
        localStorage.setItem('selectedCategory', category);

        // Chuyển hướng đến trang sản phẩm (nếu cần)
        if (this.getAttribute('href') === './product_list.html') {
            window.location.href = './product_list.html';
        }
    });
});
const searchInput = document.querySelector('input[type="search"]');
const searchButton = document.querySelector('.btn.btn-primary');

// Thêm sự kiện click vào nút tìm kiếm
searchButton.addEventListener('click', function() {
    // Lấy giá trị người dùng nhập vào ô tìm kiếm
    const searchQuery = searchInput.value.trim();

    // Kiểm tra nếu người dùng đã nhập từ khóa
    if (searchQuery) {
        // Lưu từ khóa vào localStorage dưới dạng selectedCategory
        localStorage.setItem('selectedCategory', searchQuery);

        // Điều hướng đến trang danh sách sản phẩm (hoặc bạn có thể thực hiện hành động lọc ngay trên trang hiện tại nếu muốn)
        window.location.href = './product_list.html';
    } else {
        alert('Vui lòng nhập từ khóa tìm kiếm.');
    }
});