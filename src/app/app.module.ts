import { FirstComponentComponent } from './first-component/first-component.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SecondComponentComponent } from './second-component/second-component.component';
import { MultiplicaPorPipe } from './multiplica-por.pipe';
import { PipeCustomizadoComponent } from './pipe-customizado/pipe-customizado.component';
import { TwoWayDataBindingComponent } from './two-way-data-binding/two-way-data-binding.component';
import { FormsModule } from '@angular/forms';
import { RenderizandoListasComponent } from './renderizando-listas/renderizando-listas.component';
import { ComponentPersonalizadoComponent } from './component-personalizado/component-personalizado.component';
import { ComponentFatherComponent } from './component-father/component-father.component';
import { ComponentSonComponent } from './component-son/component-son.component';
import { ExampleServices1Component } from './example-services1/example-services1.component';
import { ExampleServices2Component } from './example-services2/example-services2.component';
import { CicloDeVidaComponent } from './ciclo-de-vida/ciclo-de-vida.component';
import { CicloDeVidaPaiComponent } from './ciclo-de-vida-pai/ciclo-de-vida-pai.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    SecondComponentComponent,
    MultiplicaPorPipe,
    PipeCustomizadoComponent,
    TwoWayDataBindingComponent,
    RenderizandoListasComponent,
    ComponentPersonalizadoComponent,
    ComponentFatherComponent,
    ComponentSonComponent,
    ExampleServices1Component,
    ExampleServices2Component,
    CicloDeVidaComponent,
    CicloDeVidaPaiComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
