import { Controller, Get } from "@nestjs/common";
import { PersegiService } from "./persegi.service";

@Controller('persegi')
export class PersegiController{
    constructor(private readonly persegiService: PersegiService){}
    @Get('keliling')
    keliling(): number{
        return this.persegiService.keliling()
    }

    @Get('luas')
    luas(): number{
        return this.persegiService.luas()
    }
    
}