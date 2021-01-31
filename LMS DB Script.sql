create database LMS;

use LMS;

create table users (
					username varchar(30) primary key,
					first_name varchar(30),
                    middle_name varchar(30),
                    last_name varchar(30),
					region varchar(30),
                    district varchar(30),
					street varchar(30),
                    ward varchar(30),
                    email varchar(30),
                    mobile_no int
				   );
                   
create table login (
					username varchar (30),
                    password varchar (30),
                    FOREIGN KEY (username) REFERENCES users(username)
                    );
                    
create table administrator (
							username varchar (30),
                            admin_ID int primary key,
                            date_employed date,
                            FOREIGN KEY (username) REFERENCES users(username)
                            );
                            
create table librarian (
						username varchar (30),
						librarian_ID int primary key,
                        date_employed date,
						FOREIGN KEY (username) REFERENCES users(username)                        
                        );
                        
create table library_member (
						username varchar (30),
						member_ID int primary key,
                        date_registered date,
                        expiry_date date,
                          FOREIGN KEY (username) REFERENCES users(username)                        
                        );                               

create table books (
					book_id int primary key,
                    book_title varchar (30),
                    author varchar(30),
                    book_availability varchar (20)
                    );
                    
create table payment (
						payment_id int primary key,
                        amount int,
                        date_paid date,
                        payment_purpose varchar (50)
					);
                    
create table admin_librarian (
								admin_id int,
                                librarian_id int,
                                PRIMARY KEY (admin_id, librarian_id),
								FOREIGN KEY (admin_id) REFERENCES administrator(admin_id),
                                FOREIGN KEY (librarian_id) REFERENCES librarian(librarian_id)
                                );
                                
create table librarian_member (
								member_id int,
                                librarian_id int,
                                PRIMARY KEY (member_id, librarian_id),
								FOREIGN KEY (member_id) REFERENCES library_member(member_id),
                                FOREIGN KEY (librarian_id) REFERENCES librarian(librarian_id)
                                );
                                
create table librarian_book (
								book_id int,
								librarian_id int,
                                PRIMARY KEY (book_id, librarian_id),
								FOREIGN KEY (book_id) REFERENCES books(book_id),
                                FOREIGN KEY (librarian_id) REFERENCES librarian(librarian_id)
                                );
		
create table member_payment (
								payment_id int,
                                member_id int,
                                PRIMARY KEY (payment_id, member_id),
								FOREIGN KEY (payment_id) REFERENCES payment(payment_id),
                                FOREIGN KEY (member_id) REFERENCES library_member(member_id)
                                );
                                
create table member_book (
						member_id int ,
                        book_id int ,
                        PRIMARY KEY (member_id, book_id),
                        FOREIGN KEY (member_id) REFERENCES library_member(member_id) 
                        );
                        

                    


                        
                    
