/*
 * Binary Search Trees
 */

(function(window) {
    'use strict';

    function Node() {
        this.val = null;
        this.left = null;
        this.right = null;
    }

    function BSTree() {
        this.root = null;
    }

    //Prototype properties
    BSTree.prototype.allowedTraversals = ['in', 'pre', 'post', 'level'];

    //Prototype methods
    BSTree.prototype.getRoot = function() {
        return this.root;
    };

    /*
     * Create a new node
     */

    BSTree.prototype.createNode = function(value) {
        var node = new Node();
        node.val = value;
        return node;
    }


    /*
     * Construct a tree node from array
     */

    BSTree.prototype.constructTree = function(nodesArr) {

    };


    /*
     * Insertion
     */

    BSTree.prototype.insert = function(value, currNode) {
        currNode = currNode || this.root;

        if (this.root === null) {
            this.root = this.createNode(value);
        } else if (value < currNode.val) {
            if (currNode.left === null) {
                currNode.left = this.createNode(value);
            } else {
                this.insert(value, currNode.left);
            }
        } else if (value > currNode.val) {
            if (currNode.right === null) {
                currNode.right = this.createNode(value);
            } else {
                this.insert(value, currNode.right);
            }
        }
    };


    /*
     * Delete a node
     */

    BSTree.prototype.remove = function(value) {

    };


    /*
     * Find a smallest node in a subtree
     */

    BSTree.prototype.getNextBiggestNode = function(node, nextBiggestNode) {
        if (node === null)
            return nextBiggestNode;

        nextBiggestNode = (typeof nextBiggestNode === 'undefined') ? node : nextBiggestNode;

        if (node.val < nextBiggestNode.val)
            nextBiggestNode = node;

        nextBiggest = this.getNextBiggest(node.right, nextBiggestNode, height);
        


        return nextBiggest;
    };


    /*
     * Traversal
     */

    BSTree.prototype.traverse = function(type) {
        var type = (typeof type === 'undefined') ? 'in' : type;

        if (this.allowedTraversals.indexOf(type) === -1)
            type = 'in';

        switch (type) {
            case 'in':
                return this.inOrderTraversal();

            case 'pre':
                return this.preOrderTraversal();

            case 'post':
                return this.postOrderTraversal();

            case 'level':
                return this.levelOrderTraversal();
        }
    };


    /*
     * Traversals
     */

    BSTree.prototype.inOrderTraversal = function() {
        return this.inOrder(this.root);
    };

    BSTree.prototype.inOrder = function(node) {
        if (node === null)
            return;

        var nodeValues = [];
        var leftSearch = this.inOrder(node.left);
        if (leftSearch)
            nodeValues = nodeValues.concat(leftSearch);

        nodeValues.push(node.val);

        var rightSearch = this.inOrder(node.right);
        if (rightSearch)
            nodeValues = nodeValues.concat(rightSearch);

        return nodeValues;

    };

    //Preorder traversal
    BSTree.prototype.preOrderTraversal = function() {
        return this.preOrder(this.root);
    };

    BSTree.prototype.preOrder = function(node) {
        if (node === null)
            return;

        var nodeValues = [];
        nodeValues.push(node.val);

        var leftSearch = this.preOrder(node.left);
        if (leftSearch)
            nodeValues = nodeValues.concat(leftSearch);

        var rightSearch = this.preOrder(node.right);
        if (rightSearch)
            nodeValues = nodeValues.concat(rightSearch);

        return nodeValues;
    }

    //Post order traversal
    BSTree.prototype.postOrderTraversal = function() {
        return this.postOrder(this.root);
    };

    BSTree.prototype.postOrder = function(node) {
        if (node === null)
            return;

        var nodeValues = [];
        var leftSearch = this.postOrder(node.left);
        if (leftSearch)
            nodeValues = nodeValues.concat(leftSearch);

        var rightSearch = this.postOrder(node.right);
        if (rightSearch)
            nodeValues = nodeValues.concat(rightSearch);

        nodeValues.push(node.val);

        return nodeValues;
    };

    //Level order traversal
    BSTree.prototype.levelOrderTraversal = function() {
        return this.levelOrder(this.root);
    };

    BSTree.prototype.levelOrder = function(node) {
        var processNodes = [node];
        var nodes = [];

        while (processNodes.length >= 1) {
            var nextNodes = [];
            for (var i = 0; i < processNodes.length; i++) {
                nodes.push(processNodes[i].val);

                if (processNodes[i].left !== null)
                    nextNodes.push(processNodes[i].left);

                if (processNodes[i].right !== null)
                    nextNodes.push(processNodes[i].right);
            }

            processNodes = nextNodes;
        }

        return nodes;
    };

    /*
     * Get tree height
     */

    BSTree.prototype.getHeight = function() {
        return this.gh(this.root);
    };

    BSTree.prototype.gh = function(node, currentHeight, maxHeight) {
        if (node === null)
            return maxHeight;

        currentHeight = (typeof currentHeight === 'undefined') ? 0 : currentHeight + 1;
        maxHeight = (typeof maxHeight === 'undefined') ? 0 : maxHeight;

        if (currentHeight > maxHeight)
            maxHeight = currentHeight;

        maxHeight = this.gh(node.left, currentHeight, maxHeight);
        maxHeight = this.gh(node.right, currentHeight, maxHeight);

        return maxHeight;
    }

    window.dsBSTree = BSTree;

}(window));