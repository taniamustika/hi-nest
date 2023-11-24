import { Controller, Get } from "@nestjs/common";
import { SegitigaSamaSisiService } from "./segitiga-samasisi.service";

@Controller('segitiga-samasisi')
export class SegitigaSamaSisiController{
    constructor(private readonly segitigaSamaSisiService: SegitigaSamaSisiService){}

    @Get('keliling')
    keliling(): number{
        return this.segitigaSamaSisiService.keliling()
    }

    @Get('luas')
    luas(): number{
        return this.segitigaSamaSisiService.luas()
    }
}