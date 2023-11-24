import { Module } from "@nestjs/common";
import { LingkaranController } from "./lingkaran.controller";
import { LingkaranService } from "./lingkaran.service";

@Module({
    controllers: [LingkaranController],
    providers: [LingkaranService,{
        provide: 'r', 
        useValue: 3
    }]
})
export class LingkaranModule{}