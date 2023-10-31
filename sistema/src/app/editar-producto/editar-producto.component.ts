import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoService, Producto } from '../producto.service';

@Component({
  selector: 'app-editar-producto',
  templateUrl: './editar-producto.component.html',
  styleUrls: ['./editar-producto.component.css']
})
export class EditarProductoComponent implements OnInit {
  productoForm: Partial<Producto> = {codigo:0, descripcion:'', precio:''};
  index: number;

  constructor(private route: ActivatedRoute, private productoService: ProductoService) {
    this.index = Number(this.route.snapshot.paramMap.get('id'));
    this.productoForm = this.productoService.getProductos()[this.index];
  }

  ngOnInit() {}

  guardarProducto() {
    if (this.productoForm.codigo && this.productoForm.descripcion && this.productoForm.precio) {
      this.productoService.editarProducto(this.index, this.productoForm as Producto);
      this.productoForm = {codigo:0, descripcion:'', precio:''};
    }
  }
}
