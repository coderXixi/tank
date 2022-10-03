import modelAbstract from "./modelAbstract"
import { image } from "../service/image";
import steel from "../canvas/steel";
//草地的类
export default class Steel extends modelAbstract implements IModel{
  canvas: ICanvas=steel;
  
  image(): HTMLImageElement{
   return image.get('bullet')!
  }
  name: string="bullet";
  render(): void {
  
    super.draw()
  }

  
}