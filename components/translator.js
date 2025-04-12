const americanOnly = require("./american-only.js");
const americanToBritishSpelling = require("./american-to-british-spelling.js");
const americanToBritishTitles = require("./american-to-british-titles.js");
const britishOnly = require("./british-only.js");

class Translator {
  translate(text, locale) {
    if (!text || !locale) {
      return { error: "Required field(s) missing" };
    }

    if (text.trim() === "") {
      return { error: "No text to translate" };
    }

    if (locale !== "american-to-british" && locale !== "british-to-american") {
      return { error: "Invalid value for locale field" };
    }

    //   Make a copy of the original text for comparison later
    let translatedText = text;
    let translations = [];
    const highlightStart = '<span class="highlight">';
    const highlightEnd = "</span>";

    //   Handle different dictionary and formatting based on direction
    if (locale === "american-to-british") {
      //   Process American to British translations

      //   Handle American-only terms
      for (const [american, british] of Object.entries(americanOnly)) {
        const regex = new RegExp(`\\b${american}\\b`, "i");
        if (regex.test(translatedText)) {
          const match = translatedText.match(regex)[0];
          const replacement = british;
          translations.push({ original: match, translated: replacement });
          translatedText = translatedText.replace(
            regex,
            `${highlightStart}${replacement}${highlightEnd}`
          );
        }
      }

      //   Handle American to British spelling
      for (const [american, british] of Object.entries(
        americanToBritishSpelling
      )) {
        const regex = new RegExp(`\\b${american}\\b`, "i");
        if (regex.test(translatedText)) {
          const match = translatedText.match(regex)[0];
          //   preserve the case of the original word
          let replacement = british;
          if (match === match.toUppercase()) {
            replacement = replacement.toUpperCase();
          } else if (match[0] === match[0].toUpperCase()) {
            replacement =
              replacement.charAt(0).toUpperCase() + replacement.slice(1);
          }

          translations.push({ original: match, translated: replacement });
          translatedText = translatedText.replace(
            regex,
            `${highlightStart}${replacement}${highlightEnd}`
          );
        }
      }

      // Handle titles
      for (const [american, british] of Object.entries(
        americanToBritishTitles
      )) {
        // Make sure to escape the period in titles
        const regex = new RegExp(`\\b${american.replace(".", "\\.")}\\b`, "i");
        if (regex.test(translatedText)) {
          const match = translatedText.match(regex)[0];
          // Preserve the case of the original title
          let replacement = british;
          if (match === match.toUpperCase()) {
            replacement = replacement.toUpperCase();
          } else if (match[0] === match[0].toUpperCase()) {
            replacement =
              replacement.charAt(0).toUpperCase() + replacement.slice(1);
          }

          translations.push({ original: match, translated: replacement });
          translatedText = translatedText.replace(
            regex,
            `${highlightStart}${replacement}${highlightEnd}`
          );
        }
      }

      // Handle time format (10:30 -> 10.30)
      const timeRegex = /(\d{1,2}):(\d{2})/g;
      let timeMatch;
      while ((timeMatch = timeRegex.exec(text)) !== null) {
        const americanTime = timeMatch[0];
        const britishTime = `${timeMatch[1]}.${timeMatch[2]}`;
        translations.push({ original: americanTime, translated: britishTime });
        translatedText = translatedText.replace(
          americanTime,
          `${highlightStart}${britishTime}${highlightEnd}`
        );
      }
    } else {
      // Process British to American translations

      // Handle British-only terms
      for (const [british, american] of Object.entries(britishOnly)) {
        const regex = new RegExp(`\\b${british}\\b`, "i");
        if (regex.test(translatedText)) {
          const match = translatedText.match(regex)[0];
          const replacement = american;
          translations.push({ original: match, translated: replacement });
          translatedText = translatedText.replace(
            regex,
            `${highlightStart}${replacement}${highlightEnd}`
          );
        }
      }

      // Handle American to British spelling (reverse)
      for (const [american, british] of Object.entries(
        americanToBritishSpelling
      )) {
        const regex = new RegExp(`\\b${british}\\b`, "i");
        if (regex.test(translatedText)) {
          const match = translatedText.match(regex)[0];
          // Preserve the case of the original word
          let replacement = american;
          if (match === match.toUpperCase()) {
            replacement = replacement.toUpperCase();
          } else if (match[0] === match[0].toUpperCase()) {
            replacement =
              replacement.charAt(0).toUpperCase() + replacement.slice(1);
          }

          translations.push({ original: match, translated: replacement });
          translatedText = translatedText.replace(
            regex,
            `${highlightStart}${replacement}${highlightEnd}`
          );
        }
      }

      // Handle titles (reverse)
      for (const [american, british] of Object.entries(
        americanToBritishTitles
      )) {
        const regex = new RegExp(`\\b${british}\\b`, "i");
        if (regex.test(translatedText)) {
          const match = translatedText.match(regex)[0];
          // Preserve the case of the original title
          let replacement = american;
          if (match === match.toUpperCase()) {
            replacement = replacement.toUpperCase();
          } else if (match[0] === match[0].toUpperCase()) {
            replacement =
              replacement.charAt(0).toUpperCase() + replacement.slice(1);
          }

          translations.push({ original: match, translated: replacement });
          translatedText = translatedText.replace(
            regex,
            `${highlightStart}${replacement}${highlightEnd}`
          );
        }
      }

      // Handle time format (10.30 -> 10:30)
      const timeRegex = /(\d{1,2})\.(\d{2})/g;
      let timeMatch;
      while ((timeMatch = timeRegex.exec(text)) !== null) {
        const britishTime = timeMatch[0];
        const americanTime = `${timeMatch[1]}:${timeMatch[2]}`;
        translations.push({ original: britishTime, translated: americanTime });
        translatedText = translatedText.replace(
          britishTime,
          `${highlightStart}${americanTime}${highlightEnd}`
        );
      }
    }

    // If no translation was made, return the original text with a message
    if (translatedText === text) {
      return {
        text,
        translation: "Everything looks good to me!",
      };
    }

    return {
      text,
      translations: translatedText,
    };
  }
}

module.exports = Translator;
