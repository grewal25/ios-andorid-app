import { AppModule } from './app/app.module';
import { platformNativeScriptDynamic } from "nativescript-angular/platform";
import {enableProdMode} from '@angular/core';


enableProdMode();
platformNativeScriptDynamic({ createFrameOnBootstrap: true }).bootstrapModule(AppModule);
