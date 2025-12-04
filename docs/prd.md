# Product Requirements Document (PRD) - To Do Listen App

## ToDo Listen App

---

## 1. **Ziel des Produkts**

Die ToDo Listen App ermöglicht Nutzern das Erstellen, Verwalten und Bearbeiten persönlicher Aufgaben. Die App bietet eine moderne Benutzeroberfläche, eine einfache Authentifizierung, und nutzt KI-Funktionen zur Aufgabenoptimierung. Das Produkt soll leicht erweiterbar, performant und skalierbar sein.

---

## 2. **Zielgruppe**

* Berufstätige, die ihre Aufgaben digital organisieren möchten
* Studierende
* Personen, die einfache und intuitive ToDo-Tools bevorzugen

---

## 3. **Zentrale Funktionen**

### 3.1 **Landing Page**

* Kurze Erklärung des Produkts
* Call-To-Action: „Sign Up” / „Log In”
* Feature-Überblick
* Optional: Pricing-Bereich (Stripe integriert)

### 3.2 **Auth / Login**

* Registrierung via E-Mail + Passwort (Supabase Auth)
* Login / Logout
* Password Reset Flow
* Session Handling (Supabase Auth Helpers für Next.js)

### 3.3 **Geschützter Bereich: ToDo Liste**

* Nur authentifizierte Nutzer
* Übersicht aller eigenen ToDos (Supabase Tabellenstruktur: `todos`)
* Funktionen:

  * Neues ToDo anlegen (Titel, Beschreibung über TipTap Editor)
  * Bestehende ToDos bearbeiten
  * ToDos löschen
  * ToDos als "erledigt" markieren
* KI-Funktion (OpenAI API):

  * Vorschläge zur Optimierung / Strukturierung von Aufgaben
  * Zusammenfassung von ToDo-Listen

---

## 4. **Zusätzliche Features (MVP++)**

* Sortieren & Filtern
* Kategorien / Tags
* Dunkelmodus
* Kollaboration (Sharing)

---

## 5. **Tech Stack**

### **Frontend:** Next.js 14 (App Router), React, TailwindCSS

### **Backend:** Supabase (Datenbank + Auth)

### **AI:** OpenAI API

### **Payments:** Stripe Checkout / Billing

### **Hosting:** Vercel

### **Editor:** TipTap

---

## 6. **User Journeys**

### 6.1 **Erster Besuch**

1. Nutzer sieht Landing Page
2. Klickt auf "Sign Up"
3. Registriert sich via Supabase Auth
4. Wird in ToDo Bereich weitergeleitet

### 6.2 **Neue Aufgabe erstellen**

1. Klick auf „Neue Aufgabe“
2. TipTap Editor öffnet sich
3. Nutzer speichert Aufgabe → Eintrag in Supabase

### 6.3 **KI-Unterstützung nutzen**

1. Nutzer klickt „Aufgabe optimieren“ oder „Liste zusammenfassen“
2. OpenAI erhält Input
3. Rückgabe wird im Editor dargestellt

---

## 7. **Nicht-funktionale Anforderungen**

* **Performance:** Ladezeit < 1 Sekunde für eingeloggte Nutzer
* **Sicherheit:** Row Level Security (Supabase) aktiviert
* **Skalierbarkeit:** App muss bis zu 10.000 Benutzer problemlos verarbeiten
* **Minimalistisches, Responsive Design:** (Mobile + Desktop optimiert)
* Schnelle Ladezeiten (Server-Side Rendering via Next.js)

---

## 8. **Milestones**

### Phase 1 (MVP)

* Landing Page
* Auth/Login
* Grundlegende ToDo-Funktionen
* Hosting auf Vercel

### Phase 2

* KI-Funktionen
* UI-Verbesserungen
* Tagging

### Phase 3

* Stripe Integration
* Premium Features

---

## 9. **Risiken & Herausforderungen**

* Zu komplexe KI-Funktionen könnten MVP verzögern
* Stripe Billing Setup erfordert genaue Preisstrategie
* TipTap JSON-Struktur muss sauber gespeichert werden

---

## 10. **Erfolgskriterien (KPIs)**

* Registrierung → 10% Conversion von Landing Page
* Mindestens 70% aktive Nutzer speichern wöchentlich ToDos
* <5% Bounce Rate nach Login

---

*Ende des Dokuments*
