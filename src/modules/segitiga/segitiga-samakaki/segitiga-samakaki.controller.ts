import { Controller, Get } from "@nestjs/common";
import { SegitigaSamaKakiService } from "./segitiga-samakaki.service";

@Controller('segitiga-samakaki')
export class SegitigaSamaKakiController {
    constructor(private readonly segitigaSamaKakiService: SegitigaSamaKakiService){}
    @Get('keliling')
    keliling(): number{
        return this.segitigaSamaKakiService.keliling()
    }

    @Get('luas')
    luas(): number{
        return this.segitigaSamaKakiService.luas()
    }
}