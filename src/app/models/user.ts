export class User{
  constructor(
    public id:number,
    public nombre:string,
    public apellido:string,
    public estado:boolean,
    public cargo:string,
    public cedula:string,
    public correo:string,
    public contrasena:string,
    public telefono:string,
    public direccion:string,
    public createdAt:any,
    public updatedAt:any
  ){}
}
