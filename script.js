document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('ricordoForm');
  const lista = document.getElementById('listaRicordi');

  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();

      const titolo = document.getElementById('titolo').value;
      const testo = document.getElementById('testo').value;
      const data = document.getElementById('data').value;
      const immagineInput = document.getElementById('immagine');
      const file = immagineInput.files[0];

      if (file) {
        const reader = new FileReader();
        reader.onload = function(event) {
          const immagineBase64 = event.target.result;
          salvaRicordo(titolo, testo, data, immagineBase64);
        };
        reader.readAsDataURL(file);
      } else {
        salvaRicordo(titolo, testo, data, null);
      }
    });
  }

  if (lista) {
    const ricordi = JSON.parse(localStorage.getItem('ricordi')) || [];
    ricordi.sort((a, b) => new Date(a.data) - new Date(b.data));

    ricordi.forEach((ricordo, index) => {
      const div = document.createElement('div');
      div.className = 'ricordo';
      div.innerHTML = `
        <h2>${ricordo.titolo}</h2>
        <p><strong>Data:</strong> ${ricordo.data}</p>
        <p>${ricordo.testo}</p>
        ${ricordo.immagine ? `<img src="${ricordo.immagine}" alt="Immagine ricordo" />` : ''}
        <button onclick="eliminaRicordo(${index})">Elimina</button>
      `;
      lista.appendChild(div);
    });
  }
});

function salvaRicordo(titolo, testo, data, immagine) {
  const nuovoRicordo = { titolo, testo, data, immagine };
  const ricordi = JSON.parse(localStorage.getItem('ricordi')) || [];
  ricordi.push(nuovoRicordo);
  localStorage.setItem('ricordi', JSON.stringify(ricordi));

  window.location.href = 'ricordi.html';
}

function eliminaRicordo(index) {
  const ricordi = JSON.parse(localStorage.getItem('ricordi')) || [];
  ricordi.splice(index, 1);
  localStorage.setItem('ricordi', JSON.stringify(ricordi));
  location.reload();
}
