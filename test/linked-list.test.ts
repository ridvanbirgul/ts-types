import LinkedList, { LinkedListNode } from '../src/data-types/linked-list';

describe('Test linked list class', () => {
    var linkedList = new LinkedList<number>();

    beforeEach(() => {
        linkedList.clear();
    })

    test('Test add function', () => {
        linkedList.add(25);
        expect(linkedList.count).toBe(1);
    });

    test('Test addFirst function', () => {
        linkedList.add(25);
        linkedList.add(36);
        linkedList.addFirst(10);
        expect(linkedList.getFirst()?.value).toBe(10);
    });

    test('Test addLast function', () => {
        linkedList.add(25);
        linkedList.addLast(35);
        linkedList.addFirst(10);
        linkedList.addLast(36);
        expect(linkedList.getLast()?.value).toBe(36);
    });

    test('Test removeFirst function', () => {
        linkedList.add(23);
        linkedList.add(38);
        linkedList.addLast(35);
        linkedList.addFirst(96);
        expect(linkedList.getFirst()?.value).toBe(96);
        expect(linkedList.removeFirst()).toBeTruthy();
        expect(linkedList.getFirst()?.value).toBe(23);
        linkedList.clear();
        expect(linkedList.removeFirst()).toBeFalsy();
    });

    test('Test removeLast function', () => {
        linkedList.add(9);
        linkedList.add(4);
        linkedList.addLast(36);
        linkedList.addFirst(45);
        linkedList.addLast(8);
        expect(linkedList.getLast()?.value).toBe(8);
        expect(linkedList.removeLast()).toBeTruthy();
        expect(linkedList.getLast()?.value).toBe(36);
        linkedList.clear();
        expect(linkedList.removeLast()).toBeFalsy();
    });

    test('Test contains function', () => {
        linkedList.add(25);
        linkedList.addFirst(12);
        linkedList.addLast(18);
        expect(linkedList.contains(5)).toBeFalsy();
        expect(linkedList.contains(12)).toBeTruthy();
    });

    test('Test getItem function', () => {
        linkedList.addFirst(12);
        linkedList.addFirst(10);
        linkedList.add(5);
        linkedList.addLast(89);
        expect(linkedList.getItem(3)?.value).toBe(89);
        expect(linkedList.getItem(1)?.value).toBe(12);
        expect(linkedList.getItem(10)).toBeNull();
    });

    test('Test getFirst function', () => {
        linkedList.addLast(15);
        linkedList.add(5);
        linkedList.addFirst(63);
        linkedList.addFirst(95);
        expect(linkedList.getFirst()?.value).toBe(95);
        expect(linkedList.removeFirst()).toBeTruthy();
        expect(linkedList.getFirst()?.value).toBe(63);
    });

    test('Test getLast function', () => {
        linkedList.add(25);
        linkedList.addFirst(62);
        linkedList.addLast(85);
        linkedList.addFirst(52);
        expect(linkedList.getLast()?.value).toBe(85);
        expect(linkedList.removeLast()).toBeTruthy();
        expect(linkedList.getLast()?.value).toBe(25);
    });
});
