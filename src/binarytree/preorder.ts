import { TreeNode } from "./tree-node";

export function preorderIter<T>(root: TreeNode<T> | null): void {
  if (root === null) return;

  const stack: (TreeNode<T> | null)[] = [];

  let curr: TreeNode<T> | null = root;

  while (true) {
    if (curr === null) {
      if (stack.length === 0) break;
      curr = stack.pop() || null;
      if (curr) {
        curr = curr.right;
      }
    } else {
      console.log(curr.value);
      stack.push(curr);
      curr = curr.left;
    }
  }
}

export function preorderRecur<T>(root: TreeNode<T> | null) {
  preorderRecurHelper(root);
}

function preorderRecurHelper<T>(node: TreeNode<T> | null) {
  if (node === null) return;
  console.log(node.value);
  preorderRecurHelper(node.left);
  preorderRecurHelper(node.right);
}
