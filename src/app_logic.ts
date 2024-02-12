import fs from 'fs'
import { yarg } from "./configs/plugins/yargs.plugins";

const { b:base, l:limit, s:show } = yarg

let outputMessage: string = "";
const headerMessage: string = `
===================
Tabla del ${ base }
===================
`;

for (let i = 1;  i <= limit; i++){
    outputMessage += `${base} x ${ i } = ${ base * i }\n`;
}

outputMessage = headerMessage + outputMessage

if (show) console.log(outputMessage)

const outputPath = `output`

fs.mkdirSync(outputPath, { recursive: true});
fs.writeFileSync(`${outputPath}/tabla-${base}.txt`, outputMessage)