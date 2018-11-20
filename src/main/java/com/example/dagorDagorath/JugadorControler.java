package com.example.dagorDagorath;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.atomic.AtomicLong;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.ResponseStatus;

@RestController
public class JugadorControler {
	
	Map<Long, Jugador> jugadores = new ConcurrentHashMap<>(); 
	AtomicLong nextId = new AtomicLong(0);
	
	@RequestMapping(value = "/jugadores", method  = RequestMethod.GET)
	@ResponseStatus(HttpStatus.OK)
	public Collection<Jugador> getJugadores() {
		return jugadores.values();
	}
	
	@RequestMapping(value = "/jugadores/", method  = RequestMethod.GET)
	public ResponseEntity<Collection> getIfJugadores() {
		Collection<Jugador> jugadors = jugadores.values();
		
		if(!jugadores.isEmpty()) 
		{
			return new ResponseEntity<>(jugadors, HttpStatus.OK);
		}else 
		{
			return new ResponseEntity<>(jugadors, HttpStatus.OK);
		}
	}
	
	@RequestMapping(value = "/jugadores", method  = RequestMethod.POST)
	@ResponseStatus(HttpStatus.CREATED)
	public long addJugador(@RequestBody Jugador j){
		
		long id = nextId.incrementAndGet();
		j.setId(id);
		jugadores.put(id,j);
		
		return id;
	}
	
	@RequestMapping(value = "/jugadores/{id}", method  = RequestMethod.DELETE)
	public ResponseEntity<Boolean> deleteJugador(@PathVariable long id) {
		
		Jugador jgd = jugadores.get(id);
		
		if(jgd != null) {
			jugadores.remove(jgd.getId());
			return new ResponseEntity<>(true, HttpStatus.OK);
		}else {
			return new ResponseEntity<>(false, HttpStatus.NOT_FOUND);
		}
	}
	
	@RequestMapping(value = "/jugadores/{id}", method  = RequestMethod.GET)
	public ResponseEntity<Jugador> getItem(@PathVariable long id){
		Jugador jgd = jugadores.get(id);

		if (jgd != null) {
			return new ResponseEntity<>(jgd, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
}
