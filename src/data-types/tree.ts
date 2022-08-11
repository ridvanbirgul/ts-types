namespace DataType {
    export class TreeNode<Type>{
        private val: Type;
        private left: TreeNode<Type> | null;
        private right: TreeNode<Type> | null;

        constructor(val: Type, left: TreeNode<Type> | null, right: TreeNode<Type> | null) {
            this.val = val;
            this.left = left;
            this.right = right;
        }
        get Left(): TreeNode<Type> | null {
            return this.left;
        }
        set Left(left: TreeNode<Type> | null) {
            this.left = left;
        }
        get Right(): TreeNode<Type> | null {
            return this.right;
        }
        set Right(right: TreeNode<Type> | null) {
            this.right = right;
        }
        get Val(): Type {
            return this.val;
        }
    }
}