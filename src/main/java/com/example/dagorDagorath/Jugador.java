package com.example.dagorDagorath;

public class Jugador {
	
	private long id;
	private String nombre;
	private boolean conectado;
	private int personaje;
	
	public Jugador () {
	}
	
	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public boolean isConectado() {
		return conectado;
	}

	public void setConectado(boolean conectado) {
		this.conectado = conectado;
	}

	public int getPersonaje() {
		return personaje;
	}

	public void setPersonaje(int personaje) {
		this.personaje = personaje;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}
	
	
}
