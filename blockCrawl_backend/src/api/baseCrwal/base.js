import { ptNurlTag, pturlTag, ptevalCode } from "../../crwaling/basic";

export default {
  Query: {
    NurlTag: async (_, args) => {
      const { tag, urls } = args;
      const res = await ptNurlTag({ commonTag: tag, urls });
      return JSON.stringify(res);
    },
    urlTag: async (_, args) => {
      const { tag, url } = args;
      const res = await pturlTag({ commonTag: tag, url });
      return JSON.stringify(res);
    },
    evalCode: async (_, args) => {
      const { code } = args;
      const res = await ptevalCode({ code });
      return JSON.stringify(res);
    },
  },
};
