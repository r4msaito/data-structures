/*
 * Linked list
 */

'use strict';


/*
 * @type string Spcifies whether its a single
 * or double linked list. Pass ('single' or 'double')	
 */

function dsLinkedList(type) {
    this.type = type || 'single';
    this.head = null;
    this.nodeCount = 0;

    this.insert = function(nodeValue, position) {
        if (!nodeValue)
            return false;

        var position = position || 1;

        if (position > 1) {
            (position > this.nodeCount) ? position = this.nodeCount: position;
            var currNode = this.head;
            var bfrNode = null;
            var posInc = 1;

            while (posInc <= position - 1) {
                bfrNode = currNode;
                currNode = currNode.next;
                posInc++;
            }

            var node = {
                next: currNode,
                value: nodeValue
            };

            bfrNode.next = node;
            this.nodeCount++;
            return node;

        } else {
            var node = {
                next: this.head,
                value: nodeValue
            };

            this.head = node;
            this.nodeCount++;
            return node;

        }

        return false;

    };

    this.getAll = function() {
        var nodes = [];
        var currNode = this.head;
        for (var i = 0; i < this.nodeCount; i++) {
            nodes.push(currNode);

            if (currNode.next !== null)
                currNode = currNode.next;
        }

        return nodes;
    };

    this.peek = function(position) {
        if (isNaN(position))
            return false;

        var currNode = this.head;
        (position > this.nodeCount) ? position = this.nodeCount: '';

        for (var i = 1; i <= this.nodeCount; i++) {
            if (i === position)
                return currNode.value;

            currNode = currNode.next;
        }
    };

    this.deleteAt = function(position) {
        var position = position || 1;

        if (isNaN(position))
            return false;

        if (position > 1 && this.nodeCount > 1) {
            var currNode = this.head;
            var bfrNode = null;
            position = (position > this.nodeCount) ? this.nodeCount : position; 

            for (var i = 1; i < position; i++) {
              if(currNode.next !== null) {
                    bfrNode = currNode;
                    currNode = currNode.next;
                }
            }

            bfrNode.next = currNode.next;
            this.nodeCount--;
        } else {
            this.head = (this.nodeCount > 1) ? this.head.next : null;
            this.nodeCount--;
        }
    };

    this.delete = function(value) {
        if(isNaN(value))
            return false;

        if(this.nodeCount === 0)
            return true;

        var currNode = this.head;
        var bfrNode = null;

        while (currNode !== null) {
            if(currNode.value === value) {
                if(bfrNode.null && currNode.next === null) {
                    this.head = null;
                    this.nodeCount--;
                    break;
                }

                bfrNode.next = currNode.next;
                this.nodeCount--;
            }

            bfrNode = currNode;
            currNode = currNode.next;
        }

        return true;
    };

    this.sort = function() {

    };

    this.merge = function() {

    };

    this.clear = function() {
        this.head = null;
        return true;
    };
}