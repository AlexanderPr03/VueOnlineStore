import { createI18n } from "vue-i18n";


const messages = {
    ro: require('./ro.json'),
    en: require('./en.json')
}

const i18n = createI18n({
    locale: 'ro',
    fallbackLocale: 'en',
    messages
});

export default i18n;