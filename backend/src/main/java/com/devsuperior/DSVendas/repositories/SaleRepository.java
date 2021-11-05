package com.devsuperior.DSVendas.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devsuperior.DSVendas.entities.Sale;

public interface SaleRepository extends JpaRepository<Sale, Long>{

}
