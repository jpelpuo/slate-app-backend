const fs = require('fs');
const { decodeBase64Image } = require('../../helpers/imageHelper');
const mime = require('mime');
const path = require('path');

module.exports = saveImage = async (imageBase64, userName) => {
    try {
        const decodedImageBuffer = await decodeBase64Image(imageBase64);
        const imageBuffer = decodedImageBuffer.data;
        const type = decodedImageBuffer.type;
        const extension = mime.getExtension(type);
        const fileName = `${userName}.${extension}`;

        const imageDir = path.join(__dirname, '..', '..', 'images');

        fs.writeFile(`${imageDir}/${fileName}`, imageBuffer, { flag: 'wx' }, (error) => {
            console.log(error)
        });
        return true;
    } catch (error) {
        throw error;
    }
}