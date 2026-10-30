const buyList = document.querySelector('#buyList');
const selected = document.querySelectorAll('#cities input[type="checkbox"]');
const total = document.querySelector('#total');
const ref = document.querySelector('#refresh');
const coupon = document.querySelector('#CC');
function refresh() {
  buyList.innerHTML = '';
  let count = 0;

  for (const checkbox of selected) {
    if (checkbox.checked) {
      const li = document.createElement('li');
      li.textContent = checkbox.value;
      buyList.appendChild(li);
      count += 1;
    }
  }

  const price = coupon.value.trim().toUpperCase() === 'IND50' ? 500 : 1000;
  total.textContent = `${count * price}$`;
}

ref.addEventListener('click', refresh);
for (const checkbox of selected) {
  checkbox.addEventListener('change', refresh);
}
coupon.addEventListener('input', refresh);
refresh();
