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
        let $instructionsFragment = d.createDocumentFragment();

        let $exampleImage = d.createElement("img");
        $exampleImage.setAttribute("src", props.exampleImage);

        $instructionsFragment.appendChild($exampleImage);

        let $divInstructions = d.createElement("div");
        let $listInstructions = d.createElement("ul")

        props.instructions.forEach(element => {
            let $liInstructions = d.createElement("li");
            $liInstructions.textContent = element;

            $listInstructions.appendChild($liInstructions);
        });

        $divInstructions.appendChild($listInstructions);
        $instructionsFragment.appendChild($divInstructions);

        return $instructionsFragment;

    }
})


export default Introduction;
