import shortUrl from "../models/yourl.model.js";
export const yourlDao = (url,puthyaurl,userId)=>{
  const newUrl = new shortUrl({
    full_url: url,
    short: puthyaurl,
  })
  if(userId) {
    newUrl.user_id = userId;
  }
  newUrl.save();
}

export const findUrlfromShortUrl = async(shortUrlId) => {
    const a= await shortUrl.findOneAndUpdate(shortUrlId,{$inc: { clicks: 1 }}, { new: true });
  // console.log(a);
  return a;
}