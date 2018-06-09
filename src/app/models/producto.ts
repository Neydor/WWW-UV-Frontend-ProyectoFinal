export class Producto{
  constructor(
    public id:number,
    public codigo:string,
    public nombre:string,
    public provedoresID:number,
    public presentacion:string,
    public precioUnidad:number,
    public costoCompra:number,
    public precioDocena:number,
    public cantidad:number,
    public createdAt:any,
    public updatedAt:any
  ){}
}
