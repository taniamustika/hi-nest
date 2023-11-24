import { Module } from "@nestjs/common";
import { LingkaranModule } from "./modules/lingkaran/lingkaran.module";

@Module({
    imports: [LingkaranModule],
})
export class AppModule{}