import fs from "fs";
import path from "path";
import axios from "axios";
import parse from "csv-parse/lib/sync";
import stringify from "csv-stringify/lib/sync";

/*
header list
content list
with new file ( auto save with now Date filename )
or
with existed file 

*/

export const mergeCSVFile = async () => {};

export const saveToCSVNamed = async (headerList, contentList, name) => {
  contentList.splice(0, 0, headerList);
  const str = stringify(contentList);
  // await checkFolder(name);
  fs.writeFile(`output/${name}.csv`, str, (e) => {
    if (e) {
      return false;
    }
    console.log("✔ save CSV File", name);
  });
  return true;
};

export const saveToCSV = async (headerList, contentList) => {
  const _headerList = ["1", "2", "3"];
  const _contentList = [
    ["1a", "2a", "3a"],
    ["1b", "2b", "3b"],
    ["1c", "2c", "3c"],
  ];
  _contentList.splice(0, 0, _headerList);
  console.log("SAVE > TO CSV", _contentList);
  const str = stringify(_contentList);
  await checkFolder("sample");
  fs.writeFile(`output/sample/${Date.now()}.csv`, str, (e) => {
    if (e) {
      return false;
    }
    console.log("✔ save CSV File");
  });
  return true;
};

export const makeNewFolder = async () => {
  const setStorage = async () => {
    const dirName = Date.now();
    await fs.readFile(`output/${dirName}`, (e) => {
      if (e) {
        fs.mkdir(`output/${dirName}`, () => {
          console.log(`✔ 폴더 생성 /output/${dirName} `);
          return dirName;
        });
      }
    });
  };
  const resultFileName = setStorage();
  return resultFileName;
};

export const checkDefaultFolder = async () => {
  const setStorage = async () => {
    await fs.readFile(`output`, (e) => {
      if (e) {
        fs.mkdir(`output`, () => {
          console.log(`✔ 폴더 생성 /output `);
          return dirName;
        });
      }
    });
  };
  const resultFileName = setStorage();

  return resultFileName;
};

export const checkFolder = async (name) => {
  const setStorage = async () => {
    const dirName = name;
    await fs.readFile(`output/${dirName}`, (e) => {
      if (e) {
        fs.mkdir(`output/${dirName}`, () => {
          console.log(`✔ 폴더 생성 /output/${dirName} `);
          return dirName;
        });
      }
    });
  };
  const resultFileName = setStorage();

  return resultFileName;
};

export const saveWithImageURL = async (
  url,
  folderName = "sample",
  filename = `_${Date.now()}`
) => {
  // await checkFolder(folderName);
  //   const dummyURL =
  // "https://img.alicdn.com/imgextra/i4/333626664/O1CN01vqcb5w1z69xkigdZI_!!333626664.jpg";
  //   url = dummyURL;
  if (url) {
    const imgResult = await axios.get(url, { responseType: "arraybuffer" });
    fs.writeFile(`output/${folderName}/${filename}.jpg`, imgResult.data, () => {
      console.log(`✔ save [${url}] > [output/$${folderName}/${filename}]`);
      return true;
    });
  }
  return false;
};
