const apiGoogleFonts = 'https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyA9IYI4vfebu9WaoKNEX1zVNIWMUhgjFpQ&sort=popularity'

export const getFont = async () => {

    try {
        const result = await fetch(apiGoogleFonts);
        const json = result.ok ? result.json() : Promise.reject({
            status: result.status
        })

        return json;
    } catch (error) {
        console.log(error)
    }
}
