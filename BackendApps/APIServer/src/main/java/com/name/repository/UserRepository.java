package com.name.repository;


import org.springframework.data.jpa.repository.JpaRepository;

import com.name.model.AppUser;

import jakarta.transaction.Transactional;

public interface UserRepository extends JpaRepository<AppUser, Integer> {

  boolean existsByUsername(String username);

  AppUser findByUsername(String username);

  @Transactional
  void deleteByUsername(String username);

}
