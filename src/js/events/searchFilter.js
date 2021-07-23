const searchFilter = (options) => {

    const d = document;

    let { card,
        input,
        select,
        section,
        sectionTitle,
        sectionContent,
        filter } = options;

    d.addEventListener('keyup', (e) => {

        // Select all cards
        const $cards = d.querySelectorAll(card);

        // If the event origins in the tag input selected
        if (e.target.matches(input)) {

            //Select the value to use in the filter of the cards (this value is the name of a columns of the excel)
            const $sectionFilter = d.querySelector(select).value;

            $cards.forEach(element => {

                // For each card select all card sections
                const $sectionCards = element.querySelectorAll(section)

                $sectionCards.forEach(element => {

                    // Select the title of each section of the card.
                    const $section = element.querySelector(sectionTitle)
                    // Select the content of each section of the card
                    const $sectionContent = element.querySelector(sectionContent)

                    // If the value use to filter the cards is equal to the text title of the section.
                    if ($section.textContent === $sectionFilter) {
                        // Evalueate the content section if this contains a substring that is equal 
                        // to the value introduced in the tag input 
                        if ($sectionContent.textContent.toLowerCase().includes((e.target.value).toLowerCase())) {
                            // The class filter is responsible for hide the cards that not have a match
                            element.parentNode.parentNode.classList.remove(filter)
                        } else {
                            element.parentNode.parentNode.classList.add(filter)
                        }
                    }
                });


            });


        }

    })
}

export default searchFilter