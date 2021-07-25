import { Component } from "./Component.js";

const d = document;

const Introduction = new Component({
    el: '.introduction',
    props: {
        exampleImage: "https://cdn.exceltotal.com/0103/como-crear-una-tabla-en-excel-03.png",
        texts: [
                `Con create cards podras crear tarjetas solo al subir un archivo excel, 
                podras modificar su apariencia y muchas otras increibles opciones, create cards se encargara de generar el codigo
                necesario para tu pagina web. `
                , 
                `Lo unico que tienes que tener es tu archivo excel como se muestra en la imagen. La primera fila tiene que
                tener el nombre de cada titulo que quieras que tengan tus tarjetas.`]
    },
    data: {},
    template: function (data, props) {

        // Create a fragment that contains all elements of the component Introduction
        let $introductionFragment = d.createDocumentFragment();

        let $divImage = d.createElement('div');
        $divImage.classList.add('introduction_image');

        let $containerImage = d.createElement('div');
        $containerImage.classList.add('container_image');
        
        // Create a tag image for the example that have the introduction
        let $exampleImage = d.createElement("img");
        $exampleImage.setAttribute("src", props.exampleImage);

        $containerImage.appendChild($exampleImage);
        $divImage.appendChild($containerImage);

        // Add the image to the fragment
        $introductionFragment.appendChild($divImage);

        //Create a div that contains a tag ul
        let $divIntroduction = d.createElement("div");
        $divIntroduction.classList.add('container_introduction');

        // Create a tag ul that contains the introduction of the page
        let $listIntroduction = d.createElement("ul")

        // For each text in props.
        props.texts.forEach(element => {
            let $liIntroduction = d.createElement("li");
            $liIntroduction.textContent = element;

            $listIntroduction.appendChild($liIntroduction);
        });

        //Add the list to the div
        $divIntroduction.appendChild($listIntroduction);
        // Add the div to the fragment
        $introductionFragment.appendChild($divIntroduction);

        return $introductionFragment

    }
})


export default Introduction;
