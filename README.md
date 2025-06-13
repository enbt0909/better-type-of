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
