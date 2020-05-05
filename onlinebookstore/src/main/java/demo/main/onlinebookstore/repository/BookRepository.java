package demo.main.onlinebookstore.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import demo.main.onlinebookstore.entity.Book;

public interface BookRepository extends JpaRepository<Book, Long>{

}
