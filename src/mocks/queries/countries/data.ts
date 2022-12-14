import deepmerge from 'deepmerge'
import { Response, Query } from './type'

export const data = (
  options?: Response,
  deepMergeOptions?: deepmerge.Options,
): Query =>
  deepmerge<Query>(
    {
      __typename: 'Query',
      countries: [
        {
          name: 'Andorra',
          native: 'Andorra',
          capital: 'Andorra la Vella',
          emoji: '🇦🇩',
          currency: 'EUR',
          languages: [{ code: 'ca', name: 'Catalan', __typename: 'Language' }],
          __typename: 'Country',
        },
        {
          name: 'United Arab Emirates',
          native: 'دولة الإمارات العربية المتحدة',
          capital: 'Abu Dhabi',
          emoji: '🇦🇪',
          currency: 'AED',
          languages: [{ code: 'ar', name: 'Arabic', __typename: 'Language' }],
          __typename: 'Country',
        },
        {
          name: 'Afghanistan',
          native: 'افغانستان',
          capital: 'Kabul',
          emoji: '🇦🇫',
          currency: 'AFN',
          languages: [
            { code: 'ps', name: 'Pashto', __typename: 'Language' },
            { code: 'uz', name: 'Uzbek', __typename: 'Language' },
            { code: 'tk', name: 'Turkmen', __typename: 'Language' },
          ],
          __typename: 'Country',
        },
        {
          name: 'Antigua and Barbuda',
          native: 'Antigua and Barbuda',
          capital: "Saint John's",
          emoji: '🇦🇬',
          currency: 'XCD',
          languages: [{ code: 'en', name: 'English', __typename: 'Language' }],
          __typename: 'Country',
        },
        {
          name: 'Anguilla',
          native: 'Anguilla',
          capital: 'The Valley',
          emoji: '🇦🇮',
          currency: 'XCD',
          languages: [{ code: 'en', name: 'English', __typename: 'Language' }],
          __typename: 'Country',
        },
        {
          name: 'Albania',
          native: 'Shqipëria',
          capital: 'Tirana',
          emoji: '🇦🇱',
          currency: 'ALL',
          languages: [{ code: 'sq', name: 'Albanian', __typename: 'Language' }],
          __typename: 'Country',
        },
        {
          name: 'Armenia',
          native: 'Հայաստան',
          capital: 'Yerevan',
          emoji: '🇦🇲',
          currency: 'AMD',
          languages: [
            { code: 'hy', name: 'Armenian', __typename: 'Language' },
            { code: 'ru', name: 'Russian', __typename: 'Language' },
          ],
          __typename: 'Country',
        },
        {
          name: 'Angola',
          native: 'Angola',
          capital: 'Luanda',
          emoji: '🇦🇴',
          currency: 'AOA',
          languages: [
            { code: 'pt', name: 'Portuguese', __typename: 'Language' },
          ],
          __typename: 'Country',
        },
        {
          name: 'Antarctica',
          native: 'Antarctica',
          capital: null,
          emoji: '🇦🇶',
          currency: null,
          languages: [],
          __typename: 'Country',
        },
        {
          name: 'Argentina',
          native: 'Argentina',
          capital: 'Buenos Aires',
          emoji: '🇦🇷',
          currency: 'ARS',
          languages: [
            { code: 'es', name: 'Spanish', __typename: 'Language' },
            { code: 'gn', name: 'Guarani', __typename: 'Language' },
          ],
          __typename: 'Country',
        },
      ],
    },
    (options || {}) as Query,
    {
      arrayMerge(target: any[], source: any[]): any[] {
        if (!source.length) return source

        return [...target, ...source]
      },
      ...deepMergeOptions,
    },
  )
