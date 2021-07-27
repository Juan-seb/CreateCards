import Cards from "../components/Cards.js";

const clicEvents = () => {

    const d = document;

    d.addEventListener('click', (e) => {

        console.log(e.target)
        // Modify the theme of the card
        if (e.target.matches('.btnTheme')) {

            if (e.target.classList.contains('lightBtn')) {
                e.target.classList.replace('lightBtn', 'darkBtn');
                e.target.textContent = '🌙';
                d.querySelector('.menu_theme-value').textContent = 'Dark';

                Cards.setState({
                    theme: 'dark',
                })
            } else {
                e.target.classList.replace('darkBtn', 'lightBtn');
                e.target.textContent = '☀️';
                d.querySelector('.menu_theme-value').textContent = 'Light';

                Cards.setState({
                    theme: 'light',
                })

            }
        }

        // Modify the sades of the card
        if (e.target.matches('.menu_shades-red')) {
            
            Cards.setState({
                shade: "red"
            })
        }

        if (e.target.matches('.menu_shades-blue')) {
            Cards.setState({
                shade: "blue"
            })
        }

        if (e.target.matches('.menu_shades-green')) {
            Cards.setState({
                shade: "green"
            })
        }

        if (e.target.matches('.menu_shades-yellow')) {
            Cards.setState({
                shade: "yellow"
            })
        }

        if (e.target.matches('.menu_shades-orange')) {
            Cards.setState({
                shade: "orange"
            })
        }

        if (e.target.matches('.menu_shades-any')) {
            Cards.setState({
                shade: "null"
            })
        }

        // Generate the code

        if (e.target.matches('.menu_code > p') || e.target.matches('.menu_code-img')){
            console.log("Hecho")
            const codes = d.querySelectorAll('.card');
            let codeHTML = ``;

            codes.forEach(element => {
                codeHTML += element.outerHTML + `\n`;
            });

            d.querySelector('.coding').textContent=`<div class="cards">
                ${codeHTML}
            </div>`

        }

    })

}

export default clicEvents;