class Database {
	constructor() {
	  this.data = {};
	  this.locks = {};
	}
  
	acquireLock(resource) {
	  return new Promise((resolve) => {
		const tryAcquire = () => {
		  if (!this.locks[resource]) {
			this.locks[resource] = true;
			resolve();
		  } else {
			setTimeout(tryAcquire, 100);
		  }
		};
  
		tryAcquire();
	  });
	}
  
	releaseLock(resource) {
	  this.locks[resource] = false;
	}
  
	readData(resource) {
	  console.log(`Reading data from ${resource}: ${this.data[resource]}`);
	}
  
	writeData(resource, value) {
	  console.log(`Writing data to ${resource}: ${value}`);
	  this.data[resource] = value;
	}
  
	async transaction(resource, transactionFunction) {
	  await this.acquireLock(resource);
  
	  try {
		await transactionFunction();
  
		this.releaseLock(resource);
	  } catch (error) {
		console.error(`Transaction failed: ${error.message}`);
		this.releaseLock(resource);
		throw error;
	  }
	}
  }
  
  
  const database = new Database();
  
  async function exampleTransaction() {
	await database.transaction("resource1", async () => {
	  database.readData("resource1");
	  await new Promise(resolve => setTimeout(resolve, 2000));
	  database.writeData("resource1", "New Value");
	});
  }
  
  exampleTransaction();
  exampleTransaction();
  