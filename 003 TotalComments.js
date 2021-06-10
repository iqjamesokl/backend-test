// test004.js

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

/*
SELECT posts.id, posts.title, posts.body,
    ( SELECT COUNT(*) FROM comments c 
      WHERE c.postid = posts.id
    ) AS total_post_comments
FROM Posts

ALTER TABLE posts AUTO_INCREMENT = 1
ALTER TABLE comments AUTO_INCREMENT = 1
*/



// http://nodejs.org/docs/v0.6.5/api/fs.html#fs.writeFile
var fs = require('fs');



//con.query('select * from posts;', function(err, results, fields) {
con.query('SELECT posts.id, posts.title, posts.body,( SELECT COUNT(*) FROM comments c WHERE c.postid = posts.id) AS total_post_comments FROM Posts;', function(err, results, fields) {
    if(err) throw err;

    fs.writeFile('totalcomments.json', JSON.stringify(results), function (err) {
      if (err) throw err;
      console.log('Saved!');
    });

    con.end();
});




////con.end((err) => {
  // The connection is terminated gracefully
  // Ensures all remaining queries are executed
  // Then sends a quit packet to the MySQL server.
////});