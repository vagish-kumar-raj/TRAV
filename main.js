const buyList = document.querySelector('#buyList');
const selected = document.querySelectorAll('input[type="checkbox"]');

function refresh() {
  buyList.innerHTML = '';

  for (const checkbox of selected) {
    if (checkbox.checked) {
      const li = document.createElement('li');
      li.textContent = checkbox.value;
      buyList.appendChild(li);
    }
  }
}

const ref = document.querySelector('#refresh');
ref.addEventListener('click', refresh);

