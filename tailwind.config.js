/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ['class'],
    content: [
        './pages/**/*.{ts,tsx}',
        './components/**/*.{ts,tsx}',
        './app/**/*.{ts,tsx}',
        './src/**/*.{ts,tsx}',
    ],
    theme: {
        container: {
            center: true,
            padding: '2rem',
            screens: {
                '2xl': '1400px',
            },
        },
        extend: {
            colors: {
                common: {
                    white: '#FFFFFF',
                    black: '#000000',
                },
                grey: {
                    50: '#F7F7F7',
                    100: '#E7E7E7',
                    200: '#D7D7D7',
                    300: '#C7C7C7',
                    400: '#B7B7B7',
                    500: '#A7A7A7',
                    600: '#979797',
                    700: '#878787',
                    800: '#787878',
                    900: '#686868',
                    A00: '#585858',
                    B00: '#484848',
                    C00: '#373737',
                    D00: '#262626',
                    E00: '#141414',
                    F00: '#070707',
                },
                blue: {
                    50: '#EFF1FF',
                    100: '#CFD4FF',
                    200: '#AFB7FF',
                    300: '#8F9BFF',
                    400: '#707EFF',
                    500: '#5062FF',
                    600: '#3045FF',
                    700: '#1028FF',
                    800: '#0019EF',
                    900: '#0015CF',
                    A00: '#0012AF',
                    B00: '#000F8F',
                    C00: '#000B70',
                    D00: '#000850',
                    E00: '#000530',
                    F00: '#000210',
                },
                purple: {
                    50: '#F7EFFF',
                    100: '#E8CFFF',
                    200: '#D8AFFF',
                    300: '#C88FFF',
                    400: '#B970FF',
                    500: '#A950FF',
                    600: '#9930FF',
                    700: '#8A10FF',
                    800: '#7A00EF',
                    900: '#6A00CF',
                    A00: '#5900AF',
                    B00: '#49008F',
                    C00: '#390070',
                    D00: '#290050',
                    E00: '#180030',
                    F00: '#080010',
                },
                cyan: {
                    50: '#EFFDFF',
                    100: '#CFF8FF',
                    200: '#AFF4FF',
                    300: '#8FEFFF',
                    400: '#70EAFF',
                    500: '#50E6FF',
                    600: '#30E1FF',
                    700: '#10DDFF',
                    800: '#00CDEF',
                    900: '#00B1CF',
                    A00: '#0096AF',
                    B00: '#007B8F',
                    C00: '#006070',
                    D00: '#004450',
                    E00: '#002930',
                    F00: '#000E10',
                },
                red: {
                    50: '#FEF0F0',
                    100: '#FCD3D2',
                    200: '#FAB5B4',
                    300: '#F89896',
                    400: '#F67A78',
                    500: '#F55D5A',
                    600: '#F33F3C',
                    700: '#F1221E',
                    800: '#E1120E',
                    900: '#C3100C',
                    A00: '#A50D0A',
                    B00: '#870B09',
                    C00: '#690807',
                    D00: '#4B0605',
                    E00: '#2D0403',
                    F00: '#0F0101',
                },
                green: {
                    50: '#EFFFF6',
                    100: '#CFFFE3',
                    200: '#AFFFD1',
                    300: '#8FFFBE',
                    400: '#70FFAC',
                    500: '#50FF99',
                    600: '#30FF87',
                    700: '#10FF74',
                    800: '#00EF64',
                    900: '#00CF57',
                    A00: '#00AF4A',
                    B00: '#008F3C',
                    C00: '#00702F',
                    D00: '#005021',
                    E00: '#003014',
                    F00: '#001007',
                },
                light: {
                    background: {
                        default: '#FFFFFF',
                        defaultBlur: '#FFFFFFBB',
                        onDefault: '#262626',
                    },
                    primary: {
                        light: '#5062FF',
                        main: '#3045FF',
                        dark: '#1028FF',
                        contrastText: '#FFFFFF',
                    },
                    secondary: {
                        light: '#9930FF',
                        main: '#7A00EF',
                        dark: '#6A00CF',
                        contrastText: '#FFFFFF',
                    },
                    tertiary: {
                        light: '#007B8F',
                        main: '#006070',
                        dark: '#004450',
                        contrastText: '#FFFFFF',
                    },
                    surface: {
                        natural: '#F7F7F7',
                        onNatural: '#262626',
                        primary: '#EFF1FF',
                        onPrimary: '#000530',
                        secondary: '#F7EFFF',
                        onSecondary: '#180030',
                        tertiary: '#EFFDFF',
                        onTertiary: '#0D1B3F',
                    },
                    notes: {
                        C: '#00AF4A',
                        'C#': '#008F3C',
                        D: '#00702F',
                        'D#': '#0096AF',
                        E: '#3045FF',
                        F: '#0015CF',
                        'F#': '#6A00CF',
                        G: '#AA37B8',
                        'G#': '#91309C',
                        A: '#C3100C',
                        'A#': '#CF8900',
                        B: '#CFC700',
                    }
                },
                dark: {
                    background: {
                        default: '#000530',
                        defaultBlur: '#000530BB',
                        onDefault: '#F7F7F7',
                    },
                    primary: {
                        light: '#AFB7FF',
                        main: '#8F9BFF',
                        dark: '#707EFF',
                        contrastText: '#000000',
                    },
                    secondary: {
                        light: '#C88FFF',
                        main: '#B970FF',
                        dark: '#A950FF',
                        contrastText: '#000000',
                    },
                    tertiary: {
                        light: '#00CDEF',
                        main: '#00B1CF',
                        dark: '#0096AF',
                        contrastText: '#000000',
                    },
                    surface: {
                        natural: '#262626',
                        onNatural: '#F7F7F7',
                        primary: '#000B70',
                        onPrimary: '#EFF1FF',
                        secondary: '#290050',
                        onSecondary: '#F7EFFF',
                        tertiary: '#0D1B3F',
                        onTertiary: '#EFFDFF',
                    },
                    notes: {
                        C: '#70FFAC',
                        'C#': '#10FF74',
                        D: '#00CF57',
                        'D#': '#50E6FF',
                        E: '#AFB7FF',
                        F: '#707EFF',
                        'F#': '#B970FF',
                        G: '#D585DE',
                        'G#': '#C357D0',
                        A: '#F55D5A',
                        'A#': '#FFC450',
                        B: '#FFF970',
                    }
                },
            },
            fontFamily: {
                inter: ['var(--font-inter)'],
                spaceGrotesk: ['var(--font-spaceGrotesk)'],
            },
            fontSize: {
                xs: '0.5rem',
                sm: '0.625rem',
                tiny: '0.75rem',
                mini: '0.875rem',
                xxs: '1rem',
                xs: '1.125rem',
                sm: '1.25rem',
                base: '1.5rem',
                lg: '1.75rem',
                xl: '2rem',
                '2xl': '2.25rem',
                '3xl': '2.5rem',
                '4xl': '2.75rem',
                '5xl': '3rem',
                '6xl': '3.25rem',
                '7xl': '3.5rem',
                '8xl': '3.75rem',
                '9xl': '4rem',
                '10xl': '4.25rem',
                '11xl': '4.5rem',
            },
            boxShadow: {
                'large-light': '0px 6px 16px 0px rgba(0, 0, 0, 0.25)',
                'large-dark': '0px 6px 16px 0px rgba(255, 255, 255, 0.25)',
                'medium-light': '0px 6px 16px rgba(0, 0, 0, 0.25)',
                'medium-dark': '0px 6px 16px rgba(255, 255, 255, 0.25)',
            },
            backgroundImage: {
                'peach-light':
                    'linear-gradient(47deg, #472C72 15.93%, #A32E8D 84.6%)',
                'peach-dark':
                    'linear-gradient(46deg, #FF66A7 12.83%, #F89FD4 86.47%)',
                'lambada-light':
                    'linear-gradient(47deg, #7F298A 15.93%, #E61D79 84.6%)',
                'lambada-dark':
                    'linear-gradient(46deg, #FCAF6D 12.83%, #FFD36E 86.47%)',
                'PurpleHarmony-light':
                    'linear-gradient(47deg, #580EAD 15.93%, #5B33FB 84.6%)',
                'PurpleHarmony-dark':
                    'linear-gradient(46deg, #B995FB 12.83%, #0EF8EF 86.47%)',
                'violateSky-light':
                    'linear-gradient(47deg, #8119D3 15.93%, #EB3B9A 84.6%)',
                'violateSky-dark':
                    'linear-gradient(47deg, #BD6CFD 15.93%, #FFBDE1 84.6%)',
                // "circle-wave":
                //   "radial-gradient(circle, rgba(2,0,36,0) 0%, rgba(9,9,121,0) 52%, rgba(2,169,227,1) 78%, rgba(0,212,255,0) 100%)"
            },
            screens: {
                xs: '420px',
            },
            keyframes: {
                scaleUp: {
                    '0%': { transform: 'scale(1)' },
                    '30%': { transform: 'scale(1.03)' },
                    '60%': { transform: 'scale(1.06)' },
                    '80%': { transform: 'scale(1.03)' },
                    '100%': { transform: 'scale(1)' },
                },
                fadeOut: {
                    '0%': { opacity: 0.5 },

                    '100%': { opacity: 0 },
                },
                scaleUpWave: {
                    '0%': { transform: 'scale(1)' },
                    '20%': { transform: 'scale(1.15)' },
                    '30%': { transform: 'scale(1.25)' },
                    '100%': { transform: 'scale(1.35)' },
                },
            },
            animation: {
                scaleUp: 'scaleUp 0.3s ease-in-out forwards',
                scaleUpWave: 'scaleUpWave 0.7s ease-in-out forwards',
                fadeOut: 'fadeOut 0.7s ease-in-out forwards',
            },
        },
    },
    variants: {},
    plugins: [
        require('tailwindcss-animate'),
        require('@tailwindcss/typography'),
    ],
};
