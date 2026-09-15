/**
 * AutoMarket - Used Car Market & Automotive Services
 * Main JavaScript Engine (main.js)
 * ES6+ Modular Codebase, Production Ready
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // -------------------------------------------------------------
  // 1. Theme Management (Dark / Light with System Preference)
  // -------------------------------------------------------------
  const themeToggles = document.querySelectorAll('.theme-toggle-btn');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

  function getStoredTheme() {
    return localStorage.getItem('automarket_theme') || (prefersDark.matches ? 'dark' : 'light');
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-bs-theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('automarket_theme', theme);

    themeToggles.forEach(btn => {
      const icon = btn.querySelector('i');
      if (icon) {
        if (theme === 'dark') {
          icon.className = 'bi bi-sun-fill text-warning';
          btn.setAttribute('aria-label', 'Switch to light mode');
          btn.title = 'Switch to light mode';
        } else {
          icon.className = 'bi bi-moon-stars-fill text-dark';
          btn.setAttribute('aria-label', 'Switch to dark mode');
          btn.title = 'Switch to dark mode';
        }
      }
    });

    // Synchronize header logos for dark/light mode
    const headerLogos = document.querySelectorAll('.site-header .navbar-brand-logo, header .navbar-brand-logo');
    headerLogos.forEach(img => {
      if (img.closest('footer')) return;
      const isSubdir = window.location.pathname.includes('/documentation/');
      const prefix = isSubdir ? '../' : '';
      img.src = theme === 'dark' ? `${prefix}assets/images/logo-dark.svg` : `${prefix}assets/images/logo.svg`;
    });
  }

  // Initialize theme
  applyTheme(getStoredTheme());

  themeToggles.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      applyTheme(newTheme);
      showToast(`Switched to ${newTheme} mode`, 'info');
    });
  });

  // Listen for system theme changes if user hasn't explicitly set one
  prefersDark.addEventListener('change', (e) => {
    if (!localStorage.getItem('automarket_theme')) {
      applyTheme(e.matches ? 'dark' : 'light');
    }
  });


  // -------------------------------------------------------------
  // 2. RTL Layout Management (LTR / RTL)
  // -------------------------------------------------------------
  const rtlToggles = document.querySelectorAll('.rtl-toggle-btn');

  function getStoredDir() {
    return localStorage.getItem('automarket_dir') || 'ltr';
  }

  function applyDirection(dir) {
    document.documentElement.setAttribute('dir', dir);
    localStorage.setItem('automarket_dir', dir);

    rtlToggles.forEach(btn => {
      const text = btn.querySelector('.dir-text');
      if (text) {
        text.textContent = dir === 'rtl' ? 'LTR' : 'RTL';
      }
      btn.setAttribute('aria-label', `Switch layout to ${dir === 'rtl' ? 'LTR' : 'RTL'}`);
    });
  }

  // Initialize RTL
  applyDirection(getStoredDir());

  rtlToggles.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const currentDir = document.documentElement.getAttribute('dir') || 'ltr';
      const newDir = currentDir === 'rtl' ? 'ltr' : 'rtl';
      applyDirection(newDir);
      showToast(`Layout switched to ${newDir.toUpperCase()}`, 'info');
    });
  });


  // -------------------------------------------------------------
  // 3. Sticky Header Elevation
  // -------------------------------------------------------------
  const header = document.querySelector('.site-header');
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 30) {
        header.classList.add('shadow-md');
      } else {
        header.classList.remove('shadow-md');
      }
    });
  }


  // -------------------------------------------------------------
  // 4. Favorites / Wishlist LocalStorage Engine
  // -------------------------------------------------------------
  const favoriteButtons = document.querySelectorAll('.car-favorite-btn');
  const favCountBadges = document.querySelectorAll('.favorites-count-badge');

  function getFavorites() {
    try {
      return JSON.parse(localStorage.getItem('automarket_favorites')) || [1, 3];
    } catch {
      return [1, 3];
    }
  }

  function saveFavorites(favs) {
    localStorage.setItem('automarket_favorites', JSON.stringify(favs));
    updateFavBadges(favs.length);
  }

  function updateFavBadges(count) {
    favCountBadges.forEach(badge => {
      badge.textContent = count;
      badge.style.display = count > 0 ? 'inline-flex' : 'none';
    });
  }

  function syncFavoriteButtons() {
    const favs = getFavorites();
    updateFavBadges(favs.length);

    favoriteButtons.forEach(btn => {
      const carId = parseInt(btn.getAttribute('data-car-id') || '0', 10);
      const icon = btn.querySelector('i');
      if (favs.includes(carId)) {
        btn.classList.add('active');
        if (icon) icon.className = 'bi bi-heart-fill text-danger';
        btn.setAttribute('aria-label', 'Remove from saved cars');
      } else {
        btn.classList.remove('active');
        if (icon) icon.className = 'bi bi-heart';
        btn.setAttribute('aria-label', 'Save this car');
      }
    });
  }

  favoriteButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const carId = parseInt(btn.getAttribute('data-car-id') || '0', 10);
      let favs = getFavorites();

      if (favs.includes(carId)) {
        favs = favs.filter(id => id !== carId);
        saveFavorites(favs);
        syncFavoriteButtons();
        showToast('Removed vehicle from saved wishlist', 'warning');
      } else {
        favs.push(carId);
        saveFavorites(favs);
        syncFavoriteButtons();
        showToast('Added vehicle to saved wishlist! View in Dashboard.', 'success');
      }
    });
  });

  syncFavoriteButtons();


  // -------------------------------------------------------------
  // 5. Interactive Loan / EMI Financing Calculator
  // -------------------------------------------------------------
  const calcForm = document.getElementById('emiCalculatorForm');
  if (calcForm) {
    const priceInput = document.getElementById('calcPrice');
    const priceDisplay = document.getElementById('calcPriceDisplay');
    const downInput = document.getElementById('calcDown');
    const downDisplay = document.getElementById('calcDownDisplay');
    const rateInput = document.getElementById('calcRate');
    const rateDisplay = document.getElementById('calcRateDisplay');
    const termSelect = document.getElementById('calcTerm');

    const emiAmountEl = document.getElementById('calcEmiResult');
    const totalPrincipalEl = document.getElementById('calcPrincipalResult');
    const totalInterestEl = document.getElementById('calcInterestResult');
    const totalPaymentEl = document.getElementById('calcTotalResult');

    function calculateEMI() {
      const price = parseFloat(priceInput.value) || 28000;
      const down = parseFloat(downInput.value) || 5000;
      const rate = parseFloat(rateInput.value) || 6.5;
      const months = parseInt(termSelect.value) || 60;

      // Update slider display labels
      if (priceDisplay) priceDisplay.textContent = `$${price.toLocaleString()}`;
      if (downDisplay) downDisplay.textContent = `$${down.toLocaleString()}`;
      if (rateDisplay) rateDisplay.textContent = `${rate}%`;

      const loanPrincipal = Math.max(0, price - down);
      const monthlyRate = (rate / 100) / 12;

      let monthlyPayment = 0;
      if (monthlyRate === 0) {
        monthlyPayment = loanPrincipal / months;
      } else {
        monthlyPayment = (loanPrincipal * monthlyRate * Math.pow(1 + monthlyRate, months)) /
                         (Math.pow(1 + monthlyRate, months) - 1);
      }

      const totalRepay = monthlyPayment * months;
      const totalInterest = Math.max(0, totalRepay - loanPrincipal);

      if (emiAmountEl) emiAmountEl.textContent = `$${Math.round(monthlyPayment).toLocaleString()}`;
      if (totalPrincipalEl) totalPrincipalEl.textContent = `$${Math.round(loanPrincipal).toLocaleString()}`;
      if (totalInterestEl) totalInterestEl.textContent = `$${Math.round(totalInterest).toLocaleString()}`;
      if (totalPaymentEl) totalPaymentEl.textContent = `$${Math.round(totalRepay).toLocaleString()}`;
    }

    [priceInput, downInput, rateInput, termSelect].forEach(el => {
      if (el) {
        el.addEventListener('input', calculateEMI);
        el.addEventListener('change', calculateEMI);
      }
    });

    calculateEMI();
  }


  // -------------------------------------------------------------
  // 6. Skeleton Loader Simulation (e.g. on Inventory Page)
  // -------------------------------------------------------------
  const skeletonGrid = document.getElementById('skeletonGrid');
  const inventoryGrid = document.getElementById('inventoryGrid');

  if (skeletonGrid && inventoryGrid) {
    // Simulate high-speed dynamic data fetch
    setTimeout(() => {
      skeletonGrid.style.display = 'none';
      inventoryGrid.classList.remove('d-none');
    }, 650);
  }

  // Auto-populate filter keyword from navbar search
  const navUrlParams = new URLSearchParams(window.location.search);
  const navSearchQuery = navUrlParams.get('search');
  if (navSearchQuery) {
    const filterInput = document.getElementById('filterKeyword');
    if (filterInput) {
      filterInput.value = navSearchQuery;
    }
  }


  // -------------------------------------------------------------
  // 7. Grid / List View Switcher (Inventory Page)
  // -------------------------------------------------------------
  const viewGridBtn = document.getElementById('btnViewGrid');
  const viewListBtn = document.getElementById('btnViewList');
  const inventoryCars = document.querySelectorAll('.inventory-item');

  if (viewGridBtn && viewListBtn) {
    viewGridBtn.addEventListener('click', () => {
      viewGridBtn.classList.add('active', 'btn-primary-custom');
      viewGridBtn.classList.remove('btn-outline-custom');
      viewListBtn.classList.remove('active', 'btn-primary-custom');
      viewListBtn.classList.add('btn-outline-custom');

      inventoryCars.forEach(item => {
        item.classList.remove('col-12');
        item.classList.add('col-md-6', 'col-lg-4');
        const card = item.querySelector('.car-card-list');
        if (card) {
          card.classList.remove('car-card-list');
          card.classList.add('car-card');
        }
      });
    });

    viewListBtn.addEventListener('click', () => {
      viewListBtn.classList.add('active', 'btn-primary-custom');
      viewListBtn.classList.remove('btn-outline-custom');
      viewGridBtn.classList.remove('active', 'btn-primary-custom');
      viewGridBtn.classList.add('btn-outline-custom');

      inventoryCars.forEach(item => {
        item.classList.remove('col-md-6', 'col-lg-4');
        item.classList.add('col-12');
        const card = item.querySelector('.car-card');
        if (card) {
          card.classList.remove('car-card');
          card.classList.add('car-card-list');
        }
      });
    });
  }


  // -------------------------------------------------------------
  // 8. Client-Side Form Validation (Bootstrap 5 Enhanced)
  // -------------------------------------------------------------
  const forms = document.querySelectorAll('.needs-validation');
  forms.forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      } else {
        event.preventDefault();
        showToast('Success! Your request has been submitted.', 'success');
        form.reset();
        form.classList.remove('was-validated');
        // Close modal if inside modal
        const modalEl = form.closest('.modal');
        if (modalEl && window.bootstrap) {
          const modalInstance = window.bootstrap.Modal.getInstance(modalEl);
          if (modalInstance) modalInstance.hide();
        }
        return;
      }
      form.classList.add('was-validated');
    }, false);
  });


  // -------------------------------------------------------------
  // 9. Toast Notification System
  // -------------------------------------------------------------
  function showToast(message, type = 'info') {
    let container = document.getElementById('toastContainer');
    if (!container) {
      container = document.createElement('div');
      container.id = 'toastContainer';
      container.className = 'toast-container position-fixed bottom-0 end-0 p-3';
      container.style.zIndex = '9999';
      document.body.appendChild(container);
    }

    const toastId = `toast_${Date.now()}`;
    const bgClass = type === 'success' ? 'bg-success text-white' :
                    type === 'warning' ? 'bg-warning text-dark' :
                    type === 'danger' ? 'bg-danger text-white' : 'bg-primary text-white';

    const toastHtml = `
      <div id="${toastId}" class="toast align-items-center ${bgClass} border-0 shadow-lg" role="alert" aria-live="assertive" aria-atomic="true">
        <div class="d-flex">
          <div class="toast-body fw-medium py-3">
            <i class="bi ${type === 'success' ? 'bi-check-circle-fill' : type === 'warning' ? 'bi-exclamation-triangle-fill' : 'bi-info-circle-fill'} me-2"></i>
            ${message}
          </div>
          <button type="button" class="btn-close ${type === 'warning' ? '' : 'btn-close-white'} me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
      </div>
    `;
    container.insertAdjacentHTML('beforeend', toastHtml);

    const toastEl = document.getElementById(toastId);
    if (window.bootstrap && window.bootstrap.Toast) {
      const bsToast = new window.bootstrap.Toast(toastEl, { delay: 3500 });
      bsToast.show();
      toastEl.addEventListener('hidden.bs.toast', () => toastEl.remove());
    } else {
      setTimeout(() => toastEl.remove(), 3500);
    }
  }

  // -------------------------------------------------------------
  // 10. Role-Based Authentication & Session Management
  // -------------------------------------------------------------
  const DEFAULT_USERS = [
    {
      id: 'usr_buyer_01',
      name: 'Alex Morgan',
      email: 'buyer@automarket.com',
      password: 'password123',
      role: 'buyer',
      avatar: 'AM',
      created: '2026-01-15'
    },
    {
      id: 'usr_seller_01',
      name: 'Marcus Vance',
      dealership: 'Apex Auto Group',
      email: 'seller@automarket.com',
      password: 'password123',
      role: 'seller',
      avatar: 'MV',
      created: '2025-11-20'
    }
  ];

  function getUsers() {
    try {
      const stored = localStorage.getItem('automarket_users');
      if (!stored) {
        localStorage.setItem('automarket_users', JSON.stringify(DEFAULT_USERS));
        return DEFAULT_USERS;
      }
      return JSON.parse(stored);
    } catch (e) {
      return DEFAULT_USERS;
    }
  }

  function getCurrentUser() {
    try {
      const stored = localStorage.getItem('automarket_current_user');
      return stored ? JSON.parse(stored) : null;
    } catch (e) {
      return null;
    }
  }

  function setCurrentUser(user) {
    if (user) {
      localStorage.setItem('automarket_current_user', JSON.stringify(user));
    } else {
      localStorage.removeItem('automarket_current_user');
    }
    updateNavAuthState();
  }

  function registerUser(userData) {
    const users = getUsers();
    const existing = users.find(u => u.email.toLowerCase() === userData.email.toLowerCase());
    if (existing) {
      return { success: false, message: 'An account with this email already exists.' };
    }
    const initials = userData.name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2) || 'U';
    const newUser = {
      id: `usr_${Date.now()}`,
      name: userData.name,
      email: userData.email,
      password: userData.password,
      role: userData.role || 'buyer',
      dealership: userData.role === 'seller' ? (userData.dealership || `${userData.name}'s Dealership`) : undefined,
      avatar: initials,
      created: new Date().toISOString()
    };
    users.push(newUser);
    localStorage.setItem('automarket_users', JSON.stringify(users));
    setCurrentUser(newUser);
    return { success: true, user: newUser };
  }

  function loginUser(email, password) {
    const users = getUsers();
    const user = users.find(u => u.email.toLowerCase() === email.trim().toLowerCase());
    if (!user) {
      return { success: false, message: 'Account not found. Please register first.' };
    }
    if (user.password !== password) {
      return { success: false, message: 'Invalid password. Please try again.' };
    }
    setCurrentUser(user);
    return { success: true, user: user };
  }

  function logoutUser() {
    setCurrentUser(null);
    showToast('Signed out successfully', 'info');
    setTimeout(() => {
      window.location.href = 'index.html';
    }, 400);
  }

  function updateNavAuthState() {
    const currentUser = getCurrentUser();
    const navAuthContainers = document.querySelectorAll('.nav-auth-container');

    navAuthContainers.forEach(container => {
      if (currentUser) {
        const dashboardUrl = currentUser.role === 'seller' ? 'seller-dashboard.html' : 'dashboard.html';
        const roleBadge = currentUser.role === 'seller' ? 'Seller' : 'Buyer';
        const badgeColor = currentUser.role === 'seller' ? 'bg-warning text-dark' : 'bg-primary text-white';

        container.innerHTML = `
          <div class="dropdown user-nav-dropdown">
            <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              <span class="user-avatar-sm">${currentUser.avatar || 'U'}</span>
              <span class="d-none d-md-inline small">${currentUser.name}</span>
              <span class="badge ${badgeColor} rounded-pill d-none d-lg-inline" style="font-size: 0.65rem;">${roleBadge}</span>
            </button>
            <ul class="dropdown-menu dropdown-menu-end shadow-lg">
              <li class="px-3 py-2 border-bottom">
                <div class="fw-bold">${currentUser.name}</div>
                <div class="small text-muted text-truncate" style="max-width: 180px;">${currentUser.email}</div>
                <span class="badge ${badgeColor} rounded-pill mt-1" style="font-size: 0.7rem;">${roleBadge} Account</span>
              </li>
              <li>
                <a class="dropdown-item py-2" href="${dashboardUrl}">
                  <i class="bi bi-speedometer2 me-2 text-primary"></i> ${currentUser.role === 'seller' ? 'Seller Hub' : 'Buyer Dashboard'}
                </a>
              </li>
              <li>
                <a class="dropdown-item py-2" href="${currentUser.role === 'seller' ? 'seller-dashboard.html#inventory' : 'dashboard.html#saved'}">
                  <i class="bi ${currentUser.role === 'seller' ? 'bi-car-front' : 'bi-heart'} me-2 text-warning"></i> ${currentUser.role === 'seller' ? 'My Listed Cars' : 'Saved Cars'}
                </a>
              </li>
              <li><hr class="dropdown-divider my-1"></li>
              <li>
                <button class="dropdown-item py-2 text-danger nav-logout-trigger">
                  <i class="bi bi-box-arrow-right me-2"></i> Sign Out
                </button>
              </li>
            </ul>
          </div>
        `;

        const logoutBtn = container.querySelector('.nav-logout-trigger');
        if (logoutBtn) {
          logoutBtn.addEventListener('click', (e) => {
            e.preventDefault();
            logoutUser();
          });
        }
      } else {
        container.innerHTML = `
          <a href="login.html" class="btn btn-primary-custom nav-auth-btn">
            <i class="bi bi-box-arrow-in-right me-1"></i> Login
          </a>
        `;
      }
    });
  }

  // Initialize Auth
  getUsers();
  updateNavAuthState();

  // Expose global auth
  window.autoMarketAuth = {
    getUsers,
    getCurrentUser,
    setCurrentUser,
    registerUser,
    loginUser,
    logoutUser,
    updateNavAuthState
  };

  window.autoMarketToast = showToast;
});
