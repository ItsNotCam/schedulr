var mongoose = require("mongoose");
var Promise = require("bluebird");
mongoose.Promise = Promise;

const tryConnect = async() => {
	try {
		if (process.env.MONGO_URI) {
			mongoose.connect(process.env.MONGO_URI, {
				useMongoClient: true
			});
		} else {
			throw("MONGO_URI not set");
		}
	} catch(e) {
		if(err.message.includes("ECONNREFUSED")) {
			console.log("Error: The server was not able to reach MongoDB. Maybe it's not running?");
		} else {
			console.error("Uncaught mongoose Error: ", err.message);
		}
	}

	const connected = await new Promise(resolve => {
		var db = mongoose.connection;
		db.on("error", async function (err) {
			if(err.message.includes("ECONNREFUSED")) {
				console.log("Error: The server was not able to reach MongoDB. Maybe it's not running?");
			} else {
				console.error("Uncaught mongoose Error: ", err.message);
			}
			try {
				await db.close();
			} catch (e) {
				console.log("Error closing:", e.message);
			}
			
			resolve(false);
		});
	
		db.once("open", function () {
			console.log("Mongoose connection successful.");
			resolve(true);
		});
		
		db.once("close", function () {
			console.log("Mongoose connection lost.");
			resolve(false);
		});
	})

	if(!connected) {
		setTimeout(tryConnect, 5000);
	}
}

tryConnect();