/**
 * AutoMarket - Dynamic Car Details Page Renderer (car-details.js)
 * Populates car-details.html from window.AUTOMARKET_CARS based on ?id= query param.
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  if (typeof window.AUTOMARKET_CARS === 'undefined') {
    console.warn('cars-data.js must be loaded before car-details.js');
    return;
  }

  // 1. Get Car ID from URL (default to 201 Camry or 101 RAV4)
  const urlParams = new URLSearchParams(window.location.search);
  const rawId = urlParams.get('id');
  const car = window.getCarById(rawId || 201);

  if (!car) return;

  // 2. Update Document Title
  document.title = `${car.title} | AutoMarket Certified Used Cars`;

  // 3. Update Breadcrumb
  const breadcrumbMake = document.querySelector('.breadcrumb-item:nth-child(3) a');
  const breadcrumbActive = document.querySelector('.breadcrumb-item.active');
  if (breadcrumbMake) {
    breadcrumbMake.textContent = car.make;
    breadcrumbMake.href = `inventory.html?search=${encodeURIComponent(car.make)}`;
  }
  if (breadcrumbActive) {
    breadcrumbActive.textContent = car.title;
  }

  // 4. Update Header Badges, Title, Price, EMI, Location
  const headerContainer = document.querySelector('main .d-flex.flex-column.flex-md-row');
  if (headerContainer) {
    const badgesWrapper = headerContainer.querySelector('div:first-child');
    if (badgesWrapper) {
      const badgeHtml = car.badges.map(b => {
        const bgClass = b.type === 'certified' ? 'bg-primary' : b.type === 'featured' ? 'bg-warning text-dark' : 'bg-success';
        const iconHtml = b.icon ? `<i class="bi ${b.icon} me-1"></i>` : '';
        return `<span class="badge ${bgClass} text-white me-2">${iconHtml}${b.text}</span>`;
      }).join('');

      badgesWrapper.innerHTML = `
        ${badgeHtml}
        <span class="badge bg-success text-white me-2">Clean CARFAX</span>
        <span class="badge bg-secondary text-white">Stock #${car.stock}</span>
        <h1 class="h2 fw-bold mt-2 mb-1" id="vehicleTitle">${car.title}</h1>
        <p class="text-muted mb-0"><i class="bi bi-geo-alt me-1 text-danger"></i> Available at ${car.location}</p>
      `;
    }

    const priceWrapper = headerContainer.querySelector('.text-md-end');
    if (priceWrapper) {
      priceWrapper.innerHTML = `
        <div class="h2 fw-bold text-primary mb-0">$${car.price.toLocaleString()}</div>
        <div class="text-muted small">Est. <strong class="text-dark">$${car.emi}/mo</strong> • 60 mos @ 5.9% APR</div>
        <div class="small text-decoration-line-through text-muted">Orig. MSRP $${car.msrp.toLocaleString()}</div>
      `;
    }
  }

  // 5. Update Main Hero Image & Gallery Thumbnails
  const mainVehicleImg = document.getElementById('mainVehicleImg');
  if (mainVehicleImg) {
    mainVehicleImg.src = car.images.hero;
    mainVehicleImg.alt = car.title;
  }

  const favoriteBtn = document.querySelector('.position-relative .car-favorite-btn');
  if (favoriteBtn) {
    favoriteBtn.setAttribute('data-car-id', car.id);
  }


  // 6. Update Quick Specs Highlight Bar
  const quickMiles = document.getElementById('quickMiles');
  if (quickMiles) quickMiles.textContent = car.mileage || (`${car.odometerNum.toLocaleString()} mi`);

  const quickFuel = document.getElementById('quickFuel');
  if (quickFuel) quickFuel.textContent = car.fuelType;

  const quickTrans = document.getElementById('quickTrans');
  if (quickTrans) {
    const transWord = car.transmission.includes('Auto') || car.transmission.includes('Dual-Clutch') || car.transmission.includes('Direct-Shift') ? 'Auto' : car.transmission.includes('Manual') ? 'Manual' : 'Direct Drive';
    const gearMatch = car.transmission.match(/\d+-Speed/);
    quickTrans.textContent = gearMatch ? `${gearMatch[0]} ${transWord}` : (car.transmission.includes('1-Speed') ? '1-Speed Direct' : transWord);
  }

  const quickDrivetrain = document.getElementById('quickDrivetrain');
  if (quickDrivetrain) {
    if (car.drivetrain.includes('AWD') || car.drivetrain.includes('All-Wheel') || car.drivetrain.includes('xDrive') || car.drivetrain.includes('Dual Motor')) {
      quickDrivetrain.textContent = 'AWD / 4WD';
    } else if (car.drivetrain.includes('4WD') || car.drivetrain.includes('4x4')) {
      quickDrivetrain.textContent = '4x4 / 4WD';
    } else if (car.drivetrain.includes('RWD') || car.drivetrain.includes('Rear-Wheel')) {
      quickDrivetrain.textContent = 'RWD';
    } else {
      quickDrivetrain.textContent = 'FWD';
    }
  }

  // 7. Update Vehicle Summary Sidebar
  const summaryMiles = document.getElementById('summaryMiles');
  if (summaryMiles) summaryMiles.textContent = `${car.odometerNum.toLocaleString()} miles`;

  const summaryFuelType = document.getElementById('summaryFuelType');
  if (summaryFuelType) summaryFuelType.textContent = car.fuelType;

  const summaryEngine = document.getElementById('summaryEngine');
  if (summaryEngine) summaryEngine.textContent = car.engine;

  const summaryTransSidebar = document.getElementById('summaryTransSidebar');
  if (summaryTransSidebar) summaryTransSidebar.textContent = car.transmission;

  const summaryWarranty = document.getElementById('summaryWarranty');
  if (summaryWarranty) summaryWarranty.textContent = car.warranty;

  const summaryVin = document.getElementById('summaryVin');
  if (summaryVin) summaryVin.textContent = car.vin;

  // 8. Update Technical Specifications Tab
  const specsPane = document.getElementById('specs-pane');
  if (specsPane) {
    const tables = specsPane.querySelectorAll('table tbody');
    if (tables.length >= 2) {
      // Powertrain & Performance table
      tables[0].innerHTML = `
        <tr><td class="text-muted">Miles Covered (Odometer):</td><td class="fw-bold">${car.odometerNum.toLocaleString()} miles (${car.mileage})</td></tr>
        <tr><td class="text-muted">Fuel Type:</td><td class="fw-bold"><span class="badge bg-success-subtle text-success">${car.fuelType}</span></td></tr>
        <tr><td class="text-muted">Fuel Economy / Range:</td><td class="fw-bold">${car.fuelEconomy}</td></tr>
        <tr><td class="text-muted">Engine / Motor:</td><td class="fw-bold">${car.engine}</td></tr>
        <tr><td class="text-muted">Horsepower:</td><td class="fw-bold">${car.horsepower}</td></tr>
        <tr><td class="text-muted">Torque:</td><td class="fw-bold">${car.torque}</td></tr>
        <tr><td class="text-muted">Transmission:</td><td class="fw-bold">${car.transmission}</td></tr>
        <tr><td class="text-muted">Drivetrain:</td><td class="fw-bold">${car.drivetrain}</td></tr>
      `;

      // Dimensions & Colors table
      tables[1].innerHTML = `
        <tr><td class="text-muted">Exterior Color:</td><td class="fw-bold">${car.exteriorColor}</td></tr>
        <tr><td class="text-muted">Interior Color:</td><td class="fw-bold">${car.interiorColor}</td></tr>
        <tr><td class="text-muted">Body Style:</td><td class="fw-bold">${car.categoryLabel}</td></tr>
        <tr><td class="text-muted">Seating Capacity:</td><td class="fw-bold">${car.seating}</td></tr>
        <tr><td class="text-muted">Cargo Volume:</td><td class="fw-bold">${car.cargoVolume}</td></tr>
      `;
    }
  }

  // 8. Update 200-Point Inspection Report Tab
  const inspectionPane = document.getElementById('inspection-pane');
  if (inspectionPane) {
    const bannerSmall = inspectionPane.querySelector('.bg-success-subtle small');
    if (bannerSmall) {
      bannerSmall.textContent = `Inspected on ${car.inspection.date} by Certified Master Technician (ID: ${car.inspection.techId})`;
    }

    const reportCols = inspectionPane.querySelectorAll('.row.g-4 .col-md-4');
    if (reportCols.length >= 3) {
      reportCols[0].innerHTML = `
        <h6 class="fw-bold text-primary">1. Engine & Transmission (50 Pts)</h6>
        <div class="checklist-item"><i class="bi bi-check-circle-fill text-success me-1"></i><span>Compression: ${car.inspection.engineScore}</span></div>
        <div class="checklist-item"><i class="bi bi-check-circle-fill text-success me-1"></i><span>Transmission Shifts: Smooth & Responsive</span></div>
        <div class="checklist-item"><i class="bi bi-check-circle-fill text-success me-1"></i><span>Fluid Contamination: Zero Leakage Detected</span></div>
        <div class="checklist-item"><i class="bi bi-check-circle-fill text-success me-1"></i><span>Cooling & Belts: 100% Factory Spec</span></div>
      `;

      reportCols[1].innerHTML = `
        <h6 class="fw-bold text-primary">2. Brakes, Suspension & Tires (50 Pts)</h6>
        <div class="checklist-item"><i class="bi bi-check-circle-fill text-success me-1"></i><span>Brake System: ${car.inspection.brakes}</span></div>
        <div class="checklist-item"><i class="bi bi-check-circle-fill text-success me-1"></i><span>Tires: ${car.inspection.tires}</span></div>
        <div class="checklist-item"><i class="bi bi-check-circle-fill text-success me-1"></i><span>Struts, Shocks & Bushings: Pristine</span></div>
        <div class="checklist-item"><i class="bi bi-check-circle-fill text-success me-1"></i><span>Wheel Alignment: Laser-Verified Zero Pull</span></div>
      `;

      reportCols[2].innerHTML = `
        <h6 class="fw-bold text-primary">3. Electronics & Diagnostics (100 Pts)</h6>
        <div class="checklist-item"><i class="bi bi-check-circle-fill text-success me-1"></i><span>OBD-II Scan: ${car.inspection.obd}</span></div>
        <div class="checklist-item"><i class="bi bi-check-circle-fill text-success me-1"></i><span>ADAS Safety Sensors & Cameras: Calibrated</span></div>
        <div class="checklist-item"><i class="bi bi-check-circle-fill text-success me-1"></i><span>Climate Control HVAC: Frost Cold Tested</span></div>
        <div class="checklist-item"><i class="bi bi-check-circle-fill text-success me-1"></i><span>Battery & Alternator: Full Charge Health</span></div>
      `;
    }
  }

  // 9. Update Features & Options Tab
  const featuresPane = document.getElementById('features-pane');
  if (featuresPane) {
    const featCols = featuresPane.querySelectorAll('.row.g-3 .col-md-4');
    if (featCols.length >= 3) {
      featCols[0].innerHTML = `
        <div class="p-3 border rounded-3 h-100" style="background-color: var(--bg-surface);">
          <h6 class="fw-bold text-primary"><i class="bi bi-shield-check me-1"></i> Safety & Driver Assist</h6>
          <ul class="list-unstyled small mb-0">
            ${car.features.safety.map(f => `<li class="mb-2"><i class="bi bi-check-circle-fill text-success me-2"></i>${f}</li>`).join('')}
          </ul>
        </div>
      `;

      featCols[1].innerHTML = `
        <div class="p-3 border rounded-3 h-100" style="background-color: var(--bg-surface);">
          <h6 class="fw-bold text-primary"><i class="bi bi-phone me-1"></i> Technology & Audio</h6>
          <ul class="list-unstyled small mb-0">
            ${car.features.tech.map(f => `<li class="mb-2"><i class="bi bi-check-circle-fill text-success me-2"></i>${f}</li>`).join('')}
          </ul>
        </div>
      `;

      featCols[2].innerHTML = `
        <div class="p-3 border rounded-3 h-100" style="background-color: var(--bg-surface);">
          <h6 class="fw-bold text-primary"><i class="bi bi-sun me-1"></i> Comfort & Convenience</h6>
          <ul class="list-unstyled small mb-0">
            ${car.features.comfort.map(f => `<li class="mb-2"><i class="bi bi-check-circle-fill text-success me-2"></i>${f}</li>`).join('')}
          </ul>
        </div>
      `;
    }
  }

  // 10. Update Similar Vehicles Recommendation Section
  const similarContainer = document.querySelector('.mb-5 .row.g-4');
  if (similarContainer) {
    const similarCars = window.getSimilarCars(car.id, 3);
    similarContainer.innerHTML = similarCars.map(sim => `
      <div class="col-md-6 col-lg-4">
        <div class="car-card">
          <div class="car-card-img-wrap">
            <img src="${sim.images.hero}" alt="${sim.title}" loading="lazy">
            <button class="car-favorite-btn" data-car-id="${sim.id}" aria-label="Save car"><i class="bi bi-heart"></i></button>
          </div>
          <div class="car-card-body">
            <span class="text-muted small">${sim.categoryLabel} • ${sim.drivetrain.includes('AWD') ? 'AWD' : sim.drivetrain.includes('4WD') ? '4WD' : 'FWD'}</span>
            <h3 class="car-card-title mt-1"><a href="car-details.html?id=${sim.id}">${sim.title}</a></h3>
            <div class="car-card-specs">
              <div class="spec-item"><i class="bi bi-speedometer2"></i><span>${sim.mileage}</span></div>
              <div class="spec-item"><i class="bi bi-fuel-pump"></i><span>${sim.fuelType.split(' ')[0]}</span></div>
              <div class="spec-item"><i class="bi bi-gear"></i><span>${sim.transmission.split(' ')[0]}</span></div>
            </div>
            <div class="car-card-footer">
              <div class="car-price-wrap">
                <div class="price-main">$${sim.price.toLocaleString()}</div>
                <div class="price-emi">Est. $${sim.emi}/mo</div>
              </div>
              <a href="car-details.html?id=${sim.id}" class="btn btn-sm btn-primary-custom">View Details</a>
            </div>
          </div>
        </div>
      </div>
    `).join('');
  }

  // 11. Pre-fill Calculator Price
  const calcPrice = document.getElementById('calcPrice');
  if (calcPrice) {
    calcPrice.value = car.price;
    calcPrice.dispatchEvent(new Event('input'));
  }

  // 12. Modal Input Pre-filling
  const testDriveVehicleInput = document.getElementById('testDriveVehicle');
  if (testDriveVehicleInput) {
    testDriveVehicleInput.value = `${car.title} (Stock #${car.stock})`;
  }

  const offerVehicleInput = document.getElementById('offerVehicle');
  if (offerVehicleInput) {
    offerVehicleInput.value = `${car.title} (Asking $${car.price.toLocaleString()})`;
  }
});
