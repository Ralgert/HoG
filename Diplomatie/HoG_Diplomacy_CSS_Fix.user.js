// ==UserScript==
// @name        HoG Diplomacy CSS Fix
// @match       *://*.konggames.com/gamez/*
// @match       *://*.heartofgalaxy.com/*
// @grant       GM_addStyle
// @version     0.2.4
// @author      Ralgert / Gemini
// @description 20260114
// @description Für das Spiel Heart of Galaxy: Horizons
// @description auch bei richtigen Voraussetzungen bleibt der Menü Punkt ausgeblendet; hiermit nicht
// ==/UserScript==

GM_addStyle('#b_diplomacy_icon { display: inline-block !important; cursor: pointer !important; }');
