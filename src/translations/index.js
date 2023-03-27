import it from './strings/it.json'
import en from './strings/en.json'

import itFlag from '../assets/it.webp'
import enFlag from '../assets/gb.webp'

const resources = {
    en: {
        translation: en,
        language: 'english'

    },
    it: {
        translation: it,
        language: 'italiano'
    },
}

const flags = [{
        lang: "en",
        flag: enFlag,
    },
    {
        lang: "it",
        flag: itFlag,
    }
]



export {
    resources,
    flags
}