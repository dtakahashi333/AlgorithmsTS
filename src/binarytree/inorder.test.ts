import { buildTree } from "./tree-node";
import { inorderIter, inorderRecur } from "./inorder";

test("[1,null,2,3], iteration", () => {
  const values = [1, null, 2, 3];
  const root = buildTree(values);
  inorderIter(root);
});

test("[1,2,3,4,5,null,8,null,null,6,7,9], iteration", () => {
  const values = [1, 2, 3, 4, 5, null, 8, null, null, 6, 7, 9];
  const root = buildTree(values);
  inorderIter(root);
});

test("[], iteration", () => {
  const values = [] as Array<number>;
  const root = buildTree(values);
  inorderIter(root);
});

test("[1], iteration", () => {
  const values = [1];
  const root = buildTree(values);
  inorderIter(root);
});

test("[1,null,2,3], recursion", () => {
  const values = [1, null, 2, 3];
  const root = buildTree(values);
  inorderRecur(root);
});

test("[1,2,3,4,5,null,8,null,null,6,7,9], recursion", () => {
  const values = [1, 2, 3, 4, 5, null, 8, null, null, 6, 7, 9];
  const root = buildTree(values);
  inorderRecur(root);
});

test("[], recursion", () => {
  const values = [] as Array<number>;
  const root = buildTree(values);
  inorderRecur(root);
});

test("[1], recursion", () => {
  const values = [1];
  const root = buildTree(values);
  inorderRecur(root);
});
