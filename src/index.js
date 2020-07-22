// Features
// Add multiple languages to translation

const ml = {
  lang: null,
  langs: {},
  get: function (t, d) {
    return this.langs[this.lang][t] || d || console.error('Devegram ML: Missing Translations for ', t) || null
  },
  hasLang: function (l) {
    return this.langs.hasOwnProperty(l)
  },
  hasTrans: function (t) {
    return this.langs[this.lang].hasOwnProperty(t)
  },
  addLang: function (lang, trans) {
    this.langs[lang] = trans
  },
  setLang: function (l) {
    this.lang = l
  }
}

export default ml
