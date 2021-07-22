import { Component } from "./Component.js";

const d = document;

const Menu = new Component({
    el: ".menu",
    data: {
        optionsText: null,
        charge: false
    },
    props: {},
    template: function (data, props) {

        if (data.charge) {

            d.querySelector('.workSpace').removeChild(d.querySelector('.space'));
            const $menu = d.getElementById('menu-template').content;
            $menu.querySelector('.menu_typeLetter').appendChild(data.optionsText)

            let $clone = document.importNode($menu, true);

            return $clone


        }
    }
})

export default Menu;

