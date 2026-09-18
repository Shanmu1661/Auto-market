/**
 * AutoMarket - User Dashboard Engine (dashboard.js)
 * Manages user profile, saved cars, inspection bookings, messages, and settings.
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // Helper: Get Current Active User
  function getBuyerUser() {
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
    return user;
  }

  function getFavoritesKey() {
    const user = getBuyerUser();
    return user && user.id ? `automarket_favorites_${user.id}` : 'automarket_favorites';
  }

  function getFavorites() {
    try {
      const key = getFavoritesKey();
      const stored = localStorage.getItem(key);
      if (stored) return JSON.parse(stored);
    } catch (e) {}
    return [];
  }

  function saveFavorites(favIds) {
    try {
      const key = getFavoritesKey();
      localStorage.setItem(key, JSON.stringify(favIds));
    } catch (e) {}
  }

  function getActivityKey() {
    const user = getBuyerUser();
    return user && user.id ? `automarket_scheduled_activity_${user.id}` : 'automarket_scheduled_activity';
  }

  function getScheduledActivity() {
    try {
      const key = getActivityKey();
      const stored = localStorage.getItem(key);
      if (stored) return JSON.parse(stored);
    } catch (e) {}
    return null;
  }

  function saveScheduledActivity(act) {
    try {
      const key = getActivityKey();
      localStorage.setItem(key, JSON.stringify(act));
    } catch (e) {}
  }

  // -------------------------------------------------------------
  // 1. Render Saved Vehicles in Dashboard Tab
  // -------------------------------------------------------------
  const savedCarsContainer = document.getElementById('savedCarsContainer');
  const savedEmptyState = document.getElementById('savedEmptyState');
  const savedCountStat = document.getElementById('dashSavedCount');
  const dashOverviewSavedCount = document.getElementById('dashOverviewSavedCount');

  function renderSavedVehicles() {
    const favIds = getFavorites();

    if (savedCountStat) savedCountStat.textContent = favIds.length;
    if (dashOverviewSavedCount) dashOverviewSavedCount.textContent = favIds.length;

    if (!savedCarsContainer) return;

    if (favIds.length === 0) {
      savedCarsContainer.innerHTML = '';
      if (savedEmptyState) savedEmptyState.classList.remove('d-none');
      return;
    }

    const catalog = (typeof window.AUTOMARKET_CARS !== 'undefined' && window.AUTOMARKET_CARS.length > 0)
      ? window.AUTOMARKET_CARS
      : [];

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
    let favIds = getFavorites();
    favIds = favIds.filter(id => id !== carId);
    saveFavorites(favIds);
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
  const chatEmptyNotice = document.getElementById('chatEmptyNotice');

  if (chatForm && chatMessages && chatInput) {
    chatForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const text = chatInput.value.trim();
      if (!text) return;

      if (chatEmptyNotice) {
        chatEmptyNotice.classList.add('d-none');
      }

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
              <p class="mb-1">Thank you for reaching out! Our certified specialist has received your message and will assist you with vehicle availability and next steps shortly.</p>
              <small class="text-muted" style="font-size: 0.72rem;">Just now • AutoMarket Specialist</small>
            </div>
          </div>
        `;
        chatMessages.insertAdjacentHTML('beforeend', replyHtml);
        chatMessages.scrollTop = chatMessages.scrollHeight;
      }, 1000);
    });
  }

  // -------------------------------------------------------------
  // 3. Profile Form Submission
  // -------------------------------------------------------------
  const profileForm = document.getElementById('userProfileForm');
  if (profileForm) {
    profileForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('profileName')?.value || 'User';
      const email = document.getElementById('profileEmail')?.value || 'user@example.com';

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
    const user = getBuyerUser();

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

  // -------------------------------------------------------------
  // 5. Next Scheduled Activity & Reschedule Modal Engine
  // -------------------------------------------------------------
  const scheduledContainer = document.getElementById('dashUpcomingActivityContainer');
  const scheduledEmptyState = document.getElementById('dashUpcomingActivityEmptyState');
  const scheduledBadge = document.getElementById('scheduledActivityBadge');
  const scheduledTitle = document.getElementById('scheduledActivityTitle');
  const scheduledLocation = document.getElementById('scheduledActivityLocation');
  const scheduledImg = document.getElementById('scheduledActivityImg');
  const modalCurrentSummary = document.getElementById('modalCurrentBookingSummary');
  const rescheduleModalEl = document.getElementById('rescheduleModal');
  const rescheduleForm = document.getElementById('rescheduleForm');
  const rescheduleDateInput = document.getElementById('rescheduleDate');
  const rescheduleTimeInput = document.getElementById('rescheduleTime');
  const rescheduleServiceInput = document.getElementById('rescheduleServiceType');
  const rescheduleVehicleInput = document.getElementById('rescheduleVehicle');
  const rescheduleLocationInput = document.getElementById('rescheduleLocation');
  const rescheduleNotesInput = document.getElementById('rescheduleNotes');
  const dashOverviewTestDriveCount = document.getElementById('dashOverviewTestDriveCount');
  const dashOverviewAuditCount = document.getElementById('dashOverviewAuditCount');
  const dashBookingsTableWrapper = document.getElementById('dashBookingsTableWrapper');
  const dashBookingsEmptyState = document.getElementById('dashBookingsEmptyState');
  const bookingRowNextActivity = document.getElementById('bookingRowNextActivity');

  // Helper: Format Date String to human readable
  function formatReadableDate(dateVal, timeVal) {
    if (!dateVal) return `Tomorrow at ${timeVal || '2:00 PM'}`;
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    const parts = dateVal.split('-');
    if (parts.length === 3) {
      const selected = new Date(parseInt(parts[0]), parseInt(parts[1]) - 1, parseInt(parts[2]));
      selected.setHours(0, 0, 0, 0);

      const timeStr = timeVal || '2:00 PM';
      if (selected.getTime() === today.getTime()) {
        return `Today at ${timeStr}`;
      } else if (selected.getTime() === tomorrow.getTime()) {
        return `Tomorrow at ${timeStr}`;
      } else {
        const options = { weekday: 'short', month: 'short', day: 'numeric' };
        return `${selected.toLocaleDateString('en-US', options)} at ${timeStr}`;
      }
    }
    return `${dateVal} at ${timeVal || '2:00 PM'}`;
  }

  function getTomorrowIsoString() {
    const tmrw = new Date();
    tmrw.setDate(tmrw.getDate() + 1);
    const y = tmrw.getFullYear();
    const m = String(tmrw.getMonth() + 1).padStart(2, '0');
    const d = String(tmrw.getDate()).padStart(2, '0');
    return `${y}-${m}-${d}`;
  }

  function getTodayIsoString() {
    const now = new Date();
    const y = now.getFullYear();
    const m = String(now.getMonth() + 1).padStart(2, '0');
    const d = String(now.getDate()).padStart(2, '0');
    return `${y}-${m}-${d}`;
  }

  // Set date constraints on datepicker
  if (rescheduleDateInput) {
    rescheduleDateInput.min = getTodayIsoString();
    if (!rescheduleDateInput.value) {
      rescheduleDateInput.value = getTomorrowIsoString();
    }
  }

  function renderScheduledActivityUI() {
    const activity = getScheduledActivity();

    if (activity) {
      if (scheduledContainer) scheduledContainer.classList.remove('d-none');
      if (scheduledEmptyState) scheduledEmptyState.classList.add('d-none');

      if (scheduledBadge) scheduledBadge.textContent = activity.dateText;
      if (scheduledTitle) scheduledTitle.textContent = `${activity.service}: ${activity.vehicle}`;
      if (scheduledLocation) scheduledLocation.textContent = activity.location;
      if (scheduledImg && activity.image) {
        scheduledImg.src = activity.image;
        scheduledImg.alt = activity.vehicle;
      }
      if (modalCurrentSummary) {
        modalCurrentSummary.textContent = `${activity.service} - ${activity.vehicle} (${activity.dateText})`;
      }

      if (dashOverviewTestDriveCount) dashOverviewTestDriveCount.textContent = '1';

      // Bookings Tab
      if (dashBookingsTableWrapper) dashBookingsTableWrapper.classList.remove('d-none');
      if (dashBookingsEmptyState) dashBookingsEmptyState.classList.add('d-none');
      if (bookingRowNextActivity) bookingRowNextActivity.classList.remove('d-none');

      const tableTitle = document.getElementById('bookingItemTitle');
      const tableDateTime = document.getElementById('bookingItemDateTime');
      if (tableTitle) tableTitle.textContent = `${activity.service}: ${activity.vehicle}`;
      if (tableDateTime) tableDateTime.textContent = activity.dateText.replace(' at ', ' • ');
    } else {
      if (scheduledContainer) scheduledContainer.classList.add('d-none');
      if (scheduledEmptyState) scheduledEmptyState.classList.remove('d-none');

      if (dashOverviewTestDriveCount) dashOverviewTestDriveCount.textContent = '0';
      if (dashOverviewAuditCount) dashOverviewAuditCount.textContent = '0';

      // Bookings Tab
      if (dashBookingsTableWrapper) dashBookingsTableWrapper.classList.add('d-none');
      if (dashBookingsEmptyState) dashBookingsEmptyState.classList.remove('d-none');
      if (bookingRowNextActivity) bookingRowNextActivity.classList.add('d-none');
    }
  }

  renderScheduledActivityUI();

  // Populate modal with current activity when opening
  if (rescheduleModalEl) {
    rescheduleModalEl.addEventListener('show.bs.modal', () => {
      const current = getScheduledActivity() || {
        service: 'Test Drive',
        vehicle: '2020 Toyota Camry LE (CPO)',
        date: getTomorrowIsoString(),
        time: '2:00 PM',
        dateText: 'Tomorrow at 2:00 PM',
        location: 'AutoMarket Hub Bay #4 (1245 Motor Pkwy)',
        notes: ''
      };
      if (rescheduleServiceInput) rescheduleServiceInput.value = current.service || 'Test Drive';
      if (rescheduleVehicleInput) rescheduleVehicleInput.value = current.vehicle || '2020 Toyota Camry LE (CPO)';
      if (rescheduleDateInput) rescheduleDateInput.value = current.date || getTomorrowIsoString();
      if (rescheduleTimeInput) rescheduleTimeInput.value = current.time || '2:00 PM';
      if (rescheduleLocationInput) rescheduleLocationInput.value = current.location || 'AutoMarket Hub Bay #4 (1245 Motor Pkwy)';
      if (rescheduleNotesInput) rescheduleNotesInput.value = current.notes || '';
      if (modalCurrentSummary) {
        modalCurrentSummary.textContent = `${current.service} - ${current.vehicle} (${current.dateText})`;
      }
    });
  }

  // Handle Reschedule Form Submit
  if (rescheduleForm) {
    rescheduleForm.addEventListener('submit', (e) => {
      e.preventDefault();

      if (!rescheduleForm.checkValidity()) {
        rescheduleForm.classList.add('was-validated');
        return;
      }

      const service = rescheduleServiceInput ? rescheduleServiceInput.value : 'Test Drive';
      const vehicle = rescheduleVehicleInput ? rescheduleVehicleInput.value : '2020 Toyota Camry LE (CPO)';
      const selectedOption = rescheduleVehicleInput ? rescheduleVehicleInput.options[rescheduleVehicleInput.selectedIndex] : null;
      const image = (selectedOption && selectedOption.getAttribute('data-img')) ? selectedOption.getAttribute('data-img') : 'assets/images/cars/camry.jpg';
      const dateVal = rescheduleDateInput ? rescheduleDateInput.value : getTomorrowIsoString();
      const timeVal = rescheduleTimeInput ? rescheduleTimeInput.value : '2:00 PM';
      const locationVal = rescheduleLocationInput ? rescheduleLocationInput.value : 'AutoMarket Hub Bay #4 (1245 Motor Pkwy)';
      const notesVal = rescheduleNotesInput ? rescheduleNotesInput.value : '';

      const readableDateText = formatReadableDate(dateVal, timeVal);

      const updatedActivity = {
        service: service,
        vehicle: vehicle,
        image: image,
        date: dateVal,
        time: timeVal,
        dateText: readableDateText,
        location: locationVal,
        notes: notesVal,
        updatedAt: new Date().toISOString()
      };

      saveScheduledActivity(updatedActivity);

      // Update UI displays
      renderScheduledActivityUI();

      // Hide modal
      if (window.bootstrap && bootstrap.Modal) {
        const modalInstance = bootstrap.Modal.getInstance(rescheduleModalEl) || new bootstrap.Modal(rescheduleModalEl);
        modalInstance.hide();
      }

      // Show toast
      if (window.autoMarketToast) {
        window.autoMarketToast(`Activity successfully scheduled for ${readableDateText}!`, 'success');
      } else {
        alert(`Activity successfully scheduled for ${readableDateText}!`);
      }
    });
  }

  // -------------------------------------------------------------
  // 6. Download PDF Inspection Dossier Simulation
  // -------------------------------------------------------------
  const btnDownloadDossier = document.getElementById('btnDownloadDossierModal');
  if (btnDownloadDossier) {
    btnDownloadDossier.addEventListener('click', () => {
      if (window.autoMarketToast) {
        window.autoMarketToast('Generating verified 200-Point Inspection PDF Dossier...', 'info');
      }
      setTimeout(() => {
        if (window.autoMarketToast) {
          window.autoMarketToast('Inspection Dossier #AM-C300-94 downloaded successfully!', 'success');
        }
      }, 1000);
    });
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

