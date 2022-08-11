import Stack from "../src/data-types/stack";

describe('Test stack class with number type', () => {
    var stack = new Stack<number>();

    beforeEach(() => {
        stack.clear();
    });

    test('Test count function', () => {
        stack.push(45);
        expect(stack.count).toBe(1);
    });

    test('Test clear function', () => {
        stack.push(45);
        stack.push(36);
        expect(stack.count).toBe(2);
        stack.clear();
        expect(stack.count).toBe(0);
    });

    test('Test isEmpty function', () => {
        stack.push(45);
        expect(stack.isEmpty).toBeFalsy();
        stack.clear();
        expect(stack.isEmpty).toBeTruthy();
    });

    test('Test push function', () => {
        stack.push(5);
        expect(stack.count).toBe(1);
    });

    test('Test pop function', () => {
        stack.push(45);
        stack.push(36);
        expect(stack.pop()).toBe(36);
        expect(stack.pop()).toBe(45);
    });

    test('Test peek function', () => {
        stack.push(36);
        expect(stack.peek()).toBe(36);
        expect(stack.isEmpty).toBeFalsy();
    });

    test('Test isExist function', () => {
        stack.push(65);
        expect(stack.isExist(65)).toBeTruthy();
        expect(stack.isExist(23)).toBeFalsy();
    });
});