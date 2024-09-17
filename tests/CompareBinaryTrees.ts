import compare from "CompareBinaryTrees";
import { tree, tree2 } from "data/tree";

test("Compare Binary Trees", function () {
    expect(compare(tree, tree)).toEqual(true);
    expect(compare(tree, tree2)).toEqual(false);
});
