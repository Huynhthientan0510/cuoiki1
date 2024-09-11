document.addEventListener("DOMContentLoaded", function() {
    var toggles = document.querySelectorAll(".toggle-submenu");
    var menuItems = document.querySelectorAll("aside ul li");

    toggles.forEach(function(toggle) {
        toggle.addEventListener("click", function() {
            var submenu = this.nextElementSibling;

            if (submenu.style.display === "block") {
                submenu.style.display = "none";
                this.textContent = "+"; // Đổi lại thành dấu "+"
            } else {
                submenu.style.display = "block";
                this.textContent = "-"; // Đổi dấu "+" thành "-"
            }
        });
    });


    document.addEventListener('DOMContentLoaded', function() {
        // Xử lý sự kiện click cho các mục con trong submenu
        const submenuItems = document.querySelectorAll('.submenu li');
        submenuItems.forEach(item => {
            item.addEventListener('click', function() {
                // Xóa lớp 'selected' khỏi tất cả các mục con
                submenuItems.forEach(el => el.classList.remove('selected'));
                // Thêm lớp 'selected' cho mục con được nhấp
                this.classList.add('selected');
            });
        });
    });


    menuItems.forEach(function(item) {
        item.addEventListener("click", function() {
            // Loại bỏ lớp 'selected' khỏi tất cả các mục
            menuItems.forEach(function(i) {
                i.classList.remove("selected");
            });

            // Thêm lớp 'selected' cho mục đã được click
            this.classList.add("selected");
        });
    });
});
document.getElementById('search-button').addEventListener('click', function() {
    const query = document.getElementById('search-input').value;
    if (query) {
        alert('Tìm kiếm cho: ' + query);
        // Thực hiện tìm kiếm hoặc chuyển hướng đến trang tìm kiếm
    } else {
        alert('Vui lòng nhập từ khóa tìm kiếm.');
    }
});
document.getElementById('search-input').addEventListener('focus', function() {
    document.querySelector('.search-bar').classList.add('expanded');
});

document.getElementById('search-input').addEventListener('blur', function() {
    document.querySelector('.search-bar').classList.remove('expanded');
});

document.addEventListener("DOMContentLoaded", function() {
    // Lấy phần tử <h1> và <li>
    const cppTitle = document.getElementById("cpp-title");
    const cppNavItem = document.getElementById("cpp-nav-item");

    // Hàm kiểm tra xem phần tử <h1> có xuất hiện trên màn hình không
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Thêm sự kiện cuộn trang
    window.addEventListener("scroll", function() {
        if (isInViewport(cppTitle)) {
            cppNavItem.classList.add("highlight");
        } else {
            cppNavItem.classList.remove("highlight");
        }
    });
});
