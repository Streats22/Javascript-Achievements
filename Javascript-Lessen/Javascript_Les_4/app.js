// voeg controls toe (teleport & WASD controls)
const controls = new Controls(50);
controls.enableMovement();

// create a model
const minecraftModel = new Model('assets/models/minecraft/scene.gltf');
minecraftModel.setPosition(0, 0.820, -5);
minecraftModel.setScale(0.050, 0.050, 0.050);
minecraftModel.setRotation(0, -14.921, 0);

// create a primitive (sphere)
const sphere = new Sphere();
sphere.setColor('green');
sphere.setRadius(0.5);
sphere.setPosition(-3, 0, -5);

// create some text
const testText = new Text('Mediacollege Amsterdam WebXR');
testText.setPosition(1.5, 0, -5);
testText.setFontsize(10);

// create an image
const image = new XRImage('assets/images/sampleImage.jpg');
image.setPosition(-1.324, 2.135, -5.791);

// create a 360 image
const image360 = new Sky('assets/360_world.jpg');

const spotLight = new SpotLight();
spotLight.setPosition(-3.39382, 4.72931, 1.37905);
spotLight.setTarget(minecraftModel);

// listen for an event
minecraftModel.addEventListener('click', () => console.log('je klikt op mij'));

const cuberoom = new Model('assets/models/cube-room/cube-room.gltf');
cuberoom.setPosition(-1.218, 0, -3.303);
cuberoom.setScale(-.5, 0.5, 0.5);
cuberoom.setRotation(-0.500, -0.500, -0.500);


