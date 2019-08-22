package com.gabrielterriaga.testebackend.resources;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.gabrielterriaga.testebackend.services.UploadService;

@RestController
@RequestMapping(value = "/pokemons")
public class UploadResource {

	@Autowired
	private UploadService uploadService;
	
	public UploadResource(UploadService uploadService) {
		this.uploadService = uploadService;
	}
	
	@PostMapping("/upload")
	public Map<Integer, List<String>> upload(@RequestParam("file") MultipartFile file) throws Exception{
		return uploadService.upload(file);
	}
}
