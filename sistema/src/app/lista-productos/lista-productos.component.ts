// lista-productos.component.ts
import { Component, OnInit } from '@angular/core';
import { ProductoService, Producto } from '../producto.service';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {
  productos: Producto[] = [];

  constructor(private productoService: ProductoService) {}

  ngOnInit() {
    this.productos = this.productoService.getProductos();
  }

  eliminarProducto(index: number) {
    this.productoService.eliminarProducto(index);
  }
}
