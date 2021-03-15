class Formatter {
    static capitalize(string) {
        let newString = string[0].toUpperCase() + string.substr(1);
        return newString;
    }
    /**
     *  @param {string} string - description
     */
    static sanitize(string) {
        let i = 0;
        const check = new RegExp("^([a-zA-Z'-]|\\s|){1}$");
        while (i < string.length) {
            if (check.test(string[i])) {
                i++;
            } else {
                string = string.substr(0, i) + string.substr(i + 1);
            }
        }
        return string;
    }
    static titleize(string) {
        let wordArray = this.sanitize(string).split(" ");
        const check = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"];
        wordArray.forEach((word, ind, arr) => {
            if (!check.includes(word)) {
                arr[ind] = this.capitalize(word);
            } else if (ind === 0) {
                arr[ind] = this.capitalize(word);
            }
        });
        return wordArray.join(" ");
    }
}
