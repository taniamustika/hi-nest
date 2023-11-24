import { Module } from "@nestjs/common";
import { LingkaranModule } from "./modules/lingkaran/lingkaran.module";
import { SegiempatModule } from "./modules/segiempat/segiempat.module";
import { SegitigaModule } from "./modules/segitiga/segitiga.module";

@Module({
    imports: [LingkaranModule, SegiempatModule, SegitigaModule],
})
export class AppModule{}