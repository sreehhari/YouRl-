import { serviceUrl } from "../service/yourl.service.js";
import { findUrlfromShortUrl } from "../dao/yourl.dao.js";
export const createUrl = async(req,res)=>{
    const {url} = req.body;
    const finalUrl = await serviceUrl(url);
    res.send(process.env.APP_URL + finalUrl);
}

export const redirectYourl = async(req,res)=>{
  const {id}=req.params;
  const url = await findUrlfromShortUrl({ short: id });
  if(!url) {
    return res.status(404).json({ success: false, message: "URL not found" });
  }
  // console.log("Redirecting to: ", url.full_url);
  // console.log({url});
  console.log("Redirecting to: ", url.full_url);
  res.redirect(url.full_url.startsWith("http") ? url.full_url : `https://${url.full_url}`);
}