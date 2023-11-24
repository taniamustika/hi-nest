import { Module } from "@nestjs/common/decorators";
import { PersegiController } from "./persegi/persegi.controller";
import { PersegiService } from "./persegi/persegi.service";

@Module({
    controllers: [PersegiController],
    providers: [PersegiService, {
        provide: 'sisi',
        useValue: 4
    }]
})
export class SegiempatModule {}