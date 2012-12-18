---
layout: post
comments: true
title : nbody con three.js
categories:
---

[Three.js](http://mrdoob.github.com/three.js/) es una librería de javascript para 3D.
Para mostrar lo simple que es usarla, un ejemplo del problema de los n cuerpos ( [nbody problem](http://en.wikipedia.org/wiki/N-body_problem) ).

<iframe style="width: 100%; height: 300px" src="http://jsfiddle.net/juanpablo/nj8Mm/embedded/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

Donde el script es

    container = document.getElementById('container');

    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(45, window.innerWidth /
            window.innerHeight, 1, 10000);
    camera.position.z = 500;
    scene.add(camera);

    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);

    pointlight = new THREE.PointLight(0xffffff);
    ambientlight = new THREE.AmbientLight(0x101010);

    directlight = new THREE.DirectionalLight(0xffffff, 1);
    directlight.position.set(1, 1, 0).normalize();

    scene.add(ambientlight);
    scene.add(pointlight);
    scene.add(directlight);

    sgeometry = new THREE.SphereGeometry(3,16,16);
    smaterial = new THREE.MeshPhongMaterial({color: 0x0000ff});

    var spheres = new Array();
    var n = 10 ;
    var g = 6.670*0.01;
    var m = 0.5;

    for (var i = 0; i < n ; i += 1) {
        spheres[i] = new THREE.Mesh(sgeometry, smaterial);
        scene.add(spheres[i]);
        spheres[i].position.x += -50 + Math.random()*100;
        spheres[i].position.y += -50 + Math.random()*100;
        spheres[i].velocity = new THREE.Vector3(0,0,0);
        spheres[i].m = m;
    }

    container.appendChild(renderer.domElement);
    var fx, fy, fz, dx, dy, dz, d2, d, f, ax, ay, az;
    function render() {
        requestAnimationFrame(render);
        for (var i = 0; i < spheres.length; i += 1) {
            fx = 0;
            fy = 0;
            fz = 0;
            for (var j = 0; j < spheres.length; j += 1) {
                if (i != j ) {
                    dx = spheres[i].position.x - spheres[j].position.x;
                    dy = spheres[i].position.y - spheres[j].position.y;
                    dz = spheres[i].position.z - spheres[j].position.z;
                    d2 = dx*dx + dy*dy + dz*dz;
                    d2 = d2 + 1;
                    d = Math.sqrt(d2);
                    f = -1 * g * spheres[i].m * spheres[j].m / d2;
                    fx += f * dx/d;
                    fy += f * dy/d;
                    fz += f * dz/d;
                }
            }
            ax = fx / m;
            ay = fy / m;
            az = fz / m;
            spheres[i].velocity.x +=  ax;
            spheres[i].velocity.y +=  ay;
            spheres[i].velocity.z +=  az;
            spheres[i].position.x += spheres[i].velocity.x;
            spheres[i].position.y += spheres[i].velocity.y;
            spheres[i].position.z += spheres[i].velocity.z;
        }
        renderer.render(scene, camera);
    }
    render();

### Referencias

* https://github.com/mrdoob/three.js/
