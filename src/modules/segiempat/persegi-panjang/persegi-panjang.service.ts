import { SegiempatService } from "../segiempat.service";
import { Inject, Injectable } from "@nestjs/common/decorators/core";

@Injectable()
export class PersegiPanjangService extends SegiempatService{
    constructor(@Inject('panjang') private readonly panjang, @Inject('lebar') private readonly lebar){
        super()
    }

    keliling(): number{
        return 2 * (this.panjang + this.lebar)
    }

    luas(): number{
        return this.panjang * this.lebar
    }
}