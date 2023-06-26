import { XlsxParser } from "../../src/infra/excelParser/xlsxParser";
import xlsx from "node-xlsx";
import fs from "fs";
describe("XlsxParser", () => {
  const makeSut = () => {
    return new XlsxParser();
  };
  const buffer = fs.readFileSync(`${process.cwd()}/Pokemon Go.xlsx`);

  it("should call xlsx with correct value", async () => {
    const sut = makeSut();
    const spy = jest.spyOn(xlsx, "parse");
    await sut.parser(buffer);
    expect(spy).toHaveBeenCalledWith(buffer);
  });
  it("should return the same values as parse function", async () => {
    const sut = makeSut();
    jest.spyOn(xlsx, "parse").mockImplementationOnce(
      () =>
        [
          {
            name: "",
            data: [],
          },
        ] as any
    );
    const parsedContent = await sut.parser(buffer);
    expect(parsedContent).toEqual([]);
  });
});
