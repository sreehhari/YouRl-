import { generateNanoId } from "../utils/helper.js";
import { yourlDao } from "../dao/yourl.dao.js";
export const serviceUrl = async(url)=>{
  const puthyaurl = await generateNanoId(7);
  await yourlDao(url,puthyaurl)
  return puthyaurl;
}