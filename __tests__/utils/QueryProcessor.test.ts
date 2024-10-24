import QueryProcessor from "../../utils/QueryProcessor";
import '@testing-library/jest-dom'

describe("QueryProcessor", () => {
    test("should return a string", () => {
        const query = "test";
        const response: string = QueryProcessor(query);
        expect(typeof response).toBe("string");
    });

    test('should return shakespeare description', () => {
        const query = "shakespeare";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
            "English poet, playwright, and actor, widely regarded as the greatest " +
            "writer in the English language and the world's pre-eminent dramatist."
        ));
    });

    test('should return my andrew id', () => {
        const query = "what's your Andrew ID?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("sramin"); // Update with your actual Andrew ID
    });

    test('should return my name', () => {
        const query = "what is your name?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("sramin");
    });

    test('should return the result of 65 plus 51', () => {
        const query = "What is 65 plus 51?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("116");
    });

    test('should return the result of dynamic addition', () => {
        const query = "What is 123 plus 456?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("579");
    });

    test('should return the largest number', () => {
        const query = "Which of the following numbers is the largest: 71, 72, 54?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("72");
    });

    test('should return the largest number for 62, 14, 27', () => {
        const query = "Which of the following numbers is the largest: 62, 14, 27?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("62");
    });

    test('should return numbers that are both squares and cubes', () => {
        const query = "Which of the following numbers is both a square and a cube: 3489, 1072, 25, 216, 1056, 4274, 64?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("64");
    });

    test('should return numbers that are both squares and cubes', () => {
        const query = "Which of the following numbers is both a square and a cube: 1521, 4096, 729, 577, 3190, 1246, 4082?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("4096, 729");
    });

});