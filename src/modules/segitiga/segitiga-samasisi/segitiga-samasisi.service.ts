import { Inject } from "@nestjs/common";
import { SegitigaService } from "../segitiga.service";

export class SegitigaSamaSisiService extends SegitigaService{
    constructor(@Inject('sisi') private readonly sisi: number,
    @Inject('alas') private readonly alas: number,
    @Inject('tinggi') private readonly tinggi: number){
        super()
    }

    keliling(): number {
        return 3 * this.sisi
    }

    luas(): number{
        return this.alas * this.tinggi / 2
    }

}