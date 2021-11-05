package com.devsuperior.DSVendas.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.devsuperior.DSVendas.dto.SaleSuccessDTO;
import com.devsuperior.DSVendas.dto.SaleSumDTO;
import com.devsuperior.DSVendas.entities.Sale;

public interface SaleRepository extends JpaRepository<Sale, Long>{
	
	@Query("SELECT new com.devsuperior.DSVendas.dto.SaleSumDTO(obj.seller, SUM(obj.amount)) "
			+ "FROM Sale AS obj GROUP BY obj.seller ")
	List<SaleSumDTO> amountGoupedBySeller();
	
	@Query("SELECT new com.devsuperior.DSVendas.dto.SaleSuccessDTO(obj.seller, SUM(obj.visited), SUM(obj.deals)) "
			+ "FROM Sale AS obj GROUP BY obj.seller ")
	List<SaleSuccessDTO> successGoupedBySeller();
}
