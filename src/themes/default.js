const defaultTheme = {
  // Fonts
  fonts: {
    title: "Goudy Old Style, sans-serif",
    main: "Futara, sans-serif"
  },

  // Breakpoints for responsive design
  breakpoints: {
    xs: 'screen and (max-width: 480px)',
    sm: 'screen and (max-width: 640px)',
    md: 'screen and (max-width: 768px)',
    lg: 'screen and (max-width: 1024px)',
    xl: 'screen and (max-width: 1280px)'
  },
}


// Colors for layout
const light = {
  colors: {
    primary1: "#D4D4D2",
    background1: "#17181F",
    accent1: "#DAF627",
    button: "hsl(205.1,100%,36.1%)",
    background2: "#CB69C1",
    bgContrast: '#17181F',
    headingFirstGradientColor: '#fff',
    icons: '#fff',
    bodyBgColor: '#13000C',
    shadow: 'rgba(255,255,255,0.3)',
    svgTimeline: '#fff',
    filterBtnBgColor: '#21222A'
  },
}

const dark = {
  colors: {
    primary1: "#D4D4D2",
    background1: "#17181F",
    accent1: "#DAF627",
    button: "hsl(205.1,100%,36.1%)",
    background2: "#CB69C1",
    bgContrast: '#17181F',
    headingFirstGradientColor: '#fff',
    icons: '#fff',
    bodyBgColor: '#13000C',
    shadow: 'rgba(255,255,255,0.3)',
    svgTimeline: '#fff',
    filterBtnBgColor: '#21222A'
  },
}

export const lightTheme = {...defaultTheme, ...light};
export const darkTheme = {...defaultTheme, ...dark};