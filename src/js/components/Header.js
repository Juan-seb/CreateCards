import { Component } from "./Component.js";

const d = document;

const Header = new Component({
    el: ".header",
    props: {
        title: "CreateCards"
    },
    data: {},
    template: function (data, props) {

        let $headerfragment = d.createDocumentFragment();

        // For each element that should be have the header create a tag p and add to the fragment
        for (let key in props) {
            const $headerElement = d.createElement('p');
            $headerElement.textContent = props[key];

            $headerfragment.appendChild($headerElement);
        }

        return $headerfragment;
    }
});

export default Header;