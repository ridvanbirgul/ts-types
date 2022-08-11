import Queue from "../src/data-types/queue";


describe('Test queue data type for numbers', () => {

    var queue = new Queue<number>();

    beforeEach(() => {
        queue.clear();
    });

    test("Test add function", () => {
        queue.add(5);
        expect(queue.count).toEqual(1);
    });

    test('Test peek function', () => {
        queue.add(5);
        queue.add(6);
        queue.add(9);
        expect(queue.peek()).toBe(5);
    });

    test('Test peek function for undefined', () => {
        expect(queue.peek()).toBeUndefined();
    });

    test('Test remove function', () => {
        queue.add(12);
        queue.add(35);
        queue.add(65);
        expect(queue.remove()).toBe(12);
        expect(queue.remove()).toBe(35);
        expect(queue.remove()).toBe(65);
        expect(queue.remove()).toBeUndefined();
    });

    test('Test count function', () => {
        queue.add(32);
        queue.add(12);
        queue.add(65);
        let count = queue.count;
        while (count > -1) {
            expect(queue.count).toBe(count);
            queue.remove();
            count--;
        }
    });

    test('Test isEmpty function', () => {
        expect(queue.isEmpty).toBeTruthy();
        queue.add(5);
        expect(queue.isEmpty).toBeFalsy();
    });

});