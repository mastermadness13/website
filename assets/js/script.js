<!DOCTYPE html>
<html lang="ar">
<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>ليبو - متجر إلكتروني</title>

  <!-- Favicon -->
  <link rel="shortcut icon" href="./assets/images/logo/favicon.ico" type="image/x-icon" />

  <!-- Google Fonts -->
  <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700&display=swap" rel="stylesheet">

  <!-- Ionicons -->
  <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
  <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>

  <!-- Custom CSS -->
  <link rel="stylesheet" href="./assets/css/style-prefix.css" />
</head>

<body dir="rtl">
  <!-- Overlay -->
  <div class="overlay" data-overlay></div>

  <!-- Modal Newsletter -->
  <div class="modal" data-modal>
    <div class="modal-close-overlay" data-modal-overlay></div>
    <div class="modal-content">
      <button class="modal-close-btn" data-modal-close>
        <ion-icon name="close-outline"></ion-icon>
      </button>
      <div class="newsletter-img">
        <img src="./assets/images/newsletter.png" alt="اشترك في النشرة الإخبارية" width="400" height="400" />
      </div>
      <div class="newsletter">
        <form action="#"> 
          <h3>اشترك الآن!</h3>
          <p>احصل على عروض خاصة ومعلومات حصرية مباشرة إلى بريدك الإلكتروني.</p>
          <input type="email" placeholder="بريدك الإلكتروني" required />
          <button type="submit">اشتراك</button>
        </form>
      </div>
    </div>
  </div>

  <!-- Header -->
  <header class="header">
    <div class="container">
      <a href="#" class="logo">
        <img src="./assets/images/logo/logo.svg" alt="شعار الموقع" width="120" />
      </a>

      <nav class="navbar">
        <ul class="navbar-list">
          <li><a href="#">الرئيسية</a></li>
          <li><a href="#">التصنيفات</a></li>
          <li><a href="#">رجال</a></li>
          <li><a href="#">نساء</a></li>
          <li><a href="#">مجوهرات</a></li>
          <li><a href="#">عطور</a></li>
          <li><a href="#">المدونة</a></li>
          <li><a href="#">العروض الساخنة</a></li>
        </ul>
      </nav>

      <div class="header-actions">
        <button class="action-btn"><ion-icon name="search-outline"></ion-icon></button>
        <button class="action-btn"><ion-icon name="heart-outline"></ion-icon><span class="count">0</span></button>
        <button class="action-btn"><ion-icon name="bag-handle-outline"></ion-icon><span class="count">0</span></button>
        <button class="action-btn" data-mobile-menu-open-btn><ion-icon name="menu-outline"></ion-icon></button>
      </div>
    </div>
  </header>

  <!-- Mobile Menu -->
  <nav class="mobile-navigation-menu has-scrollbar" data-mobile-menu>
    <div class="menu-top">
      <h2 class="menu-title">القائمة</h2>
      <button class="menu-close-btn" data-mobile-menu-close-btn><ion-icon name="close-outline"></ion-icon></button>
    </div>
    <ul class="mobile-menu-list">
      <li><a href="#">الرئيسية</a></li>
      <li><a href="#">التصنيفات</a></li>
      <li><a href="#">رجال</a></li>
      <li><a href="#">نساء</a></li>
      <li><a href="#">مجوهرات</a></li>
      <li><a href="#">عطور</a></li>
      <li><a href="#">المدونة</a></li>
      <li><a href="#">العروض الساخنة</a></li>
    </ul>
  </nav>

  <!-- Hero Section -->
  <section class="hero">
    <div class="container">
      <h2 class="banner-subtitle">عنصر مميز</h2>
      <h1 class="banner-title">أحدث صيحات الموضة النسائية</h1>
      <p class="banner-text">تبدأ من &dollar; <b>20</b>.00</p>
      <a href="#" class="banner-btn">تسوق الآن</a>
    </div>
  </section>

  <!-- Categories Section -->
  <section class="categories">
    <div class="container">
      <div class="category-item">
        <div class="category-img-box">
          <img src="./assets/images/icons/dress.svg" alt="فساتين" width="30" />
        </div>
        <div class="category-content-box">
          <div class="category-content-flex">
            <h3 class="category-item-title">فساتين وجلابيات</h3>
            <p class="category-item-amount">(53)</p>
          </div>
          <a href="#" class="category-btn">عرض الكل</a>
        </div>
      </div>
    </div>
  </section>
