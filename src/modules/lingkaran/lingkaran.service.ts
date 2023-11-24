import { Get, Injectable, Inject } from "@nestjs/common/decorators";
import { ShapeService } from "src/core/shape.service";

@Injectable()
export class LingkaranService extends ShapeService {
    
    constructor(@Inject('r') private readonly r: number){
    super()
    }


    keliling(){
        return 2 * 22 / 7 * this.r;
    }

    luas(){
        return 22 / 7 * this.r * this.r
    }
}