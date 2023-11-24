import { Module } from "@nestjs/common";
import { LingkaranModule } from "./modules/lingkaran/lingkaran.module";
import { SegiempatModule } from "./modules/segiempat/segiempat.module";

@Module({
    imports: [LingkaranModule, SegiempatModule],
})
export class AppModule{}