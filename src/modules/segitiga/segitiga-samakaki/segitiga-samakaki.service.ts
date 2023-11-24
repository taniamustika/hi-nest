import { Inject, Injectable } from "@nestjs/common";
import { SegitigaService } from "../segitiga.service";

@Injectable()
export class SegitigaSamaKakiService extends SegitigaService{
    constructor(@Inject('alas') private readonly alas: number,
    @Inject('tinggi') private readonly tinggi: number,
    @Inject('sisiMiring') private readonly sisiMiring: number){
        super()
    }

    keliling(): number{
        return (2 * this.sisiMiring) + this.alas
    }

    luas(): number{
        return this.alas * this.tinggi / 2
    }
}