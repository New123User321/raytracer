//import * as ref from  "./references"

class HitRecord
{
    t: number;
    normal: Vector3;
    uv: any;
    hit_p: Vector3;
    hit_tex: any;
    color: RGB;
    constructor()
    {
        this.t = 0;
        this.normal = new Vector3;
        this.uv;
        this.hit_p = new Vector3();
        this.hit_tex;
        this.color = new RGB();
    }
}

class Shape
{
    hit(r: Ray, tmin: number, tmax: number, time: number, record: HitRecord)
    {

    }


}
//export {Shape, HitRecord}