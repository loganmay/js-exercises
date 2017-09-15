// adds a new node to the bst
function add(contact, tree) {
    if (tree === null) {
        return {left: null, name: contact, right: null};
    } else {
        if (contact < tree.name) return {left: add(contact, tree.left), name: tree.name, right: tree.right};
        else return {left: tree.left, name: tree.name, right: add(contact, tree.right)};
    }
};
// determines how many nodes match the pattern of strings passed in as partial
function find(partial, tree) {
    if (tree === null) return 0;
    else return find(partial, tree.left) + (tree.name.slice(0, partial.length) === partial ? 1 : 0) + find(partial, tree.right);
};
