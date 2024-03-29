package com.sapo.mockproject.repository;

import com.sapo.mockproject.domain.Bill;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface BillRepository extends GenericRepository<Bill, Long> {

    @Override
    @Query("SELECT b FROM Bill b WHERE b.payment LIKE %?1% OR b.code LIKE %?1% OR b.description LIKE %?1%" +
            " OR b.createdBy LIKE %?1% OR b.modifiedBy LIKE %?1% ")
    Page<Bill> fetchByQuery(String query, Pageable pageable);

    @Override
    @Query("SELECT b FROM Bill b WHERE b.payment LIKE %?1% OR b.code LIKE %?1% OR b.description LIKE %?1%" +
            " OR b.createdBy LIKE %?1% OR b.modifiedBy LIKE %?1% ")
    List<Bill> fetchByQuery(String query);

    Optional<Bill> findByCode(String code);
}
