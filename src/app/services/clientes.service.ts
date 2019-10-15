import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class ClientesService {
  private listaClientes = 'Pablo, Juan, Miguel, Pedro, José, Martín, John, Peter, John, God';
  private accesoFacturacion = 'https://login.example.com';
  private coleccion: Array<string> = [];

  public nombre:string = "Damián Olivier";
  public edad:number = 34;
  public mayordeedad:boolean = true;
  public clientes:Array<string> = ["Pablo", "Juan", "Miguel"];
  public comodin:any = true;
  public sucursales:Array<Sucursal>;
  public sucursal1:Sucursal;
  public sucursal2:Sucursal;
  public sucursal3:Sucursal;
  public sucursal4:Sucursal;
  public sucursal5:Sucursal;
  public mostrardiv:boolean = false;
  public mesesnombres:Array<string> = new Array("", "Ene", "Feb", "Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dic");

  constructor() {
    this.sucursal1 = new Sucursal("Sucursal Nueva 1", "Santa Fe");
    this.sucursal2 = new Sucursal("Sucursal Nueva 2", "Rincón");
    this.sucursal3 = new Sucursal("Sucursal Nueva 3", "Arroyo Leyes");
    this.sucursal4 = new Sucursal("Sucursal Nueva 4", "Santo Tomé");
    this.sucursal5 = new Sucursal("Sucursal Nueva 5", "Recreo");

    this.sucursales = new Array(this.sucursal1, this.sucursal2, this.sucursal3, this.sucursal4, this.sucursal5);

    this.sucursal1.ventas2019 = new Array(100,200,300,400,500,600,700,800,900,1000,1100,1200);
    this.sucursal2.ventas2019 = new Array(100,200,300,400,500,600,700,800,900,1000,1100,1200);
    this.sucursal3.ventas2019 = new Array(100,200,300,400,500,600,700,800,900,1000,1100,1200);
    this.sucursal4.ventas2019 = new Array(100,200,300,400,500,600,700,800,900,1000,1100,1200);
    this.sucursal5.ventas2019 = new Array(100,200,300,400,500,600,700,800,900,1000,1100,1200);
  }
  
  ngOnInit() {
  
  }

  removeSucursal(index) {
    this.sucursales.splice(index,1);
  }

  agregarSucursal(sucursal) {
    this.sucursales.push(sucursal);
  }

  agregarRopa(prenda) {
    this.coleccion.push(prenda);
  }

  getColeccion() {
    return this.coleccion;
  }

  listado() {
    return this.listaClientes;
  }

  url() {
    return this.accesoFacturacion;
  }

  seturl(nuevaurl) {
    this.accesoFacturacion = nuevaurl;
  }

}


export class Sucursal {
  constructor(
    public _nombre:string,
    public _lugar:string,
    public _telefono:string = '',
    public _ventas2019:Array<number> = []
    ) { }

  get nombre():string {
    return this._nombre;
  }

  set nombre(name:string) {
    this._nombre = name;
  }

  get lugar():string {
    return this._lugar;
  }

  set lugar(place:string) {
    this._lugar = place;
  }

  get ventas2019():Array<number>{
    return this._ventas2019;
  }

  set ventas2019(ventas:Array<number>) {
    this._ventas2019 = ventas;
  }

}