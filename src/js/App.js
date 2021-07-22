import Header from "./Header.js";
import Introduction from "./Introduction.js";
import Menu from "./Menu.js";
import Cards from "./Cards.js";
import { getFont } from "./requestFonts.js";

const d = document;
let selectedFile;
let rowObject;

d.addEventListener('DOMContentLoaded', () => {
    Header.render();
    Introduction.render();
})

d.addEventListener('change', (e) => {
    if (e.target.matches('.space-files')) {

        const $fontOptions = d.createDocumentFragment();
        selectedFile = e.target.files[0];

        getFont().then(res => {

            res.items.forEach((font, index) => {
                if (index < 50) {
                    const $option = d.createElement('option');
                    $option.setAttribute('value', font.files.regular);
                    $option.textContent = font.family;

                    $fontOptions.appendChild($option);
                }
            })

            Menu.setState({
                optionsText: $fontOptions,
                charge: true,
            })

        })

        if (selectedFile) {
            let fileReader = new FileReader();
            fileReader.readAsBinaryString(selectedFile);
            fileReader.onload = (event) => {
                let data = event.target.result;

                let workbook = XLSX.read(data, { type: "binary" });
                console.log(workbook);
                workbook.SheetNames.forEach(sheet => {
                    rowObject = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheet]);
                    console.log(rowObject);

                    Cards.setState({
                        dataExcel: rowObject,
                        charge:true
                    })

                });
            }
        }

        console.log(selectedFile);
    }
})

console.log(window.XLSX);



