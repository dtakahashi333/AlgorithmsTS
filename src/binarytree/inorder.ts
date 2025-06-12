import { TreeNode } from "./tree-node";

export function inorderIter<T>(root: TreeNode<T> | null): void {
  if (root === null) return;

  const stack: (TreeNode<T> | null)[] = [];

  let curr: TreeNode<T> | null = root;

  while (true) {
    if (curr) {
      stack.push(curr);
      curr = curr.left;
    } else {
      if (stack.length === 0) break;
      curr = stack.pop() || null;
      if (curr) {
        console.log(curr.value);
        curr = curr.right;
      }
    }
  }
}

export function inorderRecur<T>(root: TreeNode<T> | null): void {
  if (root === null) {
    return;
  }
  inorderRecurHelper(root);
}

function inorderRecurHelper<T>(node: TreeNode<T> | null): void {
  if (node === null) {
    return;
  }
  inorderRecurHelper(node.left);
  console.log(node.value);
  inorderRecurHelper(node.right);
}
