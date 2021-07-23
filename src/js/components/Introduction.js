import { Component } from "./Component.js";

const d = document;

const Introduction = new Component({
    el: '.useInstructions',
    props: {
        exampleImage: "url",
        instructions: ["hola", "de nuevo"]
    },
    data: {},
    template: function (data, props) {

        // Create a fragment that contains all elements of the component Introduction
        let $instructionsFragment = d.createDocumentFragment();

        // Create a tag image for the example that have the introduction
        let $exampleImage = d.createElement("img");
        $exampleImage.setAttribute("src", props.exampleImage);

        // Add the image to the fragment
        $instructionsFragment.appendChild($exampleImage);

        //Create a div that contains a list of instrucctions
        let $divInstructions = d.createElement("div");
        // Create a tag ul that contains the instructions of the page
        let $listInstructions = d.createElement("ul")

        // For each instruction in props.
        props.instructions.forEach(element => {
            let $liInstructions = d.createElement("li");
            $liInstructions.textContent = element;

            $listInstructions.appendChild($liInstructions);
        });

        //Add the list to the div
        $divInstructions.appendChild($listInstructions);
        // Add the div to the fragment
        $instructionsFragment.appendChild($divInstructions);

        return $instructionsFragment;

    }
})


export default Introduction;
