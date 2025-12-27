const greetings = [
  "नमस्ते", // Hindi
  "Hello", // English
  "Hola", // Spanish
  "Bonjour", // French
  "Hallo", // German
  "Ciao", // Italian
  "Olá", // Portuguese
  "Привет", // Russian
  "你好", // Chinese (Mandarin)
  "こんにちは", // Japanese
  "안녕하세요", // Korean
  "ਸਤ ਸ੍ਰੀ ਅਕਾਲ", // Punjabi
  "নমস্কার", // Bengali
  "નમસ્તે", // Gujarati
  "வணக்கம்", // Tamil
  "నమస్కారం", // Telugu
  "നമസ്കാരം", // Malayalam
  "ನಮಸ್ಕಾರ", // Kannada
  "السلام عليكم", // Arabic
  "שלום", // Hebrew
  "Hej", // Swedish
  "Merhaba", // Turkish
  "Sawubona", // Zulu
];

let index = 0;
const greetingEl = document.getElementById("greeting");

setInterval(() => {
  // Animate out
  greetingEl.classList.add("greeting-out");

  // Change text when fully invisible
  setTimeout(() => {
    index = (index + 1) % greetings.length;
    greetingEl.textContent = greetings[index];

    greetingEl.classList.remove("greeting-out");
    greetingEl.classList.add("greeting-in");
  }, 700);
}, 2500);
