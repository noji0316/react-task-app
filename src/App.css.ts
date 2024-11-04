import { createGlobalTheme, style } from '@vanilla-extract/css';

export const vars =  createGlobalTheme(":root", {
    color: {
        main: "#ffa726",
        mainDarker: "#f57c00",
        mainFaded: "#ffb74d",
        mainFadeBright: "#ffb74da6",
        list: "rgb(235,236,240)",
        task: "rgb(255,255,255)",
        taskHover: "rgb(245,245,245)",
        darkText: "rgb(24,42,77)",
        secondaryDarkText: "rgb(94,108,132)",
        secondaryDarkTextHover: "rgb(218,219,226)",
        selectedTap: "rgb(137,176,174)",
        updateButton: "rgb(237,180,88)",
        deleteButton: "rgb(237,51,88)",

    },
    fontSizing: {
        T1: "32px",
        T2: "24px",
        T3: "18px",
        T4: "14px",
        P1: "12px",
    },
    spacing: {
        small: "5px",
        midium: "10px",
        big1: "20px",
        big2: "15px",
        listSpacing: "30px",
    },
    fonst: {
        body: "arial"
    },
    shadow: {
        basic: "4px 4px 8px 0px rgba(34, 60, 80, 0.2)"
    },
    minWidht: {
        list: "250px"
    }
})

export const appContainer = style({
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    height: 'max-content',
    width: '100vw'
})

export const board = style({
    display: 'flex',
    flexDirection: 'row',
    height: '100%'
})

export const buttons = style({
    marginTop: 'auto',
    paddingLeft: vars.spacing.big2
})