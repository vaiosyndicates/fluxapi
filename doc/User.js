/**
 * @swagger
 * components:
 *   securitySchemes:
 *     BearerAuth:
 *       type: http
 *       scheme: bearer  
 *       bearerFormat: JWT 
 */

/**
 * @swagger
 * tags:
 *   name: User
 *   description: Article managing API
 * /user/{iduser}/articles/all:
 *   get:
 *     security:
 *      -  security:
 *          - BearerAuth[]
 *     summary:   Get all post article by user id.
 *     parameters:
 *       - in: path
 *         name: iduser
 *         required: true
 *         description: ID of the active user / author.
 *         schema:
 *           type: string 
 *     tags: [User]
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
 * /user/{iduser}/articles/{idarticle}:
 *   get:
 *     security:
 *      -  security:
 *          - BearerAuth[]
 *     summary:   Get all post article by user id and article id
 *     parameters:
 *       - in: path
 *         name: iduser
 *         required: true
 *         description: ID of the active user / author.
 *         schema:
 *           type: string
 * 
 *       - in: path
 *         name: idarticle
 *         required: true
 *         description: ID of the article.
 *         schema:
 *           type: string
 *     tags: [User]
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
 *   delete:
 *     security:
 *      -  security:
 *          - BearerAuth[]
 *     summary:   Delete article by article id
 *     parameters:
 *       - in: path
 *         name: iduser
 *         required: true
 *         description: ID of the active user / author.
 *         schema:
 *           type: string
 * 
 *       - in: path
 *         name: idarticle
 *         required: true
 *         description: ID of the article.
 *         schema:
 *           type: string
 *     tags: [User]
 *     responses:
 *       200:
 *         description: Success delete article.
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
 *   put:
 *     security:
 *      -  security:
 *          - BearerAuth[]
 *     summary:   Update article by article id and active user
 *     parameters:
 *       - in: path
 *         name: iduser
 *         required: true
 *         description: ID of the active user / author.
 *         schema:
 *           type: string
 * 
 *       - in: path
 *         name: idarticle
 *         required: true
 *         description: ID of the article.
 *         schema:
 *           type: string
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: Article title
 *                 example: Lorem ipsum
 *               excerpt:
 *                 type: string
 *                 description: Article short intro
 *                 example: Lorem ipsum dolor sit amet
 *               body:
 *                 type: string
 *                 description: Main article
 *                 example: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
 *               tag:
 *                 type: array
 *                 example: ["camping", "mountain", "survival"]
 *     responses:
 *       200:
 *         description: Success delete article.
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
 * /user/{iduser}/tag/articles:
 *   get:
 *     security:
 *      -  security:
 *          - BearerAuth[]
 *     summary:   Get all post article by user id and article id
 *     parameters:
 *       - in: path
 *         name: iduser
 *         required: true
 *         description: ID of the active user / author.
 *         schema:
 *           type: string
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
 *     tags: [User]
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
 * /user/{iduser}/articles:
 *   post:
 *     security:
 *      -  security:
 *          - BearerAuth[]
 *     summary: Create article for authenticate member
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               idUser:
 *                 type: string
 *                 description: The id of active user
 *                 example: 64edf30020328cd4d456ab58
 *               title:
 *                 type: string
 *                 description: Article title
 *                 example: Lorem ipsum
 *               excerpt:
 *                 type: string
 *                 description: Article short intro
 *                 example: Lorem ipsum dolor sit amet
 *               body:
 *                 type: string
 *                 description: Main article
 *                 example: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
 *               tag:
 *                 type: array
 *                 example: ["camping", "mountain", "survival"]
 *     responses:
 *       200:
 *         description: Success Create.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 responseCode:
 *                  type: integer
 *                  example: 200
 *                 status:
 *                  type: string
 *                  example: success
* /user/{iduser}/trash/all:
 *   get:
 *     security:
 *      -  security:
 *          - BearerAuth[]
 *     summary:   Get all post in trash by user id / active user.
 *     parameters:
 *       - in: path
 *         name: iduser
 *         required: true
 *         description: ID of the active user / author.
 *         schema:
 *           type: string 
 *     tags: [User]
 *     responses:
 *       200:
 *         description: Success get all article in trash.
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
 *                       idArticle:
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
 *                       isDeleted:
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
 * /user/{iduser}/trash/{idtrash}/restore:
 *   put:
 *     security:
 *      -  security:
 *          - BearerAuth[]
 *     summary:   Restore article to post table and make flag deleted to false
 *     parameters:
 *       - in: path
 *         name: iduser
 *         required: true
 *         description: ID of the active user / author.
 *         schema:
 *           type: string
 * 
 *       - in: path
 *         name: idtrash
 *         required: true
 *         description: ID of the id trash.
 *         schema:
 *           type: string
 *     tags: [User]
 *     responses:
 *       200:
 *         description: Success restore article.
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
 *                  example: success restore
 */