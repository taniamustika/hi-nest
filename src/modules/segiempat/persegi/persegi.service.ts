import { Inject, Injectable } from "@nestjs/common";
import { SegiempatService } from "../segiempat.service";

@Injectable()
export class PersegiService extends SegiempatService{
    constructor(@Inject('sisi') private readonly sisi: number){
        super()
    }

    keliling(): number {
        return 4 * this.sisi
    }

    luas(): number {
        return this.sisi * this.sisi
    }
}