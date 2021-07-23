//self-executing anonymous function

export const Component = (function () {
    //Create constructor of the component
    const Constructor = function (options) {
        this.el = options.el; // Parent element of the component
        this.props = options.props; //
        this.data = options.data; // State of the component
        this.template = options.template; // Function to generate the ui
    }

    // Add the method to prototype of the component constructor

    //Render UI
    Constructor.prototype.render = function () {
        const $element = document.querySelector(this.el);

        if (!$element) return;
        $element.appendChild(this.template(this.data,this.props)) /*Render the ui with the changes of the state */

    };

    //Reactively update the status
    Constructor.prototype.setState = function (obj) {
        for (let key in obj) {
            if (this.data.hasOwnProperty(key)) {
                this.data[key] = obj[key];
            }
        }
        this.render();
    };

    //Obtain a inmutable copy of the state
    Constructor.prototype.getState = function (obj) { 
        return JSON.parse(JSON.stringify(this.data));
    };


    return Constructor;
})();