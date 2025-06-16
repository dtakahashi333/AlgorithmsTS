import { buildTree } from "./tree-node";
import { postorderIter, postorderRecur } from "./postorder";

test("[1,null,2,3], iteration", () => {
  const spy = jest.spyOn(console, "log").mockImplementation(() => {});
  const values = [1, null, 2, 3];
  const root = buildTree(values);
  postorderIter(root);
  expect(spy).toHaveBeenCalledWith(3);
  expect(spy).toHaveBeenCalledWith(2);
  expect(spy).toHaveBeenCalledWith(1);
  spy.mockRestore();
});

test("[1,2,3,4,5,null,8,null,null,6,7,9], iteration", () => {
  const spy = jest.spyOn(console, "log").mockImplementation(() => {});
  const values = [1, 2, 3, 4, 5, null, 8, null, null, 6, 7, 9];
  const root = buildTree(values);
  postorderIter(root);
  expect(spy).toHaveBeenCalledWith(4);
  expect(spy).toHaveBeenCalledWith(6);
  expect(spy).toHaveBeenCalledWith(7);
  expect(spy).toHaveBeenCalledWith(5);
  expect(spy).toHaveBeenCalledWith(2);
  expect(spy).toHaveBeenCalledWith(9);
  expect(spy).toHaveBeenCalledWith(8);
  expect(spy).toHaveBeenCalledWith(3);
  expect(spy).toHaveBeenCalledWith(1);
  spy.mockRestore();
});

test("[], iteration", () => {
  const spy = jest.spyOn(console, "log").mockImplementation(() => {});
  const values = [] as Array<number>;
  const root = buildTree(values);
  postorderIter(root);
  expect(spy).not.toHaveBeenCalled();
  spy.mockRestore();
});

test("[1], iteration", () => {
  const spy = jest.spyOn(console, "log").mockImplementation(() => {});
  const values = [1];
  const root = buildTree(values);
  postorderIter(root);
  expect(spy).toHaveBeenCalledWith(1);
  spy.mockRestore();
});

test("[1,null,2,3], recursion", () => {
  const spy = jest.spyOn(console, "log").mockImplementation(() => {});
  const values = [1, null, 2, 3];
  const root = buildTree(values);
  postorderRecur(root);
  expect(spy).toHaveBeenCalledWith(3);
  expect(spy).toHaveBeenCalledWith(2);
  expect(spy).toHaveBeenCalledWith(1);
  spy.mockRestore();
});

test("[1,2,3,4,5,null,8,null,null,6,7,9], recursion", () => {
  const spy = jest.spyOn(console, "log").mockImplementation(() => {});
  const values = [1, 2, 3, 4, 5, null, 8, null, null, 6, 7, 9];
  const root = buildTree(values);
  postorderRecur(root);
  expect(spy).toHaveBeenCalledWith(4);
  expect(spy).toHaveBeenCalledWith(6);
  expect(spy).toHaveBeenCalledWith(7);
  expect(spy).toHaveBeenCalledWith(5);
  expect(spy).toHaveBeenCalledWith(2);
  expect(spy).toHaveBeenCalledWith(9);
  expect(spy).toHaveBeenCalledWith(8);
  expect(spy).toHaveBeenCalledWith(3);
  expect(spy).toHaveBeenCalledWith(1);
  spy.mockRestore();
});

test("[], recursion", () => {
  const spy = jest.spyOn(console, "log").mockImplementation(() => {});
  const values = [] as Array<number>;
  const root = buildTree(values);
  postorderRecur(root);
  expect(spy).not.toHaveBeenCalled();
  spy.mockRestore();
});

test("[1], recursion", () => {
  const spy = jest.spyOn(console, "log").mockImplementation(() => {});
  const values = [1];
  const root = buildTree(values);
  postorderRecur(root);
  expect(spy).toHaveBeenCalledWith(1);
  spy.mockRestore();
});
