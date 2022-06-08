const currencySymbol = {
    ARS: 'AR$',
    USD: 'US$',
    EUR: '€',
    BRL: 'R$',
    GBP: '£',
    MXN: 'MX$',
    CLP: 'CL$',
    PYG: '₲',
    UYU: '$U',
    BOB: 'Bs',
    PEN: 'S/.',
    COP: 'CO$',
    VEF: 'Bs.F.'
}

type Currency =
    'ARS' |
    'USD' |
    'EUR' |
    'BRL' |
    'GBP' |
    'MXN' |
    'CLP' |
    'PYG' |
    'UYU' |
    'BOB' |
    'PEN' |
    'COP' |
    'VEF'

export const currencyFormatter = (currencyId: string) => currencySymbol[currencyId as Currency] 