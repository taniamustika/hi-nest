import { Module } from "@nestjs/common";
import { SegitigaSamaKakiService } from "./segitiga-samakaki/segitiga-samakaki.service";
import { SegitigaSamaKakiController } from "./segitiga-samakaki/segitiga-samakaki.controller";
import { SegitigaSamaSisiController } from "./segitiga-samasisi/segitiga-samasisi.controller";
import { SegitigaSamaSisiService } from "./segitiga-samasisi/segitiga-samasisi.service";


@Module({
    controllers: [SegitigaSamaKakiController, SegitigaSamaSisiController],
    providers: [SegitigaSamaKakiService, SegitigaSamaSisiService, {
        provide: 'alas',
        useValue: 3
    },{
        provide: 'tinggi',
        useValue: 3
    },{
        provide: 'sisiMiring',
        useValue: 3
    },{
        provide: 'sisi',
        useValue: 3
    }
]
})
export class SegitigaModule {}