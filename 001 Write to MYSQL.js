// Read from https://jsonplaceholder.typicode.com/posts/
// Read from https://jsonplaceholder.typicode.com/commen

const fetch = require('node-fetch');
const axios = require('axios');

//let url = "https://www.reddit.com/r/popular.json";
let url = "https://jsonplaceholder.typicode.com/posts/";

const mysql = require('mysql');
const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'mysql',
  database: 'test002'
});

con.connect((err) => {
  if(err){
    console.log('Error connecting to Db');
    return;
  }
  console.log('Connection established');
});

con.query('SELECT * FROM posts', (err,rows) => {
  if(err) throw err;

  console.log('Posts received from Db:');
  console.log(rows);

    rows.forEach( (row) => {
    console.log(row.id);
  });


});



axios.get('https://jsonplaceholder.typicode.com/posts')
  .then(res => {
    const headerDate = res.headers && res.headers.date ? res.headers.date : 'no response date';
    console.log('Status Code:', res.status);
    console.log('Date in Response header:', headerDate);

    const posts = res.data;

    for(post of posts) {

		var i; //defines i
		//for (i = 0; i < 25; i++) { //starts loop
		  console.log("The post id Is:" + post.id ); //What ever you want

				const posts = { userId: post.userId, title: post.title, body: post.body };
				con.query('INSERT INTO posts SET ?', posts, (err, res) => {
				  if(err) throw err;

				  console.log('Last insert ID:', res.insertId);
				});

		//}; 

    }
  })
  .catch(err => {
    console.log('Error: ', err.message);
  });


con.query('SELECT * FROM comments', (err,rows) => {
  if(err) throw err;

  console.log('Comments received from Db:');
  console.log(rows);

    rows.forEach( (row) => {
    console.log(row.id + row.body);
  });


});


    // ======



axios.get('https://jsonplaceholder.typicode.com/comments')
  .then(res => {
    const headerDate = res.headers && res.headers.date ? res.headers.date : 'no response date';
    console.log('Status Code:', res.status);
    console.log('Comments in Response header:', headerDate);

    const comments = res.data;

    for(comment of comments) {


		  console.log("The Comment id Is:" + comment.id ); //What ever you want

				const comments = { postId: comment.postId, name: comment.name, email: comment.email, body: comment.body };
				con.query('INSERT INTO comments SET ?', comments, (err, res) => {
				  if(err) throw err;

				  console.log('Last insert ID:', res.insertId);
				});


    }
  })
  .catch(err => {
    console.log('Error: ', err.message);
  });




////con.end((err) => {
  // The connection is terminated gracefully
  // Ensures all remaining queries are executed
  // Then sends a quit packet to the MySQL server.
////});