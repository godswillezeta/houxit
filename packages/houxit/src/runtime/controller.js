
import { useModel, log } from 'houxit';

export default function __controller__(__variables__, render){
  if(!__variables__.__env__){
    throw new Error(`[A 'return' in <script build>] <script build> blocks does not allow custom return statements`);
    return;
  }
  delete __variables__.__env__;
  const model=useModel({
    __env__:__variables__
  });
  if(render) return render;
  return model;
}