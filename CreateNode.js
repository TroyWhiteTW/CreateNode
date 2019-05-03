/**
 * @param sTagName {string}
 * @param fSetTag {function}
 * @returns {HTMLElement}
 */
const createNode = (sTagName, fSetTag = null) => {
    const oNode = document.createElement(sTagName);

    if (fSetTag) fSetTag(oNode);

    return oNode;
};