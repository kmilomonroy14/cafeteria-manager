package com.cafeteria.backend.controller;

import java.util.Map;

import org.springframework.dao.DataAccessException;
import org.springframework.http.ResponseEntity;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HealthController {

	private final JdbcTemplate jdbcTemplate;

	public HealthController(JdbcTemplate jdbcTemplate) {
		this.jdbcTemplate = jdbcTemplate;
	}

	@GetMapping("/api/health")
	public Map<String, String> health() {
		return Map.of("status", "UP", "application", "Cafeteria Manager");
	}

	@GetMapping("/api/health/database")
	public ResponseEntity<Map<String, String>> databaseHealth() {
		try {
			jdbcTemplate.queryForObject("SELECT 1", Integer.class);
			return ResponseEntity.ok(Map.of("status", "UP", "database", "SQLite"));
		} catch (DataAccessException exception) {
			return ResponseEntity.internalServerError().build();
		}
	}
}
