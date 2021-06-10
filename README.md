# backend-test

Build a REST API
Return a list of Top Posts ordered by their number of Comments.
Consume the API endpoints provided:

- comments endpoint – https://jsonplaceholder.typicode.com/comments
-  View Single Post endpoint – https://jsonplaceholder.typicode.com/posts/{post_id}
-  View All Posts endpoint – https://jsonplaceholder.typicode.com/posts
- The API response should have the following fields: 
	- post_id 
	- post_title
	- post_body 
	- total_number_of_comments
Search API Create an endpoint that allows a user to filter the comments based on all the available fields. Your solution needs to be scalable.
comments endpoint – https://jsonplaceholder.typicode.com/comments
Notes
Once completed, send us a screenshot of your api response for Question 1 & 2.
Make your repo public, and send us the link for us to review


Answer 1
node 001 Write to MYSQL
node 003 TotalComments

SQL
--
-- Table structure for table `authors`
--

CREATE TABLE `authors` (
  `id` int(11) NOT NULL,
  `name` varchar(50) DEFAULT NULL,
  `city` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `authors`
--

INSERT INTO `authors` (`id`, `name`, `city`) VALUES
(1, 'Michaela Lehr', 'Berlin'),
(2, 'Michael Wanyoike', 'Nairobi'),
(3, 'James Hibbard', 'Leipzig'),
(4, 'Karolina Gawron', 'Wrocław'),
(5, 'Craig Buckler', 'Exmouth'),
(6, 'Craig Buckler', 'Exmouth');

-- --------------------------------------------------------

--
-- Table structure for table `comments`
--

CREATE TABLE `comments` (
  `id` int(11) NOT NULL,
  `postId` int(11) NOT NULL,
  `name` mediumtext CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `email` varchar(50) NOT NULL,
  `body` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `posts`
--

CREATE TABLE `posts` (
  `id` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `title` varchar(100) NOT NULL,
  `body` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--

--
-- Indexes for table `authors`
--
ALTER TABLE `authors`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `authors`
--
ALTER TABLE `authors`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `comments`
--
ALTER TABLE `comments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=502;

--
-- AUTO_INCREMENT for table `posts`
--
ALTER TABLE `posts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=101;
COMMIT;


Answer 2
Download this from https://github.com/typicode/json-server
unzip and install it locally.
at terminal
json-server http://jsonplaceholder.typicode.com/db

at the browser
http://localhost:3000/posts?_embed=comments
