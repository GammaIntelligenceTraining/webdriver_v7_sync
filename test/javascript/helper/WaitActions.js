class UtilityClass {

    UtilityClass() {
        this.defaultwait = 5000;
    }

    WaitForElementEnabled(elementPath) {
        browser.pause(this.defaultwait);
        elementPath.waitForEnabled(this.defaultwait);
    }

    WaitForTextVisible(elementPath) {
        elementPath.waitForEnabled(this.defaultwait);
        //elementPath.waitForText(this.defaultwait);
    }

    waitForPageToLoad() {
        browser.pause(this.defaultwait);
    }

    WaitForElementVisible(elementPath) {
        var timedelay = 0
        while (true) {
            if (!elementPath.isDisplayed()) {
                browser.pause(this.defaultwait)
                timedelay = timedelay + 1;
                if (timedelay == 60) {
                    //browser.saveScreenshot();
                    throw "Something went wrong";
                    break;
                }
                continue;
            }
            else {
                break;
            }
        }
    }

    waitUntillElementInvisible(elementPath) {
        var timedelay = 0
        while (true) {

            if (elementPath.isDisplayed()) {
                // browser.waitUntil(!browser.isDisplayed(elementPath),3000);
                browser.pause(this.defaultwait)
                timedelay = timedelay + 1;  
                if (timedelay == 60) {
                    //browser.saveScreenshot();
                    throw "Something went wrong, element is still visible after timeout";
                    break;
                }
                continue;

            }
            else {
                break;
            }
        }
    }

    waitForElementExists(elementPath) {
        browser.pause(this.defaultwait);
        elementPath.waitForExist(this.defaultwait);
    }

    ClearInput(elementPath) {
        let valueLength = elementPath.getValue().length;
        let backSpaces = new Array(valueLength).fill('Backspace');
        elementPath.setValue(backSpaces);
    }

    returnPostfix() {
        return global.postfix
    }


    waitForDefaultTimeOut() {
        browser.pause(this.defaultwait);
    }

    /**
     *Method to scrolling to a element location
     * @param {*} elementPath 
     */
    scrollIntoView(elementPath) {
        var location = browser.getLocation(elementPath)
        browser.scroll(0, location);
        browser.pause(1000);
    }
}
module.exports = new UtilityClass();