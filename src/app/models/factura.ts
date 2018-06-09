export class Factura{
  constructor(
    public id:number,
    public clientesId:number,
    public userId:number,
    public total:number,
    public estados:string,
    public createdAt:any,
    public updatedAt:any
  ){}
}
