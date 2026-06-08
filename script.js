(function () {
  var overlay = document.getElementById('modal-overlay');
  var formWrapper = document.getElementById('modal-form-wrapper');
  var form = document.getElementById('pilot-form');
  var success = document.getElementById('modal-success');
  var errorEl = document.getElementById('form-error');
  var submitBtn = document.getElementById('form-submit');

  function openModal() {
    overlay.classList.add('is-open');
    document.body.style.overflow = 'hidden';
    setTimeout(function () {
      var first = form.querySelector('input');
      if (first) first.focus();
    }, 230);
  }

  function closeModal() {
    overlay.classList.remove('is-open');
    document.body.style.overflow = '';
    setTimeout(function () {
      success.style.display = 'none';
      formWrapper.style.display = '';
      form.reset();
      errorEl.style.display = 'none';
    }, 300);
  }

  document.querySelectorAll('[data-open-modal]').forEach(function (el) {
    el.addEventListener('click', function (e) {
      e.preventDefault();
      openModal();
    });
  });

  document.getElementById('modal-close').addEventListener('click', closeModal);

  overlay.addEventListener('click', function (e) {
    if (e.target === overlay) closeModal();
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && overlay.classList.contains('is-open')) closeModal();
  });

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (document.getElementById('hp-website').value) return;

    errorEl.style.display = 'none';
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending…';

    var payload = {
      name: document.getElementById('m-name').value,
      business_name: document.getElementById('m-business').value,
      phone: document.getElementById('m-phone').value,
      trade: document.getElementById('m-trade').value,
    };
    var email = document.getElementById('m-email').value;
    var city = document.getElementById('m-city').value;
    var message = document.getElementById('m-message').value;
    if (email) payload.email = email;
    if (city) payload.city = city;
    if (message) payload.message = message;

    fetch('https://formspree.io/f/mbdeoqlq', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify(payload),
    })
      .then(function (res) {
        return res.json().then(function (body) {
          if (!res.ok) throw new Error(body.error || 'Submission failed. Please try again.');
        });
      })
      .then(function () {
        formWrapper.style.display = 'none';
        success.style.display = '';
      })
      .catch(function (err) {
        errorEl.textContent = err.message;
        errorEl.style.display = 'block';
      })
      .finally(function () {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Send pilot request';
      });
  });
})();
