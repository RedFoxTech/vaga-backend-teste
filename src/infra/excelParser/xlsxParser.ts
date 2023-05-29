import { IXlsxParser } from "../../useCases/protocols/xlsx-parser";
import xlsx from "node-xlsx";
export class XlsxParser implements IXlsxParser {
  async parser(buffer: Buffer): Promise<any[]> {
    return xlsx.parse(buffer);
  }
}
