import { Controller, Get } from "@nestjs/common";
import { PersegiPanjangService } from "./persegi-panjang.service";

@Controller('persegi-panjang')
export class PersegiPanjangController{
    constructor(private readonly persegiPanjangService: PersegiPanjangService){}

    @Get('keliling')
    keliling(): number{
        return this.persegiPanjangService.keliling()
    }

    @Get('luas')
    luas(): number{
        return this.persegiPanjangService.luas()
    }
}