var assert = require('assert');
var JsBarcode = require('../../bin/node/JsBarcode.js');
var Canvas = require("canvas");
var help = require("./help/help");

var options = {height: 100};

describe('UPC', function() {
  it('should be able to include the encoder(s)', function () {
    UPC = JsBarcode.getModule("UPC");
  });

  it('should be able to encode normal text', function () {
    var enc = new UPC("123456789999", options);
    assert.equal("10100110010010011011110101000110110001010111101010100010010010001110100111010011101001110100101"
      , help.fixBin(enc.encode()));
  });

  it('should warn with invalid text', function () {
    var enc = new UPC("12345", options);
    assert.equal(false, enc.valid());
  });

  it('should auto include the checksum if missing', function () {
    var enc = new UPC("12345678999", options);
    assert.equal("123456789999", help.fixText(enc.encode()));
  });
});

describe('EAN', function() {
  it('should be able to include the encoder(s)', function () {
    EAN = JsBarcode.getModule("EAN13");
  });

  it('should be able to encode normal text', function () {
    var enc = new EAN("5901234123457", options);
    assert.equal(true, enc.valid());
    assert.equal("10100010110100111011001100100110111101001110101010110011011011001000010101110010011101000100101"
      , help.fixBin(enc.encode()));
  });

  it('should warn with invalid text', function () {
    var enc = new EAN("12345", options);
    assert.equal(false, enc.valid());

    var enc = new EAN("5901234123456  ", options);
    assert.equal(false, enc.valid());
  });

  it('should auto include the checksum if missing', function () {
    var enc = new EAN("590123412345", options);
    assert.equal("5901234123457", help.fixText(enc.encode()));
  });
});

describe('EAN-8', function() {
  it('should be able to include the encoder(s)', function () {
    EAN8 = JsBarcode.getModule("EAN8");
  });

  it('should be able to encode normal text', function () {
    var enc = new EAN8("96385074");
    assert.equal(true, enc.valid());
    assert.equal("1010001011010111101111010110111010101001110111001010001001011100101"
      , enc.encode().data);
  });

  it('should auto include the checksum if missing', function () {
    var enc = new EAN8("9638507");

    assert.equal(true, enc.valid());
    assert.equal("96385074", enc.encode().text);
    assert.equal("1010001011010111101111010110111010101001110111001010001001011100101"
      , enc.encode().data);
  });

  it('should warn with invalid text', function () {
    var enc = new EAN8("12345");
    assert.equal(false, enc.valid());

    var enc = new EAN8("96385073");
    assert.equal(false, enc.valid());
  });
});

describe('EAN-5', function() {
  it('should be able to include the encoder(s)', function () {
    EAN5 = JsBarcode.getModule("EAN5");
  });

  it('should be able to encode normal text', function () {
    var enc = new EAN5("54495");
    assert.equal(true, enc.valid());
    assert.equal("10110110001010100011010011101010001011010111001"
      , enc.encode().data);

    var enc = new EAN5("12345");
    assert.equal(true, enc.valid());
    assert.equal("10110110011010010011010100001010100011010110001"
      , enc.encode().data);
  });

  it('should warn with invalid text', function () {
    var enc = new EAN5("1234");
    assert.equal(false, enc.valid());

    var enc = new EAN5("123a5");
    assert.equal(false, enc.valid());
  });
});

describe('EAN-2', function() {
  it('should be able to include the encoder(s)', function () {
    EAN2 = JsBarcode.getModule("EAN2");
  });

  it('should be able to encode normal text', function () {
    var enc = new EAN2("53");
    assert.equal(true, enc.valid());
    assert.equal("10110110001010100001"
      , enc.encode().data);

    var enc = new EAN2("12");
    assert.equal(true, enc.valid());
    assert.equal("10110011001010010011"
      , enc.encode().data);
  });

  it('should warn with invalid text', function () {
    var enc = new EAN2("1");
    assert.equal(false, enc.valid());

    var enc = new EAN2("a2");
    assert.equal(false, enc.valid());
  });
});
