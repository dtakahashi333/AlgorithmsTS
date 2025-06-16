import { TreeNode } from "./tree-node";

export function postorderIter<T>(root: TreeNode<T> | null) {
  if (root === null) return;

  const stack1: (TreeNode<T> | null)[] = [root];
  const stack2: (TreeNode<T> | null)[] = [];

  let curr: TreeNode<T> | null;

  while (stack1.length > 0) {
    curr = stack1.pop() || null;
    if (curr) {
      stack2.push(curr);
      if (curr.left) stack1.push(curr.left);
      if (curr.right) stack1.push(curr.right);
    }
  }

  while (stack2.length > 0) {
    curr = stack2.pop() || null;
    if (curr) console.log(curr.value);
  }
}

export function postorderRecur<T>(root: TreeNode<T> | null): void {
  return postorderRecurHelper(root);
}

function postorderRecurHelper<T>(node: TreeNode<T> | null): void {
  if (node === null) return;
  if (node.left) postorderRecurHelper(node.left);
  if (node.right) postorderRecurHelper(node.right);
  console.log(node.value);
}
