import { TreeNode } from "./tree-node";

export function preorderIter<T>(root: TreeNode<T> | null): void {
  if (root === null) return;

  const stack: (TreeNode<T> | null)[] = [];

  let curr: TreeNode<T> | null = root;

  while (true) {
    if (curr === null) {
      curr = stack.pop() || null;
      if (curr) {
        curr = curr.right;
      } else {
        break;
      }
    } else {
      console.log(curr.value);
      stack.push(curr);
      curr = curr.left;
    }
  }
}
