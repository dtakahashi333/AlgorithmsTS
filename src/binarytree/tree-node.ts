export class TreeNode<T> {
  value: T;
  left: TreeNode<T> | null = null;
  right: TreeNode<T> | null = null;

  constructor(_value: T) {
    this.value = _value;
  }
}

export function buildTree<T>(values: (T | null)[]): TreeNode<T> | null {
  if (values.length === 0 || values[0] === null) {
    return null;
  }

  const root = new TreeNode<T>(values[0]);
  const queue = [root];
  let i = 1;

  while (queue.length > 0) {
    const curr = queue.shift();
    if (curr) {
      if (values.length > i && values[i] !== null) {
        curr.left = new TreeNode<T>(values[i] as T);
        queue.push(curr.left);
      }
      i++;
      if (values.length > i && values[i] !== null) {
        curr.right = new TreeNode<T>(values[i] as T);
        queue.push(curr.right);
      }
      i++;
    }
  }

  return root;
}

export type TreeNodeNum = TreeNode<number>;

type BuildTreeFunc<T> = (values: (T | null)[]) => TreeNode<T> | null;
export const buildTreeNum: BuildTreeFunc<number> = buildTree;
