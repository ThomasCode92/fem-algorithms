import SinglyLinkedList from "SinglyLinkedList";
import { test_list } from "utils/list-test";

test("linked-list", function () {
    const list = new SinglyLinkedList<number>();
    test_list(list);
});
