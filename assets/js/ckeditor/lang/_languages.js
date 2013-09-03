﻿/*
 Copyright (c) 2003-2012, CKSource - Frederico Knabben. All rights reserved.
 For licensing, see LICENSE.html or http://ckeditor.com/license
 */
var CKEDITOR_LANGS = function () {
  var c = {af:"Afrikaans", ar:"Arabic", bg:"Bulgarian", bn:"Bengali/Bangla", bs:"Bosnian", ca:"Catalan", cs:"Czech", cy:"Welsh", da:"Danish", de:"German", el:"Greek", en:"English", "en-au":"English (Australia)", "en-ca":"English (Canadian)", "en-gb":"English (United Kingdom)", eo:"Esperanto", es:"Spanish", et:"Estonian", eu:"Basque", fa:"Persian", fi:"Finnish", fo:"Faroese", fr:"French", "fr-ca":"French (Canada)", gl:"Galician", gu:"Gujarati", he:"Hebrew", hi:"Hindi", hr:"Croatian", hu:"Hungarian", is:"Icelandic",
    it:"Italian", ja:"Japanese", ka:"Georgian", km:"Khmer", ko:"Korean", lt:"Lithuanian", lv:"Latvian", mn:"Mongolian", ms:"Malay", nb:"Norwegian Bokmal", nl:"Dutch", no:"Norwegian", pl:"Polish", pt:"Portuguese (Portugal)", "pt-br":"Portuguese (Brazil)", ro:"Romanian", ru:"Russian", sk:"Slovak", sl:"Slovenian", sr:"Serbian (Cyrillic)", "sr-latn":"Serbian (Latin)", sv:"Swedish", th:"Thai", tr:"Turkish", uk:"Ukrainian", vi:"Vietnamese", zh:"Chinese Traditional", "zh-cn":"Chinese Simplified"}, a = [], b;
  for (b in c)a.push({code:b, name:c[b]});
  a.sort(function (a, b) {
    return a.name < b.name ? -1 : 1
  });
  return a
}();