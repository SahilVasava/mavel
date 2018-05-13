import { generate } from 'shortid';
import { join, extname } from 'path';
import fs from 'fs-extra';
import config from 'config';

const fileUpload = async (file) => {
  const ext = extname(file.name);
  const newFilename = `${Date.now()}-${generate()}${ext}`;
  const filePath = join(config.get('paths.static'), newFilename);
  try {
    await fs.copy(file.path, filePath);
  } catch (e) {
    console.log(e); //eslint-disable-line
  }
  return newFilename;
};

const fileDelete = async (file) => {
  const filePath = join(config.get('paths.static'), file);
  try {
    await fs.remove(filePath);
  } catch (e) {
    console.log(e); //eslint-disable-line
  }
  return file;
};

export {
  fileUpload,
  fileDelete
};
