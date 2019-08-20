package com.gabrielterriaga.testebackend.services;

import static java.util.stream.Collectors.toMap;

import java.io.File;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.List;
import java.util.Map;
import java.util.function.Supplier;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.ss.usermodel.WorkbookFactory;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.gabrielterriaga.testebackend.resources.util.UploadUtil;

@Service
public class UploadService {

	private final UploadUtil uploadUtil;
	
	//metodo para receber um obj da uploadUtil
	public UploadService(UploadUtil uploadUtil) {
		this.uploadUtil = uploadUtil;
	}
	
	public List<Map<String, String>> upload(MultipartFile file) throws Exception{
		
		//caminho na varaivel tempDir do tipo Path
		Path tempDir = Files.createTempDirectory("");
		
		//arquivo tempFile do tipo File recebendo o caminho tempDir e converte para o tipo File
		File tempFile = tempDir.resolve(file.getOriginalFilename()).toFile();
		
		file.transferTo(tempFile);
		
		Workbook workbook = WorkbookFactory.create(tempFile);
		
		Sheet sheet = workbook.getSheetAt(0);
		
		//uma variavel do tipo Stream<Row> vai receber um upload daquela primeira pasta de trabalho do excel
		Supplier<Stream<Row>> rowStreamSupplier = uploadUtil.getRowStreamSupplier(sheet);
		
		//uma variavel do tipo Row recebe a row (linha) do topo
		Row headerRow = rowStreamSupplier.get().findFirst().get();
		
		
		List<String> headerCells = uploadUtil.getStream(headerRow)
				.map(Cell::getStringCellValue)
				.collect(Collectors.toList());
		
		//variavel para receber as colunas
		int colCount = headerCells.size();
		
		return rowStreamSupplier.get()
				.skip(1)
				.map(row -> {
			
					List<String> cellList = uploadUtil.getStream(row)
							.map(Cell::getNumericCellValue)
							.map(String::valueOf)
							.collect(Collectors.toList());	
					
					return uploadUtil.cellInteratorSupplier(colCount)
							 .get()
							 .collect(toMap(headerCells::get, cellList::get));
		})
		//converter map para lista
		.collect(Collectors.toList());
			
	}
}
