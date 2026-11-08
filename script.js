document.addEventListener('DOMContentLoaded', () => {
  const search = document.querySelector('header nav input[type="search"], header nav input[placeholder*="Search" i]');
  const genre = document.querySelector('header nav select');
  const boxes = [...document.querySelectorAll('.container .box')];
  const agreement = document.querySelector('footer input[type="checkbox"]');
  const footer = document.querySelector('footer');
  let toastTimeout;

  function showToast(message) {
    let toast = document.querySelector('.alexandria-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.className = 'alexandria-toast';
      toast.setAttribute('role', 'status');
      document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.classList.add('show');
    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => toast.classList.remove('show'), 3000);
  }

  if (search) {
    const filterBoxes = () => {
      const query = search.value.trim().toLocaleLowerCase();
      boxes.forEach(box => {
        const matches = !query || box.textContent.toLocaleLowerCase().includes(query);
        box.classList.toggle('is-hidden', !matches);
        box.classList.toggle('search-match', Boolean(query) && matches);
      });
    };
    search.addEventListener('input', filterBoxes);
    search.addEventListener('keydown', event => {
      if (event.key === 'Escape') {
        search.value = '';
        filterBoxes();
        search.blur();
      }
    });
  }

  if (genre) {
    genre.addEventListener('change', () => {
      const path = genre.selectedOptions[0]?.dataset.url;
      if (!path) return;
      const destination = new URL(path, window.location.href);
      if (destination.origin === window.location.origin && ['http:', 'https:'].includes(destination.protocol)) {
        window.location.assign(destination.href);
      }
    });
  }

  if (agreement && footer) {
    const status = document.createElement('p');
    status.className = 'alexandria-status';
    status.setAttribute('role', 'status');
    footer.appendChild(status);

    agreement.addEventListener('change', () => {
      status.classList.toggle('success', agreement.checked);
      status.classList.toggle('error', !agreement.checked);
      status.textContent = agreement.checked
        ? 'Thank you! You have checked the agreement box.'
        : 'Please review the policies before agreeing.';
      if (agreement.checked) showToast('Agreement box checked.');
    });
  }

  const pricingBox = boxes.find(box => /How Alexandria Fixes Prices/i.test(box.textContent));
  if (pricingBox && !pricingBox.querySelector('.alexandria-fee-note')) {
    const note = document.createElement('p');
    note.className = 'alexandria-fee-note';
    const emphasis = document.createElement('strong');
    emphasis.textContent = 'Platform fee: 5%';
    note.append(emphasis, ' — added to the seller’s listed price.');
    pricingBox.appendChild(note);
  }
});
