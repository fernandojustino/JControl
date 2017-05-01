package br.com.Jcontrol.ws.ws.service;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.Jcontrol.domain.Cliente;
import br.com.Jcontrol.ws.ws.repository.ClienteRepository;

@Service
public class ClienteService {

	@Autowired
	ClienteRepository clienteRepository; 

	// Negocio
	public Cliente cadastrar(Cliente cliente) {
		return clienteRepository.save(cliente);
	}

	public Collection<Cliente> buscarTodos() {
		return clienteRepository.findAll();
	}

	public void excluir(Cliente cliente) {
		clienteRepository.delete(cliente);
	}

	public Cliente buscarPorId(Integer id) {
		return clienteRepository.findOne(id);
	}

	public Cliente alterar(Cliente cliente) {
		return clienteRepository.save(cliente);
	}
}
