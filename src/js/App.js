import Header from "./components/Header.js";
import Introduction from "./components/Introduction.js";
import Menu from "./components/Menu.js";
import Cards from "./components/Cards.js";
import { getFont } from "./helpers/requestFonts.js";
import searchFilter from "./events/searchFilter.js";
import clicEvents from "./events/clickEvents.js";

const d = document;
const options = {
    card: '.card',
    input: '.menu_searcher-input',
    select: '.menu_searcher-select',
    section: '.card_section',
    sectionTitle: '.card_section-title',
    sectionContent: '.card_section-content',
    filter: "filter"
}

let selectedFile;
let rowObject;


d.addEventListener('DOMContentLoaded', () => {

    //Render the initial components
    Header.render();
    Introduction.render();

    clicEvents();

    // Call the function to manage the filter input
    searchFilter(options)

});

d.addEventListener('change', (e) => {

    // If the event origins in the .space-files execute
    if (e.target.matches('.space-files') || e.target.matches('.file-upload')) {

            d.querySelector('.menu').innerHTML = '';
            d.querySelector('.cards').innerHTML = '';

        // Create a fragment that is responsible for storing the options of the font
        const $fontOptions = d.createDocumentFragment();
        // Select the file that was upload
        selectedFile = e.target.files[0];

        // If the file exists
        if (selectedFile) {

            // Create a new file reader
            let fileReader = new FileReader();

            //The fileReader read the file as Binary String
            fileReader.readAsBinaryString(selectedFile);

            //When the fileReader was finished reading the file
            fileReader.onload = (event) => {
                let data = event.target.result;

                // Use the external library to manage the data.
                let workbook = XLSX.read(data, { type: "binary" });

                //For each element that was upload (each file)
                workbook.SheetNames.forEach(sheet => {

                    //Convert the element in a object javascript
                    rowObject = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheet]);
                    console.log(rowObject);

                    //Render the cards
                    Cards.setState({
                        dataExcel: rowObject,
                        charge: true
                    })

                    d.querySelector('.space').classList.add('null');
                    d.querySelector('.workSpace').classList.remove('null');

                    // Add the dimensions of the workspace.
                    d.querySelector('.workSpace').style.width = '95%';
                    d.querySelector('.workSpace').style.height = '123vh';
                    
                    

                });
            }
        }

        // Get the fonts for the api of google fonts
        getFont().then(res => {

            // For each font in the range of 0 to 49 create a tag select and inject in the fragment
            res.items.forEach((font, index) => {
                if (index < 50) {
                    const $option = d.createElement('option');
                    $option.setAttribute('value', font.family);
                    $option.textContent = font.family;

                    $fontOptions.appendChild($option);
                }
            })

            //Update the state of the menu.
            Menu.setState({
                optionsText: $fontOptions,
                charge: true,
                optionFile: rowObject
            })

        })

    }

    if (e.target.matches('.menu_typeLetter')) {
        console.log(e.target.value)

        // Change the href so that the cards can use the different fonts 
        d.querySelector('#fonts').href = `https://fonts.googleapis.com/css2?family=Roboto&family=${e.target.value.replace(/ /g, '+')}&display=swap`

        // Update the state of the cards with the new type of font
        Cards.setState({
            typeLetter: e.target.value
        })

    }

    // Update the property border of the state
    if (e.target.matches('.menu_border')) {
        Cards.setState({
            border: e.target.value
        })
    }

    if (e.target.matches('.menu_sizeTitles-input') || e.target.matches('.menu_sizeText-input')) {

        // Verify if the value of the inputs is the correct.
        if ((e.target.value < 12) || (e.target.value > 36)) {
            e.target.value = 12
            return
        }

        // From pts to rems
        const rems = (e.target.value) / 12

        // Update the state of the targets.
        if (e.target.classList.contains('menu_sizeTitles-input')) {
            Cards.setState({
                sizeTitles: rems
            })
        } else {
            Cards.setState({
                sizeText: rems
            })

        }
    }
})

console.log(window.XLSX);