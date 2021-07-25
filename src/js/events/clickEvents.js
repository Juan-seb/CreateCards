const clicEvents = () => {

    const d = document;

    d.addEventListener('click', (e) => {

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
            console.log(e.target.value)
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

        // Clean the work work

        /* if (e.target.matches('.')) */

    })

}

export default clicEvents;