<script>
  'use strict';

  // Modal Window
  const modal = document.querySelector('[data-modal]');
  const modalCloseBtn = document.querySelector('[data-modal-close]');
  const modalCloseOverlay = document.querySelector('[data-modal-overlay]');

  const closeModal = () => modal.classList.add('closed');

  modalCloseOverlay.addEventListener('click', closeModal);
  modalCloseBtn.addEventListener('click', closeModal);

  // Toast Notification
  const notificationToast = document.querySelector('[data-toast]');
  const toastCloseBtn = document.querySelector('[data-toast-close]');

  if (toastCloseBtn && notificationToast) {
    toastCloseBtn.addEventListener('click', () => {
      notificationToast.classList.add('closed');
    });
  }

  // Mobile Menu
  const mobileMenuOpenBtns = document.querySelectorAll('[data-mobile-menu-open-btn]');
  const mobileMenus = document.querySelectorAll('[data-mobile-menu]');
  const mobileMenuCloseBtns = document.querySelectorAll('[data-mobile-menu-close-btn]');
  const overlay = document.querySelector('[data-overlay]');

  mobileMenuOpenBtns.forEach((btn, index) => {
    const closeFunc = () => {
      mobileMenus[index].classList.remove('active');
      overlay.classList.remove('active');
    };

    btn.addEventListener('click', () => {
      mobileMenus[index].classList.add('active');
      overlay.classList.add('active');
    });

    if (mobileMenuCloseBtns[index]) {
      mobileMenuCloseBtns[index].addEventListener('click', closeFunc);
    }
  });

  if (overlay) {
    overlay.addEventListener('click', () => {
      mobileMenus.forEach(menu => menu.classList.remove('active'));
      overlay.classList.remove('active');
    });
  }

  // Accordion Menus
  const accordionButtons = document.querySelectorAll('[data-accordion-btn]');
  const accordions = document.querySelectorAll('[data-accordion]');

  accordionButtons.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      const isActive = accordions[index].classList.contains('active');

      accordions.forEach(accordion => accordion.classList.remove('active'));
      accordionButtons.forEach(button => button.classList.remove('active'));

      if (!isActive) {
        accordions[index].classList.add('active');
        btn.classList.add('active');
      }
    });
  });

  // Dark Mode Toggle
  const toggleBtn = document.getElementById('darkModeToggle');

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
      localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
    });

    // Load dark mode preference
    const savedDarkMode = localStorage.getItem('darkMode') === 'true';
    if (savedDarkMode) {
      document.body.classList.add('dark-mode');
    }
  }

  // Optional: Search in Sidebar Categories
  const searchInput = document.querySelector('.sidebar-search');
  const categoryItems = document.querySelectorAll('.sidebar-submenu-title .product-name');

  if (searchInput) {
    searchInput.addEventListener('input', function () {
      const searchTerm = this.value.toLowerCase();

      categoryItems.forEach(item => {
        const text = item.textContent.toLowerCase();
        item.closest('.sidebar-submenu-category').style.display = text.includes(searchTerm) ? 'block' : 'none';
      });
    });
  }
</script>
  <!-- Products Showcase -->
  <section class="product-showcase">
    <div class="container">
      <h2 class="title">المنتجات الجديدة</h2>
      <div class="showcase-container">
        <div class="showcase">
          <a href="#" class="showcase-img-box">
            <img src="./assets/images/products/jacket-1.jpg" alt="جاكيت جلد رجال شتوي" class="product-img default" width="30
