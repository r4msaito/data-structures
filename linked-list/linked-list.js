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
    this.size = 0;

    this.add = function(nodeValue, position) {
        if (!nodeValue)
            return false;

        var position = position || 1;

        if (position > 1) {
            (position > this.size) ? position = this.size: position;
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
            this.size++;
            return node;

        } else {
            var node = {
                next: this.head,
                value: nodeValue
            };

            this.head = node;
            this.size++;
            return node;

        }

        return false;

    };

    this.getAllNodes = function() {
        var nodes = [];
        var currNode = this.head;
        console.log(this.size);

        while (currNode !== null) {
            nodes.push(currNode);
            currNode = currNode.next;
        }

        return nodes;
    };

    this.peek = function(position) {
        if (isNaN(position))
            return false;

        var currNode = this.head;
        (position > this.size) ? position = this.size: '';

        for (var i = 1; i <= this.size; i++) {
            if (i === position)
                return currNode.value;

            currNode = currNode.next;
        }
    };

    this.deleteAt = function(position) {
        var position = position || 1;

        if (isNaN(position))
            return false;

        if (position > 1 && this.size > 1) {
            var currNode = this.head;
            var bfrNode = null;
            position = (position > this.size) ? this.size : position;

            for (var i = 1; i < position; i++) {
                if (currNode.next !== null) {
                    bfrNode = currNode;
                    currNode = currNode.next;
                }
            }

            bfrNode.next = currNode.next;
            this.size--;
        } else {
            this.head = (this.size > 1) ? this.head.next : null;
            this.size--;
        }
    };

    this.delete = function() {
        this.deleteAt(1);
    };

    this.sort = function() {

    };

    this.merge = function(list) {
        console.log('size: ' + list.size);
        if (list.size === 0)
            return;

        var currNode = this.head;

        while (currNode.next !== null)
            currNode = currNode.next;

        currNode.next = list.head;
        return true;
    };

    this.clear = function() {
        delete this.head.next;
        delete this.head.value;
        this.head = null;
        this.size = 0;
        return true;
    };

}