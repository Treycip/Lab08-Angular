import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ListaProductosComponent } from './lista-productos/lista-productos.component';
import { AgregarProductoComponent } from './agregar-producto/agregar-producto.component';
import { EditarProductoComponent } from './editar-producto/editar-producto.component';

const appRoutes: Routes = [
  { path: 'lista', component: ListaProductosComponent },
  { path: 'agregar', component: AgregarProductoComponent },
  { path: 'editar/:id', component: EditarProductoComponent },
  { path: '', redirectTo: '/lista', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    ListaProductosComponent,
    AgregarProductoComponent,
    EditarProductoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
