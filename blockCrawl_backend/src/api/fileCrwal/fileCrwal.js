import { pturlCapture, pturlPDF } from "../../crwaling/image";
import checkPublicFile from "../../utils/checkPublic";
import removeFile from "../../utils/removeFile";

const REMOVE_FILE_TIME = process.env.REMOVE_FILE_TIME || 30000;

export default {
  Query: {
    urlCapture: async (_, { url, fullShot = false }) => {
      let res = null;
      checkPublicFile();
      try {
        res = await pturlCapture({ url, fullShot });
      } catch (error) {
        throw Error(`ERROR: urlCapture fail${error}`);
      }
      setTimeout(() => {
        removeFile(res);
      }, REMOVE_FILE_TIME);
      return `${res}`;
    },
    urlPDF: async (_, { url }) => {
      let res = null;
      checkPublicFile();
      try {
        res = await pturlPDF({ url });
      } catch (error) {
        throw Error(`ERROR: urlCapture fail ${error}`);
      }
      setTimeout(() => {
        removeFile(res);
      }, REMOVE_FILE_TIME);
      return `${res}`;
    },
  },
};
