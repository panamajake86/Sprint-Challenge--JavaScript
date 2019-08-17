// 1. Copy and paste your prototype in here and refactor into class syntax.

class CuboidMaker1{
    constructor(atts){
    this.length = atts.length;
    this.width = atts.width;
    this.height = atts.height;
    };
    volume(){
        return this.length * this.width * this.height;
    }

    surfaceArea(){
        return 2 * (this.length * this.width + this.length * this.height + this.width *this.height);
    }
};

class CubeMaker extends CuboidMaker1{
    constructor(cubAtts){
        super(cubAtts);
    };

    cubeVolume(){
        return Math.pow(this.length, 3);
    };

    cubeSurfaceArea(){
        return 6 * Math.pow(this.length, 2);
    };
}

const cuboid1 = new CuboidMaker1({
    length: 4,
    width: 5,
    height: 5
});

const cube = new CubeMaker({
    length: 5,
    width: 12,
    height: 12
})

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid1.volume()); // 100
console.log(cuboid1.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.
console.log(cube.cubeVolume());
console.log(cube.cubeSurfaceArea());