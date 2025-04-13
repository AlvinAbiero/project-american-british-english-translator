"use strict";

const Translator = require("../components/translator.js");

module.exports = function (app) {
  const translator = new Translator();

  app.route("/api/translate").post((req, res) => {
    const { text, locale } = req.body;

    // Check if required fields are missing
    if (text === undefined || locale === undefined) {
      return res.json({ error: "Required field(s) missing" });
    }

    // check if text is empty
    if (text === "") {
      return res.json({ error: "No text to translate" });
    }

    // Validate locale
    if (locale !== "american-to-british" && locale !== "british-to-american") {
      return res.json({ error: "Invalid value for locale field" });
    }

    // call the translate method and return the result
    const result = translator.translate(text, locale);
    res.json(result);
  });
};
