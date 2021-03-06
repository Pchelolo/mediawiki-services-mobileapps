'use strict';

const languages = {

    en: {
        monthNames : [
            'January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October','November', 'December'
        ],
        dayPage : {
            // https://en.wikipedia.org/wiki/May_22
            nameFormatter : (monthName, dayNumber) => `${monthName}_${dayNumber}`,
            headingIds: {
                births: 'Births',
                deaths: 'Deaths',
                events: 'Events',
                holidays: 'Holidays_and_observances'
            }
        },
        selectedPage : {
            // https://en.wikipedia.org/wiki/Wikipedia:Selected_anniversaries/May_22
            nameFormatter : (monthName, dayNumber) =>
                `Wikipedia:Selected_anniversaries/${monthName}_${dayNumber}`,
            listElementSelector: 'body > ul li'
        },
        yearListElementRegEx : /^\s*(\d+)\s*(bce?)?\s*–\s(.+)/i
    },

    de: {
        monthNames : [
            'Januar', 'Februar', 'März', 'April', 'Mai', 'Juni',
            'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'
        ],
        dayPage : {
            // https://de.wikipedia.org/wiki/22._Mai
            nameFormatter : (monthName, dayNumber) => `${dayNumber}._${monthName}`,
            headingIds: {
                births: 'Geboren',
                deaths: 'Gestorben',
                events: 'Ereignisse',
                holidays: 'Feier-_und_Gedenktage'
            }
        },
        selectedPage: {
            // https://de.wikipedia.org/wiki/Wikipedia:Hauptseite/Jahrestage/Mai/22
            nameFormatter : (monthName, dayNumber) =>
                `Wikipedia:Hauptseite/Jahrestage/${monthName}/${dayNumber}`,
            listElementSelector: 'body > ul li'
        },
        yearListElementRegEx : /^\s*(\d+)\s*(v\. Chr\.)?\s*(?::|–)\s(.+)/i
    },

    fr: {
        monthNames : [
            'janvier', 'février', 'mars', 'avril', 'mai', 'juin',
            'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'
        ],
        dayPage : {
            // https://fr.wikipedia.org/wiki/22_mai
            nameFormatter : (monthName, dayNumber) => `${dayNumber}_${monthName}`,
            headingIds: {
                births: 'Naissances',
                deaths: 'D.C3.A9c.C3.A8s',          // Décès
                events: '.C3.89v.C3.A9nements',     // Événements
                holidays: 'C.C3.A9l.C3.A9brations'  // Célébrations
            }
        },
        selectedPage: {
            // https://fr.wikipedia.org/wiki/Wikip%C3%A9dia:%C3%89ph%C3%A9m%C3%A9ride/22_mai
            nameFormatter : (monthName, dayNumber) =>
                `Wikipédia:Éphéméride/${dayNumber}_${monthName}`,
            listElementSelector: 'body > ul li'
        },
        yearListElementRegEx : /^\s*(\d+)\s*(av\. J\.-C\.)?\s*(?::|–)\s(.+)/i
    },

    sv: {
        monthNames : [
            'januari', 'februari', 'mars', 'april', 'maj', 'juni',
            'juli', 'augusti', 'september', 'oktober', 'november', 'december'
        ],
        dayPage : {
            // https://sv.wikipedia.org/wiki/22_maj
            nameFormatter : (monthName, dayNumber) => `${dayNumber}_${monthName}`,
            headingIds: {
                births: 'F.C3.B6dda',       // Födda
                deaths: 'Avlidna',
                events: 'H.C3.A4ndelser',   // Händelser
                holidays: 'Namnsdagar'
            }
        },
        selectedPage : {
            // https://sv.wikipedia.org/wiki/Mall:22_maj
            nameFormatter : (monthName, dayNumber) => `Mall:${dayNumber} ${monthName}`,
            listElementSelector: 'body > ul li'
        },
        yearListElementRegEx : /^\s*(\d+)\s*(f\.Kr\.)?\s*–\s(.+)/i
    }
};

module.exports = {
    languages
};
