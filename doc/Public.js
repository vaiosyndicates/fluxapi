/**
 * @swagger
 * tags:
 *   name: Public
 *   description: Public managing API
 * /articles:
 *   get:
 *     summary: Get all articles which status already approve and not deleted.
 *     tags: [Public]
 *     responses:
 *       200:
 *         description: Success get articles.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 responseCode:
 *                  type: integer
 *                  example: 200
 *                 message:
 *                  type: string
 *                  example: success 
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
*                       _id:
 *                         type: string
 *                         description: The article ID.
 *                         example: 64e5f7847e55cbbd62b91a40
 *                       title:
 *                         type: string
 *                         description: The article title.
 *                         example: Lorem ipsum dolor
 *                       excerpt:
 *                         type: string
 *                         description: Article short intro.
 *                         example: Lorem ipsum dolor sit amet
 * /articles/tags:
 *   get:
 *     summary:   Retrieve articles by tags.
 *     tags: [Public]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               tag:
 *                 type: array
 *                 description: Article tag
 *                 example: [mountain, camp]
 *     responses:
 *       200:
 *         description: Success get article.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 responseCode:
 *                  type: integer
 *                  example: 200
 *                 message:
 *                  type: string
 *                  example: success 
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
*                       _id:
 *                         type: string
 *                         description: The article ID.
 *                         example: 64e5f7847e55cbbd62b91a40
 *                       idUser:
 *                         type: string
 *                         description: Author ID.
 *                         example: 64edf30020328cd4d456ab58
 *                       title:
 *                         type: string
 *                         description: Article title.
 *                         example: Lorem ipsum
 *                       excerpt:
 *                         type: string
 *                         description: Short intro of article.
 *                         example: Lorem ipsum dolor sit amet
 *                       body:
 *                         type: string
 *                         description: Article main article.
 *                         example: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
 *                       tag:
 *                         type: array
 *                         example: ["camping", "mountain", "survival"]
 *                       isDelete:
 *                         type: boolean
 *                         description: Post status if is delete or not.
 *                         example: false
 *                       isApprove:
 *                         type: boolean
 *                         description: User status
 *                         example: true
 *                       createdAt:
 *                         type: string
 *                         format: date
 *                         example: 2023-08-23T12:11:48.491Z
 *                       updatedAt:
 *                         type: string
 *                         format: date
 *                         example: 2023-08-23T12:11:48.491Z
 * /articles/{idarticle}:
 *   get:
 *     summary:   Get detail article by article id
 *     parameters:
 *       - in: path
 *         name: idarticle
 *         required: true
 *         description: Get detail of article by article ID.
 *         schema:
 *           type: string
 *     tags: [Public]
 *     responses:
 *       200:
 *         description: Success get article.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 responseCode:
 *                  type: integer
 *                  example: 200
 *                 message:
 *                  type: string
 *                  example: success 
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
*                       _id:
 *                         type: string
 *                         description: The article ID.
 *                         example: 64e5f7847e55cbbd62b91a40
 *                       idUser:
 *                         type: string
 *                         description: Author ID.
 *                         example: 64edf30020328cd4d456ab58
 *                       title:
 *                         type: string
 *                         description: Article title.
 *                         example: Lorem ipsum
 *                       excerpt:
 *                         type: string
 *                         description: Short intro of article.
 *                         example: Lorem ipsum dolor sit amet
 *                       body:
 *                         type: string
 *                         description: Article main article.
 *                         example: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
 *                       tag:
 *                         type: array
 *                         example: ["camping", "mountain", "survival"]
 *                       isDelete:
 *                         type: boolean
 *                         description: Post status if is delete or not.
 *                         example: false
 *                       isApprove:
 *                         type: boolean
 *                         description: User status
 *                         example: true
 *                       createdAt:
 *                         type: string
 *                         format: date
 *                         example: 2023-08-23T12:11:48.491Z
 *                       updatedAt:
 *                         type: string
 *                         format: date
 *                         example: 2023-08-23T12:11:48.491Z
 * /articles/startDate/{start}/endDate/{end}:
 *   get:
 *     summary: Get list of articles by date range and return data which created between {start} and {end} date
 *     parameters:
 *       - in: path
 *         name: start
 *         required: true
 *         description: Start date article ( Format YYYY-MM-DD)
 *         schema:
 *           type: string
 *       - in: path
 *         name: end
 *         required: true
 *         description: End date article ( Format YYYY-MM-DD)
 *         schema:
 *           type: string
 *     tags: [Public]
 *     responses:
 *       200:
 *         description: A list of transactions.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 responseCode:
 *                  type: integer
 *                  example: 200
 *                 message:
 *                  type: string
 *                  example: success
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       _id:
 *                         type: string
 *                         description: The article ID.
 *                         example: 64e5f7847e55cbbd62b91a40
 *                       title:
 *                         type: string
 *                         description: The title of article.
 *                         example: Lorem ipsum dolor
 *                       excerpt:
 *                         type: string
 *                         description: Short intro of article.
 *                         example: lorem ipsum dolor sit amet
 */