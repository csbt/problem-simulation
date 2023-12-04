# Concurrency control in DBMS.
refer: https://www.geeksforgeeks.org/concurrency-control-in-dbms/

## ACID:
**Atomicity**: The entire transaction takes place at once or doesn't happen at all.

**Consistency**: The database must be consistent before and after the transaction

**Isolation**: Multiple Transactions occur independently without interference. Each transaction should see the database in an independent state.

**Durability**: The changes of a successful transaction occurs even if the system failure occurs