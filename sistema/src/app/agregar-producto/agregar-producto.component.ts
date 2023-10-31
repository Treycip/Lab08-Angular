import { Component, OnInit } from '@angular/core';
import { ProductoService, Producto } from '../producto.service';

@Component({
  selector: 'app-agregar-producto',
  templateUrl: './agregar-producto.component.html',
  styleUrls: ['./agregar-producto.component.css']
})
export class AgregarProductoComponent implements OnInit {
  productoForm: Partial<Producto> = {codigo:0, descripcion:'', precio:''};

  constructor(private productoService: ProductoService) {}

  ngOnInit() {}

  agregarProducto() {
    if (this.productoForm.codigo && this.productoForm.descripcion && this.productoForm.precio) {
      this.productoService.agregarProducto(this.productoForm as Producto);
      this.productoForm = {codigo:0, descripcion:'', precio:''};
    }
  }
}
