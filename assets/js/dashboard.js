/**
 * AutoMarket - User Dashboard Engine (dashboard.js)
 * Manages user profile, saved cars, inspection bookings, messages, and settings.
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // -------------------------------------------------------------
  // 1. Render Saved Vehicles in Dashboard Tab
  // -------------------------------------------------------------
  const savedCarsContainer = document.getElementById('savedCarsContainer');
  const savedEmptyState = document.getElementById('savedEmptyState');
  const savedCountStat = document.getElementById('dashSavedCount');

  function renderSavedVehicles() {
    if (!savedCarsContainer) return;

    const catalog = (typeof window.AUTOMARKET_CARS !== 'undefined' && window.AUTOMARKET_CARS.length > 0)
      ? window.AUTOMARKET_CARS
      : [
          { id: 101, title: "2021 Toyota RAV4 XLE AWD", badges: [{text: "Certified", type: "certified"}], price: 26500, emi: 395, mileage: "28,400 mi", fuelType: "Gasoline", transmission: "8-Speed Auto", images: { hero: "assets/images/categories/suv-1.jpg" } },
          { id: 201, title: "2020 Toyota Camry LE", badges: [{text: "Certified", type: "certified"}], price: 19400, emi: 295, mileage: "34,200 mi", fuelType: "Gasoline", transmission: "8-Speed Auto", images: { hero: "assets/images/categories/sedan-1.jpg" } }
        ];

    let favIds = [];
    try {
      favIds = JSON.parse(localStorage.getItem('automarket_favorites')) || [101, 201];
    } catch {
      favIds = [101, 201];
    }

    if (savedCountStat) savedCountStat.textContent = favIds.length;

    const matchedVehicles = catalog.filter(v => favIds.includes(v.id));

    if (matchedVehicles.length === 0) {
      savedCarsContainer.innerHTML = '';
      if (savedEmptyState) savedEmptyState.classList.remove('d-none');
      return;
    }

    if (savedEmptyState) savedEmptyState.classList.add('d-none');

    savedCarsContainer.innerHTML = matchedVehicles.map(car => `
      <div class="col-md-6 col-lg-4 mb-4" id="saved-card-${car.id}">
        <div class="car-card">
          <div class="car-card-img-wrap">
            <img src="${car.images ? car.images.hero : car.image}" alt="${car.title}" loading="lazy">
            <button class="car-favorite-btn active text-danger" title="Remove from wishlist" onclick="removeDashboardSaved(${car.id})">
              <i class="bi bi-trash3-fill"></i>
            </button>
          </div>
          <div class="car-card-body">
            <h3 class="car-card-title">
              <a href="car-details.html?id=${car.id}">${car.title}</a>
            </h3>
            <div class="car-card-specs">
              <div class="spec-item"><i class="bi bi-speedometer2"></i><span>${car.mileage}</span></div>
              <div class="spec-item"><i class="bi bi-fuel-pump"></i><span>${car.fuelType ? car.fuelType.split(' ')[0] : 'Gasoline'}</span></div>
              <div class="spec-item"><i class="bi bi-gear"></i><span>${car.transmission ? car.transmission.split(' ')[0] : 'Auto'}</span></div>
            </div>
            <div class="car-card-footer">
              <div class="car-price-wrap">
                <div class="price-main">$${typeof car.price === 'number' ? car.price.toLocaleString() : car.price}</div>
                <div class="price-emi">Est. $${car.emi}/mo</div>
              </div>
              <a href="car-details.html?id=${car.id}" class="btn btn-sm btn-primary-custom">
                View Details
              </a>
            </div>
          </div>
        </div>
      </div>
    `).join('');
  }

  window.removeDashboardSaved = function(carId) {
    let favIds = JSON.parse(localStorage.getItem('automarket_favorites')) || [];
    favIds = favIds.filter(id => id !== carId);
    localStorage.setItem('automarket_favorites', JSON.stringify(favIds));
    renderSavedVehicles();
    if (window.autoMarketToast) {
      window.autoMarketToast('Vehicle removed from your saved list.', 'warning');
    }
  };

  renderSavedVehicles();

  // -------------------------------------------------------------
  // 2. Chat / Inquiries Simulation
  // -------------------------------------------------------------
  const chatForm = document.getElementById('chatReplyForm');
  const chatMessages = document.getElementById('chatMessagesBox');
  const chatInput = document.getElementById('chatInput');

  if (chatForm && chatMessages && chatInput) {
    chatForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const text = chatInput.value.trim();
      if (!text) return;

      const userMsgHtml = `
        <div class="d-flex justify-content-end mb-3">
          <div class="p-3 bg-primary text-white rounded-3 shadow-sm" style="max-width: 75%;">
            <p class="mb-1">${text}</p>
            <small class="text-white-50" style="font-size: 0.72rem;">Just now • You</small>
          </div>
        </div>
      `;
      chatMessages.insertAdjacentHTML('beforeend', userMsgHtml);
      chatInput.value = '';
      chatMessages.scrollTop = chatMessages.scrollHeight;

      // Simulated auto-dealer response
      setTimeout(() => {
        const replyHtml = `
          <div class="d-flex justify-content-start mb-3">
            <div class="p-3 bg-light border rounded-3 shadow-sm" style="max-width: 75%;">
              <p class="mb-1">Thank you for reaching out! Our certified specialist has received your inquiry and will verify the vehicle availability shortly.</p>
              <small class="text-muted" style="font-size: 0.72rem;">Just now • AutoMarket Specialist</small>
            </div>
          </div>
        `;
        chatMessages.insertAdjacentHTML('beforeend', replyHtml);
        chatMessages.scrollTop = chatMessages.scrollHeight;
      }, 1200);
    });
  }

  // -------------------------------------------------------------
  // 3. Profile Form Submission
  // -------------------------------------------------------------
  const profileForm = document.getElementById('userProfileForm');
  if (profileForm) {
    profileForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('profileName')?.value || 'Alex Morgan';
      const email = document.getElementById('profileEmail')?.value || 'alex.morgan@example.com';

      // Update UI displays
      document.querySelectorAll('.dash-user-name-display').forEach(el => el.textContent = name);
      document.querySelectorAll('.dash-user-email-display').forEach(el => el.textContent = email);

      // Save back to current user if exists
      if (window.autoMarketAuth) {
        const curr = window.autoMarketAuth.getCurrentUser();
        if (curr) {
          curr.name = name;
          curr.email = email;
          window.autoMarketAuth.setCurrentUser(curr);
        }
      }

      if (window.autoMarketToast) {
        window.autoMarketToast('Profile updated successfully!', 'success');
      }
    });
  }

  // -------------------------------------------------------------
  // 4. Session & User Role Synchronization
  // -------------------------------------------------------------
  function syncDashboardUser() {
    let user = null;
    if (window.autoMarketAuth && typeof window.autoMarketAuth.getCurrentUser === 'function') {
      user = window.autoMarketAuth.getCurrentUser();
    }
    if (!user) {
      try {
        const stored = localStorage.getItem('automarket_current_user');
        if (stored) user = JSON.parse(stored);
      } catch (e) {}
    }

    if (user) {
      const firstLetter = (user.name && user.name.trim().length > 0) ? user.name.trim().charAt(0).toUpperCase() : 'U';
      document.querySelectorAll('.dash-user-avatar-display').forEach(el => el.textContent = firstLetter);
      document.querySelectorAll('.dash-user-name-display').forEach(el => el.textContent = user.name);
      document.querySelectorAll('.dash-user-email-display').forEach(el => el.textContent = user.email);

      const nameInput = document.getElementById('profileName');
      const emailInput = document.getElementById('profileEmail');
      if (nameInput) nameInput.value = user.name;
      if (emailInput) emailInput.value = user.email;

      // STRICT ROLE GUARD: If a seller visits the buyer dashboard, route them to seller-dashboard.html
      if (user.role === 'seller') {
        if (window.autoMarketToast) {
          window.autoMarketToast(`Seller account detected (${user.name}). Opening your Seller Dashboard...`, 'warning');
        }
        setTimeout(() => {
          window.location.href = 'seller-dashboard.html';
        }, 800);
      }
    }
  }

  syncDashboardUser();

  // Universal logout buttons on dashboard
  document.querySelectorAll('.dash-logout-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      if (window.autoMarketAuth) {
        window.autoMarketAuth.logoutUser();
      }
    });
  });
});
