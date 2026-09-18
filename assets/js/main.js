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
  // 4. Favorites / Wishlist LocalStorage Engine (Auth-Gated)
  // -------------------------------------------------------------
  const favCountBadges = document.querySelectorAll('.favorites-count-badge');

  function getFavorites() {
    try {
      const currentUser = getCurrentUser();
      if (!currentUser) return [];
      return JSON.parse(localStorage.getItem(`automarket_favorites_${currentUser.id}`) || localStorage.getItem('automarket_favorites') || '[]');
    } catch {
      return [];
    }
  }

  function saveFavorites(favs) {
    const currentUser = getCurrentUser();
    if (currentUser) {
      localStorage.setItem(`automarket_favorites_${currentUser.id}`, JSON.stringify(favs));
    }
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

    document.querySelectorAll('.car-favorite-btn').forEach(btn => {
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

  // Document-level click handler for all favorite buttons (supports dynamic cards)
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.car-favorite-btn');
    if (!btn) return;

    e.preventDefault();
    e.stopPropagation();

    const currentUser = getCurrentUser();
    const carId = parseInt(btn.getAttribute('data-car-id') || '0', 10);

    // If not authenticated, prompt and redirect to login
    if (!currentUser) {
      showToast('Please sign in to add vehicles to your wishlist', 'warning');
      if (carId) {
        sessionStorage.setItem('automarket_pending_fav', carId.toString());
      }
      sessionStorage.setItem('automarket_redirect_after_login', window.location.href);
      setTimeout(() => {
        window.location.href = 'login.html';
      }, 800);
      return;
    }

    if (!carId) return;

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

  // Header Wishlist Icon Click Guard (redirect to login if unauthenticated)
  document.querySelectorAll('a[title="Saved Wishlist"], a[href="dashboard.html#saved"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const currentUser = getCurrentUser();
      if (!currentUser) {
        e.preventDefault();
        showToast('Please sign in to access your saved wishlist', 'info');
        sessionStorage.setItem('automarket_redirect_after_login', 'dashboard.html#saved');
        setTimeout(() => {
          window.location.href = 'login.html';
        }, 700);
      }
    });
  });

  syncFavoriteButtons();

  // -------------------------------------------------------------
  // 4b. Auth-Gated Action Buttons (Find Your Car, Book Inspection, etc.)
  // -------------------------------------------------------------
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.auth-required-btn, [data-auth-required="true"], [data-bs-target="#bookInspectionModal"]');
    if (!btn) return;

    const currentUser = getCurrentUser();
    if (!currentUser) {
      e.preventDefault();
      e.stopPropagation();

      const modalTarget = btn.getAttribute('data-bs-target') || btn.getAttribute('data-auth-modal');
      let redirectTarget = btn.getAttribute('href') || btn.getAttribute('data-auth-action') || 'inventory.html';
      
      if (modalTarget === '#bookInspectionModal') {
        const pageName = window.location.pathname.split('/').pop() || 'index.html';
        redirectTarget = pageName + (window.location.search || '');
        sessionStorage.setItem('automarket_pending_modal', '#bookInspectionModal');
      }

      sessionStorage.setItem('automarket_redirect_after_login', redirectTarget);
      showToast('Please sign in first to continue.', 'info');
      
      setTimeout(() => {
        window.location.href = `login.html?redirect=${encodeURIComponent(redirectTarget)}`;
      }, 700);
      return false;
    } else {
      // Auto-fill user contact info inside modal if opening
      const modalTarget = btn.getAttribute('data-bs-target') || btn.getAttribute('data-auth-modal');
      if (modalTarget === '#bookInspectionModal') {
        const nameInput = document.getElementById('bookName');
        const emailInput = document.getElementById('bookEmail');
        if (nameInput && !nameInput.value && currentUser.name) {
          nameInput.value = currentUser.name;
        }
        if (emailInput && !emailInput.value && currentUser.email) {
          emailInput.value = currentUser.email;
        }
      }
    }
  }, true);

  // Check for pending modal after login return
  const pendingModal = sessionStorage.getItem('automarket_pending_modal');
  if (pendingModal && getCurrentUser()) {
    sessionStorage.removeItem('automarket_pending_modal');
    setTimeout(() => {
      const modalEl = document.querySelector(pendingModal);
      if (modalEl && window.bootstrap && typeof window.bootstrap.Modal === 'function') {
        const modalInstance = new bootstrap.Modal(modalEl);
        modalInstance.show();
      }
    }, 450);
  }

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
  // 6. Comprehensive Inventory & Blog Filtering Engine
  // -------------------------------------------------------------
  const skeletonGrid = document.getElementById('skeletonGrid');
  const inventoryGrid = document.getElementById('inventoryGrid');
  const bodyRadios = document.querySelectorAll('.body-filter-radio, input[name="bodyCategory"]');
  const categoryPills = document.querySelectorAll('#categoryFilterPills .category-pill');
  const filterKeywordInput = document.getElementById('filterKeyword');
  const filterMakeSelect = document.getElementById('filterMakeSelect');
  const filterPriceSlider = document.getElementById('filterPriceSlider');
  const invPriceVal = document.getElementById('invPriceVal');
  const filterMileageSelect = document.getElementById('filterMileageSelect');
  const filterFuelSelect = document.getElementById('filterFuelSelect');
  const filterSortSelect = document.getElementById('filterSortSelect');
  const btnApplyFilters = document.getElementById('btnApplyFilters');
  const clearFiltersBtn = document.getElementById('btnClearAllFilters');
  const showingCountEl = document.getElementById('invShowingCount');
  const totalCountEl = document.getElementById('invTotalCount');

  let activeCategory = '';

  function normalizeCategory(cat) {
    if (!cat) return '';
    const c = cat.toLowerCase().trim();
    if (c === 'ev' || c === 'hybrid' || c === 'electric') return 'electric';
    return c;
  }

  function applySingleCategory(category, syncUI = true) {
    activeCategory = normalizeCategory(category);

    if (syncUI) {
      // 1. Sync Category Quick Pills (Single Active Pill)
      categoryPills.forEach(pill => {
        const pillCat = normalizeCategory(pill.getAttribute('data-category') || '');
        if (pillCat === activeCategory) {
          pill.classList.add('active', 'btn-primary-custom');
          pill.classList.remove('btn-outline-custom');
        } else {
          pill.classList.remove('active', 'btn-primary-custom');
          pill.classList.add('btn-outline-custom');
        }
      });

      // 2. Sync Sidebar Radio Buttons (Single Selected Radio)
      bodyRadios.forEach(radio => {
        const radioVal = normalizeCategory(radio.value || '');
        radio.checked = (radioVal === activeCategory);
      });
    }

    filterInventory();
  }

  function filterInventory() {
    const allItems = Array.from(document.querySelectorAll('.inventory-item'));
    if (!allItems.length) return;

    const keyword = (filterKeywordInput ? filterKeywordInput.value.toLowerCase().trim() : '');
    const make = (filterMakeSelect ? filterMakeSelect.value.toLowerCase().trim() : '');
    const maxPrice = filterPriceSlider ? parseInt(filterPriceSlider.value, 10) : 150000;
    const maxMileage = filterMileageSelect && filterMileageSelect.value ? parseInt(filterMileageSelect.value, 10) : Infinity;
    const fuel = (filterFuelSelect ? filterFuelSelect.value.toLowerCase().trim() : '');
    const sortVal = filterSortSelect ? filterSortSelect.value : 'best';

    // Update price slider display label
    if (invPriceVal && filterPriceSlider) {
      invPriceVal.textContent = `$${parseInt(filterPriceSlider.value, 10).toLocaleString()}${filterPriceSlider.value >= 150000 ? '+' : ''}`;
    }

    let visibleCount = 0;
    allItems.forEach(item => {
      const itemBody = normalizeCategory(item.getAttribute('data-body') || '');
      const itemMake = (item.getAttribute('data-make') || '').toLowerCase().trim();
      const itemPrice = parseInt(item.getAttribute('data-price') || '0', 10);
      const itemMileage = parseInt(item.getAttribute('data-mileage') || '0', 10);
      const itemFuel = (item.getAttribute('data-fuel') || '').toLowerCase().trim();
      const itemText = item.textContent.toLowerCase();

      // 1. Category match
      const matchCategory = !activeCategory || (itemBody === activeCategory);

      // 2. Keyword match
      const matchKeyword = !keyword || itemText.includes(keyword);

      // 3. Make match
      const matchMake = !make || itemMake === make || itemText.includes(make);

      // 4. Price range match
      const matchPrice = isNaN(maxPrice) || itemPrice <= maxPrice;

      // 5. Mileage match
      const matchMileage = isNaN(maxMileage) || itemMileage <= maxMileage;

      // 6. Fuel match
      let matchFuel = true;
      if (fuel) {
        if (fuel === 'electric') {
          matchFuel = itemFuel.includes('electric') || itemFuel.includes('ev');
        } else if (fuel === 'hybrid') {
          matchFuel = itemFuel.includes('hybrid') || itemFuel.includes('phev');
        } else if (fuel === 'gasoline') {
          matchFuel = itemFuel.includes('gasoline') || itemFuel.includes('gas');
        } else {
          matchFuel = itemFuel.includes(fuel);
        }
      }

      const isVisible = matchCategory && matchKeyword && matchMake && matchPrice && matchMileage && matchFuel;
      item.style.display = isVisible ? '' : 'none';
      if (isVisible) visibleCount++;
    });

    // Handle dynamic sorting
    if (inventoryGrid && sortVal !== 'best') {
      const sortedItems = [...allItems].sort((a, b) => {
        const priceA = parseInt(a.getAttribute('data-price') || '0', 10);
        const priceB = parseInt(b.getAttribute('data-price') || '0', 10);
        const mileageA = parseInt(a.getAttribute('data-mileage') || '0', 10);
        const mileageB = parseInt(b.getAttribute('data-mileage') || '0', 10);
        const yearA = parseInt(a.getAttribute('data-year') || '0', 10);
        const yearB = parseInt(b.getAttribute('data-year') || '0', 10);

        if (sortVal === 'price-asc') return priceA - priceB;
        if (sortVal === 'price-desc') return priceB - priceA;
        if (sortVal === 'mileage-asc') return mileageA - mileageB;
        if (sortVal === 'year-desc') return yearB - yearA;
        return 0;
      });

      sortedItems.forEach(item => inventoryGrid.appendChild(item));
    }

    if (showingCountEl) showingCountEl.textContent = visibleCount;
    if (totalCountEl) totalCountEl.textContent = allItems.length;

    // Handle Empty State Message
    let noResultsEl = document.getElementById('invNoResults');
    if (visibleCount === 0) {
      if (!noResultsEl && inventoryGrid) {
        noResultsEl = document.createElement('div');
        noResultsEl.id = 'invNoResults';
        noResultsEl.className = 'col-12 text-center py-5';
        noResultsEl.innerHTML = `
          <div class="card border-0 p-5 shadow-sm" style="background-color: var(--bg-surface); border-radius: var(--radius-md);">
            <i class="bi bi-search fs-1 text-muted mb-3 d-inline-block"></i>
            <h4 class="fw-bold mb-2">No Vehicles Found</h4>
            <p class="text-muted small mb-4">No available cars match your selected filters. Try broadening your criteria or reset all filters.</p>
            <div>
              <button type="button" class="btn btn-primary-custom btn-sm" onclick="document.getElementById('btnClearAllFilters').click()">
                <i class="bi bi-arrow-counterclockwise me-1"></i> Reset All Filters
              </button>
            </div>
          </div>
        `;
        inventoryGrid.appendChild(noResultsEl);
      }
      if (noResultsEl) noResultsEl.style.display = '';
    } else {
      if (noResultsEl) noResultsEl.style.display = 'none';
    }
  }

  // Bind Category Quick Pills (Single-Click Category Switch)
  categoryPills.forEach(pill => {
    pill.addEventListener('click', (e) => {
      e.preventDefault();
      const cat = pill.getAttribute('data-category') || '';
      applySingleCategory(cat);
    });
  });

  // Bind Sidebar Radio Buttons
  bodyRadios.forEach(radio => {
    radio.addEventListener('change', () => {
      if (radio.checked) {
        applySingleCategory(radio.value || '');
      }
    });
  });

  // Bind All Filter Inputs & Controls for Instant Reaction
  if (filterKeywordInput) {
    filterKeywordInput.addEventListener('input', filterInventory);
  }
  if (filterMakeSelect) {
    filterMakeSelect.addEventListener('change', filterInventory);
  }
  if (filterPriceSlider) {
    filterPriceSlider.addEventListener('input', filterInventory);
  }
  if (filterMileageSelect) {
    filterMileageSelect.addEventListener('change', filterInventory);
  }
  if (filterFuelSelect) {
    filterFuelSelect.addEventListener('change', filterInventory);
  }
  if (filterSortSelect) {
    filterSortSelect.addEventListener('change', filterInventory);
  }
  if (btnApplyFilters) {
    btnApplyFilters.addEventListener('click', () => {
      filterInventory();
      showToast('Filters applied successfully!', 'info');
    });
  }

  // Clear All Filters Handler
  if (clearFiltersBtn) {
    clearFiltersBtn.addEventListener('click', (e) => {
      e.preventDefault();
      if (filterKeywordInput) filterKeywordInput.value = '';
      if (filterMakeSelect) filterMakeSelect.value = '';
      if (filterPriceSlider) {
        filterPriceSlider.value = 150000;
        if (invPriceVal) invPriceVal.textContent = '$150,000+';
      }
      if (filterMileageSelect) filterMileageSelect.value = '';
      if (filterFuelSelect) filterFuelSelect.value = '';
      if (filterSortSelect) filterSortSelect.value = 'best';

      applySingleCategory('');

      if (window.history && window.history.replaceState) {
        window.history.replaceState(null, '', window.location.pathname);
      }
      showToast('All filters have been reset', 'info');
    });
  }

  // Parse URL parameters for initial filters (e.g. ?body=suv, ?search=toyota, ?make=toyota)
  const navUrlParams = new URLSearchParams(window.location.search);
  const bodyQuery = navUrlParams.get('body');
  const makeQuery = navUrlParams.get('make');
  const navSearchQuery = navUrlParams.get('search');

  if (bodyQuery) {
    applySingleCategory(bodyQuery);
  }

  if (makeQuery && filterMakeSelect) {
    filterMakeSelect.value = makeQuery.toLowerCase();
  }

  if (navSearchQuery && filterKeywordInput) {
    filterKeywordInput.value = navSearchQuery;
  }

  if (skeletonGrid && inventoryGrid) {
    // Reveal real grid smoothly
    setTimeout(() => {
      skeletonGrid.style.display = 'none';
      inventoryGrid.classList.remove('d-none');
      filterInventory();
      syncFavoriteButtons();
    }, 350);
  }

  // -------------------------------------------------------------
  // Blog Single-Category Filtering Engine
  // -------------------------------------------------------------
  const blogPills = document.querySelectorAll('.blog-category-filter-pills .blog-pill, .blog-category-filter-pills button');
  const blogItems = document.querySelectorAll('.blog-item');

  if (blogPills.length > 0 && blogItems.length > 0) {
    blogPills.forEach(pill => {
      pill.addEventListener('click', (e) => {
        e.preventDefault();
        const selectedCat = (pill.getAttribute('data-blog-category') || '').toLowerCase().trim();

        // Single active pill styling
        blogPills.forEach(p => {
          p.classList.remove('active', 'btn-primary-custom');
          p.classList.add('btn-outline-custom');
        });
        pill.classList.add('active', 'btn-primary-custom');
        pill.classList.remove('btn-outline-custom');

        // Filter articles by single category
        blogItems.forEach(item => {
          const itemCat = (item.getAttribute('data-category') || '').toLowerCase().trim();
          const show = !selectedCat || (itemCat === selectedCat);
          item.style.display = show ? '' : 'none';
        });
      });
    });
  }

  // -------------------------------------------------------------
  // 7. Grid / List View Switcher (Inventory Page)
  // -------------------------------------------------------------
  const viewGridBtn = document.getElementById('btnViewGrid');
  const viewListBtn = document.getElementById('btnViewList');

  if (viewGridBtn && viewListBtn) {
    viewGridBtn.addEventListener('click', () => {
      const inventoryCars = document.querySelectorAll('.inventory-item');
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
      const inventoryCars = document.querySelectorAll('.inventory-item');
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
    // Exclude authentication and dedicated dashboard forms which handle their own submission and redirection
    if (form.id === 'loginForm' || form.id === 'registerForm' || form.id === 'newCarListingForm' || form.dataset.customSubmit === 'true') {
      return;
    }

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
  function getUsers() {
    try {
      const stored = localStorage.getItem('automarket_users');
      if (!stored) return [];
      const parsed = JSON.parse(stored);
      return Array.isArray(parsed) ? parsed : [];
    } catch (e) {
      return [];
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
    try {
      if (user) {
        localStorage.setItem('automarket_current_user', JSON.stringify(user));
      } else {
        localStorage.removeItem('automarket_current_user');
      }
    } catch (e) {
      console.error('Error setting current user:', e);
    }
    updateNavAuthState();
  }

  function registerUser(userData) {
    if (!userData || !userData.email || !userData.password) {
      return { success: false, message: 'Please provide all required registration fields.' };
    }

    const users = getUsers();
    const cleanEmail = userData.email.trim().toLowerCase();
    const existing = users.find(u => u && u.email && u.email.trim().toLowerCase() === cleanEmail);
    
    if (existing) {
      return { 
        success: false, 
        message: 'An account with this email already exists. Please sign in instead.' 
      };
    }
    
    const rawName = (userData.name || '').trim();
    // STRICT: Avatar uses ONLY the single first letter of user name
    const firstLetter = rawName.length > 0 ? rawName.charAt(0).toUpperCase() : 'U';

    const newUser = {
      id: `usr_${Date.now()}_${Math.random().toString(36).substr(2, 4)}`,
      name: rawName || 'Valued User',
      email: cleanEmail,
      password: String(userData.password),
      role: (userData.role === 'seller') ? 'seller' : 'buyer',
      dealership: (userData.role === 'seller') ? (userData.dealership || `${rawName}'s Dealership`) : undefined,
      avatar: firstLetter,
      created: new Date().toISOString()
    };

    try {
      users.push(newUser);
      localStorage.setItem('automarket_users', JSON.stringify(users));
      return { success: true, user: newUser };
    } catch (err) {
      return { success: false, message: 'Could not save account to local storage. Please check browser permissions.' };
    }
  }

  function loginUser(email, password) {
    if (!email || !password) {
      return { success: false, message: 'Please enter both your registered email and password.' };
    }

    const users = getUsers();
    const cleanEmail = email.trim().toLowerCase();
    const user = users.find(u => u && u.email && u.email.trim().toLowerCase() === cleanEmail);
    
    // User must register first
    if (!user) {
      return { 
        success: false, 
        message: 'Account not found! Please create an account on the Registration page first.' 
      };
    }
    
    if (String(user.password).trim() !== String(password).trim()) {
      return { 
        success: false, 
        message: 'Incorrect password. Please verify your password and try again.' 
      };
    }

    // Ensure avatar is strictly single first letter
    const rawName = (user.name || '').trim();
    user.avatar = rawName.length > 0 ? rawName.charAt(0).toUpperCase() : 'U';

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
        const isSeller = currentUser.role === 'seller';
        const dashboardUrl = isSeller ? 'seller-dashboard.html' : 'dashboard.html';
        const dashboardTitle = isSeller ? 'Seller Dashboard' : 'Buyer Dashboard';
        const roleBadge = isSeller ? 'Seller Account' : 'Buyer Account';
        const badgeColor = isSeller ? 'bg-warning text-dark' : 'bg-primary text-white';
        // Ensure single first letter avatar
        const avatarLetter = (currentUser.avatar && currentUser.avatar.length === 1) 
          ? currentUser.avatar 
          : (currentUser.name ? currentUser.name.trim().charAt(0).toUpperCase() : 'U');

        container.innerHTML = `
          <div class="dropdown user-nav-dropdown">
            <button class="btn dropdown-toggle d-flex align-items-center gap-2" type="button" data-bs-toggle="dropdown" aria-expanded="false" title="${currentUser.name} (${isSeller ? 'Seller' : 'Buyer'})">
              <span class="user-avatar-sm">${avatarLetter}</span>
              <span class="badge ${badgeColor} rounded-pill" style="font-size: 0.65rem;">${isSeller ? 'Seller' : 'Buyer'}</span>
            </button>
            <ul class="dropdown-menu dropdown-menu-end shadow-lg border-0 rounded-3">
              <li class="px-3 py-2 border-bottom">
                <div class="fw-bold d-flex align-items-center justify-content-between">
                  <span>${currentUser.name}</span>
                  <span class="badge ${badgeColor} rounded-pill" style="font-size: 0.65rem;">${roleBadge}</span>
                </div>
                <div class="small text-muted text-truncate" style="max-width: 180px;">${currentUser.email}</div>
              </li>
              <li>
                <a class="dropdown-item py-2 fw-semibold" href="${dashboardUrl}">
                  <i class="bi ${isSeller ? 'bi-car-front-fill text-warning' : 'bi-speedometer2 text-primary'} me-2"></i> ${dashboardTitle}
                </a>
              </li>
              <li>
                <a class="dropdown-item py-2" href="${isSeller ? 'seller-dashboard.html#inventory' : 'dashboard.html#saved'}">
                  <i class="bi ${isSeller ? 'bi-tags' : 'bi-heart'} me-2 text-secondary"></i> ${isSeller ? 'My Listed Cars' : 'Saved Cars'}
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
            <i class="bi bi-box-arrow-in-right me-1"></i> Sign In
          </a>
        `;
      }
    });
  }

  // Initialize Auth
  getUsers();
  updateNavAuthState();

  // -------------------------------------------------------------
  // 11. Animated Number Counters (Running Count Numbers)
  // -------------------------------------------------------------
  function initCounters() {
    const counterElements = document.querySelectorAll('.counter-number, [data-counter]');
    if (!counterElements.length) return;

    const animateCounter = (el) => {
      if (el.dataset.animated === 'true') return;
      el.dataset.animated = 'true';

      const rawTarget = el.getAttribute('data-target') || el.getAttribute('data-counter');
      const target = rawTarget ? parseFloat(rawTarget) : (parseFloat(el.textContent.replace(/[^0-9.]/g, '')) || 0);
      const duration = parseInt(el.getAttribute('data-duration') || '1800', 10);
      const decimals = el.hasAttribute('data-decimals') 
        ? parseInt(el.getAttribute('data-decimals'), 10) 
        : (target % 1 !== 0 ? 1 : 0);
      const prefix = el.getAttribute('data-prefix') || '';
      const suffix = el.getAttribute('data-suffix') || '';
      const useComma = el.getAttribute('data-format') === 'comma' || (el.getAttribute('data-format') !== 'none' && target >= 1000);

      let startTime = null;

      const easeOutCubic = (t) => (--t) * t * t + 1;

      const updateCount = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        const easedProgress = easeOutCubic(progress);
        const currentVal = easedProgress * target;

        let formattedVal;
        if (decimals > 0) {
          formattedVal = currentVal.toFixed(decimals);
        } else {
          const rounded = Math.floor(currentVal);
          formattedVal = useComma ? rounded.toLocaleString() : rounded.toString();
        }

        if (progress >= 1) {
          if (decimals > 0) {
            formattedVal = target.toFixed(decimals);
          } else {
            formattedVal = useComma ? target.toLocaleString() : target.toString();
          }
        }

        el.textContent = `${prefix}${formattedVal}${suffix}`;

        if (progress < 1) {
          requestAnimationFrame(updateCount);
        }
      };

      requestAnimationFrame(updateCount);
    };

    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            animateCounter(entry.target);
            obs.unobserve(entry.target);
          }
        });
      }, { threshold: 0.15 });

      counterElements.forEach(el => observer.observe(el));
    } else {
      counterElements.forEach(el => animateCounter(el));
    }
  }

  // Initialize Animated Counters
  initCounters();

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
  window.initCounters = initCounters;
});
