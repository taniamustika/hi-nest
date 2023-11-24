import { Module } from "@nestjs/common/decorators";
import { PersegiController } from "./persegi/persegi.controller";
import { PersegiService } from "./persegi/persegi.service";
import { PersegiPanjangController } from "./persegi-panjang/persegi-panjang.controller";
import { PersegiPanjangService } from "./persegi-panjang/persegi-panjang.service";

@Module({
    controllers: [PersegiController, PersegiPanjangController],
    providers: [PersegiService, PersegiPanjangService, {
        provide: 'sisi',
        useValue: 4
    },{
        provide: 'panjang',
        useValue: 3
    },{
        provide: 'lebar',
        useValue: 6
    }
]
})
export class SegiempatModule {}