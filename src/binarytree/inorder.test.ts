import { buildTree } from "./tree-node";
import { inorderIter } from "./inorder";

test("[1,null,2,3]", () => {
  const values = [1, null, 2, 3];
  const root = buildTree(values);
  inorderIter(root);
});

test("[1,2,3,4,5,null,8,null,null,6,7,9]", () => {
  const values = [1, 2, 3, 4, 5, null, 8, null, null, 6, 7, 9];
  const root = buildTree(values);
  inorderIter(root);
});

test("[]", () => {
  const values = [] as Array<number>;
  const root = buildTree(values);
  inorderIter(root);
});

test("[1]", () => {
  const values = [1];
  const root = buildTree(values);
  inorderIter(root);
});
