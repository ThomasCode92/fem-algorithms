import ArrayList from "ArrayList";
import { test_list } from "utils/list-test";

test("array-list", function () {
    const list = new ArrayList<number>(3);
    test_list(list);
});
