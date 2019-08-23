package com.gabrielterriaga.testebackend.services.exception;

public class ObjectNotFoundException extends RuntimeException {
	private static final long serialVersionUID = 1L;

	public ObjectNotFoundException(String msg) {
		super(msg); //vai passar a mensagem para a super "RuntimeException"
	}
}
