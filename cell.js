class Cell{
    constructor(i, j){
        this.x = i;
        this.y = j;
        this.h = 0;
        this.g = 0;
        this.f = 0;
        this.isStart = false;
        this.isEnd = false;
        this.isWall = false;
    };
}
export { Cell };