const FormData = require('form-data');

const getMemes = async (context: any): Promise<any> => {
  try {
    const { data } = await context.client.get(
      'https://api.imgflip.com/get_memes'
    );
    return data;
  } catch (error) {
    return {};
  }
};

const createMeme = async (context: any, params: any): Promise<any> => {
  try {
    const bodyData = new FormData();

    bodyData.append('template_id', '1035805');
    bodyData.append('username', 'toheneb279');
    bodyData.append('password', 'toheneb279');
    bodyData.append('boxes[0][text]', params.box1);
    bodyData.append('boxes[1][text]', params.box2);
    bodyData.append('boxes[2][text]', params.box3);
    bodyData.append('boxes[3][text]', params.box4);

    const { data } = await context.client.post(
      'https://api.imgflip.com/caption_image',
      bodyData
    );
    return data;
  } catch (error) {
    return error;
  }
};

export default {
  getMemes,
  createMeme,
};
