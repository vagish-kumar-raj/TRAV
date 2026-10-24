const buyList = document.querySelector('#buyList');
const selected = document.querySelectorAll('input[type="checkbox"]');
const total = document.querySelector('#total');
const ref = document.querySelector('#refresh');
const coupon = document.querySelector('#CC');
function refresh() {
  buyList.innerHTML = '';

  for (const checkbox of selected) {
    if (checkbox.checked) {
      const li = document.createElement('li');
      li.textContent = checkbox.value;
      buyList.appendChild(li);
      let a = buyList.querySelectorAll('li').length;
      total.textContent = a * 1000 + '$';
      if (coupon.value === 'IND50') {
        total.textContent = a * 500 + '$';
      }
    }
  }
}

ref.addEventListener('click', refresh);
