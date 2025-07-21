<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8" />
  <title>Viaggi tra Ricordi</title>
  <link rel="stylesheet" href="style.css" />
  <style>
    body {
      background: url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1350&q=80') no-repeat center center fixed;
      background-size: cover;
      color: #4a2c0a;
      font-family: 'Segoe UI', sans-serif;
      margin: 0;
      padding: 0;
    }
    .overlay {
      background-color: rgba(253, 246, 240, 0.85);
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 40px 20px;
      box-sizing: border-box;
      text-align: center;
    }
    h1 {
      font-size: 3rem;
      margin-bottom: 0.5rem;
      text-shadow: 1px 1px 3px #a9742a;
    }
    p.welcome-text {
      font-size: 1.3rem;
      max-width: 600px;
      margin-bottom: 40px;
      font-style: italic;
      color: #6e4c1e;
      text-shadow: 0.5px 0.5px 1px #c4a159;
    }
    .button-container {
      display: flex;
      gap: 30px;
      flex-wrap: wrap;
      justify-content: center;
    }
    .button {
      background-color: #b45f06;
      color: white;
      padding: 18px 40px;
      font-size: 1.2rem;
      border-radius: 12px;
      text-decoration: none;
      box-shadow: 0 6px 12px rgba(180, 95, 6, 0.6);
      transition: background-color 0.3s ease, box-shadow 0.3s ease;
    }
    .button:hover {
      background-color: #9c4d05;
      box-shadow: 0 8px 16px rgba(156, 77, 5, 0.9);
    }
  </style>
</head>
<body>
  <div class="overlay">
    <h1>Viaggi tra Ricordi</h1>
    <p class="welcome-text">
      Benvenuto in questo spazio dedicato ai tuoi ricordi più belli.<br>
      Cattura i momenti speciali e rivivili ogni volta che vuoi.
    </p>
    <div class="button-container">
      <a href="aggiungi.html" class="button">Crea un Ricordo</a>
      <a href="ricordi.html" class="button">Guarda i Ricordi</a>
    </div>
  </div>
</body>
</html>
