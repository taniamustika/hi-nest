import { Controller, Get } from "@nestjs/common";
import { LingkaranService } from "./lingkaran.service";

@Controller('lingkaran')
export class LingkaranController{
    constructor(private readonly lingkaranService: LingkaranService){}
    @Get('luas')
    luas(): number{
        return this.lingkaranService.luas();
    }

    @Get('keliling')
    keliling(): number{
        return this.lingkaranService.keliling();
    }
}