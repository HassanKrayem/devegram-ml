// Features
// Add multiple languages to translation


/*let langs = [
  {
    lang: 'en',
    translation: {
      label: 'Label Yes',
      music: 'Music si Love'
    }
  }
]

ml.addLang(langs)
ml.setLang('en')
console.log('devegramMl', ml.get('music'))*/

export const ml = {
  lang: null,
  langs: {},
  getFrom(l, t, d) {
    return this.langs[l][t] || d || console.error('Devegram ML: Missing Translations for ', t, 'in ' + l + ' language') || null
  },
  get: function (t, d) {
    return this.langs[this.lang][t] || d || console.error('Devegram ML: Missing Translations for ', t) || null
  },
  hasLang: function (l) {
    return this.langs.hasOwnProperty(l)
  },
  hasTrans: function (t) {
    return this.langs[this.lang].hasOwnProperty(t)
  },
  addTrans: function (c) {
    this.langs[c.lang][c.key] = c.value
  },
  addLang: function (lang, trans) {
    if (lang.constructor === Array) {      
      lang.forEach((config) => {
        this.langs[config.lang] = config.translation
      })
    } else {
      this.langs[lang] = trans  
    }
  },
  setLang: function (l) {
    this.lang = l
  },
  getLangs: function () {
    return Object.keys(this.langs)
  },
  getLang: function (l) {
    return this.langs[l]
  }
}

export default ml
