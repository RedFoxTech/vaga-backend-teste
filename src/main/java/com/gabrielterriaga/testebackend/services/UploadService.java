package com.gabrielterriaga.testebackend.services;

import java.io.File;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.DateUtil;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.ss.usermodel.WorkbookFactory;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

@Service
public class UploadService {
	
	public Map<Integer, List<String>> upload(MultipartFile file) throws Exception{
			
			//caminho na varaivel tempDir do tipo Path
			Path tempDir = Files.createTempDirectory("");
			
			//arquivo tempFile do tipo File recebendo o caminho tempDir e converte para o tipo File
			File tempFile = tempDir.resolve(file.getOriginalFilename()).toFile();
			
			file.transferTo(tempFile);
			
			//pasta de trabalho
			Workbook workbook = WorkbookFactory.create(tempFile);
			
			//folha de trabalho (planilha)
			Sheet sheet = workbook.getSheetAt(0);

			//variavel para intermediar
			Map<Integer, List<String>> data = new HashMap<>();
			
			int i = 0; //contador para header
			for (Row row : sheet) {
				data.put(i, new ArrayList<String>()); //header
				for (Cell cell : row) {
					switch (cell.getCellType()) {
					
					case STRING: //celula do tipo string (text)
						data.get(i)
							.add(cell.getRichStringCellValue()
								.getString());
						break;
						
					case NUMERIC: //celula do tipo date e numerico
						if (DateUtil.isCellDateFormatted(cell)) {
							data.get(i)
								.add(cell.getDateCellValue() + "");
						} else {
							data.get(i)
								.add((int)cell.getNumericCellValue() + "");
						}
						break;
						
					case BOOLEAN: //celula com boolean
						data.get(i)
							.add(cell.getBooleanCellValue() + "");
						break;
						
					case FORMULA: //formula daquela celula (i)
						data.get(i)
							.add(cell.getCellFormula() + "");
						break;
						
					default:
						data.get(i)
							.add(" ");
						
					}
				}
				//incrementa a key/contador
				i++;
			}
			//testa de o workbook nao e nulo
			if (workbook != null) {
				workbook.close();
			}
			return data;
		}
}
