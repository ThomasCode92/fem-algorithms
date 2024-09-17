import LinkedList from "DoublyLinkedList";
import { test_list } from "utils/list-test";

test("DoublyLinkedList", function () {
    const list = new LinkedList<number>();
    test_list(list);
});
