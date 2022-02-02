import { ProdCode } from '../app/Assignment_Code';

describe("Scenario: Test the text according to the Business Login", function () {
    it("To test the length of each line in the output", function () {
        let inputString: string = "We are the only company to have been named one of the & Best Companies To Work For every year since 2001 \/";
        let prodCode = new ProdCode();
        let lines = prodCode.getAllLines(inputString);
        for (let line of lines) {
            expect(line.length).toBeLessThanOrEqual(35);
        }
    });
    it("To test the & Escape Character in the output", function () {
        let inputString: string = "We are the only company to have been named one of the & Best Companies To Work For every year since 2001 \/";
        let prodCode = new ProdCode();
        let lines = prodCode.getAllLines(inputString);
        expect(lines[2]).toContain("Best Companies");
    });

    it("To test all others Escape Character in the output", function () {
        let inputString: string = "We are the only company to have been named one of the & Best Companies To Work For every year since 2001 \/";
        let prodCode = new ProdCode();
        let lines = prodCode.getAllLines(inputString);
        for (let line of lines) {
            expect(line.match(/\\[a-z,\\,"]/g)).toBeNull();
        }
    });

    it("To test consicutive separator Character in the output", function () {
        let inputString: string = "We are the only company to have been named one of the && Best Companies \// To Work For every year since 2001 \/";
        let prodCode = new ProdCode();
        let lines = prodCode.getAllLines(inputString);
        expect(lines.length).toBe(4);
    });
    
});