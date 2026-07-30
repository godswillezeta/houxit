
import { useModel, log } from 'houxit';

export default function __controller__(__variables__, render){
  const model=useModel({
    __env__:__variables__
  });
  if(render) return render;
  return model;
}