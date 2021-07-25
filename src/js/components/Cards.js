import { Component } from "./Component.js";

const d = document;

const Cards = new Component({
    el: ".cards",
    data: { // State of the component Cards
        typeLetter: "Roboto",
        sizeTitles: 1,
        sizeText: 1,
        theme: "light",
        shade: "null",
        orientation: "",
        border: 0,
        dataExcel: [],
        filterField: "",
        charge: false
    },
    props: {},
    template: function (data, props) {
        // If the data of the excel is avaible generate the cards.
        if (data.charge) {

            d.querySelector('.cards').innerHTML = '';
            // Select the template of the card
            const $card = d.getElementById('card-template').content;
            const $cards = d.createDocumentFragment();

            
            // For each object that contain the data of a row of the excel generate the ui
            data.dataExcel.forEach(el => {
                
                //Clone the card because the template should not be modified
                let $cloneCard = document.importNode($card, true);
                const $contentCard = d.createDocumentFragment();

                for (let key in el) {

                    // Clone the section card because the template should not be modified
                    let $sectionCard = document.importNode($card.querySelector('.card_section'), true);

                    // If the key is a image add the attribute src of the card
                    if ((key == 'Imagen') || (key == 'Image')) {
                        $cloneCard.querySelector('.card_img').src = el[key];
                    } else {
                        // Add the title and the contain of the card
                        $sectionCard.querySelector('.card_section-title').textContent = key;
                        $sectionCard.querySelector('.card_section-title').style.fontSize = `${data.sizeTitles}rem`;

                        $sectionCard.querySelector('.card_section-content').textContent = el[key];
                        $sectionCard.querySelector('.card_section-content').style.fontSize = `${data.sizeText}rem`;
                    }

                    // Add the clone section to the document fragment
                    $contentCard.appendChild($sectionCard);

                }

                // Delete all elements that in the moment have the card clon.
                $cloneCard.querySelector('.card_sections').innerHTML = '';
                
                // Add the sections to the clone card.
                $cloneCard.querySelector('.card_sections').appendChild($contentCard);
                
                //Add the styles of the card
                data.orientation && $cloneCard.querySelector('.card').classList.add(`${data.orientation}`);
                $cloneCard.querySelector('.card').classList.add(`${data.theme}`);
                $cloneCard.querySelector('.card').classList.add(`${data.typeLetter.replace(/ /g, '-')}`)
                $cloneCard.querySelector('.card').setAttribute('style', `border-radius: ${data.border}%;`)
                $cloneCard.querySelector('.card').classList.add(`${data.shade}`);

                //Add the card to fragment that contain all cards.
                $cards.appendChild($cloneCard);

            })

            return $cards;
        }
    }

})

export default Cards;