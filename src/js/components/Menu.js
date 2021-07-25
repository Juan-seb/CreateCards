import { Component } from "./Component.js";

const d = document;

const Menu = new Component({
    el: ".menu",
    data: {
        optionsText: null,
        charge: false,
        optionFile: null
    },
    props: {},
    template: function (data, props) {

        // If the request of fonts have successfully
        if (data.charge) {

            // Select the template of the menu
            const $menu = d.getElementById('menu-template').content;

            //Create a fragment that contains the paremeters of the filter each parameter is the name of the column in the excel
            const $optionTitleExcel = d.createDocumentFragment();

            //Clone the menu template not to modify the template
            let $clone = document.importNode($menu, true);
            let titles = data.optionFile[0]

            // Add the fonts that return the request of the API Google Fonts to the clone of the menu
            $clone.querySelector('.menu_typeLetter').appendChild(data.optionsText)
            
            // Create the tag select for each column name of the excel
            for(let key in titles){
                const $optionExcel = d.createElement('option');

                $optionExcel.setAttribute('value', key)
                $optionExcel.textContent = key;

                $optionTitleExcel.appendChild($optionExcel);
            }

            // Add the tags select to the select of the clone
            $clone.querySelector('.menu_searcher-select').appendChild($optionTitleExcel);

            return $clone


        }
    }
})

export default Menu;

