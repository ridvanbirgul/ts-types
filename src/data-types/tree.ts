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

    export class BinaryTree<Type> {
        private rootNode: TreeNode<Type> | null;

        constructor() {
            this.rootNode = null;
        }

        insert(value: Type) {
            if (this.rootNode) {
                let nodeAdded: boolean = false;
                let node = this.rootNode;
                while (!nodeAdded) {
                    if (node.Val > value) {
                        if (node.Left)
                            node = node.Left;
                        else {
                            node.Left = new TreeNode(value, null, null);
                            nodeAdded = true;
                        }
                    } else {
                        if (node.Right) {
                            node = node.Right;
                        } else {
                            node.Right = new TreeNode(value, null, null);
                            nodeAdded = true;
                        }
                    }
                }
            } else {
                this.rootNode = new TreeNode(value, null, null);
            }
        }

        remove(value: Type): boolean {
            if (this.rootNode) {
                let node = this.rootNode;
                let parent = null;
                while(node){
                    if(node.Val === value){
                        if(parent){
                            
                        }
                    }
                }
            }

            return false;
        }

    }
}