/*
 * Trees
 */

(function(window) {
    'use strict';

    var node = {
        value: null,
        left: null,
        right: null
    };

    function Tree() {
        this.root = null;
    }

    //Prototype properties
    Tree.prototype.allowedTraversals = ['inorder', 'preorder', 'postorder'];

    //Prototype methods
    Tree.prototype.insert = function(value) {
    	
    };

    Tree.prototype.print = function(value) {
        console.log(value);
    }

    Tree.prototype.traverse = function(type) {
        var type = (typeof type === 'undefined') ? 'inorder' : type;
        
        if (this.allowedTraversals.indexOf(type) === -1)
            type = 'inorder';

        case 'inorder':
            return this.inOrderTraversal();

        case 'preorder':
            return this.preOrderTraversal();

        case 'postorder':
            return this.postOrderTraversal();
    };

    Tree.prototype.inOrderTraversal = function() {};
    Tree.prototype.preOrderTraversal = function() {};
    Tree.prototype.postOrderTraversal = function() {};
    Tree.prototype.remove = function(value) {};

    window.dsTree = Tree;
}(window));