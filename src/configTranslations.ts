import { Pathnames, LocalePrefix } from 'next-intl/routing';

export const defaultLocale = 'it' as const;
export const locales = ['it', 'en'] as const;

export const pathnames: Pathnames<typeof locales> = {
    '/': '/',
    '/azienda': {
        it: '/azienda',
        en: '/company'
    },
    '/lavora_con_noi': {
        it: '/lavora_con_noi',
        en: '/work_with_us'
    },
    '/vts_usa_inc': {
        it: '/vts_usa_inc',
        en: '/vts_usa_inc'
    }
};

export const localePrefix: LocalePrefix<typeof locales> = 'always';
