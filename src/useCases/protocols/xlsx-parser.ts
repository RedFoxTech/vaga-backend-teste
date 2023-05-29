export interface IXlsxParser {
  parser(buffer: Buffer): Promise<any[]>;
}
