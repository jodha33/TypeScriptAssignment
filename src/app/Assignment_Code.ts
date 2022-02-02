export class ProdCode {
    wordsArray: string[] = [];
    inputString: string = "";
    result: string[] = [];


    // This method returns array of all lines which are filtered as per business logic
    getAllLines(inputString: string): string[] {
        
        this.inputString = inputString;

        // Remove all the escape character other than '&' and '\' using Regex
        this.inputString = this.inputString.replace(/\\[a-z,\\,"]/g, "");

        this.wordsArray = this.wordsArray.filter((val) => {
            return val != "";
        });

        // Split into Array of words
        this.wordsArray = this.inputString.split(" ");
        let tempArray = this.wordsArray;

        console.log("---------------------Result-------------------------");

        // Run this while loop until the all lines are printed
        while (this.wordsArray.length != 0) {
            let tempLine = this.getLine();   // It will fetch line text in each itration
            console.log(tempLine);
            this.result.push(tempLine);
            this.wordsArray = this.wordsArray.filter((val) => {   // This statement will remove empty string in the array values
                return val != "";
            });
        }
        console.log("-----------------------------------------------------");
        return this.result;
    }

    //This Function will return line
    getLine(): string {
        let lineToPrint: string = "";
        let wordSize = 0;
        let tempArray = this.wordsArray;

        // Iterate over the array until max length limit(35) is reached or speacial character(/, &) is found in a Line
        for (let i: number = 0; i < tempArray.length; i++) {
            if (tempArray[i].indexOf("&") == -1 && tempArray[i].indexOf("\/") == -1) {
                if ((wordSize + tempArray[i].length + 1) <= 35) {
                    lineToPrint = lineToPrint.concat(tempArray[i] + " ");
                    wordSize = wordSize + tempArray[i].length + 1;
                    this.wordsArray[i] = "";  // replace the words with empty string 
                } else
                    break;
            } else {
                this.wordsArray[i] = "";
                break;
            }
        }
        return lineToPrint;
    }
};
