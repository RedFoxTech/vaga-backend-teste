package com.gabrielterriaga.testebackend.resources;

import java.util.List;
import java.util.Map;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.gabrielterriaga.testebackend.services.UploadService;

@RestController
public class UploadResource {

	private final UploadService uploadService;
	
	public UploadResource(UploadService uploadService) {
		this.uploadService = uploadService;
	}
	
	@PostMapping("/upload")
	public List<Map<String, String>> upload(@RequestParam("file") MultipartFile file) throws Exception{
		return uploadService.upload(file);
	}
}
