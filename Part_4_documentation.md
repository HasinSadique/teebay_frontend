# teeBay V1.0 - Technical Documentation

## PART 1: Preliminary features


The preliminary features of this part were 
Sign up ( registration )
Sign in ( Login )

As the main goal of the project was not to make the login & registration fully secured, JSON Web Token ( JWT ) is not used. Rather a simple string matching is used here for the purpose. 

The registration page is created in reactJS using react Form. Once collecting the user detail information from frontend, a POST api with endpoint “/signup” is invoked and the information is passed to the server and later stored in PostgreSQL Database.

For authentication purpose the email and password of the user is asked in the frontend. Invoking the api with endpoint “/signin” and passing the data to backend server to cross reference with the users stored in the users table. Once the email and password matches the existing data in the users table, the UI is changed to homepage where all the added products of different users are displayed.

For the authentication purpose use the following:

ReactJS, React Form
NodeJS
PostgreSQL Database name: teeBay_DB, Table Name Users


## PART 2: Add, Edit & Delete a product

The primary objective of this application is for users to add a particular product for sell or for rent. The products are stored in Products_Table where PID is the primary key and ProductOwnerID, RentID is the foreign key.

For adding a product, the details are sent to the server using the api endpoint “/add-product” and later stored in the Products_table by using psql insert query.

For Editing a product, first the product is selected by the user and PID is used to retrieve the previous details of the product and displayed in the same form used to add the products. Later the details are updated using the Patch api which updates only the necessary information that are altered.

For deleting a product user has to first go to the details page of the product. A trash icon with text written “Delete Item” should be pressed which will retrieve the PID and invoke the DELETE api to delete the product row from the Products_Table.

## PART 3: Rent and buy/sell

As Rent, Buy/Sell is the main goal of this application, two new tables were formed Rent_Table, Buying_Table. The Rent_Table table has RentID as the primary key, OwnerID and RenterID as the foreign key. The Rent_Table table also contains From and To fields which store to and from dates and times according to rent option. 

The Buying_Table contains BuyingID as Primary key, SellerID and BuyerID as foreign key from Users table. Once a product is bought by pressing the buy button and confirming the action, the product is deleted from products_table and stored in Buying table.
The “My products” page shows all the added products, Sold products, Bought products, products on rent and borrowed products. These products are displayed in the UI using cards and the details are retrieved from the postgreSQL database using backend rest api endpoints.

Following is the ERD of the teeBay_DB database. Use this as a reference for the database.

![TeeBay_DB_ERD pgerd](https://user-images.githubusercontent.com/48351876/189159771-ec790873-0a8f-46eb-a90e-c0073243224b.png)





