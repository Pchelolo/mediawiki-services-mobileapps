'use strict';

/**
 * @private {!string} _title
 * @private {!string} _headlineSelector
 */
class NewsSite {
    /**
     * @param {!string} title
     * @param {!string} headlineSelectorAll
     * @param {!string} topicAnchorSelector
     */
    constructor(title, headlineSelectorAll, topicAnchorSelector) {
        this._title = title;
        this._headlineSelectorAll = headlineSelectorAll;
        this._topicAnchorSelector = topicAnchorSelector;
    }

    /**
     * @return {!string} News source wiki portal or template title to scrape
     *                   data from
     */
    get title() {
        return this._title;
    }

    /**
     * @return {!string} Query selector for news headline containers (not
     *                   specific categories like deaths, sports, etc)
     */
    get headlineSelectorAll() {
        return this._headlineSelectorAll;
    }

    /**
     * @return {!string} Query selector for news headline subject links; this
     *                   selector should be used on a headline element
     */
    get topicAnchorSelector() {
        return this._topicAnchorSelector;
    }
}

const TOPIC_SELECTOR_LINK = 'a[rel="mw:WikiLink"]:nth-of-type(1)';
const TOPIC_SELECTOR_BOLD_LINK = 'b:nth-of-type(1) a[rel="mw:WikiLink"]';

/**
 * @type {{Object.<string, NewsSite>}} A map of Wikipedia site languages codes
 *                                     to NewsSites
 */
module.exports = {
    da: new NewsSite('Skabelon:Forside_aktuelle_begivenheder', 'div > li',
        TOPIC_SELECTOR_BOLD_LINK),
    de: new NewsSite('Wikipedia:Hauptseite/Aktuelles', 'li', TOPIC_SELECTOR_LINK),
    el: new NewsSite('Πύλη:Τρέχοντα_γεγονότα/Επικεφαλίδες', 'li', TOPIC_SELECTOR_LINK),
    en: new NewsSite('Template:In_the_news', 'ul[id^=mw] li', TOPIC_SELECTOR_BOLD_LINK),
    es: new NewsSite('Portal:Actualidad',
        'table:nth-of-type(1) > tbody > tr > td > ul:nth-of-type(1) > li', TOPIC_SELECTOR_LINK),
    fi: new NewsSite('Malline:Uutisissa', 'body > ul > li', TOPIC_SELECTOR_BOLD_LINK),
    fr: new NewsSite('Modèle:Accueil_actualité', 'div ul[id^=mw] > li', TOPIC_SELECTOR_BOLD_LINK),
    he: new NewsSite('תבנית:חדשות_ואקטואליה', 'body > ul > li', TOPIC_SELECTOR_LINK),
    ko: new NewsSite('틀:새로_들어온_소식', 'body > ul > li', TOPIC_SELECTOR_BOLD_LINK),
    no: new NewsSite('Mal:Aktuelt', 'ul > li', TOPIC_SELECTOR_BOLD_LINK),
    pl: new NewsSite('Szablon:Aktualności', 'ul:last-of-type > li', TOPIC_SELECTOR_BOLD_LINK),
    pt: new NewsSite('Portal:Eventos_atuais', 'div > ul > li', TOPIC_SELECTOR_BOLD_LINK),
    ru: new NewsSite('Шаблон:Актуальные_события', 'body > ul > li', TOPIC_SELECTOR_BOLD_LINK),
    sv: new NewsSite('Portal:Huvudsida/Aktuella händelser', 'body > ul > li',
        TOPIC_SELECTOR_BOLD_LINK),
    vi: new NewsSite('Bản_mẫu:Tin_tức', 'ul > li', TOPIC_SELECTOR_BOLD_LINK)
};
