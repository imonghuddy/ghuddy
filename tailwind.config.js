/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
        xs: '375px',
        mxs: '475px',
        msm: '576px',

        sm: '640px',
        // => @media (min-width: 640px) { ... }

        md: '768px',
        // => @media (min-width: 768px) { ... }

        lg: '1024px',
        // => @media (min-width: 1024px) { ... }

        xl: '1280px',
        // => @media (min-width: 1280px) { ... }

        xxl: '1440px',

        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }

        '3xl': '1728px',

        '4xl': '2440px',
    },
    fontWeight: {
        hairline: 100,
        'extra-light': 100,
        thin: 200,
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
        'extra-bold': 800,
        black: 900,
    },

    fontSize: {
        large_title: ['6.0rem', '8.4rem'], //60px
        medium_title: ['4.0rem', '5.6rem'], //40px
        title: ['2.7rem', '3.78rem'], //27px
        title30: ['3rem', '4.2rem'], //30px
        base22: ['2.2rem', '3.08rem'],
        base24: ['2.4rem', '3.36rem'],
        base20: ['2.0rem', '2.8rem'],
        base18: ['1.8rem', '2.52rem'],
        base16: ['1.6rem', '2.24rem'],
        base17: ['1.7rem', '2.38rem'],
        base14: ['1.487rem', '2.0rem'],
        base12: ['1.2rem', '1.68rem'],
        base11: ['1.168rem', '1.635rem'],
        base11_tab: ['1.133rem', '1.587rem'],
        small10: ['1.062rem', '1.487rem'],
        small9: ['0.951rem', '1.3rem'],
        small7: ['0.717rem', '1rem'],
    },

    colors: {
        bg: {
            primary: '#FEFCF5',
            white: '#ffffff',
            semiwhite: 'rgba(255, 255, 255, 0.5)',
            semiblack: 'rgba(42, 34, 14, 0.76)',
            semiblack2: 'rgba(42, 34, 14, 0.45)',
            ashblack: 'rgba(42, 34, 14, 0.25)',
            loader: 'rgba(0, 0, 0, 0.05)',
            border: '#DCDCDC	',
            warning: '#eddb0e',
            blk: '#000000',
            darkAsh: '#212121',
            gradS: 'rgba(255, 251, 239, 0.7)',
            gradE: 'rgba(255, 251, 239, 0)',
            hotel: '#EFF6FF',
            tour: '#F5F3FF',
            transparent: 'rgba(255, 0, 0, 0.0)',
            bg_light: '#F5F9FA',
            bg_light_secondary: '#9F998A',
        },
        btn: {
            primary: '#376576',
            secondary: '#4E90A8',
            light: '#D3E3E9',
            base: '#FFFBEF',
            warning: '#FEE29A',
            border: '#29210d73',
            pink: '#FE9A9A',
            ashBorder: '#2a220e40',
            orange: '#FF9500',
            yellow: '#FFCC00',
            red: '#D82E3F',
            outline_border: '#CAC5B7',
            inActive: '#B3C2C7',
            inactive: '#B3C2C7',
            hoverSelectItem: '#EBF4F7',
        },
        txt: {
            primary: '#2A220E',
            secondary: '#FFFBEF',
            hint: '#868686',
            black: '#000000',
            dotted: '#d4d4d4',
            ash: '#AEAEB2',
            deletedItemTxtColor: '#8686868a',
            primary_light: '#142B33',
        },
    },
    extend: {
        height: {
            m_cardH: '390px',
            t_cardH: '462px',
            l_cardH: '490',
        },
        width: {
            m_cardW: '343px',
            t_cardW: '406px',
            l_cardW: '430px',
        },
        fontFamily: {
            sans: ['Poppins'],
            serif: ['Poppins'],
        },
        letterSpacing: {
            primary: '0.03em',
        },
        lineHeight: {
            small: '17px',
            medium: '25px',
            large: '38px',
            extraLarge: '56px',
            extraExLarge: '84px',
            titleLineH: '1.5',
        },
        boxShadow: {
            searchBar: '-3px 0px 16px rgba(0, 0, 0, 0.1)',
            customShadow: '-3px 0px 16px rgba(0, 0, 0, 0.1)',
            bottomShadow: '0px 1px 16px rgba(0, 0, 0, 0.1)',
            psudoShadow: '-3px 0px 16px rgba(254, 252, 245, 0.1)',
            cardShadow: '-2.20408px 0px 11.7551px rgba(0, 0, 0, 0.1);',
            // focusShadow: '0 0 10px #4E90A8'
            focusShadow: '0px 2px 8px 1px rgba(110,116,120,1)',
            iconShadow: '0px 0px 3px 1px rgba(128,124,124,0.75)',
            customShadow2: '0px 0px 10px 0px rgba(135, 159, 168, 0.25)',
        },
    },
},
  plugins: [],
};

