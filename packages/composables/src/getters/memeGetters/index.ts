// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getMemeUrl(meme: any): any {
  return meme && meme.url
    ? meme.url
    : 'https://socialistmodernism.com/wp-content/uploads/2017/07/placeholder-image.png';
}

export const memeGetters = {
  getMemeUrl,
};
