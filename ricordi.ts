import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore, collection, getDocs, deleteDoc, doc, query, orderBy } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
import { getStorage, ref, deleteObject } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-storage.js";

// Config Firebase (metti qui i tuoi dati)
const firebaseConfig = {
  apiKey: "AIzaSyACMPacPca71SkbPIK4EG7YGk1uPIuAS2s",
  authDomain: "ricordi-sito.firebaseapp.com",
  projectId: "ricordi-sito",
  storageBucket: "ricordi-sito.appspot.com",
  messagingSenderId: "708953509181",
  appId: "1:708953509181:web:ac1dd89cb4a8d258978954",
  measurementId: "G-XGN936XN0E"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

const listaContainer = document.getElementById("lista-ricordi");

export async function caricaRicordi() {
  const q = query(collection(db, "ricordi"), orderBy("timestamp", "desc"));
  const querySnapshot = await getDocs(q);

  listaContainer.innerHTML = ""; // pulisco prima di caricare

  querySnapshot.forEach((docSnap) => {
    const dati = docSnap.data();
    const id = docSnap.id;

    const ricordoDiv = document.createElement("div");
    ricordoDiv.className = "ricordo";

    ricordoDiv.innerHTML = `
      <button class="elimina" data-id="${id}" data-url="${dati.immagineUrl || ''}">🗑 Elimina</button>
      <div class="autore">Di: ${dati.autore || "Sconosciuto"}</div>
      <h3>${dati.titolo}</h3>
      <p><strong>Data:</strong> ${dati.data}</p>
      <p>${dati.descrizione}</p>
      ${dati.immagineUrl ? `<img src="${dati.immagineUrl}" alt="Ricordo">` : ""}
    `;

    listaContainer.appendChild(ricordoDiv);
  });

  // Event listener elimina
  document.querySelectorAll(".elimina").forEach(button => {
    button.addEventListener("click", async (e) => {
      const id = e.target.dataset.id;
      const url = e.target.dataset.url;

      if (confirm("Vuoi davvero eliminare questo ricordo?")) {
        // Elimina Firestore
        await deleteDoc(doc(db, "ricordi", id));

        // Elimina immagine da Storage se presente
        if (url) {
          try {
            const imageRef = ref(storage, url);
            await deleteObject(imageRef);
          } catch (err) {
            console.warn("Immagine non trovata o già eliminata:", err);
          }
        }

        location.reload();
      }
    });
  });
}
