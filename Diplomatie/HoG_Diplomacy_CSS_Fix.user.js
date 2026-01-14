// ==UserScript==
// @name        HoG Diplomacy CSS Fix
// @namespace   https://github.com/Ralgert/HoG
// @match       *://*.konggames.com/gamez/*
// @match       *://*.heartofgalaxy.com/*
// @grant       GM_addStyle
// @version     0.2.8
// @author      Ralgert / Gemini
// @description 20260114
// @description Für das Spiel Heart of Galaxy: Horizons
// @description auch bei richtigen Voraussetzungen bleibt der Menü Punkt Diplomatie ausgeblendet; hiermit nicht
// @downloadURL https://raw.githubusercontent.com/Ralgert/HoG/main/Diplomatie/HoG_Diplomacy_CSS_Fix.user.js
// @updateURL   https://raw.githubusercontent.com/Ralgert/HoG/main/Diplomatie/HoG_Diplomacy_CSS_Fix.user.js
// ==/UserScript==
// Memo: obiges auslagern in .meta.js und updateURL anpassen?

GM_addStyle('#b_diplomacy_icon { display: inline-block !important; cursor: pointer !important; }');
