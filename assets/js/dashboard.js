/**
 * AutoMarket - User Dashboard Engine (dashboard.js)
 * Manages user profile, saved cars, inspection bookings, messages, and settings.
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // Sample catalog of vehicles for rendering saved vehicles
  const vehicleCatalog = [
    {
      id: 1,
      title: "2020 Toyota Camry LE",
      badge: "Certified Pre-Owned",
      badgeClass: "badge-certified",
      price: "$19,400",
      emi: "$295/mo",
      mileage: "34,200 mi",
      fuel: "Gasoline",
      trans: "8-Speed Auto",
      image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 2,
      title: "2018 Toyota Corolla LE",
      badge: "Great Deal",
      badgeClass: "badge-deal",
      price: "$15,400",
      emi: "$240/mo",
      mileage: "48,100 mi",
      fuel: "Gasoline",
      trans: "CVT Auto",
      image: "https://images.unsplash.com/photo-1550355291-bbee04a92027?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 3,
      title: "2020 Toyota RAV4 XLE AWD",
      badge: "Certified Crossover",
      badgeClass: "badge-certified",
      price: "$24,800",
      emi: "$385/mo",
      mileage: "39,800 mi",
      fuel: "Gasoline",
      trans: "Automatic",
      image: "https://images.unsplash.com/photo-1581540222194-0def2dda95b8?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 4,
      title: "2019 Honda Civic EX",
      badge: "Low Mileage",
      badgeClass: "badge-featured",
      price: "$16,950",
      emi: "$260/mo",
      mileage: "52,400 mi",
      fuel: "Gasoline",
      trans: "CVT Auto",
      image: "https://images.unsplash.com/photo-1506015391300-4802dc74de2e?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 5,
      title: "2019 Ford F-150 XLT SuperCrew 4x4",
      badge: "Single Owner",
      badgeClass: "badge-deal",
      price: "$32,500",
      emi: "$495/mo",
      mileage: "45,600 mi",
      fuel: "EcoBoost V6",
      trans: "10-Speed",
      image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 6,
      title: "2019 Volkswagen Polo 1.0 TSI",
      badge: "200-Pt Passed",
      badgeClass: "badge-certified",
      price: "$14,800",
      emi: "$230/mo",
      mileage: "41,800 mi",
      fuel: "Gasoline",
      trans: "Automatic",
      image: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=600&q=80"
    }
  ];

  // -------------------------------------------------------------
  // 1. Render Saved Vehicles in Dashboard Tab
  // -------------------------------------------------------------
  const savedCarsContainer = document.getElementById('savedCarsContainer');
  const savedEmptyState = document.getElementById('savedEmptyState');
  const savedCountStat = document.getElementById('dashSavedCount');

  function renderSavedVehicles() {
    if (!savedCarsContainer) return;

    let favIds = [];
    try {
      favIds = JSON.parse(localStorage.getItem('automarket_favorites')) || [1, 3];
    } catch {
      favIds = [1, 3];
    }

    if (savedCountStat) savedCountStat.textContent = favIds.length;

    const matchedVehicles = vehicleCatalog.filter(v => favIds.includes(v.id));

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
            <img src="${car.image}" alt="${car.title}" loading="lazy">
            <div class="car-badge-stack">
              <span class="badge-custom ${car.badgeClass}">${car.badge}</span>
            </div>
            <button class="car-favorite-btn active text-danger" title="Remove from wishlist" onclick="removeDashboardSaved(${car.id})">
              <i class="bi bi-trash3-fill"></i>
            </button>
          </div>
          <div class="car-card-body">
            <h3 class="car-card-title">
              <a href="car-details.html">${car.title}</a>
            </h3>
            <div class="car-card-specs">
              <div class="spec-item"><i class="bi bi-speedometer2"></i><span>${car.mileage}</span></div>
              <div class="spec-item"><i class="bi bi-fuel-pump"></i><span>${car.fuel}</span></div>
              <div class="spec-item"><i class="bi bi-gear"></i><span>${car.trans}</span></div>
            </div>
            <div class="car-card-footer">
              <div class="car-price-wrap">
                <div class="price-main">${car.price}</div>
                <div class="price-emi">Est. ${car.emi}</div>
              </div>
              <a href="car-details.html" class="btn btn-sm btn-primary-custom">
                View Car
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
  if (window.autoMarketAuth) {
    const user = window.autoMarketAuth.getCurrentUser();
    if (user) {
      document.querySelectorAll('.dash-user-name-display').forEach(el => el.textContent = user.name);
      document.querySelectorAll('.dash-user-email-display').forEach(el => el.textContent = user.email);

      const nameInput = document.getElementById('profileName');
      const emailInput = document.getElementById('profileEmail');
      if (nameInput) nameInput.value = user.name;
      if (emailInput) emailInput.value = user.email;

      // STRICT ROLE GUARD: If a seller visits the buyer dashboard, strictly route them to seller-dashboard.html
      if (user.role === 'seller') {
        if (window.autoMarketToast) {
          window.autoMarketToast(`Seller account detected (${user.name}). Redirecting to your Seller Dashboard...`, 'warning');
        }
        setTimeout(() => {
          window.location.href = 'seller-dashboard.html';
        }, 1000);
        return;
      }
    }
  }

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
