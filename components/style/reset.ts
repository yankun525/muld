/* eslint-disable prettier/prettier */
import { createGlobalStyle } from 'styled-components';
import { $text_color, $background_color } from './var';

export const reset = `
    html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, 
    blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, 
    kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, 
    li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, 
    figcaption, footer, header, hgroup, main, menu, nav, output, ruby, section, summary, time, mark, audio,
    video {
        margin: 0;
        padding: 0;
        font: inherit;
        font-size: 100%;
        vertical-align: baseline;
        border: 0;
    }

    html {
        line-height: 1;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    }
    
    ol,ul {
        list-style: none;
    }
    
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
    
    caption, th, td {
        font-weight: normal;
        vertical-align: middle;
    }

    q, blockquote {
        quotes: none;
    }

    q::before,
    q::after,
    blockquote::before,
    blockquote::after {
        content: '';
        content: none;
    }

    a img {
        border: none;
    }

    article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section,
    summary {
        display: block;
    }

    * {
        box-sizing: border-box;
    }

    body {
        color: ${$text_color};
        font-family: PingFang, Arial, Helvetica, 'Microsoft YaHei', Tohoma, sans-serif;
        background-color: ${$background_color};
    }

    a {
        text-decoration: none;
        background: transparent;
    }

    button,
    input[type='number'],
    input[type='text'],
    input[type='password'],
    input[type='email'],
    input[type='search'],
    select,
    textarea {
        margin: 0;
        font-family: inherit;
        -webkit-appearance: none;
    }
`;

export const Reset = createGlobalStyle`${reset}`;