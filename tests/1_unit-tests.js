const chai = require("chai");
const assert = chai.assert;

const Translator = require("../components/translator.js");
const translator = new Translator();

suite("Unit Tests", () => {
  // Tests for American to British English
  test('Translate "Mangoes are my favorite fruit." to British English', function () {
    const input = "Mangoes are my favorite fruit.";
    const output = translator.translate(input, "american-to-british");
    assert.equal(output.text, input);
    assert.include(
      output.translation,
      '<span class="highlight">favourite</span>'
    );
  });

  test('Translate "I ate yogurt for breakfast." to British English', function () {
    const input = "I ate yogurt for breakfast.";
    const output = translator.translate(input, "american-to-british");
    assert.equal(output.text, input);
    assert.include(
      output.translation,
      '<span class="highlight">yoghurt</span>'
    );
  });

  test('Translate "We had a party at my friend\'s condo." to British English', function () {
    const input = "We had a party at my friend's condo.";
    const output = translator.translate(input, "american-to-british");
    assert.equal(output.text, input);
    assert.include(output.translation, '<span class="highlight">flat</span>');
  });

  test('Translate "Can you toss this in the trashcan for me?" to British English', function () {
    const input = "Can you toss this in the trashcan for me?";
    const output = translator.translate(input, "american-to-british");
    assert.equal(output.text, input);
    assert.include(output.translation, '<span class="highlight">bin</span>');
  });

  test('Translate "The parking lot was full." to British English', function () {
    const input = "The parking lot was full.";
    const output = translator.translate(input, "american-to-british");
    assert.equal(output.text, input);
    assert.include(
      output.translation,
      '<span class="highlight">car park</span>'
    );
  });

  test('Translate "Like a high tech Rube Goldberg machine." to British English', function () {
    const input = "Like a high tech Rube Goldberg machine.";
    const output = translator.translate(input, "american-to-british");
    assert.equal(output.text, input);
    assert.include(
      output.translation,
      '<span class="highlight">Heath Robinson device</span>'
    );
  });

  test('Translate "To play hooky means to skip class or work." to British English', function () {
    const input = "To play hooky means to skip class or work.";
    const output = translator.translate(input, "american-to-british");
    assert.equal(output.text, input);
    assert.include(
      output.translation,
      '<span class="highlight">bunk off</span>'
    );
  });

  test('Translate "No Mr. Bond, I expect you to die." to British English', function () {
    const input = "No Mr. Bond, I expect you to die.";
    const output = translator.translate(input, "american-to-british");
    assert.equal(output.text, input);
    assert.include(output.translation, '<span class="highlight">Mr</span>');
  });

  test('Translate "Dr. Grosh will see you now." to British English', function () {
    const input = "Dr. Grosh will see you now.";
    const output = translator.translate(input, "american-to-british");
    assert.equal(output.text, input);
    assert.include(output.translation, '<span class="highlight">Dr</span>');
  });

  test('Translate "Lunch is at 12:15 today." to British English', function () {
    const input = "Lunch is at 12:15 today.";
    const output = translator.translate(input, "american-to-british");
    assert.equal(output.text, input);
    assert.include(output.translation, '<span class="highlight">12.15</span>');
  });

  // Tests for British to American English
  test('Translate "We watched the footie match for a while." to American English', function () {
    const input = "We watched the footie match for a while.";
    const output = translator.translate(input, "british-to-american");
    assert.equal(output.text, input);
    assert.include(output.translation, '<span class="highlight">soccer</span>');
  });

  test('Translate "Paracetamol takes up to an hour to work." to American English', function () {
    const input = "Paracetamol takes up to an hour to work.";
    const output = translator.translate(input, "british-to-american");
    assert.equal(output.text, input);
    assert.include(
      output.translation,
      '<span class="highlight">Tylenol</span>'
    );
  });

  test('Translate "First, caramelise the onions." to American English', function () {
    const input = "First, caramelise the onions.";
    const output = translator.translate(input, "british-to-american");
    assert.equal(output.text, input);
    assert.include(
      output.translation,
      '<span class="highlight">caramelize</span>'
    );
  });

  test('Translate "I spent the bank holiday at the funfair." to American English', function () {
    const input = "I spent the bank holiday at the funfair.";
    const output = translator.translate(input, "british-to-american");
    assert.equal(output.text, input);
    assert.include(
      output.translation,
      '<span class="highlight">public holiday</span>'
    );
    assert.include(
      output.translation,
      '<span class="highlight">carnival</span>'
    );
  });

  test('Translate "I had a bicky then went to the chippy." to American English', function () {
    const input = "I had a bicky then went to the chippy.";
    const output = translator.translate(input, "british-to-american");
    assert.equal(output.text, input);
    assert.include(output.translation, '<span class="highlight">cookie</span>');
    assert.include(
      output.translation,
      '<span class="highlight">fish-and-chip shop</span>'
    );
  });

  test('Translate "I\'ve just got bits and bobs in my bum bag." to American English', function () {
    const input = "I've just got bits and bobs in my bum bag.";
    const output = translator.translate(input, "british-to-american");
    assert.equal(output.text, input);
    assert.include(
      output.translation,
      '<span class="highlight">odds and ends</span>'
    );
    assert.include(
      output.translation,
      '<span class="highlight">fanny pack</span>'
    );
  });

  test('Translate "The car boot sale at Boxted Airfield was called off." to American English', function () {
    const input = "The car boot sale at Boxted Airfield was called off.";
    const output = translator.translate(input, "british-to-american");
    assert.equal(output.text, input);
    assert.include(
      output.translation,
      '<span class="highlight">swap meet</span>'
    );
  });

  test('Translate "Have you met Mrs Kalyani?" to American English', function () {
    const input = "Have you met Mrs Kalyani?";
    const output = translator.translate(input, "british-to-american");
    assert.equal(output.text, input);
    assert.include(output.translation, '<span class="highlight">Mrs.</span>');
  });

  test('Translate "Prof Joyner of King\'s College, London." to American English', function () {
    const input = "Prof Joyner of King's College, London.";
    const output = translator.translate(input, "british-to-american");
    assert.equal(output.text, input);
    assert.include(output.translation, '<span class="highlight">Prof.</span>');
  });

  test('Translate "Tea time is usually around 4 or 4.30." to American English', function () {
    const input = "Tea time is usually around 4 or 4.30.";
    const output = translator.translate(input, "british-to-american");
    assert.equal(output.text, input);
    assert.include(output.translation, '<span class="highlight">4:30</span>');
  });

  // Highlight translation tests
  test('Highlight translation in "Mangoes are my favorite fruit."', function () {
    const input = "Mangoes are my favorite fruit.";
    const output = translator.translate(input, "american-to-british");
    assert.equal(output.text, input);
    assert.include(
      output.translation,
      '<span class="highlight">favourite</span>'
    );
  });

  test('Highlight translation in "I ate yogurt for breakfast."', function () {
    const input = "I ate yogurt for breakfast.";
    const output = translator.translate(input, "american-to-british");
    assert.equal(output.text, input);
    assert.include(
      output.translation,
      '<span class="highlight">yoghurt</span>'
    );
  });

  test('Highlight translation in "We watched the footie match for a while."', function () {
    const input = "We watched the footie match for a while.";
    const output = translator.translate(input, "british-to-american");
    assert.equal(output.text, input);
    assert.include(output.translation, '<span class="highlight">soccer</span>');
  });

  test('Highlight translation in "Paracetamol takes up to an hour to work."', function () {
    const input = "Paracetamol takes up to an hour to work.";
    const output = translator.translate(input, "british-to-american");
    assert.equal(output.text, input);
    assert.include(
      output.translation,
      '<span class="highlight">Tylenol</span>'
    );
  });
});
