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
    primary1: "#17181F",
    background1: "#efefef",
    accent1: "#6C72CB",
    button: "hsl(205.1,100%,36.1%)",
    background2: "#CB69C1",
    bgContrast: '#fff',
    headingFirstGradientColor: '#CB69C1',
    icons: '#17181F',
    bodyBgColor: '#f7f7f7',
    shadow: 'rgba(0,0,0,0.3)',
    svgTimeline: '#CB69C1',
    filterBtnBgColor: '#efefef'
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