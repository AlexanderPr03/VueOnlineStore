import { createI18n } from "vue-i18n";


const messages = {
    ro: {
        menu_link_1: 'Pagina acasă',
        menu_link_2: 'Despre Noi',
        menu_link_3: 'Panou de Control',
        mere: 'Nici un măr | Un măr | {count} mere'
    },
    en: {
        menu_link_1: 'Homepage',
        menu_link_2: 'About Us',
        menu_link_3: 'Dashboard'
    }
}

const i18n = createI18n({
    locale: 'ro',
    fallbackLocale: 'en',
    messages
});

export default i18n;