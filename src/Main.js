exports["createNode"] = function() {
    var node = document.createElement("div");
    return node;
}

exports["hideNode"] = function(node) {
    return function() {
        node.style.display = "none";
    }
}

exports["addClass"] = function(node) {
    return function(className) {
        return function() {
            node.classList.add(className);
        }
    }
}

exports["removeClass"] = function(node) {
    return function(className) {
        return function() {
            node.classList.remove(className);
        }
    }
}

exports["getNode"] = function() {
    return {}
}

exports["showJson"] = function(text) {
    return function() {
        document.getElementById("content").textContent = JSON.stringify(text, null, 4); ;
    }
}

exports["addText"] = function(node) {
    return function(text) {
        return function() {
            node.textContent = name;
        }
    }
}


function closeAll() {
    openChildren.forEach(function(item){
        if (item.style) {
            item.style.display = "none";
        }
    });
}


function showContent(node, name, contentJson, level) {
    if (level < 2) {
        var children = node.childNodes;

        closeAll();

        children.forEach(function(item){
            if (item.style) {
                openChildren.push(item)

                if (item.style.display == "none" || !item.style.display)
                    item.style.display = "block";
                else
                    item.style.display = "none";
            }
        });

    } else  {
        document.getElementById("content").textContent = JSON.stringify(contentJson[name], null, 4); ;
    }

}

function addUnderline(node) {
    node.classList.add("highlight");

    if (nodeClicked)
    nodeClicked.classList.remove("highlight");

    nodeClicked = node;
}

function createLevel(name, parentKey, contentJson, rootNode, level) {
    var node = document.createElement("div");

    node.className = "level l-" + level;
    node.textContent =  name;

    node.addEventListener("click", function(e) {
        e.stopPropagation();
        addUnderline(node);
        console.log("clicked");
        showContent(node, parentKey + "," + name, contentJson, level);
    });

    rootNode.append(node);

    return node;
}

function createSidebarRecursive(sideBarJson, parentKey, contentJson ,rootNode, level) {
    if (!sideBarJson)
        return

    var keys = Object.keys(sideBarJson);

    for (var i =0; i<keys.length; i++) {
        var node = createLevel(keys[i], parentKey, contentJson,rootNode, level);

        createSidebarRecursive(sideBarJson[keys[i]], keys[i], contentJson, node, level + 1);
    
}
}

function createSidebar(parsedJson, rootNode) {
    createSidebarRecursive(parsedJson.sideBarJson, "", parsedJson.contentJson, rootNode, 1);
}


function parseJsonRecursive(json, parentKey, sideBarJson, contentJson, level) {
    if (!json || typeof json !== "object")
        return

    var keys = Object.keys(json);
    var _sideBarJson;

    for (var i =0; i<keys.length; i++) {

        if (level < 3) {
            sideBarJson[keys[i]] = {};
        }


        contentJson[parentKey  + "," + keys[i]] = json[keys[i]];

        if (!sideBarJson[keys[i]])
            _sideBarJson = {};
        else
            _sideBarJson = sideBarJson[keys[i]];

        parseJsonRecursive(json[keys[i]], keys[i], _sideBarJson, contentJson, level + 1);
    }

}

function parseJson(json) {
    var sideBarJson = {};
    var contentJson  = {};

    parseJsonRecursive(json, "", sideBarJson, contentJson, 1);

    console.log(sideBarJson);
    console.log(contentJson);

    return {
        sideBarJson,
        contentJson
    };
}

exports["runFn"] = function() {
    window.openChildren = [];
    window.nodeClicked = null;
    window.parsedJson = parseJson(json);


    NodeList.prototype.forEach = Array.prototype.forEach
    createSidebar(parsedJson, document.getElementById("sidebar"));
}


// More levels
// BetterSelection
// File Upload
// Impl in PS
