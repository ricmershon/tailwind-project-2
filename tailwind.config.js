module.exports = {
    content: ['./*.html'],
    theme: {
        screens: {
            sm: '480px',
            md: '768px',
            lg: '976px',
            xl: '1440px'
        },
        extend: {
            fontFamily: {
                sans: ['Josefin Sans', 'sans-serif'],
                alata: ['Alata']
            },
            backgroundImage: {
                'background-image-desktop': "url('/images/desktop/image-hero.jpg')",
                'background-image-mobile': "url('/images/mobile/image-hero.jpg')"
            },
            letterSpacing: {
                widest: '.3em'
            }
        },
    },
    plugins: [],
}