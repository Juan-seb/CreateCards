import { Component } from "./Component.js";

const d = document;

const Cards = new Component({
    el: ".cards",
    data: {
        typeLetter: "Roboto",
        theme: "light",
        shade: "null",
        border: 0,
        dataExcel: [],
        charge: false
    },
    props: {},
    template: function (data, props) {

        if (data.charge) {

            const $card = d.getElementById('card-template').content;
            const $cards = d.createDocumentFragment();


            data.dataExcel.forEach(el => {

                const $contentCard = d.createDocumentFragment();

                for (let key in el) {

                    if ((key == 'Imagen') || (key == 'Image')) {
                        $card.querySelector('.card_img').setAttribute('src', el[key]);
                    } else {
                        $card.querySelector('.card_section-title').textContent = key;
                        $card.querySelector('.card_section-content').textContent = el[key];
                    }

                    
                    let $sectionCard = document.importNode($card.querySelector('.card_section'), true);
                    $contentCard.appendChild($sectionCard);

                }

                $card.querySelector('.card_sections').innerHTML = '';
                $card.querySelector('.card_sections').appendChild($contentCard);

                $card.querySelector('.card').classList.add(`${data.theme}`);
                $card.querySelector('.card').classList.add(`${data.shade}`);
                $card.querySelector('.card').setAttribute('style', `font-family: ${data.typeLetter}; border-radius: ${data.border};`)

                let $cloneCard = document.importNode($card, true);
                $cards.appendChild($cloneCard);

            })

            return $cards;
        }
    }

})

export default Cards;