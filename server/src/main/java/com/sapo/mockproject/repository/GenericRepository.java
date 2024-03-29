package com.sapo.mockproject.repository;

import com.sapo.mockproject.domain.BaseDomain;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.NoRepositoryBean;

import java.util.List;

@NoRepositoryBean
public interface GenericRepository<T extends BaseDomain<ID>, ID extends Number> extends JpaRepository<T, ID> {

    @Query
    Page<T> fetchByQuery(String query, Pageable pageable);

    @Query
    List<T> fetchByQuery(String query);
}
