import { Injectable } from '@angular/core';

export interface Producto {
  codigo: number;
  descripcion: string;
  precio: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private productos: Producto[] = [
    {codigo:1, descripcion:'coronita', precio:'0.50'},
    {codigo:2, descripcion:'inkacola', precio:'2.50'},
    {codigo:3, descripcion:'cocacola', precio:'2.50'},
    {codigo:4, descripcion:'cañonazo', precio:'0.70'},
    {codigo:5, descripcion:'agua cielo', precio:'1.20'}
  ];

  constructor() {}

  getProductos(): Producto[] {
    return this.productos;
  }

  agregarProducto(producto: Producto): void {
    this.productos.push(producto);
  }

  editarProducto(index: number, producto: Producto): void {
    this.productos[index] = producto;
  }

  eliminarProducto(index: number): void {
    this.productos.splice(index, 1);
  }
}
