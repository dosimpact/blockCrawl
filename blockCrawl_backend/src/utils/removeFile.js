import path from "path";
import fs from "fs";
import { PUBLIC_DIR } from "./checkPublic";

/**
 *
 * @param {fileName} Boolean
 */
const removeFile = (fileName) => {
  const FileDir = path.normalize(path.join(PUBLIC_DIR, fileName));
  fs.unlink(path.normalize(FileDir), (err) => {
    if (err) console.error(`❌ file Delete fail ${err} `);
    else console.log(`${fileName} is deleted ✔`);
  });
};

export default removeFile;
