<style>
.readme-container {
  color: #22223b;
  max-width: 800px;
  margin: 2rem auto;
  border-radius: 12px;
  padding: 2rem 2.5rem;
  background: #f9f9fb;
  font-family: 'Segoe UI', Arial, sans-serif;
  box-shadow: 0 4px 24px rgba(34,34,59,0.08);
}
.readme-container h1 {
  color: #3a86ff;
  font-size: 2.5rem;
  margin-bottom: 0.5em;
}
.readme-container h2, .readme-container h3 {
  margin-top: 2em;
  color: #4361ee;
}
.readme-container table {
  width: 100%;
  margin: 1.5em 0;
  background: #fff;
  overflow: hidden;
  border-radius: 8px;
  border-collapse: collapse;
  box-shadow: 0 2px 8px rgba(67,97,238,0.05);
}
  text-align: left;
  padding: 0.75em 1em;
.readme-container th, .readme-container td {
  border-bottom: 1px solid #e0e0e0;
}
.readme-container th {
  color: #22223b;
  font-weight: 600;
  text-align: center;
  background: #e7f0fd;
}
.readme-container tr:last-child td {
  border-bottom: none;
}
.readme-container code, .readme-container pre {
  font-size: 1em;
  color: #3a86ff;
  border-radius: 4px;
  padding: 0.2em 0.4em;
  background: #f1f3f8;
}
.readme-container ul, .readme-container ol {
  margin-left: 1.5em;
}
.readme-container .warning {
  padding: 1em;
  margin: 1.5em 0;
  color: #856404;
  border-radius: 6px;
  background: #fff3cd;
  border-left: 5px solid #ffe066;
}
.readme-container .project-structure {
  padding: 1em;
  margin: 1.5em 0;
  color: #495057;
  border-radius: 6px;
  background: #f8f9fa;
  border: 1px solid #e0e0e0;
  font-family: 'Fira Mono', 'Consolas', monospace;
}
</style>

<div class="readme-container">

# Better Type Of

**Better Type Of** ist eine einfache, interaktive Webanwendung, die den Typ eines eingegebenen Werts erkennt und anzeigt. Im Gegensatz zum Standard-`typeof` in JavaScript erkennt sie auch Arrays korrekt.

## 🔍 Features

- Erkennt Datentypen wie `string`, `number`, `boolean`, `object`, `undefined`, `function` und `array`.
- Einfache Benutzeroberfläche mit responsivem Design.
- Visuelle Rückmeldung des erkannten Typs direkt im Browser.
- Unterstützt native JavaScript-Syntax beim Parsen der Eingabe.

## 🚀 Live Demo

Du kannst das Projekt lokal starten oder auf einem beliebigen Webserver hosten. Alternativ kannst du die HTML-Datei einfach im Browser öffnen.

## 💡 Beispiel

| Eingabe           | Ausgabe   |
| ----------------- | --------- |
| `"Hallo"`         | `string`  |
| `42`              | `number`  |
| `[1, 2, 3]`       | `array`   |
| `{ name: "Max" }` | `object`  |
| `true`            | `boolean` |

## 🛠️ Verwendung

1. Öffne die Datei `index.html` im Browser.
2. Gib einen beliebigen JavaScript-Ausdruck in das Eingabefeld ein.
3. Klicke auf **„Typ bestimmen“**, um den Datentyp zu ermitteln.

<div class="warning">
<strong>⚠️ Sicherheitshinweis</strong><br>
Die Anwendung verwendet <code>eval()</code> zur Auswertung der Benutzereingabe. Dies ist <strong>nicht sicher</strong> und sollte <strong>nicht in produktiven Anwendungen</strong> oder mit unkontrollierten Benutzereingaben verwendet werden.
</div>

## 📁 Projektstruktur

<pre class="project-structure">
better-type-of/
├── index.html
├── main.js
├── style.css
├── README.md
</pre>

</div>
