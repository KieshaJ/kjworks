(function () {
    let canvas, ctx, circle, nodes, mouse; // TODO refactor variables, add configurations
    let usedNodes = 0;

    const SENSITIVITY = 100; // Distance between nodes to make a connection
    const SIBLINGS = 10; // Number of connections each node should have
    const NODE_MARGIN = 50; // Default node margin
    const ANCHOR_LENGTH = 20; // Avoid node spreading
    const MOUSE_RADIUS = 200;

    circle = 2 * Math.PI;
    nodes = [];

    canvas = document.getElementById('kj-particle-animation');
    resizeWindow();

    mouse = {
        x: canvas.width / 2,
        y: canvas.height / 2,
    };

    ctx = canvas.getContext('2d');

    if (!ctx) {
        alert('Your browser does not support canvas!');
        return;
    }

    function Node(x, y) {
        this.anchorX = x;
        this.anchorY = y;
        this.x =
            Math.random() * (x - (x - ANCHOR_LENGTH)) + (x - ANCHOR_LENGTH);
        this.y =
            Math.random() * (y - (y - ANCHOR_LENGTH)) + (y - ANCHOR_LENGTH);
        this.vx = Math.random() * 2 - 1;
        this.vy = Math.random() * 2 - 1;
        this.energy = Math.random() * 100;
        this.radius = Math.random();
        this.siblings = [];
        this.brightness = 0;

        this.drawNode = () => {
            let color = 'rgba(255, 0, 0, ' + this.brightness + ')';

            ctx.beginPath();
            ctx.arc(
                this.x,
                this.y,
                2 * this.radius + (2 * this.siblings.length) / SIBLINGS,
                0,
                circle
            );
            ctx.fillStyle = color;
            ctx.fill();
        };

        this.drawConnections = () => {
            this.siblings.forEach((sibling) => {
                let color = 'rgba(255, 0, 0, ' + this.brightness + ')';

                ctx.beginPath();
                ctx.moveTo(this.x, this.y);
                ctx.lineTo(sibling.x, sibling.y);
                ctx.lineWidth =
                    1 - calculateDistance(this, sibling) / SENSITIVITY;
                ctx.strokeStyle = color;
                ctx.stroke();
            });
        };

        this.moveNode = () => {
            this.energy -= 2;

            if (this.energy < 1) {
                this.energy = Math.random() * 100;
                this.vx = calculateSpread(this.x, this.anchorX);
                this.vy = calculateSpread(this.y, this.anchorY);
            }

            this.x += (this.vx * this.energy) / 100;
            this.y += (this.vy * this.energy) / 100;
        };
    }

    function initNodes() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        nodes = [];

        for (let i = NODE_MARGIN; i < canvas.width; i += NODE_MARGIN) {
            for (let j = NODE_MARGIN; j < canvas.height; j += NODE_MARGIN) {
                nodes.push(new Node(i, j));
                usedNodes++;
            }
        }
    }

    function calculateDistance(node1, node2) {
        return Math.sqrt(
            Math.pow(node1.x - node2.x, 2) + Math.pow(node1.y - node2.y, 2)
        );
    }

    function calculateSpread(coordinate, anchorCoordinate) {
        if (coordinate - anchorCoordinate < -ANCHOR_LENGTH)
            return Math.random() * 2;
        else if (coordinate - anchorCoordinate > ANCHOR_LENGTH)
            return Math.random() * -2;
        else return Math.random() * 4 - 2;
    }

    function findSiblings() {
        let node1, node2, distance;

        for (let i = 0; i < usedNodes; i++) {
            node1 = nodes[i];
            node1.siblings = [];

            for (let j = 0; j < usedNodes; j++) {
                node2 = nodes[j];

                if (node1 !== node2) {
                    distance = calculateDistance(node1, node2);
                    if (distance < SENSITIVITY) {
                        if (node1.siblings.length < SIBLINGS) {
                            node1.siblings.push(node2);
                        } else {
                            let node_sibling_distance = 0;
                            let max_distance = 0;
                            let s = 0;

                            for (let k = 0; k < SIBLINGS; k++) {
                                node_sibling_distance = calculateDistance(
                                    node1,
                                    node1.siblings[k]
                                );
                                if (node_sibling_distance > max_distance) {
                                    max_distance = node_sibling_distance;
                                    s = k;
                                }
                            }

                            if (distance < max_distance) {
                                node1.siblings.splice(s, 1);
                                node1.siblings.push(node2);
                            }
                        }
                    }
                }
            }
        }
    }

    function redrawScene() {
        resizeWindow();
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        findSiblings();

        let i, node, distance;

        for (i = 0; i < usedNodes; i++) {
            node = nodes[i];
            distance = calculateDistance(
                {
                    x: mouse.x,
                    y: mouse.y,
                },
                node
            );

            if (distance < MOUSE_RADIUS) {
                node.brightness = 1 - distance / MOUSE_RADIUS;
            } else {
                node.brightness = 0;
            }
        }

        for (i = 0; i < usedNodes; i++) {
            node = nodes[i];

            if (node.brightness) {
                node.drawNode();
                node.drawConnections();
            }

            node.moveNode();
        }

        requestAnimationFrame(redrawScene);
    }

    function initHandlers() {
        document.addEventListener('resize', resizeWindow, false);
        canvas.addEventListener('mousemove', mousemoveHandler, false);
    }

    function resizeWindow() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    function mousemoveHandler(e) {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
    }

    initHandlers();
    initNodes();
    redrawScene();
})();